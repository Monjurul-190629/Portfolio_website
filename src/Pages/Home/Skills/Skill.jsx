import React from 'react';

const Skill = () => {
    return (
        <div className='bg-slate-800 text-white lg:p-20 p-5'>
            <div className='flex lg:flex-row flex-col gap-10 justify-center items-center'>
                <div className='pt-10 '>
                    <p className='text-3xl underline bold pb-10'>Technical Skills : </p>
                    <p className='text-[18px]'>1. HTML <progress className="progress progress-primary w-56" value="80" max="100"></progress> </p>
                    <p className='text-[18px]'>2. CSS <progress className="progress progress-primary w-56" value="70" max="100"></progress> </p>
                    <p className='text-[18px]'>3. Tailwind CSS <progress className="progress progress-primary w-56" value="75" max="100"></progress> </p>
                    <p className='text-[18px]'>4. JavaScript <progress className="progress progress-primary w-56" value="72" max="100"></progress> </p>
                    <p className='text-[18px]'>5. React js <progress className="progress progress-primary w-56" value="65" max="100"></progress> </p>
                    <p className='text-[18px]'>6. Firebase <progress className="progress progress-primary w-56" value="65" max="100"></progress> </p>
                    <p className='text-[18px]'>7. Node js <progress className="progress progress-primary w-56" value="60" max="100"></progress> </p>
                    <p className='text-[18px]'>8. Express js <progress className="progress progress-primary w-56" value="60" max="100"></progress> </p>
                    <p className='text-[18px]'>9. MongoDb <progress className="progress progress-primary w-56" value="60" max="100"></progress> </p>
                    <p className='text-[18px]'>10. Git <progress className="progress progress-primary w-56" value="80" max="100"></progress> </p>
                    <p className='text-[18px]'>11. Github <progress className="progress progress-primary w-56" value="85" max="100"></progress> </p>
                    <p className='text-[18px]'>12. Microsoft Office <progress className="progress progress-primary w-56" value="86" max="100"></progress> </p>
                    <p className='text-[18px]'>13. Python <progress className="progress progress-primary w-56" value="62" max="100"></progress> </p>
                </div>
                <div className='pt-10'>
                   <p className='text-3xl underline bold pb-10'>Interpersonal Skills : </p>
                   <p className='text-[18px]'>1. Active Listener <progress className="progress progress-primary w-56" value="80" max="100"></progress> </p>
                   <p className='text-[18px]'>2. Fast Learning Attitude <progress className="progress progress-primary w-56" value="80" max="100"></progress> </p>
                   <p className='text-[18px]'>3. Problem-solving Attitude <progress className="progress progress-primary w-56" value="80" max="100"></progress> </p>
                </div>
            </div>
        </div>
    );
};

export default Skill;