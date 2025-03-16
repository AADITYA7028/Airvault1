import React from 'react'
import NameLogo from './NameLogo'

export default function StartContent() {
  return (
    <div className="w-full  flex flex-col  ">

         <div className="flex items-start px-6 sm:px-20 py-6"><NameLogo/></div>
          
          <div className="flex flex-col justify-center mt-40">

          <p className="text-center text-[36px] sm:text-[48px] md:text-[68px] leading-15 sm:leading-20 font-semibold bg-gradient-to-r from-[#5C5C5C] via-[#3D3D3D] to-[#5C5C5C] text-transparent bg-clip-text  font">Your photo gallery <br className='sm:hidden'/>is a mess!<br /> We can fix it.</p>
         <p className='text-center text-[#3D3D3D]
 text-2xl sm:p-4  mt-4 sm:mt-[0px] font-normal font'>AirVault is the easiest way to capture<br className="sm:hidden"/> and relive your memories.</p>
 <div className='flex justify-center w-full mt-10 sm:mt-6'><button className='bg-[#FF6A00] py-3 px-6 rounded-full text-[#F9F9F9] text-xl font'>Try AirVault Now</button></div>

          </div>
        
        
    </div>
  )
}
