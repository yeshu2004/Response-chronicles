import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

const Card = ({index}) => {
    const card = useRef(null)
    const {scrollYProgress} = useScroll({
      target: card,
      offset: ["start end", "end end"]
    })
    const y = useTransform(scrollYProgress, [0,1], [index*200,1])
  return (
    <motion.div ref={card} style={{y}} className='bg-indigo-500 h-screen w-[25vw] '>
      {/* Card Content */}
    </motion.div>
  );
};

export default Card;
