import React, { useState } from 'react'
import { TwitterPicker } from 'react-color'
import Blank from './blankPixel'

export default function Pallete(props) {
  const [selectedColor, setColor] = useState('#322036')

  function changeColor(color) {
    setColor(color.hex)
  }

  return (
    <>
      <TwitterPicker />
      <Blank />
    </>
  )
}
