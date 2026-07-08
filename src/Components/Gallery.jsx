import React from 'react'
import Get from './Get'
import Footer from './Footer'

const Gallery = () => {
  return (
    <>
     <section className='w-full h-[820px] bg-[#eefff0] overflow-hidden'>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 w-full h-50 align-middle justify-between relative'>
             <div className=' text-3xl md:text-5xl lg:text-5xl  font-[slaky] p-6'>Gallery</div>
             <div className='-mt-20'>
                <svg
  width="220"
  height="350"
  viewBox="0 0 350 350"
  xmlns="http://www.w3.org/2000/svg"
>

  <defs>
    <linearGradient id="frame" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8B5CF6"/>
      <stop offset="100%" stop-color="#06B6D4"/>
    </linearGradient>

    <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#E0F2FE"/>
      <stop offset="100%" stop-color="#BAE6FD"/>
    </linearGradient>

    <filter id="shadow">
      <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#000" flood-opacity="0.18"/>
    </filter>
  </defs>


  <g filter="url(#shadow)">
    <animateTransform
      attributeName="transform"
      type="translate"
      values="0 0;0 -10;0 0"
      dur="4s"
      repeatCount="indefinite"/>
      
  
    <rect
      x="45"
      y="50"
      width="260"
      height="200"
      rx="18"
      fill="url(#frame)"/>


    <rect
      x="60"
      y="65"
      width="230"
      height="170"
      rx="12"
      fill="url(#sky)"/>

    <circle
      cx="235"
      cy="95"
      r="18"
      fill="#FDBA74">
      <animate
        attributeName="r"
        values="18;20;18"
        dur="3s"
        repeatCount="indefinite"/>
    </circle>

    <polygon
      points="60,220 120,145 175,220"
      fill="#22C55E"/>

    <polygon
      points="135,220 205,120 290,220"
      fill="#16A34A"/>


    <path
      d="M60 205 Q120 190 180 210 T290 205"
      fill="none"
      stroke="#3B82F6"
      stroke-width="6"
      stroke-linecap="round"/>


    <rect
      x="250"
      y="185"
      width="28"
      height="28"
      rx="5"
      fill="#FFFFFF"/>

    <circle
      cx="258"
      cy="193"
      r="3"
      fill="#FBBF24"/>

    <polygon
      points="252,208 260,198 270,210"
      fill="#10B981"/>

  </g>


  <g fill="#FACC15">
    <circle cx="35" cy="55" r="2">
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="2s"
        repeatCount="indefinite"/>
    </circle>

    <circle cx="315" cy="70" r="2">
      <animate
        attributeName="opacity"
        values="1;0;1"
        dur="2.5s"
        repeatCount="indefinite"/>
    </circle>

    <circle cx="305" cy="250" r="2">
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="3s"
        repeatCount="indefinite"/>
    </circle>

    <circle cx="40" cy="250" r="2">
      <animate
        attributeName="opacity"
        values="1;0;1"
        dur="2.8s"
        repeatCount="indefinite"/>
    </circle>
  </g>

                    </svg>
             </div>
        </div>
        <div className='w-full h-1 bg-black scale-95'></div>

        <div className='w-full h-100  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 align-middle  items-center justify-center scale-100'>
            <div className=' h-85 bg-[url(https://static.wixstatic.com/media/11062b_3d6dc3a1b1aa4d1abf8daf3e6dde3bcc~mv2.jpeg/v1/fill/w_641,h_484,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_3d6dc3a1b1aa4d1abf8daf3e6dde3bcc~mv2.jpeg)] bg-no-repeat bg-cover bg-center bg-fixed'></div>
            {/* Grid divs */}
            <div className=' h-85 border-b-2 border-m-2 gap-3 overflow-hidden'>
            <div className='flex align-middle justify-between p-6'>
                <div className='font-bold font-[slaky] capitalize ml-3'>
                    <h3 className='text-sm md:text-base lg:text-lg'>Character Designs</h3>
                    <p className='text-sm md:text-base lg:text-lg'>Bringing Characters <br/> to  Life</p>
                </div>
                <div className='font-bold font-[slaky] capitalize '>
                        <h3 className='text-sm md:text-base lg:text-lg'>Background Art</h3>     
                    <p className='text-sm md:text-base lg:text-lg'>Creating Immersive <br/> Worlds</p>
                </div>
            </div>
            <div className='w-full h-2 bg-black rotate-90 scale-50 flex mt-5 overflow-hidden'></div>

            <div className='flex align-middle justify-between p-6 ml-2'>
                <div className='font-bold font-[slaky] capitalize border-t-2 '>
                    <h3 className='text-sm md:text-base lg:text-lg'>Concept Art</h3>
                    <p className='text-sm md:text-base lg:text-lg'>Imagining New Realms</p>
                </div>
                <div className='font-bold font-[slaky] capitalize border-t-2 ml-2'>
                      <h3 className='text-sm md:text-base lg:text-lg ml-8'>Featured Projects</h3>
                    <p className='text-sm md:text-base lg:text-lg ml-8'>Noteworthy Creations</p>
                </div>
            </div>

            </div>
               {/* Grid divs */}
        </div>
     </section>
     <Footer/>
     <Get/>
    </>
  )
}

export default Gallery