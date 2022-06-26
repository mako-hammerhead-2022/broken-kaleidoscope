import React, {useState} from 'react'

const Pixel = () =>  {

  const [style, setStyle] = useState({
    height: '10px',
    width: '10px',
    backgroundColor: '#9E788F'
  })
  return (
<div style={style}></div>
  )
}

export default Pixel