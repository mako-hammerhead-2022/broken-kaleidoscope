import React, {useState} from 'react'


const Pixel = () => {
  const clickHandler = evt => {
    setStyle({ height: '50px',
    width: '50px',
    backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`,
    })
  }
  const mouseGreen = evt => setStyle({height: '50px',
  width: '50px',
  backgroundColor: '#173518', 
  })
  const rightBlack = evt => setStyle({height: '50px',
  width: '50px',
  backgroundColor: 'black', 
  })
   const dblWhite = evt => setStyle({height: '50px',
  width: '50px',
  backgroundColor: 'white', 
  })
     const dragYellow = evt => setStyle({height: '50px',
  width: '50px',
  backgroundColor: 'yellow', 
  })
    const [style, setStyle] = useState({
    height: '50px',
    width: '50px',
    backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`,
  })
  event.preventDefault()
  return <div style={style} onClick={clickHandler} onMouseEnter={mouseGreen} onContextMenu={rightBlack} onDoubleClick={dblWhite} onDragEnter={dragYellow}>  </div>
}

// 
export default Pixel