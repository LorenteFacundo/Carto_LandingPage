import { motion } from 'framer-motion'
import CompassRose from './CompassRose'
import styles from './Hero.module.css'

const textVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 1.6 + i * 0.15, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      {/* Cartographic grid background */}
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.inner}>
        <motion.div
          className={styles.compass}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <CompassRose size={260} />
        </motion.div>

        <div className={styles.text}>
          <motion.span
            className={styles.label}
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Carto Discovery
          </motion.span>

          <motion.h1
            className={styles.headline}
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Tu negocio tiene<br />
            <em>potencial online.</em><br />
            Ya lo sabemos.
          </motion.h1>

          <motion.p
            className={styles.sub}
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Encontramos negocios de barrio que merecen estar en internet
            y preparamos una propuesta concreta — antes de escribirte —
            para que puedas ver con tus propios ojos cómo se vería tu web.
          </motion.p>

          <motion.div
            className={styles.actions}
            custom={3}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <a href="#como-trabajamos" className={styles.btnPrimary}>
              Cómo trabajamos
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#ejemplos" className={styles.btnSecondary}>
              Ver ejemplos
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className={styles.scrollCue}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.8 }}
      >
        <motion.div
          className={styles.scrollDot}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
