import React from "react";
import Header from "../perms/Header";
import LoginForm from "./LoginForm";
import Footer from "../perms/Footer";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default Login;
