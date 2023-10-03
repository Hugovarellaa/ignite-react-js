import { Logo } from '../Logo'
import styles from './header.module.css'

export function Header() {
  return (
    <>
      <div className={styles.container}>
        <Logo />
        <span>Ignite Feed</span>
      </div>
    </>
  )
}
