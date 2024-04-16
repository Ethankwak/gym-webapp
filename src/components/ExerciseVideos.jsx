import React from 'react'
import PropTypes from "prop-types";

const ExerciseVideos = ( { exerciseVideos, name}) => {
  console.log(exerciseVideos);
  if(!exerciseVideos.length) return "loading...";
  return (
    <div className='
    lg:mt-48
    xs:mt-5
    p-5
    '> 
      <h4 className='
      mb-11
      text-2xl
      border-b-2
      border-blue-600
      pb-4
      font-bold
      '>
        Watch <span className='
        text-blue-600
        capitalize
        font-bold
        '>
          {name}
        </span> exercise videos.
      </h4>
      <div className='
      justify-center
      flex
      flex-wrap
      items-center
      gap-4
      align-middle
      lg:flex-row
      lg:gap-24
      mb-20
      '>
        {exerciseVideos?.slice(0.3)?.map((item,index) => (
          <a key={index}
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target='_blank'
          rel='noreferrer'
          className='lg:w-80 lg:h-32 xs:w-40 xs:h-16 xs:my-16 md:w-60 md:h-24'
          
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title}>
            </img>
            <p>
              {item.video.title}
            </p>
          </a>
        ))}
      </div>
    </div>
  )
}
ExerciseVideos.propTypes = {
  exerciseVideos: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};
export default ExerciseVideos