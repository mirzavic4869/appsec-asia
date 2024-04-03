import React from 'react'

export default function DigitalForensicSection() {
  return (
    <div className="px-4 py-12 md:px-16 lg:px-20 bg-contact">
      <div className="mx-auto max-w-7xl">
        {/* Description */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold md:text-3xl">
            Discover, Authenticate and{' '}
            <span className="text-secondary">Analyze</span> Information from
            Electronic Devices with{' '}
            <span className="text-secondary">Digital Forensic</span>
          </h2>
        </div>
        <div className="mb-6 space-y-4">
          <p>
            During a breach, it&apos;s important to move quickly to contain the
            threat and minimize the impact by getting to the root cause.
            However, overlooking evident procedures can limit your ability to
            help legal or governmental authorities pursue the threat actor.
          </p>
          <p>
            Our Digital Forensics Investigator’s first step is to clearly
            determine the purpose and objective of the investigation in a free
            consultation. We will work with you to identify where your data is
            located. We will document the legal chain of custody of the media
            and we will make a bit by bit copy and preserve the original. The
            digital forensic analysis will examine and extract the data that can
            be viewed by the operating system, as well as data that is invisible
            to the operating system including deleted data that has not been
            overwritten.
          </p>
        </div>
      </div>
    </div>
  )
}
