import React, {useState} from 'react'


const Pixel = () => {
    const [style, setStyle] = useState({
    height: '50px',
    width: '50px',
    backgroundColor: '#7fffd4',
  })
  return <div style={style}>  </div>
}


export default Pixel