import React, {useState} from 'react'

const Pixel = () =>  {

  const [style, setStyle] = useState({
    height: '10px',
    width: '10px',
    backgroundColor: `white`
  })
  return (
<div style={style}></div>
  )
}

export default Pixel