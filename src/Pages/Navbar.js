import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

 


    return (
        <div className="flex w-full  justify-between  items-center h-20 sm:h-20  
          text-black font-public font-Prompt fixed z-10 bg-white "> 

          
            
            <div className='flex  w-11/12 md:w-10/12 max-w-[1280px] mx-auto justify-between '>
                    <div className='' >
                
                            <h1 className=' text-black text-[20px] '> Tutorify  </h1>
                
                     </div> 

             <div className='  '> 
              <ul className=' hidden md:flex  mt-2  text-black font-semibold  '> 
                      <li to='#'  className='md:mx-2 hover:text-[#e0692f] transition duration-200 hover:-translate-x-1   ' >   Home    </li>
                      <li to='#about'  className='md:mx-2 hover:text-[#e0692f] transition duration-200 hover:-translate-x-1  ' >   Lessons    </li>
                      <li to='#menu' className='md:mx-2 hover:text-[#e0692f]  transition duration-200 hover:-translate-x-1 ' >    Find Tutors   </li>
                      <li to='#service' className='md:mx-2 hover:text-[#e0692f]   transition duration-200 hover:-translate-x-1 ' >   About Us    </li>
                      <li to='#contact' className='md:mx-2 hover:text-[#e0692f] transition duration-200 hover:-translate-x-1  ' >     <button className='bg-[#407F55] px-3 py-0.5 rounded'> Login </button>   </li>

                      <li to='#contact' className='md:mx-2 hover:text-[#e0692f] transition duration-200 hover:-translate-x-1  ' >     <button className='bg-[#FF922F] px-3 py-0.5 rounded'> Sign up </button>   </li>
                     
                            
                        </ul>
            </div>    
            </div> 
           

         
            {/* hamburger */} 
            <div  onClick={handleNav} className=' md:hidden z-10 '> 
            {nav ? <AiOutlineClose className='text-[#e0692f]  ' size={32}/> :   <FiMenu className='text-[#e0692f] ' size={32}/>}
              
            </div>


             <div  onClick={handleNav} className={nav ? ' leading-loose text-center text-2xl  absolute text-white  left-0 top-0  w-full m-auto    flex h-96    mt-20  bg-[#2b2942]  flex-col ' : 'absolute left-[-100%] '}>
        <ul  className='md:hidden mt-14 flex flex-col '>
                       <li to='#'  >Home</li>
                      <li to='#about'  >About</li>
                      <li to='#menu' >Menu</li>
                      <li to='#service' >Service</li>
                      <li to='#contact'>Contact</li>
         
         
        </ul>
      </div>
            
        </div>
    )
}

export default Navbar;