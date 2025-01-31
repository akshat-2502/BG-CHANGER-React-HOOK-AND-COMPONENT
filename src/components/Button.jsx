import React from 'react'

function Button({colorr, onClick}) {


  return (
    <button 
    onClick={onClick}
    className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    style={{backgroundColor: colorr}}>
        {colorr}
    </button>
  )
}

export default Button