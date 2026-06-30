import { motion } from 'framer-motion'
import { StaggerContainer, staggerItem, FadeIn } from './AnimateIn'
import styles from './WhyCarto.module.css'

const reasons = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Trato directo',
    body: 'Sin intermediarios, sin cuentas de cliente abstractas. Hablás con quien hace el trabajo.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Propuesta antes de hablar',
    body: 'Llegamos con algo concreto, no solo con ideas. Ves el resultado antes de comprometerte con nada.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Desarrollo a medida',
    body: 'No usamos plantillas. Cada sitio está hecho para el negocio específico, con su contenido, su identidad y sus necesidades.',
  },
]

export default function WhyCarto() {
  return (
    <section className={styles.section} id="por-que-carto">
      <div className={styles.inner}>
        <div className={styles.layout}>
          <FadeIn className={styles.left}>
            <span className={styles.label}>Por qué Carto</span>
            <h2 className={styles.title}>
              Somos un estudio chico.<br />
              Y eso es intencional.
            </h2>
            <p className={styles.body}>
              Carto hace desarrollo web y software a medida para organizaciones chicas. 
              Carto Discovery es la manera en que llegamos a los negocios que sentimos 
              que merecen tener presencia online — y todavía no la tienen.
            </p>
            <p className={styles.body}>
              No prometemos escala masiva. Prometemos que alguien que entiende de web 
              va a pensar específicamente en tu negocio.
            </p>
          </FadeIn>

          <StaggerContainer className={styles.reasons} staggerDelay={0.12}>
            {reasons.map((r) => (
              <motion.div key={r.title} className={styles.reason} variants={staggerItem}>
                <div className={styles.reasonIcon}>{r.icon}</div>
                <div>
                  <h3 className={styles.reasonTitle}>{r.title}</h3>
                  <p className={styles.reasonBody}>{r.body}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
