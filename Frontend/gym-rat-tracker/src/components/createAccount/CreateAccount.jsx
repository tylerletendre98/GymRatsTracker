import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function CreateAccount() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fullName, setFullName] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();

  return (
    <div>
      <div>
        <h2>Enter your information below</h2>
      </div>
      <div>
        <label htmlFor="">Email: </label>
        <input type="text" placeholder="Enter email" />
      </div>
      <div>
        <label htmlFor="">Password:</label>
        <input
          type="password"
          name=""
          id=""
          placeholder="enter your password"
        />
      </div>
      <div>
        <label htmlFor="">Full Name</label>
        <input type="text" placeholder="Enter your full name" />
      </div>
      <div>
        <label htmlFor="">Enter your height in inches</label>
        <input type="number" placeholder="enter height" />
      </div>
      <div>
        <label htmlFor="">Enter your weight: </label>
        <input type="text" placeholder="enter weight in pounds" />
      </div>
      <div>
        <button>Create Account</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </div>
  );
}

export default CreateAccount;
