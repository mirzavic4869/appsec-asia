import { LayoutLandingPage } from '@/components/layouts'
import { CodeReview } from '@/components/pages/services-page/penetration-test'
import React from 'react'

export default function CodeReviewMenu() {
  return (
    <>
      <CodeReview />
    </>
  )
}

CodeReviewMenu.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
