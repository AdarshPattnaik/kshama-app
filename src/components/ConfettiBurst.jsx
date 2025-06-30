'use client'
import Confetti from 'react-confetti'
import { useEffect, useState } from 'react'

export default function ConfettiBurst() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  return show ? <Confetti recycle={false} numberOfPieces={200} /> : null
}
