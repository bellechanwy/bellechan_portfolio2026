# Vibe Code Setup Prompt

Run this once at project start. After setup is complete, discard this prompt.

The project directory is pre-built. You only need to run these steps.

## Step 1: Fill in .env

The `.env` file already exists with placeholder fields. Generate a random port number and fill in the `PORT` value. Avoid common ports (3000, 4000, 5000, 5173, 8000, 8080, 8888, 9000). Leave all other fields empty until needed.

## Step 2: Initialize Git

```
git init
```

## Step 3: Install Dependencies

```
npm init -y
npm install --save-dev vite
npm pkg set scripts.dev="vite" scripts.build="vite build" scripts.preview="vite preview"
```

## Step 4: First Commit

```
git add -A
git commit -m "CHORE: initial project setup"
```

## Done

You will delete this file after setup is complete as its no longer needed. Use `vibe-code-rules.md` for all further development. If the project includes Python code, also read `vibe-code-rules-python.md`.
