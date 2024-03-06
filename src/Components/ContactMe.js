import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@mui/material'
import React from 'react'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

import crack from "../img/crack.png"


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


const ContactMe = ({open,setOpen}) => {

    // const handleClickOpen = () => {
    //     setOpen(true);
    //   };


    
      const handleClose = () => {
        setOpen(false);
      };

  return (
    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className='w-11/12  h-[300px]  md:h-11/12 md:w-96 md:h-96 bg-white flex flex-col items-center justify-evenly  mx-auto rounded-xl'>
        <h1 className='font-semibold text-lg font-mooli'>connect with me</h1>
          <div className='flex flex-col h-32 mx-auto'>
       
            <div className='flex flex-row w-full items-center justify-center flex-wrap  gap-x-12 gap-y-8 px-2'>
                  <a href="https://twitter.com/PandaArzit" >
                    <BsTwitter className='hover:text-blue-600 w-[40px] h-[40px] md:w-[70px] md:h-[70px]'/>
                  </a>
                  <a href="https://www.instagram.com/__arzit__/">
                  <BsInstagram  className='hover:text-pink-600 w-[40px] h-[40px] md:w-[70px] md:h-[70px]' />

                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100074349810465">
                    <BsFacebook className='hover:text-blue-500 w-[40px] h-[40px] md:w-[70px] md:h-[70px]'/>
                  </a>
                  <a href="https://www.linkedin.com/in/arijit-panda-a89b2721a/">
                    <BsLinkedin className='hover:text-blue-800 w-[40px] h-[40px] md:w-[70px] md:h-[70px]'/></a>
                  <a href="https://github.com/ArzitPanda">
                    <BsGithub className='hover:text-green-600 w-[40px] h-[40px] md:w-[70px] md:h-[70px]'/>
                  </a>


            </div>
           
          </div>
        
          <div className='flex flex-col mt-6'>
            <div className='text-md font-mooli'>
                mail me:
            </div>
              <a className='text-gray-700 font-semibold font-mooli' href='mailto:arzit43.143@gmail.com'>arzit43.143@gmail.com</a>
            </div>


        </div>
    
      </Dialog>
  )
}

export default ContactMe
