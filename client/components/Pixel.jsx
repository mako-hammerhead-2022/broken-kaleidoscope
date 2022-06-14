/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'

const Pixel = () => {
  const [colour, setColour] = useState('blue')

  function handleClick() {
    setColour('yellow')
  }

  return (
    <div
      style={{
        height: '20px',
        width: '20px',
        backgroundColor: colour,
      }}
      onClick={handleClick}
    ></div>
  )
}

export default Pixel
