import { Button } from '@/components/button'
import { comptiaMobility } from '@/components/lib'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

export default function Training10Section() {
  return (
    <div className="px-4 py-12 md:px-16 lg:px-20 bg-contact">
      <div className="mx-auto max-w-7xl">
        {/* Description */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold md:text-3xl">Description</h2>
          <p>
            <span className="text-secondary">Vendor:</span> CompTIA
          </p>
        </div>
        <div className="mb-6 space-y-4">
          <p>
            CompTIA Mobility+ is the premier vendor-neutral certification to
            help IT professionals stay ahead of the mobile-ready curve. It
            validates expert knowledge in the latest mobility trends and the
            ability to work with an extensive variety of existing and emerging
            mobile technologies.
          </p>
          <p>
            CompTIA Mobility+ allows IT Professionals to manage the complex
            environments that trends such as bring-your-own-device (BYOD)
            create. CompTIA Mobility+ shows that you understand different mobile
            technologies as well as over-the-air systems that will dominate
            business operations in the coming years. CompTIA Mobility+ focuses
            on the key security concerns that affect all things mobility, from
            BYOD environment threats to how to encrypt data at rest and data in
            motion.
          </p>
        </div>

        {/* program objectives */}
        <h4 className="mb-4 text-lg font-semibold md:text-xl text-secondary">
          Program Objectives
        </h4>
        <div className="flex flex-col gap-4 mb-6">
          {comptiaMobility.map(({ title }, index) => (
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
          <Button>Rp 9.000.000</Button>
        </div>
      </div>
    </div>
  )
}
