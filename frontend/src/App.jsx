// import React from "react";
// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/home/Home";
// import Header from "./components/header/Header.jsx";
// import Footer from "./components/footer/Footer.jsx";
// import Login from "./pages/auth/Login.jsx";
// import Register from "./pages/auth/Register.jsx";
// import Verify from "./pages/auth/Verify.jsx";
// import About from "./pages/About/About.jsx";
// import Account from "./pages/Account/Account.jsx";
// import { UserData } from "./context/UserContext";
// import Loading from "./components/loading/Loading.jsx";
// import Courses from "./pages/courses/Courses.jsx";
// import Dashbord from "./pages/dashboard/Dashboard.jsx";
// import CourseStudy from "./pages/coursestudy/CourseStudy.jsx";
// import Lecture from "./pages/lecture/Lecture.jsx";

// const App = () => {
//   const { isAuth, user, loading } = UserData();
//   return (
//     <div>
//     {loading ? (
//       <Loading />
//       ) : (
//         <BrowserRouter>
//           <Header isAuth={isAuth}/>
//           <Routes>
//             <Route path="/" element={<Home/>}/>
//             <Route path="/about" element={<About/>}/>
//             <Route path="/courses" element={<Courses/>}/>
//             <Route path="/account" element={isAuth ? <Account user={user} /> : <Login />}/>
//             <Route path="/login" element={isAuth ? <Home /> : <Login />}/>
//             <Route path="/register" element={isAuth ? <Home /> : <Register />}/>
//             <Route path="/verify" element={isAuth ? <Home /> : <Verify />}/>
//             <Route path="/dashboard" element={<Dashbord/>}></Route>
//             <Route path="/course/study/:id" element={isAuth ? <CourseStudy user={user} /> : <Login />}/>
//             <Route path="/lectures/:id" element={isAuth ? <Lecture user={user} /> : <Login />}/>
//           </Routes>
//           <Footer />
//         </BrowserRouter>
//       )
//     } 
//     </div>
//   );
// };

// export default App;

import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import Verify from "./pages/auth/Verify.jsx";
import About from "./pages/About/About.jsx";
import Account from "./pages/Account/Account.jsx";
import { UserData } from "./context/UserContext";
import Loading from "./components/loading/Loading.jsx";
import Courses from "./pages/courses/Courses.jsx";
import Dash from "./pages/dashboard/Dashboard.jsx";
import CourseStudy from "./pages/coursestudy/CourseStudy.jsx";
import Lecture from "./pages/lecture/Lecture.jsx";

const App = () => {
  const { isAuth, user, loading } = UserData();

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <AppContent isAuth={isAuth} user={user} />
        </BrowserRouter>
      )}
    </div>
  );
};

const AppContent = ({ isAuth, user }) => {
  const location = useLocation();
  const isDashboardRoute = location.pathname === "/dashboard/*";

  return (
    <div>
      {!isDashboardRoute && <Header isAuth={isAuth} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/account" element={isAuth ? <Account user={user} /> : <Login />} />
        <Route path="/login" element={isAuth ? <Home /> : <Login />} />
        <Route path="/register" element={isAuth ? <Home /> : <Register />} />
        <Route path="/verify" element={isAuth ? <Home /> : <Verify />} />
        <Route path="/dashboard/*" element={<Dash />} />
        <Route path="/course/study/:id" element={isAuth ? <CourseStudy user={user} /> : <Login />} />
        <Route path="/lectures/:id" element={isAuth ? <Lecture user={user} /> : <Login />} />
      </Routes>
      {!isDashboardRoute && <Footer />}
    </div>
  );
};

export default App;
