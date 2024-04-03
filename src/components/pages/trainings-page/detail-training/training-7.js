import { Button } from '@/components/button'
import { comptiaProject } from '@/components/lib'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

export default function Training7Section() {
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
            CompTIA Project+ certifies the knowledge and skills of professionals
            in project management. Project+ validates the ability to initiate,
            manage and support a project or business initiative. And it’s not
            just for IT technicians; Project+ is designed for any individual who
            wants to validate project management experience.
          </p>
          <p>
            Project management is one of the business world’s most in-demand
            skill sets, both inside and outside the IT profession. Even the
            smallest projects can benefit from project management processes.
            Well-run projects save time and ensure continued focus on company
            goals. The CompTIA Project+ certification validates the
            communication and business skills you need to lead projects with
            confidence, complete projects on time and make sure you stay within
            budget.
          </p>
        </div>
        {/* program objectives */}
        <h4 className="mb-4 text-lg font-semibold md:text-xl text-secondary">
          Program Objectives
        </h4>
        <div className="flex flex-col gap-4 mb-6">
          {comptiaProject.map(({ title }, index) => (
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
