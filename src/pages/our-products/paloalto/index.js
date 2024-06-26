import { LayoutLandingPage } from '@/components/layouts'
import { Paloalto } from '@/components/pages/our-products'

import React from 'react'

export default function PaloaltoMenu() {
  return (
    <>
      <Paloalto />
    </>
  )
}

PaloaltoMenu.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
