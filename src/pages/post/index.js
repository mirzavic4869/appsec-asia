import { LayoutLandingPage } from '@/components/layouts'
import { PostArticle } from '@/components/pages/post-page'

import React from 'react'

export default function Post() {
  return (
    <>
      <PostArticle />
    </>
  )
}

Post.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
