import { LayoutLandingPage } from '@/components/layouts'
import { AudioCodes } from '@/components/pages/our-product'

import React from 'react'

export default function AudioCodesMenu() {
  return (
    <>
      <AudioCodes />
    </>
  )
}

AudioCodesMenu.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
