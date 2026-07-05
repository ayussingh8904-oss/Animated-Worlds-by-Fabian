import React from 'react'
import { useState } from 'react'
import {motion} from 'framer-motion'
const App = () => {
  const [active , setactive] = useState(0);
  const main = [
  {
    "id": 1,
    "name": "Great Wall of China",
    "country": "China",
    "city": "Beijing",
    "yearBuilt": "7th century BC - 1644 AD",
    "type": "Fortification",
    "image": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800",
    "description": "The Great Wall of China is the longest man-made structure in the world, built to protect China from invasions."
  },
  {
    "id": 2,
    "name": "Petra",
    "country": "Jordan",
    "city": "Ma'an",
    "yearBuilt": "5th century BC",
    "type": "Ancient City",
    "image": "https://images.unsplash.com/photo-1579606032821-4e6161c81bd3?w=800",
    "description": "Petra is a historic city famous for its rock-cut architecture and water conduit system."
  },
  {
    "id": 3,
    "name": "Christ the Redeemer",
    "country": "Brazil",
    "city": "Rio de Janeiro",
    "yearBuilt": "1931",
    "type": "Statue",
    "image": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800",
    "description": "A giant Art Deco statue of Jesus Christ overlooking Rio de Janeiro from the summit of Mount Corcovado."
  },
  {
    "id": 4,
    "name": "Machu Picchu",
    "country": "Peru",
    "city": "Cusco Region",
    "yearBuilt": "15th century",
    "type": "Incan Citadel",
    "image": "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800",
    "description": "Machu Picchu is an ancient Incan city set high in the Andes Mountains, known for its breathtaking scenery."
  },
  {
    "id": 5,
    "name": "Chichen Itza",
    "country": "Mexico",
    "city": "Yucatán",
    "yearBuilt": "600 AD",
    "type": "Mayan City",
    "image": "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=800",
    "description": "Chichen Itza is one of the most important archaeological sites of the ancient Maya civilization."
  },
  {
    "id": 6,
    "name": "Colosseum",
    "country": "Italy",
    "city": "Rome",
    "yearBuilt": "80 AD",
    "type": "Amphitheatre",
    "image": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800",
    "description": "The Colosseum is the largest ancient amphitheatre ever built and one of Rome's greatest architectural achievements."
  },
  {
    "id": 7,
    "name": "Taj Mahal",
    "country": "India",
    "city": "Agra",
    "yearBuilt": "1653",
    "type": "Mausoleum",
    "image": "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",
    "description": "The Taj Mahal is an ivory-white marble mausoleum built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal."
  }
]
  return (
    <div className='min-h-screen bg-slate-100 py-8 px-4 sm:px-6 lg:px-10'>
      <div className='mx-auto max-w-[1600px]'>
        <div className='mb-8 text-center'>
          <p className='text-sm uppercase tracking-[0.3em] text-slate-500'>Responsive card gallery</p>
          <h1 className='mt-4 text-3xl sm:text-4xl font-bold text-slate-900'>Explore famous landmarks</h1>
          <p className='mt-3 text-slate-600 max-w-2xl mx-auto'>Tap any card to expand it and read more details. This layout adapts smoothly from mobile to desktop.</p>
        </div>

        <div className='flex flex-col gap-4 md:flex-row'>
          {main.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              animate={{
                flex: active === index ? 4 : 1,
                minHeight: active === index ? 420 : 240,
              }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              onClick={() => setactive(index)}
              className={`group relative overflow-hidden rounded-[32px] cursor-pointer border border-transparent ${
                active === index ? 'shadow-2xl shadow-slate-400/20' : 'shadow-lg shadow-slate-300/20'
              }`}
            >
              <img src={item.image} alt={item.name} className='absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105' />
              <div className='absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent' />
              <div className='relative z-10 flex h-full flex-col justify-end p-5 sm:p-6 text-white'>
                <div>
                  <p className='text-xs uppercase tracking-[0.32em] text-slate-200/80 mb-3'>{item.type}</p>
                  <h2 className='text-2xl sm:text-3xl font-semibold leading-tight'>{item.name}</h2>
                  <p className='mt-2 text-sm sm:text-base text-slate-200/90'>{item.city}, {item.country}</p>
                </div>

                {active === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='mt-5 rounded-[28px] bg-slate-950/85 border border-white/10 p-4 backdrop-blur-sm'
                  >
                    <p className='text-xs uppercase tracking-[0.28em] text-amber-300 mb-2'>Built {item.yearBuilt}</p>
                    <p className='text-sm leading-6 text-slate-100'>{item.description}</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App