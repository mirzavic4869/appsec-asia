import { Button } from '@/components/button'
import { comptiaA } from '@/components/lib'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

export default function Training14Section() {
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
            The CompTIA A+ Certification is a vendor neutral credential. CompTIA
            A+ is globally recognized and accredited by ANSI, compliant with ISO
            17024 standards and is approved by the U.S. Department of Defense to
            meet directive 8570.01-M requirements. It validates understanding of
            the most common hardware and software technologies in business and
            certifies the skills necessary to support complex IT
            infrastructures. CompTIA A+ is a powerful credential that helps IT
            professionals worldwide ignite their IT career.
          </p>
          <p>
            CompTIA A+ establishes best practices in troubleshooting, networking
            and security across a variety of devices to set the stage for IT
            careers. The certification also matches professional tech skills
            with communication skills. It is developed and maintained by leading
            IT experts. Content for the exams stems from a combination of
            industry-wide survey feedback and contributions from our team of
            subject matter experts.
          </p>
        </div>

        {/* program objectives */}
        <h4 className="mb-4 text-lg font-semibold md:text-xl text-secondary">
          Program Objectives
        </h4>
        <div className="flex flex-col gap-4 mb-6">
          {comptiaA.map(({ title }, index) => (
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
