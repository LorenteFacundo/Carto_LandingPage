import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import styles from './MockupModal.module.css'

export interface ExampleData {
  id: string
  name: string
  neighborhood: string
  tag: string
  tagColor: string
  description: string
  accent: string
  bg: string
  icon: string
}

interface MockupModalProps {
  selected: ExampleData | null
  onClose: () => void
}

function MockupBanner() {
  return (
    <div className={styles.mockupBanner}>
      <span className={styles.bannerIcon}>✦</span>
      <span>Esta es una propuesta de ejemplo generada por Carto. No está publicada ni es funcional.</span>
      <span className={styles.bannerIcon}>✦</span>
    </div>
  )
}

function FakeButton({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`${styles.fakeBtn} ${className || ''}`}
      title="Este es un ejemplo — el botón no está activo"
      role="button"
      aria-disabled="true"
    >
      {children}
    </span>
  )
}

/* ─── PANADERÍA ──────────────────────────────── */
function PanaderiaPage() {
  return (
    <div className={styles.pageWrap}>
      <MockupBanner />

      {/* Nav */}
      <nav className={styles.pNav} style={{ background: '#7B4A1E' }}>
        <span className={styles.pNavLogo}>🥖 El Sol</span>
        <div className={styles.pNavLinks}>
          <a>Productos</a>
          <a>Nosotros</a>
          <a>Cómo llegar</a>
          <FakeButton>Pedir por WhatsApp</FakeButton>
        </div>
      </nav>

      {/* Hero */}
      <div className={styles.panHero}>
        <div className={styles.panHeroOverlay} />
        <div className={styles.panHeroContent}>
          <p className={styles.panHeroLabel}>Desde 1995 en Villa Urquiza</p>
          <h1>Panadería El Sol</h1>
          <p className={styles.panHeroSub}>Panes artesanales, medialunas recién hechas y pastelería de barrio.</p>
          <FakeButton className={styles.panHeroBtn}>Ver nuestros productos ↓</FakeButton>
        </div>
      </div>

      {/* Horarios rápidos */}
      <div className={styles.panStrip}>
        <div className={styles.panStripItem}>
          <span>🕐</span>
          <span><strong>Lun a Vie</strong> · 7:00 — 20:00</span>
        </div>
        <div className={styles.panStripItem}>
          <span>🕐</span>
          <span><strong>Sáb y Dom</strong> · 7:30 — 14:00</span>
        </div>
        <div className={styles.panStripItem}>
          <span>📍</span>
          <span>Av. Triunvirato 4500, CABA</span>
        </div>
      </div>

      {/* Productos */}
      <div className={styles.panSection}>
        <h2 className={styles.panSectionTitle}>Lo que preparamos cada mañana</h2>
        <div className={styles.panGrid}>
          {[
            { emoji: '🥐', name: 'Medialunas', desc: 'De manteca y de grasa, recién horneadas hasta el mediodía.' },
            { emoji: '🍞', name: 'Pan de Masa Madre', desc: 'Fermentación de 24hs. Corteza crujiente, miga esponjosa.' },
            { emoji: '🥖', name: 'Baguette Casera', desc: 'Larga, crocante y perfecta para el desayuno o la cena.' },
            { emoji: '🎂', name: 'Pastelería del Día', desc: 'Tortas, budines y facturas según lo que salga del horno.' },
            { emoji: '🫓', name: 'Pan de Semillas', desc: 'Lino, girasol y sésamo. Ideal para sandwiches.' },
            { emoji: '🍰', name: 'Tartas Saladas', desc: 'Espinaca, jamón y queso, o calabaza y brie. Cambian según la semana.' },
          ].map((p) => (
            <div key={p.name} className={styles.panCard}>
              <span className={styles.panCardEmoji}>{p.emoji}</span>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Nosotros */}
      <div className={styles.panAbout}>
        <div className={styles.panAboutText}>
          <h2>Somos una panadería de barrio.</h2>
          <p>Empezamos en 1995 en un local chico en Triunvirato. Hoy somos tres familias que hacemos exactamente lo mismo que al principio: levantarnos temprano, encender el horno y tener el pan listo cuando el barrio despierta.</p>
          <p>No hacemos delivery, no tenemos app. Pero sabemos el nombre de casi todos nuestros clientes.</p>
        </div>
        <div className={styles.panAboutImg}>
          <img
            src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&q=80&w=600"
            alt="Interior de la panadería"
          />
        </div>
      </div>

      {/* CTA final */}
      <div className={styles.panCta}>
        <h2>¿Querés hacer un pedido?</h2>
        <p>Escribinos por WhatsApp y lo preparamos.</p>
        <FakeButton className={styles.panCtaBtn}>💬 Pedir por WhatsApp</FakeButton>
      </div>
    </div>
  )
}

/* ─── ESTUDIO ÁGATA ──────────────────────────── */
function PeluqueriaPage() {
  return (
    <div className={styles.pageWrap}>
      <MockupBanner />

      {/* Nav */}
      <nav className={styles.pNav} style={{ background: '#1A1429' }}>
        <span className={styles.pNavLogo} style={{ letterSpacing: '0.15em', fontWeight: 300 }}>ESTUDIO ÁGATA</span>
        <div className={styles.pNavLinks}>
          <a>Servicios</a>
          <a>Sobre nosotros</a>
          <a>Galería</a>
          <FakeButton>Reservar turno</FakeButton>
        </div>
      </nav>

      {/* Hero */}
      <div className={styles.pelHero}>
        <img
          src="https://images.unsplash.com/photo-1560066984-138daaa0f5fd?auto=format&fit=crop&q=80&w=1400&h=700"
          alt="Interior del estudio"
          className={styles.pelHeroImg}
        />
        <div className={styles.pelHeroOverlay} />
        <div className={styles.pelHeroContent}>
          <p className={styles.pelHeroLabel}>Palermo · Buenos Aires</p>
          <h1>Estudio Ágata</h1>
          <p className={styles.pelHeroSub}>Un espacio donde el cuidado personal se toma en serio.</p>
          <FakeButton className={styles.pelHeroBtn}>Reservar turno →</FakeButton>
        </div>
      </div>

      {/* Servicios */}
      <div className={styles.pelSection}>
        <h2 className={styles.pelSectionTitle}>Servicios</h2>
        <p className={styles.pelSectionSub}>Trabajamos con turno previo. Escribinos para coordinar.</p>
        <div className={styles.pelServGrid}>
          {[
            { name: 'Corte & Styling', price: 'Desde $8.000', desc: 'Diagnóstico de rostro + corte adaptado a tu morfología y estilo de vida.' },
            { name: 'Colorimetría', price: 'Desde $15.000', desc: 'Balayage, babylights, decoloración técnica y coloración fantasía.' },
            { name: 'Tratamientos', price: 'Desde $6.000', desc: 'Keratina, hidratación profunda, reconstrucción y botox capilar.' },
            { name: 'Mechas', price: 'Desde $12.000', desc: 'Mechas clásicas, con papel o con gorrito. Resultados naturales o de alto contraste.' },
          ].map((s) => (
            <div key={s.name} className={styles.pelServCard}>
              <div className={styles.pelServHeader}>
                <h3>{s.name}</h3>
                <span className={styles.pelServPrice}>{s.price}</span>
              </div>
              <p>{s.desc}</p>
              <FakeButton className={styles.pelServBtn}>Consultar</FakeButton>
            </div>
          ))}
        </div>
      </div>

      {/* Galería */}
      <div className={styles.pelGallery}>
        <h2 className={styles.pelSectionTitle}>Trabajos recientes</h2>
        <div className={styles.pelGalleryGrid}>
          <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400&h=400" alt="Trabajo 1" />
          <img src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=400&h=400" alt="Trabajo 2" />
          <img src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=400&h=400" alt="Trabajo 3" />
          <img src="https://images.unsplash.com/photo-1513361994 14-7a0a174c9183?auto=format&fit=crop&q=80&w=400&h=400" alt="Trabajo 4" />
        </div>
      </div>

      {/* CTA */}
      <div className={styles.pelCta}>
        <h2>¿Querés reservar un turno?</h2>
        <p>Escribinos por Instagram o al WhatsApp del estudio y coordinamos.</p>
        <div className={styles.pelCtaBtns}>
          <FakeButton className={styles.pelCtaBtnWa}>💬 WhatsApp</FakeButton>
          <FakeButton className={styles.pelCtaBtnIg}>📸 Instagram</FakeButton>
        </div>
      </div>
    </div>
  )
}

/* ─── FERRETERÍA LÓPEZ ───────────────────────── */
function FerretePage() {
  return (
    <div className={styles.pageWrap}>
      <MockupBanner />

      {/* Nav */}
      <nav className={styles.pNav} style={{ background: '#1B3A5E' }}>
        <span className={styles.pNavLogo}>🔧 Ferretería López</span>
        <div className={styles.pNavLinks}>
          <a>Productos</a>
          <a>Servicios</a>
          <a>¿Cómo llegar?</a>
          <FakeButton>Consultar stock</FakeButton>
        </div>
      </nav>

      {/* Hero */}
      <div className={styles.ferHero}>
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1400&h=600"
          alt="Interior de la ferretería"
          className={styles.ferHeroImg}
        />
        <div className={styles.ferHeroOverlay} />
        <div className={styles.ferHeroContent}>
          <p className={styles.ferHeroLabel}>Chacarita, CABA · Desde 2004</p>
          <h1>Ferretería López</h1>
          <p className={styles.ferHeroSub}>Todo para tus proyectos y arreglos en casa. En persona o por WhatsApp.</p>
          <div className={styles.ferHeroActions}>
            <FakeButton className={styles.ferHeroBtn}>Ver catálogo</FakeButton>
            <FakeButton className={styles.ferHeroBtnSec}>Consultar stock</FakeButton>
          </div>
        </div>
      </div>

      {/* Info rápida */}
      <div className={styles.ferStrip}>
        <div className={styles.ferStripItem}><span>📍</span><span>Thames 1300, Chacarita</span></div>
        <div className={styles.ferStripItem}><span>🕐</span><span>Lun–Vie 8:30–19:00 · Sáb 9:00–14:00</span></div>
        <div className={styles.ferStripItem}><span>🚚</span><span>Envío a domicilio en Chacarita</span></div>
        <div className={styles.ferStripItem}><span>💳</span><span>Efectivo y tarjeta</span></div>
      </div>

      {/* Categorías */}
      <div className={styles.ferSection}>
        <h2 className={styles.ferSectionTitle}>¿Qué estás buscando?</h2>
        <div className={styles.ferCatGrid}>
          {[
            { emoji: '⚡', name: 'Electricidad', desc: 'Cables, llaves, tomacorrientes, tableros' },
            { emoji: '🔧', name: 'Herramientas', desc: 'Manuales, eléctricas, de medición' },
            { emoji: '🪣', name: 'Plomería', desc: 'Cañerías, válvulas, llaves de paso, sellos' },
            { emoji: '🪟', name: 'Construcción', desc: 'Cemento, arena, yeso, cal, porcelana' },
            { emoji: '🖌️', name: 'Pinturas', desc: 'Látex, esmaltes, barnices e impermeabilizantes' },
            { emoji: '🔩', name: 'Bulonería', desc: 'Tornillos, bulones, tuercas, golillas, anclajes' },
          ].map((c) => (
            <div key={c.name} className={styles.ferCatCard}>
              <span className={styles.ferCatEmoji}>{c.emoji}</span>
              <h3>{c.name}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Nosotros + foto */}
      <div className={styles.ferAbout}>
        <div className={styles.ferAboutImg}>
          <img
            src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=600"
            alt="Don López en la ferretería"
          />
        </div>
        <div className={styles.ferAboutText}>
          <h2>20 años en el mismo lugar.</h2>
          <p>Abrimos en 2004 en la calle Thames. Pasaron cambios de gobierno, pandemias y tres reformas al local — pero seguimos en el mismo lugar, con los mismos vecinos.</p>
          <p>Si no tenemos lo que buscás, lo conseguimos. Si no sabés qué material necesitás, te ayudamos a entender el trabajo antes de comprar.</p>
          <FakeButton className={styles.ferAboutBtn}>💬 Consultanos por WhatsApp</FakeButton>
        </div>
      </div>
    </div>
  )
}

/* ─── MODAL WRAPPER ──────────────────────────── */
export default function MockupModal({ selected, onClose }: MockupModalProps) {
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden'
      const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
      window.addEventListener('keydown', onKey)
      return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = 'unset' }
    }
    document.body.style.overflow = 'unset'
  }, [selected, onClose])

  const renderContent = (id: string) => {
    switch (id) {
      case 'panaderia': return <PanaderiaPage />
      case 'peluqueria': return <PeluqueriaPage />
      case 'ferreteria': return <FerretePage />
      default: return null
    }
  }

  return (
    <AnimatePresence>
      {selected && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, scale: 0.93, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', bounce: 0.2, duration: 0.55 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top browser chrome */}
            <div className={styles.browserChrome}>
              <div className={styles.browserDots}>
                <span className={styles.dot} style={{ background: '#FF5F57' }} onClick={onClose} title="Cerrar" />
                <span className={styles.dot} style={{ background: '#FFBD2E' }} />
                <span className={styles.dot} style={{ background: '#28C840' }} />
              </div>
              <div className={styles.urlBarWrap}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className={styles.lockIcon}>
                  <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 11V7a4 4 0 118 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className={styles.urlBarText}>propuestas.carto.dev/{selected.id}</span>
              </div>
              <button className={styles.closeBtn} onClick={onClose} aria-label="Cerrar">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Page content */}
            <div className={styles.mockupScrollArea}>
              {renderContent(selected.id)}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
