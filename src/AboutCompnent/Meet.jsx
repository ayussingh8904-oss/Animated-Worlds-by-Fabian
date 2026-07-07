import React from 'react'
import Mission from './Mission'

const Meet = () => {
  return (
    <>
    <section className='w-full h-80 bg-[#c8c7ff]'>
     <div className='grid grid-cols-1  h-80  align-middle justify-center'>
       <h1 className='text-3xl md:text-5xl lg:text-6xl text-center font-[slaky] mt-9 font-bold uppercase'>Meet Fabian Singh</h1>
       <p className='text-sm md:text-base lg:text-lg font-[slaky] text-center '>Fabian Singh is an animation illustrator with a passion for creating captivating and expressive artwork for animated films, TV shows, and video games. Their expertise in character design, background art, and visual storytelling brings animated worlds to life. With a keen eye for color theory, composition, and perspective, Fabian Singh's illustrations are not only visually stunning but also deeply moving. One of their standout projects involved defining the visual identity of an animated feature film through a series of character designs.</p>
     </div>
    </section>
    <Mission/>
    </>
  )
}

export default Meet