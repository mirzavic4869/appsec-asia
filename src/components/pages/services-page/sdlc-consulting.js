import React from 'react'

export default function SDLCSection() {
  return (
    <div className="px-4 py-12 md:px-16 lg:px-20 bg-contact">
      <div className="mx-auto max-w-7xl">
        {/* Description */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold md:text-3xl">
            As cyber crimes grow in size and impact,{' '}
            <span className="text-secondary">
              dealing with security in your software development is solution!
            </span>
          </h2>
        </div>
        <div className="mb-6 space-y-4">
          <p>
            Most talented developers do not have a clue how to integrate
            security throughout the development lifecycle.
          </p>
          <p>
            We will take your company one step ahead by assisting your company
            in securing not only a single or multiple development projects; we
            will help you create a methodology which will enforce correct
            implementation of security into company work methodology and bring
            your development processes to the maturity level you are seeking.
          </p>
        </div>
      </div>
    </div>
  )
}
