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
          className="xs:text-4xl md:text-6xl lg:text-8xl font-mooli text-white font-semibold my-4 bg-transparent z-30">
            Arijit Panda,
          </h1>
          <p className="text-gray-100 font-normal  text-sm lg:text-md z-40 w-10/12 lg:3/12">
            Developer <br></br> Student.e,phasiszedsome words for me good words.e,phasiszedsome words for me good
            words.e,phasiszedsome words for me good words.e,phasiszed
          </p>
          <div className="mt-6 w-full my-6 z-40">
            <button
              className="px-7 py-3 font-semibold font-mooli flex  items-center justify-center rounded-3xl bg-[#D5F60C]"
              onClick={() => {
                setOpen(true)
                // console.log(open)
              }}
            >
              lets'talk
            </button>
          </div>
        </div>
    

     
      </div>
    </div>
  )
}

export default FirstSection
