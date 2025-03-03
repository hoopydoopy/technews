import { useState } from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
            <button className={styles.toggleButton} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "➖" : "➕"}
            </button>
            {isOpen && (
                <ul>
                    <li>Programming</li>
                    <li>AI</li>
                    <li>Tech Reviews</li>
                    <li>Cybersecurity</li>
                    <li>Startups</li>
                </ul>
            )}
        </div>
    );
};

export default Sidebar;
