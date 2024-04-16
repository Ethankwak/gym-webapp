import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes  from 'prop-types';

const ExerciseCard = ({exercise}) => {
  return (
    <Link className='2xl:w-500 xl:w-80 lg:w-72 md:w-48 sm-md:w-56 sm:w-40 pt-4 border-t-blue-600 border-t-2' to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy'/>
        <div className='flex'>
        <div className='
        flex-row
        flex
        ml-5
        text-sm
        rounded-2xl
        capitalize
        bg-blue-400
        text-white
        p-2
        min-w-16
        text-center
        justify-center

        '> 
          {exercise.bodyPart}
        </div>
        <div className='
        flex
        flex-row
        ml-5
        text-sm
        rounded-2xl
        capitalize
        bg-purple-400
        text-white
        p-2
        min-w-16
        text-center
        items-center
        justify-center
        '> 
          {exercise.target}
        </div>
       
        </div>
        <h4 className='
        font-bold
        ml-5
        mt-3
        pb-2
        text-xl
        capitalize
        '>
          {exercise.name}
        </h4>
        <div className='
        flex
        w-20
        ml-5
        text-sm
        rounded-2xl
        capitalize
        bg-amber-500
        text-white
        p-2
        min-w-16
        align-center
        justify-center
        text-center
        mt-2
        

        '> 
          {exercise.equipment}
        </div>
    </Link>
  )
}

ExerciseCard.propTypes = {
    exercise: PropTypes.func.isRequired,
  };

export default ExerciseCard;