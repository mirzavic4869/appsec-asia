import { Button, ButtonOutline } from '@/components/button'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import React from 'react'

export default function HeroSection() {
  return (
    <div className="bg-hero h-[700px] py-48">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center text-white">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Appsec Asia</h1>
          <h6 className="lg:w-[48rem] md:w-[36rem] mx-4 md:mx-auto mb-16">
            <strong>Appsec Asia</strong> is a company involved in providing
            IT-security, specializing in computer, network, and application
            security system as well as computer software development.
          </h6>
        </div>
        <div className="flex flex-row justify-center gap-4">
          <ScrollLink to={'#services'} smooth duration={500}>
            <Button>Get services</Button>
          </ScrollLink>
          <Link href={'https://wa.me/6282154552020'}>
            <ButtonOutline>Contact us</ButtonOutline>
          </Link>
        </div>
      </div>
    </div>
  )
}
