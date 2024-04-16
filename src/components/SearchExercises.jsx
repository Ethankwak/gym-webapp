import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar';
import PropTypes  from 'prop-types';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([])
  
  useEffect(() => {
    //gets exercise data and sets it to body parts and shows it
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      
      setBodyParts(['all', ...bodyPartsData]);
    }
    fetchExercisesData();
  }, [])
  
  const handleSearch = async () => {
    //handles search, gets exercise data from fetch and then filters and sets the search to what is searched
    if(search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1000&offset=500', exerciseOptions);
    
      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(searchedExercises);
      
    }
  }
  return (
    <div className="
    flex 
    gap-4
    justify-center
    mt-40
    font-5
    items-center
    flex-col 
    "
    > 
    <p className='
    font-semibold
    xs:text-3xl
    lg:text-5xl
    mb-12
    text-center
    font-
    '>
      Recommended Exercises <br />
      For You
    </p>
    <div className='
    flex
    mb-20
    

    '>
      <input className='
      h-56
      border
      border-black
      border-1
      font-bold
      p-4
      xl:w-800
      sm:w-350
      md:w-500
      bg-white
      rounded-md
      box-border
      '
      type='text'
      value={search}
      onChange={(e) => setSearch(e.target.value.toLowerCase())}
      placeholder="Search Exercises"
      
      />
      <button className='
       bg-blue-600 
       text-white 
       font-bold
       xs:text-sm
       lg:text-xl
       h-56
       relative
       rounded-md 
       shadow-md 
       hover:bg-blue-700 
       hover:shadow-lg 
       transition 
       duration-150 
       ease-in-out
       lg:w-44
       xs:w-20
       md:w-32
       box-border
      '
      onClick={handleSearch}
      >
        Search
      </button>
    </div>
    <div className='
    relative
    w-full
    p-5
   
    '>
      <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart}
      setBodyPart={setBodyPart} isBodyParts />
    </div>
    </div>
  )
}

SearchExercises.propTypes = {
  setExercises: PropTypes.func.isRequired,
  bodyPart: PropTypes.string.isRequired,
  setBodyPart: PropTypes.func.isRequired
};

export default SearchExercises;
