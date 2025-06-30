'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const messages = [
  "I miss you 💬",
  "You’re my whole world 🌍",
  "You still mean everything 💖",
  "Every moment with you is special 💫",
]

export default function FloatingMessages() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const handler = () => {
      const msg = messages[Math.floor(Math.random() * messages.length)]
      const id = Date.now()
      const left = Math.random() * 90 + "%"
      setNotes((prev) => [...prev, { id, msg, left }])
      setTimeout(() => {
        setNotes((prev) => prev.filter((note) => note.id !== id))
      }, 3000)
    }

    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return notes.map((note) => (
    <motion.div
      key={note.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: -30 }}
      exit={{ opacity: 0 }}
      className="fixed text-sm text-pink-700 font-semibold"
      style={{ top: '70%', left: note.left }}
    >
      {note.msg}
    </motion.div>
  ))
}
