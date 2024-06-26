import Image from 'next/image'
import photo from '/public/card-service2.png'
import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { listTrainingData } from '@/components/lib'
import { ButtonOutline2 } from '@/components/button'
import Link from 'next/link'
import { randomCard } from '@/components/lib'

export default function TrainingsSection() {
  const [displayCard, setDisplayCard] = useState([])

  useEffect(() => {
    const shuffledCards = randomCard(listTrainingData)
    const selectedCards = shuffledCards.slice(0, 3)
    setDisplayCard(selectedCards)
  }, [])

  return (
    <div className="px-4 py-12 md:px-16 lg:px-20 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center md:mb-16">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            <span className="text-secondary">Our Training </span>and
            Certification
          </h2>
        </div>
        {/* Card */}
        <div className="grid gap-4 mb-6 md:grid-cols-2 lg:grid-cols-3">
          {displayCard.map(({ title, desc, url }, index) => (
            <div
              key={index}
              className="max-w-sm transition-all duration-300 ease-in-out bg-white shadow-lg rounded-t-3xl hover:shadow-xl hover:bg-secondary hover:text-white"
            >
              <Image src={photo} alt="Service" />
              <div className="p-6 ">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="my-4 text-sm">{desc}</p>
                <Link href={url}>
                  <ButtonOutline2>Read more</ButtonOutline2>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Link
          href={'/trainings'}
          className="flex flex-row items-center justify-center gap-2 text-center hover:text-secondary"
        >
          <p>Explore more</p>
          <i>
            <FaArrowRight />
          </i>
        </Link>
      </div>
    </div>
  )
}
