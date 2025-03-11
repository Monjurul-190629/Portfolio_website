import React from 'react';
import Banner from './Banner';
import Normal from './Normal';
import Contact from './Contact/Contact';
import Skill from './Skills/Skill';

const Home = () => {
    return (
        <div className="bg-slate-900 text-white px-4 sm:px-8 lg:px-16">
            <div className="max-w-6xl w-full mx-auto">
                {/* Hero Section */}
                <Banner />

                {/* Normal Section */}
                <Normal />

                {/* Skills Section */}
                <Skill />

                

                {/* Contact Section */}
                <Contact />
            </div>
        </div>
    );
};

export default Home;
