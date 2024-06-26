import { LayoutLandingPage } from '@/components/layouts'
import { Thales } from '@/components/pages/our-products'

import React from 'react'

export default function ThalesMenu() {
  return (
    <>
      <Thales />
    </>
  )
}

ThalesMenu.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
