import React, { useEffect, useState } from 'react'
// import ContactMe from './ContactMe'
import pfp from "../img/pfp.png"

import { useScroll } from 'framer-motion';
import { motion } from 'framer-motion';

import client from '../Sanity/Client'

const CACHE_KEY = 'hero_data'
const CACHE_EXPIRY_KEY = 'hero_data_expiry'
const CACHE_DURATION = 1000 * 60 * 60 * 4 
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


  const [hero, setHero] = useState(null)

  useEffect(() => {
    const cached = sessionStorage.getItem(CACHE_KEY)
    const expiry = sessionStorage.getItem(CACHE_EXPIRY_KEY)

    if (cached && expiry && new Date().getTime() < Number(expiry)) {
      setHero(JSON.parse(cached))
    } else {
      client
        .fetch(
          `*[_type == "hero"][0]{
            name,
            tag,
            description,
            buttonText
          }`
        )
        .then((data) => {
          setHero(data)
          sessionStorage.setItem(CACHE_KEY, JSON.stringify(data))
          sessionStorage.setItem(CACHE_EXPIRY_KEY, (new Date().getTime() + CACHE_DURATION).toString())
        })
    }
  }, [])


  const handleClick = () => {
    setOpen(true)
  }

  if (!hero) return <p>Loading...</p>
  const skills =["Full stack Developer","Problem Solving","learner"]

  return (
    <div className="lg:mt-48 mt-48   z-0 lg:w-full ">
      <div className="flex items-center w-full justify-between flex-col-reverse lg:flex-row ">
        {
          hero && (<div className="flex flex-col items-start gap-2 lg:w-3/5 w-full">
          <h1 className="text-6xl md:text-6xl lg:text-8xl font-mooli text-white font-semibold my-4 bg-transparent z-30">
            {hero.name}
          </h1>
          <div className="text-gray-100 font-normal text-sm lg:text-md z-40 w-10/12 lg:3/12">
            <span className="text-slate-800 bg-white px-5 py-2 rounded-3xl font-bold my-4">
              {hero.tag}
            </span>
            <br />
            <div className="my-6 font-mono font-semibold text-md lg:text-lg text-clip backdrop-blur-md rounded-md lg:rounded-xl bg-blend-darken py-6 px-2 border-l-2 border-l-slate-800 border-r-zinc-400 border-r-2">
              {hero.description}
            </div>
          </div>
          <div className="mt-6 w-full my-6 z-40">
            <button
              className="px-7 py-3 font-semibold font-mooli flex items-center justify-center rounded-3xl bg-[#D5F60C]"
              onClick={handleClick}
            >
              {hero.buttonText}
            </button>
          </div>
        </div>)
        }
    
        <div className="flex flex-col items-center lg:w-2/5 lg: pb-32 w-full z-20  bg-opacity-70">

  
                <img src={pfp} className='w-9/12 lg:w-8/12 lg:mb-20 object-contain'/>
        </div>
    

     
      </div>
    </div>
  )
}

export default FirstSection
