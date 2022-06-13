import React from 'react'
import Pixel from './Pixel.jsx'

const App = () => {
  let pixelArray = [<Pixel />, <Pixel />, <Pixel />]
  let pixels = Array.from({length: 10000},(v, i) => <Pixel key={i}/>)
  return [
    pixels
  
  ]
}

export default App
