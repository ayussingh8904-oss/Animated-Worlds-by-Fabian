import React from 'react'
import Gallery from './Gallery'
import {motion} from 'framer-motion'
const Artist = () => {
  
  return (
    <>
     <section  className='w-full h-[900px] bg-[#f94d1e] overflow-hidden'>
       <div  className='grid grid-cols-1 w-full h-40 p-5 relative'> 
      <h1  className='font-[slaky] text-3xl md:text-5xl lg:text-6xl uppercase'>about the <br/> artist</h1>
      {/* The svg div */}
       <div className=' absolute top-20 left-30'>
        <svg width="280" height="350" viewBox="0 0 300 350" xmlns="http://www.w3.org/2000/svg">

  <defs>

    <radialGradient id="grapeGradient" cx="35%" cy="30%" r="80%">
      <stop offset="0%" stop-color="#d8a8ff"/>
      <stop offset="60%" stop-color="#8b3dff"/>
      <stop offset="100%" stop-color="#4a148c"/>
    </radialGradient>

    <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6dff7b"/>
      <stop offset="100%" stop-color="#1b8f2d"/>
    </linearGradient>


    <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="4" stdDeviation="4"
        flood-color="#000" flood-opacity="0.25"/>
    </filter>
  </defs>


  <g filter="url(#shadow)">
    <animateTransform
      attributeName="transform"
      type="rotate"
      values="-10 150 35;10 150 35;-10 150 35"
      dur="4s"
      repeatCount="indefinite"
      calcMode="spline"
      keySplines="
        0.42 0 0.58 1;
        0.42 0 0.58 1"
      keyTimes="0;0.5;1"/>


    <line x1="150" y1="0" x2="150" y2="35"
      stroke="#8d6e63"
      stroke-width="4"
      stroke-linecap="round"/>

    <path d="M150 35 C148 45 145 55 140 62"
      stroke="#5d4037"
      stroke-width="5"
      fill="none"
      stroke-linecap="round"/>

   
    <path
      d="M145 38
         C120 20 95 35 105 60
         C118 70 140 58 145 38Z"
      fill="url(#leafGradient)"/>

  

    <circle cx="150" cy="75" r="18" fill="url(#grapeGradient)"/>
    <circle cx="132" cy="95" r="18" fill="url(#grapeGradient)"/>
    <circle cx="168" cy="95" r="18" fill="url(#grapeGradient)"/>

    <circle cx="115" cy="118" r="18" fill="url(#grapeGradient)"/>
    <circle cx="150" cy="118" r="18" fill="url(#grapeGradient)"/>
    <circle cx="185" cy="118" r="18" fill="url(#grapeGradient)"/>

    <circle cx="132" cy="145" r="18" fill="url(#grapeGradient)"/>
    <circle cx="168" cy="145" r="18" fill="url(#grapeGradient)"/>

    <circle cx="150" cy="172" r="18" fill="url(#grapeGradient)"/>

    <circle cx="115" cy="170" r="18" fill="url(#grapeGradient)"/>
    <circle cx="185" cy="170" r="18" fill="url(#grapeGradient)"/>

    <circle cx="132" cy="198" r="18" fill="url(#grapeGradient)"/>
    <circle cx="168" cy="198" r="18" fill="url(#grapeGradient)"/>

    <circle cx="150" cy="225" r="18" fill="url(#grapeGradient)"/>

    <g fill="rgba(255,255,255,0.55)">
      <circle cx="143" cy="68" r="4"/>
      <circle cx="125" cy="89" r="4"/>
      <circle cx="160" cy="88" r="4"/>
      <circle cx="108" cy="112" r="4"/>
      <circle cx="143" cy="111" r="4"/>
      <circle cx="178" cy="111" r="4"/>
      <circle cx="125" cy="138" r="4"/>
      <circle cx="160" cy="138" r="4"/>
      <circle cx="143" cy="165" r="4"/>
      <circle cx="125" cy="191" r="4"/>
      <circle cx="160" cy="191" r="4"/>
      <circle cx="143" cy="218" r="4"/>
    </g>

  </g>

        </svg>
       </div>
       {/* The svg div */}
       </div>
       {/* This is the line div */}
       <div className='w-full h-1  bg-black scale-95 mt-40'></div>
       {/* This is the line div */}
       <div className='grid grid-cols-1  w-full h-64 mt-7 overflow-hidden'>
        <h1  className='p-6 text-3xl md:text-5xl lg:text-4xl font-[slaky]'>Creative Website overview</h1>
        <p className='text-sm md:text-base lg:text-lg w-150 p-6 -mt-10 font-[slaky] '>Fabian singh is an animation illustrator known for crafting visually stunning and emotionally resonant artwork for various media, including animated films, television shows, and video games. With expertise in character design, background art, and color theory, each illustration is a masterpiece that breathes life into animated worlds.</p>
       </div>

       <div className='w-full h-80 bg-amber-700 bg-[url(https://static.wixstatic.com/media/11062b_c3854340dfd1472184ab4e53650f15e0~mv2.jpg/v1/crop/x_182,y_0,w_2735,h_1744/fill/w_1882,h_1200,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Spaceship.jpg)] bg-no-repeat bg-cover bg-center bg-fixed'>

       </div>
     </section>
     <Gallery/>
    </>
  )
}

export default Artist