import { LayoutLandingPage } from '@/components/layouts'
import { Impreva } from '@/components/pages/our-products'

import React from 'react'

export default function ImprevaMenu() {
  return (
    <>
      <Impreva />
    </>
  )
}

ImprevaMenu.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
