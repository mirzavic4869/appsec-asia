import React from 'react'

function Button({ children, classAdd, type, ...props }) {
  return (
    <button
      {...props}
      className={`${classAdd} rounded-md bg-secondary transition-all duration-300 ease-in-out px-8 py-2.5 text-sm font-medium text-white hover:bg-blue-900 hover:shadow-md focus:ring-1 focus:bg-tertiary`}
    >
      {children}
    </button>
  )
}

function ButtonOutline({ children, type, ...props }) {
  return (
    <button
      {...props}
      className="rounded-md border transition-all duration-300 ease-in-out border-white hover:border-secondary px-8 py-2.5 text-sm font-medium text-white hover:bg-secondary hover:shadow-md focus:ring-1 focus:bg-tertiary"
    >
      {children}
    </button>
  )
}

function ButtonOutline2({ children, type, ...props }) {
  return (
    <button
      {...props}
      className="rounded-md border transition-all duration-300 ease-in-out border-secondary hover:border-white px-8 py-2.5 text-sm font-medium text-secondary hover:bg-secondary hover:text-white hover:shadow-md focus:ring-1 focus:bg-tertiary"
    >
      {children}
    </button>
  )
}

export { Button, ButtonOutline, ButtonOutline2 }
