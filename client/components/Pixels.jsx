import React, {useState} from "react"

const Pixels = () => {

  const [style, setStyle ] = useState({ 
    height: '100px',
    width: '100px',
    backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  })


  //added onclick handler function 
  const clickHandler = (evt) => {
    setStyle({height: '100px', width: '100px', backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}` 
  })
  }



  return (
      <div style={style} onClick={clickHandler}> 
      </div>

      )
    }

    

export default Pixels