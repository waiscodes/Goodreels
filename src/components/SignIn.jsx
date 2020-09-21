import React from "react";
import "../css/SignIn.css";

const SignIn = () => {
  const SumbitEvent = (e) => {
    e.preventDefault();
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

        <input type="submit" value="Sumbit" />
      </form>
    </>
  );
};
export default SignIn;
