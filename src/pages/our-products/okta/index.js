import { LayoutLandingPage } from '@/components/layouts'
import { Okta } from '@/components/pages/our-products'

import React from 'react'

export default function OktaMenu() {
  return (
    <>
      <Okta />
    </>
  )
}

OktaMenu.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
