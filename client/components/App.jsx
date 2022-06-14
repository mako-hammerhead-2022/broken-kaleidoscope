import React from 'react'
import Pixel from './Pixel.jsx'

const App = () => {
  const PixArr = Array.from({length: 50000}, (v, i) => <Pixel key={i}/>)
  return PixArr
}

export default App