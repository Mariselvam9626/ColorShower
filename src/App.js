import React, { useState } from 'react'
import Square from './Square'
import Input from './Input'
import Header from './Header'
import Footer from './Footer'

function App(){
  const [colorValue,setColorValue] = useState('')
  const [hexValue,setHexValue] = useState('')
  const [isDarkText,setIsDarkText] = useState('')


  return(
    <div 
      className='bg-dark'
    >
      <Header />
      <Square 
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <Input 
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
      <Footer />

    </div>
  )



}

export default App;