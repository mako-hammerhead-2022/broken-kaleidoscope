import React from 'react'
import Pixel from './Pixel'


const Blank = (props) => {
  const {selectedColor} = props
  const pixArr = Array.from({length: 1500}, (v, i) => <Pixel key={i} selectedColor={selectedColor}/>)
    return (
      <div>
      {pixArr} 
      </div>
    )
  }
  
export default Blank