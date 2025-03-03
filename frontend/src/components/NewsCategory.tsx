import { useEffect, useState } from "react";

const NewsCategory = ({ label }: { label: string }) => {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `https://api.thenewsapi.com/v1/news/all?api_key=BhUe7VTa6ZXJSvLfeWTCdHEnrssH8Z0Sa5NHjgiP&categories=technology&language=en`
        );
        const data = await response.json();
        console.log(data);  // You can log the entire response to see its structure
        setArticles(data.data || []);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, [label]);

  return (
    <div>
      <h2>{label}</h2>
      <ul>
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <li key={index}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </li>
          ))
        ) : (
          <li>No articles found</li>
        )}
      </ul>
    </div>
  );
};

export default NewsCategory;
