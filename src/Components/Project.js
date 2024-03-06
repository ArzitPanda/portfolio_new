import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import client from '../Sanity/Client';
import Card from './Card';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import ContactMe from './ContactMe';

const Project = () => {


  const navigate = useNavigate();
    const [allP,setAllP]=useState([]);
    useEffect(() => {
        client
          .fetch(`*[_type == "project"] | order(_updatedAt desc)`)
          .then((res) => {
            setAllP(res);
        
          })
          .catch((err) => console.log(err))
      }, [])

      const[open,setOpen]=useState(false);

  return (
  <div className=' w-screen '>
      <div className='text-white w-full h-full flex items-start flex-col justify-start p-12  ' >
            <div className='w-full h-28 cursor-pointer my-6'>  <BsArrowLeftCircleFill color='#D5F60C' className='w-10 h-10' 
            
            onClick={()=>{

                navigate("/");

            }}
            /></div>
            <h1 className="font-mooli font-semibold text-7xl text-white mt-4">Projects</h1>
            <div className="grid grid-cols-6 lg:gap-5 gap-y-6  w-full lg:w-10/12 mx-auto mt-10">
            {allP.map((ele) => {
          return <Card features={ele} key={ele._id}/>
        })}

            </div>
    
    </div>

    <Footer open={open} setOpen={setOpen}/>
    <div className='z-50'>
      <ContactMe open={open} setOpen={setOpen}/>
      
</div>
  </div>
  )
}

export default Project
