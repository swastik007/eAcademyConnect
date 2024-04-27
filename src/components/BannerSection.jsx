import React, { useEffect } from "react";
import { motion } from "framer-motion";
// Initialization for ES Users
import {
  Carousel,
  initTWE,
} from "tw-elements";

const BannerSection = () => {
  useEffect(() => {
    initTWE({ Carousel });
  });
 
  return (
    <section>    
      {/* SVG Background */}
      <span className="[&>svg]:absolute [&>svg]:-z-10 [&>svg]:hidden [&>svg]:h-[560px] [&>svg]:w-full [&>svg]:lg:block">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="absolute top-[60px] hidden h-[580px] w-full transition-opacity duration-300 dark:opacity-0 lg:block"
        >
          <defs>
            <linearGradient id="sw-gradient-light" x1={0} x2={0} y1={1} y2={0}>
              <stop stopColor="hsl(209, 92.2%, 92.1%)" offset="0%" />
              <stop stopColor="hsl(209, 92.2%, 99.1%)" offset="100%" />
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient-light)"
            d="M -0.664 3.46 C -0.664 3.46 405.288 15.475 461.728 21.285 C 601.037 35.625 672.268 76.086 701.056 97.646 C 756.056 138.838 797.267 216.257 857.745 245.156 C 885.704 258.516 980.334 280.547 1048.511 268.826 C 1121.622 256.256 1199.864 226.267 1214.176 220.176 C 1241.273 208.643 1280.201 191.509 1343.494 179.436 C 1434.325 162.111 1439.504 196.099 1439.503 183.204 C 1439.502 161.288 1440 0 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L -0.664 3.46 Z"
          ></path>
        </svg>
        <svg
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="absolute top-[60px] hidden h-[580px] w-full opacity-0 transition-opacity duration-300 dark:opacity-100 lg:block"
        >
          <defs>
            <linearGradient id="sw-gradient-dark" x1={0} x2={0} y1={1} y2={0}>
              <stop stopColor="hsl(240, 4%, 28%)" offset="0%" />
              <stop stopColor="hsl(0, 0%, 15%)" offset="100%" />
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient-dark)"
            d="M -0.664 3.46 C -0.664 3.46 405.288 15.475 461.728 21.285 C 601.037 35.625 672.268 76.086 701.056 97.646 C 756.056 138.838 797.267 216.257 857.745 245.156 C 885.704 258.516 980.334 280.547 1048.511 268.826 C 1121.622 256.256 1199.864 226.267 1214.176 220.176 C 1241.273 208.643 1280.201 191.509 1343.494 179.436 C 1434.325 162.111 1439.504 196.099 1439.503 183.204 C 1439.502 161.288 1440 0 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L -0.664 3.46 Z"
          ></path>
        </svg>
      </span>
     
      {/* Section: Design Block */}
      <div
        id="carouselExampleCrossfade"
        className="relative"
        data-twe-carousel-init=""
        data-twe-ride="carousel"
      >
        {/*Carousel indicators*/}
        <div
          className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
          data-twe-carousel-indicators=""
        >
          <button
            type="button"
            data-twe-target="#carouselExampleCrossfade"
            data-twe-slide-to={0}
            data-twe-carousel-active=""
            className="mx-[3px] box-content h-[14px] w-[30px] flex-initial cursor-pointer rounded-lg shadow-sm bg-gray-300 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-twe-target="#carouselExampleCrossfade"
            data-twe-slide-to={1}
            className="mx-[3px] box-content h-[14px] w-[30px] flex-initial cursor-pointer rounded-lg shadow-sm bg-gray-300 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-twe-target="#carouselExampleCrossfade"
            data-twe-slide-to={2}
            className="mx-[3px] box-content h-[14px] w-[30px] flex-initial cursor-pointer rounded-lg shadow-sm bg-gray-300 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 3"
          />
           <button
            type="button"
            data-twe-target="#carouselExampleCrossfade"
            data-twe-slide-to={3}
            className="mx-[3px] box-content h-[14px] w-[30px] flex-initial cursor-pointer rounded-lg shadow-sm bg-gray-300 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 4"
          />
          <button
            type="button"
            data-twe-target="#carouselExampleCrossfade"
            data-twe-slide-to={4}
            className="mx-[3px] box-content h-[14px] w-[30px] flex-initial cursor-pointer rounded-lg shadow-sm bg-gray-300 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 5"
          />
          <button
            type="button"
            data-twe-target="#carouselExampleCrossfade"
            data-twe-slide-to={5}
            className="mx-[3px] box-content h-[14px] w-[30px] flex-initial cursor-pointer rounded-lg shadow-sm bg-gray-300 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 6"
          />
           <button
            type="button"
            data-twe-target="#carouselExampleCrossfade"
            data-twe-slide-to={6}
            className="mx-[3px] box-content h-[14px] w-[30px] flex-initial cursor-pointer rounded-lg shadow-sm bg-gray-300 bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 7"
          />
        </div>
        {/*Carousel items*/}
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          {/*First item*/}
          <div
            className="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-fade=""
            data-twe-carousel-item=""
            data-twe-carousel-active=""
          >
            <div className="px-6 py-12 text-center md:px-12 lg:my-12 lg:text-left">
              <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                  <div className="mt-12 lg:mt-0">
                   
                   
                    <h1 className="mb-16 font-semibold tracking-tight text-xl md:text-2xl xl:text-3xl text-cyan-700">

                    Exam Success Simplified <br />
                      <p className="text-primary from-sky-400 to-sky-800 bg-gradient-to-r bg-clip-text text-transparent text-5xl md:text-6xl xl:text-7xl">Ace Every Subject with Model Set Solutions</p>
                    </h1>
                   
                  </div>
                  <div className="mb-12 lg:mb-0">
                    <img
                      src="/images/banners/pic (1).png"
                      className="w-full rounded-lg shadow-lg dark:shadow-black/20"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Second item*/}
          <div
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-fade=""
            data-twe-carousel-item=""
          >
            <div className="px-6 py-12 text-center md:px-12 lg:my-12 lg:text-left">
              <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                  <div className="mt-12 lg:mt-0">
                    <h1 className="mb-16 font-semibold tracking-tight text-xl md:text-2xl xl:text-3xl text-cyan-700">

                    Unleash Academic Excellence<br />
                      <p className="text-primary from-sky-400 to-sky-800 bg-gradient-to-r bg-clip-text text-transparent text-5xl md:text-6xl xl:text-7xl">Unlock Past Paper Solutions from Past to Present</p>
                    </h1>
                    
                  </div>
                  <div className="mb-12 lg:mb-0">
                    <img
                      src="/images/banners/banner02.png"
                      className="w-full rounded-lg shadow-lg dark:shadow-black/20"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Third item*/}
          <div
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-fade=""
            data-twe-carousel-item=""
          >
            <div className="px-6 py-12 text-center md:px-12 lg:my-12 lg:text-left">
              <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                  <div className="mt-12 lg:mt-0">
                    <h1 className="mb-16 font-semibold tracking-tight text-xl md:text-2xl xl:text-3xl text-cyan-700">

                    Power of Search <br />
                      <p className="text-primary from-sky-400 to-sky-800 bg-gradient-to-r bg-clip-text text-transparent text-5xl md:text-6xl xl:text-7xl">Explore Everything, Get Instant Answers</p>
                    </h1>
                    
                  </div>
                  <div className="mb-12 lg:mb-0">
                    <img
                      src="/images/banners/banner0.png"
                      className="w-full rounded-lg shadow-lg dark:shadow-black/20"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Fourth item*/}
          <div
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-fade=""
            data-twe-carousel-item=""
          >
            <div className="px-6 py-12 text-center md:px-12 lg:my-12 lg:text-left">
              <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                  <div className="mt-12 lg:mt-0">
                    <h1 className="mb-16 font-semibold tracking-tight text-xl md:text-2xl xl:text-3xl text-cyan-700">

                    Forum Q/A  <br />
                      <p className="text-primary from-sky-400 to-sky-800 bg-gradient-to-r bg-clip-text text-transparent text-5xl md:text-6xl xl:text-7xl">Clear doubts with Peer and Teacher Guidance</p>
                    </h1>
                    
                  </div>
                  <div className="mb-12 lg:mb-0">
                    <img
                      src="/images/banners/banner03.png"
                      className="w-full rounded-lg shadow-lg dark:shadow-black/20"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Fifth item*/}
          <div
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-fade=""
            data-twe-carousel-item=""
          >
            <div className="px-6 py-12 text-center md:px-12 lg:my-12 lg:text-left">
              <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                  <div className="mt-12 lg:mt-0">
                    <h1 className="mb-16 font-semibold tracking-tight text-xl md:text-2xl xl:text-3xl text-cyan-700">

                      Personalized Learning <br />
                      <p className="text-primary from-sky-400 to-sky-800 bg-gradient-to-r bg-clip-text text-transparent text-5xl md:text-6xl xl:text-7xl">Unlock Personalized Guidance & Your Unique Dashboard</p>
                    </h1>
                    
                  </div>
                  <div className="mb-12 lg:mb-0">
                    <img
                      src="/images/banners/banner04.png"
                      className="w-full rounded-lg shadow-lg dark:shadow-black/20"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Sixth item*/}
          <div
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-fade=""
            data-twe-carousel-item=""
          >
            <div className="px-6 py-12 text-center md:px-12 lg:my-12 lg:text-left">
              <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                  <div className="mt-12 lg:mt-0">
                    <h1 className="mb-16 font-semibold tracking-tight text-xl md:text-2xl xl:text-3xl text-cyan-700">

                    Discover your peers<br />
                      <p className="text-primary from-sky-400 to-sky-800 bg-gradient-to-r bg-clip-text text-transparent text-5xl md:text-6xl xl:text-7xl">Unlock Connections with Classmates, Friends, and Mentors</p>
                    </h1>
                    
                  </div>
                  <div className="mb-12 lg:mb-0">
                    <img
                      src="/images/pics/18.png"
                      className="w-full rounded-lg shadow-lg dark:shadow-black/20"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Carousel controls - prev item*/}
        <button
          className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-twe-target="#carouselExampleCrossfade"
          data-twe-slide="prev"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>
        {/*Carousel controls - next item*/}
        <button
          className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-twe-target="#carouselExampleCrossfade"
          data-twe-slide="next"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div>


  </section>

  );
};

export default BannerSection;
