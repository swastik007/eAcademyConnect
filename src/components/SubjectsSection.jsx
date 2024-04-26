import React from 'react';
import SubjectCard from './SubjectCard';

const Subjects = () => {
    return(
        <section
            className="bg-gradient-to-r from-white to-blue-50 py-10 sm:py-16 lg:py-24 relative bg-cover"
         >
            <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-stone-800 sm:text-4xl lg:text-5xl">
                Subjects Covered
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-stone-700">
                Gaining trust of hundreds of student and parents throughout the world, we have gained experience in a wide range of industries. Realizing the need of the digital world our clients regard us as their IT partners to take care of their digital needs.
            </p>
            </div>
            <div className="container max-w-screen-xl mx-auto grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-4 p-8 lg:p-0">
                <SubjectCard title="Mathematics" icon="images/subjects/maths.png" />
                <SubjectCard title="Science" icon="images/subjects/science.png" />
                <SubjectCard title="Business" icon="images/subjects/business.png" />
                <SubjectCard title="Chemistry" icon="images/subjects/chemistry.png" />
                <SubjectCard title="Environment" icon="images/subjects/environment.png" />
                <SubjectCard title="Geography" icon="images/subjects/geography.png" />
                <SubjectCard title="History" icon="images/subjects/history.png" />
                <SubjectCard title="Medicine" icon="images/subjects/medicine.png" />
                <SubjectCard title="Languages" icon="images/subjects/languages.png" />
                <SubjectCard title="English" icon="images/subjects/english.png" />
                <SubjectCard title="German" icon="images/subjects/german.png" />
                <SubjectCard title="Science" icon="images/subjects/science.png" />
                
            </div>
         </section>
    )
}
export default Subjects;