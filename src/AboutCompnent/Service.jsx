import React from 'react'
import Card from './Card'
import Footer from '../Components/Footer'
const Service = () => {
  return (
    <>
     <section className='bg-[#eefff0] w-full h-[1100px] overflow-hidden'>
      <div className='grid grid-cols-1  w-full items-center justify-items-center p-6'>
         <h1 className='font-bold text-1xl md:text-2xl lg:text-6xl'>MEET OUR CREATIVE MINDES</h1>
        </div> 
       <div className='grid grid-cols-1  items-center justify-items-center p-6'>
        <p className='text-sm md:text-base lg:text-lg text-center'>Our team consists of dedicated professionals who share a passion for bringing artistic visions to life. Get to know the talented individuals behind the scenes:</p>
      </div>
      <Card/>
       <h1 className='text-center text-[12vw]  overflow-hidden'>Thank You</h1>
     </section>
     <Footer/> 
    </>
  )
}

export default Service