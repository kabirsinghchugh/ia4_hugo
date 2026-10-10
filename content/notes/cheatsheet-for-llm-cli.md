---
title: "Cheatsheet for LLM CLI"
date: 2026-03-31T09:00:00+05:30
draft: false
tags:
  - llm
  - cli
  - ai
  - productivity
categories:
  - notes
---

## Cheatsheet for LLM CLI

- Install via `pipx install llm`
- `llm keys list`
- `llm keys set openai`
- llm install llm-openrouter
- llm keys set openrouter

### Flags

- `-m` or `--model` MODEL
- `-s` or `--system` TEXTPROMPT
- `-o` or `--option` KEY
- `-a` or `--attachment` PATH
- `--at` PATHTYPE force attach type
- `-t` or `--template` NAME
- `-T` or `--tool` TOOL or PLUGIN
- `--ta` or `--tools-approve`
- `-c` or `--continue`
- `--cid` ID CONTINUESESSION

### Models

- `llm models` LIST OF MODELS
- `llm models -q gpt` SEARCH MODEL
- `llm models default gpt-5`

### Fragments

- `llm -f FILE.md "Summarize"`
- `llm -f URL "Explain"`
- `llm fragments set myfragment file.txt`
- `llm fragments` LIST FRAGMENTS

### Tools

```
`llm --functions '
def multiply(x:int,y:int)-> int: return x * y` "What is 2 * 3?" --ta
```

```
llm --schema FILE.json "Add 3 books"
```

### Useful

- `cat notes.txt|llm -t concise_summary`
- `llm -f DRAFT.md "Summarize"`
- `llm --save "Prompt Text" PROMPTLABEL`
    - `llm -t PROMPTLABEL`

Related notes:
