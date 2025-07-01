import React from 'react'

const Button = ({children,classes}) => {
  return (
    <button className={` p-4 bg-primary rounded-lg  uppercase text-xl border-2 text-center block ${classes}`}>{children}</button>
  )
}

export default Button
