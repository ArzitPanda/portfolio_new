import React from 'react'
// import ContactMe from './ContactMe'

import { useScroll } from 'framer-motion';
import { motion } from 'framer-motion';
const FirstSection = ({open, setOpen}) => {


  const { scrollY } = useScroll();
  // console.log(scrollY)

  const arr = [
    {
      name: 'projects',
      count: '20',
    },
    {
      name: 'internships',
      count: '3',
    },
  
  ]

  const skills =["Full stack Developer","Problem Solving","learner"]

  return (
    <div className="lg:mt-48 mt-48   z-0 lg:w-full ">
      <div className="flex items-center w-full justify-between flex-col lg:flex-row ">
        <div className=" flex flex-col items-start gap-2 lg:w-2/5 w-full">
      
          <h1
          className="text-6xl md:text-6xl lg:text-8xl font-mooli text-white font-semibold my-4 bg-transparent z-30">
            Arijit Panda,
          </h1>
          <div className="text-gray-100 font-normal  text-sm lg:text-md z-40 w-10/12 lg:3/12">
           <span className='text-slate-800 bg-white px-5 py-2 rounded-3xl font-bold my-4'>Developer</span>  <br></br> 
           <div className='my-6 font-mono font-semibold text-lg text-clip backdrop-blur-md  rounded-md lg:rounded-xl  bg-blend-darken py-6 px-8  
           
           border-l-2 border-l-slate-800
           
           
           border-r-zinc-400 border-r-2'>Hey there! I'm a fourth-year CSE student at Trident Academy of Technology. I'm all about diving into problems headfirst and whipping up some code to make things interesting.</div>
          </div>
          <div className="mt-6 w-full my-6 z-40">
            <button
              className="px-7 py-3 font-semibold font-mooli flex  items-center justify-center rounded-3xl bg-[#D5F60C]"
              onClick={() => {
                setOpen(true)
                // console.log(open)
              }}
            >
              lets'connect
            </button>
          </div>
        </div>
    

     
      </div>
    </div>
  )
}

export default FirstSection
