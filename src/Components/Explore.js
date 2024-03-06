import React from 'react'

import videoEdit from "../img/videoEdit.png"
import coding from "../img/coding.png"
import peace from "../img/peace.png"
import meme from "../img/meme.png"

import { motion } from "framer-motion"


const data  =[

    {
        text:"sometimes I do videography and make them edit .also apply for the static frames.📷",
        img:videoEdit
    },
    {
        text:"Now i am habbitual of doing coding ,if i don't do it for next 2 days ,feeling something missing",
        img:coding
    },
    {
        text:"sometimes slow my life down ,by doing some memes .of course i don't do dev jokes",
        img:meme
    },
    {
        text:"Sometimes just Peace!!!!",
        img:peace
    }

]











const Explore = () => {
  return (
    <div className="w-screen flex flex-col items-center justify-center gap-7 my-32 md:my-10 lg:my-20 ">
    <h1 className="font-mooli font-semibold text-5xl md:text-7xl text-white">I love to do</h1>
    <div className='flex w-full flex-col items-center gap-y-6'>
        {
            data.map((ele,idx)=>{return(<motion.div
                initial={{ translateX:-10,opacity:0.3}}
                whileInView={{ translateX:0 ,opacity:1 }}
                transition={{duration:1,type:"spring"}}
                whileTap={{scale:0.8}}
                whileHover={{opacity:1,scale:1.04}}
            
            
                viewport={{ once: true, }} key={idx} className={`flex flex-col bg-yellow-950 bg-opacity-10  p-4 rounded-2xl w-11/12 mx-auto ${idx%2===0?'lg:flex-row-reverse':'lg:flex-row'} gap-y-6 lg:gap-0 items-center justify-center`}>

                        <img src={ele.img} className='w-10/12 lg:w-3/12 object-contain'/>
                        <p className={`font-semibold capitalize  w-full lg:w-6/12  lg:pr-24  text-center px-4 ${idx%2===0?'lg:text-left':'lg:text-right'}  ${idx===3?'text-green-400 text-lg md:text-2xl lg:text-4xl':'text-white text-md md:text-xl lg:text-2xl'} `     }>"{ele.text}"</p>



            </motion.div>)})
        }

    </div>
  </div>
  )
}

export default Explore