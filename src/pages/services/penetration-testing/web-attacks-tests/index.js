import { LayoutLandingPage } from '@/components/layouts'
import { WebAttacks } from '@/components/pages/services-page/penetration-test'
import React from 'react'

export default function WebAttacksMenu() {
  return (
    <>
      <WebAttacks />
    </>
  )
}

WebAttacksMenu.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
