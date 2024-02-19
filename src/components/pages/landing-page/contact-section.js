import { Button } from '@/components/button'
import { FaWhatsapp } from 'react-icons/fa'

export default function ContactUsSection() {
  return (
    <div className="w-full px-6 py-16 md:px-8 lg:px-12 bg-contact">
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">
          <span className="text-secondary">Contact</span> Us
        </h2>
        <p className="mx-auto mt-4 mb-8 md:w-3/4">
          To make request for further information, contact us via our phone or
          email. We just need a couple of hours! No more than 2 working days
          since receiving your issue ticket.
        </p>
        <div className="flex justify-center gap-6">
          <button className="flex items-center gap-2 px-6 py-2 font-semibold transition-all duration-300 ease-out text-white bg-gradient-to-r text-sm from-[#2BD769] to-[#075E54] hover:bg-green-900 rounded-md">
            <FaWhatsapp /> Whatsapp
          </button>
          <Button classAdd="flex items-center">
            <FaWhatsapp /> Email
          </Button>
        </div>
      </div>
    </div>
  )
}
