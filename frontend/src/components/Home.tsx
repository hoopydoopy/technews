import React from "react";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.titleContainer}>
        <h1>TechNews</h1>
      </div>
    </div>
  );
};

export default Home;
