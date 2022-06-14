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

  function handleDoubleClick() {
    {
      setColour('white')
    }
  }

  function handleDrag() {
    setColour('yellow')
  }

  function handleMouseEnter() {
    setColour('green')
  }

  function handleContextMenu() {
    setColour('black')
  }

  // const handleClick = evt => {
  //   setColour({
  //     `#${Math.floor(Math.random() * 0x1000000)
  //       .toString(16)
  //       .padStart(6, 0)}`
  //   })
  // }

  return (
    <div
      draggable={true}
      style={{
        height: '20px',
        width: '20px',
        backgroundColor: colour,
      }}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onDragEnter={handleDrag}
      onMouseEnter={handleMouseEnter}
      onContextMenu={handleContextMenu}
    ></div>
  )
}

//onClick={() => handleClick()}

export default Pixel
