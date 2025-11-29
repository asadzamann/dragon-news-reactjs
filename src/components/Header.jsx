import React from 'react';
import logo from '../assets/logo.png'
import { format, formatDistance, subDays } from "date-fns";



const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 my-5'>
            <img className='w-[350px]' src={logo} alt="" />
            <p className='text-gray-500'>Journalism Without Fear or Favour</p>
            <p className='text-lg text-gray-600'>{format(new Date(), "EEEE, MMMM dd,  yyyy")}</p>

           
        </div>
    );
};

export default Header;