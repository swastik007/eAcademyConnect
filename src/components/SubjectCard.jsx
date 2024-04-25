import React from 'react';
import {motion} from 'framer-motion';

const SubjectCard = ({ icon, title}) => {
    return(
        <motion.div                   
            whileHover={{
            scale: 1.05,
            rotate: 1,      
            ease: "easeOut", 
            onDurationChange: 2,
            borderRadius: 10,                                              
            }}
            className="hover:text-slate-800 bg-gray-400/10 hover:bg-blue-500 group " >
            <div className="overflow-hidden backdrop-blur-sm rounded-lg shadow">
                <div className="px-4 py-8">
                    <div className="flex items-center">
                        <div className="w-2/5 relative flex items-center justify-center mx-auto  group-hover:invert-0">
                            <img alt="" className="w-12 h-12 object-contain group-hover:invert" src={icon} />
                        </div>

                        <div className="ml-5 mr-auto w-3/5">
                            <p className="text-lg font-semibold leading-tight">{title}</p>
                        </div>
                    </div>
                </div>
            </div>
    </motion.div>
    )
}

export default SubjectCard;