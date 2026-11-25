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

Exam dates and exam windows are in `src/exams.js`. Set `startTime` and `endTime` in 24-hour `HH:MM` IST. The countdown updates every second and targets the scheduled start, shows the exam as underway until the scheduled end, and then highlights the next exam. If an entry has only a date, the planner counts down to the start of that day and marks it “Today” until midnight IST.

## Module 4: Transport Layer
Open **Lectures → Computer Networks → 04 · Transport Layer**. The subject picker abbreviates Computer Networks to **CN**. On opening a roadmap, only the section with the unfinished resume lecture is expanded; all completed roadmaps start collapsed. The other exam subjects are listed in the subject picker and show an empty state until learning resources are added. The roadmap has 16 lectures, six sections, and seven syllabus topics, plus 15 mastery items, a note for each topic, and the existing 50 flashcards.

| ID | Syllabus | Lecture | YouTube ID | Duration or window |
| --- | --- | --- | --- | --- |
| m4-l01 | 4.1 | Transport Layer and its Responsibilities | kAty4mKczEg | 16:11 |
| m4-l02 | 4.1 | Transport Service Primitives | lTW0rTfm1Gg | 7:19, 09:36:16–09:43:35 |
| m4-l03 | 4.2 | TCP and TCP Header, Part 1 | c8aet11HNxg | 14:51 |
| m4-l04 | 4.2 | TCP and TCP Header, Part 2 | hsNuqtfxgRI | 12:31 |
| m4-l05 | 4.2 | UDP and UDP Header | HF_znV8x9a0 | 11:48 |
| m4-l06 | 4.2 | TCP vs UDP | jJyXpMmXJI0 | 11:58 |
| m4-l07 | 4.3 | TCP Connection Establishment and Termination | qIEHUUt2Wfc | 15:12 |
| m4-l08 | 4.4 | Timers in TCP Protocol | o_uVzGiu2UI | 11:24 |
| m4-l09 | 4.5 | DNS Working, Hierarchy and Resolution | K8fn6ZQtCvk | 20:22 |
| m4-l10 | 4.5 | DNS and Types of Name Servers | BZISxpdl4lQ | 06:52 |
| m4-l11 | 4.5 | DNS Resource Records | lTW0rTfm1Gg | 6:04, 11:51:52–11:57:56 (end of video) |
| m4-l12 | 4.6 | HTTP and HTTPS | r4VY6K3jo5s | 13:52 |
| m4-l13 | 4.6 | Persistent vs Non-Persistent HTTP | zRUdSu3JlK8 | 07:51 |
| m4-l14 | 4.6 | SMTP vs POP3 vs IMAP | cjPVlxmf_Vk | 10:03 |
| m4-l15 | 4.7 | Telnet Protocol and Network Virtual Terminal | LAZN4rq-5mI | Unverified, excluded from viewing estimate |
| m4-l16 | 4.7 | FTP, SFTP and TFTP | CrObzHJtANw | 11:13 |

The two chapters of Sundeep Saradhi Kanthety's full course use the same video ID but separate progress keys. The embedded player uses start/end parameters and valid saved positions. External YouTube URLs include the start or resume timestamp but cannot enforce the end. Opening a video never marks it complete. The embedded player restores position and selects the preferred speed only when YouTube supports those controls.

Module data lives in `src/data.js` (Module 3) and `src/m4-data.js` (Module 4), with reusable rendering and progress logic. `src/m4-notes.js` is the integration point for revised short notes. Existing Module 3 keys, quiz IDs, sign-in and the hosted storage binding are unchanged.

The compact exam clock uses the shared IST timetable on study tabs and is hidden during active flashcard rounds. Tab transitions honor reduced-motion preferences.
