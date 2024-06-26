import { LayoutLandingPage } from '@/components/layouts'
import { Algosec } from '@/components/pages/our-products'

import React from 'react'

export default function AlgosecMenu() {
  return (
    <>
      <Algosec />
    </>
  )
}

AlgosecMenu.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
