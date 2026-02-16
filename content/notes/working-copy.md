---
title: "Working Copy"
date: 2026-02-15T12:14:31+05:30
tags:
  - utility
  - productivity
  - app
  - git
categories:
  - notes

---

## Working Copy – Essential Guide

### 1. Core Operations

- **Clone a repo** – Tap the **+** button on the repository list.  
- **Custom URLs** – Paste any Git URL (HTTPS or SSH) into the top field if the hosting provider isn't listed.  
- **Import repos** – Copy a folder into Working Copy's Files‑app location. If the folder lacks a `.git` directory, Working Copy will initialise a new repository.  
- **File handling** –  
  - Copy via tap‑and‑hold context menu.  
  - Move by dragging items within directory listings.  
- **Changes view** – Additions appear in green, deletions in red.  
- **SSH setup** – On Linux/BSD/Synology servers, add your public key to `$HOME/.ssh/authorized_keys`. SSH is the default protocol when no scheme is specified.  
- **Files app integration** – Enable Working Copy as a _Location_ in the Files app; use iPad Split View for smoother multitasking.  

### 2. Recommended Editors

| Editor                                  | Strengths                                                    |
| --------------------------------------- | ------------------------------------------------------------ |
| **Textastic**                           | General‑purpose code editor; full folder‑level access, works seamlessly with Working Copy. |
| **iA Writer**, **Ulysses**, **1Writer** | Markdown‑focused; in‑place editing of files stored in Working Copy. |
| **Other editors**                       | Any app that supports file references can edit files directly inside the repository. |

### 3. Adding & Managing Content

- Drag files/folders from Mail, the Files app, or other sources into Working Copy.  
- Overwrite of already‑committed files happens automatically; you can revert to previous versions at any time.  
- Zip archives can be dropped in; they decompress automatically.  
- Exporting: dragging a file out of Working Copy adapts to the target app (e.g., attach to email, save to Files).  

---

## Obsidian‑Specific Integration

- Some apps cannot open files **in‑place** but can link to them via iCloud Drive or "On My Device" storage.  
- **Link external directories** to Working Copy to gain Git version control while editing in those apps.  
- Linked external repositories behave like normal repos inside Working Copy; changes sync instantly.  
- Needed for document packages (e.g., Swift Playgrounds, Codea) that iOS treats as special bundles.  
- **Folder‑level access** is required—most cloud providers only expose file‑level access, so linking is essential.  
- If the linked folder lacks a `.git` directory, Working Copy creates one internally to avoid confusion.  
- Convert a regular repo to a linked external repo via the configuration menu.  
- **Pro unlock** (purchased/updated after September 2020) is required for this feature.  

Supported apps: Codea, iA Writer, Obsidian, Scriptable, Swift Playgrounds (note: some apps may misbehave if files change while open).  

_Reference_: Megan Sullivan's blog post on syncing Obsidian vaults with Working Copy and Shortcuts.  

---

## Notable Insights

- **SSH URLs** without an explicit scheme default to SSH, simplifying cloning.  
- Automatic overwriting of committed files streamlines the workflow and reduces manual conflict resolution.  
- Linked external repositories provide seamless Git integration for apps lacking native Git support, but they depend on folder‑level access—often unavailable from major cloud storage services.  
- The linking feature is gated behind the recent Pro upgrade, limiting access for some users.

Related notes:
