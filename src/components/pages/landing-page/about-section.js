import Image from 'next/image'
import React from 'react'

export default function AboutSection() {
  return (
    <div className="px-4 py-12 md:px-16 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between mb-4 md:mb-0">
          <div className="w-[38rem]">
            <h2 className="mb-6 text-2xl font-bold md:text-3xl">
              <span className="text-secondary">About</span> Us
            </h2>
            <p className="mb-4">
              We help solve your most important business problems thoroughly
              with prepackaged solutions. We help customers meet technology
              challenges through consulting, application development,
              cybersecurity, and training.
            </p>
            <p>
              Since the establishment of Appsec Asia, our company has been
              trusted with cases at the regional scale. Along with tackling a
              national level cybersecurity case, we expanded our expertise by
              working in the US region.
            </p>
          </div>
          <div>
            <Image
              src="/bg-asia.png"
              alt="bg-asia"
              className="absolute right-0 md:w-[36rem] -z-10 top-[42rem] md:top-[38rem]"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="flex justify-end opacity-10">
          <Image
            src="/logo-appsecasia.png"
            alt="Logo Appsecasia"
            width={180}
            height={180}
          />
        </div>
      </div>
    </div>
  )
}
