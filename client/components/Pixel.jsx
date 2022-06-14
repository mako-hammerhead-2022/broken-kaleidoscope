import React, {useState, useLayoutEffect, useEffect} from 'react'


function Pixel () {
  const [style, setStyle] = useState({
    fontFamily: 'Times New Roman',
    height: '50px',
    width: '50px',
    backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  })

  const clickHandler = (evt) => {
    setStyle ({
      ...style,
      backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    })
  }

  const mouseHoverHandler = (evt) => {
    setStyle ({
      ...style,
      backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setStyle ({
        ...style,
        backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])


  // component mounts
  // it doesn't exist -> it exists
  // useEffect runs the function

  // component updates
  // it exists -> rerenders
  // if variables in dep array change, useEffect runs the function

  // component unmounts
  // it exists -> it doesn't exist
  // useEffect runs the function that is returned from it

  

  return (
    <div style={style} onClick={clickHandler} onMouseEnter={mouseHoverHandler}></div>
  )
}

export default Pixel