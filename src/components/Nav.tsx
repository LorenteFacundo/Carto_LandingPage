import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <a href="/" className={styles.logo} aria-label="Carto — inicio">
        <svg width="24" height="24" viewBox="0 0 100 100" fill="none" aria-hidden="true">
          <circle cx="50" cy="50" r="45" stroke="#C8973E" strokeWidth="3"/>
          <line x1="50" y1="5" x2="50" y2="95" stroke="#C8973E" strokeWidth="2"/>
          <line x1="5" y1="50" x2="95" y2="50" stroke="#C8973E" strokeWidth="2"/>
          <polygon points="50,8 54,44 50,48 46,44" fill="#C8973E"/>
          <circle cx="50" cy="50" r="5" fill="#C8973E"/>
        </svg>
        <span>Carto</span>
      </a>

      <a href="#contacto" className={styles.cta}>
        Hablemos
      </a>
    </motion.header>
  )
}
