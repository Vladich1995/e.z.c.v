import React from "react";
import styles from "./SignupForm.module.css";

const SignupForm = () => {
  return (
    <div className={styles.container}>
      <form>
        <div id={styles.userDiv}>
          <label>Username</label>
          <input type="text" name="" value=""/>
        </div>
        <div id={styles.emailDiv}>
          <label>Email</label>
          <input type="email" name="" value=""/>
        </div>
        <div id={styles.confEmailDiv}>
          <label>Confirm Email</label>
          <input type="email" name="" value=""/>
        </div>
        <div id={styles.passDiv}>
          <label>Password</label>
          <input type="Password" name="" value=""/>
        </div>
        <div id={styles.confPassDiv}>
          <label>Confirm Password</label>
          <input type="Password" name="" value=""/>
        </div>
        <button type="button" id={styles.cancel}>Cancel</button>
        <button type="submit" id={styles.signUp}>Sign up</button>
      </form>
    </div>
  );
};

export default SignupForm;
