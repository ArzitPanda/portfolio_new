import React from 'react'
import NavBar from './NavBar'
import Banner from "../img/banner.png"
import FirstSection from "./FirstSection"

import { useScroll } from 'framer-motion'

const Hero = ({open,setOpen}) => {


const skills =["Full stack Developer","Problem Solving","learner","Photoshop Artist"]

  return (
    <div className='bg-black w-10/12  mx-auto overflow-x-hidden '>
        <NavBar />
        <img src ={Banner} alt="banner.img" className="object-cover absolute  w-screen h-96 left-0   rounded-2xl blur-md lg:mt-28 mt-32 "/>
        <FirstSection open={open} setOpen={setOpen}/>
    
      

      
       
       
        
      
    </div>
  )
}

export default Hero
