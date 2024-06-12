import { LayoutLandingPage } from '@/components/layouts'
import { OurProducts } from '@/components/pages/our-products'

import React from 'react'

export default function OurProductsMenu() {
  return (
    <>
      <OurProducts />
    </>
  )
}

OurProductsMenu.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
