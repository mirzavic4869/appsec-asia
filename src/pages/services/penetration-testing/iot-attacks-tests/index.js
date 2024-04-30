import { LayoutLandingPage } from '@/components/layouts'
import { IotAttacks } from '@/components/pages/services-page/penetrationtest'
import React from 'react'

export default function IotAttacksMenu() {
  return (
    <>
      <IotAttacks />
    </>
  )
}

IotAttacksMenu.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
