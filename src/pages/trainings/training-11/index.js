import { LayoutLandingPage } from '@/components/layouts'
import { Training11Section } from '@/components/pages/trainings-page/detail-training'
import React from 'react'

export default function Training11() {
  return (
    <>
      <Training11Section />
    </>
  )
}

Training11.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
