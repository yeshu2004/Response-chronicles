import { useTransform,motion } from 'framer-motion';
import React from 'react'
import Info from './Info';
import Card from './Card';

const Page2 = ({scrollYProgress}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8,1])
  const rotate = useTransform(scrollYProgress, [0,1] , [5,0])
  return (
    <motion.div style={{scale,rotate}} className='bg-zinc-900 min-h-screen w-full relative'>
        <Info/>
        <div className='flex flex-shrink-0 w-full h-screen overflow-x-scroll overflow-y-hidden '>
          {
            [1,2,3,4].map((i)=>{
              return(
                <div key={i}><Card index={i}/></div>
              )
            })
          }
        </div>
    </motion.div>
  )
}

export default Page2