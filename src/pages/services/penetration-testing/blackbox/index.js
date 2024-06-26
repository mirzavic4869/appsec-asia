import { LayoutLandingPage } from '@/components/layouts'
import { Blackbox } from '@/components/pages/services-page/penetration-test'
import React from 'react'

export default function BlackboxMenu() {
  return (
    <>
      <Blackbox />
    </>
  )
}

BlackboxMenu.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
