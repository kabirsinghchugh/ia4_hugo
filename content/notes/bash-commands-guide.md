---
title: "Bash Commands Guide"
date: 2025-10-16T09:00:00+05:30
draft: false
tags:
  - bash
  - command-line
  - linux
  - productivity
categories:
  - notes
---

## Bash Commands Guide

### You

>Provide me a thorough getting started guide on useful shell (Bash) commands and operations which would save me a lot of time rather than repeated commands and flows. Expect a complete beginner. This includes quick editing of text files, file and folder operations, and saving outputs to files etc. Some important commands being touch,source,grep,cat,bat,fzf,nvim,nano and then things like && and piping for flows etc and many other useful things which I have missed out

---

## 0) One-time Set-up for a Smoother Shell

```bash
# Put these in ~/.bashrc (Linux/macOS) and then `source ~/.bashrc`
export EDITOR="nvim"         # or nano
export VISUAL="$EDITOR"
export PAGER="less -R"       # -R to pass through colours
```

Then reload your shell:

```bash
source ~/.bashrc
```

Use `source` to re-read your current shell config after edits. Running a file _without_ `source` creates a subshell, so it won't update your current environment.

## Files and Folders You'll touch Constantly

Navigation should be muscle memory.

```bash
pwd                       # print working dir
ls -lah                   # list with sizes, hidden files, human units
cd -                      # jump back to previous dir
cd ~/work/project         # ~ is your home
mkdir -p data/raw         # create nested dirs if missing
touch notes/todo.md       # make an empty file or update its mtime
cp -r src/ src_backup/    # copy directories
mv draft.txt notes/       # move/rename
rm -i file                # interactive delete (safer)
rm -rI big_dir/           # recursive delete; -I prompts once if >3 files
```

## 2) Viewing and Quick Editing (nano, Nvim, Cat, bat)

Fast reads first; edit only if needed.

```bash
bat -n README.md          # line numbers; colours
bat -p file               # "plain" (no grid)
head -n 20 file           # first lines
tail -f app.log           # follow logs
less file                 # page through large files (q to quit)
```

Two editors to know:

- `nano file`: simple, shows shortcuts at the bottom.
- `nvim file`: powerful; worth learning motions and `:wq`, `:q!`.

Micro-edits without opening an editor:

```bash
# Replace "foo" with "bar" in-place (BSD/macOS use `-i ''`)
sed -i 's/foo/bar/g' file.txt

# Insert a header at the top of a file
printf "Title: Notes\n\n" | cat - file.txt > file.tmp && mv file.tmp file.txt
```

Create files quickly with a here-doc:

```bash
cat > script.sh <<'SH'
#!/usr/bin/env bash
set -euo pipefail
echo "Hello"
SH
chmod +x script.sh
```

## 3) Search: Grep, Ripgrep, Find, and Fzf

Start with ripgrep for code/content, fall back to find for metadata.

```bash
rg "needle"               # search recursively with smart defaults
rg -n "pattern" src/      # show line numbers, restrict to dir
rg -i "case-insensitive"  # ignore case
rg -g '!*.min.js' foo     # glob include/exclude

grep -Rin "pattern" .     # classic grep variant (slower defaults)
```

Find by name, type, age:

```bash
find . -type f -name "*.csv"
find . -type f -mtime -1 -size +10M
find . -type d -name ".git"
```

Combine `find` with `-print0 | xargs -0` to handle spaces safely:

```bash
find . -type f -name "*.tmp" -print0 | xargs -0 rm -v
```

Interactive fuzzy picking with preview:

```bash
# Pick a file and open in $EDITOR, with a bat preview
fzf --preview 'bat --style=numbers --color=always {}' --bind 'enter:execute($EDITOR {})'
```

Supercharge history with fzf (enable fzf's key-bindings, then):

- `Ctrl-R`: fuzzy search your command history.
- `Ctrl-T`: fuzzy insert a filepath at the cursor.

## 4) Redirection, Pipes, and Tees (flows You'll Use All day)

Understand where output goes:

```bash
cmd > out.txt             # stdout to file
cmd >> out.txt            # append
cmd 2> err.txt            # stderr to file
cmd > all.txt 2>&1        # merge stderr into stdout
```

Compose tools with pipes:

```bash
journalctl -u nginx | rg -i error | tee errors.log
```

`tee` lets you see output _and_ save it.  
Here-strings and process substitution save time:

```bash
wc -w <<< "count these words"          # here-string → stdin
diff <(sort a.txt) <(sort b.txt)       # compare sorted views without temp files
```

## 5) Chaining, Conditionals, and Grouping

Use the right separator:

```bash
make ; notify-send "done"      # run second regardless of first
make && echo "OK"              # run second only if first succeeds
tests || echo "failed"         # run second only if first fails
```

Group commands and control scope:

```bash
{ cd src && make && cd -; }    # run a block; current shell
( cd tmp && do_things )        # subshell; cwd outside stays unchanged
```

Command substitution and arithmetic:

```bash
echo "Today is $(date +%F)"
echo $(( 3 * (2 + 1) ))
```

Brace expansion for quick sweeps:

```bash
touch note_{1..5}.md
mv image.{png,jpg} 2>/dev/null   # attempt rename; ignore errors
```

## 6) Variables, Environment, and `source`

Temporary env for a single command:

```bash
FOO=bar myprog --flag
```

Persist for this shell:

```bash
export PATH="$HOME/.local/bin:$PATH"
```

Reload config after edits:

```bash
source ~/.bashrc
```

Source project envs (e.g., Python venv):

```bash
source .venv/bin/activate
```

Remember: `source script.sh` runs in your _current_ shell; `./script.sh` runs in a _child_ shell.

## 7) Loops and Batch Operations without Leaving the Shell

Pattern: "enumerate → filter → act".

```bash
# Rename spaces to underscores safely
find . -type f -name "* *" -print0 | while IFS= read -r -d '' f; do
  mv -- "$f" "${f// /_}"
done

# Convert .csv → .tsv in bulk
for f in *.csv; do
  [ -e "$f" ] || continue
  tr , '\t' < "$f" > "${f%.csv}.tsv"
done
```

Line-wise processing:

```bash
# Feed a list to a command in parallel batches (GNU xargs)
rg -l "TODO" | xargs -r -n1 -P4 sed -i 's/TODO/DONE/g'
```

## 8) Permissions, Executables, and Ownership

Know the basics:

```bash
chmod +x script.sh         # make executable
chmod 640 file             # rw-r----- (owner/group/others)
chown user:group file
umask                      # default permission mask for new files
```

Shebang matters:

```bash
#!/usr/bin/env bash
```

## 9) Archiving, Transfer, and Disk Hygiene

Compress and extract:

```bash
tar -czf site.tar.gz public/
tar -xzf site.tar.gz -C /tmp/extract_here
```

Sync folders efficiently and resumably:

```bash
rsync -avh --progress src/ user@host:/path/
```

One-off copies:

```bash
scp file user@host:/path/
```

Space checks:

```bash
du -sh ./*                 # sizes of items in current dir
df -h                      # free/used space per filesystem
```

## 10) System and Process Quick Wins

Find and manage processes:

```bash
ps aux | rg appname
pgrep -fl appname          # show matching processes
pkill -f appname           # kill by name (careful)
```

Open files on a port:

```bash
lsof -i :8080              # which process binds 8080
```

Watch a command refresh:

```bash
watch -n 2 'df -h'
```

## 11) History Power Moves (with and without fzf)

The basics:

```bash
history                    # show history
!42                        # run entry 42
!!                         # rerun previous command
sudo !!                    # rerun previous with sudo
```

Fast substitution on the last command:

```bash
!!:s/old/new/              # rerun last with a quick replacement
```

If `fzf` key-bindings are installed:

- `Ctrl-R` → fuzzy search history with live preview.
- `Ctrl-T` → fuzzy pick a file to insert at the cursor.

## 12) Aliases and Functions that save Hours

Start tiny, iterate.

```bash
# ~/.bashrc
alias ll='ls -lah'
alias gs='git status -sb'
alias cat='bat -pp'            # make cat pretty; drop if scripting

# Open a fuzzy-picked file in $EDITOR with preview
ff() { local f
  f=$(fzf --preview 'bat --style=numbers --color=always {}') || return
  "$EDITOR" "$f"
}

# Grep for a pattern across project, ignore common junk
gr() { rg -n --hidden --glob '!.git' "$@"; }
```

Reload to activate:

```bash
source ~/.bashrc
```

## 13) Writing Tiny, Robust Scripts

A pattern that avoids many foot-guns:

```bash
#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'

usage() { echo "Usage: $0 INPUT_FILE"; }

[[ $# -eq 1 ]] || { usage; exit 2; }
in="$1"
[[ -f "$in" ]] || { echo "No such file: $in" >&2; exit 1; }

while IFS= read -r line; do
  printf '%s\n' "$line"
done < "$in"
```

Notes:

- `set -euo pipefail` stops on errors, on unset variables, and on pipe failures.
- Always quote variables: `"$var"`.

## 14) Quick Text-processing Patterns You'll Use Everywhere

Counting and uniques:

```bash
cut -d, -f2 file.csv | sort | uniq -c | sort -nr | head
```

Columns and fields:

```bash
awk -F, '{print $2,$5}' file.csv | column -t
```

Fast JSON peeking (if `jq` is installed):

```bash
jq '.key' data.json
jq -r '.items[] | [.id, .name] | @tsv' data.json
```

## 15) Nano Vs Nvim: when to Use Which

- Use `nano` for one-offs: change a line, edit a config, get out. Keys: `Ctrl-O` (write), `Ctrl-X` (exit), `Ctrl-W` (search).
- Use `nvim` when you'll navigate a project, jump by symbols, multi-edit, or run LSP. Learn `:w`, `:q`, `/pattern`, `n/N`, visual mode, and a handful of motions (`w`, `b`, `gg`, `G`, `%`).

## 16) A Handful of Reliable Composites

These are "daily driver" one-liners worth memorising.

```bash
# 1) Find large files in the current tree
find . -type f -printf '%s %p\n' 2>/dev/null | sort -nr | head -20 | awk '{printf "%.1f MB  %s\n", $1/1048576, $2}'

# 2) Tail logs and highlight errors
tail -f /var/log/nginx/access.log | rg --color=always -n 'ERROR|WARN|5\d{2}'

# 3) Extract a column from CSV safely (no regex commas)
mlr --csv cut -f user,email users.csv | mlr --icsv --opprint cat

# 4) Grep code but ignore vendor/build artefacts
rg -n --hidden -g '!.git' -g '!node_modules' -g '!dist' "pattern"

# 5) Compare two directory trees by file hashes
diff <(find A -type f -print0 | sort -z | xargs -0 sha1sum) \
     <(find B -type f -print0 | sort -z | xargs -0 sha1sum) | less
```

(If `mlr` isn't installed, use `cut/awk`; the idea stands.)

## 17) When Something Feels Slow

Prefer pipelines that stream and avoid temp files; use `xargs -P` for parallelism; use `rg` instead of `grep -R` for large trees; avoid `for f in $(ls …)` (word-splitting traps) and iterate with `find … -print0 | while IFS= read -r -d ''`.

## 18) Windows and macOS Notes

- On macOS, `sed -i` needs a backup suffix: `sed -i '' 's/a/b/' file`.
- On Windows via WSL, everything above works; keep your files inside the Linux filesystem (`/home/…`) for speed.

Related notes:
