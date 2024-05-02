import React, { useState } from 'react';
import logo from '../assets/react.svg';

const BaseNavbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownNavbar, setDropdownNavbar] = useState(false);

  const dropdownToggler = () => {
    setDropdownNavbar(!dropdownNavbar);
  };

  return (
    <div className='relative'>
        <div className="absolute top-0 left-0 w-full h-[100vh] sm:h-[500px] lg:h-[1000px] cover-gradient"></div>
        <nav id="navbar" className="relative z-10 w-full text-neutral-800">
            <div className="flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4">
                <div className="flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8 w-full">
                    <div className="flex flex-row items-center justify-between py-6 w-1/3">
                        <div>
                        <img src='images/logo-hamroclassroom.png' className="w-32 xl:w-48" alt="Nefa Logo" />
                        </div>
                        <button className="rounded-lg lg:hidden focus:outline-none focus:shadow-outline" onClick={() => setOpen(!open)}>
                        {open ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                        </button>
                    </div>
                    <div className={`${open ? 'flex' : 'hidden lg:flex'} flex-col lg:flex-row menu-container w-2/3`}>
                        <ul className='w-full h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-start lg:flex-row origin-top duration-300 xl:space-x-2 space-y-3 lg:space-y-0'>
                                <li
                                    className="my-4 lg:my-0 lg:mx-3"
                                    data-twe-nav-item-ref>
                                    <a
                                        className="p-0 text-xl font-medium text-black/80 transition duration-200 hover:text-primary/80 hover:ease-in-out focus:text-primary/90 active:text-primary/80 motion-reduce:transition-none"
                                        aria-current="page"
                                        href="#about"
                                        data-twe-nav-link-ref
                                        >About</a
                                    >
                                </li>
                                <li
                                className="my-4 lg:my-0 lg:mx-3"
                                data-twe-nav-item-ref>
                                <a
                                    className="p-0 text-xl font-medium text-black/80 transition duration-200 hover:text-primary/80 hover:ease-in-out focus:text-primary/90 active:text-primary/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                                    href="#features"
                                    data-twe-nav-link-ref
                                    >Features</a
                                >
                                </li>
                                <li
                                className="my-4 lg:my-0 lg:mx-3"
                                data-twe-nav-item-ref>
                                    <a
                                        className="p-0 text-xl font-medium text-black/80 transition duration-200 hover:text-primary/80 hover:ease-in-out focus:text-primary/90 active:text-primary/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                                        href="#features"
                                        data-twe-nav-link-ref
                                        >Pricing</a
                                    >
                                </li>
                            
                            <li className="relative group">
                            <button className="flex items-center p-0 text-xl font-medium text-black/80 transition duration-200 hover:text-primary/80 hover:ease-in-out focus:text-primary/90 active:text-primary/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2" onClick={dropdownToggler} onBlur={dropdownToggler}>
                                <span>Products</span>
                                {dropdownNavbar ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
                                </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                </svg>
                                    )
                                }
                                
                            </button>
                            <div className={dropdownNavbar ? 'flex lg:absolute flex-col max-w-42 py-1 lg:bg-white rounded-md lg:shadow-md pl-2 lg:pl-0' : 'hidden'}>
                                <ul>
                                <li
                                className="my-4 lg:my-0 lg:mx-3"
                                data-twe-nav-item-ref>
                                <a
                                    className="p-0 text-xl text-black/60 transition duration-200 hover:text-primary/80 hover:ease-in-out focus:text-primary/90 active:text-primary/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                                    href="#features"
                                    data-twe-nav-link-ref
                                    >For Teachers</a
                                >
                                </li>
                                <li
                                className="my-4 lg:my-0 lg:mx-3"
                                data-twe-nav-item-ref>
                                <a
                                    className="p-0 text-xl text-black/60 transition duration-200 hover:text-primary/80 hover:ease-in-out focus:text-primary/90 active:text-primary/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                                    href="#features"
                                    data-twe-nav-link-ref
                                    >For Students</a
                                >
                                </li>
                                </ul>
                            </div>
                            </li>
                        </ul>
                        <div className={`flex space-x-3`}>
                            <button className="text-lg h-12 min-w-[140px] justify-center flex items-center text-center rounded-full shadow-sm hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300 px-8 xl:px-6 py-2 mt-2 bg-inherit text-gradient border border-[#e0e0e0] bg-gradient-to-r from-white to-gray-100">Login</button>
                            <button className="text-lg h-12 min-w-[140px] justify-center flex items-center text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300 px-8 xl:px-6 py-2 mt-2 bg-gradient-to-r from-sky-300 to-sky-600 text-white">Sign Up</button>
                        </div>
                    </div>
                
                </div>
                
            </div>
        </nav>
    </div>
   
  );
};

export default BaseNavbar;
