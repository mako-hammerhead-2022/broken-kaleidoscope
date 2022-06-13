import React, { useState } from "react";


const Pixel = () => {
  const [style, setStyle] = useState({height: '50px', width: '50px', backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}` })


  return (
  <div style={style}>
  </div>
  )  
}

export default Pixel