import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Testimonials from "../../components/testimonials/Testimonials";

const Home = () => {
    const navigate = useNavigate();
    return (
      <div>
        <div className="home">
          <div className="home-content">
            <h1>Welcome to Transcribble</h1>
            <p>Learn, Grow, Excel</p>
            <button onClick={() => navigate("/login")} className="common-btn">
              Get Started
            </button>
          </div>
        </div>
        <Testimonials />
      </div>
    );
  };
  
  export default Home;