import React from 'react'
import Pixel from './Pixel'


const Blank = () => {
  const pixArr = Array.from({length: 14100}, (v, i) => <Pixel key={i}/>)
    return (
      pixArr )
  }
  
export default Blank