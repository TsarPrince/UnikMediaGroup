import React, {useState} from 'react'
import styles from './styles.module.scss';
function Question({heading,description}){
  const [isOpen,setIsOpen]=useState(false);
  return <div onClick={()=>setIsOpen(old=>!old)} className='bg-white p-8 mb-4 rounded-lg shadow-lg lg:max-w-lg' >
    <div className={'flex'}>
      <p className='text-lg pr-[50px] text-[19px] font-semibold text-slate-600 inline cursor-pointer flex-grow'>{heading}</p>
      <button className={isOpen?styles.faqButtonOpen:styles.faqButtonClosed}>{isOpen?"-":"+"}</button>
    </div>
    {isOpen&&<div className='pt-8 md:pr-16 text-[16px] text-slate-500'>
      <p style={{fontFamily:"DM Sans"}}>{description}</p>
    </div>}
  </div>
}

export const Index = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='flex flex-col items-center text-center space-y-8'>
          <p className="text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions</p>
          <p className="max-w-2xl text-xl text-gray-500">Have questions about how we work and what you get? We&apos;ve got all the answers you need.</p>
        </div>

        <div className='bg-slate-100 mt-10 px-4 py-6 md:px-12 md:py-14 rounded-3xl md:grid md:grid-cols-2 items-start md:gap-x-4'>
          <div>
            <Question description={'No, you have a set limit based on the monthly plan you join. However, you do get unlimited logo designs and general graphic design requests.'} heading={'Do I get unlimited creatives?'}/>
            <Question description={'No, you have a set limit based on the monthly plan you join. However, you do get unlimited logo designs and general graphic design requests.'} heading={'How long does it take to receive my creatives back?'}/>
            <Question description={'No, you have a set limit based on the monthly plan you join. However, you do get unlimited logo designs and general graphic design requests.'} heading={'How does the Video Ad Creatives work?'}/>
          </div>
          <div>

            <Question description={'No, you have a set limit based on the monthly plan you join. However, you do get unlimited logo designs and general graphic design requests.'} heading={'How does the Image Ad Creatives work?'}/>
            <Question description={'No, you have a set limit based on the monthly plan you join. However, you do get unlimited logo designs and general graphic design requests.'} heading={'What if I need over 50 creatives per day?'}/>
            <Question description={'No, you have a set limit based on the monthly plan you join. However, you do get unlimited logo designs and general graphic design requests.'} heading={'Who works on my requests?'}/>

          </div>

        </div>
      </div>
    </div>
  )
}
