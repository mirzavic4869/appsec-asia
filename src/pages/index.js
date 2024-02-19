import { LayoutLandingPage } from '@/components/layouts'
import {
  AboutSection,
  HeroSection,
  Services,
} from '@/components/pages/landing-page'
import React from 'react'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Services />
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
