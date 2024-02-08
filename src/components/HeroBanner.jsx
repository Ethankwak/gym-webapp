import React from 'react'

const HeroBanner = () => {
  return (
    <div className='
    lg:mt-52 
    xs:mt-16
    sm:ml-12
    relative
    p-5
    '>
        <p className='
        text-blue-600
        font-bold
        text-2xl
        mb-2
        '>
         Ethans Workouts   
        </p>
        <p className='
        font-bold
        lg:text-5xl
        xs:text-4xl 
        xs:leading-12
        md:text-4xl
        mb-2
       
        '
        >
          For any <br /> Gym Goer  
        </p>
        <p className='
        text-lg
        leading-9
        mb-2
        '>
          Check out these exercises 
        </p>
        <button className='
        bg-blue-600 
        text-white 
        font-medium 
        py-2 
        px-4 
        rounded-md 
        shadow-md 
        hover:bg-blue-700 
        hover:shadow-lg 
        transition 
        duration-150 
        ease-in-out
        '
        href="#exercises">
        Explore Exercises</button> 
        
    </div>
  )
}

export default HeroBanner;