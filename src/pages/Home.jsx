import React, { useState} from 'react';
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';

const Home = () => {
  //state changes to reflect on entire page
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  return (
    <div>
      <HeroBanner />
      <SearchExercises 
       setExercises={setExercises}
       bodyPart={bodyPart} 
       setBodyPart={setBodyPart}
       />
      <Exercises 
       setExercises={setExercises}
       bodyPart={bodyPart} 
       exercises={exercises}
      />
    </div>
  )
}

export default Home;