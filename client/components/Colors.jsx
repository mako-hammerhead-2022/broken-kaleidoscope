import React, { useState } from 'react'
import Pixels from './Pixels'

import { postArt, getArt } from '../apiClient'
//import Pattern1 from '../../SavedPictures/Pattern1.js'
//import Sun from '../../SavedPictures/Sun.js'

//console.log(Pattern1)

let viewportWidth = window.innerWidth
let size

if (viewportWidth == 1920) {
  viewportWidth = 3071
  size = '83px'
} else if (viewportWidth == 1536) {
  viewportWidth = 2405
  size = '59px'
}

const Colors = (props) => {
  const [color, setColor] = useState('white')

  const [colors, setColors] = useState(
    Array.from({ length: viewportWidth }, (v, i) => 'white')
  )

  const pixelArr = Array.from({ length: viewportWidth }, (v, i) => (
    <Pixels key={i} current={colors[i]} index={i} updateColor={updateColor} />
  ))

  function updateColor(index) {
    const newColors = [...colors]
    newColors[index] = color
    setColors(newColors)
  }

  function savePic() {
    var artName = window.prompt('Name your Masterpiece')
    const newArr = colors
    console.log('trying to save')
    postArt(newArr, artName)
  }

  function loadPic() {
    let artNameArr = window.prompt('Load a Masterpiece')
    //setColors(['red'])
    getArt(artNameArr)
      .then((res) => {
        console.log(res)
        setColors(res)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  function refreshPage() {
    window.location.reload(false)
  }

  return (
    <>
      {pixelArr}
      <input
        type="button"
        style={{ backgroundColor: 'red', fontSize: size }}
        value="  "
        onClick={() => setColor('red')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'orange', fontSize: size }}
        value="  "
        onClick={() => setColor('orange')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'yellow', fontSize: size }}
        value="  "
        onClick={() => setColor('yellow')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'chartreuse', fontSize: size }}
        value="  "
        onClick={() => setColor('chartreuse')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'green', fontSize: size }}
        value="  "
        onClick={() => setColor('green')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'springGreen', fontSize: size }}
        value="  "
        onClick={() => setColor('springGreen')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'cyan', fontSize: size }}
        value="  "
        onClick={() => setColor('cyan')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'dodgerBlue', fontSize: size }}
        value="  "
        onClick={() => setColor('dodgerBlue')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'blue', fontSize: size }}
        value="  "
        onClick={() => setColor('blue')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'purple', fontSize: size }}
        value="  "
        onClick={() => setColor('purple')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'magenta', fontSize: size }}
        value="  "
        onClick={() => setColor('magenta')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'salmon', fontSize: size }}
        value="  "
        onClick={() => setColor('salmon')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'sienna', fontSize: size }}
        value="  "
        onClick={() => setColor('sienna')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'grey', fontSize: size }}
        value="  "
        onClick={() => setColor('grey')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'white', fontSize: size }}
        value="  "
        onClick={() => setColor('white')}
      />
      <input
        type="button"
        style={{
          backgroundColor: 'black',
          borderColor: 'white',
          fontSize: size,
        }}
        value="  "
        onClick={() => setColor('black')}
      />
      <input
        type="button"
        style={{ backgroundColor: 'grey', fontSize: size }}
        value="Reset"
        onClick={() => refreshPage()}
      />
      <input
        type="button"
        style={{ backgroundColor: 'grey', fontSize: size }}
        value="Save"
        onClick={() => savePic()}
      />
      <input
        type="button"
        style={{ backgroundColor: 'grey', fontSize: size }}
        value="Load"
        onClick={() => loadPic()}
      />
    </>
  )
}

export default Colors
