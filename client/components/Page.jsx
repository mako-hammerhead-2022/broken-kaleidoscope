import React, {useState} from 'react';
import { CirclePicker } from 'react-color';
import Blank from './blankPixel';

export default function Pallete() {

  const [selectedColor, setColor] = useState('#322036');

  function changeColor(color) {
     setColor(color.hex);
  };

    return (
      <>
      <div>
      <CirclePicker
        color={selectedColor}
        onChangeComplete={changeColor}
      />
      </div>
      <div>
        <Blank />
      </div>
      </>
    );
  }
