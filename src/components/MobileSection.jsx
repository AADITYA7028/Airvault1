import React from 'react'
import Mobile1 from '../assets/mobile1.svg'
import Mobile2 from '../assets/mobile2.svg'

export default function MobileSection() {
  return (
    <div className="w-full flex flex-col gap-[112px] sm:gap-[115px] md:gap-[120px] items-center  mt-[250px] sm:mt[250px] md:mt-[200px] lg:px-20 ">
       
       <div className="flex flex-col gap-[5px]">
       <p className="font font-medium text-[24px] sm:text-[30px] md:text-[40px] text-[#3132D] text-center ">AirVault doesn’t just store <br className='sm:hidden'/>your media.</p>
      
      <p className="font font-bold  text-[36px] sm:text-[45px] md:text-[68px] text-center">We track your<br className='sm:hidden'/> memories.</p>
       <p className="font  text-[18px] sm:text-[20px] md:text-[22px] font-normal text-center text-[#3D3D3D] md:text-[#3132D]">Your entire life-story right at your <br className='sm:hidden'/>fingertips.</p>
       
       <div className='flex justify-center w-full mt-6'><button className='bg-[#FF6A00] py-3 px-6 rounded-full text-[#F9F9F9] text-xl font'>Try AirVault Now</button></div>
       </div>
       <div className='flex items-center justify-center -translate-x-10 ' >
       <img src={Mobile1} alt="img" className="translate-x-18 w-[186.48px]  sm:w-[300px]  md:w-[350px] lg:w-[450px]"  />

<img src={Mobile2} alt="img" className='z-10 w-[210.1px]  sm:w-[350px]    md:w-[400px] lg:w-[500px]'/>
       </div>
       
     
    </div>
  )
}
