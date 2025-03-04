import { useEffect, useState } from "react";
import styles from './NewsCategory.module.css'

interface NewsCategoryProps {
    label: string
    size?: 'small' | 'medium' | 'large'
    article?: {title: string; content:string}
}


const NewsCategory = ({ label, size = "medium" }: NewsCategoryProps) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/news")
            .then((response) => response.json())
            .then((data) => {
                console.log("Fetched articles:", data);
                setArticles(data.response?.results || []); // Adjust based on actual response structure
            })
            .catch((error) => console.error("Error fetching news:", error));
    }, []);

    return (
        <div className={`${styles.categoryContainer} ${styles[size]}`}>
            <h2 className={styles.categoryTitle}>{label}</h2>
            <div>
                {articles.length > 0 ? (
                    <p>News articles received!</p>
                ) : (
                    <p>No news available</p>
                )}
            </div>
        </div>
    );
};

export default NewsCategory