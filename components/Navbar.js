import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Navbar = () => {
  // on mobile view
  const showHiddenNavbarContent = () => {
    document.querySelector('.navbar-hidden').classList.toggle('hidden');

  }

  const handleClick = (event) => {
    const prev = document.querySelector('.nav-active');
    const current = event.target;
    prev.className = 'nav-inactive text-slate-600 hover:text-slate-500';
    current.className = 'nav-active text-blue-500 hover:text-blue-600';
    document.querySelector('.navbar-hidden').classList.add('hidden');

  }

  return (
    <nav id='navbar' className='bg-white/50 fixed z-50 inset-x-0 top-0 backdrop-blur-2xl transition-all shadow-md'>
      <div className='relative flex justify-between items-center py-4 px-8'>
        <div className='flex-shrink-0'>
          <Image src='/logo.svg' width={127} height={24} alt='UNIX creatives logo'></Image>
        </div>
        <div className='navbar-hidden hidden bg-white py-4 text-lg font-semibold absolute top-full inset-x-0 flex flex-col items-center space-y-4 w-full shadow-md lg:relative lg:shadow-none lg:flex-row lg:justify-center lg:w-auto lg:space-y-0 lg:block lg:bg-transparent lg:space-x-12'>
          <a href='#home'><span className='nav-active text-blue-500 hover:text-blue-600' onClick={handleClick}>Home</span></a>
          <a href='#services'><span className='nav-inactive text-slate-600 hover:text-slate-500' onClick={handleClick}>Services</span></a>
          <a href='/#our-work'><span className='nav-inactive text-slate-600 hover:text-slate-500' onClick={handleClick}>Our Work</span></a>
          <a href='/#pricing'><span className='nav-inactive text-slate-600 hover:text-slate-500' onClick={handleClick}>Pricing</span></a>
        </div>
        <div className='hidden lg:block'>
          <button className='btn-rounded-md'>
            Get Started
          </button>
        </div>
        <div className='lg:hidden'>
          <button className='rounded-md p-3 focus:ring-4' onClick={showHiddenNavbarContent}>
            <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="0.567871" y="0.0957031" width="23.4326" height="2.78481" fill="#161C2D" /> <rect x="0.567871" y="8.24902" width="23.4326" height="2.78481" fill="#161C2D" /> <rect x="0.567871" y="16.4033" width="5.39473" height="2.78481" fill="#2F55D4" /> <rect x="9.5835" y="16.4033" width="14.4168" height="2.78481" fill="#161C2D" /> </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
