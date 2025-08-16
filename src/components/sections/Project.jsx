export const Projects=()=>{
    return( <section id="Projects" className="min-h-screen flex items-center justify-center py-20" >
                 <div className=" max-w-5xl mx-auto px-4 ">
                     <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-pink-600 bg-clip-text text-transparent text-center "> 
                        Projects
                     </h2>
                     <div className="grid grid-col-1 md:grid-cols-2 gap-6">
                             <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-50/30  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                <h3 className="text-xl font-bold mb-2">Netflix fontend clone</h3>
                                <p className="text-gray-400 mb-4">Created netflix frontend clone with the help of HTML and CSS</p>
                                <div className="pt-2 ">{["HTML","CSS"].map((tech,key)=>(
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-6 rounded-full  hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition ">
                                            {tech}
                                        </span>
                               ))}</div>
                             </div>
                     </div>
                 </div>
             </section>
    ) 
}