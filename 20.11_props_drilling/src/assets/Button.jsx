import React from 'react'
// Props Drilling Example

function Button({text, color}) {
  return (
    <>
      <button className={`${color} p-2 m-2 text-white text-xs rounded-full font-semibold`}>{text}</button>
    </>
  )
}

export default Button
