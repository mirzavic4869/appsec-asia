import { Button } from '@/components/button'
import { owaspTrainingData } from '@/components/lib'
import Link from 'next/link'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

export default function Training2Section() {
  return (
    <div className="px-4 py-12 md:px-16 lg:px-20 bg-contact">
      <div className="mx-auto max-w-7xl">
        {/* Description */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold md:text-3xl">Description</h2>
          <p>
            <span className="text-secondary">Vendor:</span> OWASP
          </p>
        </div>
        <p className="mb-6">
          In order to protect your web applications, you need to understand how
          hackers will attack them. This 2-days course combines theory and
          hands-on practical exercises which will allow participants to learn
          about common web vulnerabilities such as the ones described in the
          OWASP Top 10. Participants are given access to a purpose-built web
          application that contains vulnerabilities discussed during the course
          and are asked to exploit them using different open source tools and
          techniques.
        </p>
        {/* List */}
        <div className="grid gap-4 md:grid-cols-2">
          {owaspTrainingData.map(({ title, url }, index) => (
            <Link key={index} href={url} className="flex items-center gap-4">
              <FaCheckCircle color="#4360E5" />
              <p className="hover:cursor-pointer hover:text-secondary">
                {title}
              </p>
            </Link>
          ))}
        </div>
        <div className="h-[0.5px] w-full bg-[#e2e2e2] my-6 md:my-8"></div>
        {/* Price */}
        <div className="flex items-center justify-between">
          <h4 className="mb-4 text-lg font-semibold">Price</h4>
          <Button>Rp 9.000.000</Button>
        </div>
      </div>
    </div>
  )
}
