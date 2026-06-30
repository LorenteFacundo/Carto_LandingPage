import { motion } from 'framer-motion'
import { StaggerContainer, staggerItem } from './AnimateIn'
import styles from './HowWeWork.module.css'

const steps = [
  {
    num: '01',
    title: 'Vemos negocios con potencial',
    body: 'Recorremos zonas y negocios de barrio buscando los que tienen algo especial pero todavía no están online. No mandamos mensajes al azar.',
  },
  {
    num: '02',
    title: 'Armamos una propuesta concreta',
    body: 'Antes de escribirte, preparamos una landing page de muestra hecha pensando específicamente en tu negocio, tu marca y tu rubro.',
  },
  {
    num: '03',
    title: 'Si te gusta, lo hacemos realidad',
    body: 'Te mostramos qué podría ser tu presencia online. Si te convence, lo charlamos y lo construimos juntos, sin vueltas ni contratos complicados.',
  },
]

export default function HowWeWork() {
  return (
    <section className={styles.section} id="como-trabajamos">
      <div className={styles.inner}>
        <StaggerContainer className={styles.header}>
          <motion.span className={styles.label} variants={staggerItem}>
            Cómo trabajamos
          </motion.span>
          <motion.h2 className={styles.title} variants={staggerItem}>
            Sin sorpresas, sin promesas vacías.
          </motion.h2>
          <motion.p className={styles.sub} variants={staggerItem}>
            Así funciona cada propuesta que mandamos.
          </motion.p>
        </StaggerContainer>

        <StaggerContainer className={styles.steps} staggerDelay={0.15}>
          {steps.map((step) => (
            <motion.div key={step.num} className={styles.step} variants={staggerItem}>
              <span className={styles.stepNum}>{step.num}</span>
              <div className={styles.stepLine} aria-hidden="true" />
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepBody}>{step.body}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
