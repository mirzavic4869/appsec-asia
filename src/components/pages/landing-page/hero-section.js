import { Button, ButtonOutline } from '@/components/button'
import React from 'react'

export default function HeroSection() {
  return (
    <div className="bg-hero h-[700px] py-52">
      <div className="mx-auto max-w-7xl">
        <div className="text-center text-white">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Appsec Asia</h1>
          <h6 className="md:w-[48rem] mx-auto mb-16">
            <strong>Appsec Asia</strong> is a company involved in providing
            IT-security, specializing in computer, network, and application
            security system as well as computer software development.
          </h6>
        </div>
        <div className="flex flex-row justify-center gap-4">
          <Button>Get services</Button>
          <ButtonOutline>Contact us</ButtonOutline>
        </div>
      </div>
    </div>
  )
}
