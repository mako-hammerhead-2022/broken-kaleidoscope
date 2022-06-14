/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {useState} from 'react'

const Pixel = () => {
  const randomPixel = () => {
    return `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  }

  const pixelStyle = () => {
    return {
      height: '0.5vw',
      width: '0.5vw',
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

  const blackPixel = (evt) => {
    evt.preventDefault()
    setStyle({...style, backgroundColor: 'black'})
  }

  const whitePixel = () => {
    setStyle({...style, backgroundColor: 'white'})
  }

  const yellowPixel = () => {
    setStyle({...style, backgroundColor: 'yellow'})
  }

  return (<div draggable={true} style={style} onClick={changePixel} onMouseEnter={greenPixel} onContextMenu={blackPixel} onDoubleClick={whitePixel} onDragEnter={yellowPixel}></div>)
  }

export default Pixel