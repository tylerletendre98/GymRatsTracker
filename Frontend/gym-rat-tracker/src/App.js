import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import LandingPage from "./pages/landingPage/LandingPage";
import CreateAccountPage from "./pages/createAccountPage/CreateAccountPage";
import axios from "axios";
import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState();

  const loginUser = (loginInfo) => {
    axios
      .post(`http://localhost:5000/api/user/login`, loginInfo)
      .then((res) => {
        setCurrentUser(res.data);
      });
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage loginUser={loginUser} />} />
        <Route path="/createAccount" element={<CreateAccountPage />} />
      </Routes>
    </div>
  );
}

export default App;
