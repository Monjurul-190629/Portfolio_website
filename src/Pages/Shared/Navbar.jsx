import { NavLink } from 'react-router-dom';
import { MdManageAccounts } from "react-icons/md";

const Navbar = () => {
    const navLink = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Education">Education</NavLink></li>
        <li><NavLink to="/Skill">Skill</NavLink></li>
        <li><NavLink to="/Project">Projects</NavLink></li>
        <li><NavLink to="/Contact">Contact me</NavLink></li>
        <li><NavLink to="/About">About me</NavLink></li>
    </>


    return (
        <div className="mx-10 bg-slate-800 h-[50px] text-white">
            <div className="navbar">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content z-20 mt-3  p-2 shadow bg-slate-500 rounded-box w-52">
                            <div>
                                {navLink}
                            </div>
                        </ul>
                        <div className='hidden lg:flex justify-center items-center w-[250px]'>
                            <div>
                                <MdManageAccounts className='text-5xl' />
                            </div>
                            <div>
                                <p className='text-xl md:text-xl font-semibold text-white ml-3'>Monjurul</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex lg:hidden justify-center items-center w-[200px]'>
                        <div className='flex items-center'>
                            <MdManageAccounts className='text-5xl' />
                            <div>
                                <p className='text-xl md:text-2xl font-bold text-white ml-3'>Monjurul</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;