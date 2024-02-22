import { LayoutLandingPage } from '@/components/layouts'
import { Training3Section } from '@/components/pages/trainings-page/detail-training'
import React from 'react'

export default function Training3() {
  return (
    <>
      <Training3Section />
    </>
  )
}

Training3.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
