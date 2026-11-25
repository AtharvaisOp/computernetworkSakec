# Exam Planner

An exam timetable with a live India Standard Time countdown and a Computer Networks study dashboard. Module 3 includes an ordered Network Layer lecture roadmap, syllabus coverage, progress, revision bookmarks, notes and numerical practice. The flashcard workspace includes 50 Network Layer questions and 50 Transport Layer questions.

[Open Exam Planner](https://network-notebook-study.dependableskink8.chatgpt.site/)

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

GitHub Actions builds and tests pushes and pull requests on Ubuntu with Node 22. The Actions workflow only performs validation. GitHub Actions does not deploy the public Site. Start a release from the validated commit on `main`, then save and deploy it through ChatGPT Sites to the existing URL. Verify that the intended version is live.

Exam dates and exam windows are in `src/exams.js`. Set `startTime` and `endTime` in 24-hour `HH:MM` IST. The countdown targets the scheduled start, shows the exam as underway until the scheduled end, and then highlights the next exam. If an entry has only a date, the planner counts down to the start of that day and marks it “Today” until midnight IST.
