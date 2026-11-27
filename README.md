# Exam Planner

An exam timetable with a live India Standard Time countdown and study dashboards for Computer Networks and Compiler Design. Module 3 includes an ordered Network Layer lecture roadmap, syllabus coverage, progress, revision bookmarks, notes and numerical practice. The flashcard workspace includes 50 Network Layer questions and 50 Transport Layer questions.

[Open Exam Planner](https://network-notebook-study.dependableskink8.chatgpt.site/)

## Local development

Use Node.js 22 or newer. The app, Worker, build tool and tests are written in TypeScript; TypeScript and the Node type definitions are the only direct development dependencies. Run these commands from the repository root.

```sh
npm ci
npm run typecheck
npm test
```

To try the browser interface locally, first run `npm run build`, then serve the generated directory with any static file server. For example, run `python3 -m http.server 8000 --directory dist` and open `http://localhost:8000/`. The local preview uses this browser’s guest progress. Account sync requires a hosted Sites identity and storage binding.

## Source and storage

Edit the browser assets in `src/`. The TypeScript compiler checks and emits the maintained source into the ignored `.build/` directory. `build.mts` packages the browser JavaScript, stylesheet and HTML with the compiled `worker.mts` into `dist/server/index.js`, the JavaScript bundle ChatGPT Sites runs. `dist/` is generated; don’t edit it by hand. The browser scripts retain their existing execution order. The checked-in `.openai/hosting.json` identifies the existing Site and its storage binding. Lecture progress uses stable identifiers so video changes preserve saved work.

## Checks and publication

GitHub Actions installs the lockfile, type-checks, builds and tests pushes and pull requests on Ubuntu with Node 22, and checks the tracked output against the build. The Actions workflow only performs validation. GitHub Actions does not deploy the public Site. Start a release from the validated commit on `main`, then save and deploy it through ChatGPT Sites to the existing URL. Verify that the intended version is live.

Exam dates and exam windows are in `src/exams.ts`. Set `startTime` and `endTime` in 24-hour `HH:MM` IST. The countdown updates every second and targets the scheduled start, shows the exam as underway until the scheduled end, and then highlights the next exam. If an entry has only a date, the planner counts down to the start of that day and marks it “Today” until midnight IST.

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
| m4-l15 | 4.7 | Telnet Protocol and Network Virtual Terminal | LAZN4rq-5mI | 05:21 |
| m4-l16 | 4.7 | FTP, SFTP and TFTP | CrObzHJtANw | 11:13 |

The two chapters of Sundeep Saradhi Kanthety's full course use the same video ID but separate progress keys. The embedded player uses start/end parameters and valid saved positions. External YouTube URLs include the start or resume timestamp but cannot enforce the end. Opening a video never marks it complete. The embedded player restores position and selects the preferred speed only when YouTube supports those controls.

Module data lives in `src/data.ts` (Module 3) and `src/m4-data.ts` (Module 4), with reusable rendering and progress logic. `src/m4-notes.ts` is the integration point for revised short notes. Existing Module 3 keys, quiz IDs, sign-in and the hosted storage binding are unchanged.

The compact exam clock uses the shared IST timetable on study tabs and is hidden during active flashcard rounds. Tab transitions honor reduced-motion preferences.

Overall progress uses a single accessible ring. Preparation order is configured per subject. The next-exam clock moves between the planner and Lectures with a short reduced-motion-aware transition.

Schedule opens on the next exam. Choose another subject to see its exact IST deadline and study page, or return to Next exam. The progress ring animates to saved progress, and the shared timer and theme controls honor reduced motion.

### Optional exam reminders

In Schedule, open **Exam reminders**. Select an upcoming exam and a lead time, then copy the prompt into a ChatGPT chat that supports scheduled tasks and confirm the scheduled time. All times are in India Standard Time. The site does not create tasks, store reminder choices, or send notifications, and it does not offer reminder times that have already passed.

### Your progress and backups

Guest progress stays in the current browser. Signing in with ChatGPT enables account sync and keeps a device-local copy for offline recovery. Signing out does not erase either copy; avoid saving private notes on shared devices, and clear this site's browser data after exporting anything you need. Clearing browser data does not erase progress already synced online.

**Schedule → Progress backup** downloads a JSON snapshot and restores compatible snapshots after confirmation. Restoring replaces the fields in the file. Keep downloaded backups private; they include your study notes and are not encrypted by the app. The timetable and learning resources are public; personal progress is not. YouTube serves thumbnails and the optional embedded player.

## Compiler Design and subject-scoped review

Use **Lectures → Subject → Compiler Design**. The study order is M2, M4, M1, M3. The new-content modules (M2 and M4) together represent 42 of 60 marks; the mid-semester revision modules (M1 and M3) represent 18. The individual module estimates (10/22/8/20) are planning guidance, not official paper weights. M1 and M3 use revision notes and concept checklists instead of full playlists.

- `src/compiler.ts` defines the modules and their syllabus; `src/compiler-lectures.ts` stores stable lecture IDs, topics, linked concepts, watch URLs, durations, and separately tracked watch/embed evidence. M2 has 11 lectures and M4 has nine. The documented durations are playlist metadata or visible watch-page durations, not evidence of uninterrupted playback. The player exposes an external fallback and labels incomplete verification.
- `src/compiler-content.ts` contains concise revision material and 150 topic cards (M1: 25, M2: 52, M3: 25, M4: 48) plus ten always-unlocked Quick 10 cards. The Computer Networks review workspace uses its existing questions and retains access to the classic multiple-choice rounds and their history.
- `src/recall-model.ts` derives topic-deck eligibility from completed lectures for playlist modules and from completed checklist concepts for revision modules. Unchecking a prerequisite relocks the deck but never removes a review. Quick 10, due/missed review, resume, shuffle, and Again/Hard/Good/Easy scheduling are available in the new flashcard view.
- The existing account and storage service remains in place. Computer Networks keys and old backups still work; Compiler Design modules, notes and completion have distinct keys, and review data has a subject and card ID. The Worker continues to scope storage by the signed-in identity and does not accept an alternate account identifier.
- Run the existing Node commands above. GitHub Actions validates build output; it does not publish it. Publish through the existing ChatGPT Sites project without changing the site address, identity binding, or audience.
