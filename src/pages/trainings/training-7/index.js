import { LayoutLandingPage } from '@/components/layouts'
import { Training7Section } from '@/components/pages/trainings-page/detail-training'
import React from 'react'

export default function Training7() {
  return (
    <>
      <Training7Section />
    </>
  )
}

Training7.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
