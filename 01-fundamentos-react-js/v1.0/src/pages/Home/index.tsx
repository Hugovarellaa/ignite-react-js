import { Header } from '../../components/Header'
import styles from './home.module.css'

export function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.wrapper}>
        <aside>Sidebar</aside>
        <main>Post</main>
      </div>
    </div>
  )
}
