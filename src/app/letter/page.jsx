import MusicPlayer from '../../components/MusicPlayer'
import LetterAnimation from '../../components/LetterAnimation'
import ApologyLetter from '../../components/ApologyLetter'
import ClickEffect from '../../components/ClickEffect'
import SparkleTrail from '../../components/SparkleTrail'
import ConfettiBurst from '../../components/ConfettiBurst'
import FloatingMessages from '../../components/FloatingMessages'
import ForgiveMeButton from '../../components/ForgiveMeButton'

export default function LetterPage() {
  return (
      <div className="relative bg-gradient-to-b from-white to-pink-100 min-h-screen py-10 overflow-hidden">
        <MusicPlayer />
        <ClickEffect />
        <SparkleTrail />
        <ConfettiBurst />
        <FloatingMessages />
        <ForgiveMeButton />
        <LetterAnimation />
        <ApologyLetter />
      </div>
  )
}
