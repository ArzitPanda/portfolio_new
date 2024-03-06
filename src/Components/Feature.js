import React, {useEffect, useState} from 'react'
import Card from './Card'
import client from '../Sanity/Client'
import {BsArrowRightCircleFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';
// import  ImageUrlBuilder  from '@sanity/image-url';

const Feature = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    client
      .fetch(`*[_type == "project"][0..2] `)
      .then((res) => {
        setProjects(res);
     
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="w-screen flex flex-col items-center justify-center gap-7 my-32 md:my-10 lg:my-20">
      <h1 className="font-mooli font-semibold text-5xl md:text-7xl text-white">Projects</h1>
      <div className="grid grid-cols-6 gap-5 w-10/12 mx-auto mt-10">
        {projects.map((ele) => {
          return <Card features={ele} key={ele._id}/>
        })}
      </div>
      <div className='flex w-10/12 items-center justify-end gap-x-4'>
        <h4 className='font-mooli font-medium text-xl text-white'>for more</h4>
        <Link to="/projects" className='w-20'>
        <BsArrowRightCircleFill color='#D5F60C' className='w-10 h-10' />
        </Link>
      </div>
    </div>
  )
}

export default Feature
