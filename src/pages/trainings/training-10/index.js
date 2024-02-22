import { LayoutLandingPage } from '@/components/layouts'
import { Training10Section } from '@/components/pages/trainings-page/detail-training'
import React from 'react'

export default function Training10() {
  return (
    <>
      <Training10Section />
    </>
  )
}

Training10.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
