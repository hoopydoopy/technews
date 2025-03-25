import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import NewsCategory from "./NewsCategory";
import styles from "./NewsGrid.module.css";
import { Article } from "../types/types";

interface NewsGridProps {
  isOpen: boolean;
}

const NewsGrid: React.FC<NewsGridProps> = ({ isOpen }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const location = useLocation(); // Get current URL
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category") || "technology"; // Default to technology

  useEffect(() => {
    fetch(`http://localhost:5000/api/news?q=${category}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched articles:", data);
        setArticles(data.response?.results || []);
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, [category]); // Refetch news when category changes

  return (
    <div
      className={`${styles.gridContainer} ${
        isOpen ? styles.open : styles.closed
      }`}
    >
      {articles.map((article, index) => (
        <NewsCategory
          key={article.id || index}
          size={index === 0 ? "large" : "small"}
          article={article}
        />
      ))}
    </div>
  );
};

export default NewsGrid;
