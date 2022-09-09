import React from "react";
import Header from "../perms/Header";
import SignupForm from "./SignupForm";
import Footer from "../perms/Footer";
import styles from "./Signup.module.css";

const Signup = () => {
  return (
    <div className={styles.container}>
      <Header />
      <SignupForm />
      <Footer />
    </div>
  );
};

export default Signup;
