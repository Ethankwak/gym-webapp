import React from "react";

const HeroBanner = () => {
  return (
    <div className="w-full max-w-full h-800 flex flex-col space-between relative ">
      <div
        className="
        lg:mt-36
        xs:mt-16
        sm:ml-12
        relative
        p-5
        "
      >
        <span
          className="
          text-blue-600
          font-blond
          text-xl
          mb-2
          "
        >
          blond 
        </span>
        <span
          className="
          text-blue-600
          font-bold
          text-2xl
          mb-2
          "
        >
          {' '}Fitness 
        </span>
        <p
          className="
          font-bold
          lg:text-5xl
          xs:text-4xl 
          xs:leading-12
          md:text-4xl
          mb-2
       
        "
        >
          For any <br /> Gym Goer
        </p>
        <p
          className="
          text-lg
          leading-9
          mb-2
          "
        >
          Check out these exercises
        </p>
        <button
          className="
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
          mb-14
           "
          href="#exercises"
        >
          Explore Exercises
        </button>
      </div>
      <p className="
      text-blue-600 
      text-300
      lg:block 
      xs:hidden
      opacity-10
      font-bold
      ">
      Exercises
      </p>
        <img
          src="banner.jpg"
          alt="banner"
          className="
          absolute
          right-0
          h-800
         bg-blue-600 
          w-1/2
          ml-auto
          mr-0
          xs:hidden
          sm:hidden
          md:block
          z-20
          rounded-b-10%
          object-fit
           "
        />
      
    </div>
  );
};

export default HeroBanner;
