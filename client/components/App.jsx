import React from 'react'
import Pixel from './Pixel'

/*
  Array.from({length: 100000}, (v, i) => <Pixel key={i});
*/

const App = () => {
  const pixelArr = Array.from({length:500}, (v,i) => <Pixel key={i}/>);
  return pixelArr
}

export default App
