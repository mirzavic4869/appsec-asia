import Image from 'next/image'
import photo from '../../../assets/images/photo.png'
import people from '../../../assets/images/people.png'
import React, { useEffect, useState } from 'react'
import { testimonailData } from '@/components/lib'
import { randomCard } from '@/components/lib'

export default function TestimonySection() {
  const [displayCard, setDisplayCard] = useState([])

  useEffect(() => {
    const shuffledCards = randomCard(testimonailData)
    const selectedCards = shuffledCards.slice(0, 1)
    setDisplayCard(selectedCards)
  }, [])
  return (
    <div className="px-4 py-12 md:px-16 lg:px-20">
      <div className="grid items-center mx-auto md:grid-cols-2 max-w-7xl">
        {/* Costumer say */}
        {displayCard.map((item, index) => (
          <div key={index} className="lg:w-[24rem] md:w-[18rem]">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              What Our Customer Say{' '}
              <span className="text-secondary">About Us</span>
            </h2>
            <p className="mb-6 text-sm">{item.message}</p>
            <div>
              <div className="flex flex-row items-center gap-4">
                <Image
                  className="rounded-full"
                  src={photo}
                  alt="Photo"
                  width={60}
                  height={60}
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm">{item.designation}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* People */}
        <div className="hidden md:flex md:justify-start">
          <Image src={people} alt='"People' className="md:w-[48rem]" />
        </div>
      </div>
    </div>
  )
}
