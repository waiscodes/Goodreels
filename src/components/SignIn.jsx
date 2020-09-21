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
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" required />

        <label htmlFor="username">Username: </label>
        <input type="text" name="username" id="username" required />

        <input type="submit" value="Sumbit" />
      </form>
    </>
  );
};
export default SignIn;
