import React, {useContext} from 'react';
import PropTypes  from 'prop-types';
import BodyPart from './BodyPart';
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExerciseCard from './ExerciseCard';

const LeftArrow = (props) => {
  const {onClick } = props;
  return (
    <button onClick={onClick} className='
    group
    bg-blue-600 
    w-7
    rounded-l-lg
    flex
    justify-center
    items-center
    rounded-r-lg
    h-64
    cursor-pointer
    hover:border-cyan-400
    hover:border-2
    absolute
    -left-10
    top-0
    z-10
    '>
      <IoIosArrowDropleft alt='left-arrow' className='
      h-6
      w-6
      text-white
      group-hover:text-cyan-400
      '/>
    </button>
  );
};

const RightArrow = (props) => {
  const { onClick } = props;
  return (
    <button onClick={onClick} className=' 
    group
    bg-blue-600 
    w-7
    rounded-r-lg
    rounded-l-lg
    flex
    justify-center
    items-center
    h-64
    cursor-pointer
    hover:border-cyan-400
    hover:border-2
    absolute
    -right-10
    top-0
    z-10

    '>
      <IoIosArrowDropright alt='right-arrow' className='
      h-6
      w-6
      text-white
      group-hover:text-cyan-400
      ' />
    </button>
  );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  const settings = {
    dots: false, // Set to true if you want to show dot indicators
    infinite: false, // Change to true if you want infinite looping
    speed: 500,
    arrows: true,
    slidesToShow: 5, // Adjust based on how many items you want to show at once
    slidesToScroll: 5, 
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    mobileFirst: true,
    cssEase: 'linear',
    initialSlide: 1,

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 1,

        }
      },
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1,


        }
      },
      {
        breakpoint: 904,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };

  return (
    <div className='relative z-0 mx-10 block'>
    <Slider {...settings} className='z-2'>
      {data.map((item) => (
      
        <div
        key={item.id || item}
        itemID={item.id || item}
        title={item.id || item}
        className=''
          >
            {isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} 
            setBodyPart={setBodyPart}/> : <ExerciseCard exercise={item} /> }
        </div>
        )
      )}
    </Slider>
    </div>
  )
}

HorizontalScrollbar.propTypes = {
  data: PropTypes.array.isRequired,
  bodyPart: PropTypes.string.isRequired,
  setBodyPart: PropTypes.func.isRequired
};

export default HorizontalScrollbar