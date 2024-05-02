import { LayoutLandingPage } from '@/components/layouts'
import { Graybox } from '@/components/pages/services-page/penetration-test'
import React from 'react'

export default function GrayboxMenu() {
  return (
    <>
      <Graybox />
    </>
  )
}

GrayboxMenu.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
