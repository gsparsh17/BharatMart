import React from 'react';
import logo from './logo3.png';


function Navbar() {
  return (
    <nav className='fixed w-[97vw] h-[7vw] z-[99] py-[1.5vw] px-[4vw] bg-zinc-100 rounded-xl m-[1vw] flex justify-between shadow-xl items-center'>
        <div className='logo h-[] w-[25vw]'>
          <a href="/"><img className='h-[4vw]' src={logo} alt="Logo" /></a>
        </div>
        <div className='links flex gap-[3vw] ml-[1vw]'>
            {["Top_Products","NearBy_Shops","Cart","Contact","Profile"].map((item,index)=>(<a href={item} className='text-[1.5vw] font-semibold text-zinc-800'>
                {item}
            </a>))}
        </div>
    </nav>
  )
}

export default Navbar