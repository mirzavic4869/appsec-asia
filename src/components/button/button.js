import React from 'react'

function Button({ children, type, ...props }) {
  return (
    <button
      {...props}
      className="rounded-md bg-secondary px-8 py-2.5 text-sm font-medium text-white hover:bg-blue-900 hover:shadow-md focus:ring-1 focus:bg-tertiary"
    >
      {children}
    </button>
  )
}

function ButtonOutline({ children, type, ...props }) {
  return (
    <button
      {...props}
      className="rounded-md border border-white hover:border-secondary px-8 py-2.5 text-sm font-medium text-white hover:bg-secondary hover:shadow-md focus:ring-1 focus:bg-tertiary"
    >
      {children}
    </button>
  )
}

export { Button, ButtonOutline }
