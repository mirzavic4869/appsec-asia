import { Button } from '@/components/button'
import { comptiaNetwork } from '@/components/lib'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

export default function Training9Section() {
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
            The CompTIA Network+ certification is an internationally recognized
            validation of the technical knowledge required of foundation-level
            IT network practitioners.
          </p>
          <p>
            The CompTIA Network+ certification ensures that the successful
            candidate has the important knowledge and skills necessary to
            manage, maintain, troubleshoot, install, operate and configure basic
            network infrastructure, describe networking technologies, basic
            design principles, and adhere to wiring standards and use testing
            tools.
          </p>
          <p>
            The skills and knowledge measured by this examination were derived
            from an industry-wide job task analysis and validated through an
            industry-wide global survey in Q2 2008. The results of this survey
            were used in weighing the domains and ensuring that the weighting is
            representative of the relative importance of the content.
          </p>
        </div>

        {/* program objectives */}
        <h4 className="mb-4 text-lg font-semibold md:text-xl text-secondary">
          Program Objectives
        </h4>
        <div className="flex flex-col gap-4 mb-6">
          {comptiaNetwork.map(({ title }, index) => (
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
          <Button>Rp 7.000.000</Button>
        </div>
      </div>
    </div>
  )
}
