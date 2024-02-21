import Link from 'next/link'
import React from 'react'
import { navbarLandingPageMenu } from '../lib'

export default function HeaderLandingPage() {
  return (
    <nav className="sticky top-0 z-50 p-4 bg-white shadow-sm md:px-16 lg:px-20">
      <div className="flex flex-row items-center justify-between mx-auto max-w-7xl">
        <Link href={'/'}>
          <strong>appsec.asia</strong>
        </Link>
        <div className="flex-row items-center hidden gap-8 md:flex">
          {navbarLandingPageMenu.map(({ title, url }, index) => (
            <ul key={index}>
              <Link href={url}>
                <li className="hover:text-secondary hover:cursor-pointer">
                  {title}
                </li>
              </Link>
            </ul>
          ))}
        </div>
      </div>
    </nav>
  )
}
