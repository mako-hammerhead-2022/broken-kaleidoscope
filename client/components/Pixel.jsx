import React, {useState} from 'react'


// const changePixel = (evt) => {
//  setStyle(style)
// }

// function Pixel() {
//   return (<div style={style} onClick={() =>  setStyle(style)}></div>)
// }

function Pixel(props) {
  
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

// onClick={changePixel}

export default Pixel