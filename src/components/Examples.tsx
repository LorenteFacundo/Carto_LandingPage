import { useState } from 'react'
import { motion } from 'framer-motion'
import { StaggerContainer, staggerItem, FadeIn } from './AnimateIn'
import MockupModal, { type ExampleData } from './MockupModal'
import styles from './Examples.module.css'

const examples = [
  {
    id: 'panaderia',
    name: 'Panadería El Sol',
    neighborhood: 'Villa Urquiza',
    tag: 'Gastronomía',
    tagColor: '#C8973E',
    description: 'Fuerte presencia en Instagram, fotos cuidadas, sin web. Armamos una landing con estética cálida y familiar.',
    accent: '#7B4A1E',
    bg: 'linear-gradient(135deg, #3D1F0D 0%, #7B4A1E 100%)',
    icon: '🥖',
  },
  {
    id: 'peluqueria',
    name: 'Estudio Ágata',
    neighborhood: 'Palermo',
    tag: 'Belleza',
    tagColor: '#7E6A9E',
    description: 'Estética minimal y moderna en redes. La propuesta refleja esa identidad con una web limpia y directa.',
    accent: '#7E6A9E',
    bg: 'linear-gradient(135deg, #1A1429 0%, #3D2C5A 100%)',
    icon: '✂️',
  },
  {
    id: 'ferreteria',
    name: 'Ferretería López',
    neighborhood: 'Chacarita',
    tag: 'Comercio',
    tagColor: '#3A6EA8',
    description: 'Negocio familiar de 20 años, sin ninguna presencia online. La propuesta priorizó claridad y confianza.',
    accent: '#3A6EA8',
    bg: 'linear-gradient(135deg, #0D1B2A 0%, #1B3A5E 100%)',
    icon: '🔧',
  },
  {
    id: 'club-juvenil',
    name: 'Club S. y D. Juvenil de Llavallol',
    neighborhood: 'Llavallol',
    tag: 'Club Social',
    tagColor: '#28a745',
    description: 'Club histórico afiliado a Banfield. Sin web ni redes. Diseñamos una propuesta con actividades y socios online.',
    accent: '#28a745',
    bg: 'linear-gradient(135deg, #0b1a10 0%, #1b5e20 100%)',
    icon: '⚽',
  },
]

export default function Examples() {
  const [selected, setSelected] = useState<ExampleData | null>(null)

  return (
    <section className={styles.section} id="ejemplos">
      <div className={styles.inner}>
        <FadeIn className={styles.header}>
          <span className={styles.label}>Ejemplos de propuestas</span>
          <h2 className={styles.title}>
            Así son las propuestas<br />que preparamos.
          </h2>
          <p className={styles.sub}>
            Cada una hecha específicamente para ese negocio. Antes de mandar el primer mensaje.
          </p>
        </FadeIn>

        <StaggerContainer className={styles.grid} staggerDelay={0.12}>
          {examples.map((ex) => (
            <motion.article
              key={ex.id}
              className={styles.card}
              variants={staggerItem}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
              onClick={() => setSelected(ex)}
              style={{ cursor: 'pointer' }}
            >
              <motion.div className={styles.cardVisual} style={{ background: ex.bg }} layoutId={`card-visual-${ex.id}`}>
                <div className={styles.cardBrowser}>
                  <div className={styles.browserBar}>
                    <span className={styles.dot} style={{ background: '#FF5F57' }} />
                    <span className={styles.dot} style={{ background: '#FFBD2E' }} />
                    <span className={styles.dot} style={{ background: '#28C840' }} />
                    <span className={styles.urlBar}>propuestas.carto.dev/{ex.id}</span>
                  </div>
                  <div className={styles.browserContent}>
                    <div className={styles.mockupEmoji}>{ex.icon}</div>
                    <div className={styles.mockupLines}>
                      <div className={styles.mockupLine} style={{ width: '70%', background: 'rgba(255,255,255,0.8)' }} />
                      <div className={styles.mockupLine} style={{ width: '50%', background: 'rgba(255,255,255,0.4)' }} />
                      <div className={styles.mockupLine} style={{ width: '55%', background: `${ex.accent}90` }} />
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className={styles.cardBody}>
                <span className={styles.cardTag} style={{ color: ex.tagColor, borderColor: `${ex.tagColor}40` }}>
                  {ex.tag}
                </span>
                <h3 className={styles.cardName}>{ex.name}</h3>
                <span className={styles.cardNeighborhood}>{ex.neighborhood}</span>
                <p className={styles.cardDesc}>{ex.description}</p>
              </div>
            </motion.article>
          ))}
        </StaggerContainer>
      </div>
      <MockupModal selected={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
