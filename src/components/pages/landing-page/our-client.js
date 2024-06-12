import Image from 'next/image'

export default function OurClientSection() {
  return (
    <div id="#our-client" className="w-full px-6 py-16 md:px-8 lg:px-12">
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="md:mb-8 mb-4 text-2xl font-bold md:text-3xl">
          Our <span className="text-secondary">Clients</span>
        </h2>
        <div className="flex justify-center gap-8 md:gap-16">
          <Image
            src="/cnaf.png"
            alt="CNAF logo"
            width={204}
            height={192}
            className="w-40"
          />
          <Image
            src="/icon-plus.png"
            alt="Iconplus logo"
            width={205}
            height={148}
            className="w-40"
          />
        </div>
      </div>
    </div>
  )
}
