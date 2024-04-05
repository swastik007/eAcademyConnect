import React,{useEffect} from "react";

const HeroHighlightSection = () => {
   
  return (
  <div className="container mx-auto max-w-screen-xl px-4 sm:px-8">
    <div className="relative flex bg-white">
  <div className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
    <div
      className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
      
    >
      <div className="flex mx-auto w-40 sm:w-auto">
        <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
          />
        </svg>


        </div>
        <div className="flex flex-col">
          <p className="text-xl text-black-600 font-bold">390{/* */}+</p>
          <p className="text-lg text-black-500">Users</p>
        </div>
      </div>
    </div>
    <div
      className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
      
    >
      <div className="flex mx-auto w-40 sm:w-auto">
        <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
          <img src="/assets/Icon/gridicons_location.svg" className="h-6 w-6" />
        </div>
        <div className="flex flex-col">
          <p className="text-xl text-black-600 font-bold">20{/* */}+</p>
          <p className="text-lg text-black-500">Locations</p>
        </div>
      </div>
    </div>
    <div
      className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
      
    >
      <div className="flex mx-auto w-40 sm:w-auto">
        <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
          <img src="/assets/Icon/bx_bxs-server.svg" className="h-6 w-6" />
        </div>
        <div className="flex flex-col">
          <p className="text-xl text-black-600 font-bold">50{/* */}+</p>
          <p className="text-lg text-black-500">Server</p>
        </div>
      </div>
    </div>
  </div>
  <div
    className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
    style={{ filter: "blur(114px)" }}
  />
</div>
  </div>
  
  );
};

export default HeroHighlightSection;