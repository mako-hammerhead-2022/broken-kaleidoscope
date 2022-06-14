import React, {useState} from 'react'


// const changePixel = (evt) => {
//  setStyle(style)
// }

// function Pixel() {
//   return (<div style={style} onClick={() =>  setStyle(style)}></div>)
// }

function Pixel() {
  function random () {
    return Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)
  }
  const pixelStyle = {height: '5vw',
  width: '5vw',
  backgroundColor: `#${random()}`}
  const [style, setStyle] = useState(pixelStyle)

  return (<div style={style} onClick={() => setStyle(pixelStyle)}></div>)
}

// onClick={changePixel}

export default Pixel