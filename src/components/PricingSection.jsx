import React from 'react';

const PricingSection = () => {
    return(
        <div className="min-h-screen flex justify-center items-center bg-white">
            <div className="">
                <div className="text-center font-semibold">
                <h1 className="text-5xl">
                    <span className="text-blue-700 tracking-wide">Flexible </span>
                    <span>Plans</span>
                </h1>
                <p className="pt-6 text-xl text-gray-400 font-normal w-full px-8 md:w-full">
                    Choose a plan that works best for you and
                    <br /> your team.
                </p>
                </div>
                <div className="pt-24 flex flex-col md:flex-row items-center">
                {/* Basic Card */}
                <div className="max:w-72 lg:w-96 p-8 bg-white text-center rounded-3xl md:pr-16 shadow-xl">
                    <h1 className="text-black font-semibold text-2xl">Basic</h1>
                    <p className="pt-2 tracking-wide">
                    <span className="text-gray-400 align-top">$ </span>
                    <span className="text-3xl font-semibold">10</span>
                    <span className="text-gray-400 font-medium">/ user</span>
                    </p>
                    <hr className="mt-4 border-1" />
                    <div className="pt-8">
                    <p className="font-semibold text-gray-400 text-left">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-3 w-3"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                            />
                            </svg>

                        <span className="pl-2">
                        Get started with <span className="text-black">messaging</span>
                        </span>
                    </p>
                    <p className="font-semibold text-gray-400 text-left pt-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-3 w-3"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                            />
                            </svg>

                        <span className="pl-2">
                        Flexible <span className="text-black">team meetings</span>
                        </span>
                    </p>
                    <p className="font-semibold text-gray-400 text-left pt-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-3 w-3"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                            />
                            </svg>

                        <span className="pl-2">
                        <span className="text-black">5 TB</span> cloud storage
                        </span>
                    </p>
                    <a href="#" className="">
                        <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                        <span className="font-medium">Choose Plan</span>
                        <span className="pl-2 material-icons align-middle text-sm">
                            east
                        </span>
                        </p>
                    </a>
                    </div>
                </div>
                {/* StartUp Card */}
                <div className="max:w-72 lg:w-80 p-8 bg-gradient-to-tr from-sky-600 to-sky-400 bg-clip-border text-center rounded-3xl text-white border-4 shadow-xl border-white transform md:scale-125 my-8 md:my-0">
                    <h1 className="text-white font-semibold text-2xl">Startup</h1>
                    <p className="pt-2 tracking-wide">
                    <span className="text-gray-400 align-top">$ </span>
                    <span className="text-3xl font-semibold">24</span>
                    <span className="text-gray-400 font-medium">/ user</span>
                    </p>
                    <hr className="mt-4 border-1 border-gray-600" />
                    <div className="pt-8">
                    <p className="font-semibold text-gray-400 text-left">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-3 w-3"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                            />
                            </svg>

                        <span className="pl-2">
                        All features in <span className="text-white">Basic</span>
                        </span>
                    </p>
                    <p className="font-semibold text-gray-400 text-left pt-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-3 w-3"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                            />
                            </svg>

                        <span className="pl-2">
                        Flexible <span className="text-white">call scheduling</span>
                        </span>
                    </p>
                    <p className="font-semibold text-gray-400 text-left pt-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-3 w-3"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                            />
                            </svg>

                        <span className="pl-2">
                        <span className="text-white">15 TB</span> cloud storage
                        </span>
                    </p>
                    <a href="#" className="">
                        <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                        <span className="font-medium">Choose Plan</span>
                        <span className="pl-2 material-icons align-middle text-sm">
                            east
                        </span>
                        </p>
                    </a>
                    </div>
                    <div className="absolute top-4 right-4">
                    <p className="bg-blue-700 font-semibold px-4 py-1 rounded-full uppercase text-xs">
                        Popular
                    </p>
                    </div>
                </div>
                {/* Enterprise Card */}
                <div className=" max:w-72 lg:w-96 p-8 bg-white text-center rounded-3xl md:pl-16 shadow-xl">
                    <h1 className="text-black font-semibold text-2xl">Enterprise</h1>
                    <p className="pt-2 tracking-wide">
                    <span className="text-gray-400 align-top">$ </span>
                    <span className="text-3xl font-semibold">35</span>
                    <span className="text-gray-400 font-medium">/ user</span>
                    </p>
                    <hr className="mt-4 border-1" />
                    <div className="pt-8">
                    <p className="font-semibold text-gray-400 text-left">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-3 w-3"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                            />
                            </svg>

                        <span className="pl-2">
                        All features in <span className="text-black">Startup</span>
                        </span>
                    </p>
                    <p className="font-semibold text-gray-400 text-left pt-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-3 w-3"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                            />
                            </svg>

                        <span className="pl-2">
                        Growth <span className="text-black">oriented</span>
                        </span>
                    </p>
                    <p className="font-semibold text-gray-400 text-left pt-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-3 w-3"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                            />
                            </svg>

                        <span className="pl-2">
                        <span className="text-black">Unlimited</span> cloud storage
                        </span>
                    </p>
                    <a href="#" className="">
                        <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                        <span className="font-medium">Choose Plan</span>
                        <span className="pl-2 material-icons align-middle text-sm">
                            east
                        </span>
                        </p>
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </div>

    );
}

export default PricingSection;