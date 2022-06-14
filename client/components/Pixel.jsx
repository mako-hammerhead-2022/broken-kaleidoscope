import React, {useState} from 'react'


const Pixel = () => {

  const [style, setStyle] = useState({
  height: '3px',
  width: '3px',
  backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`,
  })

  const clickHandler = evt => {
    setStyle({ 
      ...style,
      backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`,
    })
  }
  const mouseGreen = evt => setStyle({...style,
  backgroundColor: '#173518', 
  })
  const rightBlack = evt => setStyle({...style,
  backgroundColor: 'black', 
  },   evt.preventDefault()
)
   const dblWhite = evt => setStyle({
    ...style,
  backgroundColor: 'white', 
  })
     const dragYellow = evt => setStyle({...style,
  backgroundColor: 'yellow', 
  })

  return <div style={style} 
  onClick={clickHandler} 
  onMouseEnter={mouseGreen} 
  onContextMenu={rightBlack} 
  onDoubleClick={dblWhite} 
  onDragEnter={dragYellow} 
  data-testid='pixel'>  
  </div>
}

export default Pixel