import React, {useState} from "react";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [userBox, changeUserBox] = useState("");
  const [passBox, changePassBox] = useState("");

  const userChangeHandler = (event) => {
    changeUserBox(event.target.value);
  };

  const passChangeHandler = (event) => {
    changePassBox(event.target.value);
  };

  return (
    <div className={styles.container}>
      <form>
        <div id={styles.userDiv}>
          <label>Username</label>
          <input type="text" name="" value={userBox} onChange={userChangeHandler}/>
        </div>
        <div id={styles.passDiv}>
          <label>Password</label>
          <input type="Password" name="" value={passBox} onChange={passChangeHandler}/>
        </div>
        <button type="submit" id={styles.signin} >Sign in</button>
        <button type="button" id={styles.create} >Create Account</button>
        <button type="button" id={styles.forgot} >Forgot Password?</button>
        <button type="button" id={styles.guest} >Continue as a guest</button>
      </form>
    </div>
  );
};

export default LoginForm;
