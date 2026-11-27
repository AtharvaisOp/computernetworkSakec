const assets={"/index.html":"<!doctype html><html lang=\"en\"><head><meta name=\"notebook-account\" content=\"\"><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1,viewport-fit=cover\"><meta name=\"theme-color\" content=\"#25377b\"><title>Exam Planner · Study Dashboard</title><link rel=\"icon\" href=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%2317483e'/%3E%3Cpath d='m12 20 20 6 20-6v26l-20 6-20-6z' fill='%23eff6d1'/%3E%3C/svg%3E\"><link rel=\"stylesheet\" href=\"/style-e73d48a9d715.css\"></head><body><aside id=\"plannerSidebar\" aria-label=\"Planner sidebar\"><button id=\"pageMenu\" class=\"brand\" type=\"button\" aria-controls=\"plannerSidebar\" aria-expanded=\"false\" aria-label=\"Expand sidebar\" title=\"Expand sidebar\"><b data-icon=\"book\"></b><span class=\"railLabel brandLabel\">Exam Planner</span></button><nav id=\"nav\" aria-label=\"Study pages\"></nav><div id=\"prepOrder\" class=\"prepOrder\" hidden><small id=\"prepHeading\">Preparation order</small><div id=\"modules\" aria-labelledby=\"prepHeading\"></div></div><footer><a id=\"accountLink\" class=\"accountLink\" target=\"_top\" href=\"/signin-with-chatgpt\">Sign in with ChatGPT</a><button id=\"theme\" type=\"button\" class=\"themeToggle\" aria-label=\"Switch to dark mode\"><span class=\"themeGlyph themeMoon\" data-icon=\"moon\"></span><span class=\"themeGlyph themeSun\" data-icon=\"sun\"></span></button></footer></aside><main><section class=\"wrap examPlanner\" id=\"examPlanner\" aria-labelledby=\"examHeading\" hidden>\n<div class=\"eyebrow\"><span class=\"tick\"></span> NOVEMBER–DECEMBER 2026</div><h1 id=\"examHeading\">Exam Planner</h1><p class=\"sub\">Your exam dates and study materials in one place.</p>\n<div class=\"examSpotlight\" id=\"examSpotlight\">\n<div class=\"examLead\"><div class=\"examKicker\" id=\"examKicker\" role=\"status\"></div><h2 id=\"examNextTitle\"></h2><p id=\"examNextDate\"></p></div>\n<div><div class=\"examClock\" id=\"examClock\" aria-label=\"Time until the next exam starts\"></div><p class=\"examClockHint\" id=\"examClockHint\"></p></div>\n</div>\n<div class=\"examListHeading\"><h2>Exam timetable</h2><span>India Standard Time</span><button type=\"button\" id=\"defaultDeadline\" class=\"quiet\" aria-pressed=\"true\">Next exam</button></div>\n<ol class=\"examList\" id=\"examList\"></ol>\n<button type=\"button\" class=\"examStudyLink\" data-open-study>View study materials</button><button id=\"progressBackup\" class=\"quiet progressBackup\" type=\"button\">Progress backup</button><details id=\"examReminders\" class=\"examReminders\"><summary>Exam reminders</summary><p>Pick an exam and how early you want a reminder. Copy the prompt into your own ChatGPT chat, then check that ChatGPT confirms the time. This site does not create tasks or send notifications.</p><div class=\"reminderOptions\"><label for=\"reminderExam\">Exam<select id=\"reminderExam\"></select></label><label for=\"reminderLead\">Remind me<select id=\"reminderLead\"><option value=\"1440\">1 day before</option><option value=\"120\">2 hours before</option><option value=\"60\">1 hour before</option></select></label></div><div id=\"reminderPreview\" hidden><label for=\"reminderPrompt\">ChatGPT reminder prompt</label><textarea id=\"reminderPrompt\" rows=\"3\" readonly></textarea><button type=\"button\" id=\"copyReminder\" class=\"quiet\">Copy prompt</button></div><p id=\"reminderStatus\" role=\"status\"></p></details><details class=\"examReminders privacyDetails\"><summary>How your study data is stored</summary><p>Guest progress and notes stay in this browser. If you sign in, the site uses your ChatGPT sign-in ID to sync your progress, notes, quiz results and settings. A copy also stays in this browser after sign-out. To remove that local copy, clear this site's browser data; that does not erase your synced copy.</p><p>Downloaded backups are readable files that may contain your notes. YouTube serves the video thumbnails and optional player. The planner does not send your notes to YouTube or ChatGPT chats, and reminder prompts are only copied when you choose. There is no in-app control to delete synced data.</p></details>\n</section><div class=\"wrap\" id=\"studyWorkspace\"><section id=\"studyTimer\" class=\"studyTimer\" aria-label=\"Next exam\" hidden>\n<button type=\"button\" id=\"studyTimerExam\" class=\"studyTimerExam\" aria-label=\"Open exam planner\">\n<span class=\"studyTimerIcon\" data-icon=\"clock\"></span><span><span id=\"studyTimerLabel\" class=\"studyTimerLabel\"></span><strong id=\"studyTimerTitle\"></strong></span>\n</button><div id=\"studyTimerClock\" class=\"studyTimerClock\" aria-label=\"Time until exam starts\"><span><b></b><small>d</small></span><span><b></b><small>h</small></span><span><b></b><small>m</small></span><span><b></b><small>s</small></span></div>\n</section><label id=\"subjectChooser\" class=\"subjectChooser\">Subject <select id=\"subjectSelect\"></select></label><div id=\"moduleSwitch\" class=\"moduleSwitch\" aria-label=\"Subject modules\"><span>Computer Networks</span><button type=\"button\" data-module=\"m3\">03 · Network Layer</button><button type=\"button\" data-module=\"m4\">04 · Transport Layer</button></div><div id=\"moduleEyebrow\" class=\"eyebrow\"><span class=\"tick\"></span> MODULE 03</div><h1 id=\"moduleTitle\">Network Layer</h1><p class=\"sub\" id=\"moduleDescription\"></p><div class=\"hero\"><a id=\"previewLink\" class=\"videoWindow\" target=\"_blank\" rel=\"noopener\"><img id=\"previewImage\" alt=\"\"><span class=\"previewFallback\" hidden>Open lecture on YouTube</span><span class=\"videoPlay\" aria-hidden=\"true\">▶</span></a><div class=\"heroText\"><div class=\"eyebrow\"><i data-icon=\"play\"></i> UP NEXT</div><h2 id=\"nextTitle\"></h2><p id=\"nextMeta\"></p><a id=\"resume\" target=\"_blank\" rel=\"noopener\"><i data-icon=\"play\"></i> Continue learning</a></div></div><section class=\"stats\" id=\"stats\"></section><p id=\"storageWarning\" role=\"alert\" hidden></p><p class=\"info overviewSummary\" id=\"overviewSummary\"></p><div id=\"subjectStats\" hidden></div><div id=\"panel\"></div></div></main><div id=\"feedback\" role=\"status\" aria-live=\"polite\"></div><dialog id=\"dialog\"><div id=\"dialogBody\"></div><button id=\"close\">Close</button></dialog><script src=\"/data-67f2f77a9d13.js\"></script><script src=\"/m4-data-7cc8fc51fe0b.js\"></script><script src=\"/compiler-content-64115bdec6cd.js\"></script><script src=\"/compiler-lectures-f9f0f714e5d6.js\"></script><script src=\"/compiler-6dedd1d9f454.js\"></script><script src=\"/schema-b8236c947b43.js\"></script><script src=\"/recall-model-0043db2990be.js\"></script><script src=\"/quiz-schema-b3c27c11a8c0.js\"></script><script src=\"/cards-c3212297b2b7.js\"></script><script src=\"/quiz-eb8049af97ef.js\"></script><script src=\"/topic-notes-7f843a323c71.js\"></script><script src=\"/m4-notes-cbf6fb82b04a.js\"></script><script src=\"/player-67927e18dc06.js\"></script><script src=\"/exams-e53526d73cae.js\"></script><script src=\"/recall-ui-2fa159c0b1b5.js\"></script><script src=\"/app-b55babcaaa38.js\"></script></body></html>\n","/style.css":"*{box-sizing:border-box}html{font:16px/1.45 Inter,\"Segoe UI\",Arial,sans-serif;--bg:#f8f9f5;--surface:#fff;--side:#f1f3ed;--ink:#202d29;--muted:#5d6b64;--line:#d9dfd6;--green:#245a49;--active:#dbe8d9;--accent:#c8dc96;color-scheme:light}html.dark{--bg:#171f1b;--surface:#202a24;--side:#1b241e;--ink:#eaf1e8;--muted:#afbeb1;--line:#39463d;--green:#a6d3b4;--active:#324b3c;color-scheme:dark}body{margin:0;background:var(--bg);color:var(--ink)}button,input,textarea,select,a{font:inherit}button,select{cursor:pointer}button,a,select,input,textarea{outline-offset:4px}button,select{color:inherit;background:var(--surface);border:1px solid var(--line);border-radius:7px;padding:7px 12px}button:hover,a:hover,select:hover{filter:brightness(.94)}i,b[data-icon]{display:inline-flex;vertical-align:middle;font-style:normal}svg{width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}aside{position:fixed;inset:0 auto 0 0;width:235px;background:var(--side);border-right:1px solid var(--line);display:flex;flex-direction:column;padding:30px 17px;overflow:auto}.brand{font-size:18px;font-weight:720;letter-spacing:-.8px;display:flex;align-items:center;gap:9px}.brand b{padding:8px;background:#204f40;color:#edf6dc;border-radius:8px}.brand svg{width:21px;height:21px}aside small,.eyebrow{font-size:12px;letter-spacing:1.5px;font-weight:700}aside small{margin:40px 10px 12px;color:var(--muted)}nav button,footer button{display:flex;width:100%;align-items:center;gap:12px;background:none;border:0;text-align:left;padding:10px 12px;font-size:15px;margin-bottom:2px}nav button.active{background:var(--active);color:var(--green);font-weight:650}.module{display:flex;align-items:center;gap:10px;margin:13px 8px;font-size:14px;color:var(--muted)}.module b{font:600 12px monospace;border:1px solid var(--line);border-radius:5px;padding:4px 6px}.module:first-child{color:var(--green);font-weight:650}.module:first-child b{background:var(--active)}footer{margin-top:auto;padding-top:35px}main{margin-left:235px}header{min-height:66px;padding:0 4.3%;border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;color:var(--muted);font-size:14px}em{font-style:normal;opacity:.5;margin:0 8px}.paper{display:flex;gap:7px;align-items:center}.wrap{max-width:1390px;padding:32px 4.3% 60px;margin:auto}.eyebrow{display:flex;align-items:center;gap:8px;color:var(--green)}.tick{width:20px;height:2px;background:var(--green)}h1,h2,h3,p{margin:0}h1{font:normal clamp(42px,4.5vw,68px)/1.14 Georgia,serif;letter-spacing:-2.8px;margin:7px 0}.sub,.muted{color:var(--muted)}.hero{position:relative;isolation:isolate;overflow:hidden;background:#143e34;border-radius:14px;color:#f5f7eb;margin:24px 0 14px}.hero canvas{position:absolute;right:0;top:0;width:49%;height:100%;z-index:-1}.heroText{max-width:65%;padding:23px 27px}.hero .eyebrow{color:#d3e7ac}.hero h2{font:normal clamp(25px,2.7vw,38px)/1.14 Georgia,serif;letter-spacing:-.9px;margin:9px 0}.hero p{font-size:14px;color:#c4d8cb}.hero a{display:inline-flex;align-items:center;gap:8px;background:#e0efbf;color:#183b2d;text-decoration:none;font-weight:650;font-size:14px;border-radius:6px;padding:9px 14px;margin-top:16px}.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.stat,.group,.block{background:var(--surface);border:1px solid var(--line);border-radius:10px}.stat{padding:16px 19px}.statHead{display:flex;align-items:center;gap:8px;font-size:14px;color:var(--muted)}.stat strong{display:block;font-size:28px;letter-spacing:-1.2px;margin:6px 0}.stat small{color:var(--muted);font-size:13px}.bar{height:5px;background:var(--side);border-radius:5px;overflow:hidden}.bar i{display:block;height:100%;background:var(--green)}.panelHead{display:flex;align-items:center;justify-content:space-between;margin:29px 0 13px;gap:10px}.panelHead h2{font:normal 30px Georgia,serif;letter-spacing:-1px}.quiet{border:0;background:transparent;color:var(--muted);font-size:14px}.tools{display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;margin-bottom:15px}.chips{display:flex;gap:4px;flex-wrap:wrap}.chips button{border:0;background:transparent;font-size:14px}.chips .active{background:var(--active);color:var(--green);font-weight:650}.search{display:flex;align-items:center;gap:8px;background:var(--surface);border:1px solid var(--line);border-radius:7px;padding:7px 10px;color:var(--muted)}.search input{border:0;background:none;color:var(--ink);width:150px;font-size:14px}.group{margin-bottom:10px;overflow:hidden}.groupHead{width:100%;display:flex;align-items:center;gap:13px;background:var(--surface);border:0;text-align:left;padding:15px}.num{font:600 14px monospace;background:var(--side);color:var(--green);padding:7px;border-radius:6px}.groupHead strong{flex:1}.groupHead .bar{width:60px}.count{font-size:13px;color:var(--muted)}.row,.setting{border-top:1px solid var(--line);padding:12px 16px;display:flex;align-items:center;gap:12px}.row input[type=checkbox]{width:18px;height:18px;accent-color:#39795a;flex:none;cursor:pointer}.details{flex:1;min-width:0}.details a{color:var(--ink);font-weight:600;text-decoration:none}.details a:hover{text-decoration:underline}.details small{display:block;color:var(--muted);font-size:13px;margin-top:2px}.row.done .details a{color:var(--green)}.icon{display:inline-flex;background:transparent;border:0;padding:7px;color:var(--muted)}.icon.on{color:var(--green);background:var(--active)}.setting{justify-content:space-between}.block{overflow:hidden;margin:10px 0}.setting:first-child{border:0}.block p{padding:14px}.setting select,.stat select{font-size:14px;padding:3px}.statHead select{margin-left:auto}.block h3{padding:16px}.info{color:var(--muted);font-size:14px;margin:10px 0}.empty{padding:24px;border:1px dashed var(--line);border-radius:8px}dialog{color:var(--ink);background:var(--surface);border:1px solid var(--line);border-radius:12px;width:min(440px,92%);padding:23px}dialog::backdrop{background:#14281f77}dialog h2{font:28px Georgia,serif;margin-bottom:14px}dialog button{margin:4px}dialog textarea{display:block;width:100%;min-height:160px;padding:10px;margin:12px 0}dialog p{margin:9px 0}button,a{transition:background .16s}button[disabled]{opacity:.5}#sync{font-size:14px}input[type=file]{max-width:100%}\n@media(max-width:1000px){aside{width:200px;padding:24px 12px}.brand{font-size:16px}main{margin-left:200px}.stat{padding:13px}.groupHead .bar{width:35px}}\n@media(max-width:760px){aside{position:static;width:auto;padding:12px 4%;display:block;border-right:0;border-bottom:1px solid var(--line)}aside small,#modules{display:none}nav{display:flex;overflow:auto;margin-top:12px;gap:4px}nav button{white-space:nowrap;width:auto;padding:7px;font-size:14px}nav svg{display:none}footer{display:flex;position:absolute;top:12px;right:3%;padding:0}footer button{font-size:0;width:auto;padding:8px;gap:0}main{margin:0}header{min-height:42px}.wrap{padding:22px 4%}.heroText{max-width:75%;padding:18px}.hero canvas{width:42%;opacity:.72}.stats{gap:6px}.stat{padding:10px}.statHead{flex-wrap:wrap;gap:2px;font-size:13px}.statHead svg{display:none}.stat strong{font-size:23px}.statHead select{margin-left:0}.row{padding:10px 8px;gap:6px}.groupHead{padding:12px;gap:8px}.groupHead .bar{display:none}.panelHead h2{font-size:27px}.tools .search{width:100%}.tools input{width:100%}.setting{gap:8px;padding:10px}.icon{padding:5px}.hero h2{font-size:26px}}\n@media(prefers-reduced-motion:reduce){*{transition:none!important}}\n\n/* Notebook surfaces and interaction states */\nhtml{--bg:#f5f6fc;--surface:#fff;--side:#fdfdff;--ink:#202740;--muted:#59627a;--line:#dce0ed;--green:#354caa;--active:#e8edff;--accent:#caff9d;--shadow:0 4px 18px #222a5710}\nhtml.dark{--bg:#121522;--surface:#1c2133;--side:#181c2c;--ink:#eef0ff;--muted:#bbc2db;--line:#343b53;--green:#bdc9ff;--active:#323e62;--shadow:0 4px 18px #0002}\nbody{font-family:Inter,system-ui,sans-serif}\n.brand b{background:#3448a2;box-shadow:0 3px 9px #293e8d30;color:#fff}\naside{background:linear-gradient(160deg,var(--side) 60%,var(--active));padding-top:24px}\nnav button.active{box-shadow:inset 3px 0 #8499fc}\nheader{background:var(--surface)}.paper{padding:5px 10px;border:1px solid var(--line);border-radius:20px}\n.wrap{max-width:1370px}.eyebrow{font-family:ui-monospace,monospace}\nh1{font-weight:500;font-size:clamp(45px,4.6vw,70px)}\n.hero{background:radial-gradient(ellipse at 80% 45%,#4759ab,transparent 51%),linear-gradient(115deg,#18234b 6%,#2b397f 80%);box-shadow:0 6px 22px #202c7124;border-radius:18px;isolation:isolate}\n.heroText{position:relative;padding:26px 30px}.hero h2{color:#fff;max-width:25ch}.hero p{color:#d6dafa}.hero .eyebrow{color:#d8ffab}\n.topology{position:absolute;right:0;top:0;height:100%;width:43%;stroke:none;z-index:-1}\n.signal{animation:transmit 2.8s ease-in-out 1}@keyframes transmit{from{stroke-dashoffset:100}to{stroke-dashoffset:0}}\n#resume{color:#172b1a;background:#d6ffa4;box-shadow:0 3px 0 #8fae76;border-radius:9px;padding:10px 17px}\nbutton,#resume,.search,.group,.stat{transition:background-color .18s,box-shadow .18s,border-color .18s,transform .18s}\nbutton:focus-visible,a:focus-visible,select:focus-visible,input:focus-visible,textarea:focus-visible{outline:3px solid #778af0;outline-offset:3px}\n@media(hover:hover){button:hover{filter:none;background:var(--active)}#resume:hover{transform:translateY(-2px);box-shadow:0 5px 0 #8fae76}.group:focus-within,.group:hover{border-color:#97a6d3}.details a:hover{color:var(--green)}}\nbutton:active,#resume:active{transform:translateY(1px) scale(.985)}\n.stat,.group,.block{box-shadow:var(--shadow);border-radius:13px}\n.statHead svg{width:16px;height:16px}.statHead{font-weight:550}.statHead select{border-radius:20px}\n.stat strong{font-variant-numeric:tabular-nums}\n.bar{background:var(--active)}.bar i{background:#7388e7}\n.chips{background:var(--surface);border:1px solid var(--line);border-radius:10px;padding:3px}.chips .active{background:var(--active)}\n.search:focus-within{box-shadow:0 0 0 3px #8598ea40;border-color:#798cdc}.search input:focus{outline:0}\n.row.done{background:color-mix(in srgb,#60c18a 9%,var(--surface))}.row.done .details a{color:#266d48}.dark .row.done .details a{color:#b2ebc4}.icon{min-height:36px;min-width:36px;align-items:center;justify-content:center}\n.groupHead .num{color:var(--green);background:var(--active)}.row input{accent-color:#34885b}\ndialog[open]{box-shadow:0 20px 90px #10173350;animation:dialog-in .18s ease-out}dialog textarea{border:1px solid var(--line);border-radius:8px;color:var(--ink);background:var(--bg)}\n@keyframes dialog-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}\n#feedback{pointer-events:none;position:fixed;bottom:20px;left:50%;z-index:5;border-radius:12px;background:#222c4e;color:white;padding:10px 18px;box-shadow:0 4px 16px #131c3940;opacity:0;transform:translate(-50%,8px);transition:opacity .18s,transform .18s;font-size:14px}#feedback.visible{opacity:1;transform:translate(-50%,0)}\n@media(max-width:760px){aside{padding-top:12px}.heroText{max-width:72%;padding:20px 16px}.topology{width:40%;right:-3%}.stats{grid-template-columns:repeat(3,minmax(0,1fr))}.statHead{font-size:13px}.icon{min-width:32px}.chips{max-width:100%}.chips button{padding:6px 9px}.brand{font-size:16px}.paper{padding:2px 8px}.hero h2{font-size:25px}.groupHead strong{min-width:0}}\n@media(max-width:380px){nav{gap:1px}.stat strong{font-size:21px}.chips{gap:0}.row{gap:4px}.heroText{max-width:76%}}\n@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}\n\n.quizzing .wrap>:is(.eyebrow,h1,.sub,.hero,.stats){display:none}\n.deckGrid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:24px 0 16px}\n.deckTile{position:relative;overflow:hidden;isolation:isolate;border-radius:16px;text-align:left;padding:20px 23px;display:grid;gap:5px}\n.deckTile.chosen,.deckTile.chosen:hover{background:linear-gradient(120deg,#222f61,#465ba6);color:#fff;border-color:#556cbb;box-shadow:0 4px 18px #27336a26}\n.deckTile strong,.quizLaunch h2{font:normal clamp(25px,3vw,35px)/1.18 Georgia,serif;letter-spacing:-1px}\n.deckEyebrow{font:650 12px/1.6 ui-monospace,monospace;letter-spacing:1.4px}.deckTile small{font-size:14px}.deckGlyph{position:absolute;right:-4px;bottom:-24px;transform:rotate(-15deg);opacity:.13;z-index:-1}.deckGlyph svg{width:105px;height:105px}\n.quizLaunch,.quizPaper{border:1px solid var(--line);border-radius:16px;background:var(--surface);padding:clamp(17px,3vw,35px);box-shadow:var(--shadow)}\n.quizLaunch p,.quizTop,.quizCounter{color:var(--muted)}.quizLaunch h2{margin:5px 0}\n.quizActions,.quizTop,.quizCounter{display:flex;flex-wrap:wrap;gap:10px;align-items:center}.quizActions{margin-top:18px}.quizActions button{padding:10px 16px}.quizPrimary,.quizPrimary:hover{background:#d6ffa4;color:#172b1a;border-color:#abc987;font-weight:650}\n.quizPaper{max-width:900px;margin:20px auto;perspective:800px}.quizTop,.quizCounter{justify-content:space-between;font-size:14px}.quizPaper .bar{margin:12px 0 22px}\n.quizPrompt{font:normal clamp(24px,2.6vw,34px)/1.32 Georgia,serif;letter-spacing:-.6px;margin-bottom:20px}.quizPrompt:focus,.quizExplanation:focus{outline:none}\n.answerList{display:grid;gap:9px}.answerOption{display:flex;align-items:center;gap:12px;text-align:left;padding:13px;border-radius:10px}.answerOption b{display:grid;place-items:center;min-width:29px;height:29px;background:var(--side);border-radius:6px}.answerOption small{margin-left:auto;font-weight:650}.answerOption:disabled{opacity:1;cursor:default;filter:none}.answerOption.right{border-color:#43805a;background:color-mix(in srgb,#58bc7d 14%,var(--surface))}.answerOption.wrong{border-color:#b95c68;background:color-mix(in srgb,#bc536d 9%,var(--surface))}\n.quizExplanation{margin-top:20px;padding:15px 18px;border-left:3px solid var(--green);background:var(--side);border-radius:4px 9px 9px 4px}.quizExplanation p{margin:5px 0}.quizExplanation small{color:var(--muted)}\n@media(max-width:600px){.deckGrid{gap:8px}.deckTile{padding:13px}.deckTile strong{font-size:23px}.quizTop{gap:4px}.answerOption{flex-wrap:wrap}.answerOption span{flex:1;min-width:65%}.quizActions{gap:6px}.quizActions button{padding:9px 12px}}\n.quizReview{padding:13px 17px;border-top:1px solid var(--line)}.quizReview summary{cursor:pointer;font-weight:550}.quizReview p{padding:0;margin:8px 0}.quizReview small{color:var(--muted)}\n.accountTools{display:flex;align-items:center;gap:10px}.accountLink{color:var(--green);border:1px solid var(--line);background:var(--surface);padding:6px 12px;border-radius:8px;text-decoration:none;font-size:14px;font-weight:600}.accountLink:hover{background:var(--active)}\n.hero{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:20px 25px}.hero .heroText{order:-1;flex:1;max-width:none;padding:0}.hero .videoWindow{position:relative;display:grid;place-items:center;flex:none;width:min(38%,310px);aspect-ratio:16/9;padding:0;margin:0;overflow:hidden;border-radius:10px;border:3px solid #b1c4ff85;box-shadow:0 7px 20px #11173555;background:#101728;color:white}.videoWindow img{width:100%;height:100%;object-fit:contain;position:absolute;inset:0}.videoPlay{position:absolute;bottom:7px;right:7px;background:#161d36df;border-radius:6px;padding:3px 8px}.previewFallback{font-size:14px;padding:12px}.hero .videoWindow[hidden],.guestImport[hidden]{display:none}.guestImport{display:flex;gap:12px;align-items:center;flex-wrap:wrap;padding:10px 4%;background:var(--active);font-size:14px}\n@media(max-width:600px){.hero{flex-direction:column;align-items:stretch;padding:17px;gap:15px}.hero .videoWindow{width:min(100%,320px);align-self:center}.accountTools .paper{display:none}.accountLink{font-size:13px}.hero .heroText{max-width:none}}\n\n@media(max-width:1100px){\n aside{position:static;inset:auto;width:100%;display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:8px;padding:10px max(16px,env(safe-area-inset-right)) 12px max(16px,env(safe-area-inset-left));border:0;border-bottom:1px solid var(--line);overflow:visible;background:var(--side)}\n aside small,#modules{display:none}.brand{min-width:0;font-size:17px}.brand b{flex-shrink:0}\n aside footer{position:static;grid-column:2;grid-row:1;margin:0;padding:0;display:flex;gap:2px}\n footer button{display:grid;place-items:center;font-size:0;gap:0;width:44px;height:44px;padding:0;margin:0}\n #nav{display:none;grid-column:1/-1;overflow:visible;margin:0}\n #nav.menuOpen{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,185px),1fr));gap:4px}\n #nav button{width:100%;min-height:44px;white-space:normal;font-size:15px;gap:10px}\n #nav svg{display:block;flex:none}\n main{margin:0;min-width:0}\n header{min-height:48px;gap:10px;flex-wrap:wrap;padding:4px max(16px,env(safe-area-inset-right)) 4px max(16px,env(safe-area-inset-left))}\n .accountLink{display:inline-flex;align-items:center;min-height:44px}.accountTools{margin-left:auto}\n .wrap{padding:22px max(16px,env(safe-area-inset-right)) max(34px,env(safe-area-inset-bottom)) max(16px,env(safe-area-inset-left))}\n button,select{touch-action:manipulation}.groupHead,.quiet,#resume,.icon,.chips button,.quizActions button,.setting select,.stat select{min-height:44px}\n .icon{min-width:44px}.wrap,.details,.groupHead strong,.quizPrompt,.setting,.answerOption,.quizExplanation,.quizReview,.panelHead{overflow-wrap:anywhere}\n dialog{max-height:85dvh;overflow:auto;overscroll-behavior:contain}dialog textarea,.search input,.setting select,.stat select{font-size:16px}dialog button{min-height:44px}\n .search{min-height:44px}.search input{min-width:0}.groupHead .count{white-space:nowrap}\n}\n@media(max-width:600px){\n .breadcrumbPrefix{display:none}\n .wrap{padding-top:18px}h1{font-size:clamp(36px,10vw,54px);letter-spacing:-1.6px}\n .hero{margin-top:17px}.hero .videoWindow{width:min(100%,400px)}#resume{justify-content:center;width:100%}\n .stats{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.stat{padding:12px;min-width:0}.stats>.stat:last-child{grid-column:1/-1;display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:4px 10px}.stats>.stat:last-child small{grid-column:1/-1}.statHead{gap:6px}.statHead select{margin-left:0}\n .tools{display:grid;grid-template-columns:minmax(0,1fr)}.tools .search{grid-row:1}.chips{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1px}.chips button{padding:5px 2px;font-size:13px}\n .panelHead{align-items:center;margin:22px 0 10px}.panelHead h2{font-size:26px}.panelHead .quiet{flex:none}\n .groupHead{font-size:15px;padding:12px 10px}.row{display:grid;grid-template-columns:34px minmax(0,1fr) 44px 44px;gap:0;padding:8px 6px}.row input[type=checkbox]{margin:0;justify-self:center;width:22px;height:22px;outline-offset:4px}.details a{display:inline-block;padding:4px 0;line-height:1.32}.details small{line-height:1.4}\n .setting{flex-wrap:wrap;gap:6px 12px;padding:12px}.setting>span:first-child{flex:1 1 160px}.setting small{max-width:100%}.setting select{max-width:100%;padding:4px 8px}\n .deckGrid{grid-template-columns:repeat(2,minmax(0,1fr))}.deckTile{min-width:0}.deckTile strong{font-size:clamp(20px,5.5vw,27px)}\n .quizTop{gap:6px}.quizCounter{align-items:flex-start;gap:5px}.quizPaper{margin:10px 0 16px;padding:16px}.quizPrompt{font-size:clamp(22px,5.7vw,29px);line-height:1.36}\n .answerOption{display:grid;grid-template-columns:29px minmax(0,1fr);align-items:start}.answerOption small{grid-column:2;margin:0}.answerOption span{min-width:0}\n .quizActions button{flex:1 1 115px}.quizActions{gap:8px}.quizExplanation{padding:12px}\n dialog{width:calc(100% - 24px);max-width:440px;padding:18px}dialog textarea{min-height:110px;max-height:32dvh}#feedback{max-width:calc(100vw - 24px);width:max-content;bottom:max(14px,env(safe-area-inset-bottom))}\n}\n@media(max-width:420px){\n .row{grid-template-columns:36px minmax(0,1fr) 44px 44px}.row .details{grid-column:2/-1}.row .icon:nth-last-child(2){grid-column:3}.row .icon:last-child{grid-column:4}\n .chips{grid-template-columns:repeat(2,minmax(0,1fr))}.setting select{flex-basis:100%}\n}\n\n@media(max-width:1100px){body.sectionView .wrap>:is(.eyebrow,h1,.sub,.hero,.stats){display:none}body.sectionView .panelHead:first-child{margin-top:0}}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}\nfooter .accountLink{display:block;text-align:center;margin:0 0 8px}\n.row input[type=checkbox]{appearance:none;display:grid;place-items:center;width:24px;height:24px;border:1.5px solid var(--muted);border-radius:8px;background:var(--surface);position:relative}\n.row input[type=checkbox]::after{content:\"\";width:10px;height:6px;border-left:2px solid white;border-bottom:2px solid white;transform:rotate(-45deg) scale(0)}\n.row input[type=checkbox]:checked{background:#397857;border-color:#397857}.row input[type=checkbox]:checked::after{transform:translateY(-1px) rotate(-45deg)}\n@keyframes markLecture{from{opacity:.55;transform:scale(.86)}to{opacity:1;transform:scale(1)}}.row.toggled input{animation:markLecture .18s ease-out}\n.row input[type=checkbox]::before{content:\"\";position:absolute;inset:-8px}\n.lectureThumb{float:left;width:76px;aspect-ratio:16/9;object-fit:contain;background:#14182b;border-radius:6px;margin:2px 12px 2px 0}\n.overviewSummary{margin:12px 0}.quizzing .overviewSummary,.sectionView .overviewSummary{display:none}\ndialog.playerDialog{width:min(800px,calc(100% - 32px));max-width:none;max-height:calc(100dvh - max(32px,calc(env(safe-area-inset-top) + env(safe-area-inset-bottom))));overflow:auto;overscroll-behavior:contain;padding:clamp(12px,2.5vw,23px)}\n#lectureFrame{display:block;width:min(100%,max(320px,calc((100dvh - 150px) * 16 / 9)));aspect-ratio:16/9;margin-inline:auto;border:0;border-radius:10px;background:#111}.playerTools{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:5px;margin:12px 0}.playerTools a,.details small .watchText{color:var(--green)}\n@media(max-width:1100px){\n aside{grid-template-columns:minmax(0,1fr) 44px;gap:0;min-height:62px;padding-block:8px}\n aside footer{display:none}aside.openMenu nav{margin-top:8px}\n aside.openMenu footer{position:static;display:flex;align-items:center;flex-wrap:wrap;grid-row:3;grid-column:1/-1;border-top:1px solid var(--line);margin-top:8px;padding-top:8px}\n}\n@media(max-width:440px){.lectureThumb{width:60px;margin-right:8px}.playerTools{font-size:14px}}\n@media(prefers-reduced-motion:reduce){.row.toggled input{animation:none}}\n\n.examPlanner{max-width:1140px}.examPlanner[hidden],#studyWorkspace[hidden]{display:none}\n.examSpotlight{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,auto);gap:22px;align-items:center;background:#143e34;color:#f5f7eb;border-radius:16px;padding:clamp(18px,3.5vw,36px);margin:24px 0 28px}\n.examKicker{font-size:.875rem;letter-spacing:.1em;color:#d3e7ac;font-weight:750}\n.examLead h2{font:normal clamp(1.75rem,4vw,2.75rem)/1.1 Georgia,serif;margin:.4rem 0;overflow-wrap:anywhere}.examLead p,.examClockHint{color:#cee3d7}\n.examClock{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px}\n.examClock>div{min-width:0;background:#265548;text-align:center;padding:6px clamp(5px,1vw,11px);border-radius:8px}\n.examClock strong{display:block;font-variant-numeric:tabular-nums;font-size:clamp(1.2rem,3.2vw,2rem);line-height:1.2}.examClock span,.examClockHint{font-size:.875rem}.examClockHint:not(:empty){margin-top:6px}\n.examListHeading{display:flex;align-items:baseline;justify-content:space-between;gap:8px;flex-wrap:wrap;margin-bottom:10px}\n.examListHeading h2{font:normal 1.8rem Georgia,serif}.examListHeading>span{color:var(--muted);font-size:.875rem}\n.examList{display:grid;gap:7px;list-style:none;padding:0;margin:0 0 19px}\n.examList li{display:flex;justify-content:space-between;align-items:center;gap:10px;background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:10px 13px}\n.examList time{display:block;color:var(--muted);font-size:.875rem}\n.examList :is([data-state=today],[data-state=next],[data-state=underway]){border-color:var(--green)}\n.examStatus{display:inline-block;flex:none;border-radius:12px;background:var(--side);padding:3px 9px;font-size:.875rem;color:var(--muted);white-space:nowrap}\n.examList :is([data-state=today],[data-state=next],[data-state=underway]) .examStatus{background:var(--active);color:var(--green);font-weight:750}\n.examStudyLink{color:var(--green);font-weight:650;min-height:44px}\n@media(max-width:650px){.examSpotlight{grid-template-columns:minmax(0,1fr);gap:14px}.examClock{max-width:420px}.examPlanner h1{font-size:clamp(2.3rem,11vw,3.3rem);letter-spacing:-.05em}}\n\n.moduleSwitch{display:flex;flex-wrap:wrap;align-items:center;gap:7px;margin-bottom:24px}\n.moduleSwitch>span{color:var(--muted);font-weight:650;margin-right:6px}\n.moduleSwitch>button{min-height:42px;border-radius:9px;font-size:.9rem}\n.moduleSwitch>button[aria-pressed=true]{background:var(--active);border-color:var(--green);color:var(--green);font-weight:700}\n.quizzing .moduleSwitch{display:none}\n@media(max-width:520px){.moduleSwitch>span{flex-basis:100%}.moduleSwitch{gap:6px;margin-bottom:17px}.moduleSwitch>button{padding-inline:8px}}\n.subjectChooser{display:flex;align-items:center;gap:9px;margin-bottom:14px;color:var(--muted);font-size:.9rem;font-weight:650}\n.subjectChooser select{min-height:42px;max-width:calc(100% - 65px)}\n.subjectChooser[hidden],.moduleSwitch[hidden],.quizzing .subjectChooser,\n.emptySubject>:is(#moduleEyebrow,#moduleTitle,#moduleDescription,.hero,.stats,.overviewSummary){display:none}\n\n/* Quiet shared study chrome; the live figures carry the visual emphasis. */\n.studyTimer{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:0 0 24px;padding:8px 12px 8px 8px;background:var(--surface);border:1px solid var(--line);border-radius:12px}\n.studyTimer[hidden],.studyTimerClock[hidden]{display:none}\n.studyTimerExam{display:flex;align-items:center;gap:9px;text-align:left;min-width:0;min-height:44px;padding:3px 7px;border:0;background:none}\n.studyTimerExam>span:last-child{min-width:0}\n.studyTimerIcon{width:33px;height:33px;display:grid;place-items:center;flex:none;background:var(--active);color:var(--green);border-radius:8px}\n.studyTimerLabel{display:block;font-size:.875rem;color:var(--muted);line-height:1.2}\n.studyTimerExam strong{display:block;font-size:1rem;line-height:1.3;overflow-wrap:anywhere}\n.studyTimerClock{display:flex;align-items:center;flex:none;gap:0;font-variant-numeric:tabular-nums;white-space:nowrap}\n.studyTimerClock>span{padding:0 clamp(4px,1.5vw,12px);line-height:1.1}\n.studyTimerClock>span+span{border-left:1px solid var(--line)}\n.studyTimerClock b{font-size:clamp(.96rem,2.2vw,1.2rem);font-weight:720;letter-spacing:-.025em}\n.studyTimerClock small{color:var(--muted);font-size:.875rem;margin-left:2px}\n.studyTimerExam:focus-visible,.groupHead:focus-visible,.moduleSwitch button:focus-visible{outline:2px solid var(--green)}\n@media(max-width:520px){\n .studyTimer{padding:5px 4px;gap:2px;margin:0 0 18px}\n .studyTimerExam{gap:6px;padding-inline:4px}\n .studyTimerIcon{width:28px;height:28px}\n .studyTimerClock>span{padding-inline:4px}\n}\n@media(max-width:350px){.studyTimerIcon{display:none}}\n\n.prepOrder[hidden]{display:none}\n.prepOrder>small{display:block;text-transform:uppercase}\n.progressStat{display:grid;grid-template-rows:auto 1fr;gap:8px}\n.progressRing{--rim:6px;width:clamp(60px,6.4vw,84px);aspect-ratio:1;display:grid;place-items:center;position:relative;align-self:center;justify-self:center;border-radius:50%;background:conic-gradient(var(--green) var(--percent),var(--active) 0)}\n.progressRing:before{content:\"\";position:absolute;inset:var(--rim);border-radius:50%;background:var(--surface)}\n.progressRing strong{position:relative;margin:0;font-size:clamp(1.05rem,2.4vw,1.5rem);letter-spacing:-.045em;line-height:1}\n.studyTimer{border-color:color-mix(in srgb,var(--green) 28%,var(--line));background:color-mix(in srgb,var(--surface) 92%,var(--active))}\n.studyTimerClock b{color:var(--green)}\n.timerGhost{position:fixed!important;margin:0!important;transform-origin:top left;z-index:1000;pointer-events:none!important;overflow:hidden}\n@media(max-width:520px){\n .progressStat{gap:5px}\n .progressRing{width:clamp(49px,15vw,64px);--rim:5px}\n}\n\n/* Tinted glass and a quiet rim work in both themes without hiding the number. */\n.progressRing{box-shadow:0 0 12px color-mix(in srgb,var(--green) 22%,transparent),inset 0 0 0 1px color-mix(in srgb,var(--surface) 40%,transparent)}\n.progressRing:before{background:linear-gradient(155deg,color-mix(in srgb,var(--surface) 88%,var(--active)),var(--surface) 70%);box-shadow:inset 0 1px 2px color-mix(in srgb,var(--green) 18%,transparent)}\n.studyTimer{background:color-mix(in srgb,var(--surface) 90%,var(--active));border-color:color-mix(in srgb,var(--green) 29%,var(--line))}\n.examSpotlight{background:#143e34;border:1px solid #376554}.examClock>div{background:#265548}\nhtml.dark .examSpotlight{background:#183e32;border-color:#4c7560}\nfooter .themeToggle{position:relative;display:grid;place-items:center;width:48px;height:48px;min-width:48px;padding:0;background:var(--surface);border:1px solid var(--line);border-radius:12px;color:var(--green);overflow:hidden}\n.themeToggle:focus-visible{outline:2px solid var(--green)}\n.themeGlyph{grid-area:1/1;display:grid;place-items:center;transition:transform .24s ease,opacity .2s ease}\n.themeGlyph svg{height:25px;width:25px}\n.themeSun{opacity:0;transform:rotate(-32deg) scale(.72)}\nhtml.dark .themeSun{opacity:1;transform:rotate(0) scale(1)}\nhtml.dark .themeMoon{opacity:0;transform:rotate(32deg) scale(.65)}\n@media(prefers-reduced-motion:reduce){.themeGlyph{transition:none}}\n.examListHeading>span{margin-left:auto}\n.examListHeading .quiet{min-height:34px;border:1px solid var(--line)}\n.examListHeading .quiet[aria-pressed=true]{background:var(--active);color:var(--green)}\n.examList li{padding:0}\n.examChoice{display:flex;justify-content:space-between;align-items:center;gap:10px;width:100%;padding:10px 13px;text-align:left;border:0;border-radius:11px;background:transparent}\n.examChoice[aria-pressed=true]{box-shadow:inset 0 0 0 1.5px var(--green);background:color-mix(in srgb,var(--surface) 91%,var(--active))}\n.examChoice:focus-visible,#defaultDeadline:focus-visible{outline:2px solid var(--green)}\n.examStudyLink[hidden]{display:none}\n:root{--timer-bg:#143e34;--timer-border:#376554;--timer-text:#f5f7eb;--timer-muted:#cce0d2;--timer-accent:#d3e7ac;--timer-inset:#265548}\nhtml.dark{--timer-bg:#183e32;--timer-border:#4c7560;--timer-inset:#285546}\n.examSpotlight,.studyTimer{background:var(--timer-bg);border-color:var(--timer-border);color:var(--timer-text)}\nhtml.dark .examSpotlight{background:var(--timer-bg);border-color:var(--timer-border)}\n.examClock>div,.studyTimerIcon{background:var(--timer-inset)}\n.examKicker,.studyTimerClock b,.studyTimerIcon{color:var(--timer-accent)}\n.examLead p,.studyTimerLabel,.studyTimerClock small{color:var(--timer-muted)}\n.studyTimerClock>span+span{border-color:var(--timer-border)}\n.studyTimerExam:focus-visible{outline-color:var(--timer-accent)}\n\n/* Keep account and theme controls together on both sidebar layouts. */\naside footer{display:flex;align-items:center;gap:8px}\naside footer .accountLink{display:inline-flex;align-items:center;justify-content:center;min-height:44px;margin:0;padding:6px 9px;text-align:center;line-height:1.2}\naside footer .accountLink.signOut{padding-inline:12px}\n@media(max-width:640px){\n aside footer{display:none}\n aside.openMenu footer{justify-content:flex-end;gap:8px}\n aside.openMenu footer .accountLink{margin:0}\n}\n.examReminders{margin:24px 0;padding:15px 17px;border:1px solid var(--line);border-radius:14px;background:var(--surface);color:var(--ink)}\n.examReminders summary{font-weight:700;cursor:pointer}\n.examReminders summary:focus-visible{outline:2px solid var(--green);outline-offset:4px}\n.examReminders p{color:var(--muted);margin:10px 0}\n.examReminders p:empty{display:none}\n.reminderOptions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-bottom:12px}\n.examReminders label{display:block;font-size:.875rem;font-weight:650}\n.examReminders select,.examReminders textarea{display:block;width:100%;font:inherit;color:var(--ink);background:var(--bg);border:1px solid var(--line);border-radius:8px;padding:8px;margin:5px 0 0}\n.examReminders textarea{resize:vertical;margin-bottom:8px}\n@media(max-width:460px){.reminderOptions{grid-template-columns:1fr}}\n.progressBackup{margin-inline-start:10px;margin-block-start:10px}\n\n/* A full-width study surface until there is room for both the rail and the content. */\n.stats,.deckGrid{grid-template-columns:repeat(3,minmax(0,1fr))}\n.deckGrid{grid-template-columns:repeat(2,minmax(0,1fr))}\n.stat,.deckTile,.hero .heroText,.groupHead strong,.examChoice>span:first-child,.search,.answerOption span{min-width:0}\n.hero .heroText,.examChoice>span:first-child,.groupHead strong,.answerOption span,.setting>span,.quizReview,.block p{overflow-wrap:anywhere}\n.statHead{flex-wrap:wrap}\n.examSpotlight{grid-template-columns:minmax(0,1fr) minmax(min(100%,230px),auto)}\n.examClock>div{padding-inline:clamp(3px,1vw,11px)}\n.examChoice{min-height:52px}\n.examListHeading .quiet{min-height:44px}\n.setting select{max-width:100%}\n@media(max-width:650px){\n .examSpotlight{grid-template-columns:minmax(0,1fr)}\n}\n@media(max-width:600px){\n .stats{grid-template-columns:repeat(2,minmax(0,1fr))}\n}\n@media(641px <= width <= 1100px){\n .wrap{\n  padding-inline:max(clamp(22px,3.2vw,34px),env(safe-area-inset-left)) max(clamp(22px,3.2vw,34px),env(safe-area-inset-right));\n  padding-top:clamp(24px,3vw,32px);\n }\n .examSpotlight{padding:clamp(20px,3.3vw,34px)}\n .examClock>div{min-width:clamp(48px,7vw,76px)}\n .hero{padding:clamp(18px,2.6vw,28px)}\n .hero .videoWindow{width:min(42%,350px)}\n .deckTile strong,.quizLaunch h2{font-size:clamp(1.55rem,3.25vw,2.15rem)}\n .groupHead,.setting{gap:9px}\n .row{gap:10px;padding:10px 12px}\n .quizExplanation,.quizReview{overflow-wrap:anywhere}\n .setting>span:first-child{flex:1}\n}\n@media(max-width:385px){\n .examListHeading>span{margin-inline-start:0}\n .examClock span{font-size:.78rem}\n}\n@media(pointer:coarse),(max-width:1100px){\n button,select,.accountLink{touch-action:manipulation}\n #nav button,.moduleSwitch button,.subjectChooser select,.setting select,.answerOption,.quizActions button,\n .quizTop button,.playerTools button,.examReminders :is(summary,select,button),#progressBackup{min-height:44px}\n .examReminders summary{padding-block:11px}\n .row input[type=checkbox]::before{inset:-10px}\n .row .icon{min-height:44px;min-width:44px}\n .search input,.examReminders select,.examReminders textarea{font-size:1rem}\n}\n\n/* The same book-button opens the rail; both edges move on the same timing curve. */\n:root{--rail:64px;--rail-inset:env(safe-area-inset-left,0px);--rail-open:clamp(126px,34vw,246px);--rail-motion:260ms cubic-bezier(.22,.72,.24,1)}\nbody{--sidebar-size:calc(var(--rail) + var(--rail-inset))}\nbody.sidebarExpanded{--sidebar-size:calc(var(--rail-open) + var(--rail-inset))}\n#plannerSidebar{\n position:fixed;inset:0 auto 0 0;width:var(--sidebar-size);z-index:6;\n display:flex;flex-direction:column;align-items:stretch;gap:0;\n overflow-y:auto;overflow-x:hidden;overscroll-behavior:contain;\n padding:max(10px,env(safe-area-inset-top)) 7px max(10px,env(safe-area-inset-bottom)) calc(7px + var(--rail-inset));\n border:0;border-right:1px solid var(--line);background:var(--side);\n transition:width var(--rail-motion);\n}\n#pageMenu{\n display:flex;align-items:center;justify-content:flex-start;flex:none;gap:clamp(5px,1vw,12px);\n width:100%;height:46px;margin:0 0 10px;padding:0;\n border:1px solid transparent;border-radius:10px;background:transparent;color:var(--ink);\n text-align:left;overflow:hidden;\n}\n#pageMenu .brandLabel{font-size:clamp(.88rem,1.5vw,1.08rem);line-height:1.15;font-weight:750;letter-spacing:-.025em;white-space:normal}\n#pageMenu b{flex:0 0 36px;width:36px;height:36px;padding:0;display:grid;place-items:center;margin-inline-start:max(3px,calc((var(--rail) - 52px) / 2));border-radius:9px}\n#pageMenu b svg{width:21px;height:21px}\n#pageMenu:hover,#pageMenu:focus-visible{background:var(--active)}\n#plannerSidebar #nav{display:flex;flex-direction:column;gap:3px;overflow:visible;margin:0}\n#plannerSidebar #nav button{\n display:flex;justify-content:flex-start;align-items:center;flex:none;gap:clamp(5px,1vw,12px);\n width:100%;min-height:44px;padding:6px 1px 6px calc((var(--rail) - 36px) / 2);margin:0;\n font-size:clamp(.85rem,1.3vw,.96rem);line-height:1.2;white-space:normal;overflow:hidden;\n}\n#nav button svg,#plannerSidebar footer .accountLink svg{display:block;flex:none;width:20px;height:20px}\n#nav button.active{box-shadow:inset 2px 0 var(--green)}\n#plannerSidebar .railLabel{\n opacity:0;visibility:hidden;transform:translateX(-5px);max-inline-size:0;overflow:hidden;\n transition:opacity 120ms ease,transform 180ms ease,visibility 120ms,max-inline-size var(--rail-motion);\n}\n.sidebarExpanded #plannerSidebar .railLabel{opacity:1;visibility:visible;transform:none;max-inline-size:195px;transition-delay:65ms,45ms,0ms,0ms}\n#plannerSidebar .prepOrder{max-block-size:0;overflow:hidden;visibility:hidden;opacity:0;transition:max-block-size var(--rail-motion),opacity 160ms ease,visibility 160ms}\n.sidebarExpanded #plannerSidebar .prepOrder:not([hidden]){max-block-size:255px;visibility:visible;opacity:1}\n#plannerSidebar .prepOrder>small,#plannerSidebar #modules{display:block}\n#plannerSidebar .prepOrder>small{margin:16px 4px 5px;letter-spacing:.05em}\n#plannerSidebar .module{margin:9px 4px;gap:5px;font-size:clamp(.72rem,1.1vw,.875rem)}\n#plannerSidebar footer{\n position:static;display:grid;align-items:center;justify-content:center;justify-items:center;\n gap:7px;margin:auto 0 0;padding:12px 0 0;border:0;\n}\n#plannerSidebar footer .accountLink{min-width:44px;min-height:44px;margin:0;padding:0 5px;gap:0}\n.sidebarExpanded #plannerSidebar footer .accountLink{gap:5px}\n#plannerSidebar footer .themeToggle{margin:0}\n#plannerSidebar+main{margin:0 0 0 var(--sidebar-size);min-width:0;transition:margin-left var(--rail-motion);container:planner / inline-size}\n.wrap{width:100%;max-width:none}\n@media(min-width:560px){\n .sidebarExpanded #plannerSidebar footer{grid-template-columns:auto auto}\n .sidebarExpanded #plannerSidebar footer .accountLink{padding-inline:8px}\n}\n@media(max-width:640px){\n :root{--rail:54px}\n #plannerSidebar{padding-inline:calc(4px + var(--rail-inset)) 4px}\n #plannerSidebar footer .themeToggle{min-width:44px;width:44px;height:44px}\n}\n@media(prefers-reduced-motion:reduce){\n #plannerSidebar,#plannerSidebar+main,#plannerSidebar .railLabel,#plannerSidebar .prepOrder{transition:none}\n}\n@container planner (max-width:700px){\n .wrap{padding-inline:clamp(10px,3%,24px)}\n .examSpotlight{grid-template-columns:minmax(0,1fr);gap:14px}\n .hero .videoWindow{width:min(40%,320px)}\n}\n@container planner (max-width:510px){\n .hero{flex-direction:column;align-items:stretch}\n .hero .videoWindow{width:min(100%,400px);align-self:center}\n .stats{grid-template-columns:repeat(2,minmax(0,1fr))}\n .stats>.stat:last-child{grid-column:1/-1}\n .studyTimer{flex-wrap:wrap}\n .studyTimerClock{margin-inline-start:auto}\n .row{grid-template-columns:36px minmax(0,1fr) 44px 44px}\n .deckGrid{grid-template-columns:minmax(0,1fr)}\n .reminderOptions{grid-template-columns:1fr}\n}\n@container planner (max-width:315px){\n .examListHeading{column-gap:7px}\n .examListHeading h2{font-size:1.35rem}\n .examListHeading>span{margin-inline-start:0}\n .examSpotlight{padding:13px}\n .examClock{grid-template-columns:repeat(4,minmax(0,1fr));gap:3px}\n .examClock>div{min-width:0;padding-inline:2px}\n .examClock span{font-size:.72rem}\n .examChoice{padding-inline:7px;gap:5px}\n .examStatus{padding-inline:6px;font-size:.75rem}\n .row{display:grid;grid-template-columns:minmax(0,1fr) 44px 44px}\n .row .details{grid-column:1/-1;grid-row:1}\n .row .icon:nth-last-child(2){grid-column:2}\n .row .icon:last-child{grid-column:3}\n .groupHead{gap:7px}\n .groupHead .bar{display:none}\n .stat{padding:8px}\n .studyTimerClock>span{padding-inline:2px}\n .studyTimerClock small{font-size:.75rem}\n .setting{flex-wrap:wrap}\n .quizActions button{min-width:0}\n}\n\n/* Subject overview, revision notes, and recall decks share the planner palette. */\n#studyWorkspace [hidden]{display:none!important}\n.quizzing .subjectChooser:not([hidden]){display:flex}\n.subjectOverview{padding:clamp(12px,2vw,20px);margin:16px 0}\n.subjectOverview h2,.recallDeck h3{font-size:1.1rem;line-height:1.35}\n.subjectOverview .info{padding:0;margin:10px 0 5px}\n.subjectSummaryGrid,.recallGrid,.conceptGrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}\n.subjectSummaryGrid{grid-template-columns:repeat(4,minmax(0,1fr));margin-top:10px}\n.subjectSummaryGrid>div{padding:7px 0;min-width:0}\n.subjectSummaryGrid strong,.subjectSummaryGrid small{display:block}\n.subjectSummaryGrid small,.recallDeck small,.conceptLabel small{color:var(--muted)}\n.subjectSummaryGrid strong{font-size:clamp(1rem,2.4vw,1.3rem)}\n.recallDeck,.conceptCard{padding:15px;margin:0;min-width:0}\n.recallDeck h3,.conceptCard p,.recallDeck p{padding:0;margin:6px 0}\n.recallDeck p{font-size:.9rem;color:var(--muted)}\n.recallDeck .bar{margin:9px 0 12px}\n.recallDeck button{margin:2px 4px 2px 0}\n\n.conceptCard ul,.missingList{margin:10px 0;padding-inline-start:22px}\n.conceptCard li{margin:3px 0}\n.compilerExtra{padding:12px;margin-top:20px}\n.compilerExtra summary{cursor:pointer;font-weight:650}\n.compilerExtra .conceptGrid{margin-top:12px}\n.recallFace{display:grid;gap:12px;width:100%;padding:clamp(14px,3vw,24px);border-color:var(--line);background:var(--surface);text-align:left;font-weight:650;margin:12px 0;touch-action:pan-y}\n.recallFace span{overflow-wrap:anywhere}\n.recallFace small{color:var(--muted)}\n.recallFace.flipped{border-color:var(--green);animation:recall-reveal .18s ease-out}\n@keyframes recall-reveal{from{transform:perspective(500px) rotateX(-9deg);opacity:.65}to{transform:none;opacity:1}}\n@media(max-width:650px){.subjectSummaryGrid{grid-template-columns:repeat(2,minmax(0,1fr))}.recallGrid,.conceptGrid{grid-template-columns:minmax(0,1fr)}}\n.summarySpeed{display:inline-flex;align-items:center;gap:5px;margin:5px 10px 5px 0;font-size:.9rem;color:var(--muted)}\n.summarySpeed select{min-height:38px;padding:4px 8px}\n.quizzing .overviewSummary{display:none}\n#nav button[hidden]{display:none}\n.conceptCard h3{padding:4px 0 8px}\n@media(prefers-reduced-motion:reduce){.recallFace{transition:none;animation:none}}\nbody:not(.sidebarExpanded) #plannerSidebar{cursor:pointer}\n","/data.js":"\"use strict\";\nconst sections = [\n    {\n        \"name\": \"Network Layer Fundamentals\",\n        \"rows\": [\n            {\n                \"n\": 1,\n                \"title\": \"Network Layer and its Responsibilities\",\n                \"sy\": \"3.1\",\n                \"educator\": \"Gate Smashers\",\n                \"id\": \"rW1jPlYgp_0\",\n                \"time\": \"12:13\",\n                \"videoTitle\": \"Lec-41: Network Layer | Responsibilities of Network Layer | OSI Model | Computer Networks\",\n                \"uid\": \"m3-l01\",\n                \"topicIds\": [\n                    \"3.1\"\n                ]\n            },\n            {\n                \"n\": 2,\n                \"title\": \"Network Layer Design Issues\",\n                \"sy\": \"3.1\",\n                \"educator\": \"Sundeep Saradhi\",\n                \"id\": \"R3Wp4lR4Rn8\",\n                \"time\": \"10:09\",\n                \"videoTitle\": \"Network Layer Design Issues Explained Simply || Routing || Congestion Control || Computer Networks\",\n                \"uid\": \"m3-l02\",\n                \"topicIds\": [\n                    \"3.1\"\n                ]\n            },\n            {\n                \"n\": 3,\n                \"title\": \"Unicast, Broadcast and Multicast\",\n                \"sy\": \"3.2\",\n                \"educator\": \"Gate Smashers\",\n                \"id\": \"EcWhJbEWxHU\",\n                \"time\": \"5:53\",\n                \"videoTitle\": \"Lec-21: Unicast, Broadcast & Multicast in Computer Networks\",\n                \"uid\": \"m3-l03\",\n                \"topicIds\": [\n                    \"3.2\"\n                ]\n            }\n        ]\n    },\n    {\n        \"name\": \"IPv4 Classful Addressing\",\n        \"rows\": [\n            {\n                \"n\": 4,\n                \"title\": \"Class A IP Addressing\",\n                \"sy\": \"3.3\",\n                \"educator\": \"Gate Smashers\",\n                \"id\": \"iurle2xZrBQ\",\n                \"time\": \"23:28\",\n                \"videoTitle\": \"Lec-42: Class A in IP addressing with Example in HINDI | Classful Addressing | Network Layer\",\n                \"uid\": \"m3-l04\",\n                \"topicIds\": [\n                    \"3.3\"\n                ]\n            },\n            {\n                \"n\": 5,\n                \"title\": \"Class B IP Addressing\",\n                \"sy\": \"3.3\",\n                \"educator\": \"Gate Smashers\",\n                \"id\": \"es1NEZbgCss\",\n                \"time\": \"20:35\",\n                \"videoTitle\": \"Lec-43: Class B in IP addressing with Example | Classful Addressing in hindi with most easiest way\",\n                \"uid\": \"m3-l05\",\n                \"topicIds\": [\n                    \"3.3\"\n                ]\n            },\n            {\n                \"n\": 6,\n                \"title\": \"Class C IP Addressing\",\n                \"sy\": \"3.3\",\n                \"educator\": \"Gate Smashers\",\n                \"id\": \"gk7c-Dceg5Y\",\n                \"time\": \"14:22\",\n                \"videoTitle\": \"Lec-44: Class C in IP addressing with Example | Classful Addressing | Network Layer\",\n                \"uid\": \"m3-l06\",\n                \"topicIds\": [\n                    \"3.3\"\n                ]\n            },\n            {\n                \"n\": 7,\n                \"title\": \"Class D and Class E IP Addressing\",\n                \"sy\": \"3.3\",\n                \"educator\": \"Gate Smashers\",\n                \"id\": \"NDG2SEi2dKo\",\n                \"time\": \"10:38\",\n                \"videoTitle\": \"Lec-45: Class D & Class E in IP addressing with Example | Classful Addressing | Network Layer\",\n                \"uid\": \"m3-l07\",\n                \"topicIds\": [\n                    \"3.3\"\n                ]\n            },\n            {\n                \"n\": 8,\n                \"title\": \"Numericals: Network ID, Host and Broadcast Address\",\n                \"sy\": \"3.3\",\n                \"educator\": \"Gate Smashers\",\n                \"id\": \"vTzrn_M77mo\",\n                \"time\": \"12:48\",\n                \"videoTitle\": \"Lec-46: Find Range, Network Id, Host, Broadcast address with Numerical Examples in Hindi\",\n                \"uid\": \"m3-l08\",\n                \"topicIds\": [\n                    \"3.3\"\n                ]\n            },\n            {\n                \"n\": 9,\n                \"title\": \"Disadvantages of Classful Addressing\",\n                \"sy\": \"3.3\",\n                \"educator\": \"Gate Smashers\",\n                \"id\": \"ARfwnD6X6ZI\",\n                \"time\": \"6:12\",\n                \"videoTitle\": \"Lec-47: Disadvantages of Classful Addressing | IP addressing | Computer Networks\",\n                \"uid\": \"m3-l09\",\n                \"topicIds\": [\n                    \"3.3\"\n                ]\n            }\n        ]\n    },\n    {\n        \"name\": \"Classless Addressing, Subnetting and Supernetting\",\n        \"rows\": [\n            {\n                \"n\": 10,\n                \"title\": \"Classless Addressing (CIDR)\",\n                \"sy\": \"3.4\",\n                \"educator\": \"Gate Smashers\",\n                \"id\": \"N-ywmOpWehE\",\n                \"time\": \"16:42\",\n                \"videoTitle\": \"Lec-48: What is Classless Addressing (CIDR) in Hindi | CIDR vs Classful Addressing\",\n                \"uid\": \"m3-l10\",\n                \"topicIds\": [\n                    \"3.4\"\n                ]\n            },\n            {\n                \"n\": 11,\n                \"title\": \"Subnetting in Classful Addressing\",\n                \"sy\": \"3.5\",\n                \"educator\": \"Gate Smashers\",\n                \"id\": \"rdb2ki4iGuo\",\n                \"time\": \"19:17\",\n                \"videoTitle\": \"Lec-49: Subnetting in Classful Addressing with Examples in Hindi | Computer Networks\",\n                \"uid\": \"m3-l11\",\n                \"topicIds\": [\n                    \"3.5\"\n                ]\n            },\n            {\n                \"n\": 12,\n                \"title\": \"Subnetting in Classless Addressing\",\n                \"sy\": \"3.5\",\n                \"educator\": \"Gate Smashers\",\n                \"id\": \"wvvoT-dpr8o\",\n                \"time\": \"11:11\",\n                \"videoTitle\": \"Lec-51: Subnetting in CIDR Addressing | Classless Interdomain Routing in Hindi with Example\",\n                \"uid\": \"m3-l12\",\n                \"topicIds\": [\n                    \"3.5\"\n                ]\n            },\n            {\n                \"n\": 13,\n                \"title\": \"Variable Length Subnet Masking (VLSM)\",\n                \"sy\": \"3.5\",\n                \"educator\": \"Gate Smashers\",\n                \"id\": \"DFjz3yxe3aU\",\n                \"time\": \"13:09\",\n                \"videoTitle\": \"Lec-53: VLSM in Classless Addressing(CIDR) | Variable Length Subnet Masking\",\n                \"uid\": \"m3-l13\",\n                \"topicIds\": [\n                    \"3.5\"\n                ]\n            },\n            {\n                \"n\": 14,\n                \"title\": \"CIDR Numerical Problems\",\n                \"sy\": \"3.4–3.5\",\n                \"educator\": \"Gate Smashers\",\n                \"id\": \"jXioURQ2v8E\",\n                \"time\": \"12:28\",\n                \"videoTitle\": \"Lec-52: Numerical Question on CIDR | Classless Addressing | Very Imp for all Competitive Exams\",\n                \"uid\": \"m3-l14\",\n                \"topicIds\": [\n                    \"3.4\",\n                    \"3.5\"\n                ]\n            },\n            {\n                \"n\": 15,\n                \"title\": \"Supernetting with Examples\",\n                \"sy\": \"3.5\",\n                \"educator\": \"Engineering Funda\",\n                \"id\": \"R0Gq9UbaLTU\",\n                \"time\": \"22:16\",\n                \"videoTitle\": \"Supernetting in Computer Networks\",\n                \"uid\": \"m3-l15\",\n                \"topicIds\": [\n                    \"3.5\"\n                ]\n            }\n        ]\n    },\n    {\n        \"name\": \"NAT and IPv6\",\n        \"rows\": [\n            {\n                \"n\": 16,\n                \"title\": \"Network Address Translation (NAT)\",\n                \"sy\": \"3.6\",\n                \"educator\": \"Gate Smashers\",\n                \"id\": \"47PUj7OSGkA\",\n                \"time\": \"9:48\",\n                \"videoTitle\": \"Lec-66: NAT Explained - Network Address Translation with example in Hindi\",\n                \"uid\": \"m3-l16\",\n                \"topicIds\": [\n                    \"3.6\"\n                ]\n            },\n            {\n                \"n\": 17,\n                \"title\": \"Need for IPv6\",\n                \"sy\": \"3.7\",\n                \"educator\": \"Gate Smashers\",\n                \"id\": \"0os5MOAKRL0\",\n                \"time\": \"7:56\",\n                \"videoTitle\": \"Lec-57: Need of IPv6 Protocol | Why IPv6 is Required\",\n                \"uid\": \"m3-l17\",\n                \"topicIds\": [\n                    \"3.7\"\n                ]\n            },\n            {\n                \"n\": 18,\n                \"title\": \"IPv6 Header and IPv4 vs IPv6\",\n                \"sy\": \"3.7\",\n                \"educator\": \"Gate Smashers\",\n                \"id\": \"U3rGOTxwXAI\",\n                \"time\": \"13:07\",\n                \"videoTitle\": \"Lec-58: IPv6 Header Format in Hindi | IPv4 Vs IPv6 in Computer Networks\",\n                \"uid\": \"m3-l18\",\n                \"topicIds\": [\n                    \"3.7\"\n                ]\n            },\n            {\n                \"n\": 19,\n                \"title\": \"IPv6 Basics and Representation\",\n                \"sy\": \"3.7\",\n                \"educator\": \"Engineering Funda\",\n                \"id\": \"6gx9cmqJZ_g\",\n                \"time\": \"\",\n                \"videoTitle\": \"IPv6 Basics and Representation: Understanding IPv6 in Computer Networks\",\n                \"uid\": \"m3-l19\",\n                \"topicIds\": [\n                    \"3.7\"\n                ],\n                \"legacyVideo\": \"mCo7Zg_0PP0\"\n            }\n        ]\n    },\n    {\n        \"name\": \"Routing Algorithms\",\n        \"rows\": [\n            {\n                \"n\": 20,\n                \"title\": \"Dijkstra's Shortest Path Algorithm\",\n                \"sy\": \"3.8\",\n                \"educator\": \"Abdul Bari\",\n                \"id\": \"XB4MIexjvY0\",\n                \"time\": \"18:35\",\n                \"videoTitle\": \"3.6 Dijkstra Algorithm - Single Source Shortest Path - Greedy Method\",\n                \"uid\": \"m3-l20\",\n                \"topicIds\": [\n                    \"3.8\"\n                ]\n            },\n            {\n                \"n\": 21,\n                \"title\": \"Link State Routing\",\n                \"sy\": \"3.9\",\n                \"educator\": \"Gate Smashers\",\n                \"id\": \"kW6zV-040SY\",\n                \"time\": \"14:36\",\n                \"videoTitle\": \"Lec-64: Link state routing in computer networks in Hindi\",\n                \"uid\": \"m3-l21\",\n                \"topicIds\": [\n                    \"3.9\"\n                ]\n            },\n            {\n                \"n\": 22,\n                \"title\": \"Distance Vector Routing Algorithm\",\n                \"sy\": \"3.10\",\n                \"educator\": \"Gate Smashers\",\n                \"id\": \"5ZuP5qjbKSI\",\n                \"time\": \"26:00\",\n                \"videoTitle\": \"Lec-62: Distance vector routing algorithm in hindi | Computer Networks\",\n                \"uid\": \"m3-l22\",\n                \"topicIds\": [\n                    \"3.10\"\n                ]\n            },\n            {\n                \"n\": 23,\n                \"title\": \"Count to Infinity Problem\",\n                \"sy\": \"3.10\",\n                \"educator\": \"Gate Smashers\",\n                \"id\": \"UYASPR4jEkk\",\n                \"time\": \"10:41\",\n                \"videoTitle\": \"Lec-63: Count to Infinity Problem in Distance Vector Routing\",\n                \"uid\": \"m3-l23\",\n                \"topicIds\": [\n                    \"3.10\"\n                ]\n            }\n        ]\n    },\n    {\n        \"name\": \"Network Layer Protocols\",\n        \"rows\": [\n            {\n                \"n\": 24,\n                \"title\": \"Address Resolution Protocol (ARP)\",\n                \"sy\": \"3.11\",\n                \"educator\": \"Gate Smashers\",\n                \"id\": \"IUSyV2BVh4A\",\n                \"time\": \"8:13\",\n                \"videoTitle\": \"Lec-65: ARP Explained- Address Resolution Protocol | Network Layer\",\n                \"uid\": \"m3-l24\",\n                \"topicIds\": [\n                    \"3.11\"\n                ]\n            },\n            {\n                \"n\": 25,\n                \"title\": \"Reverse Address Resolution Protocol (RARP)\",\n                \"sy\": \"3.11\",\n                \"educator\": \"Engineering Funda\",\n                \"id\": \"qdYgDafId3U\",\n                \"time\": \"9:40\",\n                \"videoTitle\": \"RARP - Reverse Address Resolution Protocol in Computer Networks\",\n                \"uid\": \"m3-l25\",\n                \"topicIds\": [\n                    \"3.11\"\n                ]\n            },\n            {\n                \"n\": 26,\n                \"title\": \"Internet Control Message Protocol (ICMP)\",\n                \"sy\": \"3.11\",\n                \"educator\": \"Engineering Funda\",\n                \"id\": \"-FaGF6s3rJ8\",\n                \"time\": \"13:39\",\n                \"videoTitle\": \"ICMP – Internet Control Message Protocol in Computer Networks\",\n                \"uid\": \"m3-l26\",\n                \"topicIds\": [\n                    \"3.11\"\n                ]\n            },\n            {\n                \"n\": 27,\n                \"title\": \"Internet Group Management Protocol (IGMP)\",\n                \"sy\": \"3.11\",\n                \"educator\": \"UPV University\",\n                \"id\": \"_g194MRk5wE\",\n                \"time\": \"9:16\",\n                \"videoTitle\": \"The IGMP protocol | | UPV\",\n                \"uid\": \"m3-l27\",\n                \"topicIds\": [\n                    \"3.11\"\n                ]\n            }\n        ]\n    },\n    {\n        \"name\": \"Congestion Control\",\n        \"rows\": [\n            {\n                \"n\": 28,\n                \"title\": \"Open Loop vs Closed Loop Congestion Control\",\n                \"sy\": \"3.12\",\n                \"educator\": \"Sundeep Saradhi\",\n                \"id\": \"rhOJJcx6GpU\",\n                \"time\": \"12:46\",\n                \"videoTitle\": \"Congestion Control Explained || Open Loop vs Closed Loop || Computer Networks\",\n                \"uid\": \"m3-l28\",\n                \"topicIds\": [\n                    \"3.12\"\n                ]\n            }\n        ]\n    }\n];\nconst topics = [\"Network Layer Design Issues\", \"Unicast, Multicast, Broadcast\", \"IPv4 Classful Addressing\", \"IPv4 Classless Addressing\", \"Subnetting and Supernetting Design Problems\", \"Network Address Translation\", \"IPv6\", \"Dijkstra's Shortest Path Algorithm\", \"Link State Routing\", \"Distance Vector Routing\", \"ARP, RARP, ICMP, IGMP\", \"Open Loop and Closed Loop Congestion Control\"];\nconst practice = [\"IPv4 class identification\", \"Binary and decimal conversion\", \"CIDR and subnet mask conversion\", \"Network address calculation\", \"Broadcast address calculation\", \"Usable host range calculation\", \"Fixed Length Subnet Masking (FLSM)\", \"Variable Length Subnet Masking (VLSM)\", \"Supernetting\", \"IPv6 compression and expansion\", \"Dijkstra's Algorithm\", \"Link State Routing\", \"Distance Vector Routing\"];\n","/m4-data.js":"\"use strict\";\nconst m4Topics = [\n    'Transport Service Primitives', 'UDP vs TCP', 'Connection Management (Three-Way Handshake)',\n    'TCP Timers', 'DNS: Name Space, Resource Record, Types of Name Server', 'HTTP, SMTP', 'Telnet, FTP'\n];\nconst m4Concepts = [\n    'Transport service primitives', 'TCP vs UDP', 'Application-based protocol selection',\n    'TCP and UDP header diagrams', 'Three-way handshake', 'Sequence and acknowledgement numbers',\n    'TCP timers', 'RTT and RTO basics', 'DNS hierarchy and resource records', 'DNS resolution',\n    'HTTP', 'SMTP', 'Telnet', 'FTP', 'Protocol port numbers'\n];\nconst m4Dataset = [\n    [1, '4.1', 'Transport Layer and its Responsibilities', 'Gate Smashers', 'kAty4mKczEg', '16:11'],\n    [2, '4.1', 'Transport Service Primitives', 'Sundeep Saradhi Kanthety', 'lTW0rTfm1Gg', '07:19', 34576, 35015],\n    [3, '4.2', 'TCP and TCP Header — Part 1', 'Gate Smashers', 'c8aet11HNxg', '14:51'],\n    [4, '4.2', 'TCP and TCP Header — Part 2', 'Gate Smashers', 'hsNuqtfxgRI', '12:31'],\n    [5, '4.2', 'UDP and UDP Header', 'Gate Smashers', 'HF_znV8x9a0', '11:48'],\n    [6, '4.2', 'TCP vs UDP', 'Gate Smashers', 'jJyXpMmXJI0', '11:58'],\n    [7, '4.3', 'TCP Connection Establishment and Termination', 'Gate Smashers', 'qIEHUUt2Wfc', '15:12'],\n    [8, '4.4', 'Timers in TCP Protocol', 'Engineering Funda', 'o_uVzGiu2UI', '11:24'],\n    [9, '4.5', 'DNS Working, Hierarchy and Resolution', 'Engineering Funda', 'K8fn6ZQtCvk', '20:22'],\n    [10, '4.5', 'DNS and Types of Name Servers', 'Gate Smashers', 'BZISxpdl4lQ', '06:52'],\n    [11, '4.5', 'DNS Resource Records', 'Sundeep Saradhi Kanthety', 'lTW0rTfm1Gg', '06:04', 42712, 43076],\n    [12, '4.6', 'HTTP and HTTPS', 'Engineering Funda', 'r4VY6K3jo5s', '13:52'],\n    [13, '4.6', 'Persistent vs Non-Persistent HTTP', 'Gate Smashers', 'zRUdSu3JlK8', '07:51'],\n    [14, '4.6', 'SMTP vs POP3 vs IMAP', 'Gate Smashers', 'cjPVlxmf_Vk', '10:03'],\n    [15, '4.7', 'Telnet Protocol and Network Virtual Terminal', 'CodeWithDeb', 'LAZN4rq-5mI', '5:21'],\n    [16, '4.7', 'FTP, SFTP and TFTP', 'Engineering Funda', 'CrObzHJtANw', '11:13']\n];\nconst m4Rows = m4Dataset.map(([n, sy, title, educator, id, time, startSeconds = null, endSeconds = null]) => ({\n    n, sy, title, videoTitle: title, educator, id, time, uid: `m4-l${String(n).padStart(2, '0')}`, topicIds: [sy], startSeconds, endSeconds\n}));\nconst transportSections = [\n    ['Transport Layer Fundamentals', 1, 2], ['TCP and UDP', 3, 6], ['Connection Management and Timers', 7, 8],\n    ['Domain Name System', 9, 11], ['HTTP and SMTP', 12, 14], ['Telnet and FTP', 15, 16]\n];\nconst m4Sections = transportSections.map(([name, start, end]) => ({ name, rows: m4Rows.slice(start - 1, end) }));\n","/compiler-content.js":"\"use strict\";\nconst compilerContent = {\n    \"decks\": [\n        {\n            \"id\": \"fundamentals\",\n            \"module\": 1,\n            \"title\": \"Compiler fundamentals and phases\",\n            \"requires\": [\n                \"cd-fundamentals\",\n                \"cd-phases\"\n            ],\n            \"cards\": [\n                {\n                    \"id\": \"cd-fundamentals-01\",\n                    \"question\": \"What is system software?\",\n                    \"answer\": \"Software that manages hardware or provides a platform and tools for running or building programs.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-fundamentals-02\",\n                    \"question\": \"How do system and application programs differ?\",\n                    \"answer\": \"System programs manage the platform or support other programs; applications solve user tasks.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-fundamentals-03\",\n                    \"question\": \"What does an assembler do?\",\n                    \"answer\": \"It translates assembly instructions and symbols into machine or object code.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-fundamentals-04\",\n                    \"question\": \"How do compilers and interpreters differ?\",\n                    \"answer\": \"A compiler translates source to a target program; an interpreter directly performs the source program’s operations, possibly through a runtime representation.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-fundamentals-05\",\n                    \"question\": \"What is a compiler pass?\",\n                    \"answer\": \"One traversal of the input or an intermediate representation; a pass may implement several compiler phases.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-fundamentals-06\",\n                    \"question\": \"What are the compiler’s main phases in order?\",\n                    \"answer\": \"Lexical analysis, syntax analysis, semantic analysis, intermediate code generation, optimization, and target code generation.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-fundamentals-07\",\n                    \"question\": \"How do the compiler front end and back end differ?\",\n                    \"answer\": \"The front end analyzes source and produces IR; the back end lowers and emits target code. The middle end usually optimizes IR.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-fundamentals-08\",\n                    \"question\": \"Which phase should report an undeclared variable, and why?\",\n                    \"answer\": \"Semantic analysis. The token and grammar can be valid while the identifier has no declaration in scope.\",\n                    \"kind\": \"application\"\n                }\n            ]\n        },\n        {\n            \"id\": \"lexical\",\n            \"module\": 1,\n            \"title\": \"Lexical analysis, tokens and symbol table\",\n            \"requires\": [\n                \"cd-tokens\",\n                \"cd-automata\",\n                \"cd-symbols\"\n            ],\n            \"cards\": [\n                {\n                    \"id\": \"cd-lexical-01\",\n                    \"question\": \"What is lexical analysis?\",\n                    \"answer\": \"Scanning the source into tokens for the parser.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-lexical-02\",\n                    \"question\": \"Distinguish a token, pattern and lexeme.\",\n                    \"answer\": \"A token is a category, a pattern describes its members, and a lexeme is the actual matched text.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-lexical-03\",\n                    \"question\": \"What class of patterns describes most tokens?\",\n                    \"answer\": \"Regular expressions; equivalent finite automata can recognize their languages.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-lexical-04\",\n                    \"question\": \"How do deterministic and nondeterministic finite automata differ?\",\n                    \"answer\": \"A DFA has one defined next state per state and symbol; an NFA may have alternatives, missing transitions or epsilon transitions.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-lexical-05\",\n                    \"question\": \"What does a longest-match scanner do when rule lengths tie?\",\n                    \"answer\": \"It first chooses the longest matching prefix, then uses rule priority to break a tie; Lex/Flex chooses the earliest rule.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-lexical-06\",\n                    \"question\": \"What does Lex/Flex generate?\",\n                    \"answer\": \"A scanner, typically with a yylex function, from regular-expression rules and actions.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-lexical-07\",\n                    \"question\": \"What does a symbol table store?\",\n                    \"answer\": \"Identifier bindings and attributes such as scope, type, storage location or signature.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-lexical-08\",\n                    \"question\": \"How does a scanner tokenize 'ifx' if 'if' is a keyword and identifiers allow letters?\",\n                    \"answer\": \"As one identifier. The identifier rule matches three characters and the keyword rule only two.\",\n                    \"kind\": \"application\"\n                }\n            ]\n        },\n        {\n            \"id\": \"top-down\",\n            \"module\": 1,\n            \"title\": \"Top-down and LL parsing\",\n            \"requires\": [\n                \"cd-top-down\",\n                \"cd-first-follow\",\n                \"cd-ll-table\"\n            ],\n            \"cards\": [\n                {\n                    \"id\": \"cd-top-down-01\",\n                    \"question\": \"What does LL(1) mean?\",\n                    \"answer\": \"Scan input left to right, construct a leftmost derivation, and use one lookahead token.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-top-down-02\",\n                    \"question\": \"How does a predictive recursive-descent parser work?\",\n                    \"answer\": \"It uses one routine per nonterminal and selects a production from lookahead without backtracking.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-top-down-03\",\n                    \"question\": \"What is FIRST of a symbol string?\",\n                    \"answer\": \"Terminals that can begin a string it derives, plus epsilon if the whole string is nullable.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-top-down-04\",\n                    \"question\": \"What is FOLLOW of a nonterminal?\",\n                    \"answer\": \"Terminals that can appear directly after it in a sentential form; the start symbol’s FOLLOW includes end marker.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-top-down-05\",\n                    \"question\": \"How do you fill the LL(1) table for A → α?\",\n                    \"answer\": \"Place it under FIRST(α) minus epsilon; if α is nullable, also place it under FOLLOW(A).\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-top-down-06\",\n                    \"question\": \"What does more than one entry in an LL(1) cell indicate?\",\n                    \"answer\": \"A production-choice conflict: the grammar as written is not LL(1).\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-top-down-07\",\n                    \"question\": \"Why remove left recursion from a predictive grammar?\",\n                    \"answer\": \"A left-recursive alternative can call the same nonterminal without consuming input, causing infinite recursion.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-top-down-08\",\n                    \"question\": \"Why is left factoring useful?\",\n                    \"answer\": \"It delays the choice between alternatives until their common prefix has been consumed.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-top-down-09\",\n                    \"question\": \"Eliminate immediate left recursion from A → A a | b.\",\n                    \"answer\": \"Use A → b A′ and A′ → a A′ | ε.\",\n                    \"kind\": \"application\"\n                }\n            ]\n        },\n        {\n            \"id\": \"bottom-up\",\n            \"module\": 2,\n            \"title\": \"Bottom-up fundamentals, handles and shift-reduce parsing\",\n            \"requires\": [\n                \"cd-bottom-up\",\n                \"cd-handles\",\n                \"cd-shift-reduce\"\n            ],\n            \"cards\": [\n                {\n                    \"id\": \"cd-bottom-up-01\",\n                    \"question\": \"What does bottom-up parsing construct?\",\n                    \"answer\": \"A parse from input leaves to the start symbol, reversing a rightmost derivation.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-bottom-up-02\",\n                    \"question\": \"What is a handle?\",\n                    \"answer\": \"A particular occurrence of a production right-hand side whose reduction reverses one rightmost-derivation step.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-bottom-up-03\",\n                    \"question\": \"Why is not every matching right-hand side a handle?\",\n                    \"answer\": \"The right-hand side must be the correct occurrence at that stage of the reverse rightmost derivation.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-bottom-up-04\",\n                    \"question\": \"What is handle pruning?\",\n                    \"answer\": \"Repeatedly reducing the next handle until the start symbol remains.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-bottom-up-05\",\n                    \"question\": \"What is a right sentential form?\",\n                    \"answer\": \"A form reached at some step of a rightmost derivation.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-bottom-up-06\",\n                    \"question\": \"What happens during a shift?\",\n                    \"answer\": \"The next input token moves onto the stack and the input cursor advances.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-bottom-up-07\",\n                    \"question\": \"What happens during a reduce?\",\n                    \"answer\": \"The parser replaces a matching right-hand side on top of the stack with its left-hand nonterminal.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-bottom-up-08\",\n                    \"question\": \"What happens during a reduction by an empty production?\",\n                    \"answer\": \"No grammar symbols are removed; the left-hand nonterminal is pushed and the resulting state is found with GOTO.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-bottom-up-09\",\n                    \"question\": \"When does a shift-reduce parser accept?\",\n                    \"answer\": \"When the grammar’s start construct is complete and the input is at the end marker under the parser’s accept action.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-bottom-up-10\",\n                    \"question\": \"What is a shift/reduce conflict?\",\n                    \"answer\": \"Both shifting the lookahead and making a reduction are possible in the same parsing-table cell.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-bottom-up-11\",\n                    \"question\": \"What is a reduce/reduce conflict?\",\n                    \"answer\": \"Two or more reductions compete in the same parsing-table cell.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-bottom-up-12\",\n                    \"question\": \"What is a viable prefix?\",\n                    \"answer\": \"A prefix of a right sentential form extending no farther than the right edge of its handle.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-bottom-up-13\",\n                    \"question\": \"Why does a shift-reduce parser use a stack?\",\n                    \"answer\": \"A handle appears at the stack top when it is time to reduce, while input remains to its right.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-bottom-up-14\",\n                    \"question\": \"For S → a B and B → b, which reduction happens first on input ab?\",\n                    \"answer\": \"After shifting a and b, reduce b to B; then reduce a B to S.\",\n                    \"kind\": \"application\"\n                },\n                {\n                    \"id\": \"cd-bottom-up-15\",\n                    \"question\": \"Which conflict does the classic dangling-else grammar cause, and how is it often resolved?\",\n                    \"answer\": \"Shift/reduce. Shifting else attaches it to the nearest unmatched if under the conventional rule.\",\n                    \"kind\": \"application\"\n                }\n            ]\n        },\n        {\n            \"id\": \"precedence\",\n            \"module\": 2,\n            \"title\": \"Operator precedence, LEADING and TRAILING\",\n            \"requires\": [\n                \"cd-leading-trailing\",\n                \"cd-precedence-table\"\n            ],\n            \"cards\": [\n                {\n                    \"id\": \"cd-precedence-01\",\n                    \"question\": \"What is an operator grammar in the standard precedence construction?\",\n                    \"answer\": \"A grammar with no empty right-hand sides and no adjacent nonterminals on any right-hand side.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-precedence-02\",\n                    \"question\": \"What makes an operator grammar an operator-precedence grammar?\",\n                    \"answer\": \"Its terminal-to-terminal precedence relations have no conflicting multiple assignments for any pair.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-precedence-03\",\n                    \"question\": \"What is LEADING(A), also called FIRSTVT(A)?\",\n                    \"answer\": \"Terminals that can occur first, or immediately after one leading nonterminal, in a sentential form derived from A.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-precedence-04\",\n                    \"question\": \"What is TRAILING(A), also called LASTVT(A)?\",\n                    \"answer\": \"Terminals that can occur last, or immediately before one trailing nonterminal, in a sentential form derived from A.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-precedence-05\",\n                    \"question\": \"When does construction assign a =· b?\",\n                    \"answer\": \"When terminals a and b are adjacent in a right-hand side or separated by a single nonterminal.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-precedence-06\",\n                    \"question\": \"When does construction assign a <· b?\",\n                    \"answer\": \"When a directly precedes a nonterminal B and b belongs to LEADING(B).\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-precedence-07\",\n                    \"question\": \"When does construction assign a ·> b?\",\n                    \"answer\": \"When a belongs to TRAILING(A) and A directly precedes terminal b.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-precedence-08\",\n                    \"question\": \"Which stack symbol is compared with lookahead in an operator-precedence parser?\",\n                    \"answer\": \"The topmost terminal on the stack, skipping any nonterminals above it.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-precedence-09\",\n                    \"question\": \"Which precedence relations trigger shifting or reduction?\",\n                    \"answer\": \"Shift for <· and =·; reduce for ·>. An undefined relation usually signals an error.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-precedence-10\",\n                    \"question\": \"How does the parser find the left boundary of a handle?\",\n                    \"answer\": \"From the right boundary, scan back across =· relations to the nearest <· boundary between relevant terminals.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-precedence-11\",\n                    \"question\": \"What precedence relations make left-associative minus and higher-precedence multiplication work?\",\n                    \"answer\": \"Set minus ·> minus so an earlier subtraction reduces first, and minus <· multiply so multiplication shifts before that subtraction reduces.\",\n                    \"kind\": \"application\"\n                },\n                {\n                    \"id\": \"cd-precedence-12\",\n                    \"question\": \"For A → B c and B → b, what relation does TRAILING(B) create?\",\n                    \"answer\": \"b ·> c, since b is in TRAILING(B) and terminal c follows B.\",\n                    \"kind\": \"application\"\n                }\n            ]\n        },\n        {\n            \"id\": \"lr\",\n            \"module\": 2,\n            \"title\": \"LR(0), SLR, CLR, LALR and parser comparison\",\n            \"requires\": [\n                \"cd-lr-items\",\n                \"cd-slr\",\n                \"cd-clr\",\n                \"cd-lalr\"\n            ],\n            \"cards\": [\n                {\n                    \"id\": \"cd-lr-01\",\n                    \"question\": \"What does LR stand for?\",\n                    \"answer\": \"Left-to-right scanning and rightmost derivation in reverse.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-lr-02\",\n                    \"question\": \"What is an LR(0) item?\",\n                    \"answer\": \"A production with a dot marking how much of its right-hand side has been recognized.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-lr-03\",\n                    \"question\": \"Why augment the grammar with S′ → S?\",\n                    \"answer\": \"It creates one distinguished completed item for acceptance.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-lr-04\",\n                    \"question\": \"What does LR(0) CLOSURE add when the dot precedes B?\",\n                    \"answer\": \"Add B → ·γ for every production of B, recursively until nothing changes.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-lr-05\",\n                    \"question\": \"What does GOTO(I, X) compute?\",\n                    \"answer\": \"Move the dot over X in every relevant item in I, then take their closure.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-lr-06\",\n                    \"question\": \"What is the initial canonical LR(0) state?\",\n                    \"answer\": \"CLOSURE({S′ → ·S}).\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-lr-07\",\n                    \"question\": \"How do you build the canonical collection of LR states?\",\n                    \"answer\": \"Apply GOTO to each known state and grammar symbol and add each distinct nonempty resulting item set.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-lr-08\",\n                    \"question\": \"What labels LR transitions?\",\n                    \"answer\": \"A grammar symbol, either a terminal or a nonterminal.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-lr-09\",\n                    \"question\": \"What does the ACTION table index?\",\n                    \"answer\": \"Parser state and terminal lookahead; it gives shift, reduce, accept or error.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-lr-10\",\n                    \"question\": \"What does the GOTO table index?\",\n                    \"answer\": \"Parser state and nonterminal; it gives the state after recognizing that nonterminal.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-lr-11\",\n                    \"question\": \"How does an LR parser perform a shift?\",\n                    \"answer\": \"It puts the terminal and the destination state on the stack, then advances input.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-lr-12\",\n                    \"question\": \"How does an LR parser reduce by A → β?\",\n                    \"answer\": \"Pop the entries corresponding to β, then push A and GOTO of the exposed state on A.\",\n                    \"kind\": \"application\"\n                },\n                {\n                    \"id\": \"cd-lr-13\",\n                    \"question\": \"What marks the accept entry in an LR table?\",\n                    \"answer\": \"The completed augmented item S′ → S· with end marker lookahead.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-lr-14\",\n                    \"question\": \"Where does a completed ordinary LR(0) item place a reduce action?\",\n                    \"answer\": \"On all terminal lookaheads, including the end marker.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-lr-15\",\n                    \"question\": \"How does an SLR table restrict reduce actions?\",\n                    \"answer\": \"For A → α·, reduce only on terminals in FOLLOW(A).\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-lr-16\",\n                    \"question\": \"How does SLR differ from LR(0) when constructing states?\",\n                    \"answer\": \"It uses the same LR(0) item states, but uses FOLLOW sets to restrict reductions.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-lr-17\",\n                    \"question\": \"Why can SLR still have a conflict even though it uses FOLLOW?\",\n                    \"answer\": \"FOLLOW(A) covers all grammar contexts, so it can include lookaheads not valid for that particular item state.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-lr-18\",\n                    \"question\": \"What extra information is in a canonical LR(1) item?\",\n                    \"answer\": \"An explicit terminal lookahead, which permits reduction on that terminal when the item is complete.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-lr-19\",\n                    \"question\": \"What lookahead symbols are added in LR(1) closure for [A → α·Bβ, a]?\",\n                    \"answer\": \"For each B production, use every terminal in FIRST(βa) as a lookahead.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-lr-20\",\n                    \"question\": \"What does CLR(1) mean?\",\n                    \"answer\": \"Canonical LR(1), which keeps distinct LR(1) item sets and uses their item-specific lookaheads.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-lr-21\",\n                    \"question\": \"How does LALR(1) merge states?\",\n                    \"answer\": \"Merge canonical LR(1) states with the same LR(0) core; union lookaheads on corresponding items.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-lr-22\",\n                    \"question\": \"What kind of new conflict can a same-core LALR merge introduce?\",\n                    \"answer\": \"A reduce/reduce conflict that was absent in the original canonical LR(1) states.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-lr-23\",\n                    \"question\": \"Given [A → α·B c, $], what is the lookahead for a newly added B item?\",\n                    \"answer\": \"c, because FIRST(c$) contains c.\",\n                    \"kind\": \"application\"\n                },\n                {\n                    \"id\": \"cd-lr-24\",\n                    \"question\": \"If a completed A item occurs and FOLLOW(A) = {b, $}, where does SLR place reductions?\",\n                    \"answer\": \"Only in ACTION columns b and $, not for unrelated terminals.\",\n                    \"kind\": \"application\"\n                },\n                {\n                    \"id\": \"cd-lr-25\",\n                    \"question\": \"What is the usual increasing grammar power among the four methods?\",\n                    \"answer\": \"LR(0), SLR(1), LALR(1), then canonical LR(1); LALR typically keeps the LR(0) state count.\",\n                    \"kind\": \"theory\"\n                }\n            ]\n        },\n        {\n            \"id\": \"semantic\",\n            \"module\": 3,\n            \"title\": \"Semantic analysis, SDD and attributes\",\n            \"requires\": [\n                \"cd-semantic\",\n                \"cd-attributes\",\n                \"cd-sdd-order\"\n            ],\n            \"cards\": [\n                {\n                    \"id\": \"cd-semantic-01\",\n                    \"question\": \"What does semantic analysis check?\",\n                    \"answer\": \"Meaning constraints beyond grammar, such as declaration, scope, type compatibility and valid operand use.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-semantic-02\",\n                    \"question\": \"What is a syntax-directed definition (SDD)?\",\n                    \"answer\": \"A grammar with attributes on symbols and semantic rules attached to productions.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-semantic-03\",\n                    \"question\": \"What is a synthesized attribute?\",\n                    \"answer\": \"A value computed at a node using values available from its descendants or local information.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-semantic-04\",\n                    \"question\": \"What is an inherited attribute?\",\n                    \"answer\": \"A value supplied to a node from its surrounding context, such as its parent or siblings allowed by the definition.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-semantic-05\",\n                    \"question\": \"What is an attribute dependency graph?\",\n                    \"answer\": \"A graph with one vertex per attribute occurrence and edges from each used value to the value that depends on it.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-semantic-06\",\n                    \"question\": \"How do you pick a valid attribute evaluation order?\",\n                    \"answer\": \"Take a topological order of the dependency graph when it is acyclic.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-semantic-07\",\n                    \"question\": \"What is an S-attributed definition?\",\n                    \"answer\": \"An SDD with only synthesized attributes, normally evaluated bottom-up.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-semantic-08\",\n                    \"question\": \"What is an L-attributed definition?\",\n                    \"answer\": \"An SDD whose inherited attributes can use parent inherited values and left-sibling attributes, with no cyclic dependency.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-semantic-09\",\n                    \"question\": \"Are all S-attributed definitions L-attributed?\",\n                    \"answer\": \"Yes; there are no inherited attributes to violate the restrictions.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-semantic-10\",\n                    \"question\": \"How would an SDD propagate a declared type across a comma-separated identifier list?\",\n                    \"answer\": \"Pass the type to the list as an inherited attribute and use it when recording each identifier.\",\n                    \"kind\": \"application\"\n                },\n                {\n                    \"id\": \"cd-semantic-11\",\n                    \"question\": \"In E → E₁ + T with E.val = E₁.val + T.val, which values must be available first?\",\n                    \"answer\": \"E₁.val and T.val. Both dependencies point into E.val.\",\n                    \"kind\": \"application\"\n                },\n                {\n                    \"id\": \"cd-semantic-12\",\n                    \"question\": \"What is the difference between an SDD and a translation scheme?\",\n                    \"answer\": \"An SDD specifies attribute rules; a translation scheme embeds semantic actions at explicit positions in productions.\",\n                    \"kind\": \"theory\"\n                }\n            ]\n        },\n        {\n            \"id\": \"ir\",\n            \"module\": 3,\n            \"title\": \"Intermediate code representations\",\n            \"requires\": [\n                \"cd-syntax-ir\",\n                \"cd-tac\",\n                \"cd-reps\"\n            ],\n            \"cards\": [\n                {\n                    \"id\": \"cd-ir-01\",\n                    \"question\": \"How does an abstract syntax tree differ from a parse tree?\",\n                    \"answer\": \"It keeps meaningful operators and operands but omits many grammar nodes and punctuation.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-ir-02\",\n                    \"question\": \"What is postfix notation?\",\n                    \"answer\": \"An expression representation with each operator after its operands.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-ir-03\",\n                    \"question\": \"What is the advantage of a DAG over a tree for expression representation?\",\n                    \"answer\": \"A DAG can share a node for a repeated equivalent computation instead of duplicating it.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-ir-04\",\n                    \"question\": \"When is it unsafe to share a repeated-looking expression in a DAG?\",\n                    \"answer\": \"When its operand values have changed or reusing the computation would change observable effects.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-ir-05\",\n                    \"question\": \"What is three-address code (TAC)?\",\n                    \"answer\": \"A linear IR with simple operations, typically one operator and up to three addresses per instruction.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-ir-06\",\n                    \"question\": \"What is a temporary in intermediate code?\",\n                    \"answer\": \"A compiler-created name that holds an intermediate value.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-ir-07\",\n                    \"question\": \"What are common control-flow forms in TAC?\",\n                    \"answer\": \"Labels, unconditional jumps, conditional jumps, calls and returns.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-ir-08\",\n                    \"question\": \"What are the four fields of a quadruple?\",\n                    \"answer\": \"Operator, argument 1, argument 2 and result.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-ir-09\",\n                    \"question\": \"How does a triple name a computed result?\",\n                    \"answer\": \"By the position or identifier of the triple itself, without a separate result field.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-ir-10\",\n                    \"question\": \"How does an indirect triple support reordering?\",\n                    \"answer\": \"It stores an ordered list of pointers to triples so order can change without changing the referenced triple IDs.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-ir-11\",\n                    \"question\": \"Give postfix notation for a + b * c.\",\n                    \"answer\": \"a b c * +\",\n                    \"kind\": \"application\"\n                },\n                {\n                    \"id\": \"cd-ir-12\",\n                    \"question\": \"Write TAC for x = (a + b) * c.\",\n                    \"answer\": \"t1 = a + b; t2 = t1 * c; x = t2.\",\n                    \"kind\": \"application\"\n                },\n                {\n                    \"id\": \"cd-ir-13\",\n                    \"question\": \"Which representation is usually easier to reorder, direct triples or quadruples?\",\n                    \"answer\": \"Quadruples, because instructions refer to explicit result names rather than instruction positions.\",\n                    \"kind\": \"theory\"\n                }\n            ]\n        },\n        {\n            \"id\": \"optimization\",\n            \"module\": 4,\n            \"title\": \"Optimization techniques\",\n            \"requires\": [\n                \"cd-optimization\",\n                \"cd-optimization-methods\"\n            ],\n            \"cards\": [\n                {\n                    \"id\": \"cd-optimization-01\",\n                    \"question\": \"What is code optimization?\",\n                    \"answer\": \"Changing a program representation to improve performance, size or another cost without changing required observable behavior.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-optimization-02\",\n                    \"question\": \"Why can optimization have trade-offs?\",\n                    \"answer\": \"Improving speed can increase code size or compilation time; optimizing for one target or workload may hurt another.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-optimization-03\",\n                    \"question\": \"What is machine-independent optimization?\",\n                    \"answer\": \"An improvement expressed over IR without relying on a specific instruction set or register file.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-optimization-04\",\n                    \"question\": \"What is machine-dependent optimization?\",\n                    \"answer\": \"An improvement relying on target details such as addressing modes, instruction costs or register classes.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-optimization-05\",\n                    \"question\": \"What is local optimization?\",\n                    \"answer\": \"Optimization within a single basic block.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-optimization-06\",\n                    \"question\": \"What is global optimization?\",\n                    \"answer\": \"Optimization across basic-block boundaries within a wider region, typically a function.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-optimization-08\",\n                    \"question\": \"What is constant folding?\",\n                    \"answer\": \"Evaluating a compile-time constant expression during compilation.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-optimization-09\",\n                    \"question\": \"What is constant propagation?\",\n                    \"answer\": \"Replacing a variable use with its known constant value when the value is the same on every relevant path.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-optimization-10\",\n                    \"question\": \"What is copy propagation?\",\n                    \"answer\": \"Using the copied source directly where it still holds the same value.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-optimization-11\",\n                    \"question\": \"What is common subexpression elimination?\",\n                    \"answer\": \"Reusing a previous computation when its operands and behavior still make the result equivalent.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-optimization-12\",\n                    \"question\": \"What is dead code elimination?\",\n                    \"answer\": \"Removing instructions whose results cannot affect observed behavior, provided evaluation has no required side effects.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-optimization-13\",\n                    \"question\": \"What is unreachable code elimination?\",\n                    \"answer\": \"Removing blocks that cannot execute from the program entry under the analyzed control flow.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-optimization-14\",\n                    \"question\": \"What is strength reduction?\",\n                    \"answer\": \"Replacing a costly operation with a cheaper equivalent.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-optimization-15\",\n                    \"question\": \"What is loop-invariant code motion?\",\n                    \"answer\": \"Moving a computation out of a loop when its value does not change and moving it is safe.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-optimization-16\",\n                    \"question\": \"What does loop unrolling trade for fewer loop-control operations?\",\n                    \"answer\": \"More code size and potentially greater register pressure.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-optimization-17\",\n                    \"question\": \"What is an induction variable?\",\n                    \"answer\": \"A value that changes predictably by a fixed amount on each loop iteration.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-optimization-18\",\n                    \"question\": \"Optimize t = 3 * 4 followed by x = t + 1 when t is otherwise unused.\",\n                    \"answer\": \"Fold 3 * 4 to 12, propagate 12, fold 12 + 1 to 13, and remove the dead assignment to t.\",\n                    \"kind\": \"application\"\n                },\n                {\n                    \"id\": \"cd-optimization-19\",\n                    \"question\": \"Can a compiler freely delete x = read_input() when x is never read?\",\n                    \"answer\": \"No. The call can have an observable side effect even when its returned value is dead.\",\n                    \"kind\": \"application\"\n                },\n                {\n                    \"id\": \"cd-optimization-20\",\n                    \"question\": \"When is replacing integer multiplication by 8 with a left shift valid?\",\n                    \"answer\": \"When the source and target arithmetic rules make the two equivalent, including width, signedness and overflow behavior.\",\n                    \"kind\": \"application\"\n                }\n            ]\n        },\n        {\n            \"id\": \"flow-liveness\",\n            \"module\": 4,\n            \"title\": \"Basic blocks, flow graphs and liveness\",\n            \"requires\": [\n                \"cd-blocks\",\n                \"cd-cfg\",\n                \"cd-liveness\"\n            ],\n            \"cards\": [\n                {\n                    \"id\": \"cd-flow-liveness-01\",\n                    \"question\": \"What is a basic block?\",\n                    \"answer\": \"A maximal straight-line instruction sequence that can be entered only at its first instruction and has no internal branch.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-flow-liveness-02\",\n                    \"question\": \"What instructions are leaders in standard basic-block construction?\",\n                    \"answer\": \"The entry instruction, every jump target and every instruction immediately following a jump.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-flow-liveness-03\",\n                    \"question\": \"How is one basic block bounded in the leader algorithm?\",\n                    \"answer\": \"It begins at a leader and ends immediately before the next leader or at program end.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-flow-liveness-04\",\n                    \"question\": \"What does a control-flow graph represent?\",\n                    \"answer\": \"Basic blocks are nodes; directed edges represent possible transfers between blocks.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-flow-liveness-05\",\n                    \"question\": \"What successors can the last conditional branch of a block have?\",\n                    \"answer\": \"Its branch target and, when it exists, the fall-through block.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-flow-liveness-06\",\n                    \"question\": \"What successor does an unconditional jump have?\",\n                    \"answer\": \"Only its target block, not the next block in the listing.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-flow-liveness-07\",\n                    \"question\": \"What does it mean for a variable to be live at a point?\",\n                    \"answer\": \"Some path from that point can read its current value before a redefinition.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-flow-liveness-08\",\n                    \"question\": \"Is liveness a forward or backward analysis?\",\n                    \"answer\": \"Backward: a later use can make a value live at an earlier point.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-flow-liveness-09\",\n                    \"question\": \"Why is liveness often called a may analysis?\",\n                    \"answer\": \"A value is live if it may be read along any possible path before being overwritten.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-flow-liveness-10\",\n                    \"question\": \"What is USE[B] in block liveness?\",\n                    \"answer\": \"Variables read in B before any local definition of that variable.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-flow-liveness-11\",\n                    \"question\": \"What is DEF[B] in block liveness?\",\n                    \"answer\": \"Variables assigned values in block B; they kill propagation of the corresponding incoming values through the block.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-flow-liveness-12\",\n                    \"question\": \"State the standard block liveness equations.\",\n                    \"answer\": \"OUT[B] = union of IN[S] for successors S. IN[B] = USE[B] union (OUT[B] − DEF[B]).\",\n                    \"kind\": \"application\"\n                },\n                {\n                    \"id\": \"cd-flow-liveness-13\",\n                    \"question\": \"If USE[B]={a}, DEF[B]={b} and OUT[B]={b,c}, what is IN[B]?\",\n                    \"answer\": \"{a,c}; B uses a and its definition of b kills the incoming b value.\",\n                    \"kind\": \"application\"\n                },\n                {\n                    \"id\": \"cd-flow-liveness-14\",\n                    \"question\": \"If a branch can go to successors live-in {x} and {y}, what is OUT[B]?\",\n                    \"answer\": \"{x,y}. Liveness joins alternative successor paths by union.\",\n                    \"kind\": \"application\"\n                },\n                {\n                    \"id\": \"cd-flow-liveness-15\",\n                    \"question\": \"How does the compiler solve liveness on a graph with loops?\",\n                    \"answer\": \"It repeatedly recomputes IN and OUT until the sets stop changing.\",\n                    \"kind\": \"theory\"\n                }\n            ]\n        },\n        {\n            \"id\": \"codegen\",\n            \"module\": 4,\n            \"title\": \"Code generator design and algorithms\",\n            \"requires\": [\n                \"cd-codegen-design\",\n                \"cd-codegen-algorithm\"\n            ],\n            \"cards\": [\n                {\n                    \"id\": \"cd-codegen-01\",\n                    \"question\": \"What is the code generator’s primary task?\",\n                    \"answer\": \"Translate IR into correct target assembly or machine code while choosing efficient instructions and resources.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-codegen-02\",\n                    \"question\": \"How do instruction selection and instruction scheduling differ?\",\n                    \"answer\": \"Selection chooses target operations; scheduling orders operations while respecting dependencies and target constraints.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-codegen-03\",\n                    \"question\": \"What is register allocation?\",\n                    \"answer\": \"Choosing which live values occupy registers and which must stay in memory.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-codegen-04\",\n                    \"question\": \"How does register assignment differ from allocation?\",\n                    \"answer\": \"Allocation decides which values should get registers; assignment chooses their specific physical registers.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-codegen-05\",\n                    \"question\": \"What is register spilling?\",\n                    \"answer\": \"Saving a value to memory when it cannot remain in a register, then reloading it when needed.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-codegen-06\",\n                    \"question\": \"What does a register descriptor record?\",\n                    \"answer\": \"Which program values currently have valid copies in a particular register.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-codegen-07\",\n                    \"question\": \"What does an address descriptor record?\",\n                    \"answer\": \"Which registers or memory locations currently contain a valid copy of a given value.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-codegen-08\",\n                    \"question\": \"Why is next-use information useful?\",\n                    \"answer\": \"It identifies values needed soon and values with no later use in the block, guiding register reuse and spills.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-codegen-09\",\n                    \"question\": \"When may a simple generator reuse an operand register without saving it?\",\n                    \"answer\": \"When overwriting it cannot destroy the only needed copy of a live value.\",\n                    \"kind\": \"application\"\n                },\n                {\n                    \"id\": \"cd-codegen-10\",\n                    \"question\": \"What should the generator arrange before leaving a block?\",\n                    \"answer\": \"Values needed later must be available at the agreed locations; a simple scheme stores live-out values that lack a valid memory copy.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-codegen-11\",\n                    \"question\": \"Why do target addressing modes matter?\",\n                    \"answer\": \"They determine which operands can be loaded, stored or combined directly and affect instruction count.\",\n                    \"kind\": \"theory\"\n                },\n                {\n                    \"id\": \"cd-codegen-12\",\n                    \"question\": \"Generate simple load/store instructions for x = a + b when both sources begin in memory.\",\n                    \"answer\": \"LOAD R1, a; LOAD R2, b; ADD R1, R1, R2; STORE x, R1. A target with an allowed memory operand may need fewer instructions.\",\n                    \"kind\": \"application\"\n                },\n                {\n                    \"id\": \"cd-codegen-13\",\n                    \"question\": \"One register holds dead t and another holds live y with no current memory copy. Which should get the new temporary?\",\n                    \"answer\": \"Reuse t’s register; it avoids saving a value that is no longer needed and preserves y.\",\n                    \"kind\": \"application\"\n                }\n            ]\n        }\n    ],\n    \"quick\": [\n        {\n            \"id\": \"cd-quick-01\",\n            \"module\": 1,\n            \"question\": \"What are the main compiler phases?\",\n            \"answer\": \"Lexical analysis, syntax analysis, semantic analysis, IR generation, optimization and target code generation.\",\n            \"kind\": \"theory\"\n        },\n        {\n            \"id\": \"cd-quick-02\",\n            \"module\": 1,\n            \"question\": \"When does a nullable alternative use FOLLOW in an LL(1) table?\",\n            \"answer\": \"If A → α and α derives ε, add it to the cells for terminals in FOLLOW(A).\",\n            \"kind\": \"theory\"\n        },\n        {\n            \"id\": \"cd-quick-03\",\n            \"module\": 3,\n            \"question\": \"How do synthesized and inherited attributes differ?\",\n            \"answer\": \"Synthesized values are computed upward; inherited values are passed to a node from its context.\",\n            \"kind\": \"theory\"\n        },\n        {\n            \"id\": \"cd-quick-04\",\n            \"module\": 2,\n            \"question\": \"What makes a substring the handle?\",\n            \"answer\": \"Reducing that exact occurrence reverses the next step of the rightmost derivation.\",\n            \"kind\": \"theory\"\n        },\n        {\n            \"id\": \"cd-quick-05\",\n            \"module\": 2,\n            \"question\": \"Which operator-precedence relations mean shift or reduce?\",\n            \"answer\": \"Shift on <· or =·; reduce on ·>.\",\n            \"kind\": \"theory\"\n        },\n        {\n            \"id\": \"cd-quick-06\",\n            \"module\": 2,\n            \"question\": \"How do LR(0), SLR and CLR choose reduction lookaheads?\",\n            \"answer\": \"LR(0) uses every terminal, SLR uses FOLLOW of the production's left side, and CLR uses the completed item's explicit lookahead.\",\n            \"kind\": \"theory\"\n        },\n        {\n            \"id\": \"cd-quick-07\",\n            \"module\": 2,\n            \"question\": \"What does LALR merge?\",\n            \"answer\": \"Canonical LR(1) states with the same LR(0) core; corresponding lookahead sets are combined.\",\n            \"kind\": \"theory\"\n        },\n        {\n            \"id\": \"cd-quick-08\",\n            \"module\": 4,\n            \"question\": \"How do you find leaders when partitioning basic blocks?\",\n            \"answer\": \"Mark the first instruction, each jump target, and each instruction immediately following a jump.\",\n            \"kind\": \"theory\"\n        },\n        {\n            \"id\": \"cd-quick-09\",\n            \"module\": 4,\n            \"question\": \"What equations express block liveness?\",\n            \"answer\": \"OUT[B] = union of successor IN sets; IN[B] = USE[B] ∪ (OUT[B] − DEF[B]).\",\n            \"kind\": \"theory\"\n        },\n        {\n            \"id\": \"cd-quick-10\",\n            \"module\": 4,\n            \"question\": \"What is the difference between a register descriptor and an address descriptor?\",\n            \"answer\": \"A register descriptor maps a register to values it holds; an address descriptor maps a value to places holding a valid copy.\",\n            \"kind\": \"theory\"\n        }\n    ],\n    \"concepts\": [\n        {\n            \"id\": \"cd-fundamentals\",\n            \"module\": 1,\n            \"syllabus\": \"1.1\",\n            \"title\": \"System software and translators\",\n            \"note\": \"System software runs or supports the computing platform; application software serves end-user tasks. An assembler converts symbolic machine instructions; a compiler emits a target program; an interpreter carries out the source program's behavior.\",\n            \"checklist\": [\n                \"Compare system and application software\",\n                \"Distinguish assembler, compiler and interpreter\"\n            ]\n        },\n        {\n            \"id\": \"cd-phases\",\n            \"module\": 1,\n            \"syllabus\": \"1.2\",\n            \"title\": \"Compiler phases\",\n            \"note\": \"Text → tokens → syntax tree → semantically checked tree → IR → optimized IR → target code. The symbol table and diagnostic machinery support several phases. A phase is a logical job, not necessarily a distinct pass.\",\n            \"checklist\": [\n                \"Trace the compiler pipeline\",\n                \"Distinguish a phase from a pass\",\n                \"Identify where typical errors are caught\"\n            ]\n        },\n        {\n            \"id\": \"cd-tokens\",\n            \"module\": 1,\n            \"syllabus\": \"1.3,1.4\",\n            \"title\": \"Lexical analysis and tokens\",\n            \"note\": \"Regular expressions specify token patterns. A scanner groups actual lexemes into token categories, normally taking the longest match and breaking ties by priority.\",\n            \"checklist\": [\n                \"Identify token, pattern and lexeme\",\n                \"Apply longest match and rule priority\"\n            ]\n        },\n        {\n            \"id\": \"cd-automata\",\n            \"module\": 1,\n            \"syllabus\": \"1.3\",\n            \"title\": \"Finite-state recognition\",\n            \"note\": \"Convert a regular expression to an NFA, build a DFA by subset construction, and scan until no transition is possible. Track the latest accepting position to implement longest match.\",\n            \"checklist\": [\n                \"Recognize accepting states\",\n                \"Explain NFA versus DFA\",\n                \"Trace a matched prefix\"\n            ]\n        },\n        {\n            \"id\": \"cd-symbols\",\n            \"module\": 1,\n            \"syllabus\": \"1.4\",\n            \"title\": \"Lex/Flex and symbol tables\",\n            \"note\": \"Lex/Flex scans with regular-expression rules and user actions. A symbol table maps identifiers to bindings and records attributes such as scope and type; the scanner and later compiler phases may update or consult it.\",\n            \"checklist\": [\n                \"Explain scanner rules and actions\",\n                \"Identify common symbol attributes\",\n                \"Explain scope-sensitive lookup\"\n            ]\n        },\n        {\n            \"id\": \"cd-top-down\",\n            \"module\": 1,\n            \"syllabus\": \"1.5\",\n            \"title\": \"Recursive descent and grammar transformations\",\n            \"note\": \"A predictive parser chooses productions without backtracking. Eliminate left recursion to avoid a same-position recursive call. Left-factor a shared prefix so lookahead can decide after it is consumed.\",\n            \"checklist\": [\n                \"Convert immediate left recursion\",\n                \"Left-factor a grammar\",\n                \"Sketch one routine per nonterminal\"\n            ]\n        },\n        {\n            \"id\": \"cd-first-follow\",\n            \"module\": 1,\n            \"syllabus\": \"1.5\",\n            \"title\": \"FIRST, FOLLOW and nullable\",\n            \"note\": \"FIRST(X) describes possible first terminals and includes ε if X is nullable. In A → αBβ, add FIRST(β) except ε to FOLLOW(B); if β is nullable, add FOLLOW(A). Start-symbol FOLLOW includes $.\",\n            \"checklist\": [\n                \"Compute nullable for symbol sequences\",\n                \"Compute FIRST and FOLLOW to a fixed point\"\n            ]\n        },\n        {\n            \"id\": \"cd-ll-table\",\n            \"module\": 1,\n            \"syllabus\": \"1.5\",\n            \"title\": \"Predictive LL(1) table\",\n            \"note\": \"For A → α, place the production under each terminal in FIRST(α). If α is nullable, use FOLLOW(A) as well. A duplicate cell indicates that this grammar is not LL(1).\",\n            \"checklist\": [\n                \"Fill a predictive parsing table\",\n                \"Trace stack, lookahead and action\",\n                \"Recognize a conflicting cell\"\n            ]\n        },\n        {\n            \"id\": \"cd-bottom-up\",\n            \"module\": 2,\n            \"syllabus\": \"2.1\",\n            \"title\": \"Bottom-up derivation\",\n            \"note\": \"Start with the input and combine recognized phrases into larger nonterminals. The reductions reverse a rightmost derivation and stop when the start symbol is recognized.\",\n            \"checklist\": [\n                \"Reverse a rightmost derivation\",\n                \"Distinguish top-down and bottom-up construction\"\n            ]\n        },\n        {\n            \"id\": \"cd-handles\",\n            \"module\": 2,\n            \"syllabus\": \"2.1\",\n            \"title\": \"Handles and viable prefixes\",\n            \"note\": \"A handle is the occurrence of a production right-hand side that can be reduced to reverse the current rightmost-derivation step. A viable prefix does not extend beyond the handle's right edge.\",\n            \"checklist\": [\n                \"Identify the next handle in a trace\",\n                \"Explain why matching RHS text alone is insufficient\"\n            ]\n        },\n        {\n            \"id\": \"cd-shift-reduce\",\n            \"module\": 2,\n            \"syllabus\": \"2.2\",\n            \"title\": \"Shift-reduce parsing\",\n            \"note\": \"Shift pushes input; reduce replaces the handle at the stack top with its left-hand nonterminal. Accept marks success. An empty or conflicting table entry requires detection or a specified resolution.\",\n            \"checklist\": [\n                \"Trace shifts and reductions\",\n                \"Recognize shift/reduce and reduce/reduce conflict\"\n            ]\n        },\n        {\n            \"id\": \"cd-leading-trailing\",\n            \"module\": 2,\n            \"syllabus\": \"2.1\",\n            \"title\": \"LEADING and TRAILING\",\n            \"note\": \"LEADING and TRAILING collect first/last terminals in derivable sentential forms, allowing one nonterminal at the same edge. They are often called FIRSTVT and LASTVT and aren't the same as FIRST/FOLLOW.\",\n            \"checklist\": [\n                \"Compute both sets using grammar productions\",\n                \"Distinguish LEADING from FIRST\"\n            ]\n        },\n        {\n            \"id\": \"cd-precedence-table\",\n            \"module\": 2,\n            \"syllabus\": \"2.1\",\n            \"title\": \"Precedence relations and parsing table\",\n            \"note\": \"Between adjacent terminals, or terminals separated by one nonterminal, add =·. Use terminal-before-nonterminal plus LEADING for <·, and TRAILING plus terminal-after-nonterminal for ·>. Shift on <· or =· and reduce on ·>.\",\n            \"checklist\": [\n                \"Build a terminal-pair table\",\n                \"Trace handle boundaries\",\n                \"Identify conflicting relations\"\n            ]\n        },\n        {\n            \"id\": \"cd-lr-items\",\n            \"module\": 2,\n            \"syllabus\": \"2.2\",\n            \"title\": \"LR item sets, CLOSURE and GOTO\",\n            \"note\": \"An LR(0) item adds a dot to a production. CLOSURE adds possible starts after a nonterminal; GOTO moves the dot over a symbol and closes the result. Explore all reachable sets to build the state graph.\",\n            \"checklist\": [\n                \"Augment a grammar\",\n                \"Construct I₀ with CLOSURE\",\n                \"Compute GOTO and a state graph\"\n            ]\n        },\n        {\n            \"id\": \"cd-slr\",\n            \"module\": 2,\n            \"syllabus\": \"2.2\",\n            \"title\": \"LR(0) and SLR parsing tables\",\n            \"note\": \"Terminal transitions create shifts; nonterminal transitions populate GOTO. A completed LR(0) item reduces on all lookaheads; SLR instead reduces on FOLLOW of its left-hand side. The completed augmented item accepts on $.\",\n            \"checklist\": [\n                \"Fill LR(0) and SLR ACTION/GOTO\",\n                \"Compare reduction columns\",\n                \"Recognize table conflicts\"\n            ]\n        },\n        {\n            \"id\": \"cd-clr\",\n            \"module\": 2,\n            \"syllabus\": \"2.2\",\n            \"title\": \"Canonical LR(1) tables\",\n            \"note\": \"Canonical LR(1) items carry explicit lookaheads. For [A → α·Bβ, a], closure gives new B items lookaheads from FIRST(βa). A completed item reduces only on its own lookaheads.\",\n            \"checklist\": [\n                \"Compute closure lookaheads\",\n                \"Construct canonical states\",\n                \"Place item-specific reductions\"\n            ]\n        },\n        {\n            \"id\": \"cd-lalr\",\n            \"module\": 2,\n            \"syllabus\": \"2.2\",\n            \"title\": \"LALR merging and parser comparison\",\n            \"note\": \"Merge canonical states with matching LR(0) cores and union corresponding lookaheads. This reduces table size but may create reduce/reduce conflicts. LR(0), SLR, LALR and CLR trade table size against recognition power.\",\n            \"checklist\": [\n                \"Merge same-core states\",\n                \"Check new conflicts\",\n                \"Compare table size and grammar power\"\n            ]\n        },\n        {\n            \"id\": \"cd-semantic\",\n            \"module\": 3,\n            \"syllabus\": \"3.1\",\n            \"title\": \"Semantic analysis and SDD\",\n            \"note\": \"Semantic analysis checks declarations, visibility and type rules. A syntax-directed definition associates attributes with grammar symbols and equations with productions.\",\n            \"checklist\": [\n                \"Distinguish syntax and semantic errors\",\n                \"Read a semantic rule\",\n                \"Identify information needed for type checking\"\n            ]\n        },\n        {\n            \"id\": \"cd-attributes\",\n            \"module\": 3,\n            \"syllabus\": \"3.1\",\n            \"title\": \"Synthesized and inherited attributes\",\n            \"note\": \"Synthesized values move results up from a node's children. Inherited values provide information from surrounding context, such as a type propagated into an identifier list.\",\n            \"checklist\": [\n                \"Classify each attribute direction\",\n                \"Trace type propagation\",\n                \"Trace expression value synthesis\"\n            ]\n        },\n        {\n            \"id\": \"cd-sdd-order\",\n            \"module\": 3,\n            \"syllabus\": \"3.2\",\n            \"title\": \"SDD evaluation order\",\n            \"note\": \"Connect each used attribute to the attribute that depends on it. An acyclic dependency graph admits a topological evaluation order. S-attributed definitions can run bottom-up; L-attributed ones admit left-to-right depth-first evaluation.\",\n            \"checklist\": [\n                \"Build an attribute dependency graph\",\n                \"Pick a valid evaluation order\",\n                \"Distinguish S-attributed and L-attributed\"\n            ]\n        },\n        {\n            \"id\": \"cd-syntax-ir\",\n            \"module\": 3,\n            \"syllabus\": \"3.3\",\n            \"title\": \"Syntax trees, postfix and DAGs\",\n            \"note\": \"A syntax tree retains essential operators and operands. Postfix follows postorder for expression trees. A DAG may share a repeated safe computation when operands still have the same values.\",\n            \"checklist\": [\n                \"Convert expressions to postfix\",\n                \"Build a syntax tree\",\n                \"Share a common subexpression safely\"\n            ]\n        },\n        {\n            \"id\": \"cd-tac\",\n            \"module\": 3,\n            \"syllabus\": \"3.3\",\n            \"title\": \"Three-address code\",\n            \"note\": \"Lower complex expressions into simple assignments with temporaries. Represent control flow using labels and conditional/unconditional jumps.\",\n            \"checklist\": [\n                \"Generate TAC for a nested expression\",\n                \"Generate a branch and a label\"\n            ]\n        },\n        {\n            \"id\": \"cd-reps\",\n            \"module\": 3,\n            \"syllabus\": \"3.3\",\n            \"title\": \"Triples, quadruples and indirect triples\",\n            \"note\": \"Quadruples explicitly name the result; triples refer to another triple for its result; indirect triples separate execution order from stable triple positions.\",\n            \"checklist\": [\n                \"Convert TAC to each representation\",\n                \"Explain which representations ease reordering\"\n            ]\n        },\n        {\n            \"id\": \"cd-optimization\",\n            \"module\": 4,\n            \"syllabus\": \"4.1\",\n            \"title\": \"Optimization goals and scope\",\n            \"note\": \"Optimization keeps observable behavior while changing runtime, size or related costs. Machine-independent optimization operates on IR; machine-dependent optimization relies on the target. Local optimization stays within a block; global optimization crosses blocks.\",\n            \"checklist\": [\n                \"Compare machine-dependent and machine-independent changes\",\n                \"Distinguish local and global scope\",\n                \"Check side effects\"\n            ]\n        },\n        {\n            \"id\": \"cd-optimization-methods\",\n            \"module\": 4,\n            \"syllabus\": \"4.1\",\n            \"title\": \"Common optimization techniques\",\n            \"note\": \"Fold constants, propagate known values, reuse a common expression when safe, and eliminate genuinely dead operations. Loop optimizations include safe invariant motion and induction-variable strength reduction.\",\n            \"checklist\": [\n                \"Apply folding and propagation\",\n                \"Find a safe common expression\",\n                \"Identify invariant, dead and unreachable operations\"\n            ]\n        },\n        {\n            \"id\": \"cd-blocks\",\n            \"module\": 4,\n            \"syllabus\": \"4.2\",\n            \"title\": \"Basic blocks and leaders\",\n            \"note\": \"Mark the first instruction, jump targets and instructions immediately after jumps as leaders. Each block extends until just before the next leader.\",\n            \"checklist\": [\n                \"Mark all leaders\",\n                \"Partition a numbered instruction list\"\n            ]\n        },\n        {\n            \"id\": \"cd-cfg\",\n            \"module\": 4,\n            \"syllabus\": \"4.2\",\n            \"title\": \"Control-flow graphs\",\n            \"note\": \"Draw one node per basic block. Conditional branches normally add target and fall-through edges; unconditional branches add just their targets. A return has no ordinary successor inside that function.\",\n            \"checklist\": [\n                \"Draw fall-through and branch edges\",\n                \"Identify unreachable blocks\"\n            ]\n        },\n        {\n            \"id\": \"cd-liveness\",\n            \"module\": 4,\n            \"syllabus\": \"4.3\",\n            \"title\": \"Liveness analysis\",\n            \"note\": \"A value is live if a future use can occur before redefinition. Work backward to a fixed point: OUT[B] is union of successor IN sets; IN[B] = USE[B] ∪ (OUT[B] − DEF[B]).\",\n            \"checklist\": [\n                \"Compute USE and DEF\",\n                \"Evaluate IN/OUT sets\",\n                \"Repeat through loops until stable\"\n            ]\n        },\n        {\n            \"id\": \"cd-codegen-design\",\n            \"module\": 4,\n            \"syllabus\": \"4.4\",\n            \"title\": \"Code-generator design\",\n            \"note\": \"Instruction selection picks target operations; register allocation and assignment control register use; scheduling orders instructions subject to dependencies. Addressing modes and calling conventions constrain legal code.\",\n            \"checklist\": [\n                \"Compare instruction selection, allocation and scheduling\",\n                \"Explain spill costs and target constraints\"\n            ]\n        },\n        {\n            \"id\": \"cd-codegen-algorithm\",\n            \"module\": 4,\n            \"syllabus\": \"4.4\",\n            \"title\": \"Simple code-generation algorithm\",\n            \"note\": \"Track register and address descriptors. For each TAC instruction, find a register, load operands as needed, emit the target operation, update descriptors, and arrange needed live-out values before a block exit.\",\n            \"checklist\": [\n                \"Trace LOAD, operation and STORE\",\n                \"Update descriptors\",\n                \"Choose a register using next use\"\n            ]\n        }\n    ]\n};\n","/compiler-lectures.js":"\"use strict\";\nconst compilerRows = [\n    {\n        \"id\": \"cd-m3-l01\",\n        \"subjectId\": \"cd\",\n        \"moduleId\": \"cd-m3\",\n        \"syllabusRef\": \"3.1\",\n        \"title\": \"Semantic analysis and syntax-directed translation\",\n        \"educator\": \"Gate Smashers\",\n        \"videoId\": \"_CloXDbYAAg\",\n        \"watchUrl\": \"https://www.youtube.com/watch?v=_CloXDbYAAg\",\n        \"durationSeconds\": 391,\n        \"conceptIds\": [\n            \"cd-semantic\"\n        ],\n        \"coverage\": [\n            \"Semantic analysis\",\n            \"Syntax-directed translation\"\n        ],\n        \"verificationStatus\": \"player-duration-observed-playback-unverified\",\n        \"verificationDate\": \"2026-11-27\",\n        \"playback\": {\n            \"watch\": \"unverified\",\n            \"embed\": \"unverified\"\n        },\n        \"evidence\": {\n            \"video\": \"https://www.youtube.com/watch?v=_CloXDbYAAg\",\n            \"duration\": \"https://www.youtube.com/watch?v=_CloXDbYAAg\",\n            \"coverageSource\": \"SAKEC AY 2026–27 Semester V Compiler Design MSE syllabus, Module 3\",\n            \"durationStatus\": \"duration-shown-by-embedded-youtube-player\",\n            \"embedAudit\": \"Player controls and runtime loaded; actual timestamp advancement was not observed.\"\n        }\n    },\n    {\n        \"id\": \"cd-m3-l02\",\n        \"subjectId\": \"cd\",\n        \"moduleId\": \"cd-m3\",\n        \"syllabusRef\": \"3.1\",\n        \"title\": \"Syntax-directed definitions and attribute types\",\n        \"educator\": \"Sundeep Saradhi Kanthety\",\n        \"videoId\": \"mEvuQkt6Idc\",\n        \"watchUrl\": \"https://www.youtube.com/watch?v=mEvuQkt6Idc\",\n        \"durationSeconds\": 1611,\n        \"conceptIds\": [\n            \"cd-attributes\"\n        ],\n        \"coverage\": [\n            \"Syntax-directed definitions\",\n            \"Synthesized and inherited attributes\"\n        ],\n        \"verificationStatus\": \"player-duration-observed-playback-unverified\",\n        \"verificationDate\": \"2026-11-27\",\n        \"playback\": {\n            \"watch\": \"unverified\",\n            \"embed\": \"unverified\"\n        },\n        \"evidence\": {\n            \"video\": \"https://www.youtube.com/watch?v=mEvuQkt6Idc\",\n            \"coverageSource\": \"SAKEC AY 2026–27 Semester V Compiler Design MSE syllabus, Module 3\",\n            \"duration\": \"https://www.youtube.com/watch?v=mEvuQkt6Idc\",\n            \"durationStatus\": \"duration-shown-by-embedded-youtube-player\",\n            \"embedAudit\": \"Player controls and runtime loaded; actual timestamp advancement was not observed.\"\n        }\n    },\n    {\n        \"id\": \"cd-m3-l03\",\n        \"subjectId\": \"cd\",\n        \"moduleId\": \"cd-m3\",\n        \"syllabusRef\": \"3.2\",\n        \"title\": \"S-attributed and L-attributed definitions\",\n        \"educator\": \"Gate Smashers\",\n        \"videoId\": \"w03voSY4REs\",\n        \"watchUrl\": \"https://www.youtube.com/watch?v=w03voSY4REs\",\n        \"durationSeconds\": 611,\n        \"conceptIds\": [\n            \"cd-sdd-order\"\n        ],\n        \"coverage\": [\n            \"S-attributed definitions\",\n            \"L-attributed definitions\"\n        ],\n        \"verificationStatus\": \"player-duration-observed-playback-unverified\",\n        \"verificationDate\": \"2026-11-27\",\n        \"playback\": {\n            \"watch\": \"unverified\",\n            \"embed\": \"unverified\"\n        },\n        \"evidence\": {\n            \"video\": \"https://www.youtube.com/watch?v=w03voSY4REs\",\n            \"duration\": \"https://www.youtube.com/watch?v=w03voSY4REs\",\n            \"coverageSource\": \"SAKEC AY 2026–27 Semester V Compiler Design MSE syllabus, Module 3\",\n            \"durationStatus\": \"duration-shown-by-embedded-youtube-player\",\n            \"embedAudit\": \"Player controls and runtime loaded; actual timestamp advancement was not observed.\"\n        }\n    },\n    {\n        \"id\": \"cd-m3-l04\",\n        \"subjectId\": \"cd\",\n        \"moduleId\": \"cd-m3\",\n        \"syllabusRef\": \"3.2\",\n        \"title\": \"SDD evaluation order: dependency graph example\",\n        \"educator\": \"Sundeep Saradhi Kanthety\",\n        \"videoId\": \"xnQfcZWCvJI\",\n        \"watchUrl\": \"https://www.youtube.com/watch?v=xnQfcZWCvJI\",\n        \"durationSeconds\": 935,\n        \"conceptIds\": [\n            \"cd-sdd-order\"\n        ],\n        \"coverage\": [\n            \"Attribute dependency graph\",\n            \"Topological evaluation order\"\n        ],\n        \"verificationStatus\": \"player-duration-observed-playback-unverified\",\n        \"verificationDate\": \"2026-11-27\",\n        \"playback\": {\n            \"watch\": \"unverified\",\n            \"embed\": \"unverified\"\n        },\n        \"evidence\": {\n            \"video\": \"https://www.youtube.com/watch?v=xnQfcZWCvJI\",\n            \"coverageSource\": \"SAKEC AY 2026–27 Semester V Compiler Design MSE syllabus, Module 3\",\n            \"duration\": \"https://www.youtube.com/watch?v=xnQfcZWCvJI\",\n            \"durationStatus\": \"duration-shown-by-embedded-youtube-player\",\n            \"watchAudit\": \"Signed-out watch page loaded; pre-roll clock did not advance to lecture content.\",\n            \"embedAudit\": \"Player controls and runtime loaded; actual timestamp advancement was not observed.\"\n        }\n    },\n    {\n        \"id\": \"cd-m3-l05\",\n        \"subjectId\": \"cd\",\n        \"moduleId\": \"cd-m3\",\n        \"syllabusRef\": \"3.3\",\n        \"title\": \"Intermediate code: syntax trees and postfix notation\",\n        \"educator\": \"University Academy\",\n        \"videoId\": \"4XwgPnDCpqo\",\n        \"watchUrl\": \"https://www.youtube.com/watch?v=4XwgPnDCpqo\",\n        \"durationSeconds\": 798,\n        \"conceptIds\": [\n            \"cd-syntax-ir\"\n        ],\n        \"coverage\": [\n            \"Intermediate code generation\",\n            \"Syntax trees\",\n            \"Postfix notation\"\n        ],\n        \"verificationStatus\": \"player-duration-observed-playback-unverified\",\n        \"verificationDate\": \"2026-11-27\",\n        \"playback\": {\n            \"watch\": \"unverified\",\n            \"embed\": \"unverified\"\n        },\n        \"evidence\": {\n            \"video\": \"https://www.youtube.com/watch?v=4XwgPnDCpqo\",\n            \"coverageSource\": \"SAKEC AY 2026–27 Semester V Compiler Design MSE syllabus, Module 3\",\n            \"duration\": \"https://www.youtube.com/watch?v=4XwgPnDCpqo\",\n            \"durationStatus\": \"duration-shown-by-embedded-youtube-player\",\n            \"embedAudit\": \"Player controls and runtime loaded; actual timestamp advancement was not observed.\"\n        }\n    },\n    {\n        \"id\": \"cd-m3-l06\",\n        \"subjectId\": \"cd\",\n        \"moduleId\": \"cd-m3\",\n        \"syllabusRef\": \"3.3\",\n        \"title\": \"Expression DAGs with examples\",\n        \"educator\": \"Sundeep Saradhi Kanthety\",\n        \"videoId\": \"g0N4hWd7BpE\",\n        \"watchUrl\": \"https://www.youtube.com/watch?v=g0N4hWd7BpE\",\n        \"durationSeconds\": 824,\n        \"conceptIds\": [\n            \"cd-syntax-ir\"\n        ],\n        \"coverage\": [\n            \"DAG construction\",\n            \"Repeated subexpressions\"\n        ],\n        \"verificationStatus\": \"player-duration-observed-playback-unverified\",\n        \"verificationDate\": \"2026-11-27\",\n        \"playback\": {\n            \"watch\": \"unverified\",\n            \"embed\": \"unverified\"\n        },\n        \"evidence\": {\n            \"video\": \"https://www.youtube.com/watch?v=g0N4hWd7BpE\",\n            \"coverageSource\": \"SAKEC AY 2026–27 Semester V Compiler Design MSE syllabus, Module 3\",\n            \"duration\": \"https://www.youtube.com/watch?v=g0N4hWd7BpE\",\n            \"durationStatus\": \"duration-shown-by-embedded-youtube-player\",\n            \"embedAudit\": \"Player controls and runtime loaded; actual timestamp advancement was not observed.\"\n        }\n    },\n    {\n        \"id\": \"cd-m3-l07\",\n        \"subjectId\": \"cd\",\n        \"moduleId\": \"cd-m3\",\n        \"syllabusRef\": \"3.3\",\n        \"title\": \"Three-address code\",\n        \"educator\": \"Gate Smashers\",\n        \"videoId\": \"tJUYVGDn0JE\",\n        \"watchUrl\": \"https://www.youtube.com/watch?v=tJUYVGDn0JE\",\n        \"durationSeconds\": 316,\n        \"conceptIds\": [\n            \"cd-tac\"\n        ],\n        \"coverage\": [\n            \"Three-address instructions\",\n            \"Temporaries\"\n        ],\n        \"verificationStatus\": \"player-duration-observed-playback-unverified\",\n        \"verificationDate\": \"2026-11-27\",\n        \"playback\": {\n            \"watch\": \"unverified\",\n            \"embed\": \"unverified\"\n        },\n        \"evidence\": {\n            \"video\": \"https://www.youtube.com/watch?v=tJUYVGDn0JE\",\n            \"duration\": \"https://www.youtube.com/watch?v=tJUYVGDn0JE\",\n            \"coverageSource\": \"SAKEC AY 2026–27 Semester V Compiler Design MSE syllabus, Module 3\",\n            \"durationStatus\": \"duration-shown-by-embedded-youtube-player\",\n            \"embedAudit\": \"Player controls and runtime loaded; actual timestamp advancement was not observed.\"\n        }\n    },\n    {\n        \"id\": \"cd-m3-l08\",\n        \"subjectId\": \"cd\",\n        \"moduleId\": \"cd-m3\",\n        \"syllabusRef\": \"3.3\",\n        \"title\": \"Quadruples, triples and indirect triples\",\n        \"educator\": \"Sundeep Saradhi Kanthety\",\n        \"videoId\": \"sp9wiCgar_I\",\n        \"watchUrl\": \"https://www.youtube.com/watch?v=sp9wiCgar_I\",\n        \"durationSeconds\": 813,\n        \"conceptIds\": [\n            \"cd-reps\"\n        ],\n        \"coverage\": [\n            \"Quadruples\",\n            \"Triples\",\n            \"Indirect triples\"\n        ],\n        \"verificationStatus\": \"player-duration-observed-playback-unverified\",\n        \"verificationDate\": \"2026-11-27\",\n        \"playback\": {\n            \"watch\": \"unverified\",\n            \"embed\": \"unverified\"\n        },\n        \"evidence\": {\n            \"video\": \"https://www.youtube.com/watch?v=sp9wiCgar_I\",\n            \"coverageSource\": \"SAKEC AY 2026–27 Semester V Compiler Design MSE syllabus, Module 3\",\n            \"duration\": \"https://www.youtube.com/watch?v=sp9wiCgar_I\",\n            \"durationStatus\": \"duration-shown-by-embedded-youtube-player\",\n            \"embedAudit\": \"Player controls and runtime loaded; actual timestamp advancement was not observed.\"\n        }\n    },\n    {\n        \"id\": \"cd-m2-l01\",\n        \"subjectId\": \"cd\",\n        \"moduleId\": \"cd-m2\",\n        \"syllabusRef\": \"2.1\",\n        \"title\": \"Bottom-up parsing introduction\",\n        \"educator\": \"Sudhakar Atchala\",\n        \"videoId\": \"RGyzJUM4V0c\",\n        \"watchUrl\": \"https://www.youtube.com/watch?v=RGyzJUM4V0c\",\n        \"durationSeconds\": 809,\n        \"conceptIds\": [\n            \"cd-bottom-up\"\n        ],\n        \"coverage\": [\n            \"Bottom-up parsing\",\n            \"Top-down vs bottom-up\"\n        ],\n        \"verificationStatus\": \"player-duration-observed-playback-unverified\",\n        \"verificationDate\": \"2026-11-27\",\n        \"playback\": {\n            \"watch\": \"unverified\",\n            \"embed\": \"unverified\"\n        },\n        \"evidence\": {\n            \"video\": \"https://www.youtube.com/watch?v=RGyzJUM4V0c\",\n            \"duration\": \"https://www.syncstudy.in/course/PLXj4XH7LcRfC9pGMWuM6UWE3V4YZ9TZzM\",\n            \"durationStatus\": \"playlist-indexed-not-player-measured\",\n            \"coverageStatus\": \"title-description-mapped-not-watch-verified\",\n            \"idStatus\": \"matched-official-youtube-upload-metadata\",\n            \"indexedDurationSeconds\": 810,\n            \"playerDurationSeconds\": 809,\n            \"browserAudit\": \"Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser.\"\n        }\n    },\n    {\n        \"id\": \"cd-m2-l02\",\n        \"subjectId\": \"cd\",\n        \"moduleId\": \"cd-m2\",\n        \"syllabusRef\": \"2.1\",\n        \"title\": \"Handle and handle pruning\",\n        \"educator\": \"Sudhakar Atchala\",\n        \"videoId\": \"MWb18JwEkQo\",\n        \"watchUrl\": \"https://www.youtube.com/watch?v=MWb18JwEkQo\",\n        \"durationSeconds\": 715,\n        \"conceptIds\": [\n            \"cd-handles\"\n        ],\n        \"coverage\": [\n            \"Handle\",\n            \"Handle pruning\"\n        ],\n        \"verificationStatus\": \"player-duration-observed-playback-unverified\",\n        \"verificationDate\": \"2026-11-27\",\n        \"playback\": {\n            \"watch\": \"unverified\",\n            \"embed\": \"unverified\"\n        },\n        \"evidence\": {\n            \"video\": \"https://www.youtube.com/watch?v=MWb18JwEkQo\",\n            \"duration\": \"https://www.syncstudy.in/course/PLXj4XH7LcRfC9pGMWuM6UWE3V4YZ9TZzM\",\n            \"durationStatus\": \"playlist-indexed-not-player-measured\",\n            \"coverageStatus\": \"title-description-mapped-not-watch-verified\",\n            \"idStatus\": \"matched-official-youtube-upload-metadata\",\n            \"indexedDurationSeconds\": 716,\n            \"playerDurationSeconds\": 715,\n            \"browserAudit\": \"Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser.\"\n        }\n    },\n    {\n        \"id\": \"cd-m2-l03\",\n        \"subjectId\": \"cd\",\n        \"moduleId\": \"cd-m2\",\n        \"syllabusRef\": \"2.2\",\n        \"title\": \"Shift-reduce parsing with example\",\n        \"educator\": \"Sudhakar Atchala\",\n        \"videoId\": \"Ha6eSb9Dgh0\",\n        \"watchUrl\": \"https://www.youtube.com/watch?v=Ha6eSb9Dgh0\",\n        \"durationSeconds\": 605,\n        \"conceptIds\": [\n            \"cd-shift-reduce\"\n        ],\n        \"coverage\": [\n            \"Shift\",\n            \"Reduce\",\n            \"Worked parsing example\"\n        ],\n        \"verificationStatus\": \"player-duration-observed-playback-unverified\",\n        \"verificationDate\": \"2026-11-27\",\n        \"playback\": {\n            \"watch\": \"unverified\",\n            \"embed\": \"unverified\"\n        },\n        \"evidence\": {\n            \"video\": \"https://www.youtube.com/watch?v=Ha6eSb9Dgh0\",\n            \"duration\": \"https://www.syncstudy.in/course/PLXj4XH7LcRfC9pGMWuM6UWE3V4YZ9TZzM\",\n            \"durationStatus\": \"playlist-indexed-not-player-measured\",\n            \"coverageStatus\": \"title-description-mapped-not-watch-verified\",\n            \"idStatus\": \"brief-supplied-not-independently-retrieved\",\n            \"playerDurationSeconds\": 605,\n            \"browserAudit\": \"Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser.\"\n        }\n    },\n    {\n        \"id\": \"cd-m2-l04\",\n        \"subjectId\": \"cd\",\n        \"moduleId\": \"cd-m2\",\n        \"syllabusRef\": \"2.1\",\n        \"title\": \"LEADING and TRAILING\",\n        \"educator\": \"Sudhakar Atchala\",\n        \"videoId\": \"vXIIcRCS7kY\",\n        \"watchUrl\": \"https://www.youtube.com/watch?v=vXIIcRCS7kY\",\n        \"durationSeconds\": 524,\n        \"conceptIds\": [\n            \"cd-leading-trailing\"\n        ],\n        \"coverage\": [\n            \"LEADING\",\n            \"TRAILING\"\n        ],\n        \"verificationStatus\": \"player-duration-observed-playback-unverified\",\n        \"verificationDate\": \"2026-11-27\",\n        \"playback\": {\n            \"watch\": \"unverified\",\n            \"embed\": \"unverified\"\n        },\n        \"evidence\": {\n            \"video\": \"https://www.youtube.com/watch?v=vXIIcRCS7kY\",\n            \"duration\": \"https://www.syncstudy.in/course/PLXj4XH7LcRfC9pGMWuM6UWE3V4YZ9TZzM\",\n            \"durationStatus\": \"playlist-indexed-not-player-measured\",\n            \"coverageStatus\": \"title-description-mapped-not-watch-verified\",\n            \"idStatus\": \"matched-official-youtube-upload-metadata\",\n            \"playerDurationSeconds\": 524,\n            \"browserAudit\": \"Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser.\"\n        }\n    },\n    {\n        \"id\": \"cd-m2-l05\",\n        \"subjectId\": \"cd\",\n        \"moduleId\": \"cd-m2\",\n        \"syllabusRef\": \"2.1\",\n        \"title\": \"Operator precedence parser\",\n        \"educator\": \"Sudhakar Atchala\",\n        \"videoId\": \"6Wh1Mbup-ac\",\n        \"watchUrl\": \"https://www.youtube.com/watch?v=6Wh1Mbup-ac\",\n        \"durationSeconds\": 878,\n        \"conceptIds\": [\n            \"cd-precedence-table\"\n        ],\n        \"coverage\": [\n            \"Precedence relations\",\n            \"Operator precedence parsing\"\n        ],\n        \"verificationStatus\": \"player-duration-observed-playback-unverified\",\n        \"verificationDate\": \"2026-11-27\",\n        \"playback\": {\n            \"watch\": \"unverified\",\n            \"embed\": \"unverified\"\n        },\n        \"evidence\": {\n            \"video\": \"https://www.youtube.com/watch?v=6Wh1Mbup-ac\",\n            \"duration\": \"https://www.syncstudy.in/course/PLXj4XH7LcRfC9pGMWuM6UWE3V4YZ9TZzM\",\n            \"durationStatus\": \"playlist-indexed-not-player-measured\",\n            \"coverageStatus\": \"title-description-mapped-not-watch-verified\",\n            \"idStatus\": \"brief-supplied-not-independently-retrieved\",\n            \"playerDurationSeconds\": 878,\n            \"browserAudit\": \"Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser.\"\n        }\n    },\n    {\n        \"id\": \"cd-m2-l06\",\n        \"subjectId\": \"cd\",\n        \"moduleId\": \"cd-m2\",\n        \"syllabusRef\": \"2.1\",\n        \"title\": \"Operator precedence solved example\",\n        \"educator\": \"Sudhakar Atchala\",\n        \"videoId\": \"ud-16se-DRM\",\n        \"watchUrl\": \"https://www.youtube.com/watch?v=ud-16se-DRM\",\n        \"durationSeconds\": 1385,\n        \"conceptIds\": [\n            \"cd-precedence-table\"\n        ],\n        \"coverage\": [\n            \"Worked operator-precedence parser\"\n        ],\n        \"verificationStatus\": \"player-duration-observed-playback-unverified\",\n        \"verificationDate\": \"2026-11-27\",\n        \"playback\": {\n            \"watch\": \"unverified\",\n            \"embed\": \"unverified\"\n        },\n        \"evidence\": {\n            \"video\": \"https://www.youtube.com/watch?v=ud-16se-DRM\",\n            \"duration\": \"https://www.syncstudy.in/course/PLXj4XH7LcRfC9pGMWuM6UWE3V4YZ9TZzM\",\n            \"durationStatus\": \"playlist-indexed-not-player-measured\",\n            \"coverageStatus\": \"title-description-mapped-not-watch-verified\",\n            \"idStatus\": \"matched-official-youtube-upload-metadata\",\n            \"playerDurationSeconds\": 1385,\n            \"browserAudit\": \"Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser.\"\n        }\n    },\n    {\n        \"id\": \"cd-m2-l07\",\n        \"subjectId\": \"cd\",\n        \"moduleId\": \"cd-m2\",\n        \"syllabusRef\": \"2.2\",\n        \"title\": \"LR(0), closure, GOTO and parsing table\",\n        \"educator\": \"Gate Smashers\",\n        \"videoId\": \"J4ZME5KOB-s\",\n        \"watchUrl\": \"https://www.youtube.com/watch?v=J4ZME5KOB-s\",\n        \"durationSeconds\": 1006,\n        \"conceptIds\": [\n            \"cd-lr-items\"\n        ],\n        \"coverage\": [\n            \"LR(0) items\",\n            \"Closure\",\n            \"GOTO\",\n            \"ACTION/GOTO table\"\n        ],\n        \"verificationStatus\": \"player-duration-observed-playback-unverified\",\n        \"verificationDate\": \"2026-11-27\",\n        \"playback\": {\n            \"watch\": \"unverified\",\n            \"embed\": \"unverified\"\n        },\n        \"evidence\": {\n            \"video\": \"https://www.youtube.com/watch?v=J4ZME5KOB-s\",\n            \"duration\": \"https://playlistduration.com/playlist/PLxCzCOWd7aiEKtKSIHYusizkESC42diyc\",\n            \"durationStatus\": \"playlist-indexed-not-player-measured\",\n            \"coverageStatus\": \"title-description-mapped-not-watch-verified\",\n            \"idStatus\": \"matched-official-youtube-upload-metadata\",\n            \"playerDurationSeconds\": 1006,\n            \"browserAudit\": \"Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser.\"\n        }\n    },\n    {\n        \"id\": \"cd-m2-l08\",\n        \"subjectId\": \"cd\",\n        \"moduleId\": \"cd-m2\",\n        \"syllabusRef\": \"2.2\",\n        \"title\": \"SLR(1) parsing table\",\n        \"educator\": \"Gate Smashers\",\n        \"videoId\": \"Z1Hu9TIef9k\",\n        \"watchUrl\": \"https://www.youtube.com/watch?v=Z1Hu9TIef9k\",\n        \"durationSeconds\": 465,\n        \"conceptIds\": [\n            \"cd-slr\"\n        ],\n        \"coverage\": [\n            \"SLR(1) parsing table\"\n        ],\n        \"verificationStatus\": \"player-duration-observed-playback-unverified\",\n        \"verificationDate\": \"2026-11-27\",\n        \"playback\": {\n            \"watch\": \"unverified\",\n            \"embed\": \"unverified\"\n        },\n        \"evidence\": {\n            \"video\": \"https://www.youtube.com/watch?v=Z1Hu9TIef9k\",\n            \"duration\": \"https://playlistduration.com/playlist/PLxCzCOWd7aiEKtKSIHYusizkESC42diyc\",\n            \"durationStatus\": \"playlist-indexed-not-player-measured\",\n            \"coverageStatus\": \"title-description-mapped-not-watch-verified\",\n            \"idStatus\": \"matched-official-youtube-upload-metadata\",\n            \"indexedDurationSeconds\": 466,\n            \"playerDurationSeconds\": 465,\n            \"browserAudit\": \"Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser.\"\n        }\n    },\n    {\n        \"id\": \"cd-m2-l09\",\n        \"subjectId\": \"cd\",\n        \"moduleId\": \"cd-m2\",\n        \"syllabusRef\": \"2.2\",\n        \"title\": \"CLR(1) parsing table\",\n        \"educator\": \"Gate Smashers\",\n        \"videoId\": \"sMxqUQc_jHQ\",\n        \"watchUrl\": \"https://www.youtube.com/watch?v=sMxqUQc_jHQ\",\n        \"durationSeconds\": 710,\n        \"conceptIds\": [\n            \"cd-clr\"\n        ],\n        \"coverage\": [\n            \"CLR(1) canonical items\",\n            \"Lookahead\"\n        ],\n        \"verificationStatus\": \"player-duration-observed-playback-unverified\",\n        \"verificationDate\": \"2026-11-27\",\n        \"playback\": {\n            \"watch\": \"unverified\",\n            \"embed\": \"unverified\"\n        },\n        \"evidence\": {\n            \"video\": \"https://www.youtube.com/watch?v=sMxqUQc_jHQ\",\n            \"duration\": \"https://playlistduration.com/playlist/PLxCzCOWd7aiEKtKSIHYusizkESC42diyc\",\n            \"durationStatus\": \"playlist-indexed-not-player-measured\",\n            \"coverageStatus\": \"title-description-mapped-not-watch-verified\",\n            \"idStatus\": \"matched-official-youtube-upload-metadata\",\n            \"playerDurationSeconds\": 710,\n            \"browserAudit\": \"Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser.\"\n        }\n    },\n    {\n        \"id\": \"cd-m2-l10\",\n        \"subjectId\": \"cd\",\n        \"moduleId\": \"cd-m2\",\n        \"syllabusRef\": \"2.2\",\n        \"title\": \"LALR(1) parsing table\",\n        \"educator\": \"Gate Smashers\",\n        \"videoId\": \"GOlsYofJjyQ\",\n        \"watchUrl\": \"https://www.youtube.com/watch?v=GOlsYofJjyQ\",\n        \"durationSeconds\": 786,\n        \"conceptIds\": [\n            \"cd-lalr\"\n        ],\n        \"coverage\": [\n            \"LALR(1) parsing table\",\n            \"CLR vs LALR\"\n        ],\n        \"verificationStatus\": \"player-duration-observed-playback-unverified\",\n        \"verificationDate\": \"2026-11-27\",\n        \"playback\": {\n            \"watch\": \"unverified\",\n            \"embed\": \"unverified\"\n        },\n        \"evidence\": {\n            \"video\": \"https://www.youtube.com/watch?v=GOlsYofJjyQ\",\n            \"duration\": \"https://playlistduration.com/playlist/PLxCzCOWd7aiEKtKSIHYusizkESC42diyc\",\n            \"durationStatus\": \"playlist-indexed-not-player-measured\",\n            \"coverageStatus\": \"title-description-mapped-not-watch-verified\",\n            \"idStatus\": \"matched-official-youtube-upload-metadata\",\n            \"playerDurationSeconds\": 786,\n            \"browserAudit\": \"Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser.\"\n        }\n    },\n    {\n        \"id\": \"cd-m2-l11\",\n        \"subjectId\": \"cd\",\n        \"moduleId\": \"cd-m2\",\n        \"syllabusRef\": \"2.2\",\n        \"title\": \"LR parser comparison\",\n        \"educator\": \"Gate Smashers\",\n        \"videoId\": \"QNv2g-lwH2c\",\n        \"watchUrl\": \"https://www.youtube.com/watch?v=QNv2g-lwH2c\",\n        \"durationSeconds\": 514,\n        \"conceptIds\": [\n            \"cd-lr-items\",\n            \"cd-slr\",\n            \"cd-clr\",\n            \"cd-lalr\"\n        ],\n        \"coverage\": [\n            \"LR parser comparison\"\n        ],\n        \"verificationStatus\": \"player-duration-observed-playback-unverified\",\n        \"verificationDate\": \"2026-11-27\",\n        \"playback\": {\n            \"watch\": \"unverified\",\n            \"embed\": \"unverified\"\n        },\n        \"evidence\": {\n            \"video\": \"https://www.youtube.com/watch?v=QNv2g-lwH2c\",\n            \"duration\": \"https://playlistduration.com/playlist/PLxCzCOWd7aiEKtKSIHYusizkESC42diyc\",\n            \"durationStatus\": \"playlist-indexed-not-player-measured\",\n            \"coverageStatus\": \"title-description-mapped-not-watch-verified\",\n            \"idStatus\": \"matched-official-youtube-upload-metadata\",\n            \"playerDurationSeconds\": 514,\n            \"browserAudit\": \"Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser.\"\n        }\n    },\n    {\n        \"id\": \"cd-m4-l01\",\n        \"subjectId\": \"cd\",\n        \"moduleId\": \"cd-m4\",\n        \"syllabusRef\": \"4.1\",\n        \"title\": \"Machine-dependent and independent optimization\",\n        \"educator\": \"Gate Smashers\",\n        \"videoId\": \"O5YlRUYFDA8\",\n        \"watchUrl\": \"https://www.youtube.com/watch?v=O5YlRUYFDA8\",\n        \"durationSeconds\": 444,\n        \"conceptIds\": [\n            \"cd-optimization\"\n        ],\n        \"coverage\": [\n            \"Machine-dependent and independent optimization\"\n        ],\n        \"verificationStatus\": \"player-duration-observed-playback-unverified\",\n        \"verificationDate\": \"2026-11-27\",\n        \"playback\": {\n            \"watch\": \"unverified\",\n            \"embed\": \"unverified\"\n        },\n        \"evidence\": {\n            \"video\": \"https://www.youtube.com/watch?v=O5YlRUYFDA8\",\n            \"duration\": \"https://playlistduration.com/playlist/PLxCzCOWd7aiEKtKSIHYusizkESC42diyc\",\n            \"durationStatus\": \"playlist-indexed-not-player-measured\",\n            \"coverageStatus\": \"title-description-mapped-not-watch-verified\",\n            \"idStatus\": \"matched-official-youtube-upload-metadata\",\n            \"indexedDurationSeconds\": 445,\n            \"playerDurationSeconds\": 444,\n            \"browserAudit\": \"Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser.\"\n        }\n    },\n    {\n        \"id\": \"cd-m4-l02\",\n        \"subjectId\": \"cd\",\n        \"moduleId\": \"cd-m4\",\n        \"syllabusRef\": \"4.1\",\n        \"title\": \"Principal sources of optimization\",\n        \"educator\": \"Sudhakar Atchala\",\n        \"videoId\": \"yHZFVz6TVmI\",\n        \"watchUrl\": \"https://www.youtube.com/watch?v=yHZFVz6TVmI\",\n        \"durationSeconds\": 707,\n        \"conceptIds\": [\n            \"cd-optimization\"\n        ],\n        \"coverage\": [\n            \"Principal sources of optimization\"\n        ],\n        \"verificationStatus\": \"player-duration-observed-playback-unverified\",\n        \"verificationDate\": \"2026-11-27\",\n        \"playback\": {\n            \"watch\": \"unverified\",\n            \"embed\": \"unverified\"\n        },\n        \"evidence\": {\n            \"video\": \"https://www.youtube.com/watch?v=yHZFVz6TVmI\",\n            \"duration\": \"https://www.syncstudy.in/course/PLXj4XH7LcRfC9pGMWuM6UWE3V4YZ9TZzM\",\n            \"durationStatus\": \"playlist-indexed-not-player-measured\",\n            \"coverageStatus\": \"title-description-mapped-not-watch-verified\",\n            \"idStatus\": \"brief-supplied-not-independently-retrieved\",\n            \"indexedDurationSeconds\": 708,\n            \"playerDurationSeconds\": 707,\n            \"browserAudit\": \"Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser.\"\n        }\n    },\n    {\n        \"id\": \"cd-m4-l04\",\n        \"subjectId\": \"cd\",\n        \"moduleId\": \"cd-m4\",\n        \"syllabusRef\": \"4.1\",\n        \"title\": \"Loop optimization\",\n        \"educator\": \"Gate Smashers\",\n        \"videoId\": \"AKYuP3vpdlg\",\n        \"watchUrl\": \"https://www.youtube.com/watch?v=AKYuP3vpdlg\",\n        \"durationSeconds\": 415,\n        \"conceptIds\": [\n            \"cd-optimization-methods\"\n        ],\n        \"coverage\": [\n            \"Loop optimization\"\n        ],\n        \"verificationStatus\": \"player-duration-observed-playback-unverified\",\n        \"verificationDate\": \"2026-11-27\",\n        \"playback\": {\n            \"watch\": \"unverified\",\n            \"embed\": \"unverified\"\n        },\n        \"evidence\": {\n            \"video\": \"https://www.youtube.com/watch?v=AKYuP3vpdlg\",\n            \"duration\": \"https://playlistduration.com/playlist/PLxCzCOWd7aiEKtKSIHYusizkESC42diyc\",\n            \"durationStatus\": \"playlist-indexed-not-player-measured\",\n            \"coverageStatus\": \"title-description-mapped-not-watch-verified\",\n            \"idStatus\": \"matched-official-youtube-upload-metadata\",\n            \"indexedDurationSeconds\": 416,\n            \"playerDurationSeconds\": 415,\n            \"browserAudit\": \"Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser.\"\n        }\n    },\n    {\n        \"id\": \"cd-m4-l05\",\n        \"subjectId\": \"cd\",\n        \"moduleId\": \"cd-m4\",\n        \"syllabusRef\": \"4.1\",\n        \"title\": \"Local and global optimization\",\n        \"educator\": \"Gate Smashers\",\n        \"videoId\": \"rq1Xo0TUkA4\",\n        \"watchUrl\": \"https://www.youtube.com/watch?v=rq1Xo0TUkA4\",\n        \"durationSeconds\": 536,\n        \"conceptIds\": [\n            \"cd-optimization-methods\"\n        ],\n        \"coverage\": [\n            \"Local vs global optimization\"\n        ],\n        \"verificationStatus\": \"player-duration-observed-playback-unverified\",\n        \"verificationDate\": \"2026-11-27\",\n        \"playback\": {\n            \"watch\": \"unverified\",\n            \"embed\": \"unverified\"\n        },\n        \"evidence\": {\n            \"video\": \"https://www.youtube.com/watch?v=rq1Xo0TUkA4\",\n            \"duration\": \"https://playlistduration.com/playlist/PLxCzCOWd7aiEKtKSIHYusizkESC42diyc\",\n            \"durationStatus\": \"playlist-indexed-not-player-measured\",\n            \"coverageStatus\": \"title-description-mapped-not-watch-verified\",\n            \"idStatus\": \"matched-official-youtube-upload-metadata\",\n            \"playerDurationSeconds\": 536,\n            \"browserAudit\": \"Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser.\"\n        }\n    },\n    {\n        \"id\": \"cd-m4-l06\",\n        \"subjectId\": \"cd\",\n        \"moduleId\": \"cd-m4\",\n        \"syllabusRef\": \"4.2\",\n        \"title\": \"Basic blocks and flow graphs\",\n        \"educator\": \"Gate Smashers\",\n        \"videoId\": \"tkSsh91ehUA\",\n        \"watchUrl\": \"https://www.youtube.com/watch?v=tkSsh91ehUA\",\n        \"durationSeconds\": 510,\n        \"conceptIds\": [\n            \"cd-blocks\",\n            \"cd-cfg\"\n        ],\n        \"coverage\": [\n            \"Basic blocks\",\n            \"Control-flow graph\"\n        ],\n        \"verificationStatus\": \"player-duration-observed-playback-unverified\",\n        \"verificationDate\": \"2026-11-27\",\n        \"playback\": {\n            \"watch\": \"unverified\",\n            \"embed\": \"unverified\"\n        },\n        \"evidence\": {\n            \"video\": \"https://www.youtube.com/watch?v=tkSsh91ehUA\",\n            \"duration\": \"https://playlistduration.com/playlist/PLxCzCOWd7aiEKtKSIHYusizkESC42diyc\",\n            \"durationStatus\": \"playlist-indexed-not-player-measured\",\n            \"coverageStatus\": \"title-description-mapped-not-watch-verified\",\n            \"idStatus\": \"matched-title-and-link-in-creator-playlist-index\",\n            \"indexedDurationSeconds\": 511,\n            \"playerDurationSeconds\": 510,\n            \"browserAudit\": \"Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser.\"\n        }\n    },\n    {\n        \"id\": \"cd-m4-l07\",\n        \"subjectId\": \"cd\",\n        \"moduleId\": \"cd-m4\",\n        \"syllabusRef\": \"4.3\",\n        \"title\": \"Liveness analysis\",\n        \"educator\": \"Advanced Maths\",\n        \"videoId\": \"A8gj5B7M1Ho\",\n        \"watchUrl\": \"https://www.youtube.com/watch?v=A8gj5B7M1Ho\",\n        \"durationSeconds\": 1194,\n        \"conceptIds\": [\n            \"cd-liveness\"\n        ],\n        \"coverage\": [\n            \"Liveness analysis\"\n        ],\n        \"verificationStatus\": \"replacement-player-duration-observed-playback-unverified\",\n        \"verificationDate\": \"2026-11-27\",\n        \"playback\": {\n            \"watch\": \"unverified\",\n            \"embed\": \"unverified\"\n        },\n        \"evidence\": {\n            \"replacementOf\": \"ERzKug9_9tg\",\n            \"replacementReason\": \"Original embedded player reported Video unavailable.\",\n            \"source\": \"https://www.youtube.com/watch?v=A8gj5B7M1Ho\",\n            \"coverageChapters\": {\n                \"00:31\": \"Definition\",\n                \"04:53\": \"Algorithm\",\n                \"07:21\": \"Worked GEN/KILL/IN/OUT calculation\",\n                \"17:22\": \"Dead variable removal\"\n            },\n            \"playerDurationSeconds\": 1194,\n            \"browserAudit\": \"Signed-out watch page and embed opened without the original unavailability message. Playback timestamp did not advance in the test browser.\"\n        }\n    },\n    {\n        \"id\": \"cd-m4-l08\",\n        \"subjectId\": \"cd\",\n        \"moduleId\": \"cd-m4\",\n        \"syllabusRef\": \"4.4\",\n        \"title\": \"Issues in code generator design\",\n        \"educator\": \"Sudhakar Atchala\",\n        \"videoId\": \"CrdVTw4JaiQ\",\n        \"watchUrl\": \"https://www.youtube.com/watch?v=CrdVTw4JaiQ\",\n        \"durationSeconds\": 1211,\n        \"conceptIds\": [\n            \"cd-codegen-design\"\n        ],\n        \"coverage\": [\n            \"Issues in code generator design\"\n        ],\n        \"verificationStatus\": \"player-duration-observed-playback-unverified\",\n        \"verificationDate\": \"2026-11-27\",\n        \"playback\": {\n            \"watch\": \"unverified\",\n            \"embed\": \"unverified\"\n        },\n        \"evidence\": {\n            \"video\": \"https://www.youtube.com/watch?v=CrdVTw4JaiQ\",\n            \"duration\": \"https://www.syncstudy.in/course/PLXj4XH7LcRfC9pGMWuM6UWE3V4YZ9TZzM\",\n            \"durationStatus\": \"playlist-indexed-not-player-measured\",\n            \"coverageStatus\": \"title-description-mapped-not-watch-verified\",\n            \"idStatus\": \"matched-official-youtube-upload-metadata\",\n            \"indexedDurationSeconds\": 1212,\n            \"playerDurationSeconds\": 1211,\n            \"browserAudit\": \"Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser.\"\n        }\n    },\n    {\n        \"id\": \"cd-m4-l09\",\n        \"subjectId\": \"cd\",\n        \"moduleId\": \"cd-m4\",\n        \"syllabusRef\": \"4.4\",\n        \"title\": \"Simple code generator algorithm\",\n        \"educator\": \"Sudhakar Atchala\",\n        \"videoId\": \"Zz94_c-xFvA\",\n        \"watchUrl\": \"https://www.youtube.com/watch?v=Zz94_c-xFvA\",\n        \"durationSeconds\": 1084,\n        \"conceptIds\": [\n            \"cd-codegen-algorithm\"\n        ],\n        \"coverage\": [\n            \"Simple code generator algorithm\"\n        ],\n        \"verificationStatus\": \"player-duration-observed-playback-unverified\",\n        \"verificationDate\": \"2026-11-27\",\n        \"playback\": {\n            \"watch\": \"unverified\",\n            \"embed\": \"unverified\"\n        },\n        \"evidence\": {\n            \"video\": \"https://www.youtube.com/watch?v=Zz94_c-xFvA\",\n            \"duration\": \"https://www.syncstudy.in/course/PLXj4XH7LcRfC9pGMWuM6UWE3V4YZ9TZzM\",\n            \"durationStatus\": \"playlist-indexed-not-player-measured\",\n            \"coverageStatus\": \"title-description-mapped-not-watch-verified\",\n            \"idStatus\": \"matched-official-youtube-upload-metadata\",\n            \"indexedDurationSeconds\": 1085,\n            \"playerDurationSeconds\": 1084,\n            \"browserAudit\": \"Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser.\"\n        }\n    },\n    {\n        \"id\": \"cd-m2-l12\",\n        \"workedExample\": true,\n        \"subjectId\": \"cd\",\n        \"moduleId\": \"cd-m2\",\n        \"syllabusRef\": \"2.1\",\n        \"title\": \"Operator precedence: worked example 2\",\n        \"educator\": \"Sudhakar Atchala\",\n        \"videoId\": \"qfV5MmqC1B8\",\n        \"watchUrl\": \"https://www.youtube.com/watch?v=qfV5MmqC1B8\",\n        \"durationSeconds\": 1120,\n        \"conceptIds\": [\n            \"cd-precedence-table\"\n        ],\n        \"coverage\": [\n            \"Worked operator-precedence parsing example\"\n        ],\n        \"verificationStatus\": \"source-indexed-playback-unverified\",\n        \"verificationDate\": \"2026-11-27\",\n        \"playback\": {\n            \"watch\": \"unverified\",\n            \"embed\": \"unverified\"\n        },\n        \"evidence\": {\n            \"sourcePlaylist\": \"https://www.youtube.com/playlist?list=PLXj4XH7LcRfC9pGMWuM6UWE3V4YZ9TZzM\",\n            \"playlistPosition\": 38,\n            \"durationIndex\": \"https://www.syncstudy.in/course/PLXj4XH7LcRfC9pGMWuM6UWE3V4YZ9TZzM\"\n        }\n    },\n    {\n        \"id\": \"cd-m2-l13\",\n        \"workedExample\": true,\n        \"subjectId\": \"cd\",\n        \"moduleId\": \"cd-m2\",\n        \"syllabusRef\": \"2.2\",\n        \"title\": \"LALR vs CLR parsing tables: worked example\",\n        \"educator\": \"Gate Smashers\",\n        \"videoId\": \"pMeq6OIB2eI\",\n        \"watchUrl\": \"https://www.youtube.com/watch?v=pMeq6OIB2eI\",\n        \"durationSeconds\": 1033,\n        \"conceptIds\": [\n            \"cd-lalr\",\n            \"cd-clr\"\n        ],\n        \"coverage\": [\n            \"Worked comparison of LALR and CLR parsing tables\"\n        ],\n        \"verificationStatus\": \"source-indexed-playback-unverified\",\n        \"verificationDate\": \"2026-11-27\",\n        \"playback\": {\n            \"watch\": \"unverified\",\n            \"embed\": \"unverified\"\n        },\n        \"evidence\": {\n            \"sourcePlaylist\": \"https://www.youtube.com/playlist?list=PLxCzCOWd7aiEKtKSIHYusizkESC42diyc\",\n            \"creatorLectureNumber\": 15,\n            \"durationIndex\": \"https://playlistduration.com/playlist/PLxCzCOWd7aiEKtKSIHYusizkESC42diyc\"\n        }\n    },\n    {\n        \"id\": \"cd-m4-l10\",\n        \"workedExample\": true,\n        \"subjectId\": \"cd\",\n        \"moduleId\": \"cd-m4\",\n        \"syllabusRef\": \"4.4\",\n        \"title\": \"Simple code generation: worked example\",\n        \"educator\": \"Kalrav\",\n        \"videoId\": \"dbNIHGp3BI0\",\n        \"watchUrl\": \"https://www.youtube.com/watch?v=dbNIHGp3BI0&t=290s\",\n        \"durationSeconds\": null,\n        \"conceptIds\": [\n            \"cd-codegen-algorithm\"\n        ],\n        \"coverage\": [\n            \"Converting three-address code to target instructions\"\n        ],\n        \"verificationStatus\": \"source-indexed-playback-unverified\",\n        \"verificationDate\": \"2026-11-27\",\n        \"playback\": {\n            \"watch\": \"unverified\",\n            \"embed\": \"unverified\"\n        },\n        \"evidence\": {\n            \"creatorChapter\": \"Solved Example\",\n            \"creatorChapterStartSeconds\": 290\n        },\n        \"startSeconds\": 290\n    }\n];\n","/compiler.js":"\"use strict\";\nconst compilerModules = ['cd-m1', 'cd-m2', 'cd-m3', 'cd-m4'];\nconst compilerDefinitions = [\n    ['Compiler Basics and Top Down Parsing', 10, ['System software', 'Compiler phases', 'Lexical analysis and finite automata', 'Tokens, LEX/FLEX and symbol tables', 'Top-down parsing and LL(1)']],\n    ['Bottom Up Parsing', 22, ['Handles, handle pruning and operator precedence', 'Shift-reduce and LR parsing tables']],\n    ['Intermediate Code Generation', 8, ['Semantic analysis, SDDs and attributes', 'Evaluation order, S-attributed and L-attributed definitions', 'Intermediate code representations']],\n    ['Code Generation', 20, ['Optimization techniques', 'Basic blocks and flow graphs', 'Liveness analysis', 'Code generator design and algorithms']],\n];\n// Retired resources are accepted only as saved history, not study material.\nconst retiredCompilerLecture = 'cd-m4-l03';\nconst retiredCompilerCard = 'cd-optimization-07';\nconst compilerSectionLayout = {\n    'cd-m2': [['Handles and shift-reduce parsing', [1, 2, 3]], ['Operator precedence', [4, 5, 6, 12]], ['LR families and parsing tables', [7, 8, 9, 10, 13, 11]]],\n    'cd-m3': [['Semantic analysis and attributes', [1, 2]], ['SDD evaluation', [3, 4]], ['Intermediate code and representations', [5, 6, 7, 8]]],\n    'cd-m4': [['Code optimization', [1, 2, 4, 5]], ['Control flow and liveness', [6, 7]], ['Generating target code', [8, 9, 10]]],\n};\nconst compilerModuleData = Object.fromEntries(compilerModules.map((id, index) => {\n    const [name, marks, topics] = compilerDefinitions[index], number = index + 1;\n    let visibleNumber = 0;\n    const sections = (compilerSectionLayout[id] ?? []).map(([name, order]) => ({ name, rows: order.flatMap(n => {\n            const row = compilerRows.find(r => r.id === id + '-l' + String(n).padStart(2, '0'));\n            if (!row)\n                return [];\n            const seconds = row.durationSeconds;\n            return [{ n: ++visibleNumber, title: row.title, sy: row.syllabusRef, educator: row.educator, id: row.videoId, uid: row.id,\n                    topicIds: [row.syllabusRef], conceptIds: row.conceptIds, workedExample: row.workedExample, time: seconds === null ? null : Math.floor(seconds / 60) + ':' + String(seconds % 60).padStart(2, '0'),\n                    videoTitle: row.title, startSeconds: row.startSeconds, endSeconds: row.endSeconds, durationSeconds: seconds, verificationStatus: row.playback.watch === 'verified' && row.playback.embed === 'verified' ? 'verified' : 'playback-unverified', verificationDate: row.verificationDate }];\n        }) }));\n    const value = { id, name, marks, weight: (100 * marks / 60).toFixed(2) + '%', sections, topics: [...topics], practice: [],\n        practiceLabel: 'Revision notes', masteryLabel: 'concepts', stages: ['Not started', 'Mastered'], lectures: [], subjectId: 'cd', number,\n        revisionOnly: number === 1 };\n    return [id, value];\n}));\nconst revisionConcepts = (mod) => mod.subjectId === 'cd' ? compilerContent.concepts.filter(c => c.module === mod.number) : [];\nconst conceptKey = (id) => `concept/${id}/done`;\nconst recallKey = (subject, id) => `recall/${subject}/card/${id}`;\nconst recallSessionKey = (subject) => `recall/${subject}/session`;\nconst validTimestamp = (v) => typeof v === 'number' && Number.isSafeInteger(v) && v >= 0 && v <= 8640000000000000;\nconst recallRatings = ['Again', 'Hard', 'Good', 'Easy'];\nfunction scheduleRecall(old, rating, now, userId, cardId) {\n    const day = 86400000, previous = old ? Math.max(1, (old.nextReview - old.lastReviewed) / day) : 0;\n    const interval = rating === 'Again' ? 600000 : rating === 'Hard' ? day * Math.min(60, Math.max(1, previous * 1.2)) : rating === 'Good' ? day * Math.min(180, Math.max(2, previous * 2)) : day * Math.min(365, Math.max(4, previous * 2.8));\n    return { userId, cardId, rating, reviewCount: Math.min(1000000, (old?.reviewCount ?? 0) + 1), lastReviewed: now, nextReview: Math.round(now + interval), mastery: rating === 'Again' ? 'learning' : interval >= day * 14 ? 'mastered' : 'reviewing' };\n}\nfunction isRecallReview(value, cardId) {\n    if (value === null)\n        return true;\n    if (!value || typeof value !== 'object' || Array.isArray(value))\n        return false;\n    const v = value;\n    return Object.keys(v).length === 7 && v.cardId === cardId && typeof v.userId === 'string' && v.userId.length <= 256 &&\n        recallRatings.includes(v.rating) && typeof v.reviewCount === 'number' && Number.isSafeInteger(v.reviewCount) && v.reviewCount > 0 && v.reviewCount <= 1000000 &&\n        validTimestamp(v.lastReviewed) && validTimestamp(v.nextReview) && v.nextReview >= v.lastReviewed &&\n        ['learning', 'reviewing', 'mastered'].includes(v.mastery ?? '');\n}\nfunction isRecallSession(value, ids) {\n    if (value === null)\n        return true;\n    if (!value || typeof value !== 'object' || Array.isArray(value))\n        return false;\n    const s = value;\n    return Object.keys(s).length === 4 && typeof s.title === 'string' && s.title.length <= 120 && typeof s.flipped === 'boolean' &&\n        Array.isArray(s.cards) && s.cards.length > 0 && s.cards.length <= 160 && new Set(s.cards).size === s.cards.length && s.cards.every(id => typeof id === 'string' && ids.has(id)) &&\n        typeof s.index === 'number' && Number.isSafeInteger(s.index) && s.index >= 0 && s.index <= s.cards.length;\n}\n","/schema.js":"\"use strict\";\nconst studyModules = {\n    m3: { id: 'm3', subjectId: 'cn', number: 3, name: 'Network Layer', marks: 22.4, weight: '37.33%', sections, topics, practice, practiceLabel: 'Numerical practice', masteryLabel: 'numerical skills', stages: ['Not started', 'Practising', 'Mastered'], lectures: [] },\n    m4: { id: 'm4', subjectId: 'cn', number: 4, name: 'Transport Layer', marks: 19.6, weight: '32.67%', sections: m4Sections, topics: m4Topics, practice: m4Concepts, practiceLabel: 'Concept mastery', masteryLabel: 'concepts', stages: ['Not started', 'Learning', 'Practising', 'Mastered'], lectures: [] },\n    ...(typeof compilerModuleData === 'undefined' ? {} : compilerModuleData)\n};\nfor (const mod of Object.values(studyModules))\n    mod.lectures = mod.sections.flatMap(s => s.rows);\nconst lectures = studyModules.m3.lectures;\nconst speeds = [1, 1.25, 1.5, 1.75, 2];\nconst defaults = { theme: 'light', speed: 1, 'm4/speed': 1, lastSubject: 'cn' };\nconst lectureModule = (l) => l.uid.slice(0, l.uid.lastIndexOf('-l'));\nconst key = (lecture, field) => `${lectureModule(lecture)}/${lecture.uid}/${field}`;\nconst pk = (p, mod = 'm3') => `${mod}/practice/${p.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;\nconst speedKey = (mod) => mod === 'm3' ? 'speed' : `${mod}/speed`;\nfor (const mod of Object.values(studyModules)) {\n    defaults[`${mod.id}/lastActive`] = '';\n    defaults[speedKey(mod.id)] = 1;\n    for (const l of mod.lectures) {\n        defaults[key(l, 'done')] = false;\n        defaults[key(l, 'revision')] = false;\n        defaults[key(l, 'note')] = '';\n        defaults[key(l, 'position')] = 0;\n    }\n    for (const p of mod.practice)\n        defaults[pk(p, mod.id)] = mod.stages[0];\n}\n// A removed lecture may still exist in earlier browser/account records and backup files.\ndefaults[`cd-m4/${retiredCompilerLecture}/done`] = false;\ndefaults[`cd-m4/${retiredCompilerLecture}/revision`] = false;\ndefaults[`cd-m4/${retiredCompilerLecture}/note`] = '';\ndefaults[`cd-m4/${retiredCompilerLecture}/position`] = 0;\nfunction valid(data, strict = false) {\n    return data !== null && typeof data === 'object' && !Array.isArray(data) && Object.entries(data).every(([k, v]) => {\n        if (!Object.hasOwn(defaults, k))\n            return false;\n        if (k === 'lastSubject')\n            return typeof v === 'string' && ['cn', 'cd', 'bi', 'mad', 'ml', 'nlp'].includes(v);\n        if (k.startsWith('recall/'))\n            return validateRecallValue(k, v);\n        if (k.startsWith('quiz/'))\n            return validQuizValue(k, v, strict);\n        if (k.startsWith('concept/') && k.endsWith('/note'))\n            return typeof v === 'string' && v.length <= 8000;\n        if (k === 'theme')\n            return ['dark', 'light'].includes(v);\n        if (k === 'speed' || k.endsWith('/speed'))\n            return typeof v === 'number' && speeds.includes(v);\n        const mod = studyModules[k.split('/')[0]];\n        if (k.endsWith('/lastActive'))\n            return v === '' || (mod.id === 'cd-m4' && v === retiredCompilerLecture) || mod.lectures.some(l => l.uid === v);\n        if (k.endsWith('/position'))\n            return typeof v === 'number' && Number.isFinite(v) && v >= 0 && v < 86400;\n        if (k.includes('/practice/'))\n            return typeof v === 'string' && mod.stages.includes(v);\n        if (k.endsWith('/note'))\n            return typeof v === 'string' && v.length <= 8000;\n        return typeof v === 'boolean';\n    });\n}\nconst aliases = new Map();\nfor (const l of lectures)\n    for (const id of [l.id, l.legacyVideo].filter(Boolean))\n        for (const field of ['done', 'revision', 'note'])\n            aliases.set('m3/' + id + '/' + field, key(l, field));\nfunction migrate(data) {\n    if (!data || typeof data !== 'object' || Array.isArray(data))\n        return data;\n    const result = { ...data };\n    for (const [old, current] of aliases)\n        if (Object.hasOwn(result, old)) {\n            if (!Object.hasOwn(result, current))\n                result[current] = result[old];\n            delete result[old];\n        }\n    migrateRetiredRecall(result);\n    return result;\n}\nfunction nextLecture(items, record, last) {\n    return items.find(l => l.uid === last && !record[key(l, 'done')]) || items.find(l => !record[key(l, 'done')]);\n}\nfunction initialLectureSection(mod, record) {\n    const next = nextLecture(mod.lectures, record, record[`${mod.id}/lastActive`]);\n    return next ? mod.sections.find(section => section.rows.some(lecture => lecture.uid === next.uid))?.name ?? null : null;\n}\nfunction viewingSummary(mod, record) {\n    const remaining = mod.lectures.filter(l => !record[key(l, 'done')]);\n    const unknown = remaining.filter(l => !l.time).length;\n    const seconds = remaining.reduce((sum, l) => {\n        if (l.durationSeconds != null)\n            return sum + l.durationSeconds;\n        const parts = String(l.time || '0').split(':').map(Number);\n        return sum + parts.reduce((acc, p) => acc * 60 + p, 0);\n    }, 0);\n    const core = mod.lectures.filter(l => !l.workedExample);\n    const covered = mod.topics.filter((_, i) => {\n        const id = mod.number + '.' + (i + 1), matches = core.filter(l => l.topicIds.includes(id));\n        return matches.length && matches.every(l => record[key(l, 'done')]);\n    }).length;\n    return { remaining, unknown, covered, seconds, coreTotal: core.length, coreDone: core.filter(l => record[key(l, 'done')]).length, minutes: Math.ceil(seconds / 60 / (record[speedKey(mod.id)] || 1)), done: mod.lectures.length - remaining.length };\n}\nfunction playbackStart(l, position) {\n    const start = l.startSeconds ?? 0, end = l.endSeconds ?? Infinity;\n    const saved = Math.floor(Number(position) || 0);\n    return saved >= start && saved < end - 1 ? saved : start;\n}\nfunction youtubeWatch(l, position = 0) {\n    const url = new URL('https://www.youtube.com/watch');\n    url.searchParams.set('v', l.id);\n    const start = playbackStart(l, position);\n    if (start)\n        url.searchParams.set('t', start + 's');\n    return url.href;\n}\nfunction youtubeEmbed(l, origin, position = 0) {\n    const url = new URL('https://www.youtube.com/embed/' + encodeURIComponent(l.id));\n    url.search = new URLSearchParams({ enablejsapi: '1', origin, playsinline: '1', start: String(playbackStart(l, position)) }).toString();\n    if (l.endSeconds != null)\n        url.searchParams.set('end', String(l.endSeconds));\n    return url.href;\n}\nfunction progressPercent(done, total) {\n    return Math.max(0, Math.min(100, total ? Math.round(100 * done / total) : 0));\n}\nfunction progressFrame(value, elapsed) {\n    const t = Math.max(0, Math.min(1, elapsed / 720));\n    return Math.min(value, Math.floor(value * (1 - (1 - t) ** 3) + Number.EPSILON));\n}\n","/recall-model.js":"\"use strict\";\nconst networkRecallIds = Array.from({ length: 100 }, (_, i) => 'cn-m' + (i < 50 ? '3' : '4') + '-' + String(i % 50 + 1).padStart(2, '0'));\nconst recallIds = {\n    cn: new Set(networkRecallIds), cd: new Set(compilerContent.quick.concat(compilerContent.decks.flatMap(d => d.cards)).map(c => c.id))\n};\nconst storedCompilerRecallIds = new Set([...recallIds.cd, retiredCompilerCard]);\nfunction migrateRetiredRecall(data) {\n    const key = recallSessionKey('cd'), saved = data[key];\n    if (!saved || !isRecallSession(saved, storedCompilerRecallIds))\n        return;\n    const session = saved;\n    const retiredIndex = session.cards.indexOf(retiredCompilerCard);\n    if (retiredIndex === -1)\n        return;\n    const cards = session.cards.filter(id => id !== retiredCompilerCard);\n    data[key] = cards.length ? { ...session, cards, index: session.index - Number(retiredIndex < session.index),\n        flipped: retiredIndex === session.index ? false : session.flipped } : null;\n}\nconst unlockKey = (subject) => `recall/${subject}/unlockedRecent`;\nfunction validateRecallValue(key, value) {\n    const [, subject, kind, id] = key.split('/');\n    if (kind === 'unlockedRecent') {\n        const ids = new Set(subject === 'cd' ? compilerContent.decks.map(d => d.id) : Array.from({ length: 12 }, (_, i) => 'cn-3-' + (i + 1)).concat(Array.from({ length: 7 }, (_, i) => 'cn-4-' + (i + 1))));\n        return Array.isArray(value) && value.length <= 20 && new Set(value).size === value.length && value.every(id => typeof id === 'string' && ids.has(id));\n    }\n    return kind === 'card' ? (subject === 'cd' ? storedCompilerRecallIds : recallIds.cn).has(id) && isRecallReview(value, id) : kind === 'session' && isRecallSession(value, recallIds[subject]);\n}\nfor (const subject of ['cn', 'cd']) {\n    defaults[recallSessionKey(subject)] = null;\n    defaults[unlockKey(subject)] = [];\n    for (const id of recallIds[subject])\n        defaults[recallKey(subject, id)] = null;\n}\ndefaults[recallKey('cd', retiredCompilerCard)] = null;\nconst conceptNoteKey = (id) => `concept/${id}/note`;\nfor (const concept of compilerContent.concepts) {\n    defaults[conceptKey(concept.id)] = false;\n    defaults[conceptNoteKey(concept.id)] = '';\n}\n// The M3 playlist augments revision notes. Finishing either path preserves deck access.\nconst hasRevisionPrerequisites = (mod) => mod.subjectId === 'cd' && (mod.revisionOnly || mod.id === 'cd-m3');\nfunction revisionPrerequisiteMet(mod, id, record) {\n    if (record[conceptKey(id)] === true)\n        return true;\n    const matches = mod.lectures.filter(l => !l.workedExample && l.conceptIds?.includes(id));\n    return matches.length > 0 && matches.every(l => record[key(l, 'done')] === true);\n}\nfunction deckRequirements(subject, deck, record) {\n    const module = (subject === 'cn' ? 'm' + deck.module : 'cd-m' + deck.module), mod = studyModules[module];\n    if (subject === 'cd' && hasRevisionPrerequisites(mod)) {\n        return deck.requires.flatMap(id => {\n            const topic = compilerContent.concepts.find(c => c.id === id);\n            return topic ? [{ label: topic.title, module, ref: topic.id, done: revisionPrerequisiteMet(mod, topic.id, record) }] : [];\n        });\n    }\n    return mod.lectures.filter(l => deck.requires.includes(l.uid) || (!l.workedExample && [...l.topicIds, ...(l.conceptIds ?? [])].some(id => deck.requires.includes(id))))\n        .map(l => ({ label: l.title, module, ref: l.uid, done: record[key(l, 'done')] === true }));\n}\nconst requirementsMet = (items) => items.length > 0 && items.every(x => x.done);\n// Keep the original keys so existing backups, note completion, and deck eligibility are preserved.\nfunction revisionReadPatch(id, record) {\n    const c = compilerContent.concepts.find(concept => concept.id === id), key = conceptKey(id);\n    if (!c || !hasRevisionPrerequisites(studyModules[('cd-m' + c.module)]) || record[key])\n        return;\n    const delta = {};\n    delta[key] = true;\n    return delta;\n}\n","/quiz-schema.js":"\"use strict\";\nconst quizModules = ['m3', 'm4'];\nconst cardPattern = /^m[34]-(0[1-9]|[1-4][0-9]|50)$/;\nconst roundKey = (mod) => `quiz/${mod}/round`;\nconst markKey = (id) => `quiz/card/${id}`;\nconst trackKey = (mod) => `quiz/${mod}/history`;\nconst whole = (value) => typeof value === 'number' && Number.isSafeInteger(value) && value >= 0;\nfunction isRound(input, mod, strict) {\n    const value = input;\n    if (value === null)\n        return true;\n    if (!value || typeof value !== 'object' || !Array.isArray(value.cards) || !Array.isArray(value.answers))\n        return false;\n    const count = value.cards.length;\n    if (strict && (Object.keys(value).length !== 3 || !['index', 'answers', 'cards'].every(key => Object.hasOwn(value, key))))\n        return false;\n    return count >= 1 && count <= 50 && new Set(value.cards.map(c => c?.id)).size === count &&\n        value.cards.every(c => c && (!strict || (Object.keys(c).length === 2 && Object.hasOwn(c, 'id') && Object.hasOwn(c, 'order') && typeof c.id === 'string')) && cardPattern.test(c.id) && c.id.startsWith(mod + '-') && ['012', '021', '102', '120', '201', '210'].includes(c.order)) &&\n        whole(value.index) && value.index <= count && value.answers.length >= value.index &&\n        value.answers.length <= Math.min(count, value.index + 1) && value.answers.every(a => [0, 1, 2].includes(a));\n}\nfunction validQuizValue(k, v, strict) {\n    if (k.startsWith('quiz/card/'))\n        return Array.isArray(v) && v.length === 3 && whole(v[0]) && whole(v[1]) && v[1] <= v[0] && typeof v[2] === 'boolean';\n    if (k.endsWith('/round'))\n        return isRound(v, k.split('/')[1], strict);\n    return Array.isArray(v) && v.length <= 20 && v.every(r => Array.isArray(r) && r.length === 3 && whole(r[0]) && r[0] <= 8640000000000000 && whole(r[1]) && whole(r[2]) && r[2] >= 1 && r[2] <= 50 && r[1] <= r[2]);\n}\nfor (const mod of quizModules) {\n    defaults[roundKey(mod)] = null;\n    defaults[trackKey(mod)] = [];\n    for (let i = 1; i <= 50; i++)\n        defaults[markKey(mod + '-' + String(i).padStart(2, '0'))] = [0, 0, false];\n}\n","/cards.js":"\"use strict\";\nconst quizCards = [\n    {\n        \"id\": \"m3-01\",\n        \"topic\": \"3.1\",\n        \"question\": \"A campus router has a route to every building. A fibre cut changes the best path to the library. Which two operations must take place before the next packet uses the new path?\",\n        \"choices\": [\n            \"Recompute the route, install the forwarding entry, then look up the packet destination.\",\n            \"Look up the packet destination first and run the routing algorithm separately for each packet.\",\n            \"Replace the destination IP with the library router’s MAC throughout the campus.\"\n        ],\n        \"explanation\": \"Routing updates reachability and the chosen next hop. Forwarding applies the installed entry to each arriving packet.\",\n        \"ref\": \"p. 5\"\n    },\n    {\n        \"id\": \"m3-02\",\n        \"topic\": \"3.1\",\n        \"question\": \"A sensor sends one reading per day. The network should carry its first packet immediately without installing per-sensor path state in intermediate routers. Which service fits?\",\n        \"choices\": [\n            \"A datagram service with a destination address on each packet.\",\n            \"A virtual circuit established with a setup message before the reading.\",\n            \"A virtual circuit whose path identifier is allocated after the reading arrives.\"\n        ],\n        \"explanation\": \"Datagram routers can use ordinary destination-based forwarding immediately. A virtual circuit needs an established path and corresponding state.\",\n        \"ref\": \"p. 6\"\n    },\n    {\n        \"id\": \"m3-03\",\n        \"topic\": \"3.1\",\n        \"question\": \"A 1,500-byte IPv4 packet reaches an outgoing link with MTU 1,280. The Don't Fragment flag is clear. Which router behaviour can deliver the packet across that link?\",\n        \"choices\": [\n            \"Split the IPv4 packet into fragments that fit the outgoing MTU.\",\n            \"Cut the payload into separate Ethernet frames and leave the IP fragmentation fields untouched.\",\n            \"Reduce the TTL until the original 1,500-byte packet fits the link.\"\n        ],\n        \"explanation\": \"IPv4 fragmentation gives each fragment the information the destination needs for reassembly. Changing TTL has no effect on packet length.\",\n        \"ref\": \"p. 7\"\n    },\n    {\n        \"id\": \"m3-04\",\n        \"topic\": \"3.2\",\n        \"question\": \"A reservation service sends a booking confirmation containing a customer's reference to exactly one phone. Which destination does the IP packet need?\",\n        \"choices\": [\n            \"The phone’s unicast address, assuming it is directly reachable.\",\n            \"The group address for phones subscribed to booking alerts.\",\n            \"The directed broadcast address of the phone’s subnet.\"\n        ],\n        \"explanation\": \"The intended recipient is one endpoint. Group membership and subnet membership both select audiences larger than the individual customer.\",\n        \"ref\": \"p. 8\"\n    },\n    {\n        \"id\": \"m3-05\",\n        \"topic\": \"3.2\",\n        \"question\": \"One sender streams 3 Mb/s to 12 subscribers behind a single WAN link. The path supports multicast and branches only after that link. How much WAN capacity does multicast save compared with separate unicasts, ignoring headers?\",\n        \"choices\": [\n            \"33 Mb/s\",\n            \"3 Mb/s\",\n            \"36 Mb/s\"\n        ],\n        \"explanation\": \"Unicast sends 12 × 3 = 36 Mb/s across the shared link. Multicast sends one 3 Mb/s copy there, saving 33 Mb/s.\",\n        \"ref\": \"p. 9\"\n    },\n    {\n        \"id\": \"m3-06\",\n        \"topic\": \"3.2\",\n        \"question\": \"Three receivers on a LAN join 239.1.1.1. A sender on another LAN has a multicast-capable route to them. Which IP address pair belongs on its outgoing stream?\",\n        \"choices\": [\n            \"Source = sender’s unicast IP; destination = 239.1.1.1.\",\n            \"Source = 239.1.1.1; destination = first receiver’s unicast IP.\",\n            \"Source = sender’s unicast IP; destination = remote LAN’s broadcast address.\"\n        ],\n        \"explanation\": \"The group address represents the selected receivers. The source identifies the individual sender, and multicast forwarding replicates packets where paths branch.\",\n        \"ref\": \"p. 8\"\n    },\n    {\n        \"id\": \"m3-07\",\n        \"topic\": \"3.3\",\n        \"question\": \"A legacy inventory report omits masks and explicitly assumes classful IPv4. It lists 150.23.9.40. Which network should the report assign it to?\",\n        \"choices\": [\n            \"150.23.0.0/16\",\n            \"150.0.0.0/8\",\n            \"150.23.9.0/24\"\n        ],\n        \"explanation\": \"The first octet 150 lies in the historical Class B range of 128–191. Under the stated assumption the first two octets identify the network.\",\n        \"ref\": \"p. 10\"\n    },\n    {\n        \"id\": \"m3-08\",\n        \"topic\": \"3.3\",\n        \"question\": \"A lab needs an RFC 1918 private block and is comparing three proposed addresses. Which one lies inside the private 172 range?\",\n        \"choices\": [\n            \"172.30.12.9\",\n            \"172.32.12.9\",\n            \"172.15.12.9\"\n        ],\n        \"explanation\": \"The private block 172.16.0.0/12 covers second octets 16–31 inclusive. Being in historical Class B alone does not imply a private address.\",\n        \"ref\": \"p. 11\"\n    },\n    {\n        \"id\": \"m3-09\",\n        \"topic\": \"3.3\",\n        \"question\": \"A legacy Ethernet LAN uses 192.168.12.0 with its classful mask. An otherwise correctly configured printer is assigned 192.168.12.255. What should the technician change?\",\n        \"choices\": [\n            \"Assign an unused address between 192.168.12.1 and 192.168.12.254.\",\n            \"Keep .255 and set the gateway to .0.\",\n            \"Keep .255 and register the printer as a multicast listener.\"\n        ],\n        \"explanation\": \"With a /24 mask, .255 has all host bits set and is the directed broadcast. Ordinary interfaces need unique usable host addresses.\",\n        \"ref\": \"p. 12\"\n    },\n    {\n        \"id\": \"m3-10\",\n        \"topic\": \"3.4\",\n        \"question\": \"A device reports 10.8.7.173/27. Its gateway must be inside the same subnet. Which candidate can be used if it is free?\",\n        \"choices\": [\n            \"10.8.7.190\",\n            \"10.8.7.191\",\n            \"10.8.7.159\"\n        ],\n        \"explanation\": \"The /27 block is .160–.191. Its usable addresses are .161–.190, so .191 is the broadcast and .159 is outside.\",\n        \"ref\": \"p. 14\"\n    },\n    {\n        \"id\": \"m3-11\",\n        \"topic\": \"3.4\",\n        \"question\": \"A route advertisement covers 172.20.78.18/20 after host bits are cleared. Which range of third octets should remote sites expect?\",\n        \"choices\": [\n            \"64 through 79\",\n            \"72 through 87\",\n            \"78 through 93\"\n        ],\n        \"explanation\": \"A /20 uses mask 255.255.240.0. The third-octet block size is 16, and 78 lies in the aligned range 64–79.\",\n        \"ref\": \"p. 14\"\n    },\n    {\n        \"id\": \"m3-12\",\n        \"topic\": \"3.4\",\n        \"question\": \"An architect has 10.0.0.0/18 and plans to carve out equal /22 site blocks. How many whole sites can be allocated?\",\n        \"choices\": [\n            \"16\",\n            \"4\",\n            \"64\"\n        ],\n        \"explanation\": \"The site prefix adds four bits. Those four bits select 2⁴ = 16 distinct /22 blocks within the /18.\",\n        \"ref\": \"p. 13\"\n    },\n    {\n        \"id\": \"m3-13\",\n        \"topic\": \"3.4\",\n        \"question\": \"A configuration tool accepts prefixes only when the supplied base is the network address. Which input correctly represents the /26 LAN containing 192.0.2.130?\",\n        \"choices\": [\n            \"192.0.2.128/26\",\n            \"192.0.2.130/26\",\n            \"192.0.2.126/26\"\n        ],\n        \"explanation\": \"A /26 advances in blocks of 64. The range containing .130 begins at .128, where all six host bits are zero.\",\n        \"ref\": \"p. 15\"\n    },\n    {\n        \"id\": \"m3-14\",\n        \"topic\": \"3.5\",\n        \"question\": \"A /24 must be split into eight equal lab LANs. With ordinary network and broadcast reservations, what does each lab receive?\",\n        \"choices\": [\n            \"A /27 with 30 usable addresses.\",\n            \"A /28 with 14 usable addresses.\",\n            \"A /26 with 62 usable addresses.\"\n        ],\n        \"explanation\": \"Eight equal subnets require three extra prefix bits. A /27 leaves five host bits, giving 32 addresses and 30 usable.\",\n        \"ref\": \"p. 17\"\n    },\n    {\n        \"id\": \"m3-15\",\n        \"topic\": \"3.5\",\n        \"question\": \"A department has 30 computers plus one router interface. What is the smallest ordinary IPv4 subnet that can contain all 31 interfaces?\",\n        \"choices\": [\n            \"/26\",\n            \"/27\",\n            \"/28\"\n        ],\n        \"explanation\": \"Count the gateway among the interfaces. A /27 offers only 30 usable addresses, while a /26 offers 62.\",\n        \"ref\": \"p. 20\"\n    },\n    {\n        \"id\": \"m3-16\",\n        \"topic\": \"3.5\",\n        \"question\": \"A /24 must serve three departments with 100, 45 and 12 interfaces respectively, including gateways. Which largest-first allocation meets demand without overlap?\",\n        \"choices\": [\n            \".0/25, .128/26, .192/28\",\n            \".0/25, .64/26, .192/28\",\n            \".0/26, .64/26, .128/28\"\n        ],\n        \"explanation\": \"The departments need 126, 62 and 14 usable slots from their respective prefixes. The correct blocks span .0–.127, .128–.191 and .192–.207.\",\n        \"ref\": \"p. 18\"\n    },\n    {\n        \"id\": \"m3-17\",\n        \"topic\": \"3.5\",\n        \"question\": \"A site already uses 10.1.0.0/25 and 10.1.0.128/27. Which is the lowest available aligned block for another LAN needing 22 usable addresses?\",\n        \"choices\": [\n            \"10.1.0.160/27\",\n            \"10.1.0.144/27\",\n            \"10.1.0.160/28\"\n        ],\n        \"explanation\": \"A /27 provides 30 usable addresses and begins on a multiple of 32. The existing allocations finish at .159, making .160 the first free boundary.\",\n        \"ref\": \"p. 18\"\n    },\n    {\n        \"id\": \"m3-18\",\n        \"topic\": \"3.5\",\n        \"question\": \"One edge router serves all four networks 10.72.12.0/24 through 10.72.15.0/24. What single prefix advertises exactly these networks?\",\n        \"choices\": [\n            \"10.72.12.0/22\",\n            \"10.72.12.0/23\",\n            \"10.72.8.0/21\"\n        ],\n        \"explanation\": \"Four adjacent /24s make a /22 if the first third octet is a multiple of four. The /22 starts at 12 and ends at 15.\",\n        \"ref\": \"p. 19\"\n    },\n    {\n        \"id\": \"m3-19\",\n        \"topic\": \"3.5\",\n        \"question\": \"A branch owns 192.168.5.0/24 and 192.168.6.0/24 only. It may advertise no addresses belonging to others. What should it announce?\",\n        \"choices\": [\n            \"Keep the two /24 announcements.\",\n            \"Advertise 192.168.4.0/22.\",\n            \"Advertise 192.168.4.0/23.\"\n        ],\n        \"explanation\": \"The adjacent networks straddle an aligned /23 boundary. A /22 would cover .4 and .7 as well, and the proposed /23 omits .6.\",\n        \"ref\": \"p. 19\"\n    },\n    {\n        \"id\": \"m3-20\",\n        \"topic\": \"3.5\",\n        \"question\": \"Host 192.168.8.61/27 sends to 192.168.8.65. Both hosts have correct gateways and empty ARP caches. Whose MAC should the sender first resolve?\",\n        \"choices\": [\n            \"Its own subnet’s default gateway.\",\n            \"The destination host at .65.\",\n            \"The broadcast address of the destination subnet.\"\n        ],\n        \"explanation\": \"The sender belongs to .32/27 and .65 belongs to .64/27. A remote IP needs the local router as the first Ethernet hop.\",\n        \"ref\": \"p. 21\"\n    },\n    {\n        \"id\": \"m3-21\",\n        \"topic\": \"3.6\",\n        \"question\": \"Two workstations use TCP source port 51000 to contact the same remote server through one public IPv4 address. What prevents return traffic from being mixed up?\",\n        \"choices\": [\n            \"PAT gives the concurrent flows distinct external source ports.\",\n            \"The router assigns both flows the same external port and identifies replies by remote IP alone.\",\n            \"The router sends the first reply to both machines and waits for an acknowledgement.\"\n        ],\n        \"explanation\": \"Identical external address and port combinations would collide for the same remote endpoint. PAT maintains distinct translations so replies map back to the right client.\",\n        \"ref\": \"p. 23\"\n    },\n    {\n        \"id\": \"m3-22\",\n        \"topic\": \"3.6\",\n        \"question\": \"A gateway records 10.2.0.8:42000 ↔ 198.51.100.9:61002 for a TCP connection to 203.0.113.7:443. A reply arrives at the public port. Which field is rewritten on the inside-bound packet?\",\n        \"choices\": [\n            \"Destination becomes 10.2.0.8:42000.\",\n            \"Source becomes 10.2.0.8:42000.\",\n            \"Destination becomes 203.0.113.7:443.\"\n        ],\n        \"explanation\": \"A returning packet already has the server as its source. The gateway looks up the public destination tuple and restores the private destination.\",\n        \"ref\": \"p. 24\"\n    },\n    {\n        \"id\": \"m3-23\",\n        \"topic\": \"3.6\",\n        \"question\": \"A college wants a public HTTPS endpoint on an internal server, using a single public IPv4 address. There is no existing outbound flow. Which mapping should the administrator configure?\",\n        \"choices\": [\n            \"Forward public TCP port 443 to the internal server’s TCP port 443.\",\n            \"Wait for outbound PAT to discover the internal HTTPS listener.\",\n            \"Forward each new public connection to whichever host most recently visited an HTTPS site.\"\n        ],\n        \"explanation\": \"An unsolicited inbound connection has no dynamic mapping to identify an internal listener. A fixed port-forward supplies that destination.\",\n        \"ref\": \"p. 23\"\n    },\n    {\n        \"id\": \"m3-24\",\n        \"topic\": \"3.7\",\n        \"question\": \"A router inventory contains 2001:0db8:0000:0000:0040:0000:0000:0001. Which is its canonical compressed form when equal-length zero runs are resolved leftmost first?\",\n        \"choices\": [\n            \"2001:db8::40:0:0:1\",\n            \"2001:db8:0:0:40::1\",\n            \"2001:db8::40::1\"\n        ],\n        \"explanation\": \"Remove leading zeros from each group, then replace the leftmost longest run once. The second choice is equivalent in value but fails the stated canonical tie rule.\",\n        \"ref\": \"p. 25\"\n    },\n    {\n        \"id\": \"m3-25\",\n        \"topic\": \"3.7\",\n        \"question\": \"An engineer ports an IPv4 address-discovery tool to an IPv6 LAN. Which design lets it discover a neighbour’s link-layer address without an IPv4-style broadcast?\",\n        \"choices\": [\n            \"Send a Neighbor Solicitation to the target’s solicited-node multicast group.\",\n            \"Broadcast an ARP query to every IPv6 address in the subnet.\",\n            \"Send an IGMP membership report naming the neighbour as the group.\"\n        ],\n        \"explanation\": \"IPv6 Neighbor Discovery uses ICMPv6 messages and solicited-node multicast for address resolution. This narrows the group of listeners.\",\n        \"ref\": \"p. 26\"\n    },\n    {\n        \"id\": \"m3-26\",\n        \"topic\": \"3.7\",\n        \"question\": \"An IPv6 router cannot forward a 1,400-byte packet over a 1,280-byte link. Which response should the sender be designed to handle?\",\n        \"choices\": [\n            \"An ICMPv6 Packet Too Big message so the source can reduce packet size.\",\n            \"Fragments generated by the intermediate IPv6 router and reassembled at the next hop.\",\n            \"A request to toggle an IPv6 header checksum field before retrying.\"\n        ],\n        \"explanation\": \"IPv6 routers do not fragment in transit. Packet Too Big feedback supports path MTU discovery, leaving packet sizing or source fragmentation to the sender.\",\n        \"ref\": \"p. 26\"\n    },\n    {\n        \"id\": \"m3-27\",\n        \"topic\": \"3.7\",\n        \"question\": \"A monitoring tool needs to detect IPv6 packets expiring in a forwarding loop. Which IPv6 base-header field should it inspect?\",\n        \"choices\": [\n            \"Hop Limit\",\n            \"Flow Label\",\n            \"Payload Length\"\n        ],\n        \"explanation\": \"Each forwarding router decrements Hop Limit. Flow Label groups related traffic, and Payload Length describes the amount of data after the base header.\",\n        \"ref\": \"p. 26\"\n    },\n    {\n        \"id\": \"m3-28\",\n        \"topic\": \"3.8\",\n        \"question\": \"A network has undirected links A–B 6, A–C 2, C–B 1, B–D 2 and C–D 8. What should A install for D using shortest-path cost?\",\n        \"choices\": [\n            \"Next hop C, cost 5.\",\n            \"Next hop B, cost 8.\",\n            \"Next hop C, cost 10.\"\n        ],\n        \"explanation\": \"The path A–C–B–D costs 2 + 1 + 2 = 5. The direct-looking alternatives cost 8 and 10, so the first hop is C.\",\n        \"ref\": \"p. 29\"\n    },\n    {\n        \"id\": \"m3-29\",\n        \"topic\": \"3.8\",\n        \"question\": \"In a Dijkstra run from S, permanent nodes are S and A. Tentative costs are B=7, C=4 and D=9. Edge C–B costs 2. What happens in the next iteration?\",\n        \"choices\": [\n            \"Settle C and lower B to 6 via C.\",\n            \"Settle B and lower C to 2 via B.\",\n            \"Settle D because it presently has the largest estimate.\"\n        ],\n        \"explanation\": \"Choose the smallest unsettled distance, 4. Relaxing C–B produces 4 + 2 = 6, which improves B's previous estimate of 7.\",\n        \"ref\": \"p. 28\"\n    },\n    {\n        \"id\": \"m3-30\",\n        \"topic\": \"3.8\",\n        \"question\": \"A router sees equally cheap paths S–A–D and S–B–D, each cost 5. A forwarding implementation supports equal-cost multipath. Which outcome preserves the SPF result?\",\n        \"choices\": [\n            \"Install A and B as eligible next hops to D.\",\n            \"Add both costs and advertise D at cost 10.\",\n            \"Discard both paths until one metric becomes strictly lower.\"\n        ],\n        \"explanation\": \"Either path reaches D with the same minimum cost. ECMP can retain both next hops while the destination metric stays 5.\",\n        \"ref\": \"p. 30\"\n    },\n    {\n        \"id\": \"m3-31\",\n        \"topic\": \"3.8\",\n        \"question\": \"S reaches D through A at cost 2 + 2. An alternate route through B costs 1 + 5. Link A–D fails. Once all routers have the new topology, what should S install?\",\n        \"choices\": [\n            \"Via B at cost 6.\",\n            \"Via A at cost 4 until a packet for D is lost.\",\n            \"Via B at cost 5.\"\n        ],\n        \"explanation\": \"Remove the failed edge and recompute using the remaining links. The cost of the entire surviving path is 1 + 5, including the first hop.\",\n        \"ref\": \"p. 30\"\n    },\n    {\n        \"id\": \"m3-32\",\n        \"topic\": \"3.9\",\n        \"question\": \"Two adjacent OSPF routers remain connected, but their measured link cost changes. What information needs to spread through their area?\",\n        \"choices\": [\n            \"Updated link-state advertisements describing local adjacency costs.\",\n            \"Only a final next-hop table from one router sent to the other.\",\n            \"Every user packet that observed the old cost.\"\n        ],\n        \"explanation\": \"Link-state routers distribute descriptions of their local links. Each router uses its topology database to recompute shortest paths.\",\n        \"ref\": \"p. 32\"\n    },\n    {\n        \"id\": \"m3-33\",\n        \"topic\": \"3.9\",\n        \"question\": \"A router already holds sequence 84 of a link-state advertisement. An old copy with sequence 81 arrives for the same originator during normal operation. What should it do?\",\n        \"choices\": [\n            \"Keep sequence 84 and ignore the stale update.\",\n            \"Accept sequence 81 because it arrived later.\",\n            \"Average the two advertisements’ link metrics.\"\n        ],\n        \"explanation\": \"Flooding can deliver duplicates and delayed copies. Sequence numbers distinguish the newer topology information from stale versions.\",\n        \"ref\": \"p. 32\"\n    },\n    {\n        \"id\": \"m3-34\",\n        \"topic\": \"3.9\",\n        \"question\": \"A growing campus wants each router to calculate routes from a common topology map, but wishes to limit flooding across a large domain. Which design fits?\",\n        \"choices\": [\n            \"Use OSPF areas and run shortest-path calculations within the area topology.\",\n            \"Use per-host static routes throughout campus and periodically broadcast the entire host list.\",\n            \"Use a single RIP domain because every RIP router builds an area-wide link-state database.\"\n        ],\n        \"explanation\": \"OSPF is a link-state interior protocol with hierarchical areas. Its area structure scopes detailed topology flooding.\",\n        \"ref\": \"p. 33\"\n    },\n    {\n        \"id\": \"m3-35\",\n        \"topic\": \"3.10\",\n        \"question\": \"R can reach destination X through neighbours A or B. The link to A costs 2 and A reports 7 to X. The link to B costs 5 and B reports 3. What should R record?\",\n        \"choices\": [\n            \"Cost 8 via B.\",\n            \"Cost 3 via B.\",\n            \"Cost 7 via A.\"\n        ],\n        \"explanation\": \"Compare the full candidate costs, 2 + 7 = 9 and 5 + 3 = 8. The advertised distance starts at the neighbour, so the first-hop cost must be added.\",\n        \"ref\": \"p. 34\"\n    },\n    {\n        \"id\": \"m3-36\",\n        \"topic\": \"3.10\",\n        \"question\": \"R currently reaches Y through N at total cost 4. Its link to N costs 1. N now reports distance 9; neighbour M reports 5 over a link costing 2. Which update is correct?\",\n        \"choices\": [\n            \"Switch to M at total cost 7.\",\n            \"Keep N at total cost 4 because an installed metric can only decrease.\",\n            \"Switch to N at total cost 9.\"\n        ],\n        \"explanation\": \"Recompute both candidates from current advertisements. Via N now costs 10 while via M costs 7, so the old total is no longer valid.\",\n        \"ref\": \"p. 35\"\n    },\n    {\n        \"id\": \"m3-37\",\n        \"topic\": \"3.10\",\n        \"question\": \"A learns a route to a printer subnet from B. With poison reverse enabled, how should A describe that subnet in its update sent back to B?\",\n        \"choices\": [\n            \"Advertise it as unreachable to B.\",\n            \"Advertise A’s finite route metric plus one to B.\",\n            \"Advertise it as zero cost because B already knows the route.\"\n        ],\n        \"explanation\": \"A depends on B for that destination. Advertising infinity back toward B prevents B from selecting A as its immediate fallback for the same route.\",\n        \"ref\": \"p. 36\"\n    },\n    {\n        \"id\": \"m3-38\",\n        \"topic\": \"3.10\",\n        \"question\": \"A disconnected subnet’s RIP metric rises at neighbouring routers from 3 to 4 to 5 after a link failure. Which diagnosis fits the trace?\",\n        \"choices\": [\n            \"Routers repeatedly believe each other’s stale reachability, approaching RIP infinity at 16.\",\n            \"Each router is independently measuring a longer physical cable delay on the disconnected link.\",\n            \"The metric is a packet’s TTL, increasing as the loop persists.\"\n        ],\n        \"explanation\": \"Count-to-infinity is a routing-table convergence problem. Each step adds a hop to outdated information until the route is finally considered unreachable.\",\n        \"ref\": \"p. 36\"\n    },\n    {\n        \"id\": \"m3-39\",\n        \"topic\": \"3.11\",\n        \"question\": \"A host knows a same-subnet printer’s IPv4 address but has no MAC entry for it. Which message exchange is expected?\",\n        \"choices\": [\n            \"A local broadcast ARP request followed normally by the printer’s unicast reply.\",\n            \"An ICMP Echo Request to the printer’s unknown Ethernet address followed by an IGMP report.\",\n            \"A unicast ARP request sent to the remote authoritative DNS server.\"\n        ],\n        \"explanation\": \"ARP discovers the local link-layer address for a known IPv4 address. The request reaches the LAN, and the matching host can reply directly to the requester.\",\n        \"ref\": \"p. 38\"\n    },\n    {\n        \"id\": \"m3-40\",\n        \"topic\": \"3.11\",\n        \"question\": \"A legacy diskless terminal knows its own Ethernet address but has no IPv4 address. A lab is reproducing the historical protocol that supplies only the corresponding IP. What server does it need?\",\n        \"choices\": [\n            \"A RARP server holding MAC-to-IP mappings.\",\n            \"An ARP responder that maps destination IP to next-hop MAC.\",\n            \"An IGMP querier that periodically checks membership.\"\n        ],\n        \"explanation\": \"RARP operates in the reverse direction from ARP. It was used for bootstrapping before more capable configuration protocols became common.\",\n        \"ref\": \"p. 38\"\n    },\n    {\n        \"id\": \"m3-41\",\n        \"topic\": \"3.11\",\n        \"question\": \"A diagnostic tool sends probes with IPv4 TTL values 1, 2, 3 and so on. What makes successive routers visible when they respond?\",\n        \"choices\": [\n            \"Each router where a probe expires returns ICMP Time Exceeded.\",\n            \"Each router adds its routing table to an ICMP Echo Reply sent by the next router.\",\n            \"The source broadcasts an ARP request independently onto every remote link.\"\n        ],\n        \"explanation\": \"A forwarding router decrements TTL. Increasing the initial TTL makes a different hop discard a probe and identify itself in the resulting ICMP response.\",\n        \"ref\": \"p. 39\"\n    },\n    {\n        \"id\": \"m3-42\",\n        \"topic\": \"3.11\",\n        \"question\": \"A student changes from a multicast lecture stream to another channel. Which protocol lets an IPv4 router learn the group membership of hosts on its local link?\",\n        \"choices\": [\n            \"IGMP\",\n            \"ICMP Echo\",\n            \"RARP\"\n        ],\n        \"explanation\": \"IGMP handles IPv4 group membership reports and queries between hosts and local multicast routers. Inter-router multicast routing is a separate task.\",\n        \"ref\": \"p. 39\"\n    },\n    {\n        \"id\": \"m3-43\",\n        \"topic\": \"3.12\",\n        \"question\": \"A 1 Gb/s client feeds a slow receiver over an otherwise idle network. In a second test many clients overload a shared router while receivers remain fast. What control belongs in the second test?\",\n        \"choices\": [\n            \"Congestion control targeting the overloaded network path.\",\n            \"Receiver flow control based solely on one receiver’s free buffer.\",\n            \"Address translation to increase the router’s physical link capacity.\"\n        ],\n        \"explanation\": \"Flow control protects an individual receiver. The many-to-one bottleneck creates a network load problem even when each destination can consume data quickly.\",\n        \"ref\": \"p. 42\"\n    },\n    {\n        \"id\": \"m3-44\",\n        \"topic\": \"3.12\",\n        \"question\": \"A video service reserves capacity and refuses new sessions once the precomputed bandwidth budget is exhausted. Its decision uses no measurements of current queue buildup. What policy is this?\",\n        \"choices\": [\n            \"Open-loop congestion prevention by admission control.\",\n            \"Closed-loop congestion recovery by explicit congestion notification.\",\n            \"Distance-vector convergence using hold-down timers.\"\n        ],\n        \"explanation\": \"The service prevents overload at admission time using a resource budget. Closed-loop control would react to feedback about congestion already developing.\",\n        \"ref\": \"p. 43\"\n    },\n    {\n        \"id\": \"m3-45\",\n        \"topic\": \"3.12\",\n        \"question\": \"A router marks packets when its queue fills. The receiver echoes the indication and the sender reduces its rate. Which description fits this system?\",\n        \"choices\": [\n            \"Closed-loop control using explicit congestion feedback.\",\n            \"Open-loop control because marking happens inside the network.\",\n            \"Flow control based on the receiver’s advertised memory.\"\n        ],\n        \"explanation\": \"The queue is measured, the indication travels back to the sender, and transmission changes as a result. That feedback path closes the loop.\",\n        \"ref\": \"p. 44\"\n    },\n    {\n        \"id\": \"m3-46\",\n        \"topic\": \"3.12\",\n        \"question\": \"A lossy path is congested. A window protocol may resend every outstanding packet after one loss or resend just the missing packets. Which choice limits avoidable load?\",\n        \"choices\": [\n            \"Selectively retransmit the missing packets.\",\n            \"Retransmit the full window every time to increase throughput.\",\n            \"Shorten the timeout to zero so every dropped packet is immediately retried.\"\n        ],\n        \"explanation\": \"Selective retransmission avoids sending data that arrived successfully. Extra retransmissions consume scarce bandwidth and can aggravate congestion.\",\n        \"ref\": \"p. 43\"\n    },\n    {\n        \"id\": \"m3-47\",\n        \"topic\": \"3.5\",\n        \"question\": \"A clinic has one /24. It needs LANs for 70, 35 and 18 addressed interfaces. Using the smallest ordinary subnet for each, how many total addresses remain unallocated?\",\n        \"choices\": [\n            \"32\",\n            \"64\",\n            \"129\"\n        ],\n        \"explanation\": \"The required blocks occupy 128 + 64 + 32 = 224 addresses. The /24 holds 256, leaving 32 addresses available for another aligned /27 under largest-first allocation.\",\n        \"ref\": \"p. 49\"\n    },\n    {\n        \"id\": \"m3-48\",\n        \"topic\": \"3.6\",\n        \"question\": \"A lab PC reaches its gateway and can reach campus servers. Outbound packets to an Internet server leave the edge with source 10.4.1.8. The campus owns one public IPv4 address. Which edge function is missing for ordinary Internet return routing?\",\n        \"choices\": [\n            \"Source translation, typically PAT using the public IPv4 address.\",\n            \"Destination translation of all Internet server addresses to 10.4.1.8.\",\n            \"Multicast registration of the PC’s private address with the ISP.\"\n        ],\n        \"explanation\": \"RFC 1918 source addresses generally lack a public return route. PAT presents a reachable public source and keeps a mapping to deliver the replies.\",\n        \"ref\": \"p. 48\"\n    },\n    {\n        \"id\": \"m3-49\",\n        \"topic\": \"3.9\",\n        \"question\": \"A campus link fails. The network team wants to explain how traffic moves to the redundant link under link-state routing. Which event sequence is correct?\",\n        \"choices\": [\n            \"Detect adjacency change, flood updated local link information, recompute SPF, install a new next hop.\",\n            \"Install a random next hop, wait for every host to refresh ARP, then run SPF only at the destination.\",\n            \"Wait until each router has exchanged a complete distance vector with every other router.\"\n        ],\n        \"explanation\": \"The failure changes the topology database through link-state flooding. Each router computes its own routes and updates its forwarding entries.\",\n        \"ref\": \"p. 48\"\n    },\n    {\n        \"id\": \"m3-50\",\n        \"topic\": \"3.11\",\n        \"question\": \"A video stream works for an existing LAN subscriber. A newly connected host requests the same IPv4 multicast stream; the router needs to learn that the new link has an interested receiver. What should be checked first?\",\n        \"choices\": [\n            \"Whether the host’s IGMP membership report reaches its local multicast router.\",\n            \"Whether the sender changed its source IP to the group address.\",\n            \"Whether the host received a separate unicast copy before it could join.\"\n        ],\n        \"explanation\": \"A receiver joins a group locally through IGMP. Knowing that a downstream link has listeners lets the multicast forwarding system deliver group traffic on that link.\",\n        \"ref\": \"p. 40\"\n    },\n    {\n        \"id\": \"m4-01\",\n        \"topic\": \"4.1\",\n        \"question\": \"A grading service accepts one student, then stops admitting others while it writes that student's feedback. Which socket design lets new students connect during the write?\",\n        \"choices\": [\n            \"Keep accepting on the listening socket and handle each returned socket independently.\",\n            \"Read all student submissions from the listening socket itself.\",\n            \"Give every student a different server port before calling listen.\"\n        ],\n        \"explanation\": \"accept returns a connected socket for one client. The original socket can keep accepting while a worker or event loop services the first connection.\",\n        \"ref\": \"p. 5\"\n    },\n    {\n        \"id\": \"m4-02\",\n        \"topic\": \"4.1\",\n        \"question\": \"A trace shows no outbound packet when an idle server calls the abstract RECEIVE primitive. Which observation would show that the design is working?\",\n        \"choices\": [\n            \"The call waits until incoming data can be returned to the application.\",\n            \"The peer receives an empty DATA packet requesting its next message.\",\n            \"The peer starts a fresh handshake for every waiting RECEIVE.\"\n        ],\n        \"explanation\": \"A primitive is a local service request. RECEIVE waits for data, whereas SEND can cause transport data to travel on the network.\",\n        \"ref\": \"p. 4\"\n    },\n    {\n        \"id\": \"m4-03\",\n        \"topic\": \"4.1\",\n        \"question\": \"An internal time service must answer independent UDP requests from thousands of sensors on port 9000. Which server loop fits?\",\n        \"choices\": [\n            \"Bind a datagram socket, receive each request with its sender address, and send the reply there.\",\n            \"Bind a stream socket and accept a TCP connection for each UDP request.\",\n            \"Receive every request on an ephemeral socket, then move it to a listening socket on 9000.\"\n        ],\n        \"explanation\": \"A bound UDP socket can serve multiple senders without connection setup. The sender's IP and source port identify the reply destination.\",\n        \"ref\": \"p. 5\"\n    },\n    {\n        \"id\": \"m4-04\",\n        \"topic\": \"4.1\",\n        \"question\": \"Two independent TCP uploads leave one laptop for the same server IP and port 443 at the same time. Which field can distinguish the connections when their IP addresses match?\",\n        \"choices\": [\n            \"The laptop's source port.\",\n            \"The server's listening port alone.\",\n            \"The sequence number of the first file byte alone.\"\n        ],\n        \"explanation\": \"The TCP connection is identified by both endpoint IPs and ports. Distinct client ports give these simultaneous connections different four-tuples.\",\n        \"ref\": \"p. 3\"\n    },\n    {\n        \"id\": \"m4-05\",\n        \"topic\": \"4.1\",\n        \"question\": \"A client sends a variable-length input stream, then needs the server's computed result. The service uses end-of-stream to delimit the input. What should the client do?\",\n        \"choices\": [\n            \"Close its sending direction and continue reading.\",\n            \"Abort the entire connection as soon as it finishes writing.\",\n            \"Wait for the result before signalling the end of the input stream.\"\n        ],\n        \"explanation\": \"A half-close tells the server that the request is complete while leaving the reverse direction available for the result. Waiting first could leave both sides waiting.\",\n        \"ref\": \"p. 4\"\n    },\n    {\n        \"id\": \"m4-06\",\n        \"topic\": \"4.2\",\n        \"question\": \"A lecture app has a live microphone channel and a downloadable answer sheet. Lost audio expires in 80 ms, while the PDF must arrive intact. Which split meets both goals?\",\n        \"choices\": [\n            \"Send timestamped live audio over UDP and transfer the PDF over reliable TCP.\",\n            \"Use one ordered TCP stream for both so a lost audio frame is always replayed before newer audio.\",\n            \"Send both over plain UDP and treat a valid checksum as proof that every piece arrived.\"\n        ],\n        \"explanation\": \"Late audio can be discarded at playout, while the PDF needs recovery and ordering. A checksum can detect corruption in a received datagram but cannot recover a missing one.\",\n        \"ref\": \"p. 10\"\n    },\n    {\n        \"id\": \"m4-07\",\n        \"topic\": \"4.2\",\n        \"question\": \"A billing client sends two records using two TCP writes. The server's first read contains one record and half of the next. What should its parser do?\",\n        \"choices\": [\n            \"Use explicit record lengths or delimiters and buffer incomplete records.\",\n            \"Treat each TCP read as exactly one application record.\",\n            \"Request that TCP set a different destination port for each record boundary.\"\n        ],\n        \"explanation\": \"TCP preserves byte order, but it can split or combine application writes. Framing belongs in the application protocol.\",\n        \"ref\": \"p. 7\"\n    },\n    {\n        \"id\": \"m4-08\",\n        \"topic\": \"4.2\",\n        \"question\": \"A sensor team budgets 40 bytes per reading. Its captured UDP length field is 0x0028. How many bytes of sensor payload actually arrived?\",\n        \"choices\": [\n            \"32 bytes.\",\n            \"40 bytes.\",\n            \"48 bytes.\"\n        ],\n        \"explanation\": \"Hex 0x28 is 40 decimal, and the UDP length includes the fixed 8-byte header. The application receives 40 − 8 = 32 bytes.\",\n        \"ref\": \"p. 7\"\n    },\n    {\n        \"id\": \"m4-09\",\n        \"topic\": \"4.2\",\n        \"question\": \"A video uploader sees a receive window of 24 KB and a congestion window of 10 KB. It already has 7 KB unacknowledged. With no new ACK, how much more may it send?\",\n        \"choices\": [\n            \"3 KB.\",\n            \"10 KB.\",\n            \"17 KB.\"\n        ],\n        \"explanation\": \"The smaller window limits total data in flight to 10 KB. The existing 7 KB occupies part of that allowance, leaving 3 KB.\",\n        \"ref\": \"p. 8\"\n    },\n    {\n        \"id\": \"m4-10\",\n        \"topic\": \"4.2\",\n        \"question\": \"A receiver expects byte 4001. It gets 4001–4500, misses 4501–5000, then buffers 5001–5500. Which cumulative ACK should it send now?\",\n        \"choices\": [\n            \"4501.\",\n            \"5001.\",\n            \"5501.\"\n        ],\n        \"explanation\": \"The cumulative ACK names the first missing byte. Buffering later bytes does not fill the gap starting at 4501.\",\n        \"ref\": \"p. 8\"\n    },\n    {\n        \"id\": \"m4-11\",\n        \"topic\": \"4.2\",\n        \"question\": \"A 100 Mb/s link has an 80 ms RTT. A TCP file copy can keep at most 40,000 bytes in flight. Ignoring overhead and losses, what bound explains its low throughput?\",\n        \"choices\": [\n            \"4 Mb/s.\",\n            \"32 Mb/s.\",\n            \"50 Mb/s.\"\n        ],\n        \"explanation\": \"The sender can deliver about one window per RTT. 40,000 × 8 ÷ 0.080 = 4,000,000 bits per second, below the link rate.\",\n        \"ref\": \"p. 8\"\n    },\n    {\n        \"id\": \"m4-12\",\n        \"topic\": \"4.2\",\n        \"question\": \"A TCP segment has data offset 8 and its entire length is 112 bytes, excluding IP. How many bytes should the stream parser count as data?\",\n        \"choices\": [\n            \"80 bytes.\",\n            \"104 bytes.\",\n            \"92 bytes.\"\n        ],\n        \"explanation\": \"Data offset counts 4-byte words. The header is 8 × 4 = 32 bytes, so 112 − 32 = 80 bytes belong to the stream.\",\n        \"ref\": \"p. 8\"\n    },\n    {\n        \"id\": \"m4-13\",\n        \"topic\": \"4.2\",\n        \"question\": \"A logger has two independent 60-byte UDP messages to send. The consumer needs to distinguish them, and the receive buffer is large enough. How should the logger send them?\",\n        \"choices\": [\n            \"Use one datagram per message and handle loss at the application if necessary.\",\n            \"Use two TCP writes and assume each read will return exactly 60 bytes.\",\n            \"Use one UDP datagram for both and assume UDP identifies the internal boundary.\"\n        ],\n        \"explanation\": \"UDP preserves the sender's datagram boundaries. If multiple records share a datagram, the application must add its own framing.\",\n        \"ref\": \"p. 7\"\n    },\n    {\n        \"id\": \"m4-14\",\n        \"topic\": \"4.3\",\n        \"question\": \"A client opens with SYN seq 620, and the server replies SYN+ACK seq 9100, ack 621. What should the client's final pure ACK contain?\",\n        \"choices\": [\n            \"seq 621, ack 9101.\",\n            \"seq 622, ack 9100.\",\n            \"seq 620, ack 9101.\"\n        ],\n        \"explanation\": \"Each SYN consumes one sequence number in its own direction. A pure ACK consumes none, so the client's first data can also start at 621.\",\n        \"ref\": \"p. 11\"\n    },\n    {\n        \"id\": \"m4-15\",\n        \"topic\": \"4.3\",\n        \"question\": \"After a handshake, a client sends 240 bytes beginning at seq 1001, then sends a FIN immediately after the data. If everything arrives in order, what ACK covers both?\",\n        \"choices\": [\n            \"1242.\",\n            \"1241.\",\n            \"1240.\"\n        ],\n        \"explanation\": \"The payload occupies 1001–1240. FIN occupies sequence position 1241, so the receiver next expects 1242.\",\n        \"ref\": \"p. 11\"\n    },\n    {\n        \"id\": \"m4-16\",\n        \"topic\": \"4.3\",\n        \"question\": \"A design review proposes accepting a connection immediately after sending SYN+ACK. A delayed SYN from an old, closed connection arrives. Which guarantee would the design lose?\",\n        \"choices\": [\n            \"Confirmation that the current client received this server's new sequence number.\",\n            \"The ability to put the client's address in an IP packet.\",\n            \"The ability to choose a server-side receive window before sending any data.\"\n        ],\n        \"explanation\": \"The final ACK acknowledges the server's current ISN. Without it, a stale SYN could be mistaken for a live peer's request.\",\n        \"ref\": \"p. 12\"\n    },\n    {\n        \"id\": \"m4-17\",\n        \"topic\": \"4.3\",\n        \"question\": \"The final pure ACK of a handshake disappears. The client then sends its first request with a valid ACK of the server's SYN. How can the server proceed?\",\n        \"choices\": [\n            \"Accept the acknowledgement on the data segment and enter ESTABLISHED.\",\n            \"Discard the data because the third message must contain no payload.\",\n            \"Ask the client to choose a different source port before acknowledging the request.\"\n        ],\n        \"explanation\": \"The server needs a valid acknowledgement of its SYN. A subsequent data-bearing ACK can supply it while the server is still waiting.\",\n        \"ref\": \"p. 12\"\n    },\n    {\n        \"id\": \"m4-18\",\n        \"topic\": \"4.3\",\n        \"question\": \"A service sends FIN after its response, receives an ACK, then sees more request bytes from its peer. What does TCP permit at this point?\",\n        \"choices\": [\n            \"The peer can keep sending until it closes its own direction.\",\n            \"Both endpoints must discard all data as soon as the first FIN is acknowledged.\",\n            \"The response sender can send additional response bytes on its already closed direction.\"\n        ],\n        \"explanation\": \"A FIN closes only the sender's byte stream. Acknowledging it does not close the acknowledging peer's independent sending direction.\",\n        \"ref\": \"p. 12\"\n    },\n    {\n        \"id\": \"m4-19\",\n        \"topic\": \"4.3\",\n        \"question\": \"A client actively closes a connection. MSL is 45 seconds, and the last ACK gets lost. What does the standard textbook close model require?\",\n        \"choices\": [\n            \"Retain TIME-WAIT for 90 seconds and acknowledge a retransmitted FIN.\",\n            \"Retain TIME-WAIT for 45 seconds and send a new SYN on a retransmitted FIN.\",\n            \"Delete the connection immediately because a pure ACK cannot be lost.\"\n        ],\n        \"explanation\": \"The active closer waits 2 × MSL. It can answer the peer's repeated FIN and allow delayed segments from the old connection to expire.\",\n        \"ref\": \"p. 14\"\n    },\n    {\n        \"id\": \"m4-20\",\n        \"topic\": \"4.3\",\n        \"question\": \"A proxy designer predicts exactly four TCP segments in every orderly close. Its test sees FIN, FIN+ACK, ACK. What explains the three-segment trace?\",\n        \"choices\": [\n            \"The peer was ready to finish sending and combined its FIN with its ACK.\",\n            \"TCP omitted one direction's FIN because the connection was full-duplex.\",\n            \"The second packet was a reset, so neither FIN needed acknowledgement.\"\n        ],\n        \"explanation\": \"Both directions must close, but acknowledgement of the first FIN can travel with the peer's FIN when it has no more data.\",\n        \"ref\": \"p. 12\"\n    },\n    {\n        \"id\": \"m4-21\",\n        \"topic\": \"4.4\",\n        \"question\": \"A receiver advertises a zero window, drains its buffer, then loses its window-update ACK. The sender still has bytes queued. Which timer breaks the stalemate?\",\n        \"choices\": [\n            \"Persistence timer.\",\n            \"Keepalive timer.\",\n            \"TIME-WAIT timer.\"\n        ],\n        \"explanation\": \"A persistence probe elicits a fresh window advertisement. It addresses blocked pending data even if the receiver's reopening update was lost.\",\n        \"ref\": \"p. 14\"\n    },\n    {\n        \"id\": \"m4-22\",\n        \"topic\": \"4.4\",\n        \"question\": \"A long-lived terminal has no application data pending in either direction. A laptop disappears from the network without closing. Which optional TCP mechanism can detect the abandoned connection?\",\n        \"choices\": [\n            \"Keepalive probes after an idle interval.\",\n            \"Persistence probes after a zero-window advertisement.\",\n            \"Retransmission of the oldest unacknowledged data segment.\"\n        ],\n        \"explanation\": \"Keepalive targets an idle connection whose peer may have vanished. Here there is no outstanding data or reported zero window.\",\n        \"ref\": \"p. 14\"\n    },\n    {\n        \"id\": \"m4-23\",\n        \"topic\": \"4.4\",\n        \"question\": \"A lab uses the simple estimator S_new = 7/8 × S_old + 1/8 × sample and RTO = 2 × S_new. The old S is 64 ms and the new sample is 96 ms. What RTO should it log?\",\n        \"choices\": [\n            \"136 ms.\",\n            \"192 ms.\",\n            \"128 ms.\"\n        ],\n        \"explanation\": \"The estimate moves partway toward the sample: 56 + 12 = 68 ms. The specified textbook multiplier yields 136 ms.\",\n        \"ref\": \"p. 14\"\n    },\n    {\n        \"id\": \"m4-24\",\n        \"topic\": \"4.4\",\n        \"question\": \"A fresh connection measures its first RTT at 180 ms. Under the variance-based estimator, ignoring the minimum RTO and clock granularity, what initial RTO results?\",\n        \"choices\": [\n            \"540 ms.\",\n            \"360 ms.\",\n            \"900 ms.\"\n        ],\n        \"explanation\": \"For the first sample, SRTT = 180 ms and RTTVAR = 90 ms. Thus SRTT + 4 × RTTVAR = 180 + 360 = 540 ms.\",\n        \"ref\": \"p. 15\"\n    },\n    {\n        \"id\": \"m4-25\",\n        \"topic\": \"4.4\",\n        \"question\": \"A sender has SRTT 100 ms and RTTVAR 20 ms. The next clean RTT sample is 140 ms. With α = 1/8, β = 1/4 and no RTO floor, what is the new RTO?\",\n        \"choices\": [\n            \"205 ms.\",\n            \"200 ms.\",\n            \"185 ms.\"\n        ],\n        \"explanation\": \"Update variation first using the old estimate: 0.75 × 20 + 0.25 × 40 = 25 ms. SRTT becomes 105 ms, so RTO is 105 + 4 × 25 = 205 ms.\",\n        \"ref\": \"p. 15\"\n    },\n    {\n        \"id\": \"m4-26\",\n        \"topic\": \"4.4\",\n        \"question\": \"A sender retransmits a segment after 1 second. Its ACK arrives 15 ms later, without TCP timestamps. Should it feed a 15 ms sample into its RTT estimator?\",\n        \"choices\": [\n            \"No; wait for an unambiguous sample from a transmission that was never repeated.\",\n            \"Yes; the most recent copy is always the one the ACK confirms.\",\n            \"Yes; add 1 second to 15 ms and use that sum as a certain RTT sample.\"\n        ],\n        \"explanation\": \"The ACK does not identify which transmission it acknowledges. Karn's rule avoids both potentially misleading measurements.\",\n        \"ref\": \"p. 15\"\n    },\n    {\n        \"id\": \"m4-27\",\n        \"topic\": \"4.4\",\n        \"question\": \"A sender starts with a 2-second RTO. With no ACKs and no backoff cap reached, how long after the original send does the third timeout occur?\",\n        \"choices\": [\n            \"14 seconds.\",\n            \"8 seconds.\",\n            \"6 seconds.\"\n        ],\n        \"explanation\": \"The waits are 2, 4 and 8 seconds, measured successively. The third expiry occurs at elapsed time 2 + 4 + 8 = 14 seconds.\",\n        \"ref\": \"p. 15\"\n    },\n    {\n        \"id\": \"m4-28\",\n        \"topic\": \"4.4\",\n        \"question\": \"A bulk transfer sees three duplicate ACKs for the same gap while later segments continue to arrive. In classic TCP, what can avoid a full timeout delay?\",\n        \"choices\": [\n            \"Fast retransmit the apparent missing segment.\",\n            \"Open a new TCP connection for the missing bytes.\",\n            \"Enter TIME-WAIT and wait for late duplicates to expire.\"\n        ],\n        \"explanation\": \"Repeated cumulative ACKs indicate that later data is reaching the receiver past a gap. Classic fast retransmit uses this evidence before the RTO expires.\",\n        \"ref\": \"p. 15\"\n    },\n    {\n        \"id\": \"m4-29\",\n        \"topic\": \"4.5\",\n        \"question\": \"A phone asks the campus resolver for a final address. The resolver has an empty cache and receives a .com referral from a root server. Who should follow the referral?\",\n        \"choices\": [\n            \"The campus resolver, continuing its iterative lookup.\",\n            \"The phone, because it must contact each level after a recursive request.\",\n            \"The root server, because a referral obliges it to fetch the final address.\"\n        ],\n        \"explanation\": \"The stub requested recursive service from the campus resolver. The resolver follows referrals and returns the final result or an error to the phone.\",\n        \"ref\": \"p. 19\"\n    },\n    {\n        \"id\": \"m4-30\",\n        \"topic\": \"4.5\",\n        \"question\": \"A college publishes a portal on both IPv4 and IPv6 and wants a separate hostname to follow it if its addresses change. Which records fit?\",\n        \"choices\": [\n            \"A and AAAA at the portal hostname, plus a CNAME from the separate alias to that hostname.\",\n            \"Only an AAAA record at the alias, because it can store IPv4 and IPv6 together.\",\n            \"Two MX records at the portal hostname, one for each IP version.\"\n        ],\n        \"explanation\": \"A and AAAA store IPv4 and IPv6 addresses. A CNAME refers to the canonical name, so the alias can follow changes without copying addresses.\",\n        \"ref\": \"p. 18\"\n    },\n    {\n        \"id\": \"m4-31\",\n        \"topic\": \"4.5\",\n        \"question\": \"At 09:50 a resolver caches an A record with TTL 1800 seconds. The address changes at 10:00. With ordinary TTL caching and no flush, when can that cached answer expire?\",\n        \"choices\": [\n            \"10:20.\",\n            \"10:30.\",\n            \"10:00.\"\n        ],\n        \"explanation\": \"The TTL starts when the resolver caches the record. Thirty minutes after 09:50 is 10:20; changing the authoritative record does not invalidate cached copies immediately.\",\n        \"ref\": \"p. 20\"\n    },\n    {\n        \"id\": \"m4-32\",\n        \"topic\": \"4.5\",\n        \"question\": \"A publisher needs two servers that can both answer authoritatively even during a short primary outage. Which design provides this?\",\n        \"choices\": [\n            \"An authoritative secondary with a current, unexpired zone transferred from the primary.\",\n            \"A root server configured to cache the publisher's pages.\",\n            \"A recursive resolver whose A-record TTL is set to zero.\"\n        ],\n        \"explanation\": \"A secondary holds a zone copy and can answer authoritatively while the copy is valid. A recursive cache alone does not become authoritative.\",\n        \"ref\": \"p. 18\"\n    },\n    {\n        \"id\": \"m4-33\",\n        \"topic\": \"4.5\",\n        \"question\": \"Small DNS lookups succeed through a firewall. A larger response carries the truncation flag, then resolution fails. Which normal fallback should the design allow?\",\n        \"choices\": [\n            \"A new query over TCP to DNS port 53.\",\n            \"A retry over UDP to HTTP port 80.\",\n            \"An FTP data connection to the authoritative server.\"\n        ],\n        \"explanation\": \"A truncated UDP answer tells the resolver to retry over TCP for the complete response. Permitting only UDP 53 can produce this size-dependent failure.\",\n        \"ref\": \"p. 20\"\n    },\n    {\n        \"id\": \"m4-34\",\n        \"topic\": \"4.5\",\n        \"question\": \"A mail domain publishes MX 10 mx-a and MX 30 mx-b, both with valid address records. The sender needs a delivery endpoint. Which plan follows DNS semantics?\",\n        \"choices\": [\n            \"Try mx-a first, resolving its hostname to an IP address.\",\n            \"Use 10 as the TCP port and connect directly to the domain's web IP.\",\n            \"Try mx-b first because 30 denotes the greater routing preference.\"\n        ],\n        \"explanation\": \"Lower MX preference numbers are tried first. An MX target is a hostname that needs address resolution, not a port or the address itself.\",\n        \"ref\": \"p. 18\"\n    },\n    {\n        \"id\": \"m4-35\",\n        \"topic\": \"4.5\",\n        \"question\": \"A developer asks for a hostname before it exists. Minutes after its creation, the authoritative server answers correctly, but one resolver still says NXDOMAIN. Why?\",\n        \"choices\": [\n            \"That resolver may still hold a negative cache entry.\",\n            \"A newly created name must first acquire a PTR record to resolve forward.\",\n            \"The resolver can only resolve names it serves authoritatively.\"\n        ],\n        \"explanation\": \"Negative caching can retain an earlier no-such-name result for a bounded interval. Different caches can therefore disagree temporarily.\",\n        \"ref\": \"p. 19\"\n    },\n    {\n        \"id\": \"m4-36\",\n        \"topic\": \"4.5\",\n        \"question\": \"An operations dashboard has an IP address and wants its published reverse-DNS name. Which record should it request in the reverse zone?\",\n        \"choices\": [\n            \"PTR.\",\n            \"CNAME at the forward hostname.\",\n            \"MX at the domain apex.\"\n        ],\n        \"explanation\": \"PTR records map reverse address names to hostnames. Looking up forward A or AAAA records starts with a hostname, which the dashboard does not yet have.\",\n        \"ref\": \"p. 18\"\n    },\n    {\n        \"id\": \"m4-37\",\n        \"topic\": \"4.6\",\n        \"question\": \"A page needs one HTML file followed by four images, all on one host. One RTT is 30 ms. With serial non-persistent HTTP, no DNS, TLS or transmission time, what is the fetch time?\",\n        \"choices\": [\n            \"300 ms.\",\n            \"180 ms.\",\n            \"150 ms.\"\n        ],\n        \"explanation\": \"Each of the five objects needs one TCP handshake RTT and one request/response RTT. Five × two × 30 ms = 300 ms.\",\n        \"ref\": \"p. 22\"\n    },\n    {\n        \"id\": \"m4-38\",\n        \"topic\": \"4.6\",\n        \"question\": \"A page's HTML reveals eight small images on one host. Using one initially unopened persistent HTTP/1.1 connection with ideal pipelining, what is the minimum RTT count? Ignore DNS, TLS and transmission time.\",\n        \"choices\": [\n            \"3 RTTs.\",\n            \"2 RTTs.\",\n            \"10 RTTs.\"\n        ],\n        \"explanation\": \"One RTT opens TCP, one fetches the HTML, and one fetches the batch of images after their URLs are known. The HTML dependency prevents fetching everything in the second RTT.\",\n        \"ref\": \"p. 22\"\n    },\n    {\n        \"id\": \"m4-39\",\n        \"topic\": \"4.6\",\n        \"question\": \"A browser has a cached timetable. After a conditional GET it receives HTTP 304 with an empty body. What should the UI display?\",\n        \"choices\": [\n            \"The validated cached timetable.\",\n            \"An empty timetable because the server returned no representation bytes.\",\n            \"A login screen because the server refused to release the timetable.\"\n        ],\n        \"explanation\": \"304 indicates the cached representation remains usable. Omitting the response body saves the cost of sending the same content again.\",\n        \"ref\": \"p. 22\"\n    },\n    {\n        \"id\": \"m4-40\",\n        \"topic\": \"4.6\",\n        \"question\": \"A student starts an exam, closes the connection, and opens the next question on a new connection. How can the server find the correct attempt?\",\n        \"choices\": [\n            \"Use a session identifier returned in a cookie to look up the attempt.\",\n            \"Treat the new TCP source port as the student's durable identifier.\",\n            \"Use HTTP keep-alive to recover the closed connection's local memory.\"\n        ],\n        \"explanation\": \"HTTP requests can carry a session cookie across connections. The application maps that identifier to stored attempt data independently of the transport socket.\",\n        \"ref\": \"p. 24\"\n    },\n    {\n        \"id\": \"m4-41\",\n        \"topic\": \"4.6\",\n        \"question\": \"A results service accepts an email submission, but the recipient's mail server is temporarily offline. Which design avoids asking the student to submit again immediately?\",\n        \"choices\": [\n            \"Queue the accepted message and retry SMTP relay later.\",\n            \"Ask the recipient's IMAP client to pull the message directly from the sender's browser.\",\n            \"Drop the message as soon as its first TCP connection attempt fails.\"\n        ],\n        \"explanation\": \"Mail transfer agents use store-and-forward delivery. Submission and final relay can happen at different times, with retries for temporary failure.\",\n        \"ref\": \"p. 23\"\n    },\n    {\n        \"id\": \"m4-42\",\n        \"topic\": \"4.6\",\n        \"question\": \"A student wants to read campus mail on a phone and laptop, with folders and read state synchronized. Which protocol pair serves normal client submission and mailbox access?\",\n        \"choices\": [\n            \"SMTP submission on 587 and IMAP over TLS on 993.\",\n            \"IMAP on 993 for both outbound delivery and mailbox access.\",\n            \"SMTP relay on 25 for both message sending and folder synchronization.\"\n        ],\n        \"explanation\": \"SMTP handles outgoing submission. IMAP manages a server-side mailbox and synchronizes its state across clients.\",\n        \"ref\": \"p. 24\"\n    },\n    {\n        \"id\": \"m4-43\",\n        \"topic\": \"4.6\",\n        \"question\": \"An email with a Bcc recipient has no visible To header naming that recipient. What should the forwarding server use to deliver the copy?\",\n        \"choices\": [\n            \"The SMTP envelope recipient supplied by RCPT TO.\",\n            \"The message's displayed To header only.\",\n            \"The MX preference number as a mailbox identifier.\"\n        ],\n        \"explanation\": \"Servers route using envelope recipients. Displayed headers are part of the message and need not include every intended recipient.\",\n        \"ref\": \"p. 23\"\n    },\n    {\n        \"id\": \"m4-44\",\n        \"topic\": \"4.6\",\n        \"question\": \"A browser has no DNS cache or existing connections and is fetching a URL with HTTPS over TCP. Which dependency order can its trace show?\",\n        \"choices\": [\n            \"Resolve the hostname, connect to port 443, negotiate TLS, then send the encrypted HTTP request.\",\n            \"Send the HTTP request, then use its status code to discover the server IP.\",\n            \"Negotiate TLS with the root DNS server, then use that TLS session at the web server.\"\n        ],\n        \"explanation\": \"For this fresh TCP-based request, DNS supplies the address, TCP creates the stream, and TLS protects the HTTP exchange with the web server.\",\n        \"ref\": \"p. 29\"\n    },\n    {\n        \"id\": \"m4-45\",\n        \"topic\": \"4.7\",\n        \"question\": \"Two legacy terminals represent line endings differently. A Telnet session must interoperate without making the remote application understand both encodings. Which layer of the design handles it?\",\n        \"choices\": [\n            \"Translate local terminal conventions to and from Telnet's Network Virtual Terminal format.\",\n            \"Expect TCP checksum verification to normalize the character bytes.\",\n            \"Assign a distinct TCP port to each terminal's line-ending convention.\"\n        ],\n        \"explanation\": \"Telnet uses a shared NVT representation and endpoint translation. TCP reliably transports bytes without rewriting their terminal meaning.\",\n        \"ref\": \"p. 25\"\n    },\n    {\n        \"id\": \"m4-46\",\n        \"topic\": \"4.7\",\n        \"question\": \"A company retires a cleartext remote console used on shared Wi-Fi. Which replacement meets the requirement to encrypt both credentials and terminal traffic?\",\n        \"choices\": [\n            \"SSH with server identity verification.\",\n            \"Telnet on a nonstandard port.\",\n            \"Telnet with a longer TCP keepalive interval.\"\n        ],\n        \"explanation\": \"Plain Telnet sends login details and commands in readable form. SSH supplies an encrypted channel and host authentication; port changes and timers do neither.\",\n        \"ref\": \"p. 25\"\n    },\n    {\n        \"id\": \"m4-47\",\n        \"topic\": \"4.7\",\n        \"question\": \"A lab's FTP client behind NAT logs in, but LIST stalls in active mode. Which design change is most likely to restore directory listings?\",\n        \"choices\": [\n            \"Use passive mode so the client initiates the data connection to the server's advertised endpoint.\",\n            \"Move the LIST command from the control connection to an HTTP connection.\",\n            \"Reuse the FTP login reply as the directory listing, without opening a data connection.\"\n        ],\n        \"explanation\": \"The login and command path can work while the separate server-initiated data connection fails at the NAT. Passive mode makes the data connection outbound from the client.\",\n        \"ref\": \"p. 26\"\n    },\n    {\n        \"id\": \"m4-48\",\n        \"topic\": \"4.7\",\n        \"question\": \"An FTP server's PASV reply advertises (192,0,2,12,8,17). Which endpoint should the client use for the next data transfer?\",\n        \"choices\": [\n            \"192.0.2.12:2065.\",\n            \"192.0.2.12:817.\",\n            \"192.0.2.12:4360.\"\n        ],\n        \"explanation\": \"The last two numbers encode high and low port bytes. Compute 8 × 256 + 17 = 2065; concatenating the decimal strings or reversing their order gives the wrong port.\",\n        \"ref\": \"p. 26\"\n    },\n    {\n        \"id\": \"m4-49\",\n        \"topic\": \"4.7\",\n        \"question\": \"An FTP download completes successfully but the binary model file fails its checksum. The session used TYPE A. Which change addresses the likely cause?\",\n        \"choices\": [\n            \"Use TYPE I and transfer the file again.\",\n            \"Enable TCP keepalive so text conversion becomes reversible.\",\n            \"Use a second FTP control connection for every data block.\"\n        ],\n        \"explanation\": \"ASCII mode can translate line endings, changing binary bytes despite reliable transport. Image or binary mode transfers the exact byte sequence.\",\n        \"ref\": \"p. 27\"\n    },\n    {\n        \"id\": \"m4-50\",\n        \"topic\": \"4.7\",\n        \"question\": \"A backup client must encrypt uploaded files and use the organization's existing SSH service on port 22. Which file-transfer protocol fits directly?\",\n        \"choices\": [\n            \"SFTP.\",\n            \"FTPS.\",\n            \"Classic FTP in passive mode.\"\n        ],\n        \"explanation\": \"SFTP operates over SSH. FTPS secures FTP with TLS and retains FTP's control/data design, while passive mode only changes how the FTP data connection is established.\",\n        \"ref\": \"p. 27\"\n    }\n];\n","/quiz.js":"\"use strict\";\nconst deckNames = { m3: 'Network Layer', m4: 'Transport Layer' };\nconst quizTopics = {\n    '3.1': 'Packet delivery', '3.2': 'Delivery modes', '3.3': 'Classful IPv4', '3.4': 'CIDR', '3.5': 'Subnet design', '3.6': 'NAT', '3.7': 'IPv6', '3.8': 'Shortest paths', '3.9': 'Link state', '3.10': 'Distance vector', '3.11': 'Network protocols', '3.12': 'Congestion',\n    '4.1': 'Transport services', '4.2': 'UDP and TCP', '4.3': 'Connection management', '4.4': 'TCP timers', '4.5': 'DNS', '4.6': 'HTTP and email', '4.7': 'Telnet and FTP'\n};\nlet quizModule = location.hash.endsWith('/m4') ? 'm4' : 'm3';\nlet playingQuiz = /^#flashcards\\/m[34]$/.test(location.hash);\nconst cardsById = new Map(quizCards.map(c => [c.id, c]));\nfunction shuffled(items) {\n    const result = [...items];\n    for (let i = result.length - 1; i > 0; i--) {\n        const j = Math.floor(Math.random() * (i + 1));\n        [result[i], result[j]] = [result[j], result[i]];\n    }\n    return result;\n}\nfunction deckCards(mod) { return quizCards.filter(c => c.id.startsWith(mod + '-')); }\nfunction newRound(cards) {\n    return { index: 0, answers: [], cards: cards.map(c => ({ id: c.id, order: shuffled([0, 1, 2]).join('') })) };\n}\nfunction gotoQuiz(active) {\n    playingQuiz = active;\n    history.replaceState(null, '', '#flashcards' + (active ? '/' + quizModule : ''));\n    renderQuiz();\n}\nfunction quizFeedbackFocus(selector) {\n    const el = document.querySelector(selector);\n    if (el)\n        el.focus({ preventScroll: true });\n    const card = document.querySelector('.quizPaper');\n    if (card && !matchMedia('(prefers-reduced-motion: reduce)').matches)\n        card.animate([{ opacity: .45, transform: 'translateY(5px) rotateX(-2deg)' }, { opacity: 1, transform: 'none' }], { duration: 190, easing: 'ease-out' });\n}\nfunction startQuiz(mode) {\n    const mod = quizModule;\n    const current = state[roundKey(mod)];\n    if (current && current.index < current.cards.length && !confirm('Replace the unfinished round? Your answered cards still count toward your performance.'))\n        return;\n    let pool = deckCards(mod);\n    if (mode === 'missed')\n        pool = pool.filter(c => state[markKey(c.id)][2]);\n    if (!pool.length)\n        return;\n    const round = newRound(shuffled(pool).slice(0, mode === 'quick' ? 10 : 50));\n    changed(patchValue(roundKey(mod), round));\n    gotoQuiz(true);\n    quizFeedbackFocus('.quizPrompt');\n}\nfunction answerQuiz(choice) {\n    const r = state[roundKey(quizModule)];\n    if (!r || r.index >= r.cards.length || r.answers.length !== r.index || ![0, 1, 2].includes(choice))\n        return;\n    const id = r.cards[r.index].id, [tries, correct] = state[markKey(id)];\n    changed({ ...patchValue(roundKey(quizModule), { ...r, answers: [...r.answers, choice] }), ...patchValue(markKey(id), [tries + 1, correct + Number(choice === 0), choice !== 0]) });\n    renderQuiz();\n    quizFeedbackFocus('.quizExplanation');\n}\nfunction advanceQuiz() {\n    const r = state[roundKey(quizModule)];\n    if (!r || r.index >= r.answers.length)\n        return;\n    const next = { ...r, index: r.index + 1 };\n    const delta = patchValue(roundKey(quizModule), next);\n    if (next.index === next.cards.length)\n        delta[trackKey(quizModule)] = [[Date.now(), next.answers.filter(a => a === 0).length, next.cards.length], ...state[trackKey(quizModule)]].slice(0, 20);\n    changed(delta);\n    renderQuiz();\n    quizFeedbackFocus('.quizPrompt');\n}\nfunction quizButton(action, label, style = '') { return '<button type=\"button\" data-quiz=\"' + action + '\" class=\"' + style + '\">' + label + '</button>'; }\nfunction homeQuiz() {\n    const mod = quizModule, list = deckCards(mod), active = state[roundKey(mod)], recent = state[trackKey(mod)];\n    const scores = list.map(c => state[markKey(c.id)]);\n    const tries = scores.reduce((v, r) => v + r[0], 0), correct = scores.reduce((v, r) => v + r[1], 0), missed = scores.filter(r => r[2]).length;\n    const topicsMap = new Map();\n    for (const c of list) {\n        const bucket = topicsMap.get(c.topic) || [0, 0], mark = state[markKey(c.id)];\n        bucket[0] += mark[0];\n        bucket[1] += mark[1];\n        topicsMap.set(c.topic, bucket);\n    }\n    const byTopic = [...topicsMap].filter(([, v]) => v[0]).sort((a, b) => a[1][1] / a[1][0] - b[1][1] / b[1][0]);\n    return '<div class=\"eyebrow\"><span class=\"tick\"></span> COMPUTER NETWORKS</div><h1>Flashcards</h1><p class=\"sub\">Make the design call, then check your reasoning against the notes.</p><div class=\"deckGrid\">' + quizModules.map(m => '<button data-quiz=\"' + m + '\" aria-pressed=\"' + (m === mod) + '\" class=\"deckTile ' + (m === mod ? 'chosen' : '') + '\"><span class=\"deckEyebrow\">MODULE 0' + m[1] + '</span><strong>' + deckNames[m] + '</strong><small>50 scenario cards</small><i aria-hidden=\"true\" class=\"deckGlyph\">' + icon(m === 'm3' ? 'road' : 'chart') + '</i></button>').join('') + '</div><article class=\"quizLaunch\"><div><span class=\"deckEyebrow\">PRACTICE ROUND</span><h2>' + deckNames[mod] + '</h2><p>Shuffled questions and choices. Each answer includes a worked explanation.</p></div><div class=\"quizActions\">' + (active && active.index < active.cards.length ? quizButton('resume', 'Resume round · ' + (active.index + 1) + ' of ' + active.cards.length, 'quizPrimary') : '') + quizButton('quick', 'Quick 10', 'quizPrimary') + quizButton('full', 'Full deck · 50') + (missed ? quizButton('missed', 'Retry missed · ' + missed) : '') + '</div></article><div class=\"panelHead\"><h2>Your performance</h2></div><div class=\"stats\">' +\n        [['Cards attempted', scores.filter(r => r[0]).length + ' / 50'], ['Answer accuracy', tries ? Math.round(correct / tries * 100) + '%' : '—'], ['Correct answers', correct + ' / ' + tries]].map(([label, value]) => '<div class=\"stat\"><div class=\"statHead\">' + label + '</div><strong>' + value + '</strong></div>').join('') + '</div>' +\n        (byTopic.length ? '<div class=\"block\"><h3>Topic accuracy</h3>' + byTopic.map(([topic, [total, right]]) => '<div class=\"setting\"><span>' + topic + ' · ' + esc(quizTopics[topic]) + '</span><strong>' + right + ' / ' + total + '</strong></div>').join('') + '</div>' : '') +\n        '<p class=\"info\">' + esc(sync) + '. JSON backups include your quiz results.</p><div class=\"block\"><h3>Recent rounds</h3>' + (recent.length ? recent.map(([timestamp, right, total]) => '<div class=\"setting\"><span>' + esc(new Date(timestamp).toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })) + '</span><strong>' + right + ' / ' + total + ' · ' + Math.round(right / total * 100) + '%</strong></div>').join('') : '<p class=\"info\">Finish a round to see its score here.</p>') + '</div>';\n}\nfunction roundQuiz(r) {\n    if (r.index === r.cards.length) {\n        const correct = r.answers.filter(a => a === 0).length;\n        const review = r.cards.map((slot, i) => {\n            const c = cardsById.get(slot.id), picked = r.answers[i];\n            return '<details class=\"quizReview\"><summary>' + (picked === 0 ? 'Correct' : 'Missed') + ' · ' + esc(c.question) + '</summary><p><b>Your choice</b> · ' + esc(c.choices[picked]) + '</p>' + (picked !== 0 ? '<p><b>Correct choice</b> · ' + esc(c.choices[0]) + '</p>' : '') + '<p>' + esc(c.explanation) + '</p><small>Module ' + quizModule[1] + ' notes · ' + esc(c.ref) + '</small></details>';\n        }).join('');\n        return '<div class=\"eyebrow\">MODULE 0' + quizModule[1] + ' · ' + deckNames[quizModule] + '</div><article class=\"quizPaper\"><p class=\"deckEyebrow\">ROUND COMPLETE</p><h1 class=\"quizPrompt\" tabindex=\"-1\">' + correct + ' / ' + r.cards.length + '</h1><p>' + Math.round(correct / r.cards.length * 100) + '% accuracy this round</p><div class=\"quizActions\">' + quizButton('home', 'View performance', 'quizPrimary') + (correct < r.cards.length ? quizButton('missed', 'Practise missed cards') : '') + '</div></article><div class=\"block\"><h3>Review this round</h3>' + review + '</div>';\n    }\n    const slot = r.cards[r.index], card = cardsById.get(slot.id), picked = r.answers[r.index], graded = picked !== undefined;\n    const buttons = [...slot.order].map((v, i) => {\n        const idx = Number(v);\n        let result = '';\n        if (graded && idx === 0)\n            result = 'Correct answer';\n        else if (graded && idx === picked)\n            result = 'Your answer';\n        return '<button class=\"answerOption ' + (result ? (idx === 0 ? 'right' : 'wrong') : '') + '\" data-answer=\"' + idx + '\" ' + (graded ? 'disabled' : '') + '><b>' + String.fromCharCode(65 + i) + '</b><span>' + esc(card.choices[idx]) + '</span>' + (result ? '<small>' + result + '</small>' : '') + '</button>';\n    }).join('');\n    return '<div class=\"quizTop\">' + quizButton('home', 'Pause & view decks', 'quiet') + '<span>' + deckNames[quizModule] + ' · Module ' + quizModule[1] + '</span></div><article class=\"quizPaper\"><div class=\"quizCounter\"><span class=\"deckEyebrow\">CARD ' + (r.index + 1) + ' OF ' + r.cards.length + '</span><span>' + card.topic + ' · ' + esc(quizTopics[card.topic]) + '</span></div>' + bar(r.answers.length, r.cards.length) + '<h2 class=\"quizPrompt\" tabindex=\"-1\">' + esc(card.question) + '</h2><div class=\"answerList\">' + buttons + '</div>' +\n        (graded ? '<section class=\"quizExplanation\" tabindex=\"-1\"><b>' + (picked === 0 ? 'Correct' : 'Review the reasoning') + '</b><p>' + esc(card.explanation) + '</p><small>Module ' + quizModule[1] + ' notes · ' + esc(card.ref) + '</small></section><div class=\"quizActions\">' + quizButton('next', r.index === r.cards.length - 1 ? 'See results' : 'Next card', 'quizPrimary') + '</div>' : '') + '</article>';\n}\nfunction renderQuiz() {\n    syncStudyTimer();\n    const panel = $('panel'), round = state[roundKey(quizModule)];\n    const html = playingQuiz && round ? roundQuiz(round) : homeQuiz();\n    if (panel.dataset.quizView === html && panel.querySelector('[data-quiz]'))\n        return;\n    panel.dataset.quizView = html;\n    panel.innerHTML = html;\n}\ndocument.addEventListener('click', e => {\n    const b = eventElement(e)?.closest('button[data-quiz],button[data-answer]');\n    if (!b || b.disabled)\n        return;\n    if (b.hasAttribute('data-answer')) {\n        answerQuiz(Number(b.dataset.answer));\n        return;\n    }\n    const action = b.dataset.quiz;\n    if (!action)\n        return;\n    if (quizModules.includes(action)) {\n        quizModule = action;\n        gotoQuiz(false);\n        document.querySelector('[data-quiz=\"' + action + '\"]')?.focus({ preventScroll: true });\n    }\n    else if (action === 'recall') {\n        legacyQuizView = false;\n        playingQuiz = false;\n        openPage('Flashcards');\n    }\n    else if (action === 'home' || action === 'resume')\n        gotoQuiz(action === 'resume');\n    else if (action === 'next')\n        advanceQuiz();\n    else if (['quick', 'full', 'missed'].includes(action))\n        startQuiz(action);\n});\n","/topic-notes.js":"\"use strict\";\nconst topicNotes = {\n    '3.1': {\n        summary: 'Routing computes paths between networks. Forwarding uses the installed routing information to move each packet one hop. IP provides best-effort delivery, so packets can arrive out of order or be lost.',\n        formula: 'Destination IP → longest matching prefix → next hop and outgoing interface.',\n        diagram: 'Host A → R1 → R2 → Host B. Each router forwards one hop.',\n        question: 'A link fails. What must happen before a router starts forwarding along the newly computed path?',\n        answer: 'The routing process learns the change, computes the new route and installs the corresponding forwarding entry.'\n    },\n    '3.2': {\n        summary: 'Unicast addresses one receiver. Multicast addresses a group with interested members. An IPv4 local broadcast reaches every host in the broadcast domain.',\n        formula: 'Shared-link load before the branch: n unicast copies need n × stream rate; one multicast copy needs the stream rate.',\n        diagram: 'Sender → one WAN stream → branch router → subscribed LANs.',\n        question: 'Three of twenty remote hosts join 239.1.1.1. Which IP addresses appear on a multicast packet?',\n        answer: 'The source is the sender’s own unicast IP. The destination is 239.1.1.1, which identifies the group.'\n    },\n    '3.3': {\n        summary: 'Historical classful IPv4 uses default prefixes /8 for A, /16 for B and /24 for C. D is multicast and E is reserved.',\n        formula: 'First octet: ordinary A 1–126; B 128–191; C 192–223; D 224–239; E 240–255. 127/8 is loopback.',\n        diagram: '150.23 | 9.40 → historical Class B → network 150.23.0.0/16.',\n        question: 'How many ordinary host addresses fit in a legacy Class B network using its default mask?',\n        answer: 'Sixteen host bits give 2¹⁶ − 2 = 65,534 usable addresses after reserving the network and directed broadcast.'\n    },\n    '3.4': {\n        summary: 'CIDR gives the actual network boundary as a prefix length. Find the aligned block containing the address before choosing an IPv4 host or gateway.',\n        formula: 'Network = IP bitwise AND mask. Block size = 2^(32 − prefix length). Broadcast = network + block size − 1.',\n        diagram: '192.0.2.77/27 → .64 network → .65–.94 usable → .95 broadcast.',\n        question: 'Can 192.0.2.96 be the ordinary same-subnet gateway for 192.0.2.77/27?',\n        answer: 'No. The containing subnet ends at .95. Address .96 starts the next /27. Choose an unused address in .65–.94.'\n    },\n    '3.5': {\n        summary: 'FLSM uses equal blocks. VLSM fits blocks to different demands: count all interfaces, allocate the largest first and align every base. A single exact aggregate requires contiguous blocks on the appropriate boundary.',\n        formula: 'For an ordinary LAN needing H interfaces, choose the smallest h with 2ʰ − 2 ≥ H. Its prefix length is 32 − h.',\n        diagram: '10.0.0.0/24 → .0/25 (126 usable), .128/26 (62), .192/27 (30), .224/27 spare.',\n        question: 'Can one prefix advertise 10.4.4.0/24 through 10.4.7.0/24 without covering any other network?',\n        answer: 'Yes. Four adjacent /24s form a /22 here because the third octet starts at a multiple of four. Advertise 10.4.4.0/22.'\n    },\n    '3.6': {\n        summary: 'Source NAT translates an internal source address at the edge. PAT also uses port translations so multiple clients can share one public IPv4 address. The gateway retains the mapping for replies.',\n        formula: 'Outbound: translate source IP and port. Matching reply: restore private destination IP and port.',\n        diagram: '10.0.0.8:42000 ⇄ PAT mapping ⇄ 198.51.100.9:61002.',\n        question: 'Two laptops choose the same TCP source port to contact the same server. How does PAT distinguish the replies?',\n        answer: 'It assigns distinct public ports to the concurrent flows. A reply’s public destination port identifies the appropriate private mapping.'\n    },\n    '3.7': {\n        summary: 'IPv6 has eight 16-bit groups. Drop leading zeros within each group. In canonical text replace the longest run of two or more zero groups with :: once, choosing the leftmost run on a tie.',\n        formula: 'Expansion: missing groups = 8 − explicit groups. Insert the missing zero groups and pad each group to four hexadecimal digits.',\n        diagram: '2001:0db8:0000:0000:0000:0042:0000:0001 ⇄ 2001:db8::42:0:1.',\n        question: 'Expand 2001:db8:5::9. How many groups does :: supply?',\n        answer: 'Four groups are explicit, so :: supplies four zeros: 2001:0db8:0005:0000:0000:0000:0000:0009.'\n    },\n    '3.8': {\n        summary: 'Dijkstra finds shortest paths with non-negative link costs. Start at zero for the source and infinity elsewhere. Repeatedly settle the least-cost unsettled node and relax its outgoing links.',\n        formula: 'If D(u) + cost(u,v) < D(v), update D(v) to the smaller value and record predecessor(v) = u.',\n        diagram: 'S—2—A—3—D; S—8—D. The path through A costs 5.',\n        question: 'D currently costs 8. A is settled at cost 2 and has a link of cost 3 to D. What changes?',\n        answer: 'D’s tentative distance becomes 5, its predecessor becomes A, and the path shown starts from S via A.'\n    },\n    '3.9': {\n        summary: 'A link-state router measures local links and floods advertisements. Routers in the same area build a topology database and compute shortest paths from their own positions. OSPF uses this method.',\n        formula: 'Adjacency change → new link-state advertisement → topology update → SPF calculation → forwarding update.',\n        diagram: 'R1 describes its adjacent links → information floods through the area → each router computes routes.',\n        question: 'A router holds advertisement sequence 84 and receives sequence 81 for the same advertisement. Which copy wins?',\n        answer: 'During normal operation sequence 84 is newer. The delayed older copy must not replace its topology information.'\n    },\n    '3.10': {\n        summary: 'Distance-vector routing chooses among distances reported by neighbours. A router adds its own link cost to each report. After a failure, stale vectors can produce loops and count-to-infinity.',\n        formula: 'Dₓ(y) = min over neighbours v of [cost(x,v) + Dᵥ(y)]. RIP treats 16 as unreachable.',\n        diagram: 'X—2—A reports 6 to Y: total 8. X—4—B reports 3 to Y: total 7.',\n        question: 'Which next hop does X choose, and what would poison reverse advertise back to that hop?',\n        answer: 'X chooses B at cost 7. With poison reverse it advertises Y as unreachable back to B, because its route depends on B.'\n    },\n    '3.11': {\n        summary: 'ARP resolves a local next-hop MAC for a known IPv4 address. Historical RARP maps a MAC to an IP. ICMP reports errors and supports diagnostics. IGMP manages local IPv4 multicast group membership.',\n        formula: 'Remote IP → ARP for the gateway. Same-subnet IP → ARP for the destination itself.',\n        diagram: 'Laptop → learns gateway MAC → Ethernet frame to gateway carries IP packet addressed to remote server.',\n        question: 'A traceroute probe expires at a router. Which message can identify that hop? Which protocol reports joining an IPv4 multicast group?',\n        answer: 'A router may return ICMP Time Exceeded. A local receiver reports membership through IGMP.'\n    },\n    '3.12': {\n        summary: 'Congestion occurs when offered load exceeds network resources. Open-loop policies prevent overload in advance. Closed-loop policies detect developing congestion and use feedback to change traffic.',\n        formula: 'Growing queue → congestion indication → sender reduces rate → queue can drain.',\n        diagram: 'Admission limit before a session = open loop. ECN mark followed by a rate reduction = closed loop.',\n        question: 'A fast receiver has ample memory, but many senders overload a shared router. Would increasing receiver buffer space solve the bottleneck?',\n        answer: 'No. Controlling aggregate traffic or increasing path capacity addresses this network bottleneck. Receiver flow control protects an individual receiving host.'\n    }\n};\n","/m4-notes.js":"\"use strict\";\nconst m4Notes = {\n    '4.1': {\n        summary: 'IP delivers to hosts; transport delivers to application processes. Ports identify service and client endpoints. In the textbook connection-oriented model, LISTEN waits for an incoming connection, CONNECT requests one, SEND transmits application data, RECEIVE waits for or reads data, and DISCONNECT closes the connection.',\n        formula: 'TCP connection ID = (source IP, source port, destination IP, destination port). Port numbers are 16-bit: 0–65535.',\n        diagram: 'Server: LISTEN ← CONNECT :Client → SEND → RECEIVE → DISCONNECT.',\n        question: 'Two uploads from the same laptop go to the same destination IP and TCP port 443. What lets the server keep them separate?',\n        answer: 'The connections use different client source ports, so their connection IDs differ even though both IP addresses and the destination port match.'\n    },\n    '4.2': {\n        summary: 'TCP is a connection-oriented, reliable, ordered byte stream. It uses sequence numbers, ACKs, retransmissions, flow control and congestion control. UDP sends independent datagrams without a handshake or built-in delivery or ordering guarantees. Use TCP for an intact document and consider UDP for latency-sensitive audio that can tolerate loss.',\n        formula: 'TCP header length = Data Offset × 4 bytes (minimum 20). UDP header is 8 bytes, so UDP payload = UDP Length − 8 bytes.',\n        diagram: 'TCP: [Src/Dst ports] [Seq] [ACK] [Offset/Flags/Window] [Checksum/Urgent] [Options?] [Data]. UDP: [Src/Dst ports] [Length/Checksum] [Data].',\n        question: 'A UDP header says Length = 60 bytes. How large is the payload, and does UDP guarantee it will arrive?',\n        answer: '52 bytes. UDP preserves datagram boundaries but does not guarantee delivery or order; the application must provide any reliability it needs.'\n    },\n    '4.3': {\n        summary: 'The three-way TCP handshake synchronizes each side’s initial sequence number and confirms both directions. A FIN closes only one direction; the peer can still send until it issues its own FIN, and the two FINs are acknowledged separately even when some flags share a segment.',\n        formula: 'ACK is the next byte expected. SYN and FIN each consume one sequence number; a pure ACK does not.',\n        diagram: 'Client → Server: SYN, seq=x. Server → Client: SYN+ACK, seq=y, ack=x+1. Client → Server: ACK, seq=x+1, ack=y+1.',\n        question: 'A client begins at sequence 620 and the server answers with SYN+ACK at sequence 9100. What sequence and acknowledgement numbers does the final pure ACK carry?',\n        answer: 'Sequence 621, ACK 9101. The client’s SYN consumed sequence 620 and the server’s SYN consumed sequence 9100.'\n    },\n    '4.4': {\n        summary: 'Retransmission timer: resend the oldest outstanding data if no ACK arrives before its timeout. Persistence timer: probe a zero receive window so a lost window update cannot stall the sender indefinitely. Keepalive timer: optionally probe an idle peer to detect a stale connection. TIME-WAIT timer: wait 2×MSL after the final ACK in the usual active-close case, allowing that ACK to be resent and delayed duplicates to expire.',\n        formula: 'RTT is round-trip time. RTO = SRTT + max(clock granularity, 4×RTTVAR), before the applicable minimum. Back off after timeout.',\n        diagram: 'Unacknowledged data → retransmit; zero window → probe window; idle peer → keepalive; final ACK sent → TIME-WAIT.',\n        question: 'A receiver reopens a zero window, but its window-update ACK is lost. Which timer prevents a deadlock?',\n        answer: 'The persistence timer. A zero-window probe causes the peer to ACK with its current advertised window, revealing that it reopened.'\n    },\n    '4.5': {\n        summary: 'DNS is a hierarchical namespace. The recursive resolver returns the answer to the client or uses cached data; on a miss it can follow iterative referrals from root to TLD to the domain’s authoritative server. Primary and secondary servers can both answer authoritatively for their zone.',\n        formula: 'Record types: A → IPv4; AAAA → IPv6; CNAME → canonical hostname; MX → mail exchanger with preference; NS → name server; PTR → reverse lookup name. TTL is the cache lifetime in seconds. Conventional DNS uses port 53 (UDP or TCP).',\n        diagram: 'Client → recursive resolver → root (referral) → TLD (referral) → authoritative server (answer).',\n        question: 'A college serves a portal over IPv4 and IPv6 and wants an alias to follow any address changes automatically. Which records should it use?',\n        answer: 'Publish A and AAAA at the canonical portal hostname. Point the alias at that hostname with a CNAME.'\n    },\n    '4.6': {\n        summary: 'HTTP sends a request and returns a response. GET retrieves; POST submits for processing; PUT creates or replaces the target; DELETE requests removal. Common statuses: 200 OK, 201 Created, 304 Not Modified, 404 Not Found, 500 Server Error. Persistent HTTP reuses a connection; non-persistent HTTP opens a new connection per request. SMTP sends or relays email; POP3 retrieves mail and IMAP keeps mailbox state in sync.',\n        formula: 'Common ports: HTTP 80; HTTPS 443; SMTP relay 25 and client submission 587; POP3 110/995 and IMAP 143/993 (traditional/implicit TLS). For serial non-persistent HTTP over TCP, ≈2 RTTs per object if DNS, TLS and transfer time are excluded.',\n        diagram: 'Browser → HTTP request → server → response. Sender → SMTP submission/relay → recipient mailbox ← IMAP or POP3 client.',\n        question: 'A page needs one HTML page and three images, fetched serially over non-persistent HTTP. Assuming 25 ms RTT, what is the overhead before transfer time, DNS and TLS?',\n        answer: '4 objects × 2 RTTs × 25 ms = 200 ms. Each object needs a new TCP connection plus its HTTP request and response.'\n    },\n    '4.7': {\n        summary: 'Telnet provides remote terminal access via Network Virtual Terminal, a common representation between different systems. Telnet and plain FTP do not encrypt credentials or traffic. FTP uses a persistent control channel and separate data connections for listings and transfers. In active FTP the server initiates the data connection to the client; in passive FTP the client initiates it to the endpoint announced by the server.',\n        formula: 'Telnet: TCP 23. FTP control: TCP 21; FTP active data commonly originates from server TCP 20; passive data uses a server-chosen port. SSH and SFTP typically use TCP 22.',\n        diagram: 'FTP control: client → server:21. Active data: server:20 → client data port. Passive data: client → server passive port.',\n        question: 'An FTP client behind NAT can log in but directory listings stall in active mode. What should it try, and why?',\n        answer: 'Use passive FTP so the client opens the data connection outbound instead of waiting for the inbound server connection. If encryption is needed, use an encrypted alternative such as SFTP on a server that supports it.'\n    }\n};\n","/player.js":"\"use strict\";\n/* Uses the same dialog as notes and backups, so account refreshes respect the player. */\nconst lecturePlayer = (() => {\n    let active = null;\n    let apiReady;\n    let returnLink;\n    function stableId(lecture) {\n        return lecture.uid;\n    }\n    function loadAPI() {\n        if (window.YT?.Player)\n            return Promise.resolve(window.YT);\n        if (apiReady)\n            return apiReady;\n        apiReady = new Promise((resolve, reject) => {\n            const previous = window.onYouTubeIframeAPIReady;\n            window.onYouTubeIframeAPIReady = () => {\n                try {\n                    previous?.();\n                }\n                finally {\n                    if (window.YT)\n                        resolve(window.YT);\n                    else\n                        reject(new Error('YouTube player did not initialize'));\n                }\n            };\n            const script = document.createElement('script');\n            script.src = 'https://www.youtube.com/iframe_api';\n            script.onerror = () => {\n                script.remove();\n                window.onYouTubeIframeAPIReady = previous;\n                apiReady = undefined;\n                reject(new Error('YouTube playback tracking is unavailable'));\n            };\n            document.head.append(script);\n        });\n        return apiReady;\n    }\n    function savePosition() {\n        if (!active?.ready || !active.player)\n            return;\n        let time;\n        try {\n            time = Math.floor(active.player.getCurrentTime());\n        }\n        catch {\n            return;\n        }\n        if (active.lecture.endSeconds != null)\n            time = Math.min(time, active.lecture.endSeconds);\n        if (time < (active.lecture.startSeconds ?? 0))\n            return;\n        if (Number.isFinite(time) && time >= 0 && (time > 0 || active.played) &&\n            time !== get(active.lecture, 'position')) {\n            changed(patchValue(key(active.lecture, 'position'), time));\n        }\n    }\n    function stop() {\n        if (!active)\n            return;\n        savePosition();\n        const old = active;\n        active = null;\n        clearInterval(old.timer);\n        old.player?.destroy();\n        old.frame.remove();\n    }\n    function open(lecture) {\n        if (!lecture)\n            return;\n        const mod = studyModules[lectureModule(lecture)];\n        const lectures = mod.lectures;\n        if (!lectures.includes(lecture))\n            return;\n        const dialog = $('dialog');\n        if (!dialog.open)\n            returnLink = document.activeElement?.closest('a[data-watch]');\n        stop();\n        const index = lectures.indexOf(lecture);\n        const saved = get(lecture, 'position');\n        changed(patchValue(`${mod.id}/lastActive`, stableId(lecture)));\n        const body = $('dialogBody');\n        body.innerHTML = '<div class=\"eyebrow\" id=\"playerMeta\"></div><h2 id=\"playerTitle\" tabindex=\"-1\"></h2>' +\n            '<iframe id=\"lectureFrame\" allow=\"autoplay; encrypted-media; picture-in-picture; fullscreen\" allowfullscreen referrerpolicy=\"strict-origin-when-cross-origin\"></iframe>' +\n            '<p role=\"status\" id=\"playerStatus\" hidden></p><p><a id=\"youtubeFallback\" class=\"quiet\" target=\"_blank\" rel=\"noopener\">Open on YouTube</a></p>' +\n            '<div class=\"playerTools\"><button id=\"previousLecture\" type=\"button\">Previous lecture</button><button id=\"nextLecture\" type=\"button\">Next lecture</button></div>';\n        $('playerMeta').textContent = 'Lecture ' + (index + 1) + ' of ' + lectures.length + ' · ' + lecture.educator;\n        $('playerTitle').textContent = lecture.title;\n        const frame = $('lectureFrame');\n        frame.title = lecture.title + ' · YouTube video player';\n        frame.src = youtubeEmbed(lecture, location.origin, saved);\n        $('youtubeFallback').href = youtubeWatch(lecture, saved);\n        if (lecture.verificationStatus === 'playback-unverified') {\n            $('playerStatus').hidden = false;\n            $('playerStatus').textContent = 'Playback has not been independently confirmed. If it does not start here, try opening it on YouTube.';\n        }\n        if (lecture.endSeconds != null) {\n            const metadata = $('playerMeta');\n            metadata.append(' · Chapter ends at ' + new Date(lecture.endSeconds * 1000).toISOString().slice(11, 19));\n            $('youtubeFallback').after(document.createTextNode(' · YouTube opens at the chapter start or saved position; stop at the chapter end.'));\n        }\n        const previous = $('previousLecture'), next = $('nextLecture');\n        previous.disabled = index === 0;\n        next.disabled = index === lectures.length - 1;\n        previous.onclick = () => open(lectures[index - 1]);\n        next.onclick = () => open(lectures[index + 1]);\n        dialog.classList.add('playerDialog');\n        dialog.setAttribute('aria-labelledby', 'playerTitle');\n        if (!dialog.open)\n            dialog.showModal();\n        $('playerTitle').focus({ preventScroll: true });\n        const session = { lecture, frame, ready: false, played: false };\n        active = session;\n        loadAPI().then(YT => {\n            if (active !== session)\n                return;\n            session.player = new YT.Player(frame, { events: {\n                    onReady() {\n                        if (active !== session)\n                            return;\n                        session.ready = true;\n                        const preferred = state[speedKey(mod.id)] || 1;\n                        if (session.player?.getAvailablePlaybackRates().includes(preferred))\n                            session.player.setPlaybackRate(preferred);\n                    },\n                    onStateChange(event) {\n                        if (active !== session)\n                            return;\n                        if (event.data === YT.PlayerState.PLAYING)\n                            session.played = true;\n                        if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED)\n                            savePosition();\n                    },\n                    onError() {\n                        if (active !== session)\n                            return;\n                        $('playerStatus').hidden = false;\n                        $('playerStatus').textContent = 'The embedded video could not play. Open it on YouTube to continue.';\n                    }\n                } });\n            session.timer = window.setInterval(savePosition, 10000);\n        }).catch(() => {\n            if (active !== session)\n                return;\n            $('playerStatus').hidden = false;\n            $('playerStatus').textContent = 'Automatic playback position saving is unavailable for this session.';\n        });\n    }\n    document.addEventListener('click', event => {\n        const anchor = eventElement(event)?.closest('a[data-watch]');\n        if (!anchor || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)\n            return;\n        const ref = anchor.dataset.watch;\n        const lecture = currentStudy().lectures.find(item => stableId(item) === ref);\n        if (!lecture)\n            return;\n        event.preventDefault();\n        open(lecture);\n    });\n    document.getElementById('dialog').addEventListener('close', () => {\n        if (!active)\n            return;\n        stop();\n        $('dialog').classList.remove('playerDialog');\n        $('dialog').removeAttribute('aria-labelledby');\n        const target = returnLink?.isConnected ? returnLink :\n            Array.from(document.querySelectorAll('a[data-watch]')).find(a => a.dataset.watch === returnLink?.dataset.watch);\n        target?.focus({ preventScroll: true });\n        returnLink = null;\n    });\n    window.addEventListener('pagehide', savePosition);\n    document.addEventListener('visibilitychange', () => { if (document.hidden)\n        savePosition(); });\n    return { open };\n})();\nfunction watchLecture(lecture) { lecturePlayer.open(lecture); }\n","/exams.js":"\"use strict\";\n// Confirmed exam windows in IST (24-hour format).\nconst examSchedule = [\n    { code: 'C.D.', label: 'C.D.', date: '2026-11-28', startTime: '14:00', endTime: '16:00' },\n    { code: 'C.N.', label: 'Computer Networks', date: '2026-11-30', startTime: '14:00', endTime: '16:00' },\n    { code: 'M.A.D.', label: 'M.A.D.', date: '2026-12-05', startTime: '09:00', endTime: '11:00' },\n    { code: 'B.I.', label: 'B.I.', date: '2026-12-08', startTime: '11:30', endTime: '13:30' },\n    { code: 'N.L.P.', label: 'N.L.P.', date: '2026-12-10', startTime: '14:00', endTime: '16:00' },\n    { code: 'M.L.', label: 'M.L.', date: '2026-12-12', startTime: '09:00', endTime: '11:00' }\n];\nconst examDayMs = 86400000;\nconst examDateFormatter = new Intl.DateTimeFormat('en-IN', {\n    timeZone: 'Asia/Kolkata', weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'\n});\nfunction examDayStart(date) {\n    return Date.parse(date + 'T00:00:00+05:30');\n}\nfunction examStart(exam) {\n    return exam.startTime ? Date.parse(exam.date + 'T' + exam.startTime + ':00+05:30') : examDayStart(exam.date);\n}\nfunction examEnd(exam) {\n    return exam.endTime ? Date.parse(exam.date + 'T' + exam.endTime + ':00+05:30') : examDayStart(exam.date) + examDayMs;\n}\nfunction getExamPlan(now, schedule = examSchedule) {\n    const today = schedule.filter(exam => now >= examStart(exam) && now < examEnd(exam));\n    const next = schedule.find(exam => now < examStart(exam)) ?? null;\n    const seconds = next ? Math.max(0, Math.ceil((examStart(next) - now) / 1000)) : 0;\n    return { today, next, seconds, rows: schedule.map(exam => {\n            const remainingDays = Math.ceil((examStart(exam) - now) / examDayMs);\n            return { ...exam, status: now >= examEnd(exam) ? 'Past' : now >= examStart(exam) ? (exam.startTime ? 'Underway' : 'Today') : exam === next ? 'Next' : remainingDays + ' ' + (remainingDays === 1 ? 'day' : 'days') };\n        }) };\n}\nfunction examClockValues(seconds) {\n    return [Math.floor(seconds / 86400), Math.floor(seconds / 3600) % 24, Math.floor(seconds / 60) % 60, seconds % 60];\n}\nfunction deadlineSubjectKey(exam) {\n    return exam.code.toLowerCase().replace(/[^a-z]/g, '');\n}\nfunction examFocus(plan, code, now) {\n    const exam = code ? plan.rows.find(row => row.code === code) : (plan.today[0] ?? plan.next);\n    if (!exam)\n        return { exam: null, status: 'complete', seconds: 0 };\n    if (now < examStart(exam))\n        return { exam, status: 'upcoming', seconds: Math.ceil((examStart(exam) - now) / 1000) };\n    if (now < examEnd(exam))\n        return { exam, status: exam.startTime ? 'underway' : 'today', seconds: 0 };\n    return { exam, status: 'past', seconds: 0 };\n}\nconst reminderMinutes = [1440, 120, 60];\nconst reminderFormatter = new Intl.DateTimeFormat('en-IN', {\n    timeZone: 'Asia/Kolkata', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true\n});\nfunction examReminderPrompt(exam, minutes, now) {\n    if (!exam?.startTime || !reminderMinutes.includes(minutes))\n        return '';\n    const start = examStart(exam), remindAt = start - minutes * 60000;\n    if (!Number.isFinite(start) || remindAt <= now)\n        return '';\n    const format = (time) => reminderFormatter.format(time) + ' IST (Asia/Kolkata)';\n    return 'Create a one-time reminder for ' + format(remindAt) + ' that my ' + exam.label +\n        ' exam starts on ' + format(start) + '. Please confirm the scheduled date, time, and time zone.';\n}\nfunction mountExamReminders(root) {\n    const el = (id) => mustQuery('#' + id, root);\n    const details = el('examReminders'), subject = el('reminderExam'), lead = el('reminderLead'), prompt = el('reminderPrompt');\n    const copy = el('copyReminder'), status = el('reminderStatus'), preview = el('reminderPreview');\n    let listKey = '', lastPrompt = '';\n    function update(preferred) {\n        if (!details.open)\n            return;\n        const now = Date.now(), upcoming = examSchedule.filter(exam => reminderMinutes.some(minutes => examReminderPrompt(exam, minutes, now)));\n        const key = upcoming.map(exam => exam.code).join('|');\n        if (listKey !== key) {\n            const previous = subject.value;\n            subject.replaceChildren(...upcoming.map(exam => new Option(exam.label, exam.code)));\n            subject.value = upcoming.some(exam => exam.code === previous) ? previous : (upcoming[0]?.code ?? '');\n            listKey = key;\n        }\n        if (preferred && upcoming.some(exam => exam.code === preferred))\n            subject.value = preferred;\n        subject.disabled = lead.disabled = !upcoming.length;\n        const exam = upcoming.find(item => item.code === subject.value);\n        for (const option of lead.options)\n            option.disabled = Boolean(exam) && !examReminderPrompt(exam, Number(option.value), now);\n        if (exam && lead.selectedOptions[0]?.disabled)\n            lead.value = [...lead.options].find(option => !option.disabled)?.value ?? lead.value;\n        const value = examReminderPrompt(exam, Number(lead.value), now);\n        if (prompt.value !== value)\n            prompt.value = value;\n        preview.hidden = !value;\n        if (!value || value !== lastPrompt)\n            status.textContent = upcoming.length ? '' : 'No reminder times remain for the listed exams.';\n        lastPrompt = value;\n    }\n    details.addEventListener('toggle', () => update());\n    subject.onchange = lead.onchange = () => update();\n    copy.onclick = async () => {\n        update();\n        if (!prompt.value)\n            return;\n        try {\n            await navigator.clipboard.writeText(prompt.value);\n            status.textContent = 'Copied. Paste it into your ChatGPT chat to set the reminder.';\n        }\n        catch {\n            prompt.focus();\n            prompt.select();\n            status.textContent = 'Select and copy the prompt manually.';\n        }\n    };\n    return update;\n}\nfunction mountExamPlanner(root, getSelection = () => '', onSelect = () => { }) {\n    const el = (id) => mustQuery('#' + id, root);\n    const timeFormatter = new Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: '2-digit', hour12: true });\n    const formatTime = (exam) => exam.startTime ? (exam.endTime ? timeFormatter.formatRange(examStart(exam), examEnd(exam)) : timeFormatter.format(examStart(exam))) + ' IST' : '';\n    const displayDate = (exam) => [examDateFormatter.format(examDayStart(exam.date)), formatTime(exam)].filter(Boolean).join(' · ');\n    const list = el('examList'), clock = el('examClock'), kicker = el('examKicker');\n    const title = el('examNextTitle'), date = el('examNextDate'), hint = el('examClockHint');\n    const updateReminders = mountExamReminders(root);\n    const cta = mustQuery('[data-open-study]', root), defaultButton = el('defaultDeadline');\n    defaultButton.onclick = () => onSelect('');\n    list.onclick = e => {\n        const button = eventElement(e)?.closest('button[data-deadline]');\n        if (!button)\n            return;\n        const code = button.dataset.deadline;\n        if (!code)\n            return;\n        onSelect(code);\n        updateReminders(code);\n        [...list.querySelectorAll('button[data-deadline]')].find(el => el.dataset.deadline === code)?.focus({ preventScroll: true });\n    };\n    let signature = '', clockParts = [];\n    function update() {\n        if (root.hidden)\n            return;\n        const now = Date.now(), plan = getExamPlan(now), selected = getSelection();\n        updateReminders();\n        const { exam: next, status, seconds } = examFocus(plan, selected, now);\n        const sig = JSON.stringify([selected, next?.code, status, plan.rows]);\n        if (signature !== sig) {\n            signature = sig;\n            kicker.textContent = ({ underway: 'EXAM UNDERWAY', today: 'EXAM TODAY', past: 'EXAM COMPLETE', complete: 'TIMETABLE COMPLETE', upcoming: selected ? 'SELECTED EXAM' : 'NEXT EXAM' })[status];\n            title.textContent = next ? next.label : 'All listed exam dates have passed';\n            date.textContent = next ? displayDate(next) : 'Your study materials are still available.';\n            clock.replaceChildren();\n            clockParts = status === 'upcoming' ? ['days', 'hrs', 'min', 'sec'].map(unit => {\n                const item = document.createElement('div'), value = document.createElement('strong'), label = document.createElement('span');\n                label.textContent = unit;\n                item.append(value, label);\n                clock.append(item);\n                return value;\n            }) : [];\n            hint.textContent = status === 'today' ? 'Start time not listed.' : status === 'upcoming' && !next?.startTime ? 'Counts down to the start of exam day (IST).' : '';\n            defaultButton.setAttribute('aria-pressed', String(!selected));\n            cta.hidden = !next;\n            if (next) {\n                cta.dataset.subject = deadlineSubjectKey(next);\n                cta.textContent = cta.dataset.subject === 'cn' ? 'Open CN study materials' : 'View ' + next.label + ' study page';\n            }\n            list.replaceChildren(...plan.rows.map(exam => {\n                const item = document.createElement('li'), choice = document.createElement('button'), text = document.createElement('span');\n                const name = document.createElement('strong'), when = document.createElement('time'), status = document.createElement('span');\n                name.textContent = exam.label;\n                when.dateTime = exam.startTime ? exam.date + 'T' + exam.startTime + ':00+05:30' : exam.date;\n                when.textContent = displayDate(exam);\n                status.textContent = exam.status;\n                status.className = 'examStatus';\n                if (['Today', 'Next', 'Underway'].includes(exam.status))\n                    item.dataset.state = exam.status.toLowerCase();\n                else if (exam.status === 'Past')\n                    item.dataset.state = 'past';\n                choice.type = 'button';\n                choice.className = 'examChoice';\n                choice.dataset.deadline = exam.code;\n                choice.setAttribute('aria-pressed', String(next?.code === exam.code));\n                text.append(name, when);\n                choice.append(text, status);\n                item.append(choice);\n                return item;\n            }));\n        }\n        examClockValues(seconds).forEach((v, i) => {\n            const output = clockParts[i], label = String(v).padStart(2, '0');\n            if (output && output.textContent !== label)\n                output.textContent = label;\n        });\n    }\n    window.setInterval(update, 1000);\n    document.addEventListener('visibilitychange', () => { if (!document.hidden)\n        update(); });\n    return { update };\n}\n// A separate presentation of the same timetable logic; no independent exam state.\nfunction mountStudyTimer(root, getSelection = () => '') {\n    const label = mustQuery('#studyTimerLabel', root), title = mustQuery('#studyTimerTitle', root);\n    const clock = mustQuery('#studyTimerClock', root), digits = Array.from(clock.querySelectorAll('b'));\n    let snapshot = '';\n    function update() {\n        if (root.hidden)\n            return;\n        const now = Date.now(), plan = getExamPlan(now), selected = getSelection();\n        const { exam, status, seconds } = examFocus(plan, selected, now);\n        const text = ({ underway: 'Exam underway', today: 'Exam today', past: 'Exam complete', complete: 'Timetable complete', upcoming: selected ? 'Selected exam' : 'Next exam' })[status];\n        const name = exam?.label ?? 'No upcoming exams';\n        const state = text + '|' + name;\n        if (snapshot !== state) {\n            snapshot = state;\n            label.textContent = text;\n            title.textContent = name;\n            clock.hidden = status !== 'upcoming';\n        }\n        if (!clock.hidden)\n            examClockValues(seconds).forEach((v, i) => {\n                const value = String(v).padStart(2, '0');\n                if (digits[i].textContent !== value)\n                    digits[i].textContent = value;\n            });\n    }\n    window.setInterval(update, 1000);\n    document.addEventListener('visibilitychange', () => { if (!document.hidden)\n        update(); });\n    return { update };\n}\n","/recall-ui.js":"\"use strict\";\nlet recallStudying = false, legacyQuizView = /^#flashcards\\/m[34]$/.test(location.hash);\nlet recallFocus = null, swipeStart = null;\nconst networkRecallDecks = Object.entries(quizTopics).map(([sy, title]) => {\n    const cards = quizCards.filter(c => c.topic === sy && c.id.startsWith('m' + sy[0] + '-')).map(c => ({\n        id: 'cn-' + c.id, question: c.question, answer: c.choices[0] + ' ' + c.explanation\n    }));\n    return { id: 'cn-' + sy.replace('.', '-'), title, module: Number(sy[0]), requires: [sy], cards };\n}).filter(d => d.cards.length);\nconst networkQuickIds = ['m3-01', 'm3-07', 'm3-14', 'm3-20', 'm3-27', 'm3-43', 'm4-02', 'm4-12', 'm4-27', 'm4-41'].map(id => 'cn-' + id);\nconst recallDecksFor = (subject) => subject === 'cd' ? compilerContent.decks : networkRecallDecks;\nconst recallQuickFor = (subject) => subject === 'cd' ? compilerContent.quick : networkQuickIds.flatMap(id => networkRecallDecks.flatMap(d => d.cards.filter(c => c.id === id)));\nconst recallCardsFor = (subject) => [...new Map(recallDecksFor(subject).flatMap(d => d.cards).concat(recallQuickFor(subject)).map(c => [c.id, c])).values()];\nconst availableDecks = (subject) => new Set(recallDecksFor(subject).filter(d => requirementsMet(deckRequirements(subject, d, state))).map(d => d.id));\nfunction announceNewDecks(previous, subject) {\n    const unlocked = recallDecksFor(subject).filter(d => !previous.has(d.id) && requirementsMet(deckRequirements(subject, d, state)));\n    if (unlocked.length) {\n        const key = unlockKey(subject), newest = unlocked.map(d => d.id);\n        void changed(patchValue(key, [...new Set([...newest, ...state[key]])].slice(0, 20)));\n        feedback(unlocked.length === 1 ? 'Deck unlocked: ' + unlocked[0].title : unlocked.length + ' decks unlocked');\n    }\n}\nfunction eligibleRecallCards(subject) {\n    const unlocked = availableDecks(subject);\n    return [...new Map(recallQuickFor(subject).concat(recallDecksFor(subject).filter(d => unlocked.has(d.id)).flatMap(d => d.cards)).map(c => [c.id, c])).values()];\n}\nfunction recallStats(subject) {\n    const all = recallCardsFor(subject), eligible = eligibleRecallCards(subject), at = Date.now();\n    return {\n        due: eligible.filter(c => { const r = state[recallKey(subject, c.id)]; return r && r.nextReview <= at; }),\n        missed: eligible.filter(c => state[recallKey(subject, c.id)]?.rating === 'Again'),\n        mastered: all.filter(c => state[recallKey(subject, c.id)]?.mastery === 'mastered').length,\n        total: all.length\n    };\n}\nfunction renderSubjectSummary(subject) {\n    const all = subject.modules.map(id => studyModules[id]), key = all[0].subjectId;\n    const progress = all.map(m => {\n        const r = viewingSummary(m, state);\n        return { done: r.coreDone, total: r.coreTotal, seconds: r.seconds, unknown: r.unknown };\n    });\n    const done = progress.reduce((sum, r) => sum + r.done, 0), total = progress.reduce((sum, r) => sum + r.total, 0);\n    const marks = progress.reduce((sum, r, i) => sum + (r.total ? r.done / r.total * all[i].marks : 0), 0);\n    const stats = recallStats(key), unlocked = availableDecks(key), list = recallDecksFor(key);\n    const decks = state[unlockKey(key)].filter(id => unlocked.has(id)).map(id => list.find(d => d.id === id)).filter((d) => Boolean(d));\n    const seconds = progress.reduce((sum, r) => sum + r.seconds, 0), unknown = key === 'cd' ? progress.reduce((sum, r) => sum + r.unknown, 0) : 0, speed = state[speedKey(activeModule)];\n    const duration = (min) => Math.floor(min / 60) + 'h ' + min % 60 + 'm';\n    const host = $('subjectStats');\n    host.innerHTML = '<section class=\"block subjectOverview\"><h2>' + esc(subject.label) + ' overview</h2><div class=\"subjectSummaryGrid\">' +\n        '<div><strong>' + progressPercent(done, total) + '%</strong><small>' + (key === 'cd' ? 'Core lecture progress' : 'Preparation progress') + '</small></div>' +\n        '<div><strong>' + Number(marks.toFixed(1)) + ' / 60</strong><small>' + (key === 'cd' ? 'Estimated coverage from lectures' : 'Estimated marks coverage') + '</small></div>' +\n        '<div><strong>' + duration(Math.ceil(seconds / 60 / speed)) + '</strong><small>Subject video time at ' + speed + '×' + (unknown ? ' · ' + unknown + ' unknown' : '') + '</small></div>' +\n        '<div><strong>' + stats.mastered + ' mastered · ' + stats.due.length + ' due</strong><small>Flashcard review</small></div></div>' +\n        '<p class=\"info\">Priority: ' + all.map(m => 'M' + m.number).join(', ') + ' · ' + (decks.length ? esc(decks.slice(0, 2).map(d => d.title).join(' · ')) + ' recently unlocked' : unlocked.size ? unlocked.size + ' topic decks available' : 'No topic decks unlocked yet') + '</p>' +\n        '<label class=\"summarySpeed\">Playback speed <select data-subject-speed aria-label=\"Subject viewing speed\">' + options(speeds, speed, '×') + '</select></label>' +\n        '<button class=\"quiet\" type=\"button\" data-subject-quick>Start Quick 10</button>' +\n        (key === 'cd' ? '<button class=\"quiet\" type=\"button\" data-ll-revision>Optional LL(1) refresher</button>' : '') + '</section>';\n    host.querySelector('[data-subject-speed]').onchange = e => { void changed(patchValue(speedKey(activeModule), Number(inputValue(e)))); render(); $('subjectStats').querySelector('[data-subject-speed]')?.focus(); };\n    host.querySelector('[data-subject-quick]').onclick = () => { legacyQuizView = false; openPage('Flashcards'); startRecall(key, 'Quick 10', recallQuickFor(key)); };\n    host.querySelector('[data-ll-revision]')?.addEventListener('click', () => {\n        const c = revisionConcepts(studyModules['cd-m1']).find(t => t.syllabus.includes('1.5'));\n        if (c)\n            jumpToRequirement({ label: c.title, module: 'cd-m1', ref: c.id, done: false });\n    });\n}\nfunction compilerNotesPanel(study) {\n    return '<div class=\"conceptGrid\">' + revisionConcepts(study).map(c => '<article class=\"block conceptCard\"><small>' + esc(c.syllabus) + '</small><h3>' + esc(c.title) + '</h3><button type=\"button\" class=\"quiet\" data-revision-reading=\"' + esc(c.id) + '\">Read revision note</button><button class=\"quiet\" type=\"button\" data-concept-note=\"' + esc(c.id) + '\">Personal notes' + (state[conceptNoteKey(c.id)] ? ' · Saved' : '') + '</button></article>').join('') + '</div>';\n}\nfunction openRevisionReading(id) {\n    const c = compilerContent.concepts.find(x => x.id === id);\n    if (!c)\n        return;\n    const tracked = hasRevisionPrerequisites(studyModules[('cd-m' + c.module)]);\n    modal('<p class=\"eyebrow\">' + esc(c.syllabus) + ' · REVISION NOTE</p><h2>' + esc(c.title) + '</h2><p>' + esc(c.note) + '</p>' +\n        (tracked ? '<button type=\"button\" id=\"doneReading\">Done reading</button>' : ''));\n    const done = document.getElementById('doneReading');\n    if (done)\n        done.onclick = () => {\n            const before = availableDecks('cd'), delta = revisionReadPatch(id, state);\n            if (delta) {\n                void changed(delta);\n                announceNewDecks(before, 'cd');\n            }\n            $('dialog').close();\n        };\n}\nfunction openConceptNote(id) {\n    const c = compilerContent.concepts.find(x => x.id === id);\n    if (!c)\n        return;\n    modal('<h2>Personal notes</h2><label>' + esc(c.title) + '<textarea id=\"memo\" maxlength=\"8000\" placeholder=\"Write your notes…\"></textarea></label><small>Changes save as you type.</small>');\n    $('memo').value = state[conceptNoteKey(id)];\n    $('memo').oninput = e => void changed(patchValue(conceptNoteKey(id), inputValue(e)));\n}\nfunction currentRecallSubject() { return activeSubject === 'cd' ? 'cd' : 'cn'; }\nfunction recallButton(action, label, style = 'quiet') {\n    return '<button type=\"button\" class=\"' + style + '\" data-recall=\"' + esc(action) + '\">' + esc(label) + '</button>';\n}\nfunction startRecall(subject, title, cards, shuffle = false) {\n    if (!cards.length)\n        return;\n    const old = state[recallSessionKey(subject)];\n    if (old && old.index < old.cards.length && !confirm('Replace the unfinished session? Reviews already saved will be kept.'))\n        return;\n    const session = { title, cards: (shuffle ? shuffled(cards) : cards).map(c => c.id), index: 0, flipped: false };\n    recallStudying = true;\n    void changed(patchValue(recallSessionKey(subject), session));\n    render();\n    focusRecall('[data-recall=\"flip\"]');\n}\nfunction focusRecall(selector) { $('panel').querySelector(selector)?.focus({ preventScroll: true }); }\nfunction recallHome(subject) {\n    const items = recallDecksFor(subject), stats = recallStats(subject), session = state[recallSessionKey(subject)];\n    const decks = items.map(d => {\n        const rs = deckRequirements(subject, d, state), done = rs.filter(r => r.done).length, enabled = requirementsMet(rs);\n        return '<article class=\"block recallDeck\"><small>M' + d.module + ' · ' + d.cards.length + ' cards</small><h3>' + esc(d.title) + '</h3>' + (subject === 'cn' ? '<p>' + done + ' / ' + rs.length + ' prerequisites complete</p>' + bar(done, Math.max(1, rs.length)) : '') +\n            (enabled ? recallButton('deck:' + d.id, 'Study deck', 'quizPrimary') + recallButton('shuffle:' + d.id, 'Shuffle') :\n                recallButton('locked:' + d.id, subject === 'cd' ? (hasRevisionPrerequisites(studyModules[('cd-m' + d.module)]) ? 'Review notes to unlock' : 'Go to remaining lecture') : 'Locked · view prerequisites')) + '</article>';\n    }).join('');\n    return '<div class=\"eyebrow\"><span class=\"tick\"></span> ' + esc(subjectFor(subject)?.label ?? subject) + '</div><h1>Flashcards</h1><p class=\"sub\">Recall an answer before flipping, then rate how well you knew it.</p>' +\n        '<article class=\"quizLaunch\"><div><h2>Quick 10</h2><p>Ten high-yield cards, always unlocked.</p><p>' + stats.mastered + ' of ' + stats.total + ' mastered · ' + stats.due.length + ' due for review</p></div><div class=\"quizActions\">' +\n        (session && session.index < session.cards.length ? recallButton('resume', 'Resume previous session', 'quizPrimary') : '') +\n        recallButton('quick', 'Start Quick 10', 'quizPrimary') + recallButton('quickShuffle', 'Shuffle Quick 10') +\n        (stats.due.length ? recallButton('due', 'Review due · ' + stats.due.length) : '') + (stats.missed.length ? recallButton('missed', 'Review missed · ' + stats.missed.length) : '') +\n        '</div></article><div class=\"panelHead\"><h2>Topic decks</h2></div><div class=\"recallGrid\">' + decks + '</div>' +\n        '<p class=\"info\">' + esc(sync) + '. Reviews are included in your progress backup.</p>' +\n        (subject === 'cn' ? recallButton('legacy', 'Classic multiple-choice practice and past results') : '');\n}\nfunction renderRecall(subject) {\n    const panel = $('panel'), r = state[recallSessionKey(subject)];\n    const eligible = new Set(eligibleRecallCards(subject).map(c => c.id));\n    const nextId = r?.cards[r.index], card = nextId && recallCardsFor(subject).find(c => c.id === nextId);\n    const html = recallStudying && r ? (card && eligible.has(card.id) ? '<div class=\"quizTop\">' + recallButton('home', 'Pause & view decks') + '<span>' + esc(r.title) + '</span></div>' +\n        '<article class=\"quizPaper\"><div class=\"quizCounter\">Card ' + (r.index + 1) + ' of ' + r.cards.length + '</div>' + bar(r.index, r.cards.length) +\n        '<button type=\"button\" class=\"recallFace ' + (r.flipped ? 'flipped' : '') + '\" data-recall=\"flip\" aria-pressed=\"' + r.flipped + '\"><span>' + esc(card.question) + '</span><small>' + (r.flipped ? 'Hide answer' : 'Show answer') + '</small></button>' +\n        (r.flipped ? '<section class=\"quizExplanation\" role=\"status\"><b>Answer</b><p>' + esc(card.answer) + '</p></section><div class=\"quizActions\">' + recallRatings.map((a, i) => recallButton('rate:' + a, (i + 1) + '. ' + a, i === 2 ? 'quizPrimary' : 'quiet')).join('') + '</div>' : '') +\n        '<p class=\"info\">Space flips. Keys 1–4 rate the answer. Swipe right to reveal or left to hide.</p></article>' :\n        '<article class=\"quizPaper\"><h2>' + (card ? 'This deck is locked again' : 'Session complete') + '</h2><p>' + (card ? 'Complete its prerequisites to resume. Your reviews are kept.' : 'Your review ratings are saved.') + '</p>' + recallButton('home', 'Back to flashcards', 'quizPrimary') + '</article>') : recallHome(subject);\n    if (panel.dataset.recallView === html && panel.querySelector('[data-recall]'))\n        return;\n    panel.dataset.recallView = html;\n    panel.innerHTML = html;\n}\nfunction showLocked(subject, deck) {\n    const rs = deckRequirements(subject, deck, state), missing = rs.filter(r => !r.done);\n    if (subject === 'cd') {\n        const next = missing[0];\n        if (!next)\n            return;\n        if (hasRevisionPrerequisites(studyModules[next.module]))\n            openRevisionReading(next.ref);\n        else\n            jumpToRequirement(next);\n        return;\n    }\n    modal('<h2>' + esc(deck.title) + '</h2><p>' + deck.cards.length + ' cards · ' + (rs.length - missing.length) + ' of ' + rs.length + ' prerequisites complete</p>' +\n        '<ul class=\"missingList\">' + missing.map((r, i) => '<li><button class=\"quiet\" type=\"button\" data-jump=\"' + i + '\">' + esc(r.label) + '</button></li>').join('') + '</ul>');\n    $('dialogBody').querySelectorAll('[data-jump]').forEach(b => b.onclick = () => {\n        $('dialog').close();\n        jumpToRequirement(missing[Number(b.dataset.jump)]);\n    });\n}\nfunction recallAction(action, source) {\n    const subject = currentRecallSubject(), key = recallSessionKey(subject), r = state[key], decks = recallDecksFor(subject);\n    if (action === 'legacy' && subject === 'cn') {\n        legacyQuizView = true;\n        render();\n        return;\n    }\n    if (action === 'home') {\n        recallStudying = false;\n        render();\n        return;\n    }\n    if (action === 'resume' && r) {\n        recallStudying = true;\n        render();\n        focusRecall('[data-recall=\"flip\"]');\n        return;\n    }\n    if (action === 'quick' || action === 'quickShuffle') {\n        startRecall(subject, 'Quick 10', recallQuickFor(subject), action === 'quickShuffle');\n        return;\n    }\n    if (action === 'due' || action === 'missed') {\n        startRecall(subject, action === 'due' ? 'Due for review' : 'Review missed', recallStats(subject)[action]);\n        return;\n    }\n    const [kind, id] = action.split(':');\n    if (['deck', 'shuffle', 'locked'].includes(kind)) {\n        const d = decks.find(v => v.id === id);\n        if (!d)\n            return;\n        if (!requirementsMet(deckRequirements(subject, d, state))) {\n            recallFocus = source ?? null;\n            showLocked(subject, d);\n            return;\n        }\n        startRecall(subject, d.title, d.cards, kind === 'shuffle');\n        return;\n    }\n    if (!recallStudying || !r || !r.cards[r.index])\n        return;\n    const cid = r.cards[r.index];\n    if (!eligibleRecallCards(subject).some(c => c.id === cid))\n        return;\n    if (action === 'flip') {\n        void changed(patchValue(key, { ...r, flipped: !r.flipped }));\n        render();\n        focusRecall('[data-recall=\"flip\"]');\n        return;\n    }\n    if (kind === 'rate' && r.flipped && recallRatings.includes(id)) {\n        const cardKey = recallKey(subject, cid);\n        const review = scheduleRecall(state[cardKey], id, Date.now(), account || 'guest', cid);\n        void changed({ ...patchValue(cardKey, review), ...patchValue(key, { ...r, index: r.index + 1, flipped: false }) });\n        render();\n        focusRecall('[data-recall=\"flip\"],[data-recall=\"home\"]');\n    }\n}\ndocument.addEventListener('click', e => { const b = eventElement(e)?.closest('[data-recall]'); if (b && page === 'Flashcards')\n    recallAction(b.dataset.recall ?? '', b); });\ndocument.addEventListener('keydown', e => {\n    if (page !== 'Flashcards' || !recallStudying || $('dialog').open || e.repeat || e.metaKey || e.altKey || e.ctrlKey || eventElement(e)?.closest('input,textarea,select'))\n        return;\n    if (e.code === 'Space' && !eventElement(e)?.closest('button')) {\n        e.preventDefault();\n        recallAction('flip');\n    }\n    if (/^[1-4]$/.test(e.key)) {\n        e.preventDefault();\n        recallAction('rate:' + recallRatings[Number(e.key) - 1]);\n    }\n});\ndocument.addEventListener('touchstart', e => { const p = e.changedTouches[0]; swipeStart = p && eventElement(e)?.closest('.recallFace') ? { x: p.clientX, y: p.clientY } : null; }, { passive: true });\ndocument.addEventListener('touchend', e => {\n    const start = swipeStart;\n    swipeStart = null;\n    const p = e.changedTouches[0];\n    if (!start || !p || Math.abs(p.clientY - start.y) > 50 || Math.abs(p.clientX - start.x) < 55 || page !== 'Flashcards')\n        return;\n    const r = state[recallSessionKey(currentRecallSubject())];\n    if (r && r.flipped !== (p.clientX > start.x))\n        recallAction('flip');\n}, { passive: true });\ndocument.getElementById('dialog').addEventListener('close', () => { if (recallFocus?.isConnected)\n    recallFocus.focus(); recallFocus = null; });\n","/app.js":"\"use strict\";\nfunction $(id) {\n    const element = document.getElementById(id);\n    if (!element)\n        throw Error('Missing planner element: ' + id);\n    return element;\n}\nfunction mustQuery(selector, root = document) {\n    const node = root.querySelector(selector);\n    if (!node)\n        throw Error('Missing planner element: ' + selector);\n    return node;\n}\nconst eventElement = (event) => event.target instanceof Element ? event.target : null;\nconst inputValue = (event) => event.target.value;\nconst shapes = { account: 'M10 17l5-5-5-5 M15 12H3 M13 4h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6', exit: 'M14 7l5 5-5 5 M19 12H7 M11 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6', book: 'M3 4q4-1 9 2 5-3 9-2v15q-5-1-9 2-4-3-9-2z M12 6v15', road: 'M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z', list: 'M9 6h12 M9 12h12 M9 18h12 M3 6l1 1 2-3 M3 12h2 M3 18h2', practice: 'M5 3h14v18H5z M8 7h8 M8 12h2 M14 12h2 M8 16h2 M14 16h2', flag: 'M6 21V4h12l-3 5 3 5H6', settings: 'M4 7h16 M4 17h16 M9 4v6 M15 14v6', file: 'M6 2h8l4 4v16H6z M9 11h6 M9 15h6', play: 'm7 4 13 8-13 8z', clock: 'M12 3a9 9 0 1 0 .01 0 M12 7v6l4 2', check: 'm4 12 5 5L20 6', chart: 'M3 20h18 M6 16v-4 M12 16V8 M18 16V4', find: 'M10 3a7 7 0 1 0 .01 0 M15 15l6 6', down: 'm6 9 6 6 6-6', right: 'm9 6 6 6-6 6', bookmark: 'M6 3h12v18l-6-4-6 4z', note: 'M4 4h16v12l-5 5H4z M8 9h8 M8 13h5', moon: 'M20 15A9 9 0 0 1 9 3a9 9 0 1 0 11 12z', sun: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8 M12 3v2 M12 19v2 M3 12h2 M19 12h2 M5.6 5.6l1.5 1.5 M17 17l1.5 1.5 M5.6 18.4l1.5-1.5 M17 7l1.5-1.5' };\nconst icon = (n) => '<svg aria-hidden=\"true\" viewBox=\"0 0 24 24\"><path d=\"' + shapes[n] + '\"/></svg>';\ndocument.querySelectorAll('[data-icon]').forEach(el => el.innerHTML = icon(el.dataset.icon));\nconst escapeChars = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;', \"'\": '&#39;' };\nconst esc = (s) => String(s).replace(/[&<>\"']/g, c => escapeChars[c]);\nconst guestKey = 'network-notebook:v1';\nconst account = mustQuery('meta[name=\"notebook-account\"]').content;\nconst storageKey = account ? guestKey + ':account:' + account : guestKey;\nconst accountLink = $('accountLink');\nconst returnPath = encodeURIComponent(location.pathname + location.hash);\naccountLink.href = (account ? '/signout-with-chatgpt' : '/signin-with-chatgpt') + '?return_to=' + returnPath;\naccountLink.classList.toggle('signOut', Boolean(account));\nconst accountLabel = account ? 'Sign out' : 'Sign in with ChatGPT';\naccountLink.innerHTML = icon(account ? 'exit' : 'account') + '<span class=\"railLabel\">' + accountLabel + '</span>';\naccountLink.title = accountLabel;\naccountLink.setAttribute('aria-label', accountLabel);\nlet state = { ...defaults }, pending = {}, localOK = true, sync = 'Checking account storage…', busy = false;\ntry {\n    let raw = JSON.parse(localStorage.getItem(storageKey) ?? 'null');\n    if (raw) {\n        raw.data = migrate(raw.data);\n        raw.pending = migrate(raw.pending);\n    }\n    if (raw && valid(raw.data) && valid(raw.pending)) {\n        Object.assign(state, raw.data);\n        pending = raw.pending;\n    }\n}\ncatch {\n    localOK = false;\n}\nfunction persist() { try {\n    localStorage.setItem(storageKey, JSON.stringify({ data: state, pending }));\n    localOK = true;\n}\ncatch {\n    localOK = false;\n} }\nfunction changed(delta) { Object.assign(state, delta); Object.assign(pending, delta); persist(); return flush(); }\nfunction patchValue(k, v) {\n    const patch = {};\n    patch[k] = v;\n    return patch;\n}\nasync function flush() {\n    if (!account) {\n        sync = localOK ? 'Saved in this browser · sign in to sync' : 'Storage unavailable · export a backup before leaving';\n        if (!localOK) {\n            $('storageWarning').hidden = false;\n            $('storageWarning').textContent = sync;\n        }\n        {\n            const status = document.getElementById('sync');\n            if (status)\n                status.textContent = sync;\n        }\n        ;\n        return;\n    }\n    if (busy)\n        return;\n    busy = true;\n    try {\n        do {\n            const batch = { ...pending }, has = Object.keys(batch).length;\n            const res = await fetch('/progress', has ? { method: 'PATCH', headers: { 'Content-Type': 'application/json', 'X-Notebook-Account': account }, body: JSON.stringify(batch) } : { cache: 'no-store', headers: { 'X-Notebook-Account': account } });\n            if (!res.ok)\n                throw Error();\n            const remote = migrate(await res.json());\n            if (!valid(remote))\n                throw Error();\n            for (const k of Object.keys(batch))\n                if (pending[k] === batch[k])\n                    delete pending[k];\n            state = Object.assign({ ...defaults }, remote, pending);\n            persist();\n        } while (Object.keys(pending).length);\n        sync = 'Saved to your account';\n    }\n    catch {\n        sync = localOK ? 'Saved in this browser · account storage unavailable' : 'Storage unavailable · export a backup before leaving';\n    }\n    finally {\n        busy = false;\n        {\n            const status = document.getElementById('sync');\n            if (status)\n                status.textContent = sync;\n        }\n        ;\n        if (!$('dialog').open)\n            render();\n        if (!localOK) {\n            $('storageWarning').hidden = false;\n            $('storageWarning').textContent = sync + ' · Browser storage unavailable.';\n        }\n    }\n}\nwindow.addEventListener('online', flush);\nwindow.addEventListener('focus', () => { if (!$('dialog').open)\n    flush(); });\nconst roadmapHash = () => location.hash.startsWith('#computer-networks') || location.hash.startsWith('#lectures/');\nlet page = location.hash.startsWith('#flashcards') ? 'Flashcards' : roadmapHash() ? 'Lecture roadmap' : 'Exam planner';\nconst studySubjects = [\n    { key: 'cn', label: 'Computer Networks', compact: 'CN', modules: ['m3', 'm4'], preparationOrder: [[3, 'Network Layer'], [4, 'Transport Layer'], [2, 'Data Link Layer'], [1, 'Intro to Networking']] },\n    { key: 'cd', label: 'Compiler Design', compact: 'CD', modules: ['cd-m2', 'cd-m4', 'cd-m1', 'cd-m3'], preparationOrder: [[2, 'Bottom Up Parsing'], [4, 'Code Generation'], [1, 'Compiler Basics and Top Down Parsing'], [3, 'Intermediate Code Generation']] },\n    ...examSchedule.filter(e => !['C.N.', 'C.D.'].includes(e.code)).map(e => ({ key: e.code.toLowerCase().replace(/[^a-z]/g, ''), label: e.label, modules: [] }))\n];\nconst subjectFor = (id) => studySubjects.find(s => s.key === id);\nconst hashParts = location.hash.split('/');\nlet activeSubject = location.hash.startsWith('#computer-networks') || /^#flashcards\\/m[34]$/.test(location.hash) ? 'cn' :\n    subjectFor(hashParts[1])?.key ?? subjectFor(state.lastSubject)?.key ?? 'cn';\nlet activeModule = hashParts[0] === '#computer-networks' && hashParts[1] === 'm4' ? 'm4' :\n    subjectFor(activeSubject)?.modules.find(m => m === hashParts[2]) ?? subjectFor(activeSubject)?.modules[0] ?? 'm3';\nfunction selectStudySubject(id) {\n    const subject = subjectFor(id);\n    if (!subject)\n        return;\n    if (id !== activeSubject) {\n        activeSubject = id;\n        activeModule = subject.modules[0] ?? 'm3';\n    }\n    if (state.lastSubject !== id)\n        void changed({ lastSubject: id });\n    if (id === 'cn' && (activeModule === 'm3' || activeModule === 'm4'))\n        quizModule = activeModule;\n    playingQuiz = false;\n}\nfunction jumpToRequirement(req) {\n    selectStudySubject(studyModules[req.module].subjectId);\n    activeModule = req.module;\n    openPage('Lecture roadmap');\n    const lecture = currentStudy().lectures.find(l => l.uid === req.ref);\n    if (lecture) {\n        const section = currentStudy().sections.find(s => s.rows.includes(lecture));\n        if (section) {\n            collapsed.delete(section.name);\n            roadmapManuallyChanged = true;\n            render();\n        }\n    }\n    if (!lecture && studyModules[req.module].revisionOnly) {\n        openRevisionReading(req.ref);\n        return;\n    }\n    const el = [...document.querySelectorAll('[data-done]')].find(n => n.dataset.done === req.ref);\n    el?.scrollIntoView({ block: 'center' });\n    el?.focus({ preventScroll: true });\n}\nlet filter = 'All', query = '', collapsed = new Set(), roadmapManuallyChanged = false, conceptDetailsOpen = false;\nconst currentStudy = () => studyModules[activeModule];\nconst prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)');\nfunction resetRoadmap() {\n    roadmapManuallyChanged = false;\n    filter = 'All';\n    query = '';\n    conceptDetailsOpen = false;\n}\nfunction animateStudyView() {\n    if (prefersReducedMotion.matches)\n        return;\n    const target = page === 'Exam planner' ? $('examPlanner') : $('studyWorkspace');\n    target.getAnimations().forEach(animation => animation.cancel());\n    target.animate([{ opacity: .68, transform: 'translateY(5px)' }, { opacity: 1, transform: 'none' }], { duration: 185, easing: 'cubic-bezier(.2,.7,.2,1)' });\n}\nconst pages = { 'Exam planner': 'clock', 'Lecture roadmap': 'road', 'Flashcards': 'book', 'Syllabus coverage': 'list', 'Numerical practice': 'practice', 'Study priorities': 'flag' };\nconst get = (l, k) => state[key(l, k)];\nconst link = (l) => youtubeWatch(l);\nconst options = (values, current, suffix = '') => values.map(v => '<option ' + (v === current ? 'selected' : '') + ' value=\"' + esc(v) + '\">' + esc(v) + suffix + '</option>').join('');\nconst bar = (n, total) => '<div class=\"bar\"><i style=\"width:' + 100 * n / total + '%\"></i></div>';\nconst topicMatch = (l, id) => l.topicIds.includes(id);\nconst ringVisits = new Map();\nfunction progressRing(module, done, total) {\n    const value = progressPercent(done, total);\n    let visit = ringVisits.get(module);\n    if (page === 'Lecture roadmap' && value > 0 && !visit) {\n        visit = { started: performance.now(), value };\n        ringVisits.set(module, visit);\n    }\n    const visual = !prefersReducedMotion.matches && visit?.value === value\n        ? progressFrame(value, performance.now() - visit.started) : value;\n    return '<div class=\"progressRing\" data-ring-module=\"' + module + '\" role=\"progressbar\" aria-label=\"Overall progress\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"' + value + '\" style=\"--percent:' + visual + '%\"><strong aria-hidden=\"true\">' + visual + '%</strong></div>';\n}\nfunction animateProgressRing() {\n    const ring = $('stats').querySelector('.progressRing');\n    if (!ring || page !== 'Lecture roadmap' || prefersReducedMotion.matches)\n        return;\n    const value = Number(ring.getAttribute('aria-valuenow')), visit = ringVisits.get(ring.dataset.ringModule ?? '');\n    if (!visit || visit.value !== value)\n        return;\n    const activeRing = ring, started = visit.started;\n    function paint(now) {\n        if (!activeRing.isConnected)\n            return;\n        const elapsed = now - started, visual = prefersReducedMotion.matches ? value : progressFrame(value, elapsed);\n        activeRing.style.setProperty('--percent', visual + '%');\n        mustQuery('strong', activeRing).textContent = visual + '%';\n        if (visual < value)\n            requestAnimationFrame(paint);\n    }\n    requestAnimationFrame(paint);\n}\nfunction renderPreparationOrder(subject) {\n    const order = subject?.preparationOrder ?? [];\n    const block = $('prepOrder');\n    if (!block)\n        return;\n    block.hidden = !order.length;\n    $('modules').innerHTML = order.map(([n, name]) => '<div class=\"module\"><b>' + String(n).padStart(2, '0') + '</b>' + esc(name) + '</div>').join('');\n}\nconst pageLabel = (p) => p === 'Lecture roadmap' ? 'Lectures' : p === 'Exam planner' ? 'Schedule' : p;\n$('nav').innerHTML = Object.keys(pages).map(p => '<button data-page=\"' + p + '\" title=\"' + pageLabel(p) + '\" aria-label=\"' + pageLabel(p) + '\">' + icon(pages[p]) + '<span class=\"railLabel\">' + pageLabel(p) + '</span></button>').join('');\nconst sidebarToggle = $('pageMenu');\nfunction togglePageMenu(open) {\n    const label = open ? 'Collapse sidebar' : 'Expand sidebar';\n    sidebarToggle.setAttribute('aria-expanded', String(open));\n    sidebarToggle.setAttribute('aria-label', label);\n    sidebarToggle.title = label;\n    document.body.classList.toggle('sidebarExpanded', open);\n}\nsidebarToggle.onclick = () => togglePageMenu(sidebarToggle.getAttribute('aria-expanded') !== 'true');\n$('plannerSidebar').addEventListener('click', event => {\n    // Do not override the dedicated toggle or cancel a control's own click.\n    if (!event.composedPath().includes(sidebarToggle) && sidebarToggle.getAttribute('aria-expanded') !== 'true')\n        togglePageMenu(true);\n});\ndocument.addEventListener('keydown', event => {\n    if (event.key === 'Escape' && sidebarToggle.getAttribute('aria-expanded') === 'true' && !$('dialog').open) {\n        togglePageMenu(false);\n        sidebarToggle.focus();\n    }\n});\nlet timerGhost = null, timerReveal = null;\nfunction timerMorphOrigin(nextPage) {\n    if (timerGhost) {\n        timerGhost.remove();\n        timerGhost = null;\n    }\n    if (timerReveal) {\n        timerReveal.cancel();\n        timerReveal = null;\n    }\n    if (prefersReducedMotion.matches)\n        return null;\n    const from = page === 'Exam planner' && nextPage !== 'Exam planner' ? $('examSpotlight') :\n        page !== 'Exam planner' && nextPage === 'Exam planner' ? $('studyTimer') : null;\n    if (!from || from.hidden || !from.getClientRects().length)\n        return null;\n    const box = from.getBoundingClientRect();\n    if (box.top >= innerHeight || box.bottom <= 0)\n        return null;\n    const ghost = from.cloneNode(true);\n    ghost.removeAttribute('id');\n    ghost.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));\n    ghost.inert = true;\n    ghost.setAttribute('aria-hidden', 'true');\n    ghost.classList.add('timerGhost');\n    Object.assign(ghost.style, { top: box.top + 'px', left: box.left + 'px', width: box.width + 'px', height: box.height + 'px' });\n    document.body.append(ghost);\n    timerGhost = ghost;\n    return { box, ghost, target: from === $('examSpotlight') ? $('studyTimer') : $('examSpotlight') };\n}\nfunction morphTimer(from) {\n    const { box, ghost, target } = from, to = target.getBoundingClientRect();\n    if (!to.width || !to.height) {\n        ghost.remove();\n        if (timerGhost === ghost)\n            timerGhost = null;\n        return;\n    }\n    const offset = 'translate(' + (to.left - box.left) + 'px,' + (to.top - box.top) + 'px) scale(' + (to.width / box.width) + ',' + (to.height / box.height) + ')';\n    const settings = { duration: 330, easing: 'cubic-bezier(.22,.8,.26,1)' };\n    const flight = ghost.animate([\n        { transform: 'translate(0,0) scale(1)', opacity: 1 },\n        { opacity: .8, offset: .45 },\n        { transform: offset, opacity: 0 }\n    ], settings);\n    timerReveal = target.animate([{ opacity: 0 }, { opacity: .18, offset: .42 }, { opacity: 1 }], settings);\n    flight.onfinish = () => { ghost.remove(); if (timerGhost === ghost)\n        timerGhost = null; };\n}\nfunction openPage(nextPage, moveFocus = false) {\n    const from = timerMorphOrigin(nextPage);\n    if (nextPage === 'Lecture roadmap')\n        resetRoadmap();\n    page = nextPage;\n    const hash = page === 'Flashcards' ? '#flashcards/' + activeSubject + (activeSubject === 'cd' ? '/' + activeModule : '') : page === 'Exam planner' ? '' : activeSubject === 'cn' ?\n        '#computer-networks' + (activeModule === 'm4' ? '/m4' : '') : '#lectures/' + activeSubject + (studyModules[activeModule].subjectId === activeSubject ? '/' + activeModule : '');\n    history.replaceState(null, '', location.pathname + location.search + hash);\n    accountLink.href = (account ? '/signout-with-chatgpt' : '/signin-with-chatgpt') + '?return_to=' + encodeURIComponent(location.pathname + location.search + hash);\n    render();\n    window.scrollTo(0, 0);\n    if (from)\n        morphTimer(from);\n    else\n        animateStudyView();\n    if (moveFocus) {\n        const heading = document.querySelector(page === 'Exam planner' ? '#examHeading' : page === 'Lecture roadmap' ? '#studyWorkspace:not(.emptySubject) #moduleTitle, .emptySubject #panel h2' : '#panel h1, #panel h2');\n        if (heading) {\n            heading.tabIndex = -1;\n            heading.focus({ preventScroll: true });\n        }\n    }\n}\n$('nav').onclick = e => {\n    const b = eventElement(e)?.closest('button');\n    if (b) {\n        if (b.dataset.page === 'Flashcards') {\n            legacyQuizView = false;\n            if (activeModule === 'm3' || activeModule === 'm4')\n                quizModule = activeModule;\n            playingQuiz = false;\n            recallStudying = false;\n        }\n        openPage(b.dataset.page, true);\n    }\n};\nconst subjectSelect = $('subjectSelect');\nsubjectSelect.innerHTML = studySubjects.map(s => '<option value=\"' + s.key + '\" aria-label=\"' + esc(s.label) + '\">' + esc(s.compact ?? s.label) + '</option>').join('');\nsubjectSelect.onchange = () => { selectStudySubject(subjectSelect.value); recallStudying = false; openPage(page === 'Flashcards' ? 'Flashcards' : 'Lecture roadmap'); subjectSelect.focus({ preventScroll: true }); };\n$('moduleSwitch').onclick = e => {\n    const button = eventElement(e)?.closest('button[data-module]');\n    if (!button || button.dataset.module === activeModule)\n        return;\n    const mod = subjectFor(activeSubject)?.modules.find(m => m === button.dataset.module);\n    if (!mod)\n        return;\n    activeModule = mod;\n    resetRoadmap();\n    openPage(page);\n    $('moduleSwitch').querySelector('[data-module=\"' + mod + '\"]')?.focus({ preventScroll: true });\n};\nconst studyButton = mustQuery('[data-open-study]');\nstudyButton.onclick = (() => {\n    const subject = studySubjects.find(s => s.key === studyButton.dataset.subject);\n    if (!subject)\n        return;\n    selectStudySubject(subject.key);\n    openPage('Lecture roadmap');\n    const heading = subject.modules.length ? $('moduleTitle') : $('panel').querySelector('h2');\n    if (heading) {\n        heading.tabIndex = -1;\n        heading.focus({ preventScroll: true });\n    }\n});\nlet selectedDeadline = '';\nconst examPlannerView = mountExamPlanner($('examPlanner'), () => selectedDeadline, code => {\n    selectedDeadline = code;\n    examPlannerView.update();\n    studyTimer.update();\n});\nconst studyTimer = mountStudyTimer($('studyTimer'), () => selectedDeadline);\n$('studyTimerExam').onclick = () => { openPage('Exam planner'); const heading = $('examHeading'); heading.tabIndex = -1; heading.focus({ preventScroll: true }); };\nfunction syncStudyTimer() {\n    const round = state[roundKey(quizModule)];\n    const recall = state[recallSessionKey(activeSubject === 'cd' ? 'cd' : 'cn')];\n    const activeTest = page === 'Flashcards' && ((playingQuiz && round && round.index < round.cards.length) || (recallStudying && recall && recall.index < recall.cards.length));\n    $('studyTimer').hidden = page === 'Exam planner' || !!activeTest;\n    studyTimer.update();\n}\nfunction render() {\n    document.documentElement.classList.toggle('dark', state.theme === 'dark');\n    const themeLabel = state.theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode';\n    $('theme').setAttribute('aria-label', themeLabel);\n    $('theme').title = themeLabel;\n    document.querySelectorAll('[data-page]').forEach(b => { b.classList.toggle('active', b.dataset.page === page); b.setAttribute('aria-current', b.dataset.page === page ? 'page' : 'false'); });\n    const planner = page === 'Exam planner';\n    const masteryButton = mustQuery('[data-page=\"Numerical practice\"]', $('nav'));\n    masteryButton.hidden = activeSubject === 'cd';\n    renderPreparationOrder(studySubjects.find(s => s.key === activeSubject));\n    $('examPlanner').hidden = !planner;\n    $('studyWorkspace').hidden = planner;\n    syncStudyTimer();\n    document.body.classList.toggle('quizzing', page === 'Flashcards');\n    document.body.classList.toggle('sectionView', !planner && page !== 'Lecture roadmap' && page !== 'Flashcards');\n    if (planner) {\n        examPlannerView.update();\n        return;\n    }\n    const subject = subjectFor(activeSubject) ?? studySubjects[0];\n    const study = currentStudy(), moduleSpeed = speedKey(study.id), lectures = study.lectures;\n    const emptySubject = !subject.modules.length;\n    $('subjectChooser').hidden = false;\n    subjectSelect.value = activeSubject;\n    $('subjectStats').hidden = page !== 'Lecture roadmap' || emptySubject;\n    if (page === 'Lecture roadmap' && !emptySubject)\n        renderSubjectSummary(subject);\n    if (page === 'Flashcards') {\n        $('studyWorkspace').classList.remove('emptySubject');\n        if (emptySubject) {\n            $('panel').innerHTML = '<h2>Flashcards</h2><p class=\"empty\">No flashcards have been added for this subject yet.</p>';\n            return;\n        }\n        if (activeSubject === 'cn' && legacyQuizView) {\n            renderQuiz();\n            return;\n        }\n        renderRecall(activeSubject === 'cd' ? 'cd' : 'cn');\n        return;\n    }\n    $('moduleSwitch').hidden = emptySubject;\n    const switchHTML = '<span title=\"' + esc(subject.label) + '\">' + esc(subject.compact ?? subject.label) + '</span>' + subject.modules.map(id => '<button type=\"button\" data-module=\"' + id + '\">' + String(studyModules[id].number).padStart(2, '0') + ' · ' + esc(studyModules[id].name) + '</button>').join('');\n    if ($('moduleSwitch').dataset.subject !== subject.key) {\n        $('moduleSwitch').innerHTML = switchHTML;\n        $('moduleSwitch').dataset.subject = subject.key;\n    }\n    $('studyWorkspace').classList.toggle('emptySubject', emptySubject);\n    if (emptySubject) {\n        $('panel').innerHTML = '<div class=\"panelHead\"><h2>' + esc(subject.label) + '</h2></div><p class=\"empty\">No lecture resources have been added for this subject yet.</p>';\n        return;\n    }\n    document.querySelectorAll('[data-module]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.module === study.id)));\n    $('moduleEyebrow').innerHTML = '<span class=\"tick\"></span> MODULE 0' + study.number + ' · ' + study.weight + ' estimated';\n    $('moduleTitle').textContent = study.name;\n    $('moduleDescription').textContent = (study.revisionOnly ? 'Revision notes and flashcards · ' : lectures.length + ' lectures · ' + study.sections.length + ' sections · ') + study.marks + ' of 60 marks (estimated)';\n    mustQuery('.railLabel', masteryButton).textContent = study.practiceLabel;\n    masteryButton.title = study.practiceLabel;\n    masteryButton.setAttribute('aria-label', study.practiceLabel);\n    if (page === 'Lecture roadmap' && !roadmapManuallyChanged) {\n        const initial = initialLectureSection(study, state);\n        collapsed = new Set(study.sections.filter(s => s.name !== initial).map(s => s.name));\n    }\n    const { remaining, done, covered, minutes, unknown, coreDone, coreTotal } = viewingSummary(study, state);\n    const isRevision = Boolean(study.revisionOnly);\n    mustQuery('.hero').hidden = isRevision;\n    $('stats').hidden = isRevision;\n    if (isRevision) {\n        $('stats').replaceChildren();\n        $('overviewSummary').textContent = 'Mid-semester revision · no full lecture playlist';\n        renderPanel();\n        return;\n    }\n    const next = nextLecture(lectures, state, state[`${study.id}/lastActive`]);\n    $('nextTitle').textContent = next ? next.title : 'Roadmap completed';\n    $('nextMeta').textContent = next ? 'Lecture ' + String(next.n).padStart(2, '0') + ' · ' + next.educator + ' · ' + lectureDuration(next) : 'All ' + lectures.length + ' lectures completed';\n    $('resume').style.display = next ? 'inline-flex' : 'none';\n    if (next)\n        $('resume').href = link(next);\n    updateThumbnail(next);\n    $('resume').dataset.watch = $('previewLink').dataset.watch = next?.uid || '';\n    $('overviewSummary').textContent = covered + ' / ' + study.topics.length + ' syllabus topics complete' + (study.subjectId === 'cn' ? ' · ' + study.practice.filter(p => state[pk(p, study.id)] === 'Mastered').length + ' / ' + study.practice.length + ' ' + study.masteryLabel + ' mastered' : '');\n    $('stats').innerHTML = '<div class=\"stat progressStat\"><div class=\"statHead\">' + icon('chart') + (coreTotal === lectures.length ? 'Overall progress' : 'Core lecture progress') + '</div>' + progressRing(study.id, coreDone, coreTotal) + '</div><div class=\"stat\"><div class=\"statHead\">' + icon('check') + 'Lectures completed</div><strong>' + done + ' <span class=\"count\">/ ' + lectures.length + '</span></strong><small>' + remaining.length + ' remaining</small></div><div class=\"stat\"><div class=\"statHead\">' + icon('clock') + 'Viewing time <select aria-label=\"Playback speed\" id=\"speed\">' + options(speeds, state[moduleSpeed], '×') + '</select></div><strong>' + Math.floor(minutes / 60) + 'h ' + minutes % 60 + 'm</strong><small>Remaining at selected speed' + (study.subjectId === 'cd' && unknown ? ' · ' + unknown + ' unknown' : '') + '</small></div>';\n    animateProgressRing();\n    $('speed').onchange = e => { changed(patchValue(moduleSpeed, Number(inputValue(e)))); render(); };\n    renderPanel();\n}\nfunction updateThumbnail(lecture) {\n    const frame = $('previewLink'), image = $('previewImage'), fallback = mustQuery('.previewFallback', frame);\n    frame.hidden = !lecture;\n    if (!lecture)\n        return;\n    frame.href = link(lecture);\n    frame.setAttribute('aria-label', 'Watch ' + lecture.title + ' on YouTube');\n    if (frame.dataset.video === lecture.id)\n        return;\n    frame.dataset.video = lecture.id;\n    image.hidden = false;\n    fallback.hidden = true;\n    const video = lecture.id;\n    const sources = ['maxresdefault', 'sddefault', 'hqdefault', 'mqdefault'];\n    let attempt = 0;\n    function loadNext() {\n        if (frame.dataset.video !== video)\n            return;\n        if (attempt === sources.length) {\n            image.hidden = true;\n            fallback.hidden = false;\n            return;\n        }\n        image.src = 'https://i.ytimg.com/vi/' + video + '/' + sources[attempt++] + '.jpg';\n    }\n    image.onerror = loadNext;\n    image.onload = () => { if (image.naturalWidth <= 120)\n        loadNext(); };\n    loadNext();\n}\nfunction matches(l) { return (filter === 'All' || filter === 'Completed' && get(l, 'done') || filter === 'Incomplete' && !get(l, 'done') || filter === 'Revision' && get(l, 'revision')) && [l.title, l.videoTitle, l.educator, l.sy].join(' ').toLowerCase().includes(query.toLowerCase().trim()); }\nfunction lectureDuration(l) { return (l.startSeconds != null ? 'Chapter · ' : '') + (l.time || 'Duration unknown'); }\nfunction groups() {\n    return currentStudy().sections.map((s, i) => {\n        let rows = s.rows.filter(matches);\n        if (!rows.length)\n            return '';\n        let count = s.rows.filter(l => get(l, 'done')).length, open = !collapsed.has(s.name);\n        return '<article class=\"group\"><button class=\"groupHead\" data-section=\"' + i + '\" aria-expanded=\"' + open + '\"><span class=\"num\">' + String(i + 1).padStart(2, '0') + '</span><strong>' + esc(s.name) + '</strong>' + bar(count, s.rows.length) + '<span class=\"count\">' + count + ' / ' + s.rows.length + '</span>' + icon(open ? 'down' : 'right') + '</button>' + (open ? rows.map(l => '<div class=\"row ' + (get(l, 'done') ? 'done' : '') + '\"><input type=\"checkbox\" data-done=\"' + l.uid + '\" aria-label=\"Completed: ' + esc(l.title) + '\" ' + (get(l, 'done') ? 'checked' : '') + '><div class=\"details\"><img class=\"lectureThumb\" loading=\"lazy\" alt=\"\" src=\"https://i.ytimg.com/vi/' + l.id + '/mqdefault.jpg\"><a data-watch=\"' + l.uid + '\" href=\"' + link(l) + '\" target=\"_blank\" rel=\"noopener\" title=\"' + esc(l.videoTitle) + '\">' + esc(l.title) + '</a><small>' + esc(l.sy) + (l.workedExample || (currentStudy().subjectId === 'cd' && /(?:example|solved)/i.test(l.title)) ? ' · Worked example' : '') + ((currentStudy().subjectId === 'cn' && l.topicIds.some(t => ['3.3', '3.4', '3.5', '3.8', '3.9', '3.10'].includes(t))) ? ' · Numerical practice' : '') + ' · ' + esc(l.educator) + ' · ' + lectureDuration(l) + ' · <a class=\"watchText\" data-watch=\"' + l.uid + '\" href=\"' + link(l) + '\">Watch</a></small></div>' + action(l, 'note', 'Personal notes', !!get(l, 'note')) + action(l, 'revision', 'Mark for revision', get(l, 'revision')) + '</div>').join('') : '') + '</article>';\n    }).join('') || '<p class=\"empty\">No lectures match this view.</p>';\n}\nfunction action(l, field, label, on) { return '<button class=\"icon ' + (on ? 'on' : '') + '\" data-' + field + '=\"' + l.uid + '\" aria-label=\"' + label + ' for ' + esc(l.title) + '\" title=\"' + label + '\" ' + (field === 'revision' ? 'aria-pressed=\"' + on + '\"' : '') + '>' + icon(field === 'revision' ? 'bookmark' : 'note') + '</button>'; }\nfunction topicDetail(id, matched) {\n    const n = topicNotes[id] ?? m4Notes[id];\n    if (!n)\n        return '';\n    const personal = matched.filter(l => get(l, 'note')).map(l => '<p><b>' + esc(l.title) + '</b><br>' + esc(get(l, 'note')) + '</p>').join('');\n    return '<details class=\"quizReview\"><summary>Revision notes · ' + id + '</summary><p>' + esc(n.summary) + '</p><p>' + esc(n.formula) + '</p><p>' + esc(n.diagram) + '</p><p><b>' + esc(n.question) + '</b><br>' + esc(n.answer) + '</p>' + personal + '</details>';\n}\nfunction renderPanel() {\n    const study = currentStudy(), { topics, practice, stages, lectures } = study;\n    let html = '<div class=\"panelHead\"><h2>' + (page === 'Numerical practice' ? study.practiceLabel : page) + '</h2></div>';\n    if (study.subjectId === 'cd' && (page === 'Numerical practice' || page === 'Syllabus coverage' || (page === 'Lecture roadmap' && study.revisionOnly))) {\n        $('panel').innerHTML = '<div class=\"panelHead\"><h2>' + (page === 'Syllabus coverage' ? 'Syllabus and revision notes' : 'Revision notes') + '</h2></div>' + compilerNotesPanel(study);\n        return;\n    }\n    if (study.subjectId === 'cd' && page === 'Study priorities') {\n        $('panel').innerHTML = html + '<div class=\"block\"><h3>Estimated preparation priority</h3><p>M2 and M4 cover new content (42 of 60 marks). M1 and M3 cover mid-semester revision (18 of 60 marks). Individual marks are estimates, not official paper weightage.</p>' +\n            (subjectFor('cd')?.modules ?? []).map(id => { const m = studyModules[id]; return '<div class=\"setting\"><span>M' + m.number + ' · ' + esc(m.name) + '</span><strong>' + m.marks + ' marks · ' + [8, 8, 7, 7][m.number - 1] + ' hours</strong></div>'; }).join('') + '</div>';\n        return;\n    }\n    if (page === 'Lecture roadmap') {\n        html += '<div class=\"tools\"><div class=\"chips\">' + ['All', 'Incomplete', 'Completed', 'Revision'].map(f => '<button data-filter=\"' + f + '\" aria-pressed=\"' + (f === filter) + '\" class=\"' + (f === filter ? 'active' : '') + '\">' + f + '</button>').join('') + '</div><label class=\"search\">' + icon('find') + '<input aria-label=\"Search lectures\" id=\"search\" placeholder=\"Search lectures…\" value=\"' + esc(query) + '\"></label></div><div id=\"groups\">' + groups() + '</div>' + (study.subjectId === 'cd' ? '<details class=\"block compilerExtra\"' + (conceptDetailsOpen ? ' open' : '') + '><summary>Concise topic notes</summary>' + compilerNotesPanel(study) + '</details>' : '');\n    }\n    if (page === 'Syllabus coverage')\n        html += '<p class=\"info\">Coverage follows lectures marked complete. Track mastery independently in ' + study.practiceLabel + '.</p><div class=\"block\">' + topics.map((t, i) => { let sy = study.number + '.' + (i + 1), ls = lectures.filter(l => topicMatch(l, sy)), n = ls.filter(l => get(l, 'done')).length; return '<div class=\"setting\"><span><b>' + sy + '</b> ' + esc(t) + '</span><small>' + n + '/' + ls.length + ' · ' + (n === 0 ? 'Not started' : n === ls.length ? 'Completed' : 'In progress') + '</small></div>' + topicDetail(sy, ls); }).join('') + '</div>';\n    if (page === 'Numerical practice')\n        html += '<p class=\"info\">' + (study.id === 'm4' ? 'Track what you can explain or apply without your notes.' : 'Update each skill after solving problems independently.') + '</p><div class=\"block\">' + practice.map(p => '<label class=\"setting\">' + esc(p) + '<select data-practice=\"' + pk(p, study.id) + '\">' + options(stages, state[pk(p, study.id)]) + '</select></label>').join('') + '</div>';\n    if (page === 'Study priorities')\n        html += (study.id === 'm3' ? '<div class=\"block\"><h3>Recommended study effort</h3>' + ['IPv4, CIDR, subnetting and supernetting', 'Routing algorithms', 'NAT, IPv6 and network protocols', 'Fundamentals and congestion control'].map((t, i) => '<div class=\"setting\">' + t + '<b>' + [40, 30, 20, 10][i] + '%</b></div>').join('') + '</div>' : '') + '<div class=\"block\"><h3>Estimated exam weight · 60 marks</h3>' + ['03 · Network Layer', '04 · Transport Layer', '02 · Data Link Layer', '01 · Introduction to Networking'].map((t, i) => '<div class=\"setting\">' + t + '<span>' + ['22.4 marks · 37.33%', '19.6 marks · 32.67%', '9.6 marks · 16%', '8.4 marks · 14%'][i] + '</span></div>').join('') + '</div>';\n    $('panel').innerHTML = html;\n    const extra = $('panel').querySelector('.compilerExtra');\n    if (extra)\n        extra.ontoggle = () => { if (extra.isConnected)\n            conceptDetailsOpen = extra.open; };\n    if (document.getElementById('search'))\n        $('search').oninput = e => { query = inputValue(e); roadmapManuallyChanged = true; collapsed.clear(); $('groups').innerHTML = groups(); };\n}\n$('panel').onclick = e => {\n    const b = eventElement(e)?.closest('button,input');\n    if (!b)\n        return;\n    const d = b.dataset;\n    if (d.revisionReading) {\n        openRevisionReading(d.revisionReading);\n        return;\n    }\n    if (d.conceptNote) {\n        openConceptNote(d.conceptNote);\n        return;\n    }\n    const { sections, lectures } = currentStudy();\n    if (page === 'Lecture roadmap')\n        roadmapManuallyChanged = true;\n    if (d.filter) {\n        filter = d.filter;\n        collapsed.clear();\n    }\n    else if (d.section !== undefined) {\n        const name = sections[+d.section].name;\n        collapsed.has(name) ? collapsed.delete(name) : collapsed.add(name);\n    }\n    else if (d.done || d.revision) {\n        const l = lectures.find(l => l.uid === (d.done || d.revision));\n        if (!l)\n            return;\n        const k = key(l, d.done ? 'done' : 'revision');\n        const sub = currentStudy().subjectId, before = availableDecks(sub);\n        changed(patchValue(k, !state[k]));\n        announceNewDecks(before, sub);\n    }\n    else if (d.note) {\n        const lecture = lectures.find(l => l.uid === d.note);\n        if (lecture)\n            note(lecture);\n        return;\n    }\n    else\n        return;\n    render();\n    if (d.done)\n        document.querySelector('[data-done=\"' + d.done + '\"]')?.closest('.row')?.classList.add('toggled');\n    if (b.dataset.done || b.dataset.revision || b.dataset.section !== undefined || d.filter) {\n        const attr = Object.keys(d)[0];\n        (attr ? document.querySelector('[data-' + attr + '=\"' + d[attr] + '\"]') : null)?.focus({ preventScroll: true });\n    }\n};\n$('panel').onchange = e => { const select = eventElement(e); if (select instanceof HTMLSelectElement && select.dataset.practice)\n    changed(patchValue(select.dataset.practice, select.value)); };\nfunction modal(html) { $('dialogBody').innerHTML = html; $('dialog').showModal(); }\nfunction note(l) { modal('<h2>Lecture notes</h2><label>' + esc(l.title) + '<textarea id=\"memo\" maxlength=\"8000\" placeholder=\"Write your notes…\"></textarea></label><small>Changes save as you type.</small>'); $('memo').value = get(l, 'note'); $('memo').oninput = e => changed(patchValue(key(l, 'note'), inputValue(e))); }\n$('close').onclick = () => $('dialog').close();\n$('dialog').onclose = render;\n$('theme').onclick = () => { changed({ theme: state.theme === 'light' ? 'dark' : 'light' }); render(); };\nfunction openProgressBackup() {\n    modal('<h2>Progress backup</h2><p>Download a JSON copy of your notes, progress and settings. Anyone with the file can read its contents. Keep it somewhere private.</p><button id=\"export\" type=\"button\">Download backup</button> <button id=\"import\" type=\"button\">Restore from file</button><input id=\"backup\" type=\"file\" accept=\".json,application/json\" hidden><p id=\"notice\" role=\"status\"></p>');\n    const notice = $('notice'), restore = $('import');\n    $('export').onclick = () => {\n        const a = document.createElement('a');\n        a.href = URL.createObjectURL(new Blob([JSON.stringify({ version: 1, data: state }, null, 2)], { type: 'application/json' }));\n        a.download = 'network-notebook-backup.json';\n        a.click();\n        setTimeout(() => URL.revokeObjectURL(a.href), 2000);\n    };\n    restore.onclick = () => $('backup').click();\n    $('backup').onchange = async (e) => {\n        const input = e.target, file = input.files?.[0];\n        if (!file)\n            return;\n        restore.disabled = true;\n        try {\n            if (file.size > 1500000)\n                throw Error();\n            const backup = JSON.parse(await file.text()), data = migrate(backup?.data);\n            if (backup?.version !== 1 || !valid(data, true) || !Object.keys(data).length)\n                throw Error();\n            if (!confirm('Restore this backup? It replaces the progress, notes and settings contained in the file. Download a current backup first if you want to keep them.'))\n                return;\n            await changed(data);\n            notice.textContent = account && Object.keys(pending).length\n                ? (localOK ? 'Backup applied in this browser. Changes have not yet synced to your account.' : 'Backup applied for this session. Changes are not saved yet.')\n                : account ? 'Backup restored to your account.' : localOK ? 'Backup restored in this browser.' : 'Backup applied for this session. Browser storage is unavailable.';\n        }\n        catch {\n            notice.textContent = 'Invalid backup. Your progress is unchanged.';\n        }\n        finally {\n            input.value = '';\n            restore.disabled = false;\n        }\n    };\n}\n$('progressBackup').onclick = openProgressBackup;\nlet feedbackTimer;\nfunction feedback(message) {\n    const toast = $('feedback');\n    toast.textContent = message;\n    toast.classList.add('visible');\n    clearTimeout(feedbackTimer);\n    feedbackTimer = window.setTimeout(() => toast.classList.remove('visible'), 1800);\n}\ndocument.addEventListener('click', event => {\n    const button = eventElement(event)?.closest('button, #resume, input[data-done]');\n    if (!button)\n        return;\n    const id = button.dataset.done || button.dataset.revision;\n    if (id) {\n        const marked = button.dataset.done ? button.checked : button.getAttribute('aria-pressed') !== 'true';\n        feedback(button.dataset.done ? (marked ? 'Lecture completed' : 'Marked incomplete') : (marked ? 'Added to revision' : 'Removed from revision'));\n    }\n}, true);\nrender();\npersist();\nflush();\nfunction guestProgress() {\n    try {\n        const saved = JSON.parse(localStorage.getItem(guestKey) ?? 'null');\n        if (saved)\n            saved.data = migrate(saved.data);\n        if (!saved || !valid(saved.data))\n            return {};\n        return Object.fromEntries(Object.entries(saved.data).filter(([k, v]) => JSON.stringify(v) !== JSON.stringify(defaults[k])));\n    }\n    catch {\n        return {};\n    }\n}\nif (account && Object.keys(guestProgress()).length) {\n    const notice = document.createElement('div');\n    notice.className = 'guestImport';\n    notice.innerHTML = '<span>This browser has guest progress.</span> <button type=\"button\">Add missing progress to my account</button><small role=\"status\"></small>';\n    mustQuery('main').prepend(notice);\n    const button = mustQuery('button', notice), label = mustQuery('small', notice);\n    try {\n        if (localStorage.getItem(storageKey + ':imported') === JSON.stringify(guestProgress()))\n            notice.hidden = true;\n    }\n    catch { }\n    button.onclick = async () => {\n        button.disabled = true;\n        const delta = guestProgress();\n        try {\n            const response = await fetch('/progress', { method: 'PATCH', headers: { 'Content-Type': 'application/json', 'X-Notebook-Account': account, 'X-Import-Guest': '1' }, body: JSON.stringify(delta) });\n            if (!response.ok)\n                throw Error();\n            try {\n                localStorage.setItem(storageKey + ':imported', JSON.stringify(delta));\n            }\n            catch { }\n            button.hidden = true;\n            label.textContent = 'Imported. Existing account entries were kept.';\n            await flush();\n        }\n        catch {\n            button.disabled = false;\n            label.textContent = 'Could not import yet. Your browser copy is saved.';\n        }\n    };\n}\nwindow.addEventListener('pageshow', e => { if (e.persisted)\n    location.reload(); });\n"};const assetAliases={"/style-e73d48a9d715.css":"/style.css","/data-67f2f77a9d13.js":"/data.js","/m4-data-7cc8fc51fe0b.js":"/m4-data.js","/compiler-content-64115bdec6cd.js":"/compiler-content.js","/compiler-lectures-f9f0f714e5d6.js":"/compiler-lectures.js","/compiler-6dedd1d9f454.js":"/compiler.js","/schema-b8236c947b43.js":"/schema.js","/recall-model-0043db2990be.js":"/recall-model.js","/quiz-schema-b3c27c11a8c0.js":"/quiz-schema.js","/cards-c3212297b2b7.js":"/cards.js","/quiz-eb8049af97ef.js":"/quiz.js","/topic-notes-7f843a323c71.js":"/topic-notes.js","/m4-notes-cbf6fb82b04a.js":"/m4-notes.js","/player-67927e18dc06.js":"/player.js","/exams-e53526d73cae.js":"/exams.js","/recall-ui-2fa159c0b1b5.js":"/recall-ui.js","/app-b55babcaaa38.js":"/app.js"};
"use strict";
const sections = [
    {
        "name": "Network Layer Fundamentals",
        "rows": [
            {
                "n": 1,
                "title": "Network Layer and its Responsibilities",
                "sy": "3.1",
                "educator": "Gate Smashers",
                "id": "rW1jPlYgp_0",
                "time": "12:13",
                "videoTitle": "Lec-41: Network Layer | Responsibilities of Network Layer | OSI Model | Computer Networks",
                "uid": "m3-l01",
                "topicIds": [
                    "3.1"
                ]
            },
            {
                "n": 2,
                "title": "Network Layer Design Issues",
                "sy": "3.1",
                "educator": "Sundeep Saradhi",
                "id": "R3Wp4lR4Rn8",
                "time": "10:09",
                "videoTitle": "Network Layer Design Issues Explained Simply || Routing || Congestion Control || Computer Networks",
                "uid": "m3-l02",
                "topicIds": [
                    "3.1"
                ]
            },
            {
                "n": 3,
                "title": "Unicast, Broadcast and Multicast",
                "sy": "3.2",
                "educator": "Gate Smashers",
                "id": "EcWhJbEWxHU",
                "time": "5:53",
                "videoTitle": "Lec-21: Unicast, Broadcast & Multicast in Computer Networks",
                "uid": "m3-l03",
                "topicIds": [
                    "3.2"
                ]
            }
        ]
    },
    {
        "name": "IPv4 Classful Addressing",
        "rows": [
            {
                "n": 4,
                "title": "Class A IP Addressing",
                "sy": "3.3",
                "educator": "Gate Smashers",
                "id": "iurle2xZrBQ",
                "time": "23:28",
                "videoTitle": "Lec-42: Class A in IP addressing with Example in HINDI | Classful Addressing | Network Layer",
                "uid": "m3-l04",
                "topicIds": [
                    "3.3"
                ]
            },
            {
                "n": 5,
                "title": "Class B IP Addressing",
                "sy": "3.3",
                "educator": "Gate Smashers",
                "id": "es1NEZbgCss",
                "time": "20:35",
                "videoTitle": "Lec-43: Class B in IP addressing with Example | Classful Addressing in hindi with most easiest way",
                "uid": "m3-l05",
                "topicIds": [
                    "3.3"
                ]
            },
            {
                "n": 6,
                "title": "Class C IP Addressing",
                "sy": "3.3",
                "educator": "Gate Smashers",
                "id": "gk7c-Dceg5Y",
                "time": "14:22",
                "videoTitle": "Lec-44: Class C in IP addressing with Example | Classful Addressing | Network Layer",
                "uid": "m3-l06",
                "topicIds": [
                    "3.3"
                ]
            },
            {
                "n": 7,
                "title": "Class D and Class E IP Addressing",
                "sy": "3.3",
                "educator": "Gate Smashers",
                "id": "NDG2SEi2dKo",
                "time": "10:38",
                "videoTitle": "Lec-45: Class D & Class E in IP addressing with Example | Classful Addressing | Network Layer",
                "uid": "m3-l07",
                "topicIds": [
                    "3.3"
                ]
            },
            {
                "n": 8,
                "title": "Numericals: Network ID, Host and Broadcast Address",
                "sy": "3.3",
                "educator": "Gate Smashers",
                "id": "vTzrn_M77mo",
                "time": "12:48",
                "videoTitle": "Lec-46: Find Range, Network Id, Host, Broadcast address with Numerical Examples in Hindi",
                "uid": "m3-l08",
                "topicIds": [
                    "3.3"
                ]
            },
            {
                "n": 9,
                "title": "Disadvantages of Classful Addressing",
                "sy": "3.3",
                "educator": "Gate Smashers",
                "id": "ARfwnD6X6ZI",
                "time": "6:12",
                "videoTitle": "Lec-47: Disadvantages of Classful Addressing | IP addressing | Computer Networks",
                "uid": "m3-l09",
                "topicIds": [
                    "3.3"
                ]
            }
        ]
    },
    {
        "name": "Classless Addressing, Subnetting and Supernetting",
        "rows": [
            {
                "n": 10,
                "title": "Classless Addressing (CIDR)",
                "sy": "3.4",
                "educator": "Gate Smashers",
                "id": "N-ywmOpWehE",
                "time": "16:42",
                "videoTitle": "Lec-48: What is Classless Addressing (CIDR) in Hindi | CIDR vs Classful Addressing",
                "uid": "m3-l10",
                "topicIds": [
                    "3.4"
                ]
            },
            {
                "n": 11,
                "title": "Subnetting in Classful Addressing",
                "sy": "3.5",
                "educator": "Gate Smashers",
                "id": "rdb2ki4iGuo",
                "time": "19:17",
                "videoTitle": "Lec-49: Subnetting in Classful Addressing with Examples in Hindi | Computer Networks",
                "uid": "m3-l11",
                "topicIds": [
                    "3.5"
                ]
            },
            {
                "n": 12,
                "title": "Subnetting in Classless Addressing",
                "sy": "3.5",
                "educator": "Gate Smashers",
                "id": "wvvoT-dpr8o",
                "time": "11:11",
                "videoTitle": "Lec-51: Subnetting in CIDR Addressing | Classless Interdomain Routing in Hindi with Example",
                "uid": "m3-l12",
                "topicIds": [
                    "3.5"
                ]
            },
            {
                "n": 13,
                "title": "Variable Length Subnet Masking (VLSM)",
                "sy": "3.5",
                "educator": "Gate Smashers",
                "id": "DFjz3yxe3aU",
                "time": "13:09",
                "videoTitle": "Lec-53: VLSM in Classless Addressing(CIDR) | Variable Length Subnet Masking",
                "uid": "m3-l13",
                "topicIds": [
                    "3.5"
                ]
            },
            {
                "n": 14,
                "title": "CIDR Numerical Problems",
                "sy": "3.4–3.5",
                "educator": "Gate Smashers",
                "id": "jXioURQ2v8E",
                "time": "12:28",
                "videoTitle": "Lec-52: Numerical Question on CIDR | Classless Addressing | Very Imp for all Competitive Exams",
                "uid": "m3-l14",
                "topicIds": [
                    "3.4",
                    "3.5"
                ]
            },
            {
                "n": 15,
                "title": "Supernetting with Examples",
                "sy": "3.5",
                "educator": "Engineering Funda",
                "id": "R0Gq9UbaLTU",
                "time": "22:16",
                "videoTitle": "Supernetting in Computer Networks",
                "uid": "m3-l15",
                "topicIds": [
                    "3.5"
                ]
            }
        ]
    },
    {
        "name": "NAT and IPv6",
        "rows": [
            {
                "n": 16,
                "title": "Network Address Translation (NAT)",
                "sy": "3.6",
                "educator": "Gate Smashers",
                "id": "47PUj7OSGkA",
                "time": "9:48",
                "videoTitle": "Lec-66: NAT Explained - Network Address Translation with example in Hindi",
                "uid": "m3-l16",
                "topicIds": [
                    "3.6"
                ]
            },
            {
                "n": 17,
                "title": "Need for IPv6",
                "sy": "3.7",
                "educator": "Gate Smashers",
                "id": "0os5MOAKRL0",
                "time": "7:56",
                "videoTitle": "Lec-57: Need of IPv6 Protocol | Why IPv6 is Required",
                "uid": "m3-l17",
                "topicIds": [
                    "3.7"
                ]
            },
            {
                "n": 18,
                "title": "IPv6 Header and IPv4 vs IPv6",
                "sy": "3.7",
                "educator": "Gate Smashers",
                "id": "U3rGOTxwXAI",
                "time": "13:07",
                "videoTitle": "Lec-58: IPv6 Header Format in Hindi | IPv4 Vs IPv6 in Computer Networks",
                "uid": "m3-l18",
                "topicIds": [
                    "3.7"
                ]
            },
            {
                "n": 19,
                "title": "IPv6 Basics and Representation",
                "sy": "3.7",
                "educator": "Engineering Funda",
                "id": "6gx9cmqJZ_g",
                "time": "",
                "videoTitle": "IPv6 Basics and Representation: Understanding IPv6 in Computer Networks",
                "uid": "m3-l19",
                "topicIds": [
                    "3.7"
                ],
                "legacyVideo": "mCo7Zg_0PP0"
            }
        ]
    },
    {
        "name": "Routing Algorithms",
        "rows": [
            {
                "n": 20,
                "title": "Dijkstra's Shortest Path Algorithm",
                "sy": "3.8",
                "educator": "Abdul Bari",
                "id": "XB4MIexjvY0",
                "time": "18:35",
                "videoTitle": "3.6 Dijkstra Algorithm - Single Source Shortest Path - Greedy Method",
                "uid": "m3-l20",
                "topicIds": [
                    "3.8"
                ]
            },
            {
                "n": 21,
                "title": "Link State Routing",
                "sy": "3.9",
                "educator": "Gate Smashers",
                "id": "kW6zV-040SY",
                "time": "14:36",
                "videoTitle": "Lec-64: Link state routing in computer networks in Hindi",
                "uid": "m3-l21",
                "topicIds": [
                    "3.9"
                ]
            },
            {
                "n": 22,
                "title": "Distance Vector Routing Algorithm",
                "sy": "3.10",
                "educator": "Gate Smashers",
                "id": "5ZuP5qjbKSI",
                "time": "26:00",
                "videoTitle": "Lec-62: Distance vector routing algorithm in hindi | Computer Networks",
                "uid": "m3-l22",
                "topicIds": [
                    "3.10"
                ]
            },
            {
                "n": 23,
                "title": "Count to Infinity Problem",
                "sy": "3.10",
                "educator": "Gate Smashers",
                "id": "UYASPR4jEkk",
                "time": "10:41",
                "videoTitle": "Lec-63: Count to Infinity Problem in Distance Vector Routing",
                "uid": "m3-l23",
                "topicIds": [
                    "3.10"
                ]
            }
        ]
    },
    {
        "name": "Network Layer Protocols",
        "rows": [
            {
                "n": 24,
                "title": "Address Resolution Protocol (ARP)",
                "sy": "3.11",
                "educator": "Gate Smashers",
                "id": "IUSyV2BVh4A",
                "time": "8:13",
                "videoTitle": "Lec-65: ARP Explained- Address Resolution Protocol | Network Layer",
                "uid": "m3-l24",
                "topicIds": [
                    "3.11"
                ]
            },
            {
                "n": 25,
                "title": "Reverse Address Resolution Protocol (RARP)",
                "sy": "3.11",
                "educator": "Engineering Funda",
                "id": "qdYgDafId3U",
                "time": "9:40",
                "videoTitle": "RARP - Reverse Address Resolution Protocol in Computer Networks",
                "uid": "m3-l25",
                "topicIds": [
                    "3.11"
                ]
            },
            {
                "n": 26,
                "title": "Internet Control Message Protocol (ICMP)",
                "sy": "3.11",
                "educator": "Engineering Funda",
                "id": "-FaGF6s3rJ8",
                "time": "13:39",
                "videoTitle": "ICMP – Internet Control Message Protocol in Computer Networks",
                "uid": "m3-l26",
                "topicIds": [
                    "3.11"
                ]
            },
            {
                "n": 27,
                "title": "Internet Group Management Protocol (IGMP)",
                "sy": "3.11",
                "educator": "UPV University",
                "id": "_g194MRk5wE",
                "time": "9:16",
                "videoTitle": "The IGMP protocol | | UPV",
                "uid": "m3-l27",
                "topicIds": [
                    "3.11"
                ]
            }
        ]
    },
    {
        "name": "Congestion Control",
        "rows": [
            {
                "n": 28,
                "title": "Open Loop vs Closed Loop Congestion Control",
                "sy": "3.12",
                "educator": "Sundeep Saradhi",
                "id": "rhOJJcx6GpU",
                "time": "12:46",
                "videoTitle": "Congestion Control Explained || Open Loop vs Closed Loop || Computer Networks",
                "uid": "m3-l28",
                "topicIds": [
                    "3.12"
                ]
            }
        ]
    }
];
const topics = ["Network Layer Design Issues", "Unicast, Multicast, Broadcast", "IPv4 Classful Addressing", "IPv4 Classless Addressing", "Subnetting and Supernetting Design Problems", "Network Address Translation", "IPv6", "Dijkstra's Shortest Path Algorithm", "Link State Routing", "Distance Vector Routing", "ARP, RARP, ICMP, IGMP", "Open Loop and Closed Loop Congestion Control"];
const practice = ["IPv4 class identification", "Binary and decimal conversion", "CIDR and subnet mask conversion", "Network address calculation", "Broadcast address calculation", "Usable host range calculation", "Fixed Length Subnet Masking (FLSM)", "Variable Length Subnet Masking (VLSM)", "Supernetting", "IPv6 compression and expansion", "Dijkstra's Algorithm", "Link State Routing", "Distance Vector Routing"];

"use strict";
const m4Topics = [
    'Transport Service Primitives', 'UDP vs TCP', 'Connection Management (Three-Way Handshake)',
    'TCP Timers', 'DNS: Name Space, Resource Record, Types of Name Server', 'HTTP, SMTP', 'Telnet, FTP'
];
const m4Concepts = [
    'Transport service primitives', 'TCP vs UDP', 'Application-based protocol selection',
    'TCP and UDP header diagrams', 'Three-way handshake', 'Sequence and acknowledgement numbers',
    'TCP timers', 'RTT and RTO basics', 'DNS hierarchy and resource records', 'DNS resolution',
    'HTTP', 'SMTP', 'Telnet', 'FTP', 'Protocol port numbers'
];
const m4Dataset = [
    [1, '4.1', 'Transport Layer and its Responsibilities', 'Gate Smashers', 'kAty4mKczEg', '16:11'],
    [2, '4.1', 'Transport Service Primitives', 'Sundeep Saradhi Kanthety', 'lTW0rTfm1Gg', '07:19', 34576, 35015],
    [3, '4.2', 'TCP and TCP Header — Part 1', 'Gate Smashers', 'c8aet11HNxg', '14:51'],
    [4, '4.2', 'TCP and TCP Header — Part 2', 'Gate Smashers', 'hsNuqtfxgRI', '12:31'],
    [5, '4.2', 'UDP and UDP Header', 'Gate Smashers', 'HF_znV8x9a0', '11:48'],
    [6, '4.2', 'TCP vs UDP', 'Gate Smashers', 'jJyXpMmXJI0', '11:58'],
    [7, '4.3', 'TCP Connection Establishment and Termination', 'Gate Smashers', 'qIEHUUt2Wfc', '15:12'],
    [8, '4.4', 'Timers in TCP Protocol', 'Engineering Funda', 'o_uVzGiu2UI', '11:24'],
    [9, '4.5', 'DNS Working, Hierarchy and Resolution', 'Engineering Funda', 'K8fn6ZQtCvk', '20:22'],
    [10, '4.5', 'DNS and Types of Name Servers', 'Gate Smashers', 'BZISxpdl4lQ', '06:52'],
    [11, '4.5', 'DNS Resource Records', 'Sundeep Saradhi Kanthety', 'lTW0rTfm1Gg', '06:04', 42712, 43076],
    [12, '4.6', 'HTTP and HTTPS', 'Engineering Funda', 'r4VY6K3jo5s', '13:52'],
    [13, '4.6', 'Persistent vs Non-Persistent HTTP', 'Gate Smashers', 'zRUdSu3JlK8', '07:51'],
    [14, '4.6', 'SMTP vs POP3 vs IMAP', 'Gate Smashers', 'cjPVlxmf_Vk', '10:03'],
    [15, '4.7', 'Telnet Protocol and Network Virtual Terminal', 'CodeWithDeb', 'LAZN4rq-5mI', '5:21'],
    [16, '4.7', 'FTP, SFTP and TFTP', 'Engineering Funda', 'CrObzHJtANw', '11:13']
];
const m4Rows = m4Dataset.map(([n, sy, title, educator, id, time, startSeconds = null, endSeconds = null]) => ({
    n, sy, title, videoTitle: title, educator, id, time, uid: `m4-l${String(n).padStart(2, '0')}`, topicIds: [sy], startSeconds, endSeconds
}));
const transportSections = [
    ['Transport Layer Fundamentals', 1, 2], ['TCP and UDP', 3, 6], ['Connection Management and Timers', 7, 8],
    ['Domain Name System', 9, 11], ['HTTP and SMTP', 12, 14], ['Telnet and FTP', 15, 16]
];
const m4Sections = transportSections.map(([name, start, end]) => ({ name, rows: m4Rows.slice(start - 1, end) }));

"use strict";
const compilerContent = {
    "decks": [
        {
            "id": "fundamentals",
            "module": 1,
            "title": "Compiler fundamentals and phases",
            "requires": [
                "cd-fundamentals",
                "cd-phases"
            ],
            "cards": [
                {
                    "id": "cd-fundamentals-01",
                    "question": "What is system software?",
                    "answer": "Software that manages hardware or provides a platform and tools for running or building programs.",
                    "kind": "theory"
                },
                {
                    "id": "cd-fundamentals-02",
                    "question": "How do system and application programs differ?",
                    "answer": "System programs manage the platform or support other programs; applications solve user tasks.",
                    "kind": "theory"
                },
                {
                    "id": "cd-fundamentals-03",
                    "question": "What does an assembler do?",
                    "answer": "It translates assembly instructions and symbols into machine or object code.",
                    "kind": "theory"
                },
                {
                    "id": "cd-fundamentals-04",
                    "question": "How do compilers and interpreters differ?",
                    "answer": "A compiler translates source to a target program; an interpreter directly performs the source program’s operations, possibly through a runtime representation.",
                    "kind": "theory"
                },
                {
                    "id": "cd-fundamentals-05",
                    "question": "What is a compiler pass?",
                    "answer": "One traversal of the input or an intermediate representation; a pass may implement several compiler phases.",
                    "kind": "theory"
                },
                {
                    "id": "cd-fundamentals-06",
                    "question": "What are the compiler’s main phases in order?",
                    "answer": "Lexical analysis, syntax analysis, semantic analysis, intermediate code generation, optimization, and target code generation.",
                    "kind": "theory"
                },
                {
                    "id": "cd-fundamentals-07",
                    "question": "How do the compiler front end and back end differ?",
                    "answer": "The front end analyzes source and produces IR; the back end lowers and emits target code. The middle end usually optimizes IR.",
                    "kind": "theory"
                },
                {
                    "id": "cd-fundamentals-08",
                    "question": "Which phase should report an undeclared variable, and why?",
                    "answer": "Semantic analysis. The token and grammar can be valid while the identifier has no declaration in scope.",
                    "kind": "application"
                }
            ]
        },
        {
            "id": "lexical",
            "module": 1,
            "title": "Lexical analysis, tokens and symbol table",
            "requires": [
                "cd-tokens",
                "cd-automata",
                "cd-symbols"
            ],
            "cards": [
                {
                    "id": "cd-lexical-01",
                    "question": "What is lexical analysis?",
                    "answer": "Scanning the source into tokens for the parser.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lexical-02",
                    "question": "Distinguish a token, pattern and lexeme.",
                    "answer": "A token is a category, a pattern describes its members, and a lexeme is the actual matched text.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lexical-03",
                    "question": "What class of patterns describes most tokens?",
                    "answer": "Regular expressions; equivalent finite automata can recognize their languages.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lexical-04",
                    "question": "How do deterministic and nondeterministic finite automata differ?",
                    "answer": "A DFA has one defined next state per state and symbol; an NFA may have alternatives, missing transitions or epsilon transitions.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lexical-05",
                    "question": "What does a longest-match scanner do when rule lengths tie?",
                    "answer": "It first chooses the longest matching prefix, then uses rule priority to break a tie; Lex/Flex chooses the earliest rule.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lexical-06",
                    "question": "What does Lex/Flex generate?",
                    "answer": "A scanner, typically with a yylex function, from regular-expression rules and actions.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lexical-07",
                    "question": "What does a symbol table store?",
                    "answer": "Identifier bindings and attributes such as scope, type, storage location or signature.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lexical-08",
                    "question": "How does a scanner tokenize 'ifx' if 'if' is a keyword and identifiers allow letters?",
                    "answer": "As one identifier. The identifier rule matches three characters and the keyword rule only two.",
                    "kind": "application"
                }
            ]
        },
        {
            "id": "top-down",
            "module": 1,
            "title": "Top-down and LL parsing",
            "requires": [
                "cd-top-down",
                "cd-first-follow",
                "cd-ll-table"
            ],
            "cards": [
                {
                    "id": "cd-top-down-01",
                    "question": "What does LL(1) mean?",
                    "answer": "Scan input left to right, construct a leftmost derivation, and use one lookahead token.",
                    "kind": "theory"
                },
                {
                    "id": "cd-top-down-02",
                    "question": "How does a predictive recursive-descent parser work?",
                    "answer": "It uses one routine per nonterminal and selects a production from lookahead without backtracking.",
                    "kind": "theory"
                },
                {
                    "id": "cd-top-down-03",
                    "question": "What is FIRST of a symbol string?",
                    "answer": "Terminals that can begin a string it derives, plus epsilon if the whole string is nullable.",
                    "kind": "theory"
                },
                {
                    "id": "cd-top-down-04",
                    "question": "What is FOLLOW of a nonterminal?",
                    "answer": "Terminals that can appear directly after it in a sentential form; the start symbol’s FOLLOW includes end marker.",
                    "kind": "theory"
                },
                {
                    "id": "cd-top-down-05",
                    "question": "How do you fill the LL(1) table for A → α?",
                    "answer": "Place it under FIRST(α) minus epsilon; if α is nullable, also place it under FOLLOW(A).",
                    "kind": "theory"
                },
                {
                    "id": "cd-top-down-06",
                    "question": "What does more than one entry in an LL(1) cell indicate?",
                    "answer": "A production-choice conflict: the grammar as written is not LL(1).",
                    "kind": "theory"
                },
                {
                    "id": "cd-top-down-07",
                    "question": "Why remove left recursion from a predictive grammar?",
                    "answer": "A left-recursive alternative can call the same nonterminal without consuming input, causing infinite recursion.",
                    "kind": "theory"
                },
                {
                    "id": "cd-top-down-08",
                    "question": "Why is left factoring useful?",
                    "answer": "It delays the choice between alternatives until their common prefix has been consumed.",
                    "kind": "theory"
                },
                {
                    "id": "cd-top-down-09",
                    "question": "Eliminate immediate left recursion from A → A a | b.",
                    "answer": "Use A → b A′ and A′ → a A′ | ε.",
                    "kind": "application"
                }
            ]
        },
        {
            "id": "bottom-up",
            "module": 2,
            "title": "Bottom-up fundamentals, handles and shift-reduce parsing",
            "requires": [
                "cd-bottom-up",
                "cd-handles",
                "cd-shift-reduce"
            ],
            "cards": [
                {
                    "id": "cd-bottom-up-01",
                    "question": "What does bottom-up parsing construct?",
                    "answer": "A parse from input leaves to the start symbol, reversing a rightmost derivation.",
                    "kind": "theory"
                },
                {
                    "id": "cd-bottom-up-02",
                    "question": "What is a handle?",
                    "answer": "A particular occurrence of a production right-hand side whose reduction reverses one rightmost-derivation step.",
                    "kind": "theory"
                },
                {
                    "id": "cd-bottom-up-03",
                    "question": "Why is not every matching right-hand side a handle?",
                    "answer": "The right-hand side must be the correct occurrence at that stage of the reverse rightmost derivation.",
                    "kind": "theory"
                },
                {
                    "id": "cd-bottom-up-04",
                    "question": "What is handle pruning?",
                    "answer": "Repeatedly reducing the next handle until the start symbol remains.",
                    "kind": "theory"
                },
                {
                    "id": "cd-bottom-up-05",
                    "question": "What is a right sentential form?",
                    "answer": "A form reached at some step of a rightmost derivation.",
                    "kind": "theory"
                },
                {
                    "id": "cd-bottom-up-06",
                    "question": "What happens during a shift?",
                    "answer": "The next input token moves onto the stack and the input cursor advances.",
                    "kind": "theory"
                },
                {
                    "id": "cd-bottom-up-07",
                    "question": "What happens during a reduce?",
                    "answer": "The parser replaces a matching right-hand side on top of the stack with its left-hand nonterminal.",
                    "kind": "theory"
                },
                {
                    "id": "cd-bottom-up-08",
                    "question": "What happens during a reduction by an empty production?",
                    "answer": "No grammar symbols are removed; the left-hand nonterminal is pushed and the resulting state is found with GOTO.",
                    "kind": "theory"
                },
                {
                    "id": "cd-bottom-up-09",
                    "question": "When does a shift-reduce parser accept?",
                    "answer": "When the grammar’s start construct is complete and the input is at the end marker under the parser’s accept action.",
                    "kind": "theory"
                },
                {
                    "id": "cd-bottom-up-10",
                    "question": "What is a shift/reduce conflict?",
                    "answer": "Both shifting the lookahead and making a reduction are possible in the same parsing-table cell.",
                    "kind": "theory"
                },
                {
                    "id": "cd-bottom-up-11",
                    "question": "What is a reduce/reduce conflict?",
                    "answer": "Two or more reductions compete in the same parsing-table cell.",
                    "kind": "theory"
                },
                {
                    "id": "cd-bottom-up-12",
                    "question": "What is a viable prefix?",
                    "answer": "A prefix of a right sentential form extending no farther than the right edge of its handle.",
                    "kind": "theory"
                },
                {
                    "id": "cd-bottom-up-13",
                    "question": "Why does a shift-reduce parser use a stack?",
                    "answer": "A handle appears at the stack top when it is time to reduce, while input remains to its right.",
                    "kind": "theory"
                },
                {
                    "id": "cd-bottom-up-14",
                    "question": "For S → a B and B → b, which reduction happens first on input ab?",
                    "answer": "After shifting a and b, reduce b to B; then reduce a B to S.",
                    "kind": "application"
                },
                {
                    "id": "cd-bottom-up-15",
                    "question": "Which conflict does the classic dangling-else grammar cause, and how is it often resolved?",
                    "answer": "Shift/reduce. Shifting else attaches it to the nearest unmatched if under the conventional rule.",
                    "kind": "application"
                }
            ]
        },
        {
            "id": "precedence",
            "module": 2,
            "title": "Operator precedence, LEADING and TRAILING",
            "requires": [
                "cd-leading-trailing",
                "cd-precedence-table"
            ],
            "cards": [
                {
                    "id": "cd-precedence-01",
                    "question": "What is an operator grammar in the standard precedence construction?",
                    "answer": "A grammar with no empty right-hand sides and no adjacent nonterminals on any right-hand side.",
                    "kind": "theory"
                },
                {
                    "id": "cd-precedence-02",
                    "question": "What makes an operator grammar an operator-precedence grammar?",
                    "answer": "Its terminal-to-terminal precedence relations have no conflicting multiple assignments for any pair.",
                    "kind": "theory"
                },
                {
                    "id": "cd-precedence-03",
                    "question": "What is LEADING(A), also called FIRSTVT(A)?",
                    "answer": "Terminals that can occur first, or immediately after one leading nonterminal, in a sentential form derived from A.",
                    "kind": "theory"
                },
                {
                    "id": "cd-precedence-04",
                    "question": "What is TRAILING(A), also called LASTVT(A)?",
                    "answer": "Terminals that can occur last, or immediately before one trailing nonterminal, in a sentential form derived from A.",
                    "kind": "theory"
                },
                {
                    "id": "cd-precedence-05",
                    "question": "When does construction assign a =· b?",
                    "answer": "When terminals a and b are adjacent in a right-hand side or separated by a single nonterminal.",
                    "kind": "theory"
                },
                {
                    "id": "cd-precedence-06",
                    "question": "When does construction assign a <· b?",
                    "answer": "When a directly precedes a nonterminal B and b belongs to LEADING(B).",
                    "kind": "theory"
                },
                {
                    "id": "cd-precedence-07",
                    "question": "When does construction assign a ·> b?",
                    "answer": "When a belongs to TRAILING(A) and A directly precedes terminal b.",
                    "kind": "theory"
                },
                {
                    "id": "cd-precedence-08",
                    "question": "Which stack symbol is compared with lookahead in an operator-precedence parser?",
                    "answer": "The topmost terminal on the stack, skipping any nonterminals above it.",
                    "kind": "theory"
                },
                {
                    "id": "cd-precedence-09",
                    "question": "Which precedence relations trigger shifting or reduction?",
                    "answer": "Shift for <· and =·; reduce for ·>. An undefined relation usually signals an error.",
                    "kind": "theory"
                },
                {
                    "id": "cd-precedence-10",
                    "question": "How does the parser find the left boundary of a handle?",
                    "answer": "From the right boundary, scan back across =· relations to the nearest <· boundary between relevant terminals.",
                    "kind": "theory"
                },
                {
                    "id": "cd-precedence-11",
                    "question": "What precedence relations make left-associative minus and higher-precedence multiplication work?",
                    "answer": "Set minus ·> minus so an earlier subtraction reduces first, and minus <· multiply so multiplication shifts before that subtraction reduces.",
                    "kind": "application"
                },
                {
                    "id": "cd-precedence-12",
                    "question": "For A → B c and B → b, what relation does TRAILING(B) create?",
                    "answer": "b ·> c, since b is in TRAILING(B) and terminal c follows B.",
                    "kind": "application"
                }
            ]
        },
        {
            "id": "lr",
            "module": 2,
            "title": "LR(0), SLR, CLR, LALR and parser comparison",
            "requires": [
                "cd-lr-items",
                "cd-slr",
                "cd-clr",
                "cd-lalr"
            ],
            "cards": [
                {
                    "id": "cd-lr-01",
                    "question": "What does LR stand for?",
                    "answer": "Left-to-right scanning and rightmost derivation in reverse.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-02",
                    "question": "What is an LR(0) item?",
                    "answer": "A production with a dot marking how much of its right-hand side has been recognized.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-03",
                    "question": "Why augment the grammar with S′ → S?",
                    "answer": "It creates one distinguished completed item for acceptance.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-04",
                    "question": "What does LR(0) CLOSURE add when the dot precedes B?",
                    "answer": "Add B → ·γ for every production of B, recursively until nothing changes.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-05",
                    "question": "What does GOTO(I, X) compute?",
                    "answer": "Move the dot over X in every relevant item in I, then take their closure.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-06",
                    "question": "What is the initial canonical LR(0) state?",
                    "answer": "CLOSURE({S′ → ·S}).",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-07",
                    "question": "How do you build the canonical collection of LR states?",
                    "answer": "Apply GOTO to each known state and grammar symbol and add each distinct nonempty resulting item set.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-08",
                    "question": "What labels LR transitions?",
                    "answer": "A grammar symbol, either a terminal or a nonterminal.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-09",
                    "question": "What does the ACTION table index?",
                    "answer": "Parser state and terminal lookahead; it gives shift, reduce, accept or error.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-10",
                    "question": "What does the GOTO table index?",
                    "answer": "Parser state and nonterminal; it gives the state after recognizing that nonterminal.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-11",
                    "question": "How does an LR parser perform a shift?",
                    "answer": "It puts the terminal and the destination state on the stack, then advances input.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-12",
                    "question": "How does an LR parser reduce by A → β?",
                    "answer": "Pop the entries corresponding to β, then push A and GOTO of the exposed state on A.",
                    "kind": "application"
                },
                {
                    "id": "cd-lr-13",
                    "question": "What marks the accept entry in an LR table?",
                    "answer": "The completed augmented item S′ → S· with end marker lookahead.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-14",
                    "question": "Where does a completed ordinary LR(0) item place a reduce action?",
                    "answer": "On all terminal lookaheads, including the end marker.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-15",
                    "question": "How does an SLR table restrict reduce actions?",
                    "answer": "For A → α·, reduce only on terminals in FOLLOW(A).",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-16",
                    "question": "How does SLR differ from LR(0) when constructing states?",
                    "answer": "It uses the same LR(0) item states, but uses FOLLOW sets to restrict reductions.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-17",
                    "question": "Why can SLR still have a conflict even though it uses FOLLOW?",
                    "answer": "FOLLOW(A) covers all grammar contexts, so it can include lookaheads not valid for that particular item state.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-18",
                    "question": "What extra information is in a canonical LR(1) item?",
                    "answer": "An explicit terminal lookahead, which permits reduction on that terminal when the item is complete.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-19",
                    "question": "What lookahead symbols are added in LR(1) closure for [A → α·Bβ, a]?",
                    "answer": "For each B production, use every terminal in FIRST(βa) as a lookahead.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-20",
                    "question": "What does CLR(1) mean?",
                    "answer": "Canonical LR(1), which keeps distinct LR(1) item sets and uses their item-specific lookaheads.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-21",
                    "question": "How does LALR(1) merge states?",
                    "answer": "Merge canonical LR(1) states with the same LR(0) core; union lookaheads on corresponding items.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-22",
                    "question": "What kind of new conflict can a same-core LALR merge introduce?",
                    "answer": "A reduce/reduce conflict that was absent in the original canonical LR(1) states.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-23",
                    "question": "Given [A → α·B c, $], what is the lookahead for a newly added B item?",
                    "answer": "c, because FIRST(c$) contains c.",
                    "kind": "application"
                },
                {
                    "id": "cd-lr-24",
                    "question": "If a completed A item occurs and FOLLOW(A) = {b, $}, where does SLR place reductions?",
                    "answer": "Only in ACTION columns b and $, not for unrelated terminals.",
                    "kind": "application"
                },
                {
                    "id": "cd-lr-25",
                    "question": "What is the usual increasing grammar power among the four methods?",
                    "answer": "LR(0), SLR(1), LALR(1), then canonical LR(1); LALR typically keeps the LR(0) state count.",
                    "kind": "theory"
                }
            ]
        },
        {
            "id": "semantic",
            "module": 3,
            "title": "Semantic analysis, SDD and attributes",
            "requires": [
                "cd-semantic",
                "cd-attributes",
                "cd-sdd-order"
            ],
            "cards": [
                {
                    "id": "cd-semantic-01",
                    "question": "What does semantic analysis check?",
                    "answer": "Meaning constraints beyond grammar, such as declaration, scope, type compatibility and valid operand use.",
                    "kind": "theory"
                },
                {
                    "id": "cd-semantic-02",
                    "question": "What is a syntax-directed definition (SDD)?",
                    "answer": "A grammar with attributes on symbols and semantic rules attached to productions.",
                    "kind": "theory"
                },
                {
                    "id": "cd-semantic-03",
                    "question": "What is a synthesized attribute?",
                    "answer": "A value computed at a node using values available from its descendants or local information.",
                    "kind": "theory"
                },
                {
                    "id": "cd-semantic-04",
                    "question": "What is an inherited attribute?",
                    "answer": "A value supplied to a node from its surrounding context, such as its parent or siblings allowed by the definition.",
                    "kind": "theory"
                },
                {
                    "id": "cd-semantic-05",
                    "question": "What is an attribute dependency graph?",
                    "answer": "A graph with one vertex per attribute occurrence and edges from each used value to the value that depends on it.",
                    "kind": "theory"
                },
                {
                    "id": "cd-semantic-06",
                    "question": "How do you pick a valid attribute evaluation order?",
                    "answer": "Take a topological order of the dependency graph when it is acyclic.",
                    "kind": "theory"
                },
                {
                    "id": "cd-semantic-07",
                    "question": "What is an S-attributed definition?",
                    "answer": "An SDD with only synthesized attributes, normally evaluated bottom-up.",
                    "kind": "theory"
                },
                {
                    "id": "cd-semantic-08",
                    "question": "What is an L-attributed definition?",
                    "answer": "An SDD whose inherited attributes can use parent inherited values and left-sibling attributes, with no cyclic dependency.",
                    "kind": "theory"
                },
                {
                    "id": "cd-semantic-09",
                    "question": "Are all S-attributed definitions L-attributed?",
                    "answer": "Yes; there are no inherited attributes to violate the restrictions.",
                    "kind": "theory"
                },
                {
                    "id": "cd-semantic-10",
                    "question": "How would an SDD propagate a declared type across a comma-separated identifier list?",
                    "answer": "Pass the type to the list as an inherited attribute and use it when recording each identifier.",
                    "kind": "application"
                },
                {
                    "id": "cd-semantic-11",
                    "question": "In E → E₁ + T with E.val = E₁.val + T.val, which values must be available first?",
                    "answer": "E₁.val and T.val. Both dependencies point into E.val.",
                    "kind": "application"
                },
                {
                    "id": "cd-semantic-12",
                    "question": "What is the difference between an SDD and a translation scheme?",
                    "answer": "An SDD specifies attribute rules; a translation scheme embeds semantic actions at explicit positions in productions.",
                    "kind": "theory"
                }
            ]
        },
        {
            "id": "ir",
            "module": 3,
            "title": "Intermediate code representations",
            "requires": [
                "cd-syntax-ir",
                "cd-tac",
                "cd-reps"
            ],
            "cards": [
                {
                    "id": "cd-ir-01",
                    "question": "How does an abstract syntax tree differ from a parse tree?",
                    "answer": "It keeps meaningful operators and operands but omits many grammar nodes and punctuation.",
                    "kind": "theory"
                },
                {
                    "id": "cd-ir-02",
                    "question": "What is postfix notation?",
                    "answer": "An expression representation with each operator after its operands.",
                    "kind": "theory"
                },
                {
                    "id": "cd-ir-03",
                    "question": "What is the advantage of a DAG over a tree for expression representation?",
                    "answer": "A DAG can share a node for a repeated equivalent computation instead of duplicating it.",
                    "kind": "theory"
                },
                {
                    "id": "cd-ir-04",
                    "question": "When is it unsafe to share a repeated-looking expression in a DAG?",
                    "answer": "When its operand values have changed or reusing the computation would change observable effects.",
                    "kind": "theory"
                },
                {
                    "id": "cd-ir-05",
                    "question": "What is three-address code (TAC)?",
                    "answer": "A linear IR with simple operations, typically one operator and up to three addresses per instruction.",
                    "kind": "theory"
                },
                {
                    "id": "cd-ir-06",
                    "question": "What is a temporary in intermediate code?",
                    "answer": "A compiler-created name that holds an intermediate value.",
                    "kind": "theory"
                },
                {
                    "id": "cd-ir-07",
                    "question": "What are common control-flow forms in TAC?",
                    "answer": "Labels, unconditional jumps, conditional jumps, calls and returns.",
                    "kind": "theory"
                },
                {
                    "id": "cd-ir-08",
                    "question": "What are the four fields of a quadruple?",
                    "answer": "Operator, argument 1, argument 2 and result.",
                    "kind": "theory"
                },
                {
                    "id": "cd-ir-09",
                    "question": "How does a triple name a computed result?",
                    "answer": "By the position or identifier of the triple itself, without a separate result field.",
                    "kind": "theory"
                },
                {
                    "id": "cd-ir-10",
                    "question": "How does an indirect triple support reordering?",
                    "answer": "It stores an ordered list of pointers to triples so order can change without changing the referenced triple IDs.",
                    "kind": "theory"
                },
                {
                    "id": "cd-ir-11",
                    "question": "Give postfix notation for a + b * c.",
                    "answer": "a b c * +",
                    "kind": "application"
                },
                {
                    "id": "cd-ir-12",
                    "question": "Write TAC for x = (a + b) * c.",
                    "answer": "t1 = a + b; t2 = t1 * c; x = t2.",
                    "kind": "application"
                },
                {
                    "id": "cd-ir-13",
                    "question": "Which representation is usually easier to reorder, direct triples or quadruples?",
                    "answer": "Quadruples, because instructions refer to explicit result names rather than instruction positions.",
                    "kind": "theory"
                }
            ]
        },
        {
            "id": "optimization",
            "module": 4,
            "title": "Optimization techniques",
            "requires": [
                "cd-optimization",
                "cd-optimization-methods"
            ],
            "cards": [
                {
                    "id": "cd-optimization-01",
                    "question": "What is code optimization?",
                    "answer": "Changing a program representation to improve performance, size or another cost without changing required observable behavior.",
                    "kind": "theory"
                },
                {
                    "id": "cd-optimization-02",
                    "question": "Why can optimization have trade-offs?",
                    "answer": "Improving speed can increase code size or compilation time; optimizing for one target or workload may hurt another.",
                    "kind": "theory"
                },
                {
                    "id": "cd-optimization-03",
                    "question": "What is machine-independent optimization?",
                    "answer": "An improvement expressed over IR without relying on a specific instruction set or register file.",
                    "kind": "theory"
                },
                {
                    "id": "cd-optimization-04",
                    "question": "What is machine-dependent optimization?",
                    "answer": "An improvement relying on target details such as addressing modes, instruction costs or register classes.",
                    "kind": "theory"
                },
                {
                    "id": "cd-optimization-05",
                    "question": "What is local optimization?",
                    "answer": "Optimization within a single basic block.",
                    "kind": "theory"
                },
                {
                    "id": "cd-optimization-06",
                    "question": "What is global optimization?",
                    "answer": "Optimization across basic-block boundaries within a wider region, typically a function.",
                    "kind": "theory"
                },
                {
                    "id": "cd-optimization-08",
                    "question": "What is constant folding?",
                    "answer": "Evaluating a compile-time constant expression during compilation.",
                    "kind": "theory"
                },
                {
                    "id": "cd-optimization-09",
                    "question": "What is constant propagation?",
                    "answer": "Replacing a variable use with its known constant value when the value is the same on every relevant path.",
                    "kind": "theory"
                },
                {
                    "id": "cd-optimization-10",
                    "question": "What is copy propagation?",
                    "answer": "Using the copied source directly where it still holds the same value.",
                    "kind": "theory"
                },
                {
                    "id": "cd-optimization-11",
                    "question": "What is common subexpression elimination?",
                    "answer": "Reusing a previous computation when its operands and behavior still make the result equivalent.",
                    "kind": "theory"
                },
                {
                    "id": "cd-optimization-12",
                    "question": "What is dead code elimination?",
                    "answer": "Removing instructions whose results cannot affect observed behavior, provided evaluation has no required side effects.",
                    "kind": "theory"
                },
                {
                    "id": "cd-optimization-13",
                    "question": "What is unreachable code elimination?",
                    "answer": "Removing blocks that cannot execute from the program entry under the analyzed control flow.",
                    "kind": "theory"
                },
                {
                    "id": "cd-optimization-14",
                    "question": "What is strength reduction?",
                    "answer": "Replacing a costly operation with a cheaper equivalent.",
                    "kind": "theory"
                },
                {
                    "id": "cd-optimization-15",
                    "question": "What is loop-invariant code motion?",
                    "answer": "Moving a computation out of a loop when its value does not change and moving it is safe.",
                    "kind": "theory"
                },
                {
                    "id": "cd-optimization-16",
                    "question": "What does loop unrolling trade for fewer loop-control operations?",
                    "answer": "More code size and potentially greater register pressure.",
                    "kind": "theory"
                },
                {
                    "id": "cd-optimization-17",
                    "question": "What is an induction variable?",
                    "answer": "A value that changes predictably by a fixed amount on each loop iteration.",
                    "kind": "theory"
                },
                {
                    "id": "cd-optimization-18",
                    "question": "Optimize t = 3 * 4 followed by x = t + 1 when t is otherwise unused.",
                    "answer": "Fold 3 * 4 to 12, propagate 12, fold 12 + 1 to 13, and remove the dead assignment to t.",
                    "kind": "application"
                },
                {
                    "id": "cd-optimization-19",
                    "question": "Can a compiler freely delete x = read_input() when x is never read?",
                    "answer": "No. The call can have an observable side effect even when its returned value is dead.",
                    "kind": "application"
                },
                {
                    "id": "cd-optimization-20",
                    "question": "When is replacing integer multiplication by 8 with a left shift valid?",
                    "answer": "When the source and target arithmetic rules make the two equivalent, including width, signedness and overflow behavior.",
                    "kind": "application"
                }
            ]
        },
        {
            "id": "flow-liveness",
            "module": 4,
            "title": "Basic blocks, flow graphs and liveness",
            "requires": [
                "cd-blocks",
                "cd-cfg",
                "cd-liveness"
            ],
            "cards": [
                {
                    "id": "cd-flow-liveness-01",
                    "question": "What is a basic block?",
                    "answer": "A maximal straight-line instruction sequence that can be entered only at its first instruction and has no internal branch.",
                    "kind": "theory"
                },
                {
                    "id": "cd-flow-liveness-02",
                    "question": "What instructions are leaders in standard basic-block construction?",
                    "answer": "The entry instruction, every jump target and every instruction immediately following a jump.",
                    "kind": "theory"
                },
                {
                    "id": "cd-flow-liveness-03",
                    "question": "How is one basic block bounded in the leader algorithm?",
                    "answer": "It begins at a leader and ends immediately before the next leader or at program end.",
                    "kind": "theory"
                },
                {
                    "id": "cd-flow-liveness-04",
                    "question": "What does a control-flow graph represent?",
                    "answer": "Basic blocks are nodes; directed edges represent possible transfers between blocks.",
                    "kind": "theory"
                },
                {
                    "id": "cd-flow-liveness-05",
                    "question": "What successors can the last conditional branch of a block have?",
                    "answer": "Its branch target and, when it exists, the fall-through block.",
                    "kind": "theory"
                },
                {
                    "id": "cd-flow-liveness-06",
                    "question": "What successor does an unconditional jump have?",
                    "answer": "Only its target block, not the next block in the listing.",
                    "kind": "theory"
                },
                {
                    "id": "cd-flow-liveness-07",
                    "question": "What does it mean for a variable to be live at a point?",
                    "answer": "Some path from that point can read its current value before a redefinition.",
                    "kind": "theory"
                },
                {
                    "id": "cd-flow-liveness-08",
                    "question": "Is liveness a forward or backward analysis?",
                    "answer": "Backward: a later use can make a value live at an earlier point.",
                    "kind": "theory"
                },
                {
                    "id": "cd-flow-liveness-09",
                    "question": "Why is liveness often called a may analysis?",
                    "answer": "A value is live if it may be read along any possible path before being overwritten.",
                    "kind": "theory"
                },
                {
                    "id": "cd-flow-liveness-10",
                    "question": "What is USE[B] in block liveness?",
                    "answer": "Variables read in B before any local definition of that variable.",
                    "kind": "theory"
                },
                {
                    "id": "cd-flow-liveness-11",
                    "question": "What is DEF[B] in block liveness?",
                    "answer": "Variables assigned values in block B; they kill propagation of the corresponding incoming values through the block.",
                    "kind": "theory"
                },
                {
                    "id": "cd-flow-liveness-12",
                    "question": "State the standard block liveness equations.",
                    "answer": "OUT[B] = union of IN[S] for successors S. IN[B] = USE[B] union (OUT[B] − DEF[B]).",
                    "kind": "application"
                },
                {
                    "id": "cd-flow-liveness-13",
                    "question": "If USE[B]={a}, DEF[B]={b} and OUT[B]={b,c}, what is IN[B]?",
                    "answer": "{a,c}; B uses a and its definition of b kills the incoming b value.",
                    "kind": "application"
                },
                {
                    "id": "cd-flow-liveness-14",
                    "question": "If a branch can go to successors live-in {x} and {y}, what is OUT[B]?",
                    "answer": "{x,y}. Liveness joins alternative successor paths by union.",
                    "kind": "application"
                },
                {
                    "id": "cd-flow-liveness-15",
                    "question": "How does the compiler solve liveness on a graph with loops?",
                    "answer": "It repeatedly recomputes IN and OUT until the sets stop changing.",
                    "kind": "theory"
                }
            ]
        },
        {
            "id": "codegen",
            "module": 4,
            "title": "Code generator design and algorithms",
            "requires": [
                "cd-codegen-design",
                "cd-codegen-algorithm"
            ],
            "cards": [
                {
                    "id": "cd-codegen-01",
                    "question": "What is the code generator’s primary task?",
                    "answer": "Translate IR into correct target assembly or machine code while choosing efficient instructions and resources.",
                    "kind": "theory"
                },
                {
                    "id": "cd-codegen-02",
                    "question": "How do instruction selection and instruction scheduling differ?",
                    "answer": "Selection chooses target operations; scheduling orders operations while respecting dependencies and target constraints.",
                    "kind": "theory"
                },
                {
                    "id": "cd-codegen-03",
                    "question": "What is register allocation?",
                    "answer": "Choosing which live values occupy registers and which must stay in memory.",
                    "kind": "theory"
                },
                {
                    "id": "cd-codegen-04",
                    "question": "How does register assignment differ from allocation?",
                    "answer": "Allocation decides which values should get registers; assignment chooses their specific physical registers.",
                    "kind": "theory"
                },
                {
                    "id": "cd-codegen-05",
                    "question": "What is register spilling?",
                    "answer": "Saving a value to memory when it cannot remain in a register, then reloading it when needed.",
                    "kind": "theory"
                },
                {
                    "id": "cd-codegen-06",
                    "question": "What does a register descriptor record?",
                    "answer": "Which program values currently have valid copies in a particular register.",
                    "kind": "theory"
                },
                {
                    "id": "cd-codegen-07",
                    "question": "What does an address descriptor record?",
                    "answer": "Which registers or memory locations currently contain a valid copy of a given value.",
                    "kind": "theory"
                },
                {
                    "id": "cd-codegen-08",
                    "question": "Why is next-use information useful?",
                    "answer": "It identifies values needed soon and values with no later use in the block, guiding register reuse and spills.",
                    "kind": "theory"
                },
                {
                    "id": "cd-codegen-09",
                    "question": "When may a simple generator reuse an operand register without saving it?",
                    "answer": "When overwriting it cannot destroy the only needed copy of a live value.",
                    "kind": "application"
                },
                {
                    "id": "cd-codegen-10",
                    "question": "What should the generator arrange before leaving a block?",
                    "answer": "Values needed later must be available at the agreed locations; a simple scheme stores live-out values that lack a valid memory copy.",
                    "kind": "theory"
                },
                {
                    "id": "cd-codegen-11",
                    "question": "Why do target addressing modes matter?",
                    "answer": "They determine which operands can be loaded, stored or combined directly and affect instruction count.",
                    "kind": "theory"
                },
                {
                    "id": "cd-codegen-12",
                    "question": "Generate simple load/store instructions for x = a + b when both sources begin in memory.",
                    "answer": "LOAD R1, a; LOAD R2, b; ADD R1, R1, R2; STORE x, R1. A target with an allowed memory operand may need fewer instructions.",
                    "kind": "application"
                },
                {
                    "id": "cd-codegen-13",
                    "question": "One register holds dead t and another holds live y with no current memory copy. Which should get the new temporary?",
                    "answer": "Reuse t’s register; it avoids saving a value that is no longer needed and preserves y.",
                    "kind": "application"
                }
            ]
        }
    ],
    "quick": [
        {
            "id": "cd-quick-01",
            "module": 1,
            "question": "What are the main compiler phases?",
            "answer": "Lexical analysis, syntax analysis, semantic analysis, IR generation, optimization and target code generation.",
            "kind": "theory"
        },
        {
            "id": "cd-quick-02",
            "module": 1,
            "question": "When does a nullable alternative use FOLLOW in an LL(1) table?",
            "answer": "If A → α and α derives ε, add it to the cells for terminals in FOLLOW(A).",
            "kind": "theory"
        },
        {
            "id": "cd-quick-03",
            "module": 3,
            "question": "How do synthesized and inherited attributes differ?",
            "answer": "Synthesized values are computed upward; inherited values are passed to a node from its context.",
            "kind": "theory"
        },
        {
            "id": "cd-quick-04",
            "module": 2,
            "question": "What makes a substring the handle?",
            "answer": "Reducing that exact occurrence reverses the next step of the rightmost derivation.",
            "kind": "theory"
        },
        {
            "id": "cd-quick-05",
            "module": 2,
            "question": "Which operator-precedence relations mean shift or reduce?",
            "answer": "Shift on <· or =·; reduce on ·>.",
            "kind": "theory"
        },
        {
            "id": "cd-quick-06",
            "module": 2,
            "question": "How do LR(0), SLR and CLR choose reduction lookaheads?",
            "answer": "LR(0) uses every terminal, SLR uses FOLLOW of the production's left side, and CLR uses the completed item's explicit lookahead.",
            "kind": "theory"
        },
        {
            "id": "cd-quick-07",
            "module": 2,
            "question": "What does LALR merge?",
            "answer": "Canonical LR(1) states with the same LR(0) core; corresponding lookahead sets are combined.",
            "kind": "theory"
        },
        {
            "id": "cd-quick-08",
            "module": 4,
            "question": "How do you find leaders when partitioning basic blocks?",
            "answer": "Mark the first instruction, each jump target, and each instruction immediately following a jump.",
            "kind": "theory"
        },
        {
            "id": "cd-quick-09",
            "module": 4,
            "question": "What equations express block liveness?",
            "answer": "OUT[B] = union of successor IN sets; IN[B] = USE[B] ∪ (OUT[B] − DEF[B]).",
            "kind": "theory"
        },
        {
            "id": "cd-quick-10",
            "module": 4,
            "question": "What is the difference between a register descriptor and an address descriptor?",
            "answer": "A register descriptor maps a register to values it holds; an address descriptor maps a value to places holding a valid copy.",
            "kind": "theory"
        }
    ],
    "concepts": [
        {
            "id": "cd-fundamentals",
            "module": 1,
            "syllabus": "1.1",
            "title": "System software and translators",
            "note": "System software runs or supports the computing platform; application software serves end-user tasks. An assembler converts symbolic machine instructions; a compiler emits a target program; an interpreter carries out the source program's behavior.",
            "checklist": [
                "Compare system and application software",
                "Distinguish assembler, compiler and interpreter"
            ]
        },
        {
            "id": "cd-phases",
            "module": 1,
            "syllabus": "1.2",
            "title": "Compiler phases",
            "note": "Text → tokens → syntax tree → semantically checked tree → IR → optimized IR → target code. The symbol table and diagnostic machinery support several phases. A phase is a logical job, not necessarily a distinct pass.",
            "checklist": [
                "Trace the compiler pipeline",
                "Distinguish a phase from a pass",
                "Identify where typical errors are caught"
            ]
        },
        {
            "id": "cd-tokens",
            "module": 1,
            "syllabus": "1.3,1.4",
            "title": "Lexical analysis and tokens",
            "note": "Regular expressions specify token patterns. A scanner groups actual lexemes into token categories, normally taking the longest match and breaking ties by priority.",
            "checklist": [
                "Identify token, pattern and lexeme",
                "Apply longest match and rule priority"
            ]
        },
        {
            "id": "cd-automata",
            "module": 1,
            "syllabus": "1.3",
            "title": "Finite-state recognition",
            "note": "Convert a regular expression to an NFA, build a DFA by subset construction, and scan until no transition is possible. Track the latest accepting position to implement longest match.",
            "checklist": [
                "Recognize accepting states",
                "Explain NFA versus DFA",
                "Trace a matched prefix"
            ]
        },
        {
            "id": "cd-symbols",
            "module": 1,
            "syllabus": "1.4",
            "title": "Lex/Flex and symbol tables",
            "note": "Lex/Flex scans with regular-expression rules and user actions. A symbol table maps identifiers to bindings and records attributes such as scope and type; the scanner and later compiler phases may update or consult it.",
            "checklist": [
                "Explain scanner rules and actions",
                "Identify common symbol attributes",
                "Explain scope-sensitive lookup"
            ]
        },
        {
            "id": "cd-top-down",
            "module": 1,
            "syllabus": "1.5",
            "title": "Recursive descent and grammar transformations",
            "note": "A predictive parser chooses productions without backtracking. Eliminate left recursion to avoid a same-position recursive call. Left-factor a shared prefix so lookahead can decide after it is consumed.",
            "checklist": [
                "Convert immediate left recursion",
                "Left-factor a grammar",
                "Sketch one routine per nonterminal"
            ]
        },
        {
            "id": "cd-first-follow",
            "module": 1,
            "syllabus": "1.5",
            "title": "FIRST, FOLLOW and nullable",
            "note": "FIRST(X) describes possible first terminals and includes ε if X is nullable. In A → αBβ, add FIRST(β) except ε to FOLLOW(B); if β is nullable, add FOLLOW(A). Start-symbol FOLLOW includes $.",
            "checklist": [
                "Compute nullable for symbol sequences",
                "Compute FIRST and FOLLOW to a fixed point"
            ]
        },
        {
            "id": "cd-ll-table",
            "module": 1,
            "syllabus": "1.5",
            "title": "Predictive LL(1) table",
            "note": "For A → α, place the production under each terminal in FIRST(α). If α is nullable, use FOLLOW(A) as well. A duplicate cell indicates that this grammar is not LL(1).",
            "checklist": [
                "Fill a predictive parsing table",
                "Trace stack, lookahead and action",
                "Recognize a conflicting cell"
            ]
        },
        {
            "id": "cd-bottom-up",
            "module": 2,
            "syllabus": "2.1",
            "title": "Bottom-up derivation",
            "note": "Start with the input and combine recognized phrases into larger nonterminals. The reductions reverse a rightmost derivation and stop when the start symbol is recognized.",
            "checklist": [
                "Reverse a rightmost derivation",
                "Distinguish top-down and bottom-up construction"
            ]
        },
        {
            "id": "cd-handles",
            "module": 2,
            "syllabus": "2.1",
            "title": "Handles and viable prefixes",
            "note": "A handle is the occurrence of a production right-hand side that can be reduced to reverse the current rightmost-derivation step. A viable prefix does not extend beyond the handle's right edge.",
            "checklist": [
                "Identify the next handle in a trace",
                "Explain why matching RHS text alone is insufficient"
            ]
        },
        {
            "id": "cd-shift-reduce",
            "module": 2,
            "syllabus": "2.2",
            "title": "Shift-reduce parsing",
            "note": "Shift pushes input; reduce replaces the handle at the stack top with its left-hand nonterminal. Accept marks success. An empty or conflicting table entry requires detection or a specified resolution.",
            "checklist": [
                "Trace shifts and reductions",
                "Recognize shift/reduce and reduce/reduce conflict"
            ]
        },
        {
            "id": "cd-leading-trailing",
            "module": 2,
            "syllabus": "2.1",
            "title": "LEADING and TRAILING",
            "note": "LEADING and TRAILING collect first/last terminals in derivable sentential forms, allowing one nonterminal at the same edge. They are often called FIRSTVT and LASTVT and aren't the same as FIRST/FOLLOW.",
            "checklist": [
                "Compute both sets using grammar productions",
                "Distinguish LEADING from FIRST"
            ]
        },
        {
            "id": "cd-precedence-table",
            "module": 2,
            "syllabus": "2.1",
            "title": "Precedence relations and parsing table",
            "note": "Between adjacent terminals, or terminals separated by one nonterminal, add =·. Use terminal-before-nonterminal plus LEADING for <·, and TRAILING plus terminal-after-nonterminal for ·>. Shift on <· or =· and reduce on ·>.",
            "checklist": [
                "Build a terminal-pair table",
                "Trace handle boundaries",
                "Identify conflicting relations"
            ]
        },
        {
            "id": "cd-lr-items",
            "module": 2,
            "syllabus": "2.2",
            "title": "LR item sets, CLOSURE and GOTO",
            "note": "An LR(0) item adds a dot to a production. CLOSURE adds possible starts after a nonterminal; GOTO moves the dot over a symbol and closes the result. Explore all reachable sets to build the state graph.",
            "checklist": [
                "Augment a grammar",
                "Construct I₀ with CLOSURE",
                "Compute GOTO and a state graph"
            ]
        },
        {
            "id": "cd-slr",
            "module": 2,
            "syllabus": "2.2",
            "title": "LR(0) and SLR parsing tables",
            "note": "Terminal transitions create shifts; nonterminal transitions populate GOTO. A completed LR(0) item reduces on all lookaheads; SLR instead reduces on FOLLOW of its left-hand side. The completed augmented item accepts on $.",
            "checklist": [
                "Fill LR(0) and SLR ACTION/GOTO",
                "Compare reduction columns",
                "Recognize table conflicts"
            ]
        },
        {
            "id": "cd-clr",
            "module": 2,
            "syllabus": "2.2",
            "title": "Canonical LR(1) tables",
            "note": "Canonical LR(1) items carry explicit lookaheads. For [A → α·Bβ, a], closure gives new B items lookaheads from FIRST(βa). A completed item reduces only on its own lookaheads.",
            "checklist": [
                "Compute closure lookaheads",
                "Construct canonical states",
                "Place item-specific reductions"
            ]
        },
        {
            "id": "cd-lalr",
            "module": 2,
            "syllabus": "2.2",
            "title": "LALR merging and parser comparison",
            "note": "Merge canonical states with matching LR(0) cores and union corresponding lookaheads. This reduces table size but may create reduce/reduce conflicts. LR(0), SLR, LALR and CLR trade table size against recognition power.",
            "checklist": [
                "Merge same-core states",
                "Check new conflicts",
                "Compare table size and grammar power"
            ]
        },
        {
            "id": "cd-semantic",
            "module": 3,
            "syllabus": "3.1",
            "title": "Semantic analysis and SDD",
            "note": "Semantic analysis checks declarations, visibility and type rules. A syntax-directed definition associates attributes with grammar symbols and equations with productions.",
            "checklist": [
                "Distinguish syntax and semantic errors",
                "Read a semantic rule",
                "Identify information needed for type checking"
            ]
        },
        {
            "id": "cd-attributes",
            "module": 3,
            "syllabus": "3.1",
            "title": "Synthesized and inherited attributes",
            "note": "Synthesized values move results up from a node's children. Inherited values provide information from surrounding context, such as a type propagated into an identifier list.",
            "checklist": [
                "Classify each attribute direction",
                "Trace type propagation",
                "Trace expression value synthesis"
            ]
        },
        {
            "id": "cd-sdd-order",
            "module": 3,
            "syllabus": "3.2",
            "title": "SDD evaluation order",
            "note": "Connect each used attribute to the attribute that depends on it. An acyclic dependency graph admits a topological evaluation order. S-attributed definitions can run bottom-up; L-attributed ones admit left-to-right depth-first evaluation.",
            "checklist": [
                "Build an attribute dependency graph",
                "Pick a valid evaluation order",
                "Distinguish S-attributed and L-attributed"
            ]
        },
        {
            "id": "cd-syntax-ir",
            "module": 3,
            "syllabus": "3.3",
            "title": "Syntax trees, postfix and DAGs",
            "note": "A syntax tree retains essential operators and operands. Postfix follows postorder for expression trees. A DAG may share a repeated safe computation when operands still have the same values.",
            "checklist": [
                "Convert expressions to postfix",
                "Build a syntax tree",
                "Share a common subexpression safely"
            ]
        },
        {
            "id": "cd-tac",
            "module": 3,
            "syllabus": "3.3",
            "title": "Three-address code",
            "note": "Lower complex expressions into simple assignments with temporaries. Represent control flow using labels and conditional/unconditional jumps.",
            "checklist": [
                "Generate TAC for a nested expression",
                "Generate a branch and a label"
            ]
        },
        {
            "id": "cd-reps",
            "module": 3,
            "syllabus": "3.3",
            "title": "Triples, quadruples and indirect triples",
            "note": "Quadruples explicitly name the result; triples refer to another triple for its result; indirect triples separate execution order from stable triple positions.",
            "checklist": [
                "Convert TAC to each representation",
                "Explain which representations ease reordering"
            ]
        },
        {
            "id": "cd-optimization",
            "module": 4,
            "syllabus": "4.1",
            "title": "Optimization goals and scope",
            "note": "Optimization keeps observable behavior while changing runtime, size or related costs. Machine-independent optimization operates on IR; machine-dependent optimization relies on the target. Local optimization stays within a block; global optimization crosses blocks.",
            "checklist": [
                "Compare machine-dependent and machine-independent changes",
                "Distinguish local and global scope",
                "Check side effects"
            ]
        },
        {
            "id": "cd-optimization-methods",
            "module": 4,
            "syllabus": "4.1",
            "title": "Common optimization techniques",
            "note": "Fold constants, propagate known values, reuse a common expression when safe, and eliminate genuinely dead operations. Loop optimizations include safe invariant motion and induction-variable strength reduction.",
            "checklist": [
                "Apply folding and propagation",
                "Find a safe common expression",
                "Identify invariant, dead and unreachable operations"
            ]
        },
        {
            "id": "cd-blocks",
            "module": 4,
            "syllabus": "4.2",
            "title": "Basic blocks and leaders",
            "note": "Mark the first instruction, jump targets and instructions immediately after jumps as leaders. Each block extends until just before the next leader.",
            "checklist": [
                "Mark all leaders",
                "Partition a numbered instruction list"
            ]
        },
        {
            "id": "cd-cfg",
            "module": 4,
            "syllabus": "4.2",
            "title": "Control-flow graphs",
            "note": "Draw one node per basic block. Conditional branches normally add target and fall-through edges; unconditional branches add just their targets. A return has no ordinary successor inside that function.",
            "checklist": [
                "Draw fall-through and branch edges",
                "Identify unreachable blocks"
            ]
        },
        {
            "id": "cd-liveness",
            "module": 4,
            "syllabus": "4.3",
            "title": "Liveness analysis",
            "note": "A value is live if a future use can occur before redefinition. Work backward to a fixed point: OUT[B] is union of successor IN sets; IN[B] = USE[B] ∪ (OUT[B] − DEF[B]).",
            "checklist": [
                "Compute USE and DEF",
                "Evaluate IN/OUT sets",
                "Repeat through loops until stable"
            ]
        },
        {
            "id": "cd-codegen-design",
            "module": 4,
            "syllabus": "4.4",
            "title": "Code-generator design",
            "note": "Instruction selection picks target operations; register allocation and assignment control register use; scheduling orders instructions subject to dependencies. Addressing modes and calling conventions constrain legal code.",
            "checklist": [
                "Compare instruction selection, allocation and scheduling",
                "Explain spill costs and target constraints"
            ]
        },
        {
            "id": "cd-codegen-algorithm",
            "module": 4,
            "syllabus": "4.4",
            "title": "Simple code-generation algorithm",
            "note": "Track register and address descriptors. For each TAC instruction, find a register, load operands as needed, emit the target operation, update descriptors, and arrange needed live-out values before a block exit.",
            "checklist": [
                "Trace LOAD, operation and STORE",
                "Update descriptors",
                "Choose a register using next use"
            ]
        }
    ]
};

"use strict";
const compilerRows = [
    {
        "id": "cd-m3-l01",
        "subjectId": "cd",
        "moduleId": "cd-m3",
        "syllabusRef": "3.1",
        "title": "Semantic analysis and syntax-directed translation",
        "educator": "Gate Smashers",
        "videoId": "_CloXDbYAAg",
        "watchUrl": "https://www.youtube.com/watch?v=_CloXDbYAAg",
        "durationSeconds": 391,
        "conceptIds": [
            "cd-semantic"
        ],
        "coverage": [
            "Semantic analysis",
            "Syntax-directed translation"
        ],
        "verificationStatus": "player-duration-observed-playback-unverified",
        "verificationDate": "2026-11-27",
        "playback": {
            "watch": "unverified",
            "embed": "unverified"
        },
        "evidence": {
            "video": "https://www.youtube.com/watch?v=_CloXDbYAAg",
            "duration": "https://www.youtube.com/watch?v=_CloXDbYAAg",
            "coverageSource": "SAKEC AY 2026–27 Semester V Compiler Design MSE syllabus, Module 3",
            "durationStatus": "duration-shown-by-embedded-youtube-player",
            "embedAudit": "Player controls and runtime loaded; actual timestamp advancement was not observed."
        }
    },
    {
        "id": "cd-m3-l02",
        "subjectId": "cd",
        "moduleId": "cd-m3",
        "syllabusRef": "3.1",
        "title": "Syntax-directed definitions and attribute types",
        "educator": "Sundeep Saradhi Kanthety",
        "videoId": "mEvuQkt6Idc",
        "watchUrl": "https://www.youtube.com/watch?v=mEvuQkt6Idc",
        "durationSeconds": 1611,
        "conceptIds": [
            "cd-attributes"
        ],
        "coverage": [
            "Syntax-directed definitions",
            "Synthesized and inherited attributes"
        ],
        "verificationStatus": "player-duration-observed-playback-unverified",
        "verificationDate": "2026-11-27",
        "playback": {
            "watch": "unverified",
            "embed": "unverified"
        },
        "evidence": {
            "video": "https://www.youtube.com/watch?v=mEvuQkt6Idc",
            "coverageSource": "SAKEC AY 2026–27 Semester V Compiler Design MSE syllabus, Module 3",
            "duration": "https://www.youtube.com/watch?v=mEvuQkt6Idc",
            "durationStatus": "duration-shown-by-embedded-youtube-player",
            "embedAudit": "Player controls and runtime loaded; actual timestamp advancement was not observed."
        }
    },
    {
        "id": "cd-m3-l03",
        "subjectId": "cd",
        "moduleId": "cd-m3",
        "syllabusRef": "3.2",
        "title": "S-attributed and L-attributed definitions",
        "educator": "Gate Smashers",
        "videoId": "w03voSY4REs",
        "watchUrl": "https://www.youtube.com/watch?v=w03voSY4REs",
        "durationSeconds": 611,
        "conceptIds": [
            "cd-sdd-order"
        ],
        "coverage": [
            "S-attributed definitions",
            "L-attributed definitions"
        ],
        "verificationStatus": "player-duration-observed-playback-unverified",
        "verificationDate": "2026-11-27",
        "playback": {
            "watch": "unverified",
            "embed": "unverified"
        },
        "evidence": {
            "video": "https://www.youtube.com/watch?v=w03voSY4REs",
            "duration": "https://www.youtube.com/watch?v=w03voSY4REs",
            "coverageSource": "SAKEC AY 2026–27 Semester V Compiler Design MSE syllabus, Module 3",
            "durationStatus": "duration-shown-by-embedded-youtube-player",
            "embedAudit": "Player controls and runtime loaded; actual timestamp advancement was not observed."
        }
    },
    {
        "id": "cd-m3-l04",
        "subjectId": "cd",
        "moduleId": "cd-m3",
        "syllabusRef": "3.2",
        "title": "SDD evaluation order: dependency graph example",
        "educator": "Sundeep Saradhi Kanthety",
        "videoId": "xnQfcZWCvJI",
        "watchUrl": "https://www.youtube.com/watch?v=xnQfcZWCvJI",
        "durationSeconds": 935,
        "conceptIds": [
            "cd-sdd-order"
        ],
        "coverage": [
            "Attribute dependency graph",
            "Topological evaluation order"
        ],
        "verificationStatus": "player-duration-observed-playback-unverified",
        "verificationDate": "2026-11-27",
        "playback": {
            "watch": "unverified",
            "embed": "unverified"
        },
        "evidence": {
            "video": "https://www.youtube.com/watch?v=xnQfcZWCvJI",
            "coverageSource": "SAKEC AY 2026–27 Semester V Compiler Design MSE syllabus, Module 3",
            "duration": "https://www.youtube.com/watch?v=xnQfcZWCvJI",
            "durationStatus": "duration-shown-by-embedded-youtube-player",
            "watchAudit": "Signed-out watch page loaded; pre-roll clock did not advance to lecture content.",
            "embedAudit": "Player controls and runtime loaded; actual timestamp advancement was not observed."
        }
    },
    {
        "id": "cd-m3-l05",
        "subjectId": "cd",
        "moduleId": "cd-m3",
        "syllabusRef": "3.3",
        "title": "Intermediate code: syntax trees and postfix notation",
        "educator": "University Academy",
        "videoId": "4XwgPnDCpqo",
        "watchUrl": "https://www.youtube.com/watch?v=4XwgPnDCpqo",
        "durationSeconds": 798,
        "conceptIds": [
            "cd-syntax-ir"
        ],
        "coverage": [
            "Intermediate code generation",
            "Syntax trees",
            "Postfix notation"
        ],
        "verificationStatus": "player-duration-observed-playback-unverified",
        "verificationDate": "2026-11-27",
        "playback": {
            "watch": "unverified",
            "embed": "unverified"
        },
        "evidence": {
            "video": "https://www.youtube.com/watch?v=4XwgPnDCpqo",
            "coverageSource": "SAKEC AY 2026–27 Semester V Compiler Design MSE syllabus, Module 3",
            "duration": "https://www.youtube.com/watch?v=4XwgPnDCpqo",
            "durationStatus": "duration-shown-by-embedded-youtube-player",
            "embedAudit": "Player controls and runtime loaded; actual timestamp advancement was not observed."
        }
    },
    {
        "id": "cd-m3-l06",
        "subjectId": "cd",
        "moduleId": "cd-m3",
        "syllabusRef": "3.3",
        "title": "Expression DAGs with examples",
        "educator": "Sundeep Saradhi Kanthety",
        "videoId": "g0N4hWd7BpE",
        "watchUrl": "https://www.youtube.com/watch?v=g0N4hWd7BpE",
        "durationSeconds": 824,
        "conceptIds": [
            "cd-syntax-ir"
        ],
        "coverage": [
            "DAG construction",
            "Repeated subexpressions"
        ],
        "verificationStatus": "player-duration-observed-playback-unverified",
        "verificationDate": "2026-11-27",
        "playback": {
            "watch": "unverified",
            "embed": "unverified"
        },
        "evidence": {
            "video": "https://www.youtube.com/watch?v=g0N4hWd7BpE",
            "coverageSource": "SAKEC AY 2026–27 Semester V Compiler Design MSE syllabus, Module 3",
            "duration": "https://www.youtube.com/watch?v=g0N4hWd7BpE",
            "durationStatus": "duration-shown-by-embedded-youtube-player",
            "embedAudit": "Player controls and runtime loaded; actual timestamp advancement was not observed."
        }
    },
    {
        "id": "cd-m3-l07",
        "subjectId": "cd",
        "moduleId": "cd-m3",
        "syllabusRef": "3.3",
        "title": "Three-address code",
        "educator": "Gate Smashers",
        "videoId": "tJUYVGDn0JE",
        "watchUrl": "https://www.youtube.com/watch?v=tJUYVGDn0JE",
        "durationSeconds": 316,
        "conceptIds": [
            "cd-tac"
        ],
        "coverage": [
            "Three-address instructions",
            "Temporaries"
        ],
        "verificationStatus": "player-duration-observed-playback-unverified",
        "verificationDate": "2026-11-27",
        "playback": {
            "watch": "unverified",
            "embed": "unverified"
        },
        "evidence": {
            "video": "https://www.youtube.com/watch?v=tJUYVGDn0JE",
            "duration": "https://www.youtube.com/watch?v=tJUYVGDn0JE",
            "coverageSource": "SAKEC AY 2026–27 Semester V Compiler Design MSE syllabus, Module 3",
            "durationStatus": "duration-shown-by-embedded-youtube-player",
            "embedAudit": "Player controls and runtime loaded; actual timestamp advancement was not observed."
        }
    },
    {
        "id": "cd-m3-l08",
        "subjectId": "cd",
        "moduleId": "cd-m3",
        "syllabusRef": "3.3",
        "title": "Quadruples, triples and indirect triples",
        "educator": "Sundeep Saradhi Kanthety",
        "videoId": "sp9wiCgar_I",
        "watchUrl": "https://www.youtube.com/watch?v=sp9wiCgar_I",
        "durationSeconds": 813,
        "conceptIds": [
            "cd-reps"
        ],
        "coverage": [
            "Quadruples",
            "Triples",
            "Indirect triples"
        ],
        "verificationStatus": "player-duration-observed-playback-unverified",
        "verificationDate": "2026-11-27",
        "playback": {
            "watch": "unverified",
            "embed": "unverified"
        },
        "evidence": {
            "video": "https://www.youtube.com/watch?v=sp9wiCgar_I",
            "coverageSource": "SAKEC AY 2026–27 Semester V Compiler Design MSE syllabus, Module 3",
            "duration": "https://www.youtube.com/watch?v=sp9wiCgar_I",
            "durationStatus": "duration-shown-by-embedded-youtube-player",
            "embedAudit": "Player controls and runtime loaded; actual timestamp advancement was not observed."
        }
    },
    {
        "id": "cd-m2-l01",
        "subjectId": "cd",
        "moduleId": "cd-m2",
        "syllabusRef": "2.1",
        "title": "Bottom-up parsing introduction",
        "educator": "Sudhakar Atchala",
        "videoId": "RGyzJUM4V0c",
        "watchUrl": "https://www.youtube.com/watch?v=RGyzJUM4V0c",
        "durationSeconds": 809,
        "conceptIds": [
            "cd-bottom-up"
        ],
        "coverage": [
            "Bottom-up parsing",
            "Top-down vs bottom-up"
        ],
        "verificationStatus": "player-duration-observed-playback-unverified",
        "verificationDate": "2026-11-27",
        "playback": {
            "watch": "unverified",
            "embed": "unverified"
        },
        "evidence": {
            "video": "https://www.youtube.com/watch?v=RGyzJUM4V0c",
            "duration": "https://www.syncstudy.in/course/PLXj4XH7LcRfC9pGMWuM6UWE3V4YZ9TZzM",
            "durationStatus": "playlist-indexed-not-player-measured",
            "coverageStatus": "title-description-mapped-not-watch-verified",
            "idStatus": "matched-official-youtube-upload-metadata",
            "indexedDurationSeconds": 810,
            "playerDurationSeconds": 809,
            "browserAudit": "Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser."
        }
    },
    {
        "id": "cd-m2-l02",
        "subjectId": "cd",
        "moduleId": "cd-m2",
        "syllabusRef": "2.1",
        "title": "Handle and handle pruning",
        "educator": "Sudhakar Atchala",
        "videoId": "MWb18JwEkQo",
        "watchUrl": "https://www.youtube.com/watch?v=MWb18JwEkQo",
        "durationSeconds": 715,
        "conceptIds": [
            "cd-handles"
        ],
        "coverage": [
            "Handle",
            "Handle pruning"
        ],
        "verificationStatus": "player-duration-observed-playback-unverified",
        "verificationDate": "2026-11-27",
        "playback": {
            "watch": "unverified",
            "embed": "unverified"
        },
        "evidence": {
            "video": "https://www.youtube.com/watch?v=MWb18JwEkQo",
            "duration": "https://www.syncstudy.in/course/PLXj4XH7LcRfC9pGMWuM6UWE3V4YZ9TZzM",
            "durationStatus": "playlist-indexed-not-player-measured",
            "coverageStatus": "title-description-mapped-not-watch-verified",
            "idStatus": "matched-official-youtube-upload-metadata",
            "indexedDurationSeconds": 716,
            "playerDurationSeconds": 715,
            "browserAudit": "Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser."
        }
    },
    {
        "id": "cd-m2-l03",
        "subjectId": "cd",
        "moduleId": "cd-m2",
        "syllabusRef": "2.2",
        "title": "Shift-reduce parsing with example",
        "educator": "Sudhakar Atchala",
        "videoId": "Ha6eSb9Dgh0",
        "watchUrl": "https://www.youtube.com/watch?v=Ha6eSb9Dgh0",
        "durationSeconds": 605,
        "conceptIds": [
            "cd-shift-reduce"
        ],
        "coverage": [
            "Shift",
            "Reduce",
            "Worked parsing example"
        ],
        "verificationStatus": "player-duration-observed-playback-unverified",
        "verificationDate": "2026-11-27",
        "playback": {
            "watch": "unverified",
            "embed": "unverified"
        },
        "evidence": {
            "video": "https://www.youtube.com/watch?v=Ha6eSb9Dgh0",
            "duration": "https://www.syncstudy.in/course/PLXj4XH7LcRfC9pGMWuM6UWE3V4YZ9TZzM",
            "durationStatus": "playlist-indexed-not-player-measured",
            "coverageStatus": "title-description-mapped-not-watch-verified",
            "idStatus": "brief-supplied-not-independently-retrieved",
            "playerDurationSeconds": 605,
            "browserAudit": "Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser."
        }
    },
    {
        "id": "cd-m2-l04",
        "subjectId": "cd",
        "moduleId": "cd-m2",
        "syllabusRef": "2.1",
        "title": "LEADING and TRAILING",
        "educator": "Sudhakar Atchala",
        "videoId": "vXIIcRCS7kY",
        "watchUrl": "https://www.youtube.com/watch?v=vXIIcRCS7kY",
        "durationSeconds": 524,
        "conceptIds": [
            "cd-leading-trailing"
        ],
        "coverage": [
            "LEADING",
            "TRAILING"
        ],
        "verificationStatus": "player-duration-observed-playback-unverified",
        "verificationDate": "2026-11-27",
        "playback": {
            "watch": "unverified",
            "embed": "unverified"
        },
        "evidence": {
            "video": "https://www.youtube.com/watch?v=vXIIcRCS7kY",
            "duration": "https://www.syncstudy.in/course/PLXj4XH7LcRfC9pGMWuM6UWE3V4YZ9TZzM",
            "durationStatus": "playlist-indexed-not-player-measured",
            "coverageStatus": "title-description-mapped-not-watch-verified",
            "idStatus": "matched-official-youtube-upload-metadata",
            "playerDurationSeconds": 524,
            "browserAudit": "Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser."
        }
    },
    {
        "id": "cd-m2-l05",
        "subjectId": "cd",
        "moduleId": "cd-m2",
        "syllabusRef": "2.1",
        "title": "Operator precedence parser",
        "educator": "Sudhakar Atchala",
        "videoId": "6Wh1Mbup-ac",
        "watchUrl": "https://www.youtube.com/watch?v=6Wh1Mbup-ac",
        "durationSeconds": 878,
        "conceptIds": [
            "cd-precedence-table"
        ],
        "coverage": [
            "Precedence relations",
            "Operator precedence parsing"
        ],
        "verificationStatus": "player-duration-observed-playback-unverified",
        "verificationDate": "2026-11-27",
        "playback": {
            "watch": "unverified",
            "embed": "unverified"
        },
        "evidence": {
            "video": "https://www.youtube.com/watch?v=6Wh1Mbup-ac",
            "duration": "https://www.syncstudy.in/course/PLXj4XH7LcRfC9pGMWuM6UWE3V4YZ9TZzM",
            "durationStatus": "playlist-indexed-not-player-measured",
            "coverageStatus": "title-description-mapped-not-watch-verified",
            "idStatus": "brief-supplied-not-independently-retrieved",
            "playerDurationSeconds": 878,
            "browserAudit": "Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser."
        }
    },
    {
        "id": "cd-m2-l06",
        "subjectId": "cd",
        "moduleId": "cd-m2",
        "syllabusRef": "2.1",
        "title": "Operator precedence solved example",
        "educator": "Sudhakar Atchala",
        "videoId": "ud-16se-DRM",
        "watchUrl": "https://www.youtube.com/watch?v=ud-16se-DRM",
        "durationSeconds": 1385,
        "conceptIds": [
            "cd-precedence-table"
        ],
        "coverage": [
            "Worked operator-precedence parser"
        ],
        "verificationStatus": "player-duration-observed-playback-unverified",
        "verificationDate": "2026-11-27",
        "playback": {
            "watch": "unverified",
            "embed": "unverified"
        },
        "evidence": {
            "video": "https://www.youtube.com/watch?v=ud-16se-DRM",
            "duration": "https://www.syncstudy.in/course/PLXj4XH7LcRfC9pGMWuM6UWE3V4YZ9TZzM",
            "durationStatus": "playlist-indexed-not-player-measured",
            "coverageStatus": "title-description-mapped-not-watch-verified",
            "idStatus": "matched-official-youtube-upload-metadata",
            "playerDurationSeconds": 1385,
            "browserAudit": "Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser."
        }
    },
    {
        "id": "cd-m2-l07",
        "subjectId": "cd",
        "moduleId": "cd-m2",
        "syllabusRef": "2.2",
        "title": "LR(0), closure, GOTO and parsing table",
        "educator": "Gate Smashers",
        "videoId": "J4ZME5KOB-s",
        "watchUrl": "https://www.youtube.com/watch?v=J4ZME5KOB-s",
        "durationSeconds": 1006,
        "conceptIds": [
            "cd-lr-items"
        ],
        "coverage": [
            "LR(0) items",
            "Closure",
            "GOTO",
            "ACTION/GOTO table"
        ],
        "verificationStatus": "player-duration-observed-playback-unverified",
        "verificationDate": "2026-11-27",
        "playback": {
            "watch": "unverified",
            "embed": "unverified"
        },
        "evidence": {
            "video": "https://www.youtube.com/watch?v=J4ZME5KOB-s",
            "duration": "https://playlistduration.com/playlist/PLxCzCOWd7aiEKtKSIHYusizkESC42diyc",
            "durationStatus": "playlist-indexed-not-player-measured",
            "coverageStatus": "title-description-mapped-not-watch-verified",
            "idStatus": "matched-official-youtube-upload-metadata",
            "playerDurationSeconds": 1006,
            "browserAudit": "Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser."
        }
    },
    {
        "id": "cd-m2-l08",
        "subjectId": "cd",
        "moduleId": "cd-m2",
        "syllabusRef": "2.2",
        "title": "SLR(1) parsing table",
        "educator": "Gate Smashers",
        "videoId": "Z1Hu9TIef9k",
        "watchUrl": "https://www.youtube.com/watch?v=Z1Hu9TIef9k",
        "durationSeconds": 465,
        "conceptIds": [
            "cd-slr"
        ],
        "coverage": [
            "SLR(1) parsing table"
        ],
        "verificationStatus": "player-duration-observed-playback-unverified",
        "verificationDate": "2026-11-27",
        "playback": {
            "watch": "unverified",
            "embed": "unverified"
        },
        "evidence": {
            "video": "https://www.youtube.com/watch?v=Z1Hu9TIef9k",
            "duration": "https://playlistduration.com/playlist/PLxCzCOWd7aiEKtKSIHYusizkESC42diyc",
            "durationStatus": "playlist-indexed-not-player-measured",
            "coverageStatus": "title-description-mapped-not-watch-verified",
            "idStatus": "matched-official-youtube-upload-metadata",
            "indexedDurationSeconds": 466,
            "playerDurationSeconds": 465,
            "browserAudit": "Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser."
        }
    },
    {
        "id": "cd-m2-l09",
        "subjectId": "cd",
        "moduleId": "cd-m2",
        "syllabusRef": "2.2",
        "title": "CLR(1) parsing table",
        "educator": "Gate Smashers",
        "videoId": "sMxqUQc_jHQ",
        "watchUrl": "https://www.youtube.com/watch?v=sMxqUQc_jHQ",
        "durationSeconds": 710,
        "conceptIds": [
            "cd-clr"
        ],
        "coverage": [
            "CLR(1) canonical items",
            "Lookahead"
        ],
        "verificationStatus": "player-duration-observed-playback-unverified",
        "verificationDate": "2026-11-27",
        "playback": {
            "watch": "unverified",
            "embed": "unverified"
        },
        "evidence": {
            "video": "https://www.youtube.com/watch?v=sMxqUQc_jHQ",
            "duration": "https://playlistduration.com/playlist/PLxCzCOWd7aiEKtKSIHYusizkESC42diyc",
            "durationStatus": "playlist-indexed-not-player-measured",
            "coverageStatus": "title-description-mapped-not-watch-verified",
            "idStatus": "matched-official-youtube-upload-metadata",
            "playerDurationSeconds": 710,
            "browserAudit": "Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser."
        }
    },
    {
        "id": "cd-m2-l10",
        "subjectId": "cd",
        "moduleId": "cd-m2",
        "syllabusRef": "2.2",
        "title": "LALR(1) parsing table",
        "educator": "Gate Smashers",
        "videoId": "GOlsYofJjyQ",
        "watchUrl": "https://www.youtube.com/watch?v=GOlsYofJjyQ",
        "durationSeconds": 786,
        "conceptIds": [
            "cd-lalr"
        ],
        "coverage": [
            "LALR(1) parsing table",
            "CLR vs LALR"
        ],
        "verificationStatus": "player-duration-observed-playback-unverified",
        "verificationDate": "2026-11-27",
        "playback": {
            "watch": "unverified",
            "embed": "unverified"
        },
        "evidence": {
            "video": "https://www.youtube.com/watch?v=GOlsYofJjyQ",
            "duration": "https://playlistduration.com/playlist/PLxCzCOWd7aiEKtKSIHYusizkESC42diyc",
            "durationStatus": "playlist-indexed-not-player-measured",
            "coverageStatus": "title-description-mapped-not-watch-verified",
            "idStatus": "matched-official-youtube-upload-metadata",
            "playerDurationSeconds": 786,
            "browserAudit": "Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser."
        }
    },
    {
        "id": "cd-m2-l11",
        "subjectId": "cd",
        "moduleId": "cd-m2",
        "syllabusRef": "2.2",
        "title": "LR parser comparison",
        "educator": "Gate Smashers",
        "videoId": "QNv2g-lwH2c",
        "watchUrl": "https://www.youtube.com/watch?v=QNv2g-lwH2c",
        "durationSeconds": 514,
        "conceptIds": [
            "cd-lr-items",
            "cd-slr",
            "cd-clr",
            "cd-lalr"
        ],
        "coverage": [
            "LR parser comparison"
        ],
        "verificationStatus": "player-duration-observed-playback-unverified",
        "verificationDate": "2026-11-27",
        "playback": {
            "watch": "unverified",
            "embed": "unverified"
        },
        "evidence": {
            "video": "https://www.youtube.com/watch?v=QNv2g-lwH2c",
            "duration": "https://playlistduration.com/playlist/PLxCzCOWd7aiEKtKSIHYusizkESC42diyc",
            "durationStatus": "playlist-indexed-not-player-measured",
            "coverageStatus": "title-description-mapped-not-watch-verified",
            "idStatus": "matched-official-youtube-upload-metadata",
            "playerDurationSeconds": 514,
            "browserAudit": "Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser."
        }
    },
    {
        "id": "cd-m4-l01",
        "subjectId": "cd",
        "moduleId": "cd-m4",
        "syllabusRef": "4.1",
        "title": "Machine-dependent and independent optimization",
        "educator": "Gate Smashers",
        "videoId": "O5YlRUYFDA8",
        "watchUrl": "https://www.youtube.com/watch?v=O5YlRUYFDA8",
        "durationSeconds": 444,
        "conceptIds": [
            "cd-optimization"
        ],
        "coverage": [
            "Machine-dependent and independent optimization"
        ],
        "verificationStatus": "player-duration-observed-playback-unverified",
        "verificationDate": "2026-11-27",
        "playback": {
            "watch": "unverified",
            "embed": "unverified"
        },
        "evidence": {
            "video": "https://www.youtube.com/watch?v=O5YlRUYFDA8",
            "duration": "https://playlistduration.com/playlist/PLxCzCOWd7aiEKtKSIHYusizkESC42diyc",
            "durationStatus": "playlist-indexed-not-player-measured",
            "coverageStatus": "title-description-mapped-not-watch-verified",
            "idStatus": "matched-official-youtube-upload-metadata",
            "indexedDurationSeconds": 445,
            "playerDurationSeconds": 444,
            "browserAudit": "Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser."
        }
    },
    {
        "id": "cd-m4-l02",
        "subjectId": "cd",
        "moduleId": "cd-m4",
        "syllabusRef": "4.1",
        "title": "Principal sources of optimization",
        "educator": "Sudhakar Atchala",
        "videoId": "yHZFVz6TVmI",
        "watchUrl": "https://www.youtube.com/watch?v=yHZFVz6TVmI",
        "durationSeconds": 707,
        "conceptIds": [
            "cd-optimization"
        ],
        "coverage": [
            "Principal sources of optimization"
        ],
        "verificationStatus": "player-duration-observed-playback-unverified",
        "verificationDate": "2026-11-27",
        "playback": {
            "watch": "unverified",
            "embed": "unverified"
        },
        "evidence": {
            "video": "https://www.youtube.com/watch?v=yHZFVz6TVmI",
            "duration": "https://www.syncstudy.in/course/PLXj4XH7LcRfC9pGMWuM6UWE3V4YZ9TZzM",
            "durationStatus": "playlist-indexed-not-player-measured",
            "coverageStatus": "title-description-mapped-not-watch-verified",
            "idStatus": "brief-supplied-not-independently-retrieved",
            "indexedDurationSeconds": 708,
            "playerDurationSeconds": 707,
            "browserAudit": "Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser."
        }
    },
    {
        "id": "cd-m4-l04",
        "subjectId": "cd",
        "moduleId": "cd-m4",
        "syllabusRef": "4.1",
        "title": "Loop optimization",
        "educator": "Gate Smashers",
        "videoId": "AKYuP3vpdlg",
        "watchUrl": "https://www.youtube.com/watch?v=AKYuP3vpdlg",
        "durationSeconds": 415,
        "conceptIds": [
            "cd-optimization-methods"
        ],
        "coverage": [
            "Loop optimization"
        ],
        "verificationStatus": "player-duration-observed-playback-unverified",
        "verificationDate": "2026-11-27",
        "playback": {
            "watch": "unverified",
            "embed": "unverified"
        },
        "evidence": {
            "video": "https://www.youtube.com/watch?v=AKYuP3vpdlg",
            "duration": "https://playlistduration.com/playlist/PLxCzCOWd7aiEKtKSIHYusizkESC42diyc",
            "durationStatus": "playlist-indexed-not-player-measured",
            "coverageStatus": "title-description-mapped-not-watch-verified",
            "idStatus": "matched-official-youtube-upload-metadata",
            "indexedDurationSeconds": 416,
            "playerDurationSeconds": 415,
            "browserAudit": "Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser."
        }
    },
    {
        "id": "cd-m4-l05",
        "subjectId": "cd",
        "moduleId": "cd-m4",
        "syllabusRef": "4.1",
        "title": "Local and global optimization",
        "educator": "Gate Smashers",
        "videoId": "rq1Xo0TUkA4",
        "watchUrl": "https://www.youtube.com/watch?v=rq1Xo0TUkA4",
        "durationSeconds": 536,
        "conceptIds": [
            "cd-optimization-methods"
        ],
        "coverage": [
            "Local vs global optimization"
        ],
        "verificationStatus": "player-duration-observed-playback-unverified",
        "verificationDate": "2026-11-27",
        "playback": {
            "watch": "unverified",
            "embed": "unverified"
        },
        "evidence": {
            "video": "https://www.youtube.com/watch?v=rq1Xo0TUkA4",
            "duration": "https://playlistduration.com/playlist/PLxCzCOWd7aiEKtKSIHYusizkESC42diyc",
            "durationStatus": "playlist-indexed-not-player-measured",
            "coverageStatus": "title-description-mapped-not-watch-verified",
            "idStatus": "matched-official-youtube-upload-metadata",
            "playerDurationSeconds": 536,
            "browserAudit": "Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser."
        }
    },
    {
        "id": "cd-m4-l06",
        "subjectId": "cd",
        "moduleId": "cd-m4",
        "syllabusRef": "4.2",
        "title": "Basic blocks and flow graphs",
        "educator": "Gate Smashers",
        "videoId": "tkSsh91ehUA",
        "watchUrl": "https://www.youtube.com/watch?v=tkSsh91ehUA",
        "durationSeconds": 510,
        "conceptIds": [
            "cd-blocks",
            "cd-cfg"
        ],
        "coverage": [
            "Basic blocks",
            "Control-flow graph"
        ],
        "verificationStatus": "player-duration-observed-playback-unverified",
        "verificationDate": "2026-11-27",
        "playback": {
            "watch": "unverified",
            "embed": "unverified"
        },
        "evidence": {
            "video": "https://www.youtube.com/watch?v=tkSsh91ehUA",
            "duration": "https://playlistduration.com/playlist/PLxCzCOWd7aiEKtKSIHYusizkESC42diyc",
            "durationStatus": "playlist-indexed-not-player-measured",
            "coverageStatus": "title-description-mapped-not-watch-verified",
            "idStatus": "matched-title-and-link-in-creator-playlist-index",
            "indexedDurationSeconds": 511,
            "playerDurationSeconds": 510,
            "browserAudit": "Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser."
        }
    },
    {
        "id": "cd-m4-l07",
        "subjectId": "cd",
        "moduleId": "cd-m4",
        "syllabusRef": "4.3",
        "title": "Liveness analysis",
        "educator": "Advanced Maths",
        "videoId": "A8gj5B7M1Ho",
        "watchUrl": "https://www.youtube.com/watch?v=A8gj5B7M1Ho",
        "durationSeconds": 1194,
        "conceptIds": [
            "cd-liveness"
        ],
        "coverage": [
            "Liveness analysis"
        ],
        "verificationStatus": "replacement-player-duration-observed-playback-unverified",
        "verificationDate": "2026-11-27",
        "playback": {
            "watch": "unverified",
            "embed": "unverified"
        },
        "evidence": {
            "replacementOf": "ERzKug9_9tg",
            "replacementReason": "Original embedded player reported Video unavailable.",
            "source": "https://www.youtube.com/watch?v=A8gj5B7M1Ho",
            "coverageChapters": {
                "00:31": "Definition",
                "04:53": "Algorithm",
                "07:21": "Worked GEN/KILL/IN/OUT calculation",
                "17:22": "Dead variable removal"
            },
            "playerDurationSeconds": 1194,
            "browserAudit": "Signed-out watch page and embed opened without the original unavailability message. Playback timestamp did not advance in the test browser."
        }
    },
    {
        "id": "cd-m4-l08",
        "subjectId": "cd",
        "moduleId": "cd-m4",
        "syllabusRef": "4.4",
        "title": "Issues in code generator design",
        "educator": "Sudhakar Atchala",
        "videoId": "CrdVTw4JaiQ",
        "watchUrl": "https://www.youtube.com/watch?v=CrdVTw4JaiQ",
        "durationSeconds": 1211,
        "conceptIds": [
            "cd-codegen-design"
        ],
        "coverage": [
            "Issues in code generator design"
        ],
        "verificationStatus": "player-duration-observed-playback-unverified",
        "verificationDate": "2026-11-27",
        "playback": {
            "watch": "unverified",
            "embed": "unverified"
        },
        "evidence": {
            "video": "https://www.youtube.com/watch?v=CrdVTw4JaiQ",
            "duration": "https://www.syncstudy.in/course/PLXj4XH7LcRfC9pGMWuM6UWE3V4YZ9TZzM",
            "durationStatus": "playlist-indexed-not-player-measured",
            "coverageStatus": "title-description-mapped-not-watch-verified",
            "idStatus": "matched-official-youtube-upload-metadata",
            "indexedDurationSeconds": 1212,
            "playerDurationSeconds": 1211,
            "browserAudit": "Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser."
        }
    },
    {
        "id": "cd-m4-l09",
        "subjectId": "cd",
        "moduleId": "cd-m4",
        "syllabusRef": "4.4",
        "title": "Simple code generator algorithm",
        "educator": "Sudhakar Atchala",
        "videoId": "Zz94_c-xFvA",
        "watchUrl": "https://www.youtube.com/watch?v=Zz94_c-xFvA",
        "durationSeconds": 1084,
        "conceptIds": [
            "cd-codegen-algorithm"
        ],
        "coverage": [
            "Simple code generator algorithm"
        ],
        "verificationStatus": "player-duration-observed-playback-unverified",
        "verificationDate": "2026-11-27",
        "playback": {
            "watch": "unverified",
            "embed": "unverified"
        },
        "evidence": {
            "video": "https://www.youtube.com/watch?v=Zz94_c-xFvA",
            "duration": "https://www.syncstudy.in/course/PLXj4XH7LcRfC9pGMWuM6UWE3V4YZ9TZzM",
            "durationStatus": "playlist-indexed-not-player-measured",
            "coverageStatus": "title-description-mapped-not-watch-verified",
            "idStatus": "matched-official-youtube-upload-metadata",
            "indexedDurationSeconds": 1085,
            "playerDurationSeconds": 1084,
            "browserAudit": "Signed-out watch page and in-app embed opened. Playback timestamp did not advance in the test browser."
        }
    },
    {
        "id": "cd-m2-l12",
        "workedExample": true,
        "subjectId": "cd",
        "moduleId": "cd-m2",
        "syllabusRef": "2.1",
        "title": "Operator precedence: worked example 2",
        "educator": "Sudhakar Atchala",
        "videoId": "qfV5MmqC1B8",
        "watchUrl": "https://www.youtube.com/watch?v=qfV5MmqC1B8",
        "durationSeconds": 1120,
        "conceptIds": [
            "cd-precedence-table"
        ],
        "coverage": [
            "Worked operator-precedence parsing example"
        ],
        "verificationStatus": "source-indexed-playback-unverified",
        "verificationDate": "2026-11-27",
        "playback": {
            "watch": "unverified",
            "embed": "unverified"
        },
        "evidence": {
            "sourcePlaylist": "https://www.youtube.com/playlist?list=PLXj4XH7LcRfC9pGMWuM6UWE3V4YZ9TZzM",
            "playlistPosition": 38,
            "durationIndex": "https://www.syncstudy.in/course/PLXj4XH7LcRfC9pGMWuM6UWE3V4YZ9TZzM"
        }
    },
    {
        "id": "cd-m2-l13",
        "workedExample": true,
        "subjectId": "cd",
        "moduleId": "cd-m2",
        "syllabusRef": "2.2",
        "title": "LALR vs CLR parsing tables: worked example",
        "educator": "Gate Smashers",
        "videoId": "pMeq6OIB2eI",
        "watchUrl": "https://www.youtube.com/watch?v=pMeq6OIB2eI",
        "durationSeconds": 1033,
        "conceptIds": [
            "cd-lalr",
            "cd-clr"
        ],
        "coverage": [
            "Worked comparison of LALR and CLR parsing tables"
        ],
        "verificationStatus": "source-indexed-playback-unverified",
        "verificationDate": "2026-11-27",
        "playback": {
            "watch": "unverified",
            "embed": "unverified"
        },
        "evidence": {
            "sourcePlaylist": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiEKtKSIHYusizkESC42diyc",
            "creatorLectureNumber": 15,
            "durationIndex": "https://playlistduration.com/playlist/PLxCzCOWd7aiEKtKSIHYusizkESC42diyc"
        }
    },
    {
        "id": "cd-m4-l10",
        "workedExample": true,
        "subjectId": "cd",
        "moduleId": "cd-m4",
        "syllabusRef": "4.4",
        "title": "Simple code generation: worked example",
        "educator": "Kalrav",
        "videoId": "dbNIHGp3BI0",
        "watchUrl": "https://www.youtube.com/watch?v=dbNIHGp3BI0&t=290s",
        "durationSeconds": null,
        "conceptIds": [
            "cd-codegen-algorithm"
        ],
        "coverage": [
            "Converting three-address code to target instructions"
        ],
        "verificationStatus": "source-indexed-playback-unverified",
        "verificationDate": "2026-11-27",
        "playback": {
            "watch": "unverified",
            "embed": "unverified"
        },
        "evidence": {
            "creatorChapter": "Solved Example",
            "creatorChapterStartSeconds": 290
        },
        "startSeconds": 290
    }
];

"use strict";
const compilerModules = ['cd-m1', 'cd-m2', 'cd-m3', 'cd-m4'];
const compilerDefinitions = [
    ['Compiler Basics and Top Down Parsing', 10, ['System software', 'Compiler phases', 'Lexical analysis and finite automata', 'Tokens, LEX/FLEX and symbol tables', 'Top-down parsing and LL(1)']],
    ['Bottom Up Parsing', 22, ['Handles, handle pruning and operator precedence', 'Shift-reduce and LR parsing tables']],
    ['Intermediate Code Generation', 8, ['Semantic analysis, SDDs and attributes', 'Evaluation order, S-attributed and L-attributed definitions', 'Intermediate code representations']],
    ['Code Generation', 20, ['Optimization techniques', 'Basic blocks and flow graphs', 'Liveness analysis', 'Code generator design and algorithms']],
];
// Retired resources are accepted only as saved history, not study material.
const retiredCompilerLecture = 'cd-m4-l03';
const retiredCompilerCard = 'cd-optimization-07';
const compilerSectionLayout = {
    'cd-m2': [['Handles and shift-reduce parsing', [1, 2, 3]], ['Operator precedence', [4, 5, 6, 12]], ['LR families and parsing tables', [7, 8, 9, 10, 13, 11]]],
    'cd-m3': [['Semantic analysis and attributes', [1, 2]], ['SDD evaluation', [3, 4]], ['Intermediate code and representations', [5, 6, 7, 8]]],
    'cd-m4': [['Code optimization', [1, 2, 4, 5]], ['Control flow and liveness', [6, 7]], ['Generating target code', [8, 9, 10]]],
};
const compilerModuleData = Object.fromEntries(compilerModules.map((id, index) => {
    const [name, marks, topics] = compilerDefinitions[index], number = index + 1;
    let visibleNumber = 0;
    const sections = (compilerSectionLayout[id] ?? []).map(([name, order]) => ({ name, rows: order.flatMap(n => {
            const row = compilerRows.find(r => r.id === id + '-l' + String(n).padStart(2, '0'));
            if (!row)
                return [];
            const seconds = row.durationSeconds;
            return [{ n: ++visibleNumber, title: row.title, sy: row.syllabusRef, educator: row.educator, id: row.videoId, uid: row.id,
                    topicIds: [row.syllabusRef], conceptIds: row.conceptIds, workedExample: row.workedExample, time: seconds === null ? null : Math.floor(seconds / 60) + ':' + String(seconds % 60).padStart(2, '0'),
                    videoTitle: row.title, startSeconds: row.startSeconds, endSeconds: row.endSeconds, durationSeconds: seconds, verificationStatus: row.playback.watch === 'verified' && row.playback.embed === 'verified' ? 'verified' : 'playback-unverified', verificationDate: row.verificationDate }];
        }) }));
    const value = { id, name, marks, weight: (100 * marks / 60).toFixed(2) + '%', sections, topics: [...topics], practice: [],
        practiceLabel: 'Revision notes', masteryLabel: 'concepts', stages: ['Not started', 'Mastered'], lectures: [], subjectId: 'cd', number,
        revisionOnly: number === 1 };
    return [id, value];
}));
const revisionConcepts = (mod) => mod.subjectId === 'cd' ? compilerContent.concepts.filter(c => c.module === mod.number) : [];
const conceptKey = (id) => `concept/${id}/done`;
const recallKey = (subject, id) => `recall/${subject}/card/${id}`;
const recallSessionKey = (subject) => `recall/${subject}/session`;
const validTimestamp = (v) => typeof v === 'number' && Number.isSafeInteger(v) && v >= 0 && v <= 8640000000000000;
const recallRatings = ['Again', 'Hard', 'Good', 'Easy'];
function scheduleRecall(old, rating, now, userId, cardId) {
    const day = 86400000, previous = old ? Math.max(1, (old.nextReview - old.lastReviewed) / day) : 0;
    const interval = rating === 'Again' ? 600000 : rating === 'Hard' ? day * Math.min(60, Math.max(1, previous * 1.2)) : rating === 'Good' ? day * Math.min(180, Math.max(2, previous * 2)) : day * Math.min(365, Math.max(4, previous * 2.8));
    return { userId, cardId, rating, reviewCount: Math.min(1000000, (old?.reviewCount ?? 0) + 1), lastReviewed: now, nextReview: Math.round(now + interval), mastery: rating === 'Again' ? 'learning' : interval >= day * 14 ? 'mastered' : 'reviewing' };
}
function isRecallReview(value, cardId) {
    if (value === null)
        return true;
    if (!value || typeof value !== 'object' || Array.isArray(value))
        return false;
    const v = value;
    return Object.keys(v).length === 7 && v.cardId === cardId && typeof v.userId === 'string' && v.userId.length <= 256 &&
        recallRatings.includes(v.rating) && typeof v.reviewCount === 'number' && Number.isSafeInteger(v.reviewCount) && v.reviewCount > 0 && v.reviewCount <= 1000000 &&
        validTimestamp(v.lastReviewed) && validTimestamp(v.nextReview) && v.nextReview >= v.lastReviewed &&
        ['learning', 'reviewing', 'mastered'].includes(v.mastery ?? '');
}
function isRecallSession(value, ids) {
    if (value === null)
        return true;
    if (!value || typeof value !== 'object' || Array.isArray(value))
        return false;
    const s = value;
    return Object.keys(s).length === 4 && typeof s.title === 'string' && s.title.length <= 120 && typeof s.flipped === 'boolean' &&
        Array.isArray(s.cards) && s.cards.length > 0 && s.cards.length <= 160 && new Set(s.cards).size === s.cards.length && s.cards.every(id => typeof id === 'string' && ids.has(id)) &&
        typeof s.index === 'number' && Number.isSafeInteger(s.index) && s.index >= 0 && s.index <= s.cards.length;
}

"use strict";
const studyModules = {
    m3: { id: 'm3', subjectId: 'cn', number: 3, name: 'Network Layer', marks: 22.4, weight: '37.33%', sections, topics, practice, practiceLabel: 'Numerical practice', masteryLabel: 'numerical skills', stages: ['Not started', 'Practising', 'Mastered'], lectures: [] },
    m4: { id: 'm4', subjectId: 'cn', number: 4, name: 'Transport Layer', marks: 19.6, weight: '32.67%', sections: m4Sections, topics: m4Topics, practice: m4Concepts, practiceLabel: 'Concept mastery', masteryLabel: 'concepts', stages: ['Not started', 'Learning', 'Practising', 'Mastered'], lectures: [] },
    ...(typeof compilerModuleData === 'undefined' ? {} : compilerModuleData)
};
for (const mod of Object.values(studyModules))
    mod.lectures = mod.sections.flatMap(s => s.rows);
const lectures = studyModules.m3.lectures;
const speeds = [1, 1.25, 1.5, 1.75, 2];
const defaults = { theme: 'light', speed: 1, 'm4/speed': 1, lastSubject: 'cn' };
const lectureModule = (l) => l.uid.slice(0, l.uid.lastIndexOf('-l'));
const key = (lecture, field) => `${lectureModule(lecture)}/${lecture.uid}/${field}`;
const pk = (p, mod = 'm3') => `${mod}/practice/${p.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
const speedKey = (mod) => mod === 'm3' ? 'speed' : `${mod}/speed`;
for (const mod of Object.values(studyModules)) {
    defaults[`${mod.id}/lastActive`] = '';
    defaults[speedKey(mod.id)] = 1;
    for (const l of mod.lectures) {
        defaults[key(l, 'done')] = false;
        defaults[key(l, 'revision')] = false;
        defaults[key(l, 'note')] = '';
        defaults[key(l, 'position')] = 0;
    }
    for (const p of mod.practice)
        defaults[pk(p, mod.id)] = mod.stages[0];
}
// A removed lecture may still exist in earlier browser/account records and backup files.
defaults[`cd-m4/${retiredCompilerLecture}/done`] = false;
defaults[`cd-m4/${retiredCompilerLecture}/revision`] = false;
defaults[`cd-m4/${retiredCompilerLecture}/note`] = '';
defaults[`cd-m4/${retiredCompilerLecture}/position`] = 0;
function valid(data, strict = false) {
    return data !== null && typeof data === 'object' && !Array.isArray(data) && Object.entries(data).every(([k, v]) => {
        if (!Object.hasOwn(defaults, k))
            return false;
        if (k === 'lastSubject')
            return typeof v === 'string' && ['cn', 'cd', 'bi', 'mad', 'ml', 'nlp'].includes(v);
        if (k.startsWith('recall/'))
            return validateRecallValue(k, v);
        if (k.startsWith('quiz/'))
            return validQuizValue(k, v, strict);
        if (k.startsWith('concept/') && k.endsWith('/note'))
            return typeof v === 'string' && v.length <= 8000;
        if (k === 'theme')
            return ['dark', 'light'].includes(v);
        if (k === 'speed' || k.endsWith('/speed'))
            return typeof v === 'number' && speeds.includes(v);
        const mod = studyModules[k.split('/')[0]];
        if (k.endsWith('/lastActive'))
            return v === '' || (mod.id === 'cd-m4' && v === retiredCompilerLecture) || mod.lectures.some(l => l.uid === v);
        if (k.endsWith('/position'))
            return typeof v === 'number' && Number.isFinite(v) && v >= 0 && v < 86400;
        if (k.includes('/practice/'))
            return typeof v === 'string' && mod.stages.includes(v);
        if (k.endsWith('/note'))
            return typeof v === 'string' && v.length <= 8000;
        return typeof v === 'boolean';
    });
}
const aliases = new Map();
for (const l of lectures)
    for (const id of [l.id, l.legacyVideo].filter(Boolean))
        for (const field of ['done', 'revision', 'note'])
            aliases.set('m3/' + id + '/' + field, key(l, field));
function migrate(data) {
    if (!data || typeof data !== 'object' || Array.isArray(data))
        return data;
    const result = { ...data };
    for (const [old, current] of aliases)
        if (Object.hasOwn(result, old)) {
            if (!Object.hasOwn(result, current))
                result[current] = result[old];
            delete result[old];
        }
    migrateRetiredRecall(result);
    return result;
}
function nextLecture(items, record, last) {
    return items.find(l => l.uid === last && !record[key(l, 'done')]) || items.find(l => !record[key(l, 'done')]);
}
function initialLectureSection(mod, record) {
    const next = nextLecture(mod.lectures, record, record[`${mod.id}/lastActive`]);
    return next ? mod.sections.find(section => section.rows.some(lecture => lecture.uid === next.uid))?.name ?? null : null;
}
function viewingSummary(mod, record) {
    const remaining = mod.lectures.filter(l => !record[key(l, 'done')]);
    const unknown = remaining.filter(l => !l.time).length;
    const seconds = remaining.reduce((sum, l) => {
        if (l.durationSeconds != null)
            return sum + l.durationSeconds;
        const parts = String(l.time || '0').split(':').map(Number);
        return sum + parts.reduce((acc, p) => acc * 60 + p, 0);
    }, 0);
    const core = mod.lectures.filter(l => !l.workedExample);
    const covered = mod.topics.filter((_, i) => {
        const id = mod.number + '.' + (i + 1), matches = core.filter(l => l.topicIds.includes(id));
        return matches.length && matches.every(l => record[key(l, 'done')]);
    }).length;
    return { remaining, unknown, covered, seconds, coreTotal: core.length, coreDone: core.filter(l => record[key(l, 'done')]).length, minutes: Math.ceil(seconds / 60 / (record[speedKey(mod.id)] || 1)), done: mod.lectures.length - remaining.length };
}
function playbackStart(l, position) {
    const start = l.startSeconds ?? 0, end = l.endSeconds ?? Infinity;
    const saved = Math.floor(Number(position) || 0);
    return saved >= start && saved < end - 1 ? saved : start;
}
function youtubeWatch(l, position = 0) {
    const url = new URL('https://www.youtube.com/watch');
    url.searchParams.set('v', l.id);
    const start = playbackStart(l, position);
    if (start)
        url.searchParams.set('t', start + 's');
    return url.href;
}
function youtubeEmbed(l, origin, position = 0) {
    const url = new URL('https://www.youtube.com/embed/' + encodeURIComponent(l.id));
    url.search = new URLSearchParams({ enablejsapi: '1', origin, playsinline: '1', start: String(playbackStart(l, position)) }).toString();
    if (l.endSeconds != null)
        url.searchParams.set('end', String(l.endSeconds));
    return url.href;
}
function progressPercent(done, total) {
    return Math.max(0, Math.min(100, total ? Math.round(100 * done / total) : 0));
}
function progressFrame(value, elapsed) {
    const t = Math.max(0, Math.min(1, elapsed / 720));
    return Math.min(value, Math.floor(value * (1 - (1 - t) ** 3) + Number.EPSILON));
}

"use strict";
const networkRecallIds = Array.from({ length: 100 }, (_, i) => 'cn-m' + (i < 50 ? '3' : '4') + '-' + String(i % 50 + 1).padStart(2, '0'));
const recallIds = {
    cn: new Set(networkRecallIds), cd: new Set(compilerContent.quick.concat(compilerContent.decks.flatMap(d => d.cards)).map(c => c.id))
};
const storedCompilerRecallIds = new Set([...recallIds.cd, retiredCompilerCard]);
function migrateRetiredRecall(data) {
    const key = recallSessionKey('cd'), saved = data[key];
    if (!saved || !isRecallSession(saved, storedCompilerRecallIds))
        return;
    const session = saved;
    const retiredIndex = session.cards.indexOf(retiredCompilerCard);
    if (retiredIndex === -1)
        return;
    const cards = session.cards.filter(id => id !== retiredCompilerCard);
    data[key] = cards.length ? { ...session, cards, index: session.index - Number(retiredIndex < session.index),
        flipped: retiredIndex === session.index ? false : session.flipped } : null;
}
const unlockKey = (subject) => `recall/${subject}/unlockedRecent`;
function validateRecallValue(key, value) {
    const [, subject, kind, id] = key.split('/');
    if (kind === 'unlockedRecent') {
        const ids = new Set(subject === 'cd' ? compilerContent.decks.map(d => d.id) : Array.from({ length: 12 }, (_, i) => 'cn-3-' + (i + 1)).concat(Array.from({ length: 7 }, (_, i) => 'cn-4-' + (i + 1))));
        return Array.isArray(value) && value.length <= 20 && new Set(value).size === value.length && value.every(id => typeof id === 'string' && ids.has(id));
    }
    return kind === 'card' ? (subject === 'cd' ? storedCompilerRecallIds : recallIds.cn).has(id) && isRecallReview(value, id) : kind === 'session' && isRecallSession(value, recallIds[subject]);
}
for (const subject of ['cn', 'cd']) {
    defaults[recallSessionKey(subject)] = null;
    defaults[unlockKey(subject)] = [];
    for (const id of recallIds[subject])
        defaults[recallKey(subject, id)] = null;
}
defaults[recallKey('cd', retiredCompilerCard)] = null;
const conceptNoteKey = (id) => `concept/${id}/note`;
for (const concept of compilerContent.concepts) {
    defaults[conceptKey(concept.id)] = false;
    defaults[conceptNoteKey(concept.id)] = '';
}
// The M3 playlist augments revision notes. Finishing either path preserves deck access.
const hasRevisionPrerequisites = (mod) => mod.subjectId === 'cd' && (mod.revisionOnly || mod.id === 'cd-m3');
function revisionPrerequisiteMet(mod, id, record) {
    if (record[conceptKey(id)] === true)
        return true;
    const matches = mod.lectures.filter(l => !l.workedExample && l.conceptIds?.includes(id));
    return matches.length > 0 && matches.every(l => record[key(l, 'done')] === true);
}
function deckRequirements(subject, deck, record) {
    const module = (subject === 'cn' ? 'm' + deck.module : 'cd-m' + deck.module), mod = studyModules[module];
    if (subject === 'cd' && hasRevisionPrerequisites(mod)) {
        return deck.requires.flatMap(id => {
            const topic = compilerContent.concepts.find(c => c.id === id);
            return topic ? [{ label: topic.title, module, ref: topic.id, done: revisionPrerequisiteMet(mod, topic.id, record) }] : [];
        });
    }
    return mod.lectures.filter(l => deck.requires.includes(l.uid) || (!l.workedExample && [...l.topicIds, ...(l.conceptIds ?? [])].some(id => deck.requires.includes(id))))
        .map(l => ({ label: l.title, module, ref: l.uid, done: record[key(l, 'done')] === true }));
}
const requirementsMet = (items) => items.length > 0 && items.every(x => x.done);
// Keep the original keys so existing backups, note completion, and deck eligibility are preserved.
function revisionReadPatch(id, record) {
    const c = compilerContent.concepts.find(concept => concept.id === id), key = conceptKey(id);
    if (!c || !hasRevisionPrerequisites(studyModules[('cd-m' + c.module)]) || record[key])
        return;
    const delta = {};
    delta[key] = true;
    return delta;
}

"use strict";
const quizModules = ['m3', 'm4'];
const cardPattern = /^m[34]-(0[1-9]|[1-4][0-9]|50)$/;
const roundKey = (mod) => `quiz/${mod}/round`;
const markKey = (id) => `quiz/card/${id}`;
const trackKey = (mod) => `quiz/${mod}/history`;
const whole = (value) => typeof value === 'number' && Number.isSafeInteger(value) && value >= 0;
function isRound(input, mod, strict) {
    const value = input;
    if (value === null)
        return true;
    if (!value || typeof value !== 'object' || !Array.isArray(value.cards) || !Array.isArray(value.answers))
        return false;
    const count = value.cards.length;
    if (strict && (Object.keys(value).length !== 3 || !['index', 'answers', 'cards'].every(key => Object.hasOwn(value, key))))
        return false;
    return count >= 1 && count <= 50 && new Set(value.cards.map(c => c?.id)).size === count &&
        value.cards.every(c => c && (!strict || (Object.keys(c).length === 2 && Object.hasOwn(c, 'id') && Object.hasOwn(c, 'order') && typeof c.id === 'string')) && cardPattern.test(c.id) && c.id.startsWith(mod + '-') && ['012', '021', '102', '120', '201', '210'].includes(c.order)) &&
        whole(value.index) && value.index <= count && value.answers.length >= value.index &&
        value.answers.length <= Math.min(count, value.index + 1) && value.answers.every(a => [0, 1, 2].includes(a));
}
function validQuizValue(k, v, strict) {
    if (k.startsWith('quiz/card/'))
        return Array.isArray(v) && v.length === 3 && whole(v[0]) && whole(v[1]) && v[1] <= v[0] && typeof v[2] === 'boolean';
    if (k.endsWith('/round'))
        return isRound(v, k.split('/')[1], strict);
    return Array.isArray(v) && v.length <= 20 && v.every(r => Array.isArray(r) && r.length === 3 && whole(r[0]) && r[0] <= 8640000000000000 && whole(r[1]) && whole(r[2]) && r[2] >= 1 && r[2] <= 50 && r[1] <= r[2]);
}
for (const mod of quizModules) {
    defaults[roundKey(mod)] = null;
    defaults[trackKey(mod)] = [];
    for (let i = 1; i <= 50; i++)
        defaults[markKey(mod + '-' + String(i).padStart(2, '0'))] = [0, 0, false];
}

// Build injects the assets and the same validation used by the dashboard.
const progressByteLimit = 1500000;
const pagePolicy = [
    "default-src 'none'",
    "script-src 'self' https://www.youtube.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' https://i.ytimg.com",
    "connect-src 'self'",
    "frame-src https://www.youtube.com",
    "object-src 'none'",
    "base-uri 'none'",
    "form-action 'none'"
].join('; ');
const safeHeaders = { 'x-content-type-options': 'nosniff', 'referrer-policy': 'strict-origin-when-cross-origin' };
async function readProgressJSON(request) {
    const reader = request.body?.getReader();
    if (!reader)
        return { status: 400 };
    const decoder = new TextDecoder('utf-8', { fatal: true });
    let bytes = 0, text = '';
    try {
        while (true) {
            const { value, done } = await reader.read();
            if (done)
                break;
            bytes += value.byteLength;
            if (bytes > progressByteLimit) {
                await reader.cancel().catch(() => { });
                return { status: 413 };
            }
            text += decoder.decode(value, { stream: true });
        }
        return { data: JSON.parse(text + decoder.decode()) };
    }
    catch {
        await reader.cancel().catch(() => { });
        return { status: 400 };
    }
    finally {
        reader.releaseLock();
    }
}
export default { async fetch(request, env) {
        const url = new URL(request.url);
        const user = request.headers.get('oai-authenticated-user-id') || '';
        if (url.pathname !== '/progress') {
            if (!['GET', 'HEAD'].includes(request.method))
                return new Response(null, { status: 405, headers: { ...safeHeaders, allow: 'GET, HEAD' } });
            const path = url.pathname === '/' ? '/index.html' : (assetAliases[url.pathname] ?? url.pathname);
            if (!Object.hasOwn(assets, path))
                return new Response('Page not found', { status: 404, headers: safeHeaders });
            const type = path.endsWith('.js') ? 'text/javascript' : path.endsWith('.css') ? 'text/css' : 'text/html';
            if (path === '/index.html') {
                const html = assets[path].replace('name="notebook-account" content=""', 'name="notebook-account" content="' + encodeURIComponent(user) + '"');
                return new Response(request.method === 'HEAD' ? null : html, { headers: { ...safeHeaders, 'content-type': 'text/html; charset=utf-8', 'cache-control': 'private, no-store', 'content-security-policy': pagePolicy } });
            }
            return new Response(request.method === 'HEAD' ? null : assets[path], { headers: { ...safeHeaders, 'content-type': type + '; charset=utf-8', 'cache-control': 'no-cache' } });
        }
        const reply = (value, status = 200) => Response.json(value, { status, headers: { ...safeHeaders, 'cache-control': 'private, no-store' } });
        if (!user)
            return reply({ error: 'Sign-in required' }, 401);
        if (request.headers.get('X-Notebook-Account') !== encodeURIComponent(user))
            return reply({ error: 'Account changed' }, 409);
        if (!env.BUCKET)
            return reply({ error: 'Storage unavailable' }, 503);
        const objectKey = 'progress/v1/' + encodeURIComponent(user);
        try {
            if (request.method === 'GET') {
                const obj = await env.BUCKET.get(objectKey);
                return reply(migrate(obj ? await obj.json() : {}));
            }
            if (request.method !== 'PATCH')
                return reply({}, 405);
            if (request.headers.get('origin') !== url.origin)
                return reply({}, 403);
            if (request.headers.get('content-type')?.split(';', 1)[0].trim().toLowerCase() !== 'application/json')
                return reply({}, 415);
            const suppliedLength = request.headers.get('content-length');
            if (suppliedLength && Number(suppliedLength) > progressByteLimit)
                return reply({}, 413);
            const body = await readProgressJSON(request);
            if (body.status)
                return reply({}, body.status);
            const delta = migrate(body.data);
            if (!valid(delta, true))
                return reply({}, 400);
            for (const [key, value] of Object.entries(delta))
                if (key.startsWith('recall/') && key.includes('/card/') && value && typeof value === 'object' && 'userId' in value)
                    value.userId = encodeURIComponent(user);
            for (let i = 0; i < 5; i++) {
                const obj = await env.BUCKET.get(objectKey);
                const prior = migrate(obj ? await obj.json() : {});
                const source = prior;
                const merged = request.headers.get('X-Import-Guest') === '1' ? { ...delta, ...source } : { ...source, ...delta };
                const saved = await env.BUCKET.put(objectKey, JSON.stringify(merged), { onlyIf: obj ? { etagMatches: obj.etag } : { etagDoesNotMatch: '*' } });
                if (saved)
                    return reply(merged);
            }
            return reply({}, 409);
        }
        catch {
            return reply({ error: 'Storage unavailable' }, 503);
        }
    } };
