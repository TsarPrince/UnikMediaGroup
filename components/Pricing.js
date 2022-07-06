import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Pricing = () => {

  const [active, setActive] = useState('monthly-plans');

  const monthlyPlans = [
    {
      title: 'Monthly Plan #1',
      description: 'Limitless possibilites',
      services: [
        'Graphic Design',
        'Logo Design',
        'Image Ads (Max 8 per month)'
      ],
      features: [
        '1-2 day turnaround*',
        'Collaboration Tool'
      ],
      price: 399
    },
    {
      title: 'Monthly Plan #2',
      description: 'Limitless possibilites',
      services: [
        'Graphic Design',
        'Logo Design',
        'Image Ads (Max 8 per month)',
        'Video Ads (Max 5 per month)'
      ],
      features: [
        'Same-day turnaround*',
        'Collaboration Tool',
        'Priority Support'
      ],
      price: 799
    },
    {
      title: 'Monthly Plan #3',
      description: 'Limitless possibilites',
      services: [
        'Graphic Design',
        'Logo Design',
        'Image Ads (Max 8 per month)',
        'Video Ads (Max 5 per month)',
        'Website and Landing Page Design'
      ],
      features: [
        'Same-day turnaround*',
        'Collaboration Tool',
        'Priority Support',
        'Designated Designer',
        'Dedicated Account Manager'
      ],
      price: 1599
    },
  ];

  const btnActiveStyles = 'bg-blue-600 text-white hover:bg-blue-700';
  const btnInactiveStyles = 'bg-white text-black hover:bg-slate-100';

  return (
    <div id='pricing' className="py-12 bg-white" >
      <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
        
        {/* Pricing header */}
        <div className='flex flex-col items-center text-center space-y-8'>

          <div className='flex space-x-4'>
            <p className="text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">Service Pricing</p>
            <svg width="40" height="43" viewBox="0 0 40 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.9009 37.9708L23.8992 37.9725C23.8817 37.99 23.866 38.0047 23.852 38.017C23.8355 37.9983 23.8157 37.9767 23.7931 37.9541L2.85785 17.0189V8.68929L4.04021 7.50693C4.59915 8.01361 5.16343 8.50289 5.70303 8.93471C5.65215 9.20572 5.62505 9.48561 5.62505 9.77186C5.62505 12.2838 7.66471 14.3235 10.1767 14.3235C12.6886 14.3235 14.7283 12.2838 14.7283 9.77186C14.7283 7.25718 12.6945 5.21593 10.1767 5.21593C9.72588 5.21593 9.29163 5.28242 8.88164 5.40502C8.51902 4.90151 8.11575 4.3797 7.6935 3.85797L9.55601 1.99546L17.6132 1.7601L38.6048 22.7517C38.6436 22.7905 38.6512 22.8151 38.6555 22.8352C38.6622 22.8666 38.6652 22.9234 38.6474 23.0109C38.6192 23.1493 38.5571 23.2798 38.5155 23.3562L23.9009 37.9708ZM23.7699 38.0759C23.7698 38.0759 23.7703 38.0757 23.7713 38.0753L23.7699 38.0759ZM17.3912 1.53808L17.3917 1.53854C17.3915 1.53839 17.3914 1.53823 17.3912 1.53808L17.8942 1.03512L17.3912 1.53808ZM38.5911 23.2806L38.5902 23.2815L38.5911 23.2806Z" stroke="#2F55D4" strokeWidth="2" />
              <path d="M1.77018 1.0221C3.38801 2.72811 4.82571 4.37621 5.93172 5.76268C4.38098 4.36583 2.65287 2.63451 1.33491 1.23467C1.32671 1.15267 1.32721 1.09157 1.33101 1.04888C1.40479 1.02871 1.50769 1.01685 1.62426 1.01685C1.67417 1.01685 1.72325 1.01884 1.77018 1.0221ZM1.27546 1.06856C1.27437 1.06924 1.27378 1.06955 1.27376 1.06954C1.27373 1.06952 1.27428 1.06918 1.27546 1.06856Z" stroke="#2F55D4" strokeWidth="2" />
              <path d="M18.966 38.7341C15.8263 39.985 13.009 41.1074 12.3863 41.3554L6.24476 25.9267L18.966 38.7341ZM12.3335 41.4396C12.3338 41.4397 12.3341 41.4399 12.3344 41.44C12.3649 41.4538 12.3895 41.4704 12.4078 41.4857C12.4255 41.5005 12.4364 41.5133 12.442 41.5204C12.4473 41.5273 12.4495 41.5314 12.4497 41.5318L12.4497 41.5318C12.4497 41.5318 12.4497 41.5318 12.4497 41.5318C12.45 41.5325 12.4512 41.5356 12.4532 41.5425L12.4532 41.5425L12.3335 41.4396Z" stroke="#2F55D4" strokeWidth="2" />
            </svg>
          </div>
          <p className="max-w-2xl text-xl text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue suscipit nulla ut interdum. Praesent eu lacinia ante.</p>
        </div>

        {/* Grid */}
        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 sm:gap-y-10">

          <div className='md:col-span-1'>
            <div className='border rounded-md shadow-md px-12 py-16 space-y-2'>
              
              <button className={`w-full flex justify-between items-center rounded-md px-4 py-4 cursor-pointer ${(active == 'monthly-plans') ? btnActiveStyles : btnInactiveStyles}`} onClick={() => {setActive('monthly-plans')}}>
                <div className='flex space-x-4'>
                  <svg width="20" height="24" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.97235 0.293579H18.3496C19.2452 0.293579 19.9712 1.09215 19.9712 2.07725V12.7792C19.9712 13.7643 19.2452 14.5629 18.3496 14.5629H1.97235C1.07681 14.5629 0.35083 13.7643 0.35083 12.7792V2.07725C0.35083 1.09215 1.07681 0.293579 1.97235 0.293579ZM2.13448 6.53647V12.7793H18.1875V6.53647H2.13448ZM2.13448 4.75281H18.1875V2.07734H2.13448V4.75281Z" fill={(active == 'monthly-plans') ? 'white' : 'black'} />
                  </svg>
                  <p>Monthly Plans</p>
                </div>
                <div>
                  <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.97961 6.09082L0.515137 1.62635L1.38087 0.76062L6.71107 6.09082L1.38087 11.421L0.515137 10.5553L4.97961 6.09082Z" fill={(active == 'monthly-plans') ? 'white' : 'black'} />
                  </svg>
                </div>
              </button>

              <button className={`w-full flex justify-between items-center rounded-md px-4 py-4 cursor-pointer ${(active != 'monthly-plans') ? btnActiveStyles : btnInactiveStyles}`} onClick={() => {setActive('single-projects')}}>
                <div className='flex space-x-4'>
                  <svg width="20" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.7994 0.771625C12.7034 0.513342 13.6456 1.03679 13.9039 1.94078C13.9473 2.09287 13.9694 2.25027 13.9694 2.40845L13.9694 3.83354H15.6717C16.6119 3.83354 17.374 4.59569 17.374 5.53586V15.7498C17.374 16.6899 16.6119 17.4521 15.6717 17.4521H2.05315C1.11298 17.4521 0.35083 16.6899 0.35083 15.7498H0.373562C0.35845 15.6582 0.35083 15.5655 0.35083 15.4725V5.32671C0.35083 4.56666 0.854678 3.89869 1.58549 3.68989L11.7994 0.771625ZM7.27926 15.7498H15.6717V5.53586H13.9694L13.9694 7.23818H15.6717V8.9405H13.9694V12.5543C13.9694 13.3143 13.4655 13.9823 12.7347 14.1911L7.27926 15.7498ZM2.05315 5.32669V15.4725L12.2671 12.5542V2.40842L2.05315 5.32669ZM10.5649 7.238C10.5649 7.70808 10.1838 8.08916 9.71371 8.08916C9.24363 8.08916 8.86255 7.70808 8.86255 7.238C8.86255 6.76792 9.24363 6.38684 9.71371 6.38684C10.1838 6.38684 10.5649 6.76792 10.5649 7.238Z" fill={(active != 'monthly-plans') ? 'white' : 'black'} />
                  </svg>
                  <p>Single Projects</p>
                </div>
                <div>
                  <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.97961 6.09082L0.515137 1.62635L1.38087 0.76062L6.71107 6.09082L1.38087 11.421L0.515137 10.5553L4.97961 6.09082Z" fill={(active != 'monthly-plans') ? 'white' : 'black'} />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {
            (active == 'monthly-plans') ?
              (
                <div className='md:col-span-2 space-y-8'>
                  {
                    monthlyPlans.map(plan => (
                      <div className='relative border rounded-2xl shadow-lg px-12 py-16 space-y-8' key={plan.title}>
                        <div className='space-y-2 text-center md:text-left'>
                          <p className='text-blue-600 text-3xl md:text-4xl font-bold'>{plan.title}</p>
                          <p className='text-slate-400'>{plan.description}</p>
                        </div>
                        <div className='space-y-4 md:flex md:space-x-24'>
                          <div className='space-y-4'>
                            <p className='text-2xl font-semibold'>Services</p>
                            <ul className='text-slate-500 font-medium space-y-2'>
                              {
                                plan.services.map(service => (
                                  <li key={service}>
                                    <span className='inline-block mr-4'>
                                      <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.0213 2.84733L13.1666 0.940955C13.1043 0.876927 13.0197 0.840942 12.9315 0.840942C12.8433 0.840942 12.7586 0.876927 12.6963 0.940955L4.86332 8.97498C4.801 9.03901 4.7164 9.07499 4.62817 9.07499C4.53993 9.07499 4.45533 9.03901 4.39302 8.97498L2.53839 7.0686C2.47607 7.00457 2.39147 6.96859 2.30324 6.96859C2.215 6.96859 2.1304 7.00457 2.06809 7.0686L0.213455 8.97498C0.0837963 9.10792 0.0837963 9.32341 0.213455 9.45634L4.39302 13.7409C4.45533 13.805 4.53993 13.8409 4.62817 13.8409C4.7164 13.8409 4.801 13.805 4.86332 13.7409L15.0213 3.32393C15.1479 3.19156 15.1479 2.97971 15.0213 2.84733Z" fill="#2F55D4" />
                                      </svg>
                                    </span>
                                    {service}
                                  </li>
                                ))
                              }
                            </ul>
                          </div>
                          <div className='space-y-4'>
                            <p className='text-2xl font-semibold'>Features</p>
                            <ul className='text-slate-500 font-medium space-y-2'>
                              {
                                plan.features.map(feature => (
                                  <li key={feature}>
                                    <span className='inline-block mr-4'>
                                      <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.0213 2.84733L13.1666 0.940955C13.1043 0.876927 13.0197 0.840942 12.9315 0.840942C12.8433 0.840942 12.7586 0.876927 12.6963 0.940955L4.86332 8.97498C4.801 9.03901 4.7164 9.07499 4.62817 9.07499C4.53993 9.07499 4.45533 9.03901 4.39302 8.97498L2.53839 7.0686C2.47607 7.00457 2.39147 6.96859 2.30324 6.96859C2.215 6.96859 2.1304 7.00457 2.06809 7.0686L0.213455 8.97498C0.0837963 9.10792 0.0837963 9.32341 0.213455 9.45634L4.39302 13.7409C4.45533 13.805 4.53993 13.8409 4.62817 13.8409C4.7164 13.8409 4.801 13.805 4.86332 13.7409L15.0213 3.32393C15.1479 3.19156 15.1479 2.97971 15.0213 2.84733Z" fill="#2F55D4" />
                                      </svg>
                                    </span>
                                    {feature}
                                  </li>
                                ))
                              }
                            </ul>
                          </div>
                        </div>
                        <div className='text-center lg:absolute lg:top-0 lg:right-0 lg:-translate-x-8 lg:translate-y-8'>
                          <button className='btn-rounded-full'>
                            <Link href='/'><a>Choose Plan ${plan.price}/month</a></Link>
                          </button>
                        </div>
                      </div>
                    ))
                  }
                </div>
              ) :
              (
                <div className='md:col-span-2 space-y-8'>
                  <div className='relative border rounded-2xl shadow-lg px-12 py-16 space-y-8'>
                    <div className='space-y-2 text-center md:text-left'>
                      <p className='text-blue-600 text-3xl md:text-4xl font-bold'>Single Projects</p>
                      <p className='text-slate-400'>Try it as long as you like</p>
                    </div>
                    <div className='space-y-4'>
                      <ul className='text-slate-500 font-medium space-y-2'>
                        <li>
                          <span className='inline-block mr-4'>
                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.0213 2.84733L13.1666 0.940955C13.1043 0.876927 13.0197 0.840942 12.9315 0.840942C12.8433 0.840942 12.7586 0.876927 12.6963 0.940955L4.86332 8.97498C4.801 9.03901 4.7164 9.07499 4.62817 9.07499C4.53993 9.07499 4.45533 9.03901 4.39302 8.97498L2.53839 7.0686C2.47607 7.00457 2.39147 6.96859 2.30324 6.96859C2.215 6.96859 2.1304 7.00457 2.06809 7.0686L0.213455 8.97498C0.0837963 9.10792 0.0837963 9.32341 0.213455 9.45634L4.39302 13.7409C4.45533 13.805 4.53993 13.8409 4.62817 13.8409C4.7164 13.8409 4.801 13.805 4.86332 13.7409L15.0213 3.32393C15.1479 3.19156 15.1479 2.97971 15.0213 2.84733Z" fill="#2F55D4" />
                            </svg>
                          </span>
                          Image Ads: $59
                        </li>
                        <li>
                          <span className='inline-block mr-4'>
                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.0213 2.84733L13.1666 0.940955C13.1043 0.876927 13.0197 0.840942 12.9315 0.840942C12.8433 0.840942 12.7586 0.876927 12.6963 0.940955L4.86332 8.97498C4.801 9.03901 4.7164 9.07499 4.62817 9.07499C4.53993 9.07499 4.45533 9.03901 4.39302 8.97498L2.53839 7.0686C2.47607 7.00457 2.39147 6.96859 2.30324 6.96859C2.215 6.96859 2.1304 7.00457 2.06809 7.0686L0.213455 8.97498C0.0837963 9.10792 0.0837963 9.32341 0.213455 9.45634L4.39302 13.7409C4.45533 13.805 4.53993 13.8409 4.62817 13.8409C4.7164 13.8409 4.801 13.805 4.86332 13.7409L15.0213 3.32393C15.1479 3.19156 15.1479 2.97971 15.0213 2.84733Z" fill="#2F55D4" />
                            </svg>
                          </span>
                          Video Ads: $149
                        </li>
                        <li>
                          <span className='inline-block mr-4'>
                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.0213 2.84733L13.1666 0.940955C13.1043 0.876927 13.0197 0.840942 12.9315 0.840942C12.8433 0.840942 12.7586 0.876927 12.6963 0.940955L4.86332 8.97498C4.801 9.03901 4.7164 9.07499 4.62817 9.07499C4.53993 9.07499 4.45533 9.03901 4.39302 8.97498L2.53839 7.0686C2.47607 7.00457 2.39147 6.96859 2.30324 6.96859C2.215 6.96859 2.1304 7.00457 2.06809 7.0686L0.213455 8.97498C0.0837963 9.10792 0.0837963 9.32341 0.213455 9.45634L4.39302 13.7409C4.45533 13.805 4.53993 13.8409 4.62817 13.8409C4.7164 13.8409 4.801 13.805 4.86332 13.7409L15.0213 3.32393C15.1479 3.19156 15.1479 2.97971 15.0213 2.84733Z" fill="#2F55D4" />
                            </svg>
                          </span>
                          Logos: $49
                        </li>
                        <li className='space-y-2 pb-2'>
                          <span className='inline-block mr-4'>
                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.0213 2.84733L13.1666 0.940955C13.1043 0.876927 13.0197 0.840942 12.9315 0.840942C12.8433 0.840942 12.7586 0.876927 12.6963 0.940955L4.86332 8.97498C4.801 9.03901 4.7164 9.07499 4.62817 9.07499C4.53993 9.07499 4.45533 9.03901 4.39302 8.97498L2.53839 7.0686C2.47607 7.00457 2.39147 6.96859 2.30324 6.96859C2.215 6.96859 2.1304 7.00457 2.06809 7.0686L0.213455 8.97498C0.0837963 9.10792 0.0837963 9.32341 0.213455 9.45634L4.39302 13.7409C4.45533 13.805 4.53993 13.8409 4.62817 13.8409C4.7164 13.8409 4.801 13.805 4.86332 13.7409L15.0213 3.32393C15.1479 3.19156 15.1479 2.97971 15.0213 2.84733Z" fill="#2F55D4" />
                            </svg>
                          </span>
                          Website & Landing Page Design:
                          <ul className='pl-8 space-y-2'>
                            <li>
                              <span className='inline-block mr-4'>
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <rect x="0.458252" y="0.875488" width="8.62358" height="8.62358" rx="4.31179" fill="#2F55D4" />
                                </svg>
                              </span>
                              Standard One Page Lander: Contact for Pricing
                            </li>
                            <li>
                              <span className='inline-block mr-4'>
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <rect x="0.458252" y="0.875488" width="8.62358" height="8.62358" rx="4.31179" fill="#2F55D4" />
                                </svg>
                              </span>
                              3 Page Brand Site: Contact for Pricing
                            </li>

                          </ul>
                        </li>
                        <li>
                          <span className='inline-block mr-4'>
                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.0213 2.84733L13.1666 0.940955C13.1043 0.876927 13.0197 0.840942 12.9315 0.840942C12.8433 0.840942 12.7586 0.876927 12.6963 0.940955L4.86332 8.97498C4.801 9.03901 4.7164 9.07499 4.62817 9.07499C4.53993 9.07499 4.45533 9.03901 4.39302 8.97498L2.53839 7.0686C2.47607 7.00457 2.39147 6.96859 2.30324 6.96859C2.215 6.96859 2.1304 7.00457 2.06809 7.0686L0.213455 8.97498C0.0837963 9.10792 0.0837963 9.32341 0.213455 9.45634L4.39302 13.7409C4.45533 13.805 4.53993 13.8409 4.62817 13.8409C4.7164 13.8409 4.801 13.805 4.86332 13.7409L15.0213 3.32393C15.1479 3.19156 15.1479 2.97971 15.0213 2.84733Z" fill="#2F55D4" />
                            </svg>
                          </span>
                          General Graphics: Contact for Pricing
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )
          }
        </div>
      </div>
    </div >
  )
}
