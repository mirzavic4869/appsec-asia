import { LayoutLandingPage } from '@/components/layouts'
import {
  AboutSection,
  HeroSection,
  MotoSection,
  Services,
  TestimonySection,
} from '@/components/pages/landing-page'
import React from 'react'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Services />
      <TestimonySection />
      <MotoSection />
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
