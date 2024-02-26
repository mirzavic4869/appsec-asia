import React from 'react'

export default function WebDevSection() {
  return (
    <div className="px-4 py-12 md:px-16 lg:px-20 bg-contact">
      <div className="mx-auto max-w-7xl">
        {/* Description */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold md:text-3xl">
            Spectacular Mobile and Web Apps that{' '}
            <span className="text-secondary">Transform Your Digital Brand</span>
          </h2>
        </div>
        <div className="mb-6 space-y-4">
          <p>
            We create web and mobile apps using Agile methodology to ensure that
            your business gets the competitive edge it deserves. Wow your
            customers with custom-made, high performance apps that they can
            leverage for their business.
          </p>
          <p>
            Our app developers will transform your idea into customer satisfying
            and action-driven web and mobile apps.
          </p>
        </div>
      </div>
    </div>
  )
}
