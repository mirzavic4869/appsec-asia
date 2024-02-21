import Image from 'next/image'
import photo from '@/assets/images/card-service2.png'
import React from 'react'
import { listTrainingData } from '@/components/lib'
import { ButtonOutline2 } from '@/components/button'

export default function ListTrainingSection() {
  return (
    <div className="px-4 py-12 md:px-16 lg:px-20 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center md:mb-16">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            List{' '}
            <span className="text-secondary">Training and Certification</span>
          </h2>
        </div>
        {/* Card */}
        <div className="grid gap-4 mb-6 md:grid-cols-2 lg:grid-cols-3">
          {listTrainingData.map(({ title, vendor, desc }, index) => (
            <div
              key={index}
              className="max-w-sm transition-all duration-300 ease-in-out bg-white shadow-lg rounded-t-3xl hover:shadow-xl hover:bg-secondary hover:text-white"
            >
              <Image src={photo} alt="Service" />
              <div className="p-6 ">
                <h3 className="mb-1 text-xl font-bold">{title}</h3>
                <h6 className="text-secondary">{vendor}</h6>
                <p className="my-4 text-sm">{desc}</p>
                <ButtonOutline2>View detail</ButtonOutline2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
