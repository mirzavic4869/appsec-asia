import React from 'react'

export default function Blackbox() {
  return (
    <div className="px-4 py-12 md:px-16 lg:px-20 bg-contact">
      <div className="mx-auto max-w-7xl">
        {/* Description */}
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">
          Black Box Penetration Testing
        </h2>
        <h4 className="mb-4 text-lg font-semibold md:text-xl text-secondary">
          What is Black Box Testing?
        </h4>
        <div className="mb-6 space-y-4">
          <p>
            Black box testing is the process of simulating a skilled attack,
            using the techniques and tools aimed to detect security
            vulnerabilities and exploit them.
          </p>
          <p>
            Our experts will simulate a real attack on the application. The
            testing process covers a wide range of application-level
            vulnerabilities as defined by OWASP and WASC, targeting potentially
            harmful vulnerabilities in your application.
          </p>
          <p>
            The testing process will reveal the vulnerabilities, potential
            exploitation damage and severity
          </p>
          <p>
            The detailed report you receive will include recommendations that
            will assist you in securing your systems and protecting your
            companies’ assets and integrity.
          </p>
        </div>

        {/* Tujuan */}
        <h4 className="mb-4 text-lg font-semibold md:text-xl text-secondary">
          Vulnerabilities Covered
        </h4>
        <ul className="mb-6 ml-6 space-y-2 list-decimal">
          <li>SQL Injection – taking control over the database</li>
          <li>
            Hidden Backdoors – used by attackers to easily infiltrate the system
            over and over
          </li>
          <li>
            Cross-site Scripting – injecting malicious code to innocent user
            browsers
          </li>
          <li>
            Cross-site Request Forgery – impersonating an innocent user and
            performing actions in his name
          </li>
          <li>
            Bypassing Authentication – taking over user and administrator
            accounts
          </li>
          <li>
            Authorization Breaches – performing unauthorized actions and
            accessing unauthorized information
          </li>
          <li>Open Redirects – an open door to phishing attacks and scams</li>
          <li>
            Command Injection – injecting commands to a remote server and taking
            over
          </li>
          <li>
            Forceful Browsing – bypassing restrictions and performing
            unauthorized actions
          </li>
          <li>
            Bypassing Business-Logic Restrictions – performing
            application-specific actions that are not authorized by the
            company’s regulations
          </li>
          <li>
            LFI/RFI – injecting malicious code to a vulnerable application
          </li>
          <li>
            Denial of Service – making the application unavailable to remote
            users
          </li>
        </ul>
      </div>
    </div>
  )
}
