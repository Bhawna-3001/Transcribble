import Dashboard from "./src/layouts/dashboard/index"
import { MdDashboard } from "react-icons/md";
import { CgTranscript } from "react-icons/cg";
import { MdOutlineTranslate } from "react-icons/md";
import { MdSummarize } from "react-icons/md";
import { MdQuiz } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { BsTranslate } from "react-icons/bs";
import Transcript from "./src/layouts/transcript/Transcript.jsx";
import Translate from "./src/layouts/translate/Translate.jsx";
import Sign_Language from "./src/layouts/sign_language/Sign_Language.jsx";
import Summary from "./src/layouts/summary/Summary.jsx";
import MCQGenerator from "./src/layouts/quiz_generation/MCQGenerator.jsx";
import Account from "../Account/Account.jsx";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <MdDashboard fontSize="small">dashboard</MdDashboard>,
    route: "/dashboard/*",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Transcript",
    key: "transcript",
    icon: <CgTranscript fontSize="small">receipt_long</CgTranscript>,
    route: "/generate_notes",
    component: <Transcript />,
  },
  {
    type: "collapse",
    name: "Sign Language Translate",
    key: "rtl",
    icon: <MdOutlineTranslate fontSize="small">translate</MdOutlineTranslate>,
    route: "http://localhost:8000",
    component: <Sign_Language />,
  },
  {
    type: "collapse",
    name: "Summarize",
    key: "summary",
    icon: <MdSummarize fontSize="small">summarize</MdSummarize>,
    route: "/summary",
    component: <Summary />,
  },
  {
    type: "collapse",
    name: "Generate Quiz",
    key: "MCQGenerator",
    icon: <MdQuiz fontSize="small">quiz</MdQuiz>,
    route: "/generate-mcqs",
    component: <MCQGenerator />,
  },
  {
    type: "collapse",
    name: "Translate",
    key: "translate",
    icon: <BsTranslate fontSize="small">person</BsTranslate>,
    route: "/translate",
    component: <Translate />,
  },
  {
    type: "collapse",
    name: "Logout",
    key: "Account",
    icon: <LuLogOut fontSize="small">login</LuLogOut>,
    route: "/account",
    component: <Account />,
  },
];

export default routes;
