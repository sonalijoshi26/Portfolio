import {RevealOnScroll} from "../RevealOnScroll"
export const Home=()=>{
    return(
        <section id="Home" className="min-h-screen flex items-center justify-center relative">
           <RevealOnScroll>
            <div className="text-center z-10 px-4">
               <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-pink-600 bg-clip-text text-transparent leading-right">
                   Hello! I am Sonali Joshi
               </h1>
               <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    Final-year BCA student passionate about becoming a front-end developer. Skilled in HTML, CSS, JavaScript, React.js, Tailwind, Bootstrap with a keen interest in creating responsive and user-friendly websites. Eager to apply my knowledge, learn new technologies, and grow in a professional environment.
               </p>
               <div className="flex justify-center space-x-4">
                  <a href="#Projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.8)]">
                     View Projects
                  </a>
                  <a href="#Contact" className="border border-blue-500/50 text-blue-500 px-6 py-3 rounded font-medium transition-all duration-200  hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
                    Contact me
                  </a>
              </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}