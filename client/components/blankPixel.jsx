import React from 'react'
import Pixel from './Pixel'


const Blank = () => {
  // const {selectedColor} = props
  const pixArr = Array.from({length: 1500}, (v, i) => <Pixel key={i} />)
    return (
      pixArr )
  }
  
export default Blank