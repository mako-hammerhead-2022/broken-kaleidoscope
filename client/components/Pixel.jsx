import React, { useState } from "react";


const Pixel = () => {
  const [style, setStyle] = useState({height: '50px', width: '50px', backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}` })

  const clickHandler = (evt) => {
    setStyle({height: '50px', width: '50px', backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}` })
  }

  const mouseEnter = (evt) => {
    setStyle({height: '50px', width: '50px', backgroundColor: 'green' })
  }
  
  const contextMenu = (evt) => {
    evt.preventDefault()
    setStyle({height: '50px', width: '50px', backgroundColor: 'black' })
  }

  const dblClickHandler = (evt) => {
    setStyle({height: '50px', width: '50px', backgroundColor: 'white' })
  }

  const dragEnterHandler = (evt) => {
    setStyle({height: '50px', width: '50px', backgroundColor: 'yellow' })
  }

  return (
  <div style={style} draggable={true} onClick={clickHandler} onMouseEnter={mouseEnter} onContextMenu={contextMenu} onDoubleClick={dblClickHandler} onDragEnter={dragEnterHandler}>
  </div>
  )  
}

export default Pixel