import React from 'react'
// import Memory1 from '../assets/Memory1.svg'
// import Memory2 from '../assets/Memory2.svg'
// import Memory3 from '../assets/Memory3.svg'
// import Memory4 from '../assets/Memory4.svg'
// import Memory5 from '../assets/Memory5.svg'
import Memory1 from '../assets/Memory1.png'
import Memory2 from '../assets/Memory2.png'
import Memory3 from '../assets/Memory3.png'
import Memory4 from '../assets/Memory4.png'
import Memory5 from '../assets/Memory5.png'


export default function Memories() {
  return (
    <div className="w-full min-h-screen flex flex-col  gap-[48px]  md:mt-[200px] lg:mt-[370px] xl:mt-[50px]">
      
      {/* Title Section */}
      <div className="flex flex-col gap-[16px] text-center">
        <p className=" font font-bold text-[36px] sm:text-[60px] !text-transparent bg-gradient-to-r from-[#5C5C5C] via-[#3D3D3D] to-[#5C5C5C] bg-clip-text sm:!text-[#31323D] sm:bg-none">
          Your memories are <br className="sm:hidden" />worth<br className="hidden sm:inline" /> everything!
        </p>
        <p className="font-medium sm:font-normal text-[18px] sm:text-[22px] text-[#3D3D3D]">
          No one understands it better than us.
        </p>
      </div>

      {/* Images Section is for desktop version*/}
    <div className=" hidden xl:flex w-full h-[500px] mt-10 gap-5   relative items-center overflow-hidden bg-gray-100 drop-shadow-lg">
        
      
        <img 
          src={Memory1} 
          alt="Memory 1" 
          className=" absolute w-[250px] h-[320px] rounded-[48px] shadow-lg z-1 object-cover "
          style={{ left:-40 ,rotate: "-5deg" }}
          
        />
           
           <img 
            src={Memory2} 
            alt="Memory 2" 
            className="absolute w-[250px] h-[320px] rounded-[48px] shadow-lg  z-1  object-cover"
            style={{left:295 ,top:150 }}
          />
          <img 
            src={Memory3}
            alt="Memory 3" 
            className="absolute w-[250px] h-[320px] rounded-[48px] shadow-lg z-2 object-cover"
            style={{left: 520, top:70, rotate:"8.57deg" }}
          />
           
          
    
        <img 
            src={Memory4} 
            alt="Memory 4" 
            className="absolute w-[250px] h-[320px] rounded-[48px] shadow-lg z-3 object-cover"
            style={{ left:890 ,top:150,rotate:"-2.69deg"}}
          />
          <img 
            src={Memory5} 
            alt="Memory 5" 
            className="absolute w-[250px] h-[320px] rounded-[48px] shadow-lg z-2 object-cover"
            style={{left:1100,rotate:"2.65deg"}}
          />
        
       

      </div>


      {/* div className="hidden lg:flex xl:hidden w-full h-auto  relative  "> */}
     <div className="hidden lg:flex xl:hidden w-full h-[500px]  relative items-center overflow-hidden bg-gray-100 drop-shadow-lg">

     <img 
          src={Memory1} 
          alt="Memory 1" 
          className=" absolute w-[200px] h-[270px] rounded-[48px] shadow-lg z-2 object-cover "
          style={{ left:100 ,rotate: "-5deg" ,top:50 }}
          
        />

     <img 
            src={Memory2} 
            alt="Memory 2" 
            className="absolute w-[200px] h-[270px] rounded-[48px] shadow-lg  z-1  object-cover"
            style={{left:350 ,top:30 }}
          />
          <img 
            src={Memory3}
            alt="Memory 3" 
            className="absolute w-[200px] h-[270px] rounded-[48px] shadow-lg z-2 object-cover"
            style={{left:540, top:20, rotate:"8.57deg" }}
          />
            <img 
            src={Memory4} 
            alt="Memory 4" 
            className="absolute w-[200px] h-[270px] rounded-[48px] shadow-lg z-3 object-cover"
            style={{ left:200 ,top:200,rotate:"2.69deg"}}
          />
          <img 
            src={Memory5} 
            alt="Memory 5" 
            className="absolute w-[200px] h-[270px] rounded-[48px] shadow-lg z-3 object-cover"
            style={{left:450,rotate:"-2.65deg",top:250}}
          />


     </div>

     <div className="hidden md:flex lg:hidden xl:hidden w-full h-[500px]  relative items-center overflow-hidden justify-center bg-gray-100 drop-shadow-lg">

    
     <img 
          src={Memory1} 
          alt="Memory 1" 
          className=" absolute w-[200px] h-[250px] rounded-[48px] shadow-lg z-1 object-cover "
          style={{ left:-40 ,rotate: "-5deg", top:20}}
          
        />
           
           <img 
            src={Memory2} 
            alt="Memory 2" 
            className="absolute w-[200px] h-[250px] rounded-[48px] shadow-lg  z-1  object-cover"
            style={{left:140 ,top:50 }}
          />
          <img 
            src={Memory3}
            alt="Memory 3" 
            className="absolute w-[200px] h-[250px] rounded-[48px] shadow-lg z-2 object-cover"
            style={{left:320, top:20, rotate:"8.57deg" }}
          />
           
          
    
        <img 
            src={Memory4} 
            alt="Memory 4" 
            className="absolute w-[200px] h-[250px] rounded-[48px] shadow-lg z-3 object-cover"
            style={{ left:20 ,top:250,rotate:"-2.69deg"}}
          />
          <img 
            src={Memory5} 
            alt="Memory 5" 
            className="absolute w-[200px] h-[250px] rounded-[48px] shadow-lg z-2 object-cover"
            style={{left:300,rotate:"-2.65deg", top:250}}
          />


     </div>
    

    <div className="hidden sm:flex md:hidden lg:hidden xl:hidden w-full h-[250px]  relative items-center overflow-hidden justify-center bg-gray-100 drop-shadow-lg ">


    <img 
          src={Memory1} 
          alt="Memory 1" 
          className=" absolute w-[150px] h-[150px] rounded-[48px] shadow-lg z-1 object-cover  "
          style={{ left:-40 ,rotate: "-5deg", top:20}}
          
        />
           
           <img 
            src={Memory2} 
            alt="Memory 2" 
            className="absolute w-[150px] h-[150px] rounded-[48px] shadow-lg  z-1  object-cover"
            style={{left:90 ,top:50 }}
          />
          <img 
            src={Memory3}
            alt="Memory 3" 
            className="absolute w-[150px] h-[150px] rounded-[48px] shadow-lg z-2 object-cover"
            style={{left:210, top:20, rotate:"8.57deg" }}
          />
           
          
    
        <img 
            src={Memory4} 
            alt="Memory 4" 
            className="absolute w-[150px] h-[150px] rounded-[48px] shadow-lg z-3 object-cover"
            style={{ left:350 ,top:20,rotate:"-2.69deg"}}
          />
          <img 
            src={Memory5} 
            alt="Memory 5" 
            className="absolute w-[150px] h-[150px] rounded-[48px] shadow-lg z-2 object-cover"
            style={{left:490,rotate:"-2.65deg", top:20}}
          />
    </div>
    <div className=" flex sm:hidden md:hidden lg:hidden xl:hidden  w-full h-[684px] relative items-center overflow-hidden bg-gray-100 drop-shadow-lg">
    <img 
          src={Memory1} 
          alt="Memory 1" 
          className=" absolute w-[207px] h-[273px] rounded-[36px] shadow-lg z-1 object-cover  "
          style={{ left:-46 ,rotate: "-2.78deg", top:72.68}}
          
        />
           
           <img 
            src={Memory2} 
            alt="Memory 2" 
            className="absolute w-[207px] h-[273px] rounded-[36px] shadow-lg  z-1  object-cover"
            style={{left:187 ,top:5 }}
          />
          <img 
            src={Memory3}
            alt="Memory 3" 
            className="absolute w-[207px] h-[273px] rounded-[36px] shadow-lg z-2 object-cover"
            style={{left:91.68, top:237, rotate:"8.57deg" }}
          />
           
          
    
        <img 
            src={Memory4} 
            alt="Memory 4" 
            className="absolute w-[207px] h-[273px] rounded-[36px] shadow-lg z-3 object-cover"
            style={{ left:-101 ,top:406.7, rotate:"-2.69deg"}}
          />
          <img 
            src={Memory5} 
            alt="Memory 5" 
            className="absolute w-[207px] h-[273px] rounded-[36px] shadow-lg z-1 object-cover"
            style={{left:213.62, rotate:"2.65deg", top:385}}
          />
    </div>
      
    </div>
  )
}


