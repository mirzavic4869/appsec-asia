import { LayoutLandingPage } from '@/components/layouts'
import {
  HeroSection,
  ListTrainingSection,
} from '@/components/pages/trainings-page'
import React from 'react'

export default function Trainings() {
  return (
    <>
      <HeroSection />
      <ListTrainingSection />
    </>
  )
}

Trainings.getLayout = function getLayout(page) {
  return <LayoutLandingPage>{page}</LayoutLandingPage>
}
