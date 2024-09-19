import React, { useRef } from 'react'
import Hero from './components/Hero'
import Blank from './components/Blank'
import Page2 from './components/Page2'
import {motion, useScroll} from 'framer-motion'
import Lenis from 'lenis'

const App = () => {
  
  const lenis = new Lenis()
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
  
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  })
  
  return (
    <main>
      <div ref={container} className='relative w-full bg-black'>
        <Hero scrollYProgress={scrollYProgress}/>
        <Page2 scrollYProgress={scrollYProgress}/>
      </div>
      <Blank/>
    </main>
  )
}

export default App