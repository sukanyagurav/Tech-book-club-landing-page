import React from 'react'

const Button = ({children,classes}) => {
  return (
    <button className={` p-4 bg-primary rounded-[0.8rem] cursor-pointer  uppercase text-[1rem] font-semibold border-3 text-center block ${classes}`}>{children}</button>
  )
}

export default Button
