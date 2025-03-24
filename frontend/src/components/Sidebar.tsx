import { FiChevronLeft, FiMenu } from "react-icons/fi";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import navigation hooks
import styles from "./Sidebar.module.css";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onCategorySelect: (category: string) => void;
}

const categories = [
  "Programming",
  "OpenAI",
  "Tech Reviews",
  "Cybersecurity",
  "Startups",
];

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  setIsOpen,
  onCategorySelect,
}) => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current URL
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onCategorySelect(category);
    navigate(`/news?category=${category}`);
  };

  const handleHomeClick = () => {
    setActiveCategory(null);
    navigate("/");
  };

  return (
    <div
      className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
    >
      <button
        className={styles.toggleButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiChevronLeft size={20} /> : <FiMenu size={20} />}
      </button>

      {isOpen && (
        <ul>
          {/* Home Button */}
          <li
            onClick={handleHomeClick}
            className={`${styles.categoryItem} ${
              location.pathname === "/" ? styles.active : ""
            }`}
          >
            Home
          </li>

          {/* Categories */}
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`${styles.categoryItem} ${
                activeCategory === category ? styles.active : ""
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
