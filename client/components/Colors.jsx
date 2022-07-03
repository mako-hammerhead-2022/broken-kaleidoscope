import React, { useState } from 'react'
import Pixels from './Pixels'

const Colors = (props) => {
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
        value="   "
        onClick={() => setColor('red')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'orange' }}
        value="   "
        onClick={() => setColor('orange')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'yellow' }}
        value="   "
        onClick={() => setColor('yellow')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'chartreuse' }}
        value="   "
        onClick={() => setColor('chartreuse')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'green' }}
        value="   "
        onClick={() => setColor('green')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'springGreen' }}
        value="   "
        onClick={() => setColor('springGreen')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'cyan' }}
        value="   "
        onClick={() => setColor('cyan')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'dodgerBlue' }}
        value="   "
        onClick={() => setColor('dodgerBlue')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'blue' }}
        value="   "
        onClick={() => setColor('blue')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'purple' }}
        value="   "
        onClick={() => setColor('purple')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'magenta' }}
        value="   "
        onClick={() => setColor('magenta')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'salmon' }}
        value="   "
        onClick={() => setColor('salmon')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'sienna' }}
        value="   "
        onClick={() => setColor('sienna')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'grey' }}
        value="   "
        onClick={() => setColor('grey')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'white' }}
        value="   "
        onClick={() => setColor('white')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'black', borderColor: 'white' }}
        value="   "
        onClick={() => setColor('black')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'grey' }}
        value="Reset"
        onClick={() => refreshPage()}
      />
    </>
  )

  function refreshPage() {
    window.location.reload(false)
  }
}

export default Colors
