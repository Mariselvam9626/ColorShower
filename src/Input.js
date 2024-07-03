import React from 'react'
import colorNames from 'colornames'

const Input = ({colorValue,setColorValue,setHexValue,isDarkText,setIsDarkText}) => {
  return (
    <form onSubmit={(e) =>e.preventDefault()}
        className='d-flex justify-content-center p-5'
    >
        <label
            className='p-2 m-2 text-white'
        >
            Add Color Name :</label>
        <input 
            type="text"
            className="form-control w-50 mx-3"
            autoFocus
            placeholder='Add color name'
            required
            value={colorValue}
            onChange={(e) =>{
                setColorValue(e.target.value)
                setHexValue(colorNames(e.target.value));
            }}
        />
        <button
            className='btn btn-primary p-2'
            type='text'
            onClick={() => setIsDarkText
            (!isDarkText)
            }
        >
            Toggle  Color
        </button>
    </form>
  )
}

export default Input;