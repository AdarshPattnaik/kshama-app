'use client'
import ReactAudioPlayer from 'react-audio-player'

export default function MusicPlayer() {
  return (
    <div className="hidden"> {/* No need to show the player */}
      <ReactAudioPlayer
        src="/soni-soni.m4a"
        autoPlay
        loop
        volume={0.3}
      />
    </div>
  )
}
