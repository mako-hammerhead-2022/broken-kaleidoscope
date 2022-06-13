import React, { useState } from 'react'

const Pixel = () => {
  const [style, setStyle] = useState({
    height: '50px',
    width: '50px',
    backgroundColor: 'green',
  })
  // let newStyle = style[0]
  // let setStyle = style[1]

  return (
    <div
      onClick={() =>
        setStyle({ height: '50px', width: '50px', backgroundColor: 'red' })
      }
      style={style}
    ></div>
  )
}

export default Pixel
