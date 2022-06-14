/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'

const Pixel = () => {
  const [colour, setColour] = useState(
    `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, 0)}`
  )

  function handleClick() {
    setColour(
      `#${Math.floor(Math.random() * 0x1000000)
        .toString(16)
        .padStart(6, 0)}`
    )
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
