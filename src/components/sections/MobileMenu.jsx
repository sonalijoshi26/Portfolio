
export const MobileMenu=({menuOpen,setMenuOpen})=>{
 return (
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.85)] z-40 flex flex-col items-center justify-center
                         transition-all duration-300 ease-in-out ${menuOpen ? "h-screen opacity-100 pointer-events-auto"
                         :"h-0 opacity-0 pointer-events-none"}`
                        }>
                    <button onClick={()=>setMenuOpen(false) }className="absolute top-4 right-7 text-white text-3xl focus:outline-none cursor-pointer" aria-label="Close Menu">&times;</button>

                  <a href="#Home"
                  onClick={()=>setMenuOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors">
                    Home</a>
                 <a href="#About" 
                  onClick={()=>setMenuOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors">
                About</a>
                 <a href="#Project"
                  onClick={()=>setMenuOpen(false)}
                   className="text-gray-300 hover:text-white transition-colors">
                Project</a>
                 <a href="#Contact" 
                  onClick={()=>setMenuOpen(false)}
                  className="tex-gray-300 hover:text-white transition-colors">
                Contact</a>
                                </div>
    )}