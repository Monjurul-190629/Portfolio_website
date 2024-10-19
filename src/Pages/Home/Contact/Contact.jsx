import React, { useRef } from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef(); 

    const sendEmail = (e) => {
        e.preventDefault(); // Prevent the form from submitting

        // Sending the form data using EmailJS
        emailjs.sendForm('service_5qn4bcd', 'template_p0y2f7b', form.current, 'ZNaeCns0HE2S0LkQW')
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Message has successfully sent",
                        showConfirmButton: false,
                        timer: 1500
                      });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "Message is not sent",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            );

        // Reset the form after submission
        e.target.reset();
    };

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
                        <p className='bold text-2xl'>Follow me</p><br />
                        <div className='flex gap-5'>
                            <a href="https://www.facebook.com/Monjurul0629/"><FaFacebook className="text-3xl hover:text-green-400" /></a>
                            <a href="https://github.com/Monjurul-190629/"><FaSquareGithub className="text-3xl hover:text-green-400" /></a>
                            <a href="www.linkedin.com"><IoLogoLinkedin className="text-3xl hover:text-green-400" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:py-20 py-10 px-10'>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
                        <input
                            type="text"
                            name="from_name" // Name for the EmailJS template
                            placeholder="Name"
                            className="input input-bordered w-full max-w-xs bg-slate-700 border-1 border-slate-300"
                            required
                        />
                        <input
                            type="email"
                            name="from_email" // Name for the EmailJS template
                            placeholder="Email"
                            className="input input-bordered w-full max-w-xs bg-slate-700 border-1 border-slate-300"
                            required
                        />
                        <input
                            type="text"
                            name="from_phone" // Name for the EmailJS template
                            placeholder="Phone"
                            className="input input-bordered w-full max-w-xs bg-slate-700 border-1 border-slate-300"
                        />
                        <input
                            type="text"
                            name="subject" // Name for the EmailJS template
                            placeholder="Subject"
                            className="input input-bordered w-full max-w-xs bg-slate-700 border-1 border-slate-300"
                        />
                    </div>
                    <div>
                        <textarea
                            name="message" // Name for the EmailJS template
                            placeholder="Enter your query here"
                            rows="6"
                            cols="30"
                            className="border border-gray-300 p-5 bg-slate-700 mt-10"
                            required
                        />
                    </div>
                    <div>
                        <button type="submit" className='btn bg-slate-800 mt-5 text-white hover:bg-slate-400 hover:text-black'>
                            Submit message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
