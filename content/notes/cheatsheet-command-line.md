---
title: "Cheatsheet - Command Line"
date: 2025-09-24T09:00:00+05:30
draft: false
tags:
  - bash
  - command-line
  - linux
categories:
  - notes
---

## Cheatsheet - Command line

### The Art of Command line

This guide is for both beginners and experienced users, focusing on breadth, specificity, and brevity. Every tip is essential in some situation or significantly saves time. Written for Linux, it includes sections for macOS and Windows. The focus is on interactive Bash, though many tips apply to other shells and scripting. It includes both standard Unix commands and those requiring special package installs.

#### Basics

- **Bash Fundamentals**: Learn basic Bash by typing `man bash` and skimming it. Bash is powerful and always available.
- **Text Editors**: Learn at least one text-based editor well, such as `nano` for simplicity or `vim` for power users.
- **Documentation**: Use `man` for official documentation and `apropos` to find man pages. Know about Bash built-ins and use `help` and `help -d` for help.
- **Shell Features**: Learn about redirection (`>`, `>>`, `<`), pipes (`|`), and file glob expansion (`*`, `?`, `[ ]`).
- **Job Management**: Be familiar with Bash job management (`&`, `ctrl-z`, `ctrl-c`, `jobs`, `fg`, `bg`, `kill`).
- **SSH**: Know `ssh` and passwordless authentication via `ssh-agent` and `ssh-add`.
- **File Management**: `ls`, `less`, `head`, `tail`, `ln`, `chown`, `chmod`, `du`, `df`, `mount`, `fdisk`, `mkfs`, `lsblk`.
- **Network Management**: `ip` or `ifconfig`, `dig`, `traceroute`, `route`.
- **Version Control**: Use a version control system like `git`.
- **Regular Expressions**: Know regular expressions and `grep` options (`-i`, `-o`, `-v`, `-A`, `-B`, `-C`).
- **Package Management**: Use `apt-get`, `yum`, `dnf`, or `pacman` to install packages and `pip` for Python-based tools.

#### Everyday Use

- **Command Line Navigation**:
    - **Tab** for command completion.
    - **ctrl-r** for command history search.
    - **ctrl-w** to delete the last word.
    - **ctrl-u** to delete from the cursor to the start of the line.
    - **alt-b** and **alt-f** to move by word.
    - **ctrl-a** to move to the start of the line.
    - **ctrl-e** to the end.
    - **ctrl-k** to kill to the end of the line.
    - **ctrl-l** to clear the screen.
- **Editing Commands**: For editing long commands, use **ctrl-x ctrl-e** to open the current command in an editor.
- **Command History**: Use `history` to see recent commands and `!n` to execute again.
- **Process Management**:
    - `xargs` for powerful command-line processing.
    - `pstree -p` for process tree display.
    - `pgrep` and `pkill` to find or signal processes by name.
    - `nohup` or `disown` for background processes to run forever.
    - `netstat -lntp` or `ss -plat` to see listening processes.
- **Shell Customization**:
    - `alias` to create shortcuts for commands and save them in `~/.bashrc`.
    - `~/.bash_profile` for environment variables and login commands.
    - Synchronize configuration files with Git.
- **Scripting Best Practices**:
    - Handle whitespace in variables and filenames carefully.
    - Use `set -x` for debugging output.
    - Use strict modes (`set -e`, `set -u`, `set -o pipefail`) for error handling.
- **Advanced Shell Features**:
    - Use subshells for temporary directory changes.
    - Use variable expansion, brace expansion, and process substitution.
- **Session Management**: Use `screen` or `tmux` for screen multiplexing and session persistence.
- **SSH Optimization**: Optimize SSH configuration for better performance and security.

#### Processing Files and Data

- **File Finding**: Use `find` and `locate` to find files.
- **Advanced Searching**: Use `ack`, `ag`, or `rg` for advanced searching.
- **Document Conversion**: Use `pandoc` for document conversion and `xmlstarlet` for XML.
- **Structured Data**: Use `jq` for JSON and `csvkit` for CSV files.
- **Text Manipulation**: Use `sort` and `uniq` for text file manipulation.
- **Data Munging**: Use `awk` and `sed` for simple data munging.
- **File Copying**: Use `rsync` for fast and versatile file copying.
- **Progress Monitoring**: Use `pv` or `dd status=progress` for monitoring file processing.
- **Randomization**: Use `shuf` to shuffle or select random lines from a file.
- **File Splitting**: Use `split` and `csplit` for splitting files.
- **Encoding Conversion**: Use `iconv` or `uconv` for text encoding conversion.
- **File Attributes/Permissions**: Use `chattr` for file attributes and `getfacl`/`setfacl` for file permissions.

#### System Debugging

- **Web Debugging**: Use `curl` and `httpie` for web debugging.
- **System Status**:
    - `top`, `htop`, `iostat`, and `iotop` for CPU and disk status.
    - `netstat` and `ss` for network connection details.
    - `dstat` and `glances` for system overviews.
    - `free` and `vmstat` for memory status.
- **Network Issues**: Use `mtr` for network issues and `ncdu` for disk usage.
- **Bandwidth Usage**: Use `iftop` or `nethogs` for bandwidth usage.
- **System Call Debugging**: Use `strace` and `ltrace` for system call debugging.
- **Live Problem Debugging**: Use `/proc` for live problem debugging.
- **Historic Statistics**: Use `sar` for historic system statistics.
- **Deeper Analysis**: Use `stap`, `perf`, and `sysdig` for deeper system analyses.

#### One-liners

- **Text File Operations**: Use `sort` and `uniq` for set operations on text files.
- **JSON Processing**: Use `jq` for JSON pretty-printing and comparison.
- **File Examination**: Use `grep` and `head` to quickly examine file contents.
- **Summing Numbers**: Use `awk` for summing numbers in a text file.
- **Recursive Listing**: Use `find` for recursive file listing.
- **Tallying Values**: Use `egrep` and `sort` for tallying values in a text file.
- **Continuous Monitoring**: Use `watch` to monitor changes continuously.

#### Obscure but Useful

- **Arithmetic/Boolean**: `expr`
- **Macro Processing**: `m4`
- **Repetitive Printing**: `yes`
- **Calendar**: `cal`
- **Running Commands**: `env`
- **Data Manipulation**: `cut`, `paste`, `join`
- **Text Formatting**: `fmt`, `pr`, `fold`
- **Tab/Space Conversion**: `expand`, `unexpand`
- **Line Numbering**: `nl`
- **Number Printing**: `seq`
- **Calculations**: `bc`
- **Integer Factorization**: `factor`
- **Encryption/Signing**: `gpg`
- **Network Debugging/Transfer**: `nc`, `socat`
- **Data Moving**: `dd`
- **File Type Identification**: `file`
- **Directory Display**: `tree`
- **File Info**: `stat`
- **Command Timing**: `time`
- **Command Execution Limits**: `timeout`
- **Semaphore Files**: `lockfile`
- **Log Management**: `logrotate`
- **Repeated Command Execution**: `watch`
- **File Change Monitoring**: `when-changed`
- **Reverse File Printing**: `tac`
- **File Comparison**: `comm`
- **Text Extraction**: `strings`
- **Character Translation**: `tr`
- **Text Encoding Conversion**: `iconv`, `uconv`
- **File Splitting**: `split`, `csplit`
- **Read/Write Same File**: `sponge`
- **Unit Conversions**: `units`
- **Password Generation**: `apg`
- **File Compression**: `xz`
- **Dynamic Library Info**: `ldd`
- **Symbol Extraction**: `nm`
- **Web Server Benchmarking**: `ab`, `wrk`
- **System Call Debugging**: `strace`
- **Network Debugging**: `mtr`
- **Concurrent Shell**: `cssh`
- **File Synchronization**: `rsync`
- **Packet Capture**: `wireshark`, `tshark`
- **Network Layer Grep**: `ngrep`
- **DNS Lookups**: `host`, `dig`
- **Process File Descriptors**: `lsof`
- **System Statistics**: `dstat`, `glances`
- **Disk Usage Stats**: `iostat`
- **CPU Usage Stats**: `mpstat`
- **Memory Usage Stats**: `vmstat`
- **Improved Top**: `htop`
- **Login History**: `last`
- **Logged-on Users**: `w`
- **User/Group Identity**: `id`
- **Historic System Stats**: `sar`
- **Network Utilization**: `iftop`, `nethogs`
- **Socket Statistics**: `ss`
- **Boot/System Error Messages**: `dmesg`
- **Kernel Parameters**: `sysctl`
- **Disk Manipulation**: `hdparm`
- **Block Device Listing**: `lsblk`
- **Hardware Info**: `lshw`, `lscpu`, `lspci`, `lsusb`, `dmidecode`
- **Kernel Module Info**: `lsmod`, `modinfo`
- **Fun**: `fortune`, `ddate`, `sl`

#### macOS only

- **Package Management**: Use `brew` or `port`.
- **Clipboard Operations**: Use `pbcopy` and `pbpaste`.
- **Terminal Configuration**: Enable the Option key in Terminal for alt key functionality.
- **Opening Files**: Use `open` to open files with desktop apps.
- **File Searching**: Use `mdfind` for file searching and `mdls` for metadata listing.
- **BSD Unix Differences**: Be aware of BSD Unix differences and use `sw_vers` for release info.

#### Windows only

- **Unix Tools**: Use Cygwin, WSL, MinGW, or Cash for Unix tools.
- **System Administration**: Use `wmic`.
- **Networking**: `ping`, `ipconfig`, `tracert`, `netstat`.
- **Windows Tasks**: Use `Rundll32` for various Windows tasks.
- **Command-line Window**: Use `mintty`.
- **Opening Files**: Use `cygstart` to open files.
- **Windows Registry**: Use `regtool` for Windows registry access.
- **Path Conversion**: Use `cygpath` for path conversion.

---

*Adapted from [The Art of Command Line](https://github.com/jlevy/the-art-of-command-line) (MIT licensed), with personal notes added.*

Related notes:
