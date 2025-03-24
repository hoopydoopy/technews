import styles from "./NewsCategory.module.css";
import { Article } from "../types/types";

interface NewsCategoryProps {
  label?: string;
  size?: "small" | "medium" | "large";
  article?: Article;
}

const NewsCategory = ({ size = "medium", article }: NewsCategoryProps) => {
  return (
    <div className={`${styles.categoryContainer} ${styles[size]}`}>
      {article ? (
        <a
          href={article.webUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.articleLink}
        >
          <div className={styles.articleCard}>
            {article.fields?.thumbnail && (
              <img
                src={article.fields.thumbnail}
                alt={article.webTitle}
                className={styles.articleImage}
              />
            )}
            <h3 className={styles.articleTitle}>{article.webTitle}</h3>
          </div>
        </a>
      ) : (
        <p>No news available</p>
      )}
    </div>
  );
};

export default NewsCategory;
