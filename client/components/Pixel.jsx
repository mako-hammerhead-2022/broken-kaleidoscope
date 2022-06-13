import React, {useState} from 'react'


const Pixel = () => {
  const clickHandler = evt => {
    setStyle({ height: '50px',
    width: '50px',
    backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`,
    })
  }
    const [style, setStyle] = useState({
    height: '50px',
    width: '50px',
    backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`,
  })
  return <div style={style} onClick={clickHandler}>  </div>
}

// 
export default Pixel