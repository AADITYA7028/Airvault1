import React from 'react'
import Logo from '../assets/logo.svg'
import Airvault from '../assets/airvault.svg'

export default function NameLogo() {
  return (
   <div className="w-[166px] sm:w-[166px] md:w-[166px] lg:w-[166px] 
            h-[24px] sm:h-[24px] md:h-[24px] lg:h-[24px] 
            flex gap-3 items-center justify-center">
           
           <img src={Logo} alt="img" className='w-[28px] sm:w-[28px] md:w-[28px] lg:w-[28px] h-[24px] sm:h-[24px] md:h-[24px] lg:h-[24px]  '/>

           <img src={Airvault} alt="img" className='w-[126px] sm:w-[126px] md:w-[126px] lg:w-[126px] h-[16px] sm:h-[16px] md:h-[16px] lg:h-[16px]  '/>

            </div>
  )
}
