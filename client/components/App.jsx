import React from 'react'
import Pixel from './Pixel.jsx'

const App = () => {
  return Array.from({ length: 500 }, (item, index) => <Pixel key={index} />)
}

export default App
