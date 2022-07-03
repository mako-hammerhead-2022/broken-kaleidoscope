import React, { useState } from 'react'

function Pixel(props) {
  const {selectedColor} = props;
  const [style, setStyle] = useState({
    height: '30px',
    width: '30px',
    backgroundColor: `pixelColor`,
  })
  
  const [pixelColor, setPixelColor] = useState(style)
  const [oldColor, setOldColor] = useState(pixelColor)
  const [changeColor, setChangeColor] = useState(true)

  function applyColor() {
    setPixelColor(selectedColor.pixelColor)
    setChangeColor(false)
  }

  function changeColorHover() {
    setOldColor(pixelColor)
    setPixelColor(selectedColor)
  }

  function resetColor() {
    if(changeColor) {
      setPixelColor(oldColor)
    }
    setChangeColor(true)
  }

      return (<div onClick={applyColor}
      onMouseEnter={changeColorHover}
      onMouseLeave={resetColor}
      style={style}></div>
    )}
    
    export default Pixel
    
    // style={style} onClick={selectedColor}
    