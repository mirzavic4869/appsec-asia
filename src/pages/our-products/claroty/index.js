import { LayoutLandingPage } from '@/components/layouts'
import { Claroty } from '@/components/pages/our-products'

import React from 'react'

export default function ClarotyMenu() {
  return (
    <>
      <Claroty />
    </>
  )
}

ClarotyMenu.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
