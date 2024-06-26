import { LayoutLandingPage } from '@/components/layouts'
import { Fortinet } from '@/components/pages/our-products'

import React from 'react'

export default function FortinetMenu() {
  return (
    <>
      <Fortinet />
    </>
  )
}

FortinetMenu.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
