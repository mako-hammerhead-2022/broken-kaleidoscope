import React, { useState } from 'react'
import { TwitterPicker } from 'react-color'
import Blank from './blankPixel'

export default function Pallete(props) {
  const [selectedColor, setColor] = useState('#FF6900')


 
  const handleChange = (color) => {
    color = {
      hex: '#b0b5bc'
    }
  }


  function changeColor(color) {
    setColor(color.hex)
  }

  return (
    <>
      <div className='page1' >
      <TwitterPicker color={selectedColor} onChangeComplete={changeColor}/>
      </div>
      <div className='page'>
      <Blank />
      </div>
    </>
  )
}