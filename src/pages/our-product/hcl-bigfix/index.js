import { LayoutLandingPage } from '@/components/layouts'
import { HclBigFix } from '@/components/pages/our-product'

import React from 'react'

export default function HclBigFixMenu() {
  return (
    <>
      <HclBigFix />
    </>
  )
}

HclBigFixMenu.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
