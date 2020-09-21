import React from "react";
import "../css/SignIn.css";

const SignIn = () => {
  const SumbitEvent = (e) => {
    // e.preventDefault();
  };

  return (
    <>
      <h2>Signup</h2>
      <form onSubmit={SumbitEvent}>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" />

        <label htmlFor="username">Username: </label>
        <input type="text" name="username" id="username" />

        <input type="submit" value="Sumbit" />
      </form>
    </>
  );
};
export default SignIn;
