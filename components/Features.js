import React from 'react'

export const Features = () => {
  const features = [
    {
      'Affordable': [true, false, true, true],
    },
    {
      'Always Available': [false, true, false, true],
    },
    {
      'World-class Talent': [true, true, true, true],
    },
    {
      'High Quality Standards': [false, false, true, true],
    },
    {
      'Consistent': [true, true, false, true],
    },
    {
      'Unlimited Revisions': [true, false, true, true],
    },
    {
      'Full Ownership': [false, true, false, true],
    },
    {
      'Scalable': [false, false, true, true],
    },
  ];
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">Stack The House In Your Favour</p>
        </div>

        <div className='relative'>
          <div className='absolute right-0 -translate-x-full -translate-y-full'>
            <svg width="81" height="83" viewBox="0 0 81 83" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.00791 58.2616C5.52439 63.1714 7.63548 68.9915 11.1635 73.852C11.7615 74.6763 13.0449 77.7889 14.0768 78.1378M14.0768 78.1378C15.4169 78.5901 17.4315 75.4011 17.9225 74.6703C20.3982 70.9854 24.6563 64.52 26.9097 60.2263M14.0768 78.1378C12.3884 61.7665 23.6031 38.2932 38.5594 37.8001M38.5594 37.8001C42.5192 37.6695 46.7411 39.1497 51.0554 42.7988C59.2123 49.6987 49.0447 59.7203 41.385 53.5636C37.1564 50.164 37.3071 43.2796 38.5594 37.8001ZM38.5594 37.8001C38.9191 36.2262 39.3697 34.7683 39.8334 33.5421C45.5832 18.3399 63.2746 7.02737 79.2105 6.68271" stroke="#2EC57C" strokeWidth="2.26385" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

          </div>
          <div className="mt-20 overflow-scroll lg:overflow-hidden">
            <table className="rounded-2xl shadow-lg overflow-hidden mx-auto mb-10">
              <thead>
                <tr className="bg-slate-700 text-white divide-x-2 divide-white/5">
                  <th scope="col" className='px-4 py-4 md:px-12 md:py-6 text-lg font-normal'>Features</th>
                  <th scope="col" className='px-4 py-4 md:px-12 md:py-6 text-lg font-normal'>Marketplace</th>
                  <th scope="col" className='px-4 py-4 md:px-12 md:py-6 text-lg font-normal'>In-House Team</th>
                  <th scope="col" className='px-4 py-4 md:px-12 md:py-6 text-lg font-normal'>Agencies</th>
                  <th scope="col" className='px-4 py-4 md:px-12 md:py-6 text-lg font-normal bg-blue-600'>Unik Creatives</th>
                </tr>
              </thead>
              <tbody>
                {
                  features.map(feature => {
                    for (let feature_name in feature) {
                      return (
                        <tr className="odd:bg-white even:bg-blue-50/50 divide-x-2 divide-blue-50/100" key={feature_name}>
                          <th scope="row" className='text-slate-600 px-4 py-4 md:px-12 md:py-6 font-semibold'>{feature_name}</th>
                          {
                            feature[feature_name].map((value, index) => {
                              if (value) {
                                return (
                                  <td className='px-4 py-4 md:px-12 md:py-6' key={index}>
                                    <div className='flex justify-center items-center'>
                                      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        {/* Red tick for index 0, 1, 2 */}
                                        {/* Green tick for index 3 */}
                                        <circle cx="9.48703" cy="9.34531" r="9.20761" fill={`#${(index == 3) ? '2EC57C' : 'CD3A3D'}`} />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.6237 6.58033L13.5287 5.48535L7.99963 11.0145L5.44544 8.46026L4.35046 9.55524L7.99963 13.2044L14.6237 6.58033Z" fill="white" />
                                      </svg>
                                    </div>
                                  </td>
                                )
                              } else {
                                return <td key={index}></td>;
                              }
                            })
                          }
                        </tr>
                      )
                    }
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  )
}
