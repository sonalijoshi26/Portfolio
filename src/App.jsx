import './index.css'
import { LoadingScreen } from './components/LoadingScreen';
import { useState } from 'react';
import { Navbar } from './components/sections/Navbar';
import { MobileMenu } from './components/sections/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
function Portfolio(){
  const [isLoaded,setIsLoaded]=useState(false);
  const[menuOpen,setMenuOpen]=useState(false);
  return(
    <>
   {!isLoaded && <LoadingScreen onComplete={()=>setIsLoaded(true)}/>}{""}
    <div className={`min-h-screen  transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home/>
      <About/>
    </div>
    </>
  )
}
export default Portfolio;
