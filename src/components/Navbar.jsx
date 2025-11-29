import React from 'react';
import { NavLink } from 'react-router';
import userPNG from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='w-10/12 mx-auto flex justify-between items-center m-5'>
            <div className=""></div>
            <div className='flex items-center gap-5 text-gray-600'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>
            <div className='flex gap-6'>
                <img src={userPNG} alt="" />
                <button className='btn btn-primary'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;