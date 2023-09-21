import React from 'react'
import NavBar from './NavBar'
import Banner from "../img/banner.png"
import FirstSection from "./FirstSection"
import Subject from "../img/Subject.png"
import { useScroll } from 'framer-motion'

const Hero = ({open,setOpen}) => {


const skills =["Full stack Developer","Problem Solving","learner","Photoshop Artist"]

  return (
    <div className='bg-black w-10/12 h-screen mx-auto overflow-x-hidden '>
        <NavBar />
        <img src ={Banner} alt="banner.img" className="object-cover w-full h-20 lg:h-32  rounded-3xl lg:mt-28 mt-32 "/>
        <FirstSection open={open} setOpen={setOpen}/>
    
       <div className='hidden absolute w-10/12   lg:flex lg:top-[150px] xl:top-1 2xl:top-[-7vh] sm:mt-80   xl:mt-30 2xl:mt-20  z-0'>
          <div className='w-full h-full flex items-center justify-center flex-col '>
            <img src={Subject} alt='subject.png' className='w-2/6 h-1/4 object-contain scale-[1]'/>
            <div className='w-[99.1vw] h-20 bg-[#D5F60C] z-20 flex items-center justify-around '>
              {
                skills.map((ele)=>{return(<li className='text-2xl font-mooli font-semibold' key={ele}> {ele}</li>)})
              }
            </div>
          </div>
      


       </div>


       
       
        
      
    </div>
  )
}

export default Hero
