import React, {useState} from 'react'

const Pixel = () => {
  //this is where you do your state stuff and set the initial state.
  const [pixelStyle, setPixelStyle] = useState({height: '5rem', width: '5rem', backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`})
  
  return (
  <div style={pixelStyle}/>
  )
}

export default Pixel