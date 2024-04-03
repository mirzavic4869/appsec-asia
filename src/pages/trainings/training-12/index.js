import { LayoutLandingPage } from '@/components/layouts'
import { Training12Section } from '@/components/pages/trainings-page/detail-training'
import React from 'react'

export default function Training12() {
  return (
    <>
      <Training12Section />
    </>
  )
}

Training12.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
