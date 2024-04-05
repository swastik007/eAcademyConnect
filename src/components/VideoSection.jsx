import React, { useState } from 'react';

const VideoSection = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            {/* Features */}
            <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="min-h-[35vh] bg-[url('images/students.jpg')] bg-center bg-cover bg-no-repeat relative rounded-xl md:min-h-[75vh]">
                    <div className="absolute bottom-0 start-0 end-0 max-w-xs text-center mx-auto p-6 md:start-auto md:text-start md:mx-0">
                        {/* Card */}
                        <div className="px-5 py-4 inline-block bg-white rounded-lg md:p-7 dark:bg-gray-800">
                            <div className="hidden md:block">
                                <h3 className="text-lg font-bold text-gray-800 sm:text-2xl dark:text-gray-200">
                                    How does IT work?
                                </h3>
                                <p className="mt-2 text-gray-800 dark:text-gray-200">
                                    Learn more about IT.
                                </p>
                            </div>
                            <div className="md:mt-16">
                                <button
                                    onClick={handleOpenModal}
                                    className="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-gray-500 dark:text-white dark:hover:text-gray-400"
                                >
                                    <svg
                                        className="flex-shrink-0 size-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polygon points="5 3 19 12 5 21 5 3" />
                                    </svg>
                                    Watch our story
                                </button>
                            </div>
                        </div>
                        {/* End Card */}
                    </div>
                </div>
            </div>
            {/* End Features */}

            {/* Modal */}
            {modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-50" onClick={handleCloseModal}></div>
                    <div className="bg-white p-8 max-w-md rounded-lg z-10">
                        <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-800" onClick={handleCloseModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <iframe
                            title="video"
                            className="w-full h-64"
                            src="https://www.youtube.com/watch?v=q_T-HxVUGIQ"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
            {/* End Modal */}
        </>
    );
};

export default VideoSection;
