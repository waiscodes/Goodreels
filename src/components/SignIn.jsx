import React from "react";
import { connect } from "react-redux";
import "../css/pSignIn.css";
import { createProfile } from "../actions/aProfile";
import { logInUser } from "../actions/aActiveUser";
import { Redirect } from "react-router-dom";

const SignIn = (props) => {
  // Get values from inputs, create profile in store, keeps track of who is logged in as well
  const sumbitEvent = (e) => {
    e.preventDefault();

    const usrEmail = "Set your email by clicking Edit"
    const usrUsername = document.querySelector("#username").value;
    const usrPassword = document.querySelector("#password").value;

    props.dispatch(createProfile(usrUsername, usrEmail, usrPassword));
    props.dispatch(logInUser(usrUsername));
  };

  // If user is not logged in, show this page, otherwise redirect to Browse as home page
  if (props.activeUser.username === undefined) {
    return (
      <>
        <form className="signup-form" onSubmit={sumbitEvent}>
          <label htmlFor="username" className="labels">
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

          <label htmlFor="password" className="labels">
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

          <input type="submit" className="submitBtn" value="Submit" />
        </form>
      </>
    );
  } else return <Redirect to="/" />;
};
export default connect((state) => ({
  state: state,
  activeUser: state.activeUser,
}))(SignIn);
