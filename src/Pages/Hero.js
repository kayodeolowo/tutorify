import React from 'react'

const Hero = () => {
  return (
   <section className='w-full '>
        <div className=' w-11/12 md:w-10/12  mx-auto max-w-[1280px]  '> 
           <div className='md:flex'> 
            <div className='pt-24 md:w-1/2  '>
                <div className='flex md:mt-14'> 
                    <h1 className=''>We are the best </h1>
                    <div className='bg-[#e0692f] h-0.5 w-20 mt-3 ml-4'>  </div>
                </div>

                <h1 className=' mt-2 text-bold text-4xl sm:text-2xl md:text-5xl md:font-bold w-11/12 '> Learn From Home With <span className='text-[#e0692f]'>The Best </span> Online Languange Tutors </h1>
                <p className='mt-4'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Id interdum dui mollis . Suspendisse nulla : </p> 
                <button className='bg-[#058E6E] text-white text-semibold px-8 py-2 rounded-md mt-4'> Try Free Lessons </button>
            </div>

            
            
            <div className=' md:w-1/2  '>
                <div className='md:mt-28 md:ml-[20%]'  > 
                  <div className='flex  justify-center  mt-6' >
                    <img className='max-h-[350px] md:max-h-[400px]' src="./images/shade.png"/>
                    <img className='max-h-[350px]   absolute' src='./images/guy.png' />
                    <img src='./images/red.png' className='absolute md:h-14 max-h-16 ml-[90px] md:ml-[105px]' />
                    <img className='absolute  max-h-16 mt-16 md:h-14 ml-[-125px] md:ml-[-140px]' src='./images/white.png'/>  
                     <img className='absolute  max-h-16 md:h-14 mt-[200px] ml-[125px] md:ml-[150px]' src='./images/flag.png'/>   
                     <img className='absolute mt-32 sm:mt-2 md:mt-[50px] ml-[-100px] md:h-[500px] md:ml-[-150px]' src='./images/tutor.png'/> 
                  </div> 
                   
                    
                </div>
                 

            </div>
            </div>


            <div className='mt-24 md:flex'> 
                <div className='md:w-2/6' >
                    <h1 className='text-[#e0692f] '> What do you want to learn? </h1>   
                     <h1 className='font-bold text-3xl mt-4'> what we offer </h1>  
                      <div className='flex mt-2'> 
                         <h1 className='text-[#e0692f] '>i want to learn </h1>
                         <div className='bg-[#e0692f] h-0.5 w-20 sm:w-26 mt-3 ml-4'>  </div> 
                    </div> 
                 </div>






                <div className='md:w-3/5' >
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec urna nec faucibus ridiculus placerat ipsum. Volutpat eget ut vitae amet ullamcorper et, ante venenatis. </p>
                    <div className='grid grid-cols-4 md:grid-cols-8 md:mx-0 gap-1 items-center mx-4 mt-4'> 
                        <img className=' max-h-12' src='./images/china.jpg' /> 
                         <img className=' max-h-10' src='./images/france.jpg' /> 
                         <img className=' max-h-10' src='./images/neth.jpg' /> 
                         <img className=' max-h-10' src='./images/nigeria.jpg' /> 
                         <img className=' max-h-10' src='./images/spain.jpg' /> 
                         <img className=' max-h-12' src='./images/ukr.jpg' /> 
                         <img className=' max-h-10' src='./images/jap.jpg' /> 
                       
                       <div className='flex flex-row'>
                            <h1 className='text-xs mt-2 text-[#e0692f] font-semibold'> View All </h1>
                            <img className='mt-0.5 h-6' src='./images/Arrow.png'/>
                        </div> 
                    </div>    
                 </div>
            </div>

        </div>

   </section> 
  )
}

export default Hero