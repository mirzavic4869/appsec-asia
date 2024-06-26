import { LayoutLandingPage } from '@/components/layouts'
import { Logrhythm } from '@/components/pages/our-products'

import React from 'react'

export default function LogrhythmMenu() {
  return (
    <>
      <Logrhythm />
    </>
  )
}

LogrhythmMenu.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
