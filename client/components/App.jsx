import React from 'react'
import Pixel from './Pixel.jsx'

const App = () => {
  console.log(Array.from({ length: 100000 }, () => <Pixel />))
  //Array.from({length: 5}, (v, i) => i);
  //second param

  return (
    <>
      {Array.from({ length: 100000 }, () => (
        <Pixel />
      ))}
    </>
  )
}

export default App
