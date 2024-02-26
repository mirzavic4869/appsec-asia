import { Button } from '@/components/button'
import { comptiaServer } from '@/components/lib'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

export default function Training6Section() {
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
            CompTIA Server+ is an international, vendor-neutral certification
            for individuals with 18-24 months of experience with Industry
            Standard Server Architecture (ISSA) technology. CompTIA Server+
            certifies technical knowledge in areas such as RAID, SCSI and
            multiple CPUs, as well as capabilities with server issues, including
            disaster recovery. Although not a prerequisite, it is recommended
            that CompTIA Server+ candidates hold a CompTIA A+ certification. The
            CompTIA Server+ certification bundle covers the body of knowledge
            required to prepare for the SK0-002 CompTIA Server+ 2005
            certification exam.
          </p>
        </div>
        {/* program objectives */}
        <h4 className="mb-4 text-lg font-semibold md:text-xl text-secondary">
          Program Objectives
        </h4>
        <div className="flex flex-col gap-4 mb-6">
          {comptiaServer.map(({ title }, index) => (
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
