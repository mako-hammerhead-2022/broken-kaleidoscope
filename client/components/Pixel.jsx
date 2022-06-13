import React, {useState} from 'react'


function Pixel () {
  const [style, setStyle] = useState({
    fontFamily: 'Times New Roman',
    height: '100px',
    width: '100px',
    backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  })

  const clickHandler = (evt) => {
    setStyle ({
      ...style,
      backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    })
  }

  const mouseHoverHandler = (evt) => {
    setStyle ({
      ...style,
      backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    })
  }

  return (
    <div style={style} onClick={clickHandler} onMouseEnter={mouseHoverHandler}></div>
  )
}

export default Pixel