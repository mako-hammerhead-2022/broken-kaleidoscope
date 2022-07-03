import React, { useState, useEffect } from 'react'

const Pixels = () => {
  const size = 10
  let color = 'black'

  const [style, setStyle] = useState({
    backgroundColor: color,
  })

  function colorPicked(newColor) {
    color = newColor

    setStyle({
      height: `${size}px`,
      width: `${size}px`,
      backgroundColor: color,
    })
  }

  const handleClick = (evt) => {
    setStyle({
      height: `${size}px`,
      width: `${size}px`,
      backgroundColor: color,
    })
  }

  const doubleClick = (evt) => {
    setStyle({
      height: `${size}px`,
      width: `${size}px`,
      backgroundColor: color,
    })
  }

  const dragEnterHandler = (evt) => {
    const color = `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, 0)}`
    setStyle({
      height: `${size}px`,
      width: `${size}px`,
      backgroundColor: color,
    })
  }

  useEffect(() => {
    setStyle({
      height: `${size}px`,
      width: `${size}px`,
      backgroundColor: 'black',
    })
  }, [])

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
