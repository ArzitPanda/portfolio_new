import { Button } from '@mui/material'
import React, { useState } from 'react'

const AdminPssword = () => {

    const[password,setPassword]=useState("")
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='w-full h-full lg:w-96 lg:h-96 flex-col items-center flex'>
      <div className='bg-white p-2 '>
            <input type='text' onChange={(e)=>setPassword(e.target.value)} value={password} className='border-0 focus:border-none px-2'/>
        </div>
        <Button onClick={()=>{

                if(password==='Panda@2001')
                {
                    window.location.assign("https://arzit.sanity.studio/")
                }
                else
                {
                    alert("wrong password")
                }


        }}>enter</Button>
      </div>
      
    </div>
  )
}

export default AdminPssword
