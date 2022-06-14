/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {useState} from 'react'


// const changePixel = (evt) => {
//  setStyle(style)
// }

// function Pixel() {
//   return (<div style={style} onClick={() =>  setStyle(style)}></div>)
// }

function Pixel() {
  function random () {
    return `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  }
  function randomPixel () {
    return {height: '5vw',
    width: '5vw',
    backgroundColor: random()}
  }
  // const pixelStyle = {height: '5vw',
  // width: '5vw',
  // backgroundColor: `#${random()}`}
  const [style, setStyle] = useState(randomPixel())
  const changePixel = () => {
    const color = random()
    setStyle({...style, backgroundColor: color})
   }

  return (<div style={style} onClick={changePixel}></div>)
}

// onClick={changePixel}

export default Pixel