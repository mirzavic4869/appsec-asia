import { Button } from '@/components/button'
import { comptiaAdvancedSecurity } from '@/components/lib'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

export default function Training11Section() {
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
            The CompTIA Advanced Security Practitioner (CASP) Certification is a
            vendor-neutral credential. The CASP exam is an internationally
            targeted validation of advanced-level security skills and knowledge.
            While there is no required prerequisite, the CASP certification is
            intended to follow CompTIA Security+ or equivalent experience and
            has a technical, “hands-on” focus at the enterprise level.
          </p>
          <p>
            CASP meets the growing demand for advanced IT security in the
            enterprise. Recommended for IT professionals with at least 5 years
            of experience, CASP certifies critical thinking and judgment across
            a broad spectrum of security disciplines and requires candidates to
            implement clear solutions in complex environments.
          </p>
        </div>

        {/* program objectives */}
        <h4 className="mb-4 text-lg font-semibold md:text-xl text-secondary">
          Program Objectives
        </h4>
        <div className="flex flex-col gap-4 mb-6">
          {comptiaAdvancedSecurity.map(({ title }, index) => (
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
