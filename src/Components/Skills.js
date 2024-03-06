import React, {useEffect, useState} from 'react'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import Slider from 'react-slick'
import client, { urlFor } from '../Sanity/Client'
import ProgressBar from '@ramonak/react-progress-bar'

const Skills = () => {
  const [skillset, setSkillSet] = useState([])

  useEffect(() => {
    client
      .fetch('*[_type == "skills"] ')
      .then((res) => {
        setSkillSet(res)
    
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='font-mooli  text-3xl md:text-5xl  font-semibold text-emerald-50'>Technical Skills</h1>
    <div className="w-full grid grid-cols-8 gap- p-4 my-20">
        {
          skillset.map((ele,idx)=><div key={idx}  className='col-span-2 flex flex-col items-center justify-center gap-2 hover:scale-110 transition-transform'>
            <img src={urlFor(ele.icon).width(100).url()} alt='icon' className='w-1/3 h-2/3' />
            <h4 className='text-emerald-50 font-mooli font-semibold lg:text-xl text-md'>{ele.skill_name}</h4>
          </div>)
        }
      
    
    </div>
    </div>
  )
}

export default Skills
