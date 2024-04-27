import React, { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

const HeroSection = () => {
  const [inView, setInView] = useState(false);
  const { ref, inView: inViewRef } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    setInView(inViewRef);
  }, [inViewRef]);

  return (
    <section id="hero" className="w-full py-40 mt-[55px] bg-gradient-to-b from-orange-200 via-lime-400/50 to-[#f4b763]" ref={ref}>
     
      <div className='relative max-w-screen-xl px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6'>
        <div className="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left relative z-50">
          
          <h1 className="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10 text-gray-900 mt-0">
          <span className="text-lg tracking-widest text-gradient font-medium uppercase text-stone-600 block">
            Sign Up Today
          </span>
            Immerse Yourself in Interactive Learning with eAcademy Connect
          </h1>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2">
           
            <button className="text-lg text-center text-orange-900 rounded-full hover:text-white hover:bg-orange-500 hover:shadow-md hover:shadow-orange-800/50 transition duration-300 max-w-full px-6 py-4 bg-inherit text-gradient border border-orange-700 flex items-center justify-center">
              <span>Request Demo</span>
            </button>
          </div>
        </div>
        <div className={`col-span-12 lg:col-span-6 ${inView ? "animate-in" : ""}`}>
          <div className="w-full">
            <motion.img
              src='images/pattern/ellipse-1.png'
              className="-mt-4 h-12"
              alt=""
              // initial={{ x: -20, opacity: 0 }} // Initial position and opacity
              // animate={{ x: 20, opacity: 1 }} // Final position and opacity
              // transition={{
              //   ease: "easeInOut", // You can choose different easing functions
              //   duration: 2, // Total animation duration
              //   delay: 0.5 // Delay before the animation starts
              // }}
              animate={{ scale: [0.5, 1.5],
              opacity: [0, 1, 0] }} // Animation sequence
              transition={{ duration: 4, repeat: 5 }} // Repeat the animation infinitely
            />
             
          </div>
        </div>
        <img src='images/banners/hero-banner.png' className="absolute left-auto right-0 h-[400px] object-contain -bottom-20 z-30" />
        <motion.img
              src='images/pattern/ellipse-3.png'
              className="absolute mt-16 mr-12 w-lg h-[5em] object-cover"
              alt=""
              animate={{ opacity: [0, 1, 0] }} // Animation sequence
                transition={{ duration: 4, repeat: 5 }} // Repeat the animation infinitely
            />
             <motion.img
              src='images/pattern/ellipse-2.png'
              className="absolute mt-16 -mr-10 right-3 w-auto h-[6em] top-16 object-cover"
              alt=""
              animate={{ y: [-50, 100, -50], 
                opacity: [0, 1, 0] }} // Animation sequence
                transition={{ duration: 8, repeat: 5 }} // Repeat the animation infinitely
            />
      </div>
    </section>
  );
};

export default HeroSection;
