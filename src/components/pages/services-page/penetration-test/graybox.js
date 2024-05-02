import React from 'react'

export default function Graybox() {
  return (
    <div className="px-4 py-12 md:px-16 lg:px-20 bg-contact">
      <div className="mx-auto max-w-7xl">
        {/* Description */}
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">
          Gray Box Penetration Testing
        </h2>
        <h4 className="mb-4 text-lg font-semibold md:text-xl text-secondary">
          What is Gray Box Testing?
        </h4>
        <div className="mb-6 space-y-4">
          <p>
            Using automatic and manual tools aimed to audit a full,
            comprehensive Black Box test, the auditor has another tool which is
            accessing the system’s internal structures and code. Gray Box is a
            Black Box test, whereby an auditor simulates a real, skilled
            attacker, combined with a White Box test, where a highly experienced
            auditor tests for insecure code which can put the application in
            jeopardy.
          </p>
          <p>
            A Gray Box test provides a full system inspection, from both the
            developer’s perspective and a real malicious hacker’s perspective.
            It provides full coverage of a wide variety of vulnerabilities and
            enumerating all potential risks to a given system.
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
