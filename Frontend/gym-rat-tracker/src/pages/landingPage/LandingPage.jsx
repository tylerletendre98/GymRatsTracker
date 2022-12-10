import React from "react";
import "./landingPage.css";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-page-container">
      <div className="welcome-message-container">
        <h1>Welcome to Gym Rat Tracker!</h1>
        <h3>
          If you've been in the gym for years or its your first time you are
          still welcome here!
        </h3>
      </div>
      <div className="login-buttons-container">
        <div>
          <p>If you are current gym rat login here</p>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div>
          <p>If you are a new gym rat create and account here</p>
          <Link to="/createAccount">
            <button>Create Account</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
