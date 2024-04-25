import React from 'react';
import SubjectCard from './SubjectCard';

const Subjects = () => {
    return(
        <section
            className="bg-sky-100 py-10 sm:py-16 lg:py-24 relative bg-cover"
         >
            <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-200 sm:text-4xl lg:text-5xl">
                Industry Expertise
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300">
                Gaining trust of hundreds of clients throughout the world, we have gained experience in a wide range of industries. Realizing the need of the digital world our clients regard us as their IT partners to take care of their digital needs.
            </p>
            </div>
            <div className="container max-w-3xl mx-auto grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-4 p-8 lg:p-0">
                <SubjectCard title="Mathematics" icon="images/subjects/maths.png" />
                <SubjectCard title="Science" icon="images/subjects/science.png" />
            </div>
         </section>
    )
}
export default Subjects;