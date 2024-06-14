import React from 'react'
import PropTypes from 'prop-types'

function WatchModel({text}) {
  return (
    <div className='shadow-sm text-black flex justify-center items-center rounded-[20px] w-full h-[51px]'>
      <p className='text-[15px] font-medium leading-[18.6px]'>{text}</p>
    </div>
  )
}
WatchModel.propTypes = {
  text: PropTypes.string.isRequired
}
export default WatchModel