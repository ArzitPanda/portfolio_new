import React from 'react'
import icon from "../img/logo.png"
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-row w-10/12  h-28 items-center justify-between  absolute top-0 z-50 '>
      <div className='flex items-center justify-center '>
        <img src={icon} alt='logo' className='h-full w-44 lg:mt-8 mt-12'/>
      </div>
      <div className='lg:flex items-center justify-around  hidden  w-full lg:w-2/12 text-lg font-semibold font-mooli'>
       <div className='text-gray-400 hover:text-white cursor-pointer'>Home</div>
       <div className='text-gray-400 hover:text-white cursor-pointer' onClick={()=>{navigate("/projects")}}>Project</div>
       <a target='_blank' href='https://linktr.ee/arzit' className='text-gray-400 hover:text-white cursor-pointer'>Socials</a>
       
      </div>
      <motion.div
       whileHover={{
        scale: 1.2,
        transition: { duration: .5,bounce:1 },
      }}
     
      whileTap={{ scale: 0.9 }}
      >
        <a className='border lg:px-8 lg:py-3 border-white rounded-3xl  px-4 py-2 font-mooli font-semibold  text-white cursor-pointer'  href="https://drive.google.com/file/d/15RootsE4jA2rbrHeBYLiY4se-nY9b9is/view?usp=sharing"  target='_blank' >My Resume</a>
      </motion.div>
    </div>
  )
}

export default NavBar
