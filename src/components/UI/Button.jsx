import React from 'react'

const Button = ({children,classes}) => {
  return (
    <button className={` p-4 bg-primary rounded-xl cursor-pointer  uppercase text-[1.1rem] font-semibold border-3 text-center block ${classes}`}>{children}</button>
  )
}

export default Button
