import { LayoutLandingPage } from '@/components/layouts'
import { SDLCSection } from '@/components/pages/services-page'
import React from 'react'

export default function SDLCConsulting() {
  return (
    <>
      <SDLCSection />
    </>
  )
}

SDLCConsulting.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
