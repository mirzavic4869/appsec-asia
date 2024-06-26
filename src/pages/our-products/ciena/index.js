import { LayoutLandingPage } from '@/components/layouts'
import { Ciena } from '@/components/pages/our-products'

import React from 'react'

export default function CienaMenu() {
  return (
    <>
      <Ciena />
    </>
  )
}

CienaMenu.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
