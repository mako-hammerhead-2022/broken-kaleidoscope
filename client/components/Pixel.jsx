import React, {useState} from 'react'


const Pixel = () => {

  const randomColour = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  const pixelRandomizer = {height: '5rem', width: '5rem', backgroundColor: randomColour()}
  //this is where you do your state stuff and set the initial state.
  const [pixelStyle, setPixelStyle] = useState(pixelRandomizer)
  
  const changeColor = (evt) => {
    console.log(evt.target)
    setPixelStyle(
      {...pixelStyle, backgroundColor: randomColour()}
    )
  }


  return (
  <div style={pixelStyle} onClick={changeColor}/>
  )
}

export default Pixel