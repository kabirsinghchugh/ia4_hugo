---
title: "Gemini CLI Cheatsheet"
date: 2025-09-25T09:00:00+05:30
draft: false
tags:
  - gemini
  - cli
  - ai
  - productivity
categories:
  - notes
---

## Gemini CLI Cheatsheet

### Common Natural Language Tasks

| Task Type          | Example Prompt                                                                                                                                                                                          |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Explore codebase   | Describe the main pieces of this system's architecture.<br>What security mechanisms are in place?                                                                                                       |
| Issue/Code Work    | Implement a first draft for GitHub issue.<br>Help me migrate this codebase to the latest version of Java. Start with a plan.                                                                            |
| Automate Workflows | Make me a slide deck showing the git history from the last 7 days, grouped by feature and team member.<br>Make a full-screen web app for a wall display to show our most interacted-with GitHub issues. |
| System Interaction | Convert all the images in this directory to png, and rename them to use dates from the exif data.<br>Organise my PDF invoices by month of expenditure.                                                  |

---

### Slash Commands (/)

| Command | Description | Usage / Notes |
|---|---|---|
| `/bug` | File an issue about Gemini CLI. | `/bug <headline>` |
| `/chat` | Save/resume conversation history for branching or restoring state. | Subcommands: `save <tag>`, `resume <tag>`, `list` |
| `/clear` | Clear terminal screen and visible session history. | Keyboard: `Ctrl+L` |
| `/compress` | Replace chat context with a summary to save tokens. | |
| `/editor` | Open a dialog for selecting supported editors. | |
| `/help` `/?)` | Display help information about commands and usage. | |
| `/mcp` | List MCP servers, status, server details, available tools. | Sub: `desc`, `nodesc`, `schema`; `Ctrl+T` toggles descriptions |
| `/memory` | Manage the AI's instructional context (GEMINI.md files). | `add <text>`, `show`, `refresh` |
| `/restore` | Restore project files to state before tool execution. | `/restore [tool_call_id]` |
| `/stats` | Display session stats (tokens, session duration, etc.). | |
| `/theme` | Change the visual theme of Gemini CLI. | |
| `/auth` | Change authentication method. | |
| `/about` | Show version info. | |
| `/tools` | List currently available tools. | Sub: `desc`, `nodesc` |
| `/quit` `/exit` | Exit Gemini CLI. | |

---

### At Commands (@)

| Command | Description | Usage / Example |
|---|---|---|
| `@<path>` | Inject file/directory content into your prompt; git-ignored files excluded by default. | `@src/ Summarise code in this directory.`<br>`@README.md` |
| `@` (lone symbol) | Send prompt as-is, useful for talking about @ symbol itself. | `What does @ mean?` |
| **Notes:** | Reads text files. Escaped spaces in paths. Uses `read_many_files` internally; may skip large/binary files. | |

---

### Shell Commands (!)

| Command | Description | Example |
|---|---|---|
| `!<command>` | Execute `<command>` in system shell. Output/errors shown in CLI. | `!ls -la`, `!git status` |
| `!` (toggle mode) | Enter/exit Shell Mode—interpret all input as shell commands until exited. | Type `!` alone to toggle. |
| **Caution:** | Commands have full terminal permissions—use responsibly. | |

---

### Mcp Server Setup (GitHub Example)

| Step | Command/Instruction |
|---|---|
| Docker | Install and run Docker. |
| GitHub PAT | Create classic or fine-grained token with necessary scopes. |
| Configure | Add to `.gemini/settings.json`:<br>```json<br>{ "mcpServers": { "github": { "command": "docker", "args": ["run", "-i", "--rm", "-e", "GITHUB_PERSONAL_ACCESS_TOKEN", "ghcr.io/github/github-mcp-server"], "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "${GITHUB_PERSONAL_ACCESS_TOKEN}" } } } }<br>``` |
| Set token | `export GITHUB_PERSONAL_ACCESS_TOKEN="pat_YourActualGitHubTokenHere"` |
| Verify | Launch Gemini CLI; it will read config and start the GitHub MCP server in background. |

Related notes:
