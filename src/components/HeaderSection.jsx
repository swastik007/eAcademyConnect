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
        <div className="absolute top-0 left-0 w-full h-[100vh] sm:h-[225vh] lg:h-[125vh] cover-gradient"></div>
        <nav id="navbar" className="relative z-10 w-full text-neutral-800">
            <div className="flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4">
                <div className="flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8">
                <div className="w-full flex flex-row items-center justify-between py-6">
                    <div>
                    <img src={logo} className="w-12 xl:w-18" alt="Nefa Logo" />
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
                <div className={`${open ? 'flex' : 'hidden lg:flex'} flex-col lg:flex-row menu-container`}>
                    <ul className='w-full h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-300 xl:space-x-2 space-y-3 lg:space-y-0'>
                        <li className="w-full">
                            <a href="#" className="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline">
                                Cryptocurrency
                            </a>
                        </li>
                        <li className="w-full">
                            <a href="#" className="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline">
                            Cryptocurrency
                            </a>
                        </li>
                        <li className="w-full">
                            <a href="#" className="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline">
                            Cryptocurrency
                            </a>
                        </li>
                        <li className="relative group">
                        <button className="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline flex items-center" onClick={dropdownToggler} onBlur={dropdownToggler}>
                            <span>Products</span>
                            {dropdownNavbar ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                )
                            }
                            
                        </button>
                        <div className={dropdownNavbar ? 'flex lg:absolute flex-col max-w-42 py-1 lg:bg-white rounded-md lg:shadow-md pl-2 lg:pl-0' : 'hidden'}>
                            <ul>
                            <li><a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Exchange</a></li>
                            <li><a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Wallet</a></li>
                            <li><a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Explorer</a></li>
                            <li><a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Charts</a></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                    <div className={`flex space-x-3`}>
                        <button className="text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300 px-8 xl:px-10 py-3 mt-2 bg-inherit text-gradient border border-[#0c66ee]">Login</button>
                        <button className="text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300 px-8 xl:px-10 py-3 mt-2 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] text-white">Sign Up</button>
                    </div>
                </div>
                
                </div>
                
            </div>
        </nav>
    </div>
   
  );
};

export default BaseNavbar;
