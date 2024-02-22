import { LayoutLandingPage } from '@/components/layouts'
import { Training8Section } from '@/components/pages/trainings-page/detail-training'
import React from 'react'

export default function Training8() {
  return (
    <>
      <Training8Section />
    </>
  )
}

Training8.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
