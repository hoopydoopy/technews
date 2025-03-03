import NewsGrid from './components/NewsGrid'
import styles from './App.module.css'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className={styles.container}>
      <Sidebar />
      <NewsGrid/>
    </div>
  )
}

export default App
