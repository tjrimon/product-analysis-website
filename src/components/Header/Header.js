import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='flex items-center justify-between border-b border-slate-200 px-10'>
            <h3 className='text-2xl uppercase '>Packbo</h3>
            <nav>
                <ul className='flex justify-center items-center py-5'>
                    <li className='pb-1 mx-3 text-[18px]  hover:text-orange-400'><NavLink to='/'>Home</NavLink></li>
                    <li className='pb-1 mx-3 text-[18px]  hover:text-orange-400'><NavLink to='/reviews'>Reviews</NavLink></li>
                    <li className='pb-1 mx-3 text-[18px]  hover:text-orange-400'><NavLink to='/dashboard'>Dashboard</NavLink></li>
                    <li className='pb-1 mx-3 text-[18px]  hover:text-orange-400'> <NavLink to='/blogs'>Blogs</NavLink></li>
                </ul>
            </nav>
        </div >
    );
};

export default Header;