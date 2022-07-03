import React, { useState } from 'react'

function Pixel(props) {
  const {selectedColor} = props;
  const [style, setStyle] = useState({
    height: '30px',
    width: '30px',
    backgroundColor: `pixelColor`,
  })
  
  // const clickHandler = evt => {
    //   setStyle({
      //     ...style,
      //     backgroundColor: "purple"
      //   })
      // }
      
      return <div style={style} onClick={selectedColor}></div>
    }
    
    export default Pixel
    
    
      // const [pixelColor, setPixelColor] = useState("#fff")
      // const [oldColor, setOldColor] = useState(pixelColor)
      // const [changeColor, setChangeColor] = useState(true)
    
    //   function applyColor() {
    //     setPixelColor(selectedColor)
    //     setChangeColor(false)
    //   }
    
    // function changeColorHover() {
    // setOldColor(pixelColor)
    // setPixelColor(selectedColor)
    // }
    
    // function resetColor(){
    //   if (changeColor) {
    //     setPixelColor(oldColor)
    //   }
    //   setChangeColor(true)
    // }
// onClick={applyColor} onMouseEnter={changeColorHover} onMouseLeave={resetColor}