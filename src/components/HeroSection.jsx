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
    <section id="hero" className="w-full pb-24" ref={ref}>
      <div className='relative max-w-screen-xl px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6 overflow-hidden'>
        <div className="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
          <span className="text-base text-gradient font-semibold uppercase">
            Sign Up Today
          </span>
          <h1 className="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10">
            The World's <span className="text-header-gradient">Fastest Growing</span> Web App
          </h1>
          <p className="paragraph hidden sm:block">
            Buy and sell application bla bla bla currencies with 20+ flat currencies using bank transfers or your credit/debit card.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2">
            <button className="text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300 max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white">
              Get Started
            </button>
            <button className="text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300 max-w-full px-6 py-4 bg-inherit text-gradient border border-[#0c66ee] flex items-center justify-center">
              <span>Download App</span>
            </button>
          </div>
        </div>
        <div className={`col-span-12 lg:col-span-6 ${inView ? "animate-in" : ""}`}>
          <div className="w-full">
            <motion.img
              src='images/pattern/ellipse-1.png'
              className="-mt-4"
              alt=""
              transition={{
                ease: "linear",
                duration: 2,
                x: { duration: 1 }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
