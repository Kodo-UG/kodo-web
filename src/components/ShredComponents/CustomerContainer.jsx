import React from 'react'

function CustomContainer({children, py, className}) {
  return (
    <div className={`${className} container px-2 md:px-4 mx-auto lg:px-8 xl:px-8 ${py? py:"py-32"}`}>{children}</div>
  )
}

export default CustomContainer