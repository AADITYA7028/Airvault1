import React from 'react'
import Face1 from '../assets/Face1.svg'
import Face2 from '../assets/Face2.svg'
import Face3 from '../assets/Face3.svg'
import Face4 from '../assets/Face4.svg'
import Face5 from '../assets/Face5.svg'
import Face6 from '../assets/Face6.svg'
import Face7 from '../assets/Face7.svg'
import Face8 from '../assets/Face8.svg'
import Face9 from '../assets/Face9.svg'
import Face10 from '../assets/Face10.svg'
import Face11 from '../assets/Face11.svg'
import Face12 from '../assets/Face12.svg'
import face1 from '../assets/Face1.png'
import face3 from '../assets/Face3.png'
import face5 from '../assets/Face5.png'
import face6 from '../assets/Face6.png'
import face7 from '../assets/Face7.png'
import face8 from '../assets/Face8.png'
import face10 from '../assets/Face10.png'
import face11 from '../assets/Face11.png'

export default function Faces() {

    // const images = [
    //     { src: Face1, w: "183.5px", h: "116px", smw: "200px", smh: "150px", mdw: "243.2px", mdh: "242px" },
    //     { src: Face2, w: "183.5px", h: "116px", smw: "200px", smh: "150px", mdw: "243.2px", mdh: "242px"  },
    //     { src: Face3, w: "183.5px", h: "116px", smw: "200px", smh: "150px", mdw: "243.2px", mdh: "242px"  },
    //     { src: Face4, w: "183.5px", h: "116px", smw: "200px", smh: "150px", mdw: "243.2px", mdh: "242px"  },
    //     { src: Face5,w: "183.5px", h: "116px", smw: "200px", smh: "150px", mdw: "243.2px", mdh: "242px"  },
    //     { src: Face6, w: "183.5px", h: "116px", smw: "220px", smh: "180px", mdw: "308px", mdh: "242px" },
    //     { src: Face7, w: "183.5px", h: "116px", smw: "220px", smh: "180px", mdw: "308px", mdh: "242px" },
    //     { src: Face8, w: "183.5px", h: "116px", smw: "220px", smh: "180px", mdw: "308px", mdh: "242px"},
    //     { src: Face9, w: "183.5px", h: "116px", smw: "220px", smh: "180px", mdw: "308px", mdh: "242px"},
    //     { src: Face10, w: "183.5px", h: "116px", smw: "300px", smh: "180px", mdw: "416px", mdh: "242px" },
    //     { src: Face11,  w: "183.5px", h: "116px", smw: "300px", smh: "180px", mdw: "416px", mdh: "242px"},
    //     { src: Face12,  w: "183.5px", h: "116px", smw: "300px", smh: "180px", mdw: "416px", mdh: "242px" }
    //   ];
  return (
    <div className="w-full min-h-screen flex flex-col items-center mt-[180px] sm:mt-[200px] md:mt-[250px]">

        <div className="flex flex-col gap-[32px] ">
        <p className="font font-bold text-[36px] sm:text-[65px] bg-[linear-gradient(90deg,#5C5C5C_0%,#3D3D3D_49.83%,#5C5C5C_100%)] text-transparent bg-clip-text text-center">We know the faces you love</p>

<p className="font text-[18px] sm:text-[22px] text-[#3D3D3D] text-center">AirVault uses AI to find your loved ones,<br className=' sm:hidden'/> across all your memories. Letting you live<br className=' sm:hidden'/> those <br className='hidden sm:inline'/>happy moments that truly happen <br className=' sm:hidden'/>only once.</p>

<div className='flex justify-center w-full '><button className='bg-[#FF6A00] py-3 px-6 rounded-full text-[#F9F9F9] text-xl font'>Try AirVault Now</button></div>
            
        </div>


        <div className="w-full h-auto flex flex-col items-center gap-3 mt-20  ">
  
   {/* Default Layout for md and above (Previously sm) */}
   <div className="hidden md:flex gap-4 justify-center w-full">
    <img src={Face1} className="md:w-1/5" />
    <img src={Face2} className="md:w-1/5" />
    <img src={Face3} className="md:w-1/5 rounded-xl" />
    <img src={Face4} className="md:w-1/5" />
    <img src={Face5} className="md:w-1/5" />
  </div>

  <div className="hidden md:flex gap-4 justify-center w-full">
    <img src={Face6} className="md:w-1/4" />
    <img src={Face7} className="md:w-1/4" />
    <img src={Face8} className="md:w-1/4" />
    <img src={Face9} className="md:w-1/4" />
  </div>

  <div className="hidden md:flex gap-4 justify-center w-full">
    <img src={Face10} className="md:w-1/3" />
    <img src={Face11} className="md:w-1/3" />
    <img src={Face12} className="md:w-1/3" />
  </div>

  {/* Updated Layout for sm (Medium Screens - Tabs) */}
<div className="hidden sm:flex md:hidden flex-col gap-4 px-6 py-4 w-full">

{/* First Row - Two Columns */}
<div className="grid grid-cols-3 gap-4 w-full">
  <img src={Face1} className="w-full rounded-xl" />
  <img src={Face2} className="w-full rounded-xl" />
  <img src={Face3} className="w-full rounded-xl" />
</div>

{/* Second Row - Full-width Image */}
<div className="grid grid-cols-2 gap-4 w-full ">

<img src={Face4} className="w-full rounded-xl" />
<img src={Face5} className="w-full rounded-xl" />
</div>


{/* Third Row - Three Columns */}
<div className="grid grid-cols-2 gap-4 w-full">
  <img src={Face6} className="w-full rounded-xl" />
  <img src={Face7} className="w-full rounded-xl" />
 
</div>

{/* Fourth Row - Two Columns */}
<div className="grid grid-cols-2 gap-4 w-full"> <img src={Face8} className="w-full rounded-xl" />
  <img src={Face9} className="w-full rounded-xl" />
  
  </div>

  <div className="grid grid-cols-3 gap-4 w-full">
  <img src={Face10} className="w-full rounded-xl" />
    <img src={Face11} className="w-full rounded-xl" />
    <img src={Face12} className="w-full rounded-xl" />
    
  </div>


</div>


  {/* Mobile Layout (below sm) */}
  <div className="flex flex-col sm:hidden gap-3 w-full items-center">
    
    {/* Top div - 3 Images */}
    <div className="flex gap-2">
      <div className="flex  gap-2 flex-col "> 
        <img src={face1} className="w-[183.5px] h-[116px] rounded-xl" />
        <img src={face6} className="w-[183.5px] h-[116px]  rounded-xl" />
      </div>
      <img src={face3} className="w-[183.5px] h-[240px] rounded-xl" />
    </div>

    {/* Middle div - 2 Images */}
    <div className="flex gap-2">
      <img src={face5} className="w-[183.5px] h-[240px] rounded-xl" />
      <img src={face7} className="w-[183.5px] h-[240px] rounded-xl" />
    </div>

    {/* Bottom div - 3 Images */}
    <div className="flex gap-2">
      <img src={face8} className="w-[183.5px] h-[240px] rounded-xl" />
      <div className="flex gap-2 flex-col">
        <img src={face10} className="w-[183.5px] h-[116px] rounded-xl" />
        <img src={face11} className="w-[183.5px] h-[116px] rounded-xl" />
      </div>
    </div>

  </div>

</div>





    </div>
  )
}
