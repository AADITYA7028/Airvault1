import React from 'react'
import Moment1 from '../assets/Moment1.svg'
import Moment2 from '../assets/Moment2.svg'
import Moment3 from '../assets/Moment3.svg'
import Moment4 from '../assets/Moment4.svg'
// import Moment1 from '../assets/Moment1.png'
// import Moment2 from '../assets/Moment2.png'
// import Moment3 from '../assets/Moment3.png'
// import Moment4 from '../assets/Moment4.svg'

export default function BestMoments() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-100 drop-shadow-lg items-center mt-50 gap-[64px] rounded-[10px] ">
        <div className="flex flex-col gap-[32px]">
        <p className="font font-bold text-[36px] sm:text-[65px] !text-transparent bg-gradient-to-r from-[#5C5C5C] via-[#3D3D3D] to-[#5C5C5C] bg-clip-text sm:!text-[#31323D] sm:bg-none text-center">
  The best moments <br className="sm:hidden" />
  are the <br className="hidden sm:inline" /> ones you <br className="sm:hidden" />
  share
</p>

<p className="font font-medium sm:font-normal  text-[18px] sm:text-[22px] text-[#3D3D3D] text-center">Share your memories with your friends<br className="sm:hidden" /> and family with a single click.</p>

<div className='flex justify-center w-full '><button className='bg-[#FF6A00] py-3 px-6 rounded-full text-[#F9F9F9] text-xl font'>Try AirVault Now</button></div>
        </div>
        


{/*  for xl big screen */}
<div className="hidden xl:flex w-full h-[410px]  relative items-center overflow-hidden justify-center">

     <img 
            src={Moment1} 
            alt="Memory 1" 
            className=" absolute w-[200px] h-[241px]   z-1  "
            style={{ left:300,top:35 }}
            
          />

<img 
            src={Moment2} 
            alt="Memory 2" 
            className=" absolute w-[192px] h-[230px]  z-2  "
            style={{ left:350,top:185  }}
            
          />

<img 
            src={Moment3} 
            alt="Memory 3" 
            className=" absolute w-[328.33px] h-[394px]  z-1  "
            style={{ left:500,top:-15  }}
            
          />
          
<img 
            src={Moment4} 
            alt="Memory 4" 
            className=" absolute w-[420px] h-[362px]  z-2  "
            style={{ left:700,top:55  }}
            
          />



</div>
  
  {/* for big tab screen */}
<div className="hidden lg:flex xl:hidden w-full h-auto  relative  ">


<img 
            src={Moment2} 
            alt="Memory 2" 
            className=" absolute w-[250px] h-[400px]  z-1  "
            style={{ left:80,top:55  }}
            
          />
<img 
            src={Moment3} 
            alt="Memory 3" 
            className=" absolute w-[400px] h-[300px]  z-2  "
            style={{ left:200,top:-15  }}
            
          />
          
<img 
            src={Moment4} 
            alt="Memory 4" 
            className=" absolute w-[500px] h-[350px]  z-3  "
            style={{ left:360,top:150  }}
            
          />
      </div>

      {/* for small tabs */}

      <div className="hidden md:flex lg:hidden xl:hidden w-full h-auto  relative  ">
      <img 
            src={Moment3} 
            alt="Memory 3" 
            className=" absolute w-[250px] h-[250px]  z-1  "
            style={{ left:80,top:-15  }}
            
          />
          
<img 
            src={Moment4} 
            alt="Memory 4" 
            className=" absolute w-[320px] h-[270px]  z-2  "
            style={{ left:250,top:55  }}
            
          />
      </div>

       {/* for mobiles and small tabs */}
      <div className=" md:hidden flex justify-center items-center w-full h-auto drop-shadow-xl mx-auto    ml-5 ">
      <img 
            src={Moment4} 
            alt="Memory 4" 
            className=" w-[420px] h-[300px]  z-2  "
            // style={{ left:250,top:55  }}
            
          />
          
      </div>



    </div>
  )
}
