import React from 'react'
// import ContactMe from './ContactMe'
import Subject from '../img/Subject_rotate.png'
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
    <div className="lg:mt-28 mt-10 md:mt-20  z-0 lg:w-full ">
      <div className="flex items-center w-full justify-between flex-col lg:flex-row ">
        <div className=" flex flex-col items-start gap-2 lg:w-2/5 w-full">
          <img
            src={Subject}
            alt="subject.png"
            className="w-3/6 h-2/4 right-0 top-32 z-10 object-contain scale-[1] absolute lg:hidden"
          />
          <motion.h1 style={{translateX:scrollY}} 
            transition={{type:'tween',duration:2}}
            initial={{opacity:1}}
            exit={{opacity:0}}
          
          className="xs:text-4xl md:text-6xl lg:text-8xl font-mooli text-white font-semibold my-4 bg-transparent z-30">
            Arijit Panda,
          </motion.h1>
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
    

        <div className="w-full lg:w-1/6 flex flex-row lg:flex-col mt-2 items-center lg:justify-center lg:items-center justify-around  text-white">
          {arr.map((ele) => {
            return (
              <div className="flex flex-col items-center justify-evenly h-full">
                <h1 className="font-mooli  text-3xl md:text-5xl font-semibold text-center my-4">{ele.count}</h1>
                <h4 className="font-mono  text-lg md:text-3xl text-right mb-2">{ele.name}</h4>
              </div>
            )
          })}
        </div>
        <div className='absolute bottom-[-10vh] md:bottom-32 w-screen lg:hidden h-10 bg-[#D5F60C] z-20 flex items-center justify-around'>
              {
                skills.map((ele)=>{return(<li className='text-xs md:text-sm font-mooli font-semibold'> {ele}</li>)})
              }
            </div>
      </div>
    </div>
  )
}

export default FirstSection
