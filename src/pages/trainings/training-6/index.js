import { LayoutLandingPage } from '@/components/layouts'
import { Training6Section } from '@/components/pages/trainings-page/detail-training'
import React from 'react'

export default function Training6() {
  return (
    <>
      <Training6Section />
    </>
  )
}

Training6.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
