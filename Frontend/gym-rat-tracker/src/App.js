import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import LandingPage from "./pages/landingPage/LandingPage";
import CreateAccount from "./pages/createAccount/CreateAccount";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createAccount" element={<CreateAccount />} />
      </Routes>
    </div>
  );
}

export default App;
