import { LayoutLandingPage } from '@/components/layouts'
import { PenetrationTestingSection } from '@/components/pages/services-page'
import React from 'react'

export default function PenetrationTesting() {
  return (
    <>
      <PenetrationTestingSection />
    </>
  )
}

PenetrationTesting.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
