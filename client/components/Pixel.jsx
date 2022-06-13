import React, {useState} from 'react'


function Pixel () {
  const [style, setStyle] = useState({fontFamily: 'Times New Roman',height: '100px',width: '100px',backgroundColor: 'cornflowerblue'})


  return (
    <div style={style}></div>
  )
}

export default Pixel