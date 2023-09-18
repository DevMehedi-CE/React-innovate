import React from 'react'

const Button = ({title, className}) => {
  return (
    <div>
      <button className={`py-3 px-6 bg-primary rounded-lg text-white ${className}`}> {title}  </button>
    </div>
  )
}

export default Button
