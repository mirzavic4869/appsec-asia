import Link from 'next/link'
import React, { useState } from 'react'
import { navbarLandingPageMenu } from '../lib'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../assets/images/logo-appsecasia.png'
import Image from 'next/image'

export default function HeaderLandingPage() {
  // const [active, setActive] = useState(false)
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false)
  return (
    <nav className="sticky top-0 z-50 p-4 bg-white shadow-sm md:px-16 lg:px-20">
      <div className="flex flex-row items-center justify-between mx-auto max-w-7xl">
        <Link href={'/'}>
          <Image src={logo} alt="Logo Appsecasia" width={120} />
        </Link>
        {!isShowMobileMenu ? (
          <FaBars
            onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
            className="md:hidden hover:cursor-pointer hover:text-secondary"
          />
        ) : (
          <FaTimes
            onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
            className="md:hidden hover:cursor-pointer hover:text-secondary"
          />
        )}

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

      {/* Mobile Menu */}
      {isShowMobileMenu && (
        <div className="py-6 -z-10 md:hidden">
          <div className="flex flex-col gap-4">
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
      )}
    </nav>
  )
}
