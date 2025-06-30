'use client'
import { useEffect, useState } from 'react'

export default function SparkleTrail() {
  const [positions, setPositions] = useState([])

  useEffect(() => {
    const handleMove = (e) => {
      const sparkle = {
        x: e.clientX,
        y: e.clientY,
        id: Math.random(),
      }
      setPositions((prev) => [...prev.slice(-10), sparkle])
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div className="fixed inset-0 z-20 pointer-events-none">
      {positions.map((s) => (
        <div
          key={s.id}
          className="absolute w-2 h-2 bg-yellow-300 rounded-full shadow-lg"
          style={{
            left: s.x,
            top: s.y,
            opacity: 0.8,
            transform: `translate(-50%, -50%)`,
          }}
        />
      ))}
    </div>
  )
}
