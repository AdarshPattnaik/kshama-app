'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ClickEffect() {
  const [clicks, setClicks] = useState([])

  const handleClick = (e) => {
    const newClick = {
      x: e.clientX,
      y: e.clientY,
      id: Date.now(),
    }
    setClicks((prev) => [...prev, newClick])

    setTimeout(() => {
      setClicks((prev) => prev.filter((click) => click.id !== newClick.id))
    }, 1000) // heart disappears after 1s
  }

  return (
    <div onClick={handleClick} className="fixed inset-0 z-10">
      {clicks.map(({ x, y, id }) => (
        <motion.div
          key={id}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: 'absolute',
            top: y - 20,
            left: x - 20,
            pointerEvents: 'none',
          }}
        >
          <span className="text-pink-500 text-3xl">💖</span>
        </motion.div>
      ))}
    </div>
  )
}
