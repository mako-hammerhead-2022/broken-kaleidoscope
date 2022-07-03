/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'

const size = 10

const Pixels = (props) => {
  const [style, setStyle] = useState({
    height: `${size}px`,
    width: `${size}px`,
    backgroundColor: 'white',
  })

  const handleClick = (evt) => {
    setStyle({
      height: `${size}px`,
      width: `${size}px`,
      backgroundColor: props.color,
    })
  }

  const doubleClick = (evt) => {
    setStyle({
      height: `${size}px`,
      width: `${size}px`,
      backgroundColor: props.color,
    })
  }

  const dragEnterHandler = (evt) => {
    setStyle({
      height: `${size}px`,
      width: `${size}px`,
      backgroundColor: props.color,
    })
  }

  return (
    <div
      style={style}
      onDoubleClick={doubleClick}
      draggable={true}
      onClick={handleClick}
      onDragEnter={dragEnterHandler}
    ></div>
  )
}

export default Pixels
