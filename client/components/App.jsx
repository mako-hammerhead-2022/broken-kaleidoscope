import React, {useState} from 'react'
import Pixels from './Pixels'

const App = () => {
  
  // const array = [<Pixels/>,<Pixels/>,<Pixels/>,<Pixels/>,<Pixels/>,<Pixels/>,<Pixels/>,<Pixels/>,]
  
  //The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.

  const pixelArr = Array.from({length:500}, (p,i) => <Pixels key={i}/>);

  return pixelArr
}

export default App




