import { useState } from 'react'

import './App.css'
import StartContent from './components/StartContent'
import MobileSection from './components/MobileSection'
import Faces from './components/Faces'
import BestMoments from './components/BestMoments'
import Memories from './components/Memories'
import LastCompnent from './components/LastCompnent'


function App() {
  

  return (
    <div className="sm:mx-2  md:mx-28  min-h-screen">
    <StartContent />
    <MobileSection />
    <Faces />
    <BestMoments />
    <Memories />
    <LastCompnent />
  </div>
  )
}

export default App
