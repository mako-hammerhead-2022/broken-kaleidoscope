import React from 'react'
import Pixel from './Pixel'

const App = () => {
  const array = Array.from({length:100000}, (e, i) => <Pixel key={i}/>)
  return array
}

  

export default App
