import React from "react";
import { connect } from "react-redux";
import "../css/SignIn.css";

const SignIn = (store) => {
  const SumbitEvent = (e) => {
    e.preventDefault();

    const usrEmail = document.querySelector("#email").value;
    console.log(usrEmail);

    const usrUsername = document.querySelector("#username").value;
    console.log(usrUsername);

    const usrPassword = document.querySelector("#password").value;
    console.log(usrPassword);
  };

  return (
    <>
      <form onSubmit={SumbitEvent}>
        <h2>Signup</h2>
        <label htmlFor="email" className="screen-reader-text">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />

        <label htmlFor="username" className="screen-reader-text">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          required
        />

        <label htmlFor="password" className="screen-reader-text">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
        />

        <input type="submit" value="Sumbit" />
      </form>
    </>
  );
};
export default connect((state) => ({ store: state }))(SignIn);
