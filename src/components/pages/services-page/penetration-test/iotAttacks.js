import { iotAttacksData } from '@/components/lib/iot-attacks'
import React from 'react'

export default function IotAttacks() {
  return (
    <div className="px-4 py-12 md:px-16 lg:px-20 bg-contact">
      <div className="mx-auto max-w-7xl">
        {/* Description */}
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">
          List of IoT (Connected Device) Attacks and Tests Performed During
          Penetration Testing
        </h2>
        <h4 className="mb-4 text-lg font-semibold md:text-xl text-secondary">
          Connected/Smart Device Attacks and Tests
        </h4>
        {/* Table */}
        <div className="flex flex-col mb-6">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table className="min-w-full text-sm font-light text-left text-surface">
                  <thead className="font-medium border-b border-neutral-200 bg-[#f2f5fb]">
                    <tr>
                      <th scope="col" className="px-6 py-4 text-left uppercase">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-4 text-left uppercase">
                        Test Name
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {iotAttacksData.map(({ category, test }, index) => (
                      <tr
                        className="border-b even:bg-[#f2f5fb] odd:bg-white border-neutral-200"
                        key={index}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          {category}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {test.map(({ text }) => (
                            <p className="my-2" key={text}>
                              {text}
                            </p>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
