import React from 'react'
import { useEffect } from "react";
import Lenis from "lenis";
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
const App = () => {
   useEffect(() => {
    const lenis = new Lenis({
      duration: 4.4,
      smoothWheel: true,
      smoothTouch: true,
      touchMultiplier: 2,
      wheelMultiplier: 1,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
   <>
    <div>
     <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
       </Routes>
    </div>
   </>
  )
}

export default App