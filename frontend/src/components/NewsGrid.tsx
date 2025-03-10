import { useEffect, useState } from 'react'
import NewsCategory from "./NewsCategory";
import styles from './NewsGrid.module.css'

interface Article {
  id: string,
  webTitle: string,
  webUrl: string,
  fields?: {
    
  }
}
const NewsGrid = () => {
    return (
      <div className={styles.gridContainer}>
        <NewsCategory label="test1" size="medium" />
        <NewsCategory label="test2" size="large"/>
        <NewsCategory label="test3" size="small"/>
      </div>
    );
  };
  
  export default NewsGrid;