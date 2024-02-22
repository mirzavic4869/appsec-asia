import { Button } from '@/components/button'
import { lfs262Data } from '@/components/lib'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

export default function Training3Section() {
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
          {lfs262Data.map(({ title }, index) => (
            <div key={index} className="flex items-center gap-4">
              <FaCheckCircle color="#4360E5" />
              <p>{title}</p>
            </div>
          ))}
        </div>
        {/* Prerequisites*/}
        <h4 className="mb-4 text-lg font-semibold md:text-xl text-secondary">
          Prerequisites
        </h4>
        <p className="mb-6">
          To make the most out of this course, you will need to: Have working
          knowledge of Linux operating systems and the command line interface,
          Git, Docker, and Kubernetes. Know how to build CI/CD pipelines, write
          Infrastructure-as-Code (IaC), run Ansible Playbooks, and understand
          observability concepts such as log management and monitoring.
        </p>
        {/* Lab Info */}
        <h4 className="mb-4 text-lg font-semibold md:text-xl text-secondary">
          Lab Info
        </h4>
        <p className="mb-6">
          To perform the hands-on lab exercises in this course, learners will
          need internet access, a web browser, Git, and a cloud provider account
          (e.g., Google Cloud Platform or AWS).{' '}
          <em>
            If using a cloud provider like GCP or AWS, you should be able to
            complete the lab exercises using the free tier or credits provided
            to you. However, you may incur charges if you exceed the credits
            initially allocated by the cloud provider, or if the cloud
            provider’s terms and conditions change.
          </em>
        </p>
        <div className="h-[0.5px] w-full bg-[#e2e2e2] my-6 md:my-8"></div>
        {/* Price */}
        <div className="flex items-center justify-between">
          <h4 className="mb-4 text-lg font-semibold">Price</h4>
          <Button>Rp 10.000.000</Button>
        </div>
      </div>
    </div>
  )
}
