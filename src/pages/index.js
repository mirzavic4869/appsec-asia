import { LayoutLandingPage } from '@/components/layouts'
import { AboutSection, HeroSection } from '@/components/pages/landing-page'
import React from 'react'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
