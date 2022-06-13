import React, { useState } from "react";


const Pixel = () => {
  const pixelSize = 3

  const [style, setStyle] = useState({height: `${pixelSize}px`, width: `${pixelSize}px`, backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}` })

  const clickHandler = (evt) => {
    setStyle({height: `${pixelSize}px`, width: `${pixelSize}px`, backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}` })
  }

  const mouseEnter = (evt) => {
    setStyle({height: `${pixelSize}px`, width: `${pixelSize}px`, backgroundColor: 'green' })
  }
  
  const contextMenu = (evt) => {
    evt.preventDefault()
    setStyle({height: `${pixelSize}px`, width: `${pixelSize}px`, backgroundColor: 'black' })
  }

  const dblClickHandler = (evt) => {
    setStyle({height: `${pixelSize}px`, width: `${pixelSize}px`, backgroundColor: 'white' })
  }

  const dragEnterHandler = (evt) => {
    setStyle({height: `${pixelSize}px`, width: `${pixelSize}px`, backgroundColor: 'yellow' })
  }

  return (
  <div style={style} draggable={true} onClick={clickHandler} onMouseEnter={mouseEnter} onContextMenu={contextMenu} onDoubleClick={dblClickHandler} onDragEnter={dragEnterHandler}>
  </div>
  )  
}

export default Pixel