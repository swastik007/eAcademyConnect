import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
    return (
        <>
        {/* Features */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* Grid */}
            <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="lg:col-span-7">
                {/* Grid */}
                <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
                <div className="col-span-4">
                    <img
                    className="rounded-xl"
                    src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80"
                    alt="Image Description"
                    />
                </div>
                {/* End Col */}
                <div className="col-span-3">
                    <img
                    className="rounded-xl"
                    src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                    alt="Image Description"
                    />
                </div>
                {/* End Col */}
                <div className="col-span-5">
                    <img
                    className="rounded-xl"
                    src="https://images.unsplash.com/photo-1600194992440-50b26e0a0309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                    alt="Image Description"
                    />
                </div>
                {/* End Col */}
                </div>
                {/* End Grid */}
            </div>
            {/* End Col */}
            <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
                <div className="space-y-6 sm:space-y-8">
                {/* Title */}
                <div className="space-y-2 md:space-y-4">
                    <h2 className="capitalize font-bold text-3xl lg:text-5xl text-gray-800 dark:text-gray-200">
                    immersive and engaging experience learning experience
                    </h2>
                    <p className="text-gray-500">
                    Introducing "Hamro Classroom" – your ultimate companion on the journey to academic excellence. Designed with innovation and creativity at its core, Hamro Classroom is not just another educational app; it's a powerful tool crafted to empower students in their quest to learn, understand, and conquer exams.
<br/><br/>
With Hamro Classroom, learning becomes an immersive and engaging experience. Say goodbye to tedious study sessions and hello to dynamic, interactive lessons tailored to suit your individual learning style. Whether you're preparing for standardized tests, school exams, or university entrance assessments, our app is here to guide you every step of the way.


                    </p>
                </div>
                {/* End Title */}
               
                {/* End List */}
                </div>
            </div>
            {/* End Col */}
            </div>
            {/* End Grid */}
        </div>
        {/* End Features */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
             {/* List */}
             <ul className="grid lg:grid-cols-3 gap-4">
                    <li className="flex space-x-3">
                    {/* Solid Check */}
                    <span className="mt-0.5 lg:mt-0 size-5 flex justify-center items-center rounded-full text-sky-500 mr-3">
                    <i className="bi bi-check-circle-fill text-5xl mt-5 "></i>
                    </span>
                    {/* End Solid Check */}
                    <p className="flex flex-col font-light text-stone-800 text-base leading-2 tracking-wide ">
                    <span className="text-3xl capitalize font-medium text-primary">
                   more than just a study aid
                    </span>
                    it's a supportive community where students can connect, collaborate, and learn from one another. Share insights, ask questions, and receive guidance from peers and mentors who are just as passionate about academic success as you are.
</p>
                    </li>
                    <li className="flex space-x-3">
                    {/* Solid Check */}
                    <span className="mt-0.5 lg:mt-0 size-5 flex justify-center items-center rounded-full text-sky-500 mr-3">
                    <i className="bi bi-check-circle-fill text-5xl mt-5 "></i>
                    </span>
                    {/* End Solid Check */}
                   
                    <p className="flex flex-col font-light text-stone-800 text-base leading-2 tracking-wide ">
                    <span className="text-3xl capitalize font-medium text-primary">
                    ace your exams 
                    </span>
Hamro Classroom is your trusted partner in education. Join us today and unlock a world of endless learning possibilities. Welcome to the future of academic excellence. Welcome to Hamro Classroom.
</p>
                    </li>
                    <li className="flex space-x-3">
                    {/* Solid Check */}
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full text-sky-500 mr-3">
                    <i className="bi bi-check-circle-fill text-5xl mt-5 "></i>
                    </span>
                    {/* End Solid Check */}
                    <p className="flex flex-col font-light text-stone-800 text-base leading-2 tracking-wide ">
                    <span className="text-3xl capitalize font-medium text-primary">
                        What Sets Us Apart
                    </span>From detailed study materials to practice quizzes and real-time feedback, everything you need to grasp even the most challenging concepts with confidence. Our intuitive interface makes navigating through subjects effortless, allowing you to master the material.
</p>
                    </li>
                </ul>
        </div>
        </>
    );
};

export default AboutSection;

