import { LayoutLandingPage } from '@/components/layouts'
import { DigitalForensicSection } from '@/components/pages/services-page'
import React from 'react'

export default function DigitalForensic() {
  return (
    <>
      <DigitalForensicSection />
    </>
  )
}

DigitalForensic.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
