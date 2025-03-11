import { NavLink } from 'react-router-dom';
import { MdManageAccounts } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLink = (
        <>
            <li><NavLink to="/" className="hover:text-blue-400 transition duration-300">Home</NavLink></li>
            <li><NavLink to="/Education" className="hover:text-blue-400 transition duration-300">Education</NavLink></li>
            <li><NavLink to="/Skill" className="hover:text-blue-400 transition duration-300">Skills</NavLink></li>
            <li><NavLink to="/Project" className="hover:text-blue-400 transition duration-300">Projects</NavLink></li>
            <li><NavLink to="/Contact" className="hover:text-blue-400 transition duration-300">Contact</NavLink></li>
            <li><NavLink to="/About" className="hover:text-blue-400 transition duration-300">About</NavLink></li>
        </>
    );

    return (
        <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-50">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
                <div className="flex justify-between items-center h-16">
                    
                    {/* Logo Section */}
                    <div className="flex items-center space-x-3">
                        <MdManageAccounts className="text-4xl text-blue-400" />
                        <p className="text-xl md:text-2xl font-semibold text-white">Monjurul</p>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex space-x-8 text-white">
                        {navLink}
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="lg:hidden focus:outline-none text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen 
                                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> 
                                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            }
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden absolute top-16 left-0 w-full bg-gray-900 bg-opacity-95 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <ul className="flex flex-col items-center space-y-6 py-6 text-white">
                    {navLink}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
