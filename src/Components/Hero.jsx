import React from 'react'
import Artist from './Artist'
import {motion} from 'framer-motion'
const Hero = () => {
  const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
  return (
    <>
    <section className='w-full h-screen bg-[url(https://static.wixstatic.com/media/11062b_2930f0e349514b0091ea314986f47039~mv2_d_3000_1688_s_2.jpg/v1/fill/w_1351,h_720,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_2930f0e349514b0091ea314986f47039~mv2_d_3000_1688_s_2.jpg)] bg-no-repeat bg-cover bg-center overflow-hidden bg-fixed'>
        <motion.div  variants={container}
  initial="hidden"
  animate="show" className='bg-black/40 w-full h-screen flex align-middle justify-center flex-col'>
          <motion.h1 variants={item} className=' uppercase text-center font-[semi] text-white text-[17vw] mt-19'>Animated worlds</motion.h1>
         <div className='flex align-middle justify-between p-12 text-[1vw] text-white font-bold text-base md:text-base lg:text-lg -mt-15'>
           <motion.p variants={item} className=''>infomysite.com</motion.p>
          <motion.p variants={item} className=''>234-45667-677</motion.p>
         </div>
         <div className='flex align-middle justify-center -mt-9'>
            <motion.button className='px-12 py-2 bg-[#eefff0] font-bold hover:-translate-y-2 transition duration-500 rounded-3xl'>Explore</motion.button>
         </div>
        </motion.div>
    </section>
    <Artist/>
    </>
  )
}

export default Hero