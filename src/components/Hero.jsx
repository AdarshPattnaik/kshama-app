'use client'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  const router = useRouter()

  const goToLetter = () => {
    router.push('/letter')
  }

  return (
    <motion.div
      className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 to-white text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h1 className="text-5xl font-bold text-pink-700 mb-6">Tannuuu, I'm Really Sorry 💔</h1>
      <p className="text-lg text-gray-700 mb-8">I made this just for you...</p>
    
      <button
        onClick={goToLetter}
        className="px-6 py-3 text-white font-semibold bg-pink-600 hover:bg-pink-700 rounded-full shadow-lg transition"
        >
        Read My Apology
      </button>
    
    </motion.div>
  )
}
