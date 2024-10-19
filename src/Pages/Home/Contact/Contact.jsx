import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
const Contact = () => {
    return (
        <div className='bg-slate-800 text-white flex lg:flex-row flex-col gap-10 justify-center'>
            <div>
                <div className='bg-slate-900 p-5'>
                    <div className='border-1 py-5 px-10 bg-slate-600 border-slate-300 mt-10 hover:bg-slate-700'>
                        <p>Phone : 01812967146</p>
                    </div>
                    <div className='border-1 py-5 px-10 bg-slate-600 border-slate-300 mt-10 hover:bg-slate-700'>
                        <p>Email : monjurulalam190629@gmail.com</p>
                    </div>
                    <div className='border-1 py-5 px-10 bg-slate-600 border-slate-300 mt-10 hover:bg-slate-700'>
                        <p>Address : Pabna, Bangladesh</p>
                    </div>
                </div>
                <div className='bg-slate-900 p-5'>
                    <div className='border-1 py-5 px-10 bg-slate-700 border-slate-300 mt-10 hover:bg-slate-800'>
                        <p className='bold text-2xl'>Follow me</p><br></br>
                        <div className='flex gap-5'>
                            <a href="https://www.facebook.com/Monjurul0629/"><FaFacebook className="text-3xl hover:text-green-400"></FaFacebook></a>
                            <a href="https://github.com/Monjurul-190629/"><FaSquareGithub className="text-3xl hover:text-green-400"></FaSquareGithub></a>
                            <a href="www.linkedin.com"><IoLogoLinkedin className="text-3xl hover:text-green-400"></IoLogoLinkedin></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:py-20 py-10 px-10'>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
                    <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs bg-slate-700 border-1 border-slate-300" />
                    <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs bg-slate-700  border-1 border-slate-300" />
                    <input type="text" placeholder="Phone" className="input input-bordered w-full max-w-xs bg-slate-700  border-1 border-slate-300" />
                    <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs bg-slate-700  border-1 border-slate-300" />
                </div>
                <div>
                    <textarea
                        placeholder="Enter your query here"
                        rows="6"                 // Set the number of rows (optional)
                        cols="40"                // Set the number of columns (optional)
                        className="border border-gray-300 p-5 bg-slate-700 mt-10"
                    />
                </div>
                <div>
                    <button className='btn bg-slate-800 mt-5 text-white hover:bg-slate-400 hover:text-black'>Submit message</button>
                </div>
            </div>

        </div>
    );
};

export default Contact;