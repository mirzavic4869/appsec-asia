import Link from 'next/link'
import React, { useState } from 'react'
import { navbarLandingPageMenu } from '../lib'
import { FaBars, FaChevronDown, FaTimes } from 'react-icons/fa'
import logo from '/public/logo-appsecasia.png'
import Image from 'next/image'

export default function HeaderLandingPage() {
  // const [active, setActive] = useState(false)
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false)
  const [isShowSubMenuServices, setIsShowSubMenuServices] = useState(false)
  const [isShowSubMenuOurProduct, setIsShowSubMenuOurProduct] = useState(false)

  const subMenuServices = [
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

  const subMenuOurProduct = [
    {
      sub_title: 'HCL Big Fix',
      url: '/our-product/hcl-bigfix',
    },
    {
      sub_title: 'AlgoSec',
      url: '/our-product/algosec',
    },
    {
      sub_title: 'AudioCodes',
      url: '/our-product/audiocodes',
    },
    {
      sub_title: 'Avaya',
      url: '/our-product/avaya',
    },
    {
      sub_title: 'Ciena',
      url: '/our-product/ciena',
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
                    item.title === 'IT Services'
                      ? setIsShowSubMenuServices(!isShowSubMenuServices)
                      : false || item.title === 'Our Product'
                        ? setIsShowSubMenuOurProduct(!isShowSubMenuOurProduct)
                        : false
                  }
                  className="flex items-center gap-2 transition-colors duration-300 hover:text-secondary hover:cursor-pointer"
                >
                  {item.title}{' '}
                  {item.title === 'IT Services' ||
                  item.title === 'Our Product' ? (
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
          {/* Sub Menu Services */}
          {isShowSubMenuServices && (
            <div
              onMouseLeave={() => setIsShowSubMenuServices(false)}
              className="absolute z-50 hidden w-56 p-6 rounded-md shadow-2xl md:block bg-slate-50 top-8 left-14"
            >
              <div className="flex flex-col gap-4">
                {subMenuServices.map(({ sub_title, url }, index) => (
                  <ul key={index}>
                    <Link target="_blank" href={url}>
                      <li className="text-sm hover:text-secondary hover:cursor-pointer">
                        {sub_title}
                      </li>
                    </Link>
                    {sub_title === 'Penetration Testing' && (
                      <ul className="ml-2">
                        {subMenuServices[3].sub_menu.map(
                          ({ sub_title, url }) => (
                            <Link target="_blank" key={url} href={url}>
                              <li className="my-1 text-xs hover:text-secondary hover:cursor-pointer">
                                {sub_title}
                              </li>
                            </Link>
                          )
                        )}
                      </ul>
                    )}
                  </ul>
                ))}
              </div>
            </div>
          )}

          {/* Sub Menu Our Product */}
          {isShowSubMenuOurProduct && (
            <div
              onMouseLeave={() => setIsShowSubMenuOurProduct(false)}
              className="absolute z-50 hidden w-56 p-6 rounded-md shadow-2xl md:block bg-slate-50 top-8 left-48"
            >
              <div className="flex flex-col gap-4">
                {subMenuOurProduct.map(({ sub_title, url }, index) => (
                  <ul key={index}>
                    <Link target="_blank" href={url}>
                      <li className="text-sm hover:text-secondary hover:cursor-pointer">
                        {sub_title}
                      </li>
                    </Link>
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
                      title === 'IT Services'
                        ? setIsShowSubMenuServices(!isShowSubMenuServices)
                        : false || title === 'Our Product'
                          ? setIsShowSubMenuOurProduct(!isShowSubMenuOurProduct)
                          : false
                    }
                    className="flex items-center gap-2 hover:text-secondary hover:cursor-pointer"
                  >
                    {title}{' '}
                    {title === 'IT Services' || title === 'Our Product' ? (
                      <span className="mt-1">
                        <FaChevronDown size={14} />
                      </span>
                    ) : (
                      ''
                    )}
                  </li>
                </Link>
                {isShowSubMenuServices && title === 'IT Services' && (
                  <div className="flex flex-col gap-3 py-4 ml-4 md:hidden">
                    {subMenuServices.map(({ sub_title, url }, index) => (
                      <ul key={index}>
                        <Link href={url}>
                          <li className="text-sm hover:text-secondary hover:cursor-pointer">
                            {sub_title}
                          </li>
                        </Link>
                        {sub_title === 'Penetration Testing' && (
                          <ul className="ml-2">
                            {subMenuServices[3].sub_menu.map(
                              ({ sub_title, url }) => (
                                <Link key={url} href={url}>
                                  <li className="my-1 text-xs hover:text-secondary hover:cursor-pointer">
                                    {sub_title}
                                  </li>
                                </Link>
                              )
                            )}
                          </ul>
                        )}
                      </ul>
                    ))}
                  </div>
                )}
                {isShowSubMenuOurProduct && title === 'Our Product' && (
                  <div className="flex flex-col gap-3 py-4 ml-4 md:hidden">
                    {subMenuOurProduct.map(({ sub_title, url }, index) => (
                      <ul key={index}>
                        <Link href={url}>
                          <li className="text-sm hover:text-secondary hover:cursor-pointer">
                            {sub_title}
                          </li>
                        </Link>
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
