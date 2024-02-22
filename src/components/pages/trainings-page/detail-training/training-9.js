import { Button } from '@/components/button'
import { comptiaSecurity } from '@/components/lib'
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
            The CompTIA Security+ Certification is a vendor neutral credential.
            The CompTIA Security+ exam is an internationally recognized
            validation of foundation-level security skills and knowledge, and is
            used by organizations and security professionals around the globe.
          </p>
          <p>
            The CompTIA Security+ exam will certify that the successful
            candidate has the knowledge and skills required to identify risk and
            participate in risk mitigation activities, provide infrastructure,
            application, operational and information security, apply security
            controls to maintain confidentiality, integrity and availability,
            identify appropriate technologies and products, and operate with an
            awareness of applicable policies, laws and regulations.
          </p>
          <p>
            CompTIA Security+ is accredited by ANSI to show compliance with the
            ISO 17024 Standard and, as such, undergoes regular reviews and
            updates to the exam objectives.
          </p>
        </div>

        {/* program objectives */}
        <h4 className="mb-4 text-lg font-semibold md:text-xl text-secondary">
          Program Objectives
        </h4>
        <div className="flex flex-col gap-4 mb-6">
          {comptiaSecurity.map(({ title }, index) => (
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
