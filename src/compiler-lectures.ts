interface CompilerLectureRow {
 id:string;workedExample?:boolean;subjectId:'cd';moduleId:CompilerModuleId;syllabusRef:string;title:string;educator:string;videoId:string;durationSeconds:number|null;startSeconds?:number;endSeconds?:number;
 conceptIds:string[];coverage:string[];watchUrl:string;verificationStatus:string;verificationDate:string;
 playback:{watch:string;embed:string}; evidence:Record<string,unknown>;
}
const compilerRows:CompilerLectureRow[]=[
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
