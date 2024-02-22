import { LayoutLandingPage } from '@/components/layouts'
import { Training4Section } from '@/components/pages/trainings-page/detail-training'
import React from 'react'

export default function Training4() {
  return (
    <>
      <Training4Section />
    </>
  )
}

Training4.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
