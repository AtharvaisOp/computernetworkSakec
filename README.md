# Computer Networks

A Computer Networks exam-preparation dashboard. Module 3 includes an ordered Network Layer lecture roadmap, syllabus coverage, progress, revision bookmarks, notes and numerical practice. The flashcard workspace includes 50 Network Layer questions and 50 Transport Layer questions.

[Open Computer Networks](https://network-notebook-study.dependableskink8.chatgpt.site/)

## Local development

Use Node.js 22 and run these commands from the repository root. The build and tests use built-in Node modules.

```sh
node build.mjs
node --test
```

To try the browser interface locally, serve the source directory with any static file server. For example, run `python3 -m http.server 8000 --directory src` and open `http://localhost:8000/`. The local preview uses this browser’s guest progress. Account sync requires a hosted Sites identity and storage binding.

## Source and storage

Edit the browser assets in `src/`. The build combines these assets with `worker.mjs` to produce the deployable worker in `dist/server/index.js`. The checked-in `.openai/hosting.json` identifies the existing Site and its storage binding. Lecture progress uses stable identifiers so video changes preserve saved work.

## Checks and publication

GitHub Actions builds and tests pushes and pull requests on Ubuntu with Node 22. The Actions workflow only performs validation. The hourly release process checks the production branch for new changes and uses ChatGPT Sites to publish a validated revision to the existing URL. A push can therefore wait until the next hourly check. Check the release run and the published Site version to confirm a particular revision went live.
