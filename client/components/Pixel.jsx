import React, {useState} from 'react'

const Pixel = () =>  {

  const [style, setStyle] = useState({
    height: '10px',
    width: '10px',
    backgroundColor: `white`
  })

  // const clickHandler = evt => {
  //   setStyle({
  //     ...style, 
  //     backgroundColor: "purple"
  //   })
  // }
  return (
<div style={style}>
{/* // onClick={clickHandler}> */}
</div>
  )
}

export default Pixel