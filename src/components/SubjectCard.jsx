import React from 'react';
import {motion} from 'framer-motion';

const SubjectCard = ({ icon, title}) => {
    return(
        <motion.div         
            initial={{
                scale: 1,
                opacity: 0.8,
                rotate: 0
            }} 

            whileHover={{           
            ease: "easeOut", 
            onDurationChange: 2,  
            scale: 1.4,
            opacity: 1,
            rotate: 1.3                                      
            }}
            className="hover:text-slate-800 bg-gray-400/10 hover:bg-gradient-to-b hover:from-cyan-300 via-cyan-500 hover:to-sky-500 group " >
            <div className="overflow-hidden rounded-lg shadow-sm">
                <div className="px-4 py-8">
                    <div className="flex flex-col items-center">
                        <div className="w-full relative flex items-center justify-center mx-auto  group-hover:invert-0">
                            <img alt="" className="w-20 h-20 object-contain group-hover:bg-white rounded-full" src={icon} />
                        </div>

                        <div className="mx-auto text-center w-full">
                            <p className="text-lg font-base tracking-wider group-hover:text-white">{title}</p>
                        </div>
                    </div>
                </div>
            </div>
    </motion.div>
    )
}

export default SubjectCard;