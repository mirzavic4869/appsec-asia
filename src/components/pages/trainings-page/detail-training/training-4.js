import { Button } from '@/components/button'
import { lfd121Data } from '@/components/lib'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

export default function Training4Section() {
  return (
    <div className="px-4 py-12 md:px-16 lg:px-20 bg-contact">
      <div className="mx-auto max-w-7xl">
        {/* Description */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold md:text-3xl">Description</h2>
          <p>
            <span className="text-secondary">Vendor:</span> THE LINUX FOUNDATION
          </p>
        </div>
        {/* course outline */}
        <h4 className="mb-4 text-lg font-semibold md:text-xl text-secondary">
          Course Outline
        </h4>
        <div className="flex flex-col gap-4 mb-6">
          {lfd121Data.map(({ title }, index) => (
            <div key={index} className="flex items-center gap-4">
              <FaCheckCircle color="#4360E5" />
              <p>{title}</p>
            </div>
          ))}
        </div>
        <div className="h-[0.5px] w-full bg-[#e2e2e2] my-6 md:my-8"></div>
        {/* Price */}
        <div className="flex items-center justify-between">
          <h4 className="mb-4 text-lg font-semibold">Price</h4>
          <Button>Rp 3.000.000</Button>
        </div>
      </div>
    </div>
  )
}
