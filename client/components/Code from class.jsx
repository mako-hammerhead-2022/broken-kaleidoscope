import React from 'react'
import React, {useState} from 'react'

function Counter (props) {

  const [count, setCount] = useState(0)
  const [increment, setIncrement] = useState(1)
  // let thing = useState(0)
  // let count = thing[0]
  // let setCount = thing[1]

  console.log('count is ', count)

  function handleClick(evt) {
    setCount(count + increment)
  }

  function handleChange(evt) {
    console.log(evt.target.value)
    setIncrement(evt.target.value)
  }

  const nums = [1,2,3]

  return (
    <>
    Counter
    <div>Counter is {count}</div>

    <input type='number' onChange={handleChange} value={increment}/>
    <button onClick={handleClick}>Number go up</button>
    {/* {nums.map(num => <button onClick={evt => handleClick(evt, num)}>{num}</button>)} */}
    </>
  )
}