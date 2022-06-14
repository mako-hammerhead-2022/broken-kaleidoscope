import React, {useState} from "react"

const Pixels = () => {

  const [style, setStyle ] = useState({ 
    height: '100px',
    width: '100px',
    backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  })
   
  //added onclick handler function 
    const clickHandler = evt => ({ 
       backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    })

  return (
      <div  style={style} onClick={clickHandler}> </div>
      //returned onclick handler function 
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