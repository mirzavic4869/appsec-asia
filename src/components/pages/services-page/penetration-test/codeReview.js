import React from 'react'

export default function CodeReview() {
  return (
    <div className="px-4 py-12 md:px-16 lg:px-20 bg-contact">
      <div className="mx-auto max-w-7xl">
        {/* Description */}
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">Code Review</h2>
        <h4 className="mb-4 text-lg font-semibold md:text-xl text-secondary">
          What is Code Review?
        </h4>
        <div className="mb-6 space-y-4">
          <p>
            Security code review is an in-depth analysis of the application’s
            code aimed to detect security vulnerabilities by inspecting the
            actual code of a given system. It is used to detect security bugs,
            reveal hidden backdoors in the code and reach full coverage of a
            given system’s vulnerabilities. The test will attempt to find
            weaknesses, the source of which is insufficient secure coding
            policies, business logic flaws, internal structures and the systems
            design.
          </p>
          <p>
            Whether used to detect security bugs as a thorough alternative for a
            penetration test or as the means for detecting backdoors in the
            code, security code review is a complicated task that must be
            performed by a well experienced auditor. We provide exactly that.
          </p>
        </div>

        {/* Tujuan */}
        <h4 className="mb-4 text-lg font-semibold md:text-xl text-secondary">
          Secure Coding Best Practices
        </h4>
        <ul className="mb-6 ml-6 space-y-2 list-decimal">
          <li>User authentication</li>
          <li>Authorizations</li>
          <li>Input validation mechanisms</li>
          <li>Configuration data protection</li>
          <li>Information confidentiality</li>
          <li>Information integrity</li>
          <li>Cryptography and key management</li>
          <li>Password policy</li>
          <li>Session management</li>
          <li>System administration interface protection</li>
          <li>Secure access to databases</li>
          <li>Endpoint protection for sensitive data</li>
          <li>Runtime error management</li>
          <li>Auditing & logging</li>
        </ul>
      </div>
    </div>
  )
}
