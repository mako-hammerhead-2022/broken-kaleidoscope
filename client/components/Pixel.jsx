import React, { useState } from 'react'

function Pixel(props) {
  const { selectedColor } = props
  const [style, setStyle] = useState({
    backgroundColor: `pixelColor`,
  })

  const [pixelColor, setPixelColor] = useState(style)
  const [oldColor, setOldColor] = useState(pixelColor)
  const [changeColor, setChangeColor] = useState(true)

  function applyColor() {
    setPixelColor(selectedColor)
    setChangeColor(false)
  }

  function changeColorHover() {
    setOldColor(pixelColor)
    // setPixelColor(selectedColor)
  }

  function resetColor() {
    if (changeColor) {
      setPixelColor(oldColor)
    }
    setChangeColor(true)
  }

  const dragColor = (evt) => {
    setPixelColor(selectedColor)
  }

  return (
    <div
      className="pixel"
      onClick={applyColor}
      // onMouseEnter={applyColor}
      // onMouseLeave={resetColor}
      onDragEnter={dragColor}
      style={{ backgroundColor: pixelColor }}
    ></div>
  )
}

export default Pixel
