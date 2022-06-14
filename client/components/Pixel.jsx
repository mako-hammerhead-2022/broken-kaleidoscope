/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {useState} from 'react'

const Pixel = () => {
  const randomPixel = () => {
    return `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  }

  const pixelStyle = () => {
    return {
      height: '5vw',
      width: '5vw',
      backgroundColor: randomPixel()
      }
    }

  const [style, setStyle] = useState(pixelStyle())

  const changePixel = () => {
    const randomColor = randomPixel()
    setStyle({...style, backgroundColor: randomColor})
  }

  const greenPixel = () => {
    setStyle({...style, backgroundColor: 'green'})
  }

  return (<div style={style} onClick={changePixel} onMouseEnter={greenPixel}></div>)
  }

export default Pixel