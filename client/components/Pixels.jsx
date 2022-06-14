import React, {useState} from "react"

const Pixels = () => {

  const [style, setStyle ] = useState({ 
    height: 100,
    width:100,
    backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  })
   
    const clickHandler = evt => {
      setStyle({
      backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
      })
    }

  return (
      <div onClick={clickHandler} style={style}></div>
      
    )
    }

    

  // function handleClick(evt) {
  //   setStyle(style + increment)
  // }
  
  // function handleChange(evt) {
  //   console.log(evt.target.value)
  //   setIncrement(evt.target.value)
  // }
  
  // return(
  //   <>
    
  //   <div>Style is {style}</div>
  
  //   <input type='number' onChange={handleChange} value={increment}/>
  //     <button onClick={handleClick}>Number go up</button>
  //   </>
  // )
  
  

export default Pixels