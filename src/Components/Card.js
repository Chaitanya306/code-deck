import React from 'react'

const Card = ({children}) => {
  return (
    <div className='hover:scale-105 bg-105 h-auto drop-shadow-xl rounded-lg p-6 ease-in-out duration-500'>
      <div>{children}</div>
    </div>
  )
}

export default Card
