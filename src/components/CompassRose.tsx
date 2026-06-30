import { motion } from 'framer-motion'

/** Compass Rose SVG that draws itself on load via stroke-dashoffset animation */
export default function CompassRose({ size = 280 }: { size?: number }) {
  const duration = 1.8
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer ring */}
      <motion.circle
        cx="100" cy="100" r="92"
        stroke="#C8973E" strokeWidth="0.6" strokeOpacity="0.4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration, ease }}
      />

      {/* Inner ring */}
      <motion.circle
        cx="100" cy="100" r="60"
        stroke="#C8973E" strokeWidth="0.4" strokeOpacity="0.25"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration, delay: 0.1, ease }}
      />

      {/* Cardinal cross lines */}
      {[
        { x1: 100, y1: 8, x2: 100, y2: 192 },
        { x1: 8, y1: 100, x2: 192, y2: 100 },
      ].map((line, i) => (
        <motion.line
          key={i}
          x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
          stroke="#C8973E" strokeWidth="0.5" strokeOpacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: duration * 0.8, delay: 0.2 + i * 0.05, ease }}
        />
      ))}

      {/* Intercardinal lines (45deg) */}
      {[
        { x1: 35, y1: 35, x2: 165, y2: 165 },
        { x1: 165, y1: 35, x2: 35, y2: 165 },
      ].map((line, i) => (
        <motion.line
          key={i}
          x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
          stroke="#C8973E" strokeWidth="0.4" strokeOpacity="0.18"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: duration * 0.7, delay: 0.35 + i * 0.05, ease }}
        />
      ))}

      {/* North arrow (prominent) */}
      <motion.polygon
        points="100,12 105,88 100,94 95,88"
        fill="#C8973E"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ transformOrigin: '100px 52px' }}
        transition={{ duration: 0.5, delay: duration * 0.7, ease: [0.34, 1.56, 0.64, 1] }}
      />

      {/* South arrow */}
      <motion.polygon
        points="100,188 105,112 100,106 95,112"
        fill="#C8973E" fillOpacity="0.45"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: duration * 0.75, ease }}
      />

      {/* East arrow */}
      <motion.polygon
        points="188,100 112,95 106,100 112,105"
        fill="#C8973E" fillOpacity="0.45"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: duration * 0.8, ease }}
      />

      {/* West arrow */}
      <motion.polygon
        points="12,100 88,95 94,100 88,105"
        fill="#C8973E" fillOpacity="0.45"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: duration * 0.82, ease }}
      />

      {/* Center dot */}
      <motion.circle
        cx="100" cy="100" r="5"
        fill="#C8973E"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        style={{ transformOrigin: '100px 100px' }}
        transition={{ duration: 0.4, delay: duration * 0.85, ease: [0.34, 1.56, 0.64, 1] }}
      />

      {/* "N" label */}
      <motion.text
        x="100" y="5"
        textAnchor="middle"
        fontSize="9"
        fill="#C8973E"
        fontFamily="Inter, sans-serif"
        fontWeight="500"
        letterSpacing="0.05em"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 0.4, delay: duration * 0.9, ease }}
      >
        N
      </motion.text>
    </svg>
  )
}
