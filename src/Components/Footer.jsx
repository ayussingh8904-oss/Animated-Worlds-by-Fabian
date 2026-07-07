import React from 'react'

const Footer = () => {
  return (
    <>
     <section className='w-full h-110 bg-red-500 overflow-hidden'>
     <div className='grid grid-col-1 '>
        <h1 className='uppercase text-center text-[15vw]'>Fabian singh</h1>
     </div>
     <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 border-t-2'>
     <div className='p-6 border-r-2'>
        <h1 className='font-bold text-3xl md:text-2xl lg:text-2xl capitalize'>Art and excellence</h1>
     </div>
     <div className='align-middle justify-between grid grid-cols-2 sm:grid-cols-2'>
        <h3 className='font-bold  ml-3 '>info@mysite.com</h3>        
     </div>
    
     </div>
     </section>
    </>
  )
}

export default Footer