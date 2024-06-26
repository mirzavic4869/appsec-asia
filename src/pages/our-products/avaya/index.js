import { LayoutLandingPage } from '@/components/layouts'
import { Avaya } from '@/components/pages/our-products'

import React from 'react'

export default function AvayaMenu() {
  return (
    <>
      <Avaya />
    </>
  )
}

AvayaMenu.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
