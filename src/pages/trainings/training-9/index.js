import { LayoutLandingPage } from '@/components/layouts'
import { Training9Section } from '@/components/pages/trainings-page/detail-training'
import React from 'react'

export default function Training9() {
  return (
    <>
      <Training9Section />
    </>
  )
}

Training9.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
