import styles from './sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.container}>
      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
        alt=""
        className={styles.cover}
      />

      <div className={styles.profile}>
        <img
          src="https://github.com/Hugovarellaa.png"
          alt=""
          className={styles.avatar}
        />
        <strong>Hugo Alves Varella</strong>
        <span>Web Development</span>
      </div>

      <footer className={styles.footer}>
        <a href="">Editar perfil</a>
      </footer>
    </aside>
  )
}
