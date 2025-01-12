import React from 'react';
import Banner from './Banner';
import Normal from './Normal';
import Contact from './Contact/Contact';
import Skill from './Skills/Skill';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Normal></Normal>
            <Skill></Skill>
            <div className="divider divider-neutral text-white text-3xl  ">Contact</div>
            <Contact></Contact>
        </div>
    );
};

export default Home;