import React from 'react';

const About = () => {
    return (
        <div className='bg-slate-800 text-white'>
            
            <div className='flex flex-col justify-center lg:flex-row lg:px-20 lg:py-20 px-5 py-5 gap-10'>
                
                <div className='pt-5 lg:pt-10 '>
                    <p className=' text-4xl semibold'>About me...</p>
                    <p>
                       I am <span className='text-blue-400 text-xl'>Monjurul Alam</span>. I am a final year student 
                       of Pabna University of Science and Technology(PUST). My subject is Information and Communication
                        Engineering(ICE). I am passionate about becoming a skilled web developer, as I find great joy 
                        in creating dynamic and user-friendly websites that enhance user experiences.
                        With a strong foundation in programming languages such as HTML, CSS, and JavaScript, 
                         I am eager to expand my knowledge in frameworks and technologies like React and Node.js.
                          I believe that continuous learning and hands-on experience are essential to mastering web development. \
                          By working on diverse projects, collaborating with fellow developers, and staying updated on industry trends, 
                          I aim to build a robust portfolio that showcases my abilities. Ultimately, 
                          I aspire to contribute to innovative web solutions that meet the needs of users while pushing the
                           boundaries of what is possible in the digital realm.

   
                    </p>   
                </div>
                <div>
                    <h3 className='bold text-2xl'>Personal Information</h3>
                    <div className="divider divider-success w-40 text-[18px]"></div>
                    <div className='semibold'>
                        <span className='text-[18px] underline text-purple-300 pr-4'> Name </span>Monjurul Alam <br></br>
                        <span className=' text-[18px] underline text-purple-300 pr-4'> Age: </span> 24<br></br>
                        <span className='text-[18px] underline text-purple-300 pr-4'> Residence: </span> Pabna, Bangladesh<br></br>
                        <span className='text-[18px] underline text-purple-300 pr-4'> Degree: </span> B.Sc(Engineering) in ICE<br></br>
                        <span className='text-[18px] underline text-purple-300 pr-4'> University: </span> PUST<br></br>
                        <span className='text-[18px] underline text-purple-300 pr-4'> Email: </span> monjurulalam190629@gmail.com<br></br>
                        <span className='text-[18px] underline text-purple-300 pr-4'> Phone: </span> 01812967146 <br></br>
                        <span className='text-[18px] underline text-purple-300 pr-4'> Freelance: </span> Available<br></br>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;