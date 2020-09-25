import React from "react";
import { connect } from "react-redux";
import "../css/SignIn.css";
import { createProfile } from "../actions/aProfile";
import { logInUser } from "../actions/aActiveUser";
import { Redirect } from "react-router-dom";
import { render } from "@testing-library/react";

const SignIn = (props) => {
  const SumbitEvent = (e) => {
    e.preventDefault();

    const usrEmail = document.querySelector("#email").value;
    const usrUsername = document.querySelector("#username").value;
    const usrPassword = document.querySelector("#password").value;

    props.dispatch(createProfile(usrUsername, usrEmail, usrPassword));
    props.dispatch(logInUser(usrUsername));
  };
  if (props.activeUser.username === undefined) {
    return (
      <>
        <form onSubmit={SumbitEvent}>
          <h2>Sign Up</h2>
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

          <input type="submit" value="Submit" />
        </form>
      </>
    );
  } else return <Redirect to="/Browse" />;
};
export default connect((state) => ({
  state: state,
  activeUser: state.activeUser,
}))(SignIn);
