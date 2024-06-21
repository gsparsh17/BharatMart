import React from 'react'
import bg from '../components/colorkit (2).png'

function Shop() {
  return (
    <div className='shop absolute w-full'>
      <div className='w-full'>
      <img className='absolute' src={bg} alt="" />
      <div className='absolute w-full'>
        <h1 className='text-white text-[4vw] font-bold text-center mt-[10vw] ml-[2.5vw]'>NearBy Shops</h1>
        <div className='cardcontainer flex gap-[3vw] h-[25vw] ml-[10vw] mt-[6vw] '>
                    <div className='card rounded-xl w-1/5 h-full shadow-2xl bg-white'>
                        </div>
                    <div className='card rounded-xl w-1/5 h-full shadow-2xl bg-white'>
                        </div>
                        <div className='card rounded-xl w-1/5 h-full shadow-2xl bg-white'>
                        </div>
                    <div className='card rounded-xl w-1/5 h-full shadow-2xl bg-white'>
                        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Shop