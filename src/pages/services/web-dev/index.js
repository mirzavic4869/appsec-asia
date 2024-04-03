import { LayoutLandingPage } from '@/components/layouts'
import { WebDevSection } from '@/components/pages/services-page'
import React from 'react'

export default function WebDev() {
  return (
    <>
      <WebDevSection />
    </>
  )
}

WebDev.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
