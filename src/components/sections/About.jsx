import {RevealOnScroll} from "../RevealOnScroll"

export const About=()=>{
    const frontendSkills=["Html","CSS","Javascript","React.js","Tailwind","Bootstrap"]
    return <section id="About" className="min-h-screen flex items-center justify-center py-20">
     <RevealOnScroll>
     <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-pink-600 bg-clip-text text-transparent text-center "> 
            About Me
        </h2>
        <div className=" rounded-xl p-7 border-white/10 border hover:-translate-y-0.5 transition-all">
            <p className="text-gray-300 mb-6 text-center">
                   Passionate developer with expereyise in building user friendly and responsive websites.
            </p>
                <div className="rounded-xl p-6 hover:-translate-y-0.5 transition-all">
                    <h3 className="text-center font-bold text-xl mb-3">Front-end</h3>
                    <div className="flex flex-wrap gap-2">
                       {frontendSkills.map((tech,key)=>(
                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full  hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                                            {tech}
                                        </span>
                       ))}
                    </div>
                </div>   
        </div>
        <div className=" mt-8 text-center">
            <div className="p-6 rounded-xl border-white/10 border hover:teranslatey-1 transition-all">
                 <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                 <ol className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Secondary from Kendriya Vidhyalaya No.1,Delhi Cantt           ......2020</li>
                    <li>Senior Secondary from Kendriya Vidhyalaya No.1,Delhi Cantt           ......2023</li>
                    <li>BCA from DITM affliated to MDU University           ......2023-2026</li>
                 </ol>
            
            </div>
        </div>
     </div>
     </RevealOnScroll>
    </section>
}