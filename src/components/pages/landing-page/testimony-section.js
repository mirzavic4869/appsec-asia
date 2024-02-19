import Image from 'next/image'
import photo from '@/assets/images/photo.png'
import people from '@/assets/images/people.png'
import React from 'react'

export default function TestimonySection() {
  return (
    <div className="px-4 py-12 md:px-16 lg:px-20">
      <div className="grid items-center mx-auto md:grid-cols-2 max-w-7xl">
        {/* Costumer say */}
        <div className="lg:w-[24rem] md:w-[18rem]">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            What Our Customer Say{' '}
            <span className="text-secondary">About Us</span>
          </h2>
          <p className="mb-6 text-sm">
            Lorem ipsum dolor sit amet consectetur. Ornare augue hendrerit
            turpis tortor aliquet mattis. Blandit sed mattis nisl mi et
            maecenas. Risus neque bibendum in proin lacus arcu rutrum aliquam.
          </p>
          <div>
            <div className="flex flex-row items-center gap-4">
              <Image
                className="rounded-full"
                src={photo}
                alt="Photo"
                width={60}
              />
              <div>
                <p className="font-semibold">Martin Stewart</p>
                <p className="text-sm">CEO Stardoom</p>
              </div>
            </div>
          </div>
        </div>
        {/* People */}
        <div className="hidden md:flex md:justify-start">
          <Image src={people} alt='"People' className="md:w-[48rem]" />
        </div>
      </div>
    </div>
  )
}
