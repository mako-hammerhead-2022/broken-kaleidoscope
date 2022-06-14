/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {useState} from 'react'

const Pixel = () => {
  
  const pixelStyle = {height: '5vw',
  width: '5vw',
  backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`}
  
  const [style, setStyle] = useState(pixelStyle)

  function handleClick(pixelStyle) {
    setStyle(pixelStyle)
  }

  return (
    <>
      <div style={style} onClick={handleClick}></div>
    </>
  )
}

export default Pixel