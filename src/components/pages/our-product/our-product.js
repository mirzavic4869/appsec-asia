import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

export default function OurProduct() {
  const dataFamily = [
    {
      title: 'Lifecycle',
      desc: 'Reduce the cost, risk, and complexity of managing cloud, server, desktop, laptop, point-of-sale and other endpoints – all using a single, intelligent agent',
    },
    {
      title: 'Compliance',
      desc: 'Continuously monitor and enforce endpoint security configurations to ensure compliance with regulatory or organizational security policies using out-of-the-box compliance checklists.',
    },
    {
      title: 'Inventory',
      desc: 'Maintain software audit readiness and improve security with asset inventory and software usage analysis.',
    },
    {
      title: 'Insights',
      desc: 'Accelerate risk identification and decision-making with consolidated views of all endpoint data, rich reporting, and integration with your existing Business Intelligence tools',
    },
    {
      title: 'Modern Client Management',
      desc: 'Future proof management of your modern endpoints. Reduce cost and complexity while managing Windows 10 and MacOS endpoints with simple enrollment and policy management.',
    },
  ]
  return (
    <div className="px-4 py-12 md:px-16 lg:px-20 bg-contact">
      <div className="mx-auto max-w-7xl">
        {/* Description */}
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">
          HCL BigFix – Endpoint Management Platform
        </h2>
        <h4 className="mb-4 text-lg font-semibold md:text-xl text-secondary">
          What is HCL BigFix Endpoint Management Platform?
        </h4>
        <div className="mb-6 space-y-4">
          <p>
            HCL BigFix Endpoint Management automates discovery, management, and
            remediation of all endpoints whether on-premises, virtual, or in the
            cloud – regardless of operating system, location, or connectivity.
          </p>
          <p>
            The HCL BigFix endpoint management platform gives IT Operations
            teams the power of Continuous Compliance and Intelligent Automation
            to manage over 100 operating system versions, enabling streamlined
            management processes, tool consolidation and reduced operating
            costs.
          </p>
          <p>
            Unlike complex tools that cover a limited portion of your endpoints,
            BigFix’s unified architecture can effectively manage and ensure
            compliance of all your servers, desktops, and mobile devices whether
            they are in the office, at home or in the cloud. BigFix can find and
            fix endpoints faster than any other solution – delivering greater
            than 98% first-pass patch success rates.
          </p>
          <p>
            BigFix integrates with leading vulnerability management solutions
            like Tenable and Qualys to dramatically reduce the time it takes to
            remediate vulnerabilities by an order of magnitude. It also extends
            its well-established endpoint management capabilities to AWS, Azure,
            and Google clouds, enabling organizations to use a single solution
            to manage multiple clouds and on-premises in a consistent manner.
          </p>
          <p>
            BigFix’s unique approach, coupled with thousands of out-of-the-box
            security checks, enhance your security posture and automate the
            fight against ransomware and other cyberattacks.
          </p>
        </div>

        {/* Family */}
        <h4 className="mb-4 text-lg font-semibold md:text-xl text-secondary">
          HCL BigFix Endpoint Management Product Family
        </h4>
        <div className="space-y-3">
          {dataFamily.map(({ title, desc }, index) => (
            <div key={index} className="flex gap-4">
              <div className="mt-1">
                <FaCheckCircle color="#4360E5" />
              </div>
              <div>
                <h5 className="mb-1 font-bold">{title}</h5>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
