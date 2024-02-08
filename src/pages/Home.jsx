import React, { useState} from 'react';
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';

const home = () => {
  return (
    <div>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </div>
  )
}

export default home;