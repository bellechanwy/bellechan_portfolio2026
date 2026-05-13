#!/bin/bash

if [ ! -f .env ]; then
  echo "Error: .env file not found."
  exit 1
fi

source .env

if [ -z "$PORT" ]; then
  echo "Error: PORT is not set in .env"
  exit 1
fi

echo "Killing port $PORT..."
lsof -ti:$PORT | xargs kill -9 2>/dev/null
sleep 1

echo "Installing dependencies..."
npm install

echo "Starting Vite on port $PORT..."
npx vite --port $PORT
