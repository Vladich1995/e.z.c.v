import React, {useState} from "react";
import styles from "./SignupForm.module.css";

const SignupForm = () => {
  const [userBox, changeUserBox] = useState("");
  const [emailBox, changeEmailBox] = useState("");
  const [confEmailBox, changeConfEmailBox] = useState("");
  const [passBox, changePassBox] = useState("");
  const [confPassBox, changeConfPassBox] = useState("");

  const changeUserHandler = (event) => {
    changeUserBox(event.target.value);
  };

  const changeEmailHandler = (event) => {
    changeEmailBox(event.target.value);
  };

  const changeConfEmailHandler = (event) => {
    changeConfEmailBox(event.target.value);
  };

  const changePassHandler = (event) => {
    changePassBox(event.target.value);
  };

  const changeConfPassHandler = (event) => {
    changeConfPassBox(event.target.value);
  };

  return (
    <div className={styles.container}>
      <form>
        <div id={styles.userDiv}>
          <label>Username</label>
          <input type="text" name="" value={userBox} onChange={changeUserHandler}/>
        </div>
        <div id={styles.emailDiv}>
          <label>Email</label>
          <input type="email" name="" value={emailBox} onChange={changeEmailHandler}/>
        </div>
        <div id={styles.confEmailDiv}>
          <label>Confirm Email</label>
          <input type="email" name="" value={confEmailBox} onChange={changeConfEmailHandler}/>
        </div>
        <div id={styles.passDiv}>
          <label>Password</label>
          <input type="Password" name="" value={passBox} onChange={changePassHandler}/>
        </div>
        <div id={styles.confPassDiv}>
          <label>Confirm Password</label>
          <input type="Password" name="" value={confPassBox} onChange={changeConfPassHandler}/>
        </div>
        <button type="button" id={styles.cancel}>Cancel</button>
        <button type="submit" id={styles.signUp}>Sign up</button>
      </form>
    </div>
  );
};

export default SignupForm;
