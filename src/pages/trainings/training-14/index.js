import { LayoutLandingPage } from '@/components/layouts'
import { Training14Section } from '@/components/pages/trainings-page/detail-training'
import React from 'react'

export default function Training14() {
  return (
    <>
      <Training14Section />
    </>
  )
}

Training14.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
