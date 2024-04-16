import React, { useEffect, useState } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import PropTypes from 'prop-types';
import ExerciseCard from './ExerciseCard';
import ReactPaginate from 'react-paginate';

const Exercises = ({exercises, setExercises, bodyPart}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
  const paginate = (data) => {
    setCurrentPage(data.selected + 1);
    window.scrollTo({top:1800, behavior: 'smooth'})
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1200&offset=500', exerciseOptions);
      } else {
      exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }
      setExercises(exercisesData)
    }
    fetchExercisesData();
  }, [bodyPart]);
  return (
    
    <div id='exercises'
    className='
    lg:mt-28
    mt-12
    p-5
    text-4xl
    '
    >
      <div className='mb-12'>
        Showing Results
      </div>
      <div  className='
      flex
      flex-row
      lg:gap-26
      xs:gap-12
      flex-wrap
      justify-center
    
      '>
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise}>{exercise.name}</ExerciseCard>
        ))}
      </div>
      <div className='
      mt-24
      items-center
      justify-center
      flex
      
      '>
        {exercises.length > 9 && (
         <ReactPaginate
          className="items-center align-middle"
          previousLabel="←"
          nextLabel="→"
          breakLabel={"..."}
          pageCount={Math.ceil(exercises.length / exercisesPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={paginate}
          containerClassName="flex list-none rounded"
          pageClassName="inline-block"
          pageLinkClassName="inline-block py-2 px-3 leading-tight text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white text-lg"
          previousClassName="inline-block"
          previousLinkClassName="inline-flex pb-2 items-center py-2 px-3 text-gray-500 bg-white rounded-md hover:bg-blue-500 hover:text-white text-lg"
          nextClassName="inline-block"
          nextLinkClassName="inline-flex items-center py-2 px-3 text-gray-500 bg-white rounded-md hover:bg-blue-500 hover:text-white text-lg"
          breakClassName="inline-block"
          breakLinkClassName="inline-block py-2 px-3 leading-tight text-gray-700 bg-white rounded-md text-lg"
          activeClassName="bg-blue-500 text-white text-lg"
          activeLinkClassName="py-2 px-3 text-lg"
          forcePage={currentPage - 1} // react-paginate is zero indexed
        />
        )}

      </div>
    </div>
  )
}

Exercises.propTypes = {
  exercises: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
  })).isRequired,
  setExercises: PropTypes.func.isRequired,
  bodyPart: PropTypes.string.isRequired,
};

export default Exercises;