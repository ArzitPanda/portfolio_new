import React, {useEffect, useState} from 'react'
import NavBar from './NavBar'
import Banner from "../img/banner.png"
import FirstSection from "./FirstSection"

import { useScroll } from 'framer-motion'
import client from "../Sanity/Client";
const CACHE_KEY = 'hero_data'
const CACHE_EXPIRY_KEY = 'hero_data_expiry'
const CACHE_DURATION = 1000 * 60 * 60 * 4
const Hero = ({open,setOpen}) => {


    const [hero, setHero] = useState(null)

    useEffect(() => {
        const cached = sessionStorage.getItem(CACHE_KEY)
        const expiry = sessionStorage.getItem(CACHE_EXPIRY_KEY)

        if (cached && expiry && new Date().getTime() < Number(expiry)) {

            setHero(JSON.parse(cached))
            console.log(hero)
        } else {
        client
            .fetch(`*[_type == "hero"][0]{
    name,
    tag,
    description,
    buttonText,
    resume {
      asset->{
        url
      }
    }
  }`)
            .then((data) => {
                console.log(data);
                setHero(data);
                sessionStorage.setItem(CACHE_KEY, JSON.stringify(data));
                sessionStorage.setItem(
                    CACHE_EXPIRY_KEY,
                    (new Date().getTime() + CACHE_DURATION).toString()
                );
            });


    }}, [])

  return (
    <div className='bg-black w-10/12  mx-auto overflow-x-hidden '>
        <NavBar hero={hero} />
        <img src ={Banner} alt="banner.img" className="object-cover absolute  w-screen h-96 left-0   rounded-2xl blur-md lg:mt-28 mt-32 "/>
        <FirstSection open={open} setOpen={setOpen} hero={hero} setHero={setHero} />
    </div>
  )
}

export default Hero
