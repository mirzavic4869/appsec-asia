import { optionSolutions, ourProductsData } from '@/components/lib'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function OurProducts() {
  const [selectedMenu, setSelectedMenu] = useState('Choose Solution...')

  const handleSelectedMenu = (e) => {
    setSelectedMenu(e.target.value)
  }

  const filteredProducts = ourProductsData.filter(({ solution }) =>
    solution?.includes(selectedMenu)
  )

  return (
    <div className="px-4 py-12 md:px-16 lg:px-20 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-center mb-12">
          <select
            onChange={handleSelectedMenu}
            className="px-4 md:w-1/3 w-full py-2 border border-solid rounded-md border-[#e2e2e2] focus:border-secondary focus:ring-secondary"
          >
            {optionSolutions.map(({ title }, index) => (
              <option key={index} value={title}>
                {title}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map(({ image, url, title, desc }, index) => (
            <Link
              key={index}
              href={url}
              target="_blank"
              className="flex items-center justify-center w-full p-4 transition-all duration-300 ease-in-out bg-white shadow-lg group h-60 lg:w-60 lg:h-60 md:w-40 md:h-40 rounded-tl-3xl rounded-br-3xl hover:shadow-xl hover:bg-secondary hover:text-white"
            >
              <Image
                src={image}
                alt={title}
                width={300}
                height={120}
                className="w-40 transition-all duration-300 ease-in-out group-hover:hidden"
              />
              <div className="hidden group-hover:flex group-hover:flex-col">
                <h3 className="mb-4 text-xl font-semibold">{title}</h3>
                <p className="text-xs leading-loose">
                  {desc.substring(0, 200)}...
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
