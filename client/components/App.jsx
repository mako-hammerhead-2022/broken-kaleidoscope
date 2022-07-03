import React from 'react'
import Pixels from './Pixels'

const App = () => {
  const pixelArr = Array.from({ length: 7100 }, (v, i) => <Pixels key={i} />)

  return pixelArr
}

export default App
