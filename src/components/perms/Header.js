import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <ul>
        <li><div className={styles.image}></div></li>
        <li><a className={styles.about}>About</a></li>
        <li><a className={styles.contact}>Contact</a></li>
      </ul>
    </div>
  );
};

export default Header;
