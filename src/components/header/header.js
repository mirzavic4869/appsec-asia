import Link from 'next/link'
import React, { useState } from 'react'
import { navbarLandingPageMenu } from '../lib'
import { FaBars, FaChevronDown, FaTimes } from 'react-icons/fa'
import logo from '/public/logo-appsecasia.png'
import Image from 'next/image'

export default function HeaderLandingPage() {
  // const [active, setActive] = useState(false)
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false)
  const [isShowSubMenu, setIsShowSubMenu] = useState(false)

  const subMenu = [
    {
      sub_title: 'Web and Mobile App Development',
      url: '/services/web-dev',
    },
    {
      sub_title: 'SDLC Consulting',
      url: '/services/sdlc-consulting',
    },
    {
      sub_title: 'Digital Forensic Investigation',
      url: '/services/digital-forensic',
    },
    {
      sub_title: 'Penetration Testing',
      url: '/services/penetration-testing',
      sub_menu: [
        {
          sub_title: 'Black Box',
          url: '/services/penetration-testing/blackbox',
        },
        {
          sub_title: 'Gray Box',
          url: '/services/penetration-testing/graybox',
        },
        {
          sub_title: 'Code Review',
          url: '/services/penetration-testing/code-review',
        },
        {
          sub_title: 'Web Attacks & Tests',
          url: '/services/penetration-testing/web-attacks-tests',
        },
        {
          sub_title: 'Iot Attacks & Tests',
          url: '/services/penetration-testing/iot-attacks-tests',
        },
      ],
    },
  ]
  return (
    <nav className="sticky top-0 z-40 p-4 bg-white shadow-sm md:px-16 lg:px-20">
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

        <div className="relative flex-row items-center hidden gap-8 md:flex">
          {navbarLandingPageMenu.map((item, index) => (
            <ul key={index}>
              <Link href={item.url}>
                <li
                  onMouseOver={() =>
                    setIsShowSubMenu(
                      item.title === 'IT Services' ? !isShowSubMenu : false
                    )
                  }
                  className="flex items-center gap-2 transition-colors duration-300 hover:text-secondary hover:cursor-pointer"
                >
                  {item.title}{' '}
                  {item.title === 'IT Services' ? (
                    <span className="mt-1">
                      <FaChevronDown size={14} />
                    </span>
                  ) : (
                    ''
                  )}
                </li>{' '}
              </Link>
            </ul>
          ))}
          {/* Sub Menu */}
          {isShowSubMenu && (
            <div
              onMouseLeave={() => setIsShowSubMenu(false)}
              className="absolute z-50 hidden w-56 p-6 rounded-md shadow-2xl md:block bg-slate-50 top-8 left-14"
            >
              <div className="flex flex-col gap-4">
                {subMenu.map(({ sub_title, url }, index) => (
                  <ul key={index}>
                    <Link href={url}>
                      <li className="text-sm hover:text-secondary hover:cursor-pointer">
                        {sub_title}
                      </li>
                    </Link>
                    {sub_title === 'Penetration Testing' && (
                      <ul className="ml-2">
                        {subMenu[3].sub_menu.map(({ sub_title, url }) => (
                          <Link key={url} href={url}>
                            <li className="my-1 text-xs hover:text-secondary hover:cursor-pointer">
                              {sub_title}
                            </li>
                          </Link>
                        ))}
                      </ul>
                    )}
                  </ul>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isShowMobileMenu && (
        <div className="py-6 -z-10 md:hidden">
          <div className="flex flex-col gap-4">
            {navbarLandingPageMenu.map(({ title, url }, index) => (
              <ul key={index}>
                <Link href={url}>
                  <li
                    onClick={() =>
                      setIsShowSubMenu(
                        title === 'IT Services' ? !isShowSubMenu : false
                      )
                    }
                    className="flex items-center gap-2 hover:text-secondary hover:cursor-pointer"
                  >
                    {title}{' '}
                    {title === 'IT Services' ? (
                      <span className="mt-1">
                        <FaChevronDown size={14} />
                      </span>
                    ) : (
                      ''
                    )}
                  </li>
                </Link>
                {isShowSubMenu && title === 'IT Services' && (
                  <div className="flex flex-col gap-3 py-4 ml-4 md:hidden">
                    {subMenu.map(({ sub_title, url }, index) => (
                      <ul key={index}>
                        <Link href={url}>
                          <li className="text-sm hover:text-secondary hover:cursor-pointer">
                            {sub_title}
                          </li>
                        </Link>
                        {sub_title === 'Penetration Testing' && (
                          <ul className="ml-2">
                            {subMenu[3].sub_menu.map(({ sub_title, url }) => (
                              <Link key={url} href={url}>
                                <li className="my-1 text-xs hover:text-secondary hover:cursor-pointer">
                                  {sub_title}
                                </li>
                              </Link>
                            ))}
                          </ul>
                        )}
                      </ul>
                    ))}
                  </div>
                )}
              </ul>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
