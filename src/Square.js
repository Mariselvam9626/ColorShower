import React from 'react'

const Square = ({colorValue, hexValue,isDarkText}) => {
  return (
    <section
        className='container w-50 h-100 p-5 pl-4 mt-5 ' 
        style={{
            backgroundColor : colorValue, 
            color : isDarkText ? "#000" :"#FFF"
        }}   
    >
        <p
            className=' w-100 d-flex justify-content-center '
        >
            {colorValue ? colorValue : "Empty Value"}</p>
        <p
            className=' w-100 d-flex justify-content-center'
        >
            {hexValue ? hexValue : null}</p>
        
    </section>

  
  )
}
Square.defaultProps = {
    colorValue: "Empty Color Value"
}

export default Square;