import { LayoutLandingPage } from '@/components/layouts'
import { F5Networks } from '@/components/pages/our-products'

import React from 'react'

export default function F5NetworksMenu() {
  return (
    <>
      <F5Networks />
    </>
  )
}

F5NetworksMenu.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
