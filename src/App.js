// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import ContactMe from './Components/ContactMe';
import Experience from './Components/Experience';
import Feature from './Components/Feature';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Explore from './Components/Explore';

function App() {
  const[open,setOpen]=useState(false);
  return (
  <div className="overflow-x-hidden">
    <Hero open={open} setOpen={setOpen}/>
    <Explore/>
    <Feature/>
    <Skills/>
    <Experience/>
    <Footer open={open} setOpen={setOpen}/>
    <div className='z-50'>
      <ContactMe open={open} setOpen={setOpen}/>
      
</div>
  </div>
  );
}

export default App;
