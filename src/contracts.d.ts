/** Browser assets are ordered classic scripts. The same data/schema scripts also feed the Worker bundle. */
type NetworkModuleId = 'm3' | 'm4';
type CompilerModuleId = 'cd-m1'|'cd-m2'|'cd-m3'|'cd-m4';
type ModuleId = NetworkModuleId | CompilerModuleId;
type LearningSubject = 'cn' | 'cd';
type LectureField = 'done' | 'revision' | 'note' | 'position';
type LectureId = `${ModuleId}-l${string}`;
interface Lecture {
  n:number; title:string; sy:string; educator:string; id:string; uid:LectureId; topicIds:string[]; conceptIds?:string[];
  workedExample?:boolean; durationSeconds?:number|null; verificationStatus?:'verified'|'playback-unverified';verificationDate?:string;
  time:string|null; videoTitle:string; legacyVideo?:string; startSeconds?:number|null; endSeconds?:number|null;
}
interface LectureSection {name:string;rows:Lecture[]}
type StudyModule = {
  id:ModuleId;subjectId:LearningSubject;number:number;revisionOnly?:boolean;name:string;marks:number;weight:string;sections:LectureSection[];topics:string[];
  practice:string[];practiceLabel:string;masteryLabel:string;stages:string[];lectures:Lecture[];
};
interface TopicNote {summary:string;formula:string;diagram:string;question:string;answer:string}
type Choice = 0 | 1 | 2;
type ChoiceOrder = '012'|'021'|'102'|'120'|'201'|'210';
interface QuizCard {id:string;topic:string;question:string;choices:[string,string,string];explanation:string;ref:string}
interface QuizSlot {id:string;order:ChoiceOrder}
interface QuizRound {index:number;answers:Choice[];cards:QuizSlot[]}
type QuizMark = [attempts:number, correct:number, lastMissed:boolean];
type QuizHistory = [completedAt:number, correct:number, count:number][];
type RecallRating='Again'|'Hard'|'Good'|'Easy';
interface RecallReview {userId:string;cardId:string;rating:RecallRating;reviewCount:number;lastReviewed:number;nextReview:number;mastery:'learning'|'reviewing'|'mastered'}
interface RecallSession {title:string;cards:string[];index:number;flipped:boolean}
type Theme = 'light'|'dark';
type ProgressState = {
  theme:Theme;
  speed:number;
  'm4/speed':number;
  lastSubject:string;
  [key:`concept/${string}/done`]:boolean;
  [key:`concept/${string}/note`]:string;
  [key:`recall/${LearningSubject}/card/${string}`]:RecallReview|null;
  [key:`${ModuleId}/${LectureId}/done` | `${ModuleId}/${LectureId}/revision`]:boolean;
  [key:`${ModuleId}/${LectureId}/note`]:string;
  [key:`${ModuleId}/${LectureId}/position`]:number;
  [key:`${ModuleId}/practice/${string}`]:string;
  [key:`quiz/card/${string}`]:QuizMark;
} & Record<`recall/${LearningSubject}/unlockedRecent`,string[]> & Record<`${CompilerModuleId}/speed`,number> & Record<`recall/${LearningSubject}/session`,RecallSession|null> & Record<`${ModuleId}/lastActive`,LectureId|''> & Record<`quiz/${NetworkModuleId}/round`,QuizRound|null> & Record<`quiz/${NetworkModuleId}/history`,QuizHistory>;
type ProgressPatch = Partial<ProgressState>;
type Exam = {code:string;label:string;date:string;startTime?:string;endTime?:string};
type ExamRow = Exam & {status:string};
type ExamPlan = {today:Exam[];next:Exam|null;seconds:number;rows:ExamRow[]};
type ExamFocus = {exam:Exam|null;status:'upcoming'|'underway'|'today'|'past'|'complete';seconds:number};
interface YTPlayer {
  getCurrentTime():number;
  getAvailablePlaybackRates():number[];
  setPlaybackRate(value:number):void;
  destroy():void;
}
interface YTAPI {
  Player: new (frame:HTMLIFrameElement, init:{events:{
    onReady():void; onStateChange(event:{data:number}):void; onError():void
  }}) => YTPlayer;
  PlayerState:{PLAYING:number;PAUSED:number;ENDED:number};
}
interface Window {YT?:YTAPI;onYouTubeIframeAPIReady?:()=>void}

type Page = 'Exam planner'|'Lecture roadmap'|'Flashcards'|'Syllabus coverage'|'Numerical practice'|'Study priorities';
interface StudyElementById {
 accountLink:HTMLAnchorElement; dialog:HTMLDialogElement; subjectSelect:HTMLSelectElement;
 previewLink:HTMLAnchorElement; resume:HTMLAnchorElement; previewImage:HTMLImageElement;
 speed:HTMLSelectElement; search:HTMLInputElement; memo:HTMLTextAreaElement;
 import:HTMLButtonElement; backup:HTMLInputElement; lectureFrame:HTMLIFrameElement;
 youtubeFallback:HTMLAnchorElement; previousLecture:HTMLButtonElement; nextLecture:HTMLButtonElement;
}
