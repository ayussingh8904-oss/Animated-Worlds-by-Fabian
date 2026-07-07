import React from 'react'
import Form from './Form'
import Footer from '../Components/Footer'
const Pon = () => {
  return (
    <>
      <div className='h-screen w-full bg-[url(https://static.wixstatic.com/media/11062b_864c1ffc97034fc1a3c24f6f2a8d0a21~mv2.jpg/v1/fill/w_1291,h_535,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_864c1ffc97034fc1a3c24f6f2a8d0a21~mv2.jpg)] bg-cover bg-center bg-no-repeat bg-fixed'></div>
      <div className='w-full bg-[#c8c7ff]'>
        <div className='grid grid-cols-1 items-center justify-items-center '>
          <h1 className='text-2xl font-bold md:text-5xl lg:text-6xl mt-2'>Get in touch</h1>
        </div>
        <div className='grid grid-cols-1 items-center justify-items-center mt-3'>
          <p className='text-center text-sm font-semibold md:text-base lg:text-lg'>For inquiries or project collaborations, feel free to reach out. We are always excited to discuss new creative opportunities.</p>
        </div>
      </div>
      <Form />
      <Footer/>
    </>
  )
}

export default Pon