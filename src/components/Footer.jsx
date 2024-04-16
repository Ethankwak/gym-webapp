import React from 'react';
import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className='mt-20 bg-blue-600 p-2'>
      <div className='flex gap-5 flex-col items-center px-10 pt-6'>
        <div className='flex items-center'>
          <span className='h-10 text-2xl  font-blond mx-1 text-white'>blond</span>
          <span className='h-10 text-2xl font-bold mx-1 text-white'>Fitness</span>
        </div>
        <p className='text-white font-bold pb-8'>
          Made By Ethan Kwak
        </p>
      </div>
    </div>
  );
};

export default Footer;