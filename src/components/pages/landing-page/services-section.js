import Image from 'next/image'
import React from 'react'
import { serviceData } from '@/components/lib'
import { ButtonOutline2 } from '@/components/button'
import Link from 'next/link'

export default function ServicesSection() {
  return (
    <div id="#services" className="px-4 py-12 md:px-16 lg:px-20 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center md:mb-16">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            Benefit of <span className="text-secondary">Choosing Us</span>
          </h2>
          <p>The service we offer for your industry</p>
        </div>
        {/* Card */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {serviceData.map(({ title, desc, url }, index) => (
            <div
              key={index}
              className="max-w-sm transition-all duration-300 ease-in-out bg-white shadow-lg rounded-t-3xl hover:shadow-xl hover:bg-secondary hover:text-white"
            >
              <Image
                src="/card-service1.png"
                width={400}
                height={400}
                alt="Service"
              />
              <div className="p-6 ">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="my-4 text-sm">{desc}</p>
                <Link href={url}>
                  <ButtonOutline2>Read more</ButtonOutline2>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
