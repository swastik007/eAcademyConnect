import React from "react";
import { motion } from "framer-motion";

const CTASection = () => {
    return (
       <section className="CTA py-20 mb-12x">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col lg:flex-row bg-gradient-to-br from-sky-500 via-sky-400 to-sky-600 rounded-xl lg:p-24">
                    <div className="left w-1/2">
                        <h1 className="mb-4 text-primary font-bold from-gray-100 to-stone-100 bg-gradient-to-r bg-clip-text text-transparent text-3xl md:text-5xl xl:text-5xl">               
                            Unlock the Benefits with Hamro Classroom App
                        </h1>
                        <p className="mb-0 font-normal tracking-tight text-base md:text-md xl:text-lg text-white">
                            From seamless communication tools to interactive lessons and resource libraries, Hamro Classroom App empowers learners and educators alike to excel in their educational journey. Download now and embark on a transformative learning experience!
                        </p>
                        <div className="grid grid-cols-2 mt-4">
                            <a href="" >
                                <img 
                                    src='images/playstore.png' />
                            </a>
                            <a href="" >
                                <img 
                                    src='images/appstore.png' />
                            </a>
                        </div>
                    </div>
                    <div className="right w-1/2 relative">
                        <img 
                            src='images/banners/app-download.png' 
                            className="absolute left-auto right-10 h-[600px] object-contain -bottom-50 z-30" 
                        />
                    </div>
                </div>
                
                
        
            </div>
       </section>
    );
};

export default CTASection;

