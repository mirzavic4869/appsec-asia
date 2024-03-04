import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { footerMenu } from '../lib'
import logo from '@/assets/images/logo-appsecasia-white.png'
import Image from 'next/image'

export default function FooterLandingPage() {
  return (
    <footer className="px-4 py-6 md:py-12 bg-secondary md:px-8 lg:px-12">
      <div className="flex flex-col justify-between gap-6 mx-auto md:flex-row max-w-7xl">
        <div className="flex flex-col md:justify-between">
          <Link href={'/'} className="mb-8">
            <Image src={logo} alt="Logo Appsecasia" width={180} />
          </Link>
          {/* Location */}
          <p className="text-white md:w-[16rem] lg:w-[24rem]">
            Graha Pena 9 th floor Jl. Raya Kby. Lama No.903, Grogol Utara, Kec.
            Kby. Lama, Kota Jakarta Selatan, DKI Jakarta 12210
          </p>
        </div>
        <div className="flex flex-row items-start gap-8 md:gap-12 lg:gap-24">
          {footerMenu.map((item, index) => (
            <div key={index}>
              <p className="text-lg font-semibold text-white">{item.title}</p>
              {item.sub_menu.map((subitem, i) => (
                <Link href={subitem.url} key={i}>
                  <p className="my-2 text-sm text-white hover:text-blue-400 hover:cursor-pointer">
                    {subitem.sub_title}
                  </p>
                </Link>
              ))}
            </div>
          ))}
        </div>
        {/* Socmed */}
        <div className="flex flex-row items-start gap-4 mb-4 md:mb-8">
          <FaFacebook color="#ffffff" size={24} />
          <FaTwitter color="#ffffff" size={24} />
          <FaInstagram color="#ffffff" size={24} />
        </div>
      </div>
      <div className="h-[0.5px] bg-white w-full my-6 md:my-8 lg:my-12"></div>
      {/* Copyright */}
      <div className="text-center">
        <p className="mb-6 font-medium text-white md:mb-0">
          Copyright © {new Date().getFullYear()} PT Aplikasi Siber Teknologi
        </p>
      </div>
    </footer>
  )
}
