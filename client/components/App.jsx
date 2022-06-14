import React from 'react'
import Pixel from './Pixel'

const App = () => {

    const pixelArray = Array.from({length:10000}, (e,i) => <Pixel key={i}/>);
    return pixelArray
}
    
    
export default App
