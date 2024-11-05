import Dashboard from "./src/layouts/dashboard/index"
import Billing from "./src/layouts/billing/Billing";
import RTL from "./src/layouts/rtl/index";
import Notifications from "./src/layouts/notifications/index";
import Profile from "./src/layouts/profile/index";
import SignIn from "./src/layouts/authentication/sign-in/index";
import SignUp from "./src/layouts/authentication/sign-up/index";
import { MdDashboard } from "react-icons/md";
import { CgTranscript } from "react-icons/cg";
import { MdOutlineTranslate } from "react-icons/md";
import { MdSummarize } from "react-icons/md";
import { MdQuiz } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";

// @mui icons
import Icon from "@mui/material/Icon";

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
    key: "billing",
    icon: <CgTranscript fontSize="small">receipt_long</CgTranscript>,
    route: "/billing",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "Sign Language Translate",
    key: "rtl",
    icon: <MdOutlineTranslate fontSize="small">translate</MdOutlineTranslate>,
    route: "/rtl",
    component: <RTL />,
  },
  {
    type: "collapse",
    name: "Summarize",
    key: "notifications",
    icon: <MdSummarize fontSize="small">summarize</MdSummarize>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Generate Quiz",
    key: "sign-up",
    icon: <MdQuiz fontSize="small">quiz</MdQuiz>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <MdAccountCircle fontSize="small">person</MdAccountCircle>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Logout",
    key: "sign-in",
    icon: <LuLogOut fontSize="small">login</LuLogOut>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
];

export default routes;
