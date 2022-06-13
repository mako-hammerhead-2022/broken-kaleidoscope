import React, {useState} from 'react'


const Pixel = () => {

  const randomColour = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  const pixelRandomizer = {height: '5rem', width: '5rem', backgroundColor: randomColour()}
  //this is where you do your state stuff and set the initial state.
  const [pixelStyle, setPixelStyle] = useState(pixelRandomizer)

  
  const changeColor = (evt) => {
    setPixelStyle(
      {...pixelStyle, backgroundColor: randomColour()}
    )
  }

  const allGreen = (evt) => {
    setPixelStyle(
      {...pixelStyle, backgroundColor: '#00FF00'}
    )
  }


  return (
  <div style={pixelStyle} onClick={changeColor} onMouseEnter={allGreen}/>
  )
}

export default Pixel