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

  return (
    <div
      className="pixel"
      onClick={applyColor}
      // onMouseEnter={applyColor}
      // onMouseLeave={resetColor}
      style={{ backgroundColor: pixelColor }}
    ></div>
  )
}

export default Pixel

// style={style} onClick={selectedColor}
