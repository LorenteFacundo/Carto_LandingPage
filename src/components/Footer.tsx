import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <a href="/" className={styles.logo} aria-label="Carto — inicio">
          <svg width="20" height="20" viewBox="0 0 100 100" fill="none" aria-hidden="true">
            <circle cx="50" cy="50" r="45" stroke="#C8973E" strokeWidth="3"/>
            <line x1="50" y1="5" x2="50" y2="95" stroke="#C8973E" strokeWidth="2"/>
            <line x1="5" y1="50" x2="95" y2="50" stroke="#C8973E" strokeWidth="2"/>
            <polygon points="50,8 54,44 50,48 46,44" fill="#C8973E"/>
            <circle cx="50" cy="50" r="5" fill="#C8973E"/>
          </svg>
          <span>Carto</span>
        </a>

        <p className={styles.tagline}>Estudio de desarrollo web · Buenos Aires</p>

        <p className={styles.copy}>© {new Date().getFullYear()} Carto</p>
      </div>
    </footer>
  )
}
