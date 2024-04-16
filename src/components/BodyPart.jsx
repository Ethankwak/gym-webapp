import React from 'react'
import Icon from '../assets/gym.png'

const BodyPart = ( {item, setBodyPart, bodyPart}) => {
  const classChange = bodyPart === item ?
    'border-t-4 border-blue-600' 
    :
    ''
  
  return (
    <button className={`
    justify-center
    items-center
    flex
    flex-col
    m-auto
    border-l-20 border-b-20 w-64 h-64 cursor-pointer gap-4
    ${classChange}
    group
      transform
      transition
      duration-150
      ease-in-out
      hover:scale-110
    `}
    type='button'

     onClick={() => {
      setBodyPart(item);
      window.scrollTo({top:1800, left:100, behavior: 'smooth'})
     }}
    >
      <img src= {Icon} alt="dummbell" className="
      w-10
      h-10
      z-3
      "/>
      <div className='
      text-2xl
      font-bold
      text-blue-600
      capitalize
      '>
        {item}
      </div>
    </button>
  )
}

export default BodyPart