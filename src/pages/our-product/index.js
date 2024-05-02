import { LayoutLandingPage } from '@/components/layouts'
import { OurProduct } from '@/components/pages/our-product'

import React from 'react'

export default function OurProductMenu() {
  return (
    <>
      <OurProduct />
    </>
  )
}

OurProductMenu.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
