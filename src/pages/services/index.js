import { LayoutLandingPage } from '@/components/layouts'
import { Services } from '@/components/pages/services-page'

import React from 'react'

export default function ServicesMenu() {
  return (
    <>
      <Services />
    </>
  )
}

ServicesMenu.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
