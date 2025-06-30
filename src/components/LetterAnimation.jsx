'use client'
import Lottie from 'react-lottie'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function LetterAnimation() {
  return (
    <div className="max-w-md mx-auto">
      <DotLottieReact
      src="/animations/Animation.lottie"
      loop
      autoplay
    />
    </div>
  )
}
