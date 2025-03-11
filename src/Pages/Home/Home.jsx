import React from 'react';
import Banner from './Banner';
import Normal from './Normal';
import Contact from './Contact/Contact';
import Skill from './Skills/Skill';

const Home = () => {
    return (
        <div className="bg-slate-800 text-white px-4 sm:px-8 lg:px-16">
            <div className="max-w-6xl w-full mx-auto">
                {/* Hero Section */}
                <Banner />

                {/* Normal Section */}
                <Normal />

                {/* Skills Section */}
                <Skill />

                {/* Contact Divider */}
                <div className="divider divider-neutral text-white text-xl sm:text-2xl lg:text-3xl mt-10">
                    Contact
                </div>

                {/* Contact Section */}
                <Contact />
            </div>
        </div>
    );
};

export default Home;
