import React, {useEffect, useState} from "react"

const Pixels = () => {

  const [style, setStyle ] = useState({ 
    height: '100px',
    width: '100px',
    backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  })

    //added onContextMenu function for right click to turn squares black
     const contextMenu = (evt) => {
      evt.preventDefault()
      setStyle({height: '100px', width: '100px', backgroundColor: 'black' })
     }


    //added onMouseEnter function that when you hover over squares they turn green 
    const mouseHandler = () => {
      setStyle({height: '100px', width: '100px', backgroundColor: 'green'})
    }


  //added onclick handler function so when you click they switch colours
  const clickHandler = () => {
    setStyle({height: '100px', width: '100px', backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}` 
  })
  }

  //stretch add set interval of 3.5 seconds to change colours randomly
  useEffect(() => {
    const intervalTimer = setInterval(() => {
      setStyle({height: `100px`, width: `100px`, backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}` })
    }, 100)
    return () => clearInterval(intervalTimer)
  }, [])


  return (
      <div style={style}
       onClick={clickHandler}
        onMouseEnter={mouseHandler}
         onContextMenu={contextMenu}>
      </div>

      )
    }

    

export default Pixels