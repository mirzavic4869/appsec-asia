import { LayoutLandingPage } from '@/components/layouts'
import { Netskope } from '@/components/pages/our-products'

import React from 'react'

export default function NetskopeMenu() {
  return (
    <>
      <Netskope />
    </>
  )
}

NetskopeMenu.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
