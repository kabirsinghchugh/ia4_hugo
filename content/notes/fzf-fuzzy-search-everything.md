---
title: "fzf-fuzzy-search-everything"
date: 2026-02-15T12:05:31+05:30
tags:
  - cli
  - productivity
categories:
  - notes

---

## Fzf: Fuzzy search Anything, Interactively

Fzf transforms terminal lists into a live, interactive search box.

### Installation

Install Fzf using your system's package manager:

- **Debian/Ubuntu:**

  ```bash
  sudo apt install fzf
  ```

- **macOS:**

  ```bash
  brew install fzf
  ```

### Basic Usage

To use Fzf, pipe any list of items to it. For example, to interactively search through files in the current directory:

```bash
ls | fzf
```

This will present an interactive menu where you can type part of a filename and hit Enter to select it.

### Advanced Examples

#### Search Files in a Directory Tree

Find and interactively select files within a directory and its subdirectories:

```bash
find . -type f | fzf
```

#### Search Command History

Browse and select from your command history:

```bash
history | fzf
```

#### Preview Mode

Enhance your search with a preview pane. This example shows the first 20 lines of a selected file:

```bash
find . -type f | fzf --preview 'head -n 20 {}'
```

#### Shell Integration (Power Move)

Integrate Fzf into your shell for convenient shortcuts. Add the following to your `.bashrc` or `.zshrc` file:

```bash
# CTRL+R for fuzzy history search
eval "$(fzf --bash)"
```

This enables `CTRL+R` to perform a fuzzy search on your command history. Fzf also provides other keybindings for various shell integrations.

Related notes:



