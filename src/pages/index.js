import { LayoutLandingPage } from '@/components/layouts'
import {
  AboutSection,
  HeroSection,
  MotoSection,
  ServicesSection,
  TestimonySection,
  TrainingsSection,
  ContactUsSection,
  OurClientSection,
} from '@/components/pages/landing-page'
import React from 'react'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonySection />
      <MotoSection />
      <TrainingsSection />
      <OurClientSection />
      <ContactUsSection />
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
