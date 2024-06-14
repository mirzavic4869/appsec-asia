import { LayoutLandingPage } from '@/components/layouts'
import { Infoblox } from '@/components/pages/our-products'

import React from 'react'

export default function InfobloxMenu() {
  return (
    <>
      <Infoblox />
    </>
  )
}

InfobloxMenu.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
