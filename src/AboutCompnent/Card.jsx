import React from 'react'

const Card = () => {
    const employee = [
        {
            id:1,
          src:"https://static.wixstatic.com/media/88aac0_29167846fe3c4289a0514cd2c75e1e96~mv2.png",
          title:"Jessica Smith",
          desc:"Lead Character Designer"
        },
         {
              id:2,
          src:"https://static.wixstatic.com/media/88aac0_31920b7b8f7f4b628b76931d59eda93d~mv2.png",
          title:"Ravi Patel",
          desc:"Background Artist"
        },
         {
              id:3,
          src:"https://static.wixstatic.com/media/88aac0_8ba203d2e9c84df2bb318dcb854d0b15~mv2.png",
          title:"Maria Gonzalez",
          desc:"Concept Artist"
        },
         {
              id:4,
          src:"https://static.wixstatic.com/media/88aac0_b2bfa86af029424282c5c7464ba59f49~mv2.png",
          title:"Alex Chen",
          desc:"Storyboard Artist"
        },
         {
              id:5,
          src:"https://static.wixstatic.com/media/88aac0_2c78a9b909cf4f99bda50df9a890d44a~mv2.png",
          title:"Sarah Williams",
          desc:"Colorist"
        },
         {
              id:6,
          src:"https://static.wixstatic.com/media/88aac0_c8afe050938946e0807449ea612a7880~mv2.png",
          title:"Chris Thompson",
          desc:"Animator"
        },
    ]
  return (
   <>
   <section className=''>
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 items-center justify-items-center '>
      {employee.map((employee)=>{
          return(
            <div key={employee.id} className='  w-34   mb-20 -pb-20'>
              <div className='w-full  '>
                <img
                 src={employee.src}
                 className='w-full h-48 object-cover'
                />
                </div>
               <div className=' flex flex-col items-center justify-items-center'> 
                 <h1 className='text-center'>{employee.title}</h1>
                <p className='text-center text-sm md:text-base lg:text-lg'>{employee.desc}</p>
               </div>
            </div>
          )
      })}
    </div>
   </section>
   </>
  )
}

export default Card