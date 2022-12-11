import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div>
        <label htmlFor="">Email: </label>
        <input type="text" name="" id="" placeholder="Enter Email" />
      </div>
      <div>
        <label htmlFor="">Password: </label>
        <input type="password" name="" id="" placeholder="Enter password" />
      </div>
      <div>
        <button>Login</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
