import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-indigo-300">
            <div className='container mx-auto md:flex items-center justify-between '>
                <div className='flex justify-between items-center py-4 md:py-0 mx-5 md:mx-0'><h3 className='text-2xl uppercase '><Link to='/'>Packbo</Link></h3>
                    <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>{open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>} </div></div>
                <nav>
                    <ul className={`md:flex text-center justify-center items-center py-5 absolute duration-200 md:static ease-in bg-indigo-300 w-full ${open ? 'top-19 border-t border-white' : 'top-[-200px]'}`}>
                        <li className='pb-1 mx-3 text-[18px]  hover:text-white'><NavLink to='/'>Home</NavLink></li>
                        <li className='pb-1 mx-3 text-[18px]  hover:text-white'><NavLink to='/reviews'>Reviews</NavLink></li>
                        <li className='pb-1 mx-3 text-[18px]  hover:text-white'><NavLink to='/dashboard'>Dashboard</NavLink></li>
                        <li className='pb-1 mx-3 text-[18px]  hover:text-white'> <NavLink to='/blogs'>Blogs</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div >
    );
};

export default Header;