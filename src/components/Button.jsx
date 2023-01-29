import React from 'react'

const Button = ({ bgColor, color, size, text, borderRadius, props }) => {
  return (
    <div>
    <button
    type='button'
    style={{ backgroundColor: bgColor, color, borderRadius }}
    className={`text-${size} p-3 hover:drop-shadow-xl`}
    onClick={props}
    >
    {text}    
    </button>
    </div>
  )
}

export default Button