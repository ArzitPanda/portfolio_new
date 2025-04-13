import React, { useEffect, useState } from 'react'
import client from '../Sanity/Client'
import { motion } from 'framer-motion';

const Experience = () => {
    const [exp,setExp]=useState([]);
    useEffect(()=>{
client.fetch('*[_type=="work"]').then((res)=>{
  setExp(res)}).catch(err=>console.log(err))


    },[])




  return (
    <section className='w-screen'>
    <div className="bg-black text-white py-8">
    <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
      <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8 font-mooli">
        <p className="ml-2 text-yellow-300 uppercase tracking-loose">Work Experience</p>
        <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">As a Developer</p>
        <p className="text-sm md:text-base text-gray-50 mb-4">
         Here are some organisation where i contributed and enhance my skills
        </p>
        <a href="https://www.linkedin.com/in/arijit-panda-a89b2721a/"
        className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
        Explore Now</a>
      </div>
      <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
        <div className="container mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="border-2-2 border-yellow-555 absolute h-full border"
              style={{right:"50%",border:"2px solid #FFC100" ,borderRadius:'1%'}}></div>
            <div className="border-2-2 border-yellow-555 absolute h-full border"
              style={{right:"50%",border:"2px solid #FFC100" ,borderRadius:'1%'}}></div>
        {
  exp
    ?.sort((a, b) =>Date.parse(b?._createdAt)- Date.parse(a?._createdAt) )
    .map((ele, idx) => (
      <div key={idx}>
        {idx % 2 === 0 ? (
          <motion.div
            initial={{ opacity: 0, translateY: -40 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 2, type: 'spring' }}
            exit={{ opacity: 0, translateX: -40 }}
            className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
          >
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-1 py-4 text-right">
              <p className="mb-3 text-base text-yellow-300">
                Start Date: {ele.startdate}. End Date: {ele.enddate}
              </p>
              <h4 className="mb-3 font-bold text-lg md:text-2xl">{ele.company_name}</h4>
              <h4 className="mb-3 font-bold text-md md:text-xl text-yellow-200 font-mooli">{ele.title}</h4>
              <p className="text-xs md:text-base leading-snug text-gray-50 text-opacity-100">
                {ele.description}
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, translateY: 40 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 3, type: 'spring' }}
            exit={{ opacity: 0, translateX: 40 }}
            className="mb-8 flex justify-between items-center w-full right-timeline"
          >
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-1 py-4 text-left">
              <p className="mb-3 text-base text-yellow-300">
                Start Date: {ele.startdate}. End Date: {ele.enddate}
              </p>
              <h4 className="mb-3 font-bold text-lg md:text-2xl font-mooli">{ele.company_name}</h4>
              <h4 className="mb-3 font-bold text-md md:text-xl text-yellow-200">{ele.title}</h4>
              <p className="text-xs md:text-base leading-snug text-gray-50 text-opacity-100">
                {ele.description}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    ))
}

            

           
          </div>
          <img className="mx-auto -mt-12 md:-mt-12" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"  alt="omg"/>
        </div>
      </div>
    </div>
  </div>
  </section>
  )
}

export default Experience
