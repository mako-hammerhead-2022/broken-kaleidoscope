import React, {useState} from 'react'


const Pixel = () => {

  const randomColour = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  const pixelRandomizer = {height: '1rem', width: '1rem', backgroundColor: randomColour()}
  //this is where you do your state stuff and set the initial state.
  const [pixelStyle, setPixelStyle] = useState(pixelRandomizer)

  
  const changeColor = (evt) => {
    let colour = randomColour()
    setPixelStyle(
      {...pixelStyle, backgroundColor: colour}
    )
  }

  const allGreen = (evt) => {
    setPixelStyle(
      {...pixelStyle, backgroundColor: '#00FF00'}
    )
  }

  const revertColour = (evt) => {
    let colour = randomColour()
    setPixelStyle(
      {...pixelStyle, backgroundColor: colour}
    )
  }

  const allYellow = () => {
    setPixelStyle (
      {...pixelStyle, backgroundColor: '#FFFF00'}
      )
  }


  return (
  <div style={pixelStyle} onClick={changeColor} onMouseEnter={allGreen} onMouseLeave={revertColour} onDragEnter={allYellow} draggable={true}/>
  )
}

export default Pixel