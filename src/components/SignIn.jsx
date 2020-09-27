import React from "react";
import { connect } from "react-redux";
import "../css/SignIn.css";
import { createProfile } from "../actions/aProfile";
import { logInUser } from "../actions/aActiveUser";
import { Redirect } from "react-router-dom";
import { render } from "@testing-library/react";

const SignIn = (props) => {
  const sumbitEvent = (e) => {
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
        <form className="signup-form" onSubmit={sumbitEvent}>
          <label htmlFor="username" className="screen-reader-text">
            Username
          </label>
          <input
            type="text"
            name="username"
            className="inputs"
            id="username"
            placeholder="Username"
            required
          />

          <label htmlFor="email" className="screen-reader-text">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="inputs"
            id="email"
            placeholder="Email"
            required
          />

          <label htmlFor="password" className="screen-reader-text">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="inputs"
            id="password"
            placeholder="Password"
            required
          />

          <input type="submit" className="submit-btn" value="Submit" />
        </form>
      </>
    );
  } else return <Redirect to="/Browse" />;
};
export default connect((state) => ({
  state: state,
  activeUser: state.activeUser,
}))(SignIn);
