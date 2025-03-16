import React from 'react'
import Mob from '../assets/Mob.svg'
import Mob1 from '../assets/Mob1.svg'
import Radio from '../assets/Radio.svg'
import Radio1 from '../assets/Radio1.png'
import Mob2 from '../assets/Mob2.png'
import Mob3 from '../assets/Mob3.png'


export default function LastCompnent() {
  return (
   <div className="w-full min-h-screen flex flex-col ">
   
   <p className="font font-medium text-[22px] sm:text-[32px] text-[#31323D] mt-50 text-center">Explore our wide selection of<br className="sm:hidden" /> products that helps you<br className="hidden sm:inline"/> preserve <br className="sm:hidden" /> your memories, in your own style.</p>
        
        {/* this is for big screens xl */}
     <div className="hidden xl:grid w-full overflow-hidden">
     <div className="grid grid-cols-2 gap-[16px] py-10 ">
  {/* Card 1 */}
  <div className="flex flex-col w-full rounded-2xl p-10 relative bg-gray-50 gap-[24px] overflow-hidden">


    <p className="font-medium text-[36px] text-[#58585C]">
      <span className="bg-gradient-to-r from-[#4873FF] via-[#593CFF] to-[#FF3CCB] bg-clip-text text-transparent">
        AirVault Cloud
      </span>&nbsp;
      is built <br/>for people who like it to <br/>keep it <span className="font-bold text-[#31323D]">simple.</span>
    </p>



    <p className="font-medium w-full text-[22px] text-[#64667A]">
      AirVault Cloud lets you pack light on your<br /> trips so you can 
      <span className="font-bold text-[#31323D]"> explore the world with just<br /> your phone.</span>
    </p>

      <button className="py-3 px-6 w-52 my-15 rounded-full text-[#31323D] text-xl border border-[#31323D]">
        Try AirVault Now
      </button>

    <img src={Mob} alt="img" className="absolute  rounded-br-2xl right-0 bottom-0 top-[290px] " />
  </div>

  {/* Card 2 */}
  <div className="flex flex-col w-full rounded-2xl p-10 relative bg-gray-50  gap-[24px]">

    <p className="font-medium text-[36px] text-[#58585C]">
      <span className="bg-gradient-to-r from-[#4873FF] via-[#593CFF] to-[#FF3CCB] bg-clip-text text-transparent ">
        AirVault Cloud
      </span>&nbsp; 
      is built for<br/> people who like to keep <br/>it <span className="font-bold text-[#31323D] ">close.</span>
    </p>

    <p className="font-medium text-[22px] text-[#64667A] ">
      AirVault Go lets you&nbsp;
      <span className="font-bold text-[#31323D]">keep<br/>all your memories in your<br/> pocket,</span>&nbsp;so you can take<br/>them with you even on the<br/> craziest of adventures.
    </p>

  
      <button className="py-3 px-6 w-52  rounded-full text-[#31323D] text-xl border border-[#31323D]">
        Try AirVault Now
      </button>
      
      <img src={Mob1} alt="img" className="absolute  left-[340px] bottom-10 top-30 rounded-br-2xl h-[358px] w-[313px]" />
    
  </div>
</div>

      {/* Card 3 */}
     <div className="w-full grid grid-cols-2 rounded-2xl bg-gray-50 relative ">
      <div className="flex flex-col  p-10">

      <p className=" font font-normal text-[#58585C] text-[40px] w-full">
      <span className="bg-gradient-to-r from-[#FF9900] via-[#F56F2C] via-[#F54545] to-[#B41FFF] bg-clip-text text-transparent">
        AirVault Pro
      </span>&nbsp;
      is built for<br/> people who are hungry <br/>for <span className="font-bold text-[#31323D]">power.</span>
    </p>

    <p className=" font font-normal w-full text-[22px] mt-5 text-[#64667A]">
    AirVault Pro brings together the power of <br/>distributed hosting into a single compact <br/> package, allowing your team to<br/> 
    <span className="font-bold text-[#31323D]">simultaneously access all your files at<br/> blazing fast speed! </span>
    </p>

    <button className="py-3 px-6 w-52 mt-10 rounded-full text-[#31323D] text-xl border border-[#31323D]">
        Try AirVault Now
      </button>



      </div>
      
        <img src={Radio} alt="radio" className="absolute top-[12px] h-[551.59px] w-[729.52px] left-[565px]" />
      

     </div>
     </div>

         {/* this is for laptop screen lg */}
     <div className="hidden lg:grid xl:hidden w-full overflow-hidden">
     <div className="grid grid-cols-2 gap-[16px] py-10 ">

      {/* Card 1 */}
  <div className="flex flex-col w-full rounded-2xl p-10 relative bg-gray-50 gap-[24px] overflow-hidden">
  
  <p className="font-medium text-[20px] text-[#58585C]">
      <span className="bg-gradient-to-r from-[#4873FF] via-[#593CFF] to-[#FF3CCB] bg-clip-text text-transparent">
        AirVault Cloud
      </span>&nbsp;
      is built <br/>for people who like it to <br/>keep it <span className="font-bold text-[#31323D]">simple.</span>
  </p>

  <p className="font-medium w-full text-[15px] text-[#64667A]">
      AirVault Cloud lets you pack light on your<br /> trips so you can 
      <span className="font-bold text-[#31323D]"> explore the world with<br /> just your phone.</span>
    </p>

    <button className="py-2 px-4 w-40 my-19 rounded-full text-[#31323D] text-[15px] border border-[#31323D]">
        Try AirVault Now
      </button>
 
      <img src={Mob} alt="img" className="absolute  rounded-br-2xl left-[290px] top-[210px] w-[220px] h-[270px]" />

  </div>

  {/* Card 2 */}
  <div className="flex flex-col w-full rounded-2xl p-10 relative bg-gray-50 gap-[24px] overflow-hidden">

  <p className="font-medium text-[20px] text-[#58585C]">
      <span className="bg-gradient-to-r from-[#4873FF] via-[#593CFF] to-[#FF3CCB] bg-clip-text text-transparent ">
        AirVault Cloud
      </span>&nbsp; 
      is built for<br/> people who like to keep <br/>it <span className="font-bold text-[#31323D] ">close.</span>
    </p>

    <p className="font-medium text-[15px] text-[#64667A] ">
      AirVault Go lets you&nbsp;
      <span className="font-bold text-[#31323D]">keep<br/>all your memories in your<br/> pocket,</span>&nbsp;so you can take<br/>them with you even on the<br/> craziest of adventures.
    </p>

    <button className="py-2 px-4 w-40 my-10 rounded-full text-[#31323D] text-[15px] border border-[#31323D]">
        Try AirVault Now
      </button>

      <img src={Mob1} alt="img" className="absolute  left-[200px] top-20 rounded-br-2xl h-[350px] w-[300px]" />
    
</div>

  </div>


   {/* Card 3 */}
   <div className="w-full grid grid-cols-2 rounded-2xl bg-gray-50 relative">
     <div className=" w-full flex flex-col p-8 ">

     <p className=" font w-full font-normal text-[#58585C] text-[30px] ">
      <span className="bg-gradient-to-r from-[#FF9900] via-[#F56F2C] via-[#F54545] to-[#B41FFF] bg-clip-text text-transparent ">
        AirVault Pro
      </span>
      &nbsp;is built for people who are hungry for&nbsp; 
      <span className="font-bold text-[#31323D] ">power.</span>
    </p>

    <p className=" font font-normal w-full text-[20px] mt-5 text-[#64667A]">
    AirVault Pro brings together the power of distributed hosting into a single compact package, allowing your team to&nbsp; 
    <span className="font-bold text-[#31323D]">simultaneously access all your files at blazing fast speed! </span>
    </p>

    <button className="py-2 px-4 w-40 my-10 rounded-full text-[#31323D] text-[15px] border border-[#31323D]">
        Try AirVault Now
      </button>


     </div>

     <div className="">
     <img src={Radio} alt="radio" className="absolute top-[70px] h-[380px] w-[430px] left-[550px]" />
      
     </div>
     </div>

     </div>
        

        {/* this is for small laptop and tablest md */}
     <div className="hidden md:grid lg:hidden xl:hidden w-full overflow-hidden ">

     <div className="grid grid-cols-2 gap-[16px] py-10 ">


  {/* Card 1 */}
  <div className="flex flex-col w-full rounded-2xl p-8 relative bg-gray-50 gap-[24px] overflow-hidden">

  <p className="font-medium text-[18px] text-[#58585C]">
      <span className="bg-gradient-to-r from-[#4873FF] via-[#593CFF] to-[#FF3CCB] bg-clip-text text-transparent">
        AirVault Cloud
      </span>&nbsp;
      is built <br/>for people who like it to <br/>keep it <span className="font-bold text-[#31323D]">simple.</span>
  </p>

  <p className="font-medium w-full text-[12px] text-[#65667A]">
      AirVault Cloud lets you pack light on your trips so you can 
      <span className="font-bold text-[#31323D]"> explore the world with just your phone.</span>
    </p>
    
    <button className="py-2 px-4 w-36 mt-21 rounded-full text-[#31323D] text-[10px] border border-[#31323D]">
        Try AirVault Now
      </button>

      <img src={Mob} alt="img" className="absolute  rounded-br-2xl left-[210px] top-[160px] w-[150px] h-[220px]" />
  </div>

  {/* Card 2 */}
  <div className="flex flex-col w-full rounded-2xl p-8 relative bg-gray-50 gap-[24px] overflow-hidden">
  <p className="font-medium text-[18px] text-[#58585C]">
      <span className="bg-gradient-to-r from-[#4873FF] via-[#593CFF] to-[#FF3CCB] bg-clip-text text-transparent ">
        AirVault Cloud
      </span>&nbsp; 
      is built for<br/> people who like to keep <br/>it <span className="font-bold text-[#31323D] ">close.</span>
    </p>

    <p className="font-medium text-[12px] text-[#64667A] ">
      AirVault Go lets you&nbsp;
      <span className="font-bold text-[#31323D]">keep<br/>all your memories in your<br/> pocket,</span>&nbsp;so you can take<br/>them with you even on the<br/> craziest of adventures.
    </p>

    <button className="py-2 px-4 w-36 my-8 rounded-full text-[#31323D] text-[10px] border border-[#31323D]">
        Try AirVault Now
      </button>

      <img src={Mob1} alt="img" className="absolute  left-[105px] top-25 rounded-br-2xl h-[250px] w-[300px]" />

  </div>

</div>



 {/* Card 3 */}
 <div className="w-full grid grid-cols-2 rounded-2xl bg-gray-50 relative">
 <div className=" w-full flex flex-col p-8 ">

 <p className=" font w-full font-normal text-[#58585C] text-[25px] ">
      <span className="bg-gradient-to-r from-[#FF9900] via-[#F56F2C] via-[#F54545] to-[#B41FFF] bg-clip-text text-transparent ">
        AirVault Pro
      </span>
      &nbsp;is built for people who are hungry for&nbsp; 
      <span className="font-bold text-[#31323D] ">power.</span>
    </p>

    <p className=" font font-normal w-full text-[15px] mt-5 text-[#64667A]">
    AirVault Pro brings together the power of distributed hosting into a single compact package, allowing your team to&nbsp; 
    <span className="font-bold text-[#31323D]"><br/>simultaneously access all your files at<br/> blazing fast speed! </span>
    </p>

    <button className="py-2 px-4 w-36 my-8 rounded-full text-[#31323D] text-[10px] border border-[#31323D]">
        Try AirVault Now
      </button>
</div>

<div className="">
     <img src={Radio} alt="radio" className="absolute top-[70px] h-[300px] w-[400px] left-[320px]" />
      
     </div>
 </div>
</div>

     {/* this is for large phones and small tabs sm */}
     <div className="hidden sm:grid md:hidden lg:hidden xl:hidden w-full overflow-hidden ">
     <div className="grid grid-cols-2 gap-[14px] py-10 ">
        
        {/* Card 1 */}
     <div className="flex flex-col w-full rounded-2xl p-8   bg-gray-50 gap-[24px] overflow-hidden items-center h-[330px]">


     <p className=" font-medium text-[18px] text-[#58585C] text-center ">
      <span className="bg-gradient-to-r from-[#4873FF] via-[#593CFF] to-[#FF3CCB] bg-clip-text text-transparent ">
        AirVault Cloud
      </span>&nbsp;
      is built for people who like to keep it <span className="font-bold text-[#31323D]">simple.</span>
  </p>

  <p className="font-medium w-full text-[12px] text-center text-[#65667A]">
      AirVault Cloud lets you pack light on your trips so you can 
      <span className="font-bold text-[#31323D]"> explore the world with just your phone.</span>
    </p>

    <button className="py-2 px-4 w-36 mt-5 rounded-full text-[#31323D] text-[10px] border border-[#31323D]">
        Try AirVault Now
      </button>
    
      <img src={Mob2} alt="img" className=" w-[150px] h-[220px]" />

     </div>

      
          {/* Card 2 */}
  <div className="flex flex-col w-full rounded-2xl p-8 relative bg-gray-50 gap-[24px] overflow-hidden items-center h-[330px]">
    
  <p className="font-medium text-[18px] text-[#58585C] text-center">
      <span className="bg-gradient-to-r from-[#4873FF] via-[#593CFF] to-[#FF3CCB] bg-clip-text text-transparent ">
        AirVault Cloud
      </span>&nbsp; 
      is built for<br/> people who like to keep <br/>it <span className="font-bold text-[#31323D] ">close.</span>
    </p>

    <p className="font-medium text-[12px] text-[#64667A] ">
      AirVault Go lets you&nbsp;
      <span className="font-bold text-[#31323D]">keep all your memories in <br/> your pocket,</span>&nbsp;so you can take them with you <br/>even on the craziest of adventures.
    </p>

    <button className="py-2 px-4 w-36 mt-5 rounded-full text-[#31323D] text-[10px] border border-[#31323D]">
        Try AirVault Now
      </button>

      <img src={Mob3} alt="img" className="absolute w-[150px] h-[220px] top-[140px] left-[220px]" />

  </div>



     </div>


     {/* Card 3 */}
 <div className="w-full rounded-2xl bg-gray-50 ">
 <div className=" w-full flex flex-col items-center p-8 ">


 <p className=" font w-full font-normal text-[#58585C] text-[25px]  text-center">
      <span className="bg-gradient-to-r from-[#FF9900] via-[#F56F2C] via-[#F54545] to-[#B41FFF] bg-clip-text text-transparent ">
        AirVault Pro
      </span>
      &nbsp;is built for people who are hungry for&nbsp; 
      <span className="font-bold text-[#31323D] ">power.</span>
    </p>

    <p className=" font font-normal w-full text-[15px] mt-5 text-[#64667A] text-center">
    AirVault Pro brings together the power of distributed hosting into a single compact package, allowing your team to&nbsp; 
    <span className="font-bold text-[#31323D]">simultaneously access all your files at blazing fast speed! </span>
    </p>

    <button className="py-2 px-4 w-36 mt-5 rounded-full text-[#31323D] text-[10px] border border-[#31323D]">
        Try AirVault Now
      </button>

      <img src={Radio1} alt="img" className=" mt-5 w-[250px] h-[220px] " />



 </div>


 </div>




     </div>

     {/* this is for small phones  */}
     <div className=" flex flex-col sm:hidden md:hidden lg:hidden xl:hidden w-full  overflow-hidden gap-3">

      {/* card 1 */}
      <div className="flex flex-col  bg-gray-100 drop-shadow-lg w-full h-[700px]  relative items-center px-2 rounded-[48px] ">
        
      <p className=" font-medium text-[36px] text-[#58585C] text-center mt-15 ">
      <span className="bg-gradient-to-r from-[#4873FF] via-[#593CFF] to-[#FF3CCB] bg-clip-text text-transparent ">
        AirVault Cloud
      </span>&nbsp;
      is <br/>built for people<br/> who like it to<br/> keep it <span className="font-bold text-[#31323D]">simple.</span>
  </p>

  <p className="font-medium w-full text-[18px] text-center text-[#65667A] mt-[24px]">
      AirVault Cloud lets you pack light<br/> on your trips so you can 
      <span className="font-bold text-[#31323D]"> explore <br/>the world with just your phone.</span>
    </p>

    <button className="py-2 px-4 w-42 mt-10 rounded-full text-[#31323D] text-[18px] border border-[#31323D]">
        Try AirVault Now
      </button>

      <img src={Mob2} alt="img" className="absolute top-[495px] " />
      </div>

      {/* card2 */}

      <div className="flex flex-col  bg-gray-100 drop-shadow-lg w-full h-[700px] relative  px-4 rounded-[48px]">

      <p className="font-medium text-[36px] text-[#58585C] text-center mt-15">
      <span className="bg-gradient-to-r from-[#4873FF] via-[#593CFF] to-[#FF3CCB] bg-clip-text text-transparent ">
        AirVault Cloud
      </span>&nbsp; 
      is <br/>built for people<br/> who like to<br/> keep it <span className="font-bold text-[#31323D] ">close.</span>
    </p>

    <p className="font-medium text-[18px] text-[#64667A] mt-[24px] ">
      AirVault Go lets you&nbsp;<br/>
      <span className="font-bold text-[#31323D]">keep all your<br/> memories in your<br/> pocket,</span>&nbsp;so you can<br/> take them with you <br/>even on the craziest of<br/> adventures.
    </p>

    <button className="py-2 px-4 w-42 mt-10 rounded-full text-[#31323D] text-[18px] border border-[#31323D]">
        Try AirVault Now
      </button>

      <img src={Mob3} alt="img" className="absolute top-[230px] left-[160px]" />


      </div>


      {/* card 3 */}
      <div className="flex flex-col bg-gray-100 drop-shadow-lg  w-full h-[907px] relative px-4 rounded-[48px] items-center">

      <p className=" font w-full font-normal text-[#58585C] text-[36px]  text-center mt-15">
      <span className="bg-gradient-to-r from-[#FF9900] via-[#F56F2C] via-[#F54545] to-[#B41FFF] bg-clip-text text-transparent ">
        AirVault Pro
      </span>
      &nbsp;is<br/> built for people<br/> who are hungry for&nbsp; 
      <span className="font-bold text-[#31323D] ">power.</span>
    </p>

    <p className=" font font-normal w-full text-[18px] mt-[24px] text-[#64667A] text-center">
    AirVault Pro brings together the<br/> power of distributed hosting into a <br/> single compact package, allowing<br/> your team to&nbsp; 
    <span className="font-bold text-[#31323D]">simultaneously<br/> access all your files at blazing<br/> fast speed! </span>
    </p>
    <button className="py-2 px-4 w-42 mt-10 rounded-full text-[#31323D] text-[18px] border border-[#31323D] text-center">
        Try AirVault Now
      </button>

      <img src={Radio1} alt="img" className="mt-10 ml-10" />





      </div>



  

     </div>



   </div>

   
  )
}
