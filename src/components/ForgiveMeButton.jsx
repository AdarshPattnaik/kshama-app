'use client'
import { useState, useEffect } from 'react'

export default function ForgiveMeButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 400) setVisible(true)
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return visible && (
    <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2">
      <button className="px-6 py-3 text-white bg-pink-600 rounded-full text-lg shadow-xl hover:bg-pink-700 transition">
        Forgive Me? 🙈
      </button>
    </div>
  )
}
