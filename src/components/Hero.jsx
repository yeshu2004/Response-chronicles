import React, { useRef } from 'react'
import Nav from './Nav'
import { motion,useTransform } from 'framer-motion'

const Hero = ({scrollYProgress}) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]); 
    const rotate = useTransform(scrollYProgress, [0,1] , [0,5])     
  return (
    <motion.div style={{scale,rotate}} className='bg-[#5546FF] h-screen w-full relative flex flex-col items-center justify-center font-[Neue]'>
        <Nav/>
        <h1 className='uppercase text-white font-[Humane] text-[30vw] leading-[60vh]'>Chronicles</h1>
        <div className='text-white w-full text-center uppercase leading-[5vh] flex flex-col text-[1.3vw]'>
            <div className='leading-none'>
                <p>An Educational adventure for <span className='font-[Bondoi] lowercase text-[2.3vw]'> Emergency</span> Preparedness</p>
            </div>
            <div className='leading-none'>
                <p><span className='font-[Bondoi] lowercase text-[2.3vw]'>Learn </span> with interactive <span className='font-[Bondoi] lowercase text-[2.3vw]' >& </span> real-worl <span className='font-[Bondoi] lowercase text-[2.3vw]'> scenarios </span>
                </p>
            </div>
        </div>
    </motion.div>
  )
}

export default Hero