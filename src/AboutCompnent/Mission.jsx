import React from 'react'
import Service from './Service'


const Mission = () => {
  return (
    <>
    <section className='w-full h-170 bg-[#f94d1e] overflow-hidden'>
      <div className='grid grid-cols-1  w-full h-30'>
        <h1 className='text-3xl md:text-5xl lg:text-6xl font-[slaky] p-6'>MISSION</h1>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 scale-95'>
        <div className=' border-t-2'>
            <h1 className='text-3xl md:text-5xl lg:text-4xl p-6'>Empowering Creativity Through Art</h1>
            <p className=' p-6 text-sm md:text-base lg:text-lg overflow-hidden'>Our mission at Y. FABIAN SINGH is to inspire creativity and imagination through our unique artwork. We strive to push the boundaries of visual storytelling in animated media, creating impactful designs that resonate with audiences. By blending innovation with artistic excellence, we aim to set new standards in the world of animatio</p>
        </div>
        <div className=' border-l-2 border-t-2 overflow-hidden'>
           <p className='text-sm md:text-base lg:text-lg  -ml-15 p-25'>Explore our portfolio to witness the magic of our illustrations and the storytelling prowess behind each artwork.</p>
        </div>
      </div>
    </section>
    <Service/>
    </>
  )
}

export default Mission