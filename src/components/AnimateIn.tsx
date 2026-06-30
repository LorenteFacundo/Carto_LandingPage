import { useEffect, useRef, type ReactNode } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'none'
  className?: string
}

export function FadeIn({ children, delay = 0, direction = 'up', className }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: direction === 'up' ? 28 : 0 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggerContainer({ children, className, staggerDelay = 0.1 }: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  )
}

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}
