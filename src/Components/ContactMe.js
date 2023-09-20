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
        <div className='w-11/12 h-11/12 md:w-96 md:h-96 bg-white flex flex-col items-center justify-evenly py-2 mx-auto rounded-xl'>
          <div className='flex flex-col h-32 mx-auto'>
            <h1 className='font-semibold text-lg font-mooli'>connect with me</h1>
            <div className='flex flex-row w-full items-center justify-between'>
                  <a href="https://twitter.com/PandaArzit">
                    <BsTwitter className='hover:text-blue-600'/>
                  </a>
                  <a href="https://www.instagram.com/__arzit__/">
                  <BsInstagram  className='hover:text-pink-600'/>

                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100074349810465">
                    <BsFacebook className='hover:text-violet-900'/>
                  </a>
                  <a href="https://www.linkedin.com/in/arijit-panda-a89b2721a/">
                    <BsLinkedin className='hover:text-blue-600'/></a>
                  <a href="https://github.com/ArzitPanda">
                    <BsGithub className='hover:text-green-600'/>
                  </a>


            </div>
           
          </div>
          <div className='w-full'>
            <img src={crack} className='w-3/12 h-2/12 -rotate-45 object-contain' alt="crack"/>
          </div>
          <div className='flex flex-col'>
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
