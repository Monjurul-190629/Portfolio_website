import React from 'react';

const Project = () => {
    return (
        <div className='bg-slate-800 text-white lg:p-20 p-4'>
            <p className='text-2xl bold'>Top Projects: </p>
            <br></br>
            <br></br>
            <div>
                <div>
                    <div className='flex gap-5 flex-col lg:flex-row lg:gap-10  mt-3 lg:mt-20'>
                        <p className='flex-1 text-xl'><span className="pr-7 ">1. Project Title : </span> <span className="bold text-2xl">Asset Management Web application</span></p>
                        <div className='flex flex-row gap-5'>
                            <a href="https://service-provider-ba91f.web.app/" className='underline semibold text-blue-500'>Live link</a>
                            <a href="https://github.com/Monjurul-190629/Asset-management-website" className='underline semibold text-blue-500'>Client Site Code</a>
                            <a href="https://github.com/Monjurul-190629/Asset-management-website-server" className='underline semibold text-blue-500'>Server Site Code</a>
                        </div>
                    </div>
                    <div>
                        <p className='flex-1 mt-10 w-2/3'><span className="pr-7">Project Description : </span> <span className=""> It is an asset management web application that can manage the assets of employees of various
                            company.</span></p>
                        <p className='flex-1 mt-10 w-2/3'><span className="pr-7">Technology used : </span> <span className=""> HTML, CSS, TAILWIND CSS, DAISY UI, REACT JS, NODE JS, EXPRESS JS, MONGODB, FIREBASE, VERCEL.</span></p>
                        <p className='flex-1 mt-10 w-2/3'><span className="pr-7">Core Features : </span> <span className="">Asset Management Dashboard, Employee Hiring Integration and Payment System.</span></p>
                        <div className="divider divider-success"></div>
                    </div>


                    <div className='flex gap-5 flex-col lg:flex-row lg:gap-10 mt-10 lg:mt-20'>
                        <p className='flex-1 text-xl'><span className="pr-7 ">2. Project Title : </span> <span className="bold text-2xl">Online Job Seeking Web Application</span></p>
                        <div className='flex flex-row gap-5'>
                            <a href="https://job-seeking-website-8ebe5.web.app/" className='underline semibold text-blue-500'>Live link</a>
                            <a href="https://github.com/Monjurul-190629/Job_seeking_website_client" className='underline semibold text-blue-500'>Client Site Code</a>
                            <a href="https://github.com/Monjurul-190629/job-seeking-website-server" className='underline semibold text-blue-500'>Server Site Code</a>
                        </div>
                    </div>
                    <div>
                        <p className='flex-1 mt-10 w-2/3'><span className="pr-7">Project Description : </span> <span className="">It is an online platform that connects employers with potential employees by listing job opportunities
                            and allowing users to apply directly.</span></p>
                        <p className='flex-1 mt-10 w-2/3'><span className="pr-7">Technology used : </span> <span className=""> HTML, CSS, TAILWIND CSS, DAISY UI, REACT JS, NODE JS, EXPRESS JS, MONGODB, FIREBASE, VERCEL.</span></p>
                        <p className='flex-1 mt-10 w-2/3'><span className="pr-7">Core Features : </span> <span className="">Apply for Job, Check for Applicants, Dynamic and Fully responsive.</span></p>
                        <div className="divider divider-success"></div>
                    </div>


                    <div className='flex gap-5 flex-col lg:flex-row lg:gap-10 mt-10 lg:mt-20'>
                        <p className='flex-1 text-xl'><span className="pr-7 ">3. Project Title : </span> <span className="bold text-2xl">Online Transport Web Application</span></p>
                        <div className='flex flex-row gap-5'>
                            <a href="https://transport-hluc2m23l-monjuruls-projects.vercel.app/" className='underline semibold text-blue-500'>Live link</a>
                            <a href="https://github.com/Monjurul-190629/Bus_Transport_Web/tree/main/transport-app" className='underline semibold text-blue-500'>Github Code</a>
                            

                        </div>
                    </div>
                    <div>
                        <p className='flex-1 mt-10 w-2/3'><span className="pr-7">Project Description : </span> <span className="">An online platform that allows users to hire buses, motorbikes, and minibikes for tours and personal transportation.</span></p>
                        <p className='flex-1 mt-10 w-2/3'><span className="pr-7">Technology used : </span> <span className=""> HTML, CSS, TAILWIND CSS, DAISY UI, NEXT JS, REACT JS, MONGOOSE, VERCEL.</span></p>
                        <p className='flex-1 mt-10 w-2/3'><span className="pr-7">Core Features : </span> <span className="">Vehicle Booking System, Real-Time Availability, Dynamic and Fully responsive.</span></p>
                        <div className="divider divider-success"></div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Project;