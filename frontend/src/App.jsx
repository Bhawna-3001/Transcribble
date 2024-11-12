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
import Dash from "./pages/dashboard/Dashboard.jsx";
import Translate from "./pages/dashboard/src/layouts/translate/Translate.jsx";
import Transcript from "./pages/dashboard/src/layouts/transcript/Transcript.jsx";
import MCQGenerator from "./pages/dashboard/src/layouts/quiz_generation/MCQGenerator.jsx";
import Sign_Language from "./pages/dashboard/src/layouts/sign_language/Sign_Language.jsx";
import Summary from "./pages/dashboard/src/layouts/summary/Summary.jsx";

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
  )
  
};


const AppContent = ({ isAuth, user }) => {
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  return (
    <div>
      {!isDashboardRoute && <Header isAuth={isAuth} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={isAuth ? <Account user={user} /> : <Login />} />
        <Route path="/login" element={isAuth ? <Home /> : <Login />} />
        <Route path="/register" element={isAuth ? <Home /> : <Register />} />
        <Route path="/verify" element={isAuth ? <Home /> : <Verify />} />
        <Route path="/dashboard" element={<Dash />} />
        <Route path="/translate" element={<Translate/>}/>
        <Route path="/generate_notes" element={<Transcript/>}/>
        <Route path="/summary" element={<Summary/>}/>
        <Route path="/generate-mcqs" element={<MCQGenerator />} />
        <Route path="/animation" element={<Sign_Language/>}/>
      </Routes>
      {!isDashboardRoute && <Footer />}
    </div>
  );
};

export default App;
