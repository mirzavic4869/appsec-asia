import { LayoutLandingPage } from '@/components/layouts'
import { Training13Section } from '@/components/pages/trainings-page/detail-training'
import React from 'react'

export default function Training13() {
  return (
    <>
      <Training13Section />
    </>
  )
}

Training13.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
