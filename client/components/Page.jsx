import React, {useState} from 'react';
import { CirclePicker } from 'react-color';
import Blank from './blankPixel';

const Pallete = () => {

  const [selectedColor, setColor] = useState('#322036');

  function changeColor(color) {
     setColor(color.hex);
  };

    return (
      <>
      <div>
        <Blank />
      </div>
      <div>
      <CirclePicker
        color={selectedColor }
        onChangeComplete={changeColor}
      />
      </div>
      </>
    );
  }
export default Pallete