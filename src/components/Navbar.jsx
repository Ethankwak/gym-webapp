import React from 'react'
import { Link } from 'react-router-dom';
import { IoIosFitness } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='
    flex 
    space-x-4 
    justify-around
    gap-10 sm:gap-32 mt-5 sm:mt-8
    '>
      <Link to='/'>
        <IoIosFitness className='w-12 h-12 ml-0 mr-1'/> 
      </Link>
      <div 
      className='
      flex 
      space-x-4
      flex-row 
      gap-40px
      text-xl
      items-end'
      >
        <Link to='/' className='no-underline text-link border-b-2 border-solid border-black border-w-100'>Home</Link>
        <a href='#exercises' className='no-underline text-link'>Exercises</a>
        <Link></Link>
      </div>

    </div>
  

  )
}

export default Navbar