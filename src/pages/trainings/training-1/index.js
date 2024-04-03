import { LayoutLandingPage } from '@/components/layouts'
import { Training1Section } from '@/components/pages/trainings-page/detail-training'
import React from 'react'

export default function Training1() {
  return (
    <>
      <Training1Section />
    </>
  )
}

Training1.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
