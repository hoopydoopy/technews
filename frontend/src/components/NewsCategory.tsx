import styles from './NewsCategory.module.css'
interface NewsCategoryProps {
    label: string
    size?: 'small' | 'medium' | 'large'
    article?: {title: string; content:string}
}

const NewsCategory = ( { label, size = 'medium' }: NewsCategoryProps) => {
    return (
        <div className={`${styles.categoryContainer} ${styles[size]}`}>
            <h2 className={styles.categoryTitle}>{ label }</h2>
        </div>
    )
}

export default NewsCategory