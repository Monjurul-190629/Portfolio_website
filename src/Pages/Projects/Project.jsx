import React from 'react';

const Project = () => {
    return (
        <div className='bg-slate-800 text-white lg:p-20 p-4'>
            <p className='text-2xl bold underline'>Top 3 Projects: </p>
            <br></br>
            <br></br>
            <div>
                <div>

                    <div className='flex gap-5 flex-col lg:flex-row lg:gap-10'>
                        <p className='flex-1'><span className="pr-7 underline">1. Project Title : </span> <span className="bold text-2xl">Travel Agency Site</span></p>
                        <div className='flex flex-row gap-5'>
                            <a href="https://assignment-10-3798d.web.app/" className='underline semibold text-blue-500'>Live link</a>
                            <a href="https://github.com/Monjurul-190629/Tourist_website_client" className='underline semibold text-blue-500'>Client Side Code</a>
                            <a href="https://github.com/Monjurul-190629/Tourist_website_server" className='underline semibold text-blue-500'>Server Side Code</a>
                        </div>
                    </div>
                    <div>
                    <p className='flex-1 mt-10 w-2/3'><span className="pr-7 underline">Project Description : </span> <span className=""> It is an online platform that facilitates the management of travel services, offering users access to tours,
                    tourist-spots and travel-related information.</span></p>
                    <p className='flex-1 mt-10 w-2/3'><span className="pr-7 underline">Technology used : </span> <span className=""> HTML, CSS, TAILWIND CSS, DAISY UI, REACT, NODE JS, EXPRESS JS, MONGODB, FIREBASE, VERCEL.</span></p>
                    <p className='flex-1 mt-10 w-2/3'><span className="pr-7 underline">Core Features : </span> <span className="">Login/Registration, Booking, Adding spot</span></p>
                    <div className="divider divider-success"></div>
                    </div>

                    <div className='flex gap-5 flex-col lg:flex-row lg:gap-10 mt-10 lg:mt-20'>
                        <p className='flex-1'><span className="pr-7 underline">2. Project Title : </span> <span className="bold text-2xl">Online Job Provider website</span></p>
                        <div className='flex flex-row gap-5'>
                            <a href="https://job-seeking-4b520.web.app/" className='underline semibold text-blue-500'>Live link</a>
                            <a href="https://github.com/Monjurul-190629/Online_job_provider" className='underline semibold text-blue-500'>Client Side Code</a>
                            <a href="https://github.com/Monjurul-190629/Job_provider_website_server" className='underline semibold text-blue-500'>Server Side Code</a>
                        </div>
                    </div>
                    <div>
                    <p className='flex-1 mt-10 w-2/3'><span className="pr-7 underline">Project Description : </span> <span className="">It is an online platform that connects employers with potential employees by listing job opportunities
                    and allowing users to apply directly.</span></p>
                    <p className='flex-1 mt-10 w-2/3'><span className="pr-7 underline">Technology used : </span> <span className=""> HTML, CSS, TAILWIND CSS, DAISY UI, REACT, NODE JS, EXPRESS JS, MONGODB, FIREBASE, VERCEL.</span></p>
                    <p className='flex-1 mt-10 w-2/3'><span className="pr-7 underline">Core Features : </span> <span className="">Adding a new job, job_deadline, dynamic and responsive</span></p>
                    <div className="divider divider-success"></div>
                    </div>

                    <div className='flex gap-5 flex-col lg:flex-row lg:gap-10  mt-10 lg:mt-20'>
                        <p className='flex-1'><span className="pr-7 underline">1. Project Title : </span> <span className="bold text-2xl">Office's Asset Management Web application</span></p>
                        <div className='flex flex-row gap-5'>
                            <a href="https://service-provider-ba91f.web.app/" className='underline semibold text-blue-500'>Live link</a>
                            <a href="https://github.com/Monjurul-190629/Service-provider-website" className='underline semibold text-blue-500'>Client Side Code</a>
                            <a href="https://github.com/Monjurul-190629/service-provider-website-server" className='underline semibold text-blue-500'>Server Side Code</a>
                        </div>
                    </div>
                    <div>
                    <p className='flex-1 mt-10 w-2/3'><span className="pr-7 underline">Project Description : </span> <span className=""> It is an asset management web application that can manage the assets of employees of various
                    company.</span></p>
                    <p className='flex-1 mt-10 w-2/3'><span className="pr-7 underline">Technology used : </span> <span className=""> HTML, CSS, TAILWIND CSS, DAISY UI, REACT, NODE JS, EXPRESS JS, MONGODB, FIREBASE, VERCEL.</span></p>
                    <p className='flex-1 mt-10 w-2/3'><span className="pr-7 underline">Core Features : </span> <span className="">Stripe implementation, Store data in Mongodb, Managing various company</span></p>
                    <div className="divider divider-success"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;