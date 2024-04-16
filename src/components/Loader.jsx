import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='
    flex
    flex-row
    justify-center
    items-center
    w-full
    '>
        <InfinitySpin color="grey" />
    </div>
  )
}

export default Loader