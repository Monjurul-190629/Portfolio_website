import React from 'react';
import Banner from './Banner';
import Normal from './Normal';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Normal></Normal>
            <Contact></Contact>
        </div>
    );
};

export default Home;