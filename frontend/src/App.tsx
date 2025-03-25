import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewsGrid from "./components/NewsGrid";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home"; // Import Home component
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [category, setCategory] = useState("OpenAI");

  return (
    <Router>
      <div className={styles.container}>
        <Sidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          onCategorySelect={setCategory}
        />
        <Routes>
          <Route path="/" element={<Home isOpen={isOpen} />} />
          <Route
            path="/news"
            element={<NewsGrid isOpen={isOpen} category={category} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
