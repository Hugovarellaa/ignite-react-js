import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import styles from './home.module.css'

export function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>Post</main>
      </div>
    </div>
  )
}
