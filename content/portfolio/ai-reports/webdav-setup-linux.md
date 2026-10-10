---
title: "WebDAV Setup on Linux"
date: 2026-02-25T09:00:00+05:30
description: "Step-by-step instructions for configuring a secure WebDAV server with Apache and Tailscale on Linux."
draft: false
tags: ["webdav", "apache", "tailscale", "linux"]
portfolio_types: ["Report"]
featured_image: "/images/dashboard/logo.jpg"
featured_image_alt: "Abstract cover image for WebDAV setup guide"
gallery: []
---

## **Concise Guide: Secure Webdav with Apache & Tailscale on Kubuntu**

This guide outlines the definitive steps to configure an Apache WebDAV server on a Linux machine. It provides access to a directory via the local network (over HTTP on port `8080`) and securely over the internet via Tailscale (over HTTPS on port `443`).

-----

### **Step 1: Prerequisites & Initial Setup**

First, ensure the necessary Apache modules are enabled and create the required directories and authentication files.

1. **Enable Apache Modules:**

```bash
sudo a2enmod dav dav_fs auth_basic ssl headers
```

2. **Create WebDAV Lock Directory:** WebDAV requires a directory for lock files that is writable by the Apache user (`www-data`).

```bash
sudo mkdir -p /var/lib/dav
sudo chown -R www-data:www-data /var/lib/dav
```

3. **Create WebDAV User & Password:** Set up the credentials for accessing the WebDAV share. Replace `YOUR_USER` with your desired username.

```bash
sudo htpasswd -c /etc/apache2/webdav.passwd YOUR_USER
```

4. **Tell Apache to Listen on Port 8080:** Add the port for LAN access to your Apache configuration.

```bash
grep -q 'Listen 8080' /etc/apache2/ports.conf || echo 'Listen 8080' | sudo tee -a /etc/apache2/ports.conf
```

-----

### **Step 2: Set Filesystem Permissions (ACLs)**

This was the critical step to resolve the `403 Forbidden` errors. Apache, as the `www-data` user, needs permission to access your target directory (e.g., `/media/kabirchugh/data`). Using Access Control Lists (ACLs) is the best method for `ext4` filesystems as it doesn't change the base ownership.

1. **Install ACL tools** (if not already present):

```bash
sudo apt update && sudo apt install acl
```

2. **Grant Permissions:** Allow `www-data` to traverse the parent directories and have full access to the target data directory.

```bash
# Allow traversal of /media and /media/kabirchugh
sudo setfacl -m u:www-data:rx /media
sudo setfacl -m u:www-data:rx /media/kabirchugh

# Grant recursive read/write/execute access to the data directory
sudo setfacl -R -m u:www-data:rwx /media/kabirchugh/data
sudo setfacl -d -R -m u:www-data:rwx /media/kabirchugh/data
```

3. **Verify Access:** Confirm the `www-data` user can now access the directory. The following command should succeed without a "Permission denied" error.

```bash
sudo -u www-data touch /media/kabirchugh/data/.dav_test && echo "Permissions are OK" && sudo rm /media/kabirchugh/data/.dav_test
```

-----

### **Step 3: Configure Apache Virtual Hosts**

Create two separate configuration files: one for unencrypted LAN access and one for encrypted Tailscale access.

1. **LAN vHost (`:8080`):** Create the file `/etc/apache2/sites-available/webdav-lan.conf`.

```apache
    <VirtualHost *:8080>
        ServerName laptop.local
        DavLockDB /var/lib/dav/lockdb
        Alias /dav /media/kabirchugh/data

        <Directory "/media/kabirchugh/data">
            Options Indexes
            AllowOverride None
            Require all granted
        </Directory>

        <Location /dav>
            DAV On
            AuthType Basic
            AuthName "WebDAV"
            AuthUserFile /etc/apache2/webdav.passwd
            Require valid-user
        </Location>
    </VirtualHost>
```

2. **Tailscale vHost (`:443`):** Create the file `/etc/apache2/sites-available/webdav-tailscale.conf`. Replace `kabir-thinkpad-linux.tailf96ca8.ts.net` with your machine's actual Tailscale FQDN.

```apache
    <VirtualHost *:443>
        ServerName kabir-thinkpad-linux.tailf96ca8.ts.net
        SSLEngine on
        SSLCertificateFile /var/lib/tailscale/certs/kabir-thinkpad-linux.tailf96ca8.ts.net.crt
        SSLCertificateKeyFile /var/lib/tailscale/certs/kabir-thinkpad-linux.tailf96ca8.ts.net.key
        Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"

        DavLockDB /var/lib/dav/lockdb
        Alias /dav /media/kabirchugh/data

        <Directory "/media/kabirchugh/data">
            Options Indexes
            AllowOverride None
            Require all granted
        </Directory>

        <Location /dav>
            DAV On
            AuthType Basic
            AuthName "WebDAV"
            AuthUserFile /etc/apache2/webdav.passwd
            Require valid-user
        </Location>
    </VirtualHost>
```

3. **Get Tailscale Certificate & Enable Sites:**

```bash
# Fetch the TLS certificate for your Tailscale machine name
sudo tailscale cert kabir-thinkpad-linux.tailf96ca8.ts.net

# Enable the new sites and reload Apache
sudo a2ensite webdav-lan.conf webdav-tailscale.conf
sudo systemctl reload apache2
```

-----

### **Step 4: Configure Firewall (UFW)**

Ensure your firewall allows traffic to the correct ports on the correct interfaces.

```bash
# Allow WebDAV on LAN (interface wlp3s0, port 8080)
sudo ufw allow in on wlp3s0 proto tcp from 192.168.1.0/24 to any port 8080

# Allow WebDAV over Tailscale (interface tailscale0, port 443)
sudo ufw allow in on tailscale0 proto tcp to any port 443

# Verify rules
sudo ufw status numbered
```

-----

### **Step 5: Final Verification**

Test that both endpoints are working correctly.

1. **LAN Access Test:**

```bash
# This should return a 401 Unauthorized (challenge)
curl -I http://laptop.local:8080/dav/

# This should return a 200 OK (successful authentication)
curl -I -u YOUR_USER:'YOUR_PASSWORD' http://laptop.local:8080/dav/
```

2. **Tailscale Access Test:**

```bash
# This should return a 401 Unauthorized (challenge)
curl -I https://kabir-thinkpad-linux.tailf96ca8.ts.net/dav/

# This should return a 200 OK (successful authentication)
curl -I -u YOUR_USER:'YOUR_PASSWORD' https://kabir-thinkpad-linux.tailf96ca8.ts.net/dav/
```

3. **File Upload Test:**

```bash
# Upload a test file over the LAN
curl -u YOUR_USER:'YOUR_PASSWORD' -T /etc/hosts http://laptop.local:8080/dav/hosts.upload.test

# Verify the file exists
ls -l /media/kabirchugh/data/hosts.upload.test
```

Your WebDAV server is now correctly configured and secured. You can connect to it from any device on your LAN or your Tailscale network.
