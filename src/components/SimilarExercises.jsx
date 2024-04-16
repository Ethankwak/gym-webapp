import React from 'react'
import PropTypes from "prop-types";
import HorizontalScrollbar from "./HorizontalScrollbar"
import Loader from './Loader';

const SimilarExercises = ( {targetMuscleExercises, equipmentExercises}) => {
  return (
    <div className='
    lg:mt-25
    xs:mt-0
    p-5
    '>
      <h3 className='
      mb-11
      text-2xl
      border-b-2
      border-blue-600
      pb-4
      font-bold
      '> Exercises for the same muscle group </h3>
      <div className='
      flex-row
      p-0.5
      relative

      '>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
      </div>
      <h3 className='
      mb-11
      text-2xl
      border-b-2
      border-blue-600
      pb-4
      font-bold
      '> Exercises using same equipment </h3>
      <div className='
      flex-row
      p-0.5
      relative

      '>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
      </div>
    </div>
  )
}

SimilarExercises.propTypes = {
  targetMuscleExercises: PropTypes.array.isRequired,
  equipmentExercises: PropTypes.array.isRequired,
};
export default SimilarExercises