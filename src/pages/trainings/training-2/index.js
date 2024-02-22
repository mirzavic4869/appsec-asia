import { LayoutLandingPage } from '@/components/layouts'
import { Training2Section } from '@/components/pages/trainings-page/detail-training'
import React from 'react'

export default function Training2() {
  return (
    <>
      <Training2Section />
    </>
  )
}

Training2.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
