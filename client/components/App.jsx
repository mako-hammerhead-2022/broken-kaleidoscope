import React, { useState } from 'react'
import Pixels from './Pixels'

//import colorPicked from './Pixels'

const App = () => {
  const [color, setColor] = useState('white')

  const pixelArr = Array.from({ length: 7100 }, (v, i) => (
    <Pixels key={i} color={color} />
  ))

  return (
    <>
      {pixelArr}
      <input
        type="button"
        style={{ backgroundColor: 'red' }}
        value="Red"
        onClick={() => setColor('red')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'orange' }}
        value="Orange"
        onClick={() => setColor('orange')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'yellow' }}
        value="Yellow"
        onClick={() => setColor('yellow')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'green' }}
        value="Green"
        onClick={() => setColor('green')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'blue' }}
        value="Blue"
        onClick={() => setColor('blue')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'violet' }}
        value="Violet"
        onClick={() => setColor('violet')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'white' }}
        value="Eraser"
        onClick={() => setColor('white')}
      />
    </>
  )
}

export default App
