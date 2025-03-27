import { FiChevronLeft, FiChevronRight, FiMenu } from "react-icons/fi";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import navigation hooks
import styles from "./Sidebar.module.css";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onCategorySelect: (category: string) => void;
}

const categories = [
  {
    id: "AI",
    subcategories: ["AI", "ChatGPT", "Copilot", "Deepseek", "OpenAI"],
  },
  { id: "Big Tech", subcategories: ["Apple", "Google", "Microsoft", "Tesla"] },
  { id: "Crypto", subcategories: ["Altcoins", "Bitcoin", "NFTs"] },
  {
    id: "Cybersecurity",
    subcategories: [
      "Cyber Warfare",
      "Data Breaches",
      "Hacking",
      "Encryption",
      "Ransomware",
    ],
  },
  {
    id: "Gadgets",
    subcategories: ["AMD", "Android", "Apple", "Nvidia", "Qualcomm", "Samsung"],
  },
  { id: "IoT", subcategories: ["Robotics", "Smart home", "Wearable Tech"] },
  {
    id: "Programming",
    subcategories: ["C++", "Javascript", "Kotlin", "Python"],
  },
  { id: "Video Games", subcategories: ["PC", "Playstation", "Xbox"] },
  { id: "Social Media", subcategories: ["Facebook", "Instagram", "Tiktok"] },
];

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  setIsOpen,
  onCategorySelect,
}) => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current URL
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(
    null
  );

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onCategorySelect(category);
    navigate(`/news?category=${category}`);
  };

  const handleSubCategoryClick = (subcategory: string, category: string) => {
    setActiveSubCategory(subcategory);
    navigate(`/news?category=${category}?subcategory=${subcategory}`);
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
        {isOpen ? <FiChevronLeft size={25} /> : <FiMenu size={20} />}
      </button>

      {isOpen && (
        <ul>
          {/* Home Button */}
          <li
            onClick={handleHomeClick}
            className={`${styles.categoryItem} ${
              location.pathname === "/" ? styles.active : styles.inactive
            }`}
          >
            <FiChevronRight className={styles.rightArrow} size={20} />
            <p className={styles.listItem}>Home</p>
          </li>

          {/* Categories */}
          {categories.map((category) => (
            <div key={category.id}>
              <li
                onClick={() => handleCategoryClick(category.id)}
                className={`${styles.categoryItem} ${
                  activeCategory === category.id
                    ? styles.active
                    : styles.inactive
                }`}
              >
                <FiChevronRight className={styles.rightArrow} size={20} />
                <p className={styles.listItem}>{category.id}</p>
                <span className={styles.arrow}></span>
              </li>
              {category.subcategories.map((subcategory) => (
                <li
                  onClick={() =>
                    handleSubCategoryClick(subcategory, category.id)
                  }
                  className={`${styles.subCategoryItem} ${
                    activeCategory === category.id
                      ? styles.subActive
                      : styles.subInactive
                  } ${
                    activeSubCategory === subcategory
                      ? styles.activeSubCategory
                      : styles.inactiveSubCategory
                  }`}
                >
                  <span className={styles.subarrow}>{"> "}</span>
                  <span className={styles.subslash}>{"/ "}</span>

                  {subcategory}
                </li>
              ))}
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
