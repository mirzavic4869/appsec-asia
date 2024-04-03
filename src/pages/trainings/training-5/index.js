import { LayoutLandingPage } from '@/components/layouts'
import { Training5Section } from '@/components/pages/trainings-page/detail-training'
import React from 'react'

export default function Training5() {
  return (
    <>
      <Training5Section />
    </>
  )
}

Training5.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
