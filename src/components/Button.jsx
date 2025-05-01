import clsx from 'clsx'
import React from 'react'

const Button = ({ className, label, type, onClick = () => {}, icon }) => {
  return (
    <button
      type={type || "button"}
      className={clsx("px-3 py-2 outline-none rounded", className)}
      onClick={onClick}
    >
      <span>{label}</span>

      {icon && icon}
    </button>
  )
}

export default Button
