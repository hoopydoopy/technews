import React from "react";
import styles from "./Home.module.css";
interface HomeProps {
  isOpen: boolean;
}
const Home: React.FC<HomeProps> = ({ isOpen }) => {
  return (
    <div
      className={`${styles.homeContainer} ${
        isOpen ? styles.open : styles.closed
      }`}
    >
      <div className={styles.titleContainer}>
        <h1>Digital Dispatch </h1>
      </div>
    </div>
  );
};

export default Home;
