import React from 'react';

const Education = () => {
    return (
        <div className='bg-slate-800 text-white text-center'>
            <div className='lg:py-20 lg:px-20 px-5 py-5'>
                <p className='underline text-2xl bold'>SSC (Secondary School Certificate)</p>
                <p className='text-xl'>School : Moon Light Kindergaten and High School</p>
                <p className='text-xl'>Group : Science</p>
                <p className='text-xl'>GPA : 5.00</p>
            </div>
            <div className="divider divider-info text-center"></div>
            <div className='lg:py-20 lg:px-20 px-5 py-5'>
                <p className='underline text-2xl bold'>HSC (Higher Secondary School Certificate)</p>
                <p className='text-xl'>College : Sirajgonj Govt. College</p>
                <p className='text-xl'>Group : Science</p>
                <p className='text-xl'>GPA : 4.33</p>
            </div>
            <div className="divider divider-info text-center"></div>
            <div className='lg:py-20 lg:px-20 px-5 py-5'>
                <p className='underline text-2xl bold'>B.Sc in (Engineering)</p>
                <p className='text-xl'>University : Pabna University of Science and Technology</p>
                <p className='text-xl'>Subject : Information and Communication Engineering(ICE)</p>
                <p className='text-xl'>CGPA : Yet not Published</p>
            </div>
            <div className="divider divider-info text-center"></div>
        </div>
    );
};

export default Education;