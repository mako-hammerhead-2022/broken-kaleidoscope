import React from 'react'
import Pixel from './Pixel'

const App = () => {
  const pixArr = Array.from({length: 14100}, (v, i) => <Pixel key={i}/>)
  return pixArr
}

export default App
