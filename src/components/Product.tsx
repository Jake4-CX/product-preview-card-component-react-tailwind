import Reat, { useState } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

export function Product() {

  return (
  <div className='w-10/12 md:w-[540px] lg:w-[856px] bg-white rounded-lg absolute'>
    <div className='flex flex-col md:flex-row justify-between items-center overflow-hidden'>
      
      <div className='bg-cover bg-center object-contain bg-[url("/images/image-product-desktop.jpg")] w-full h-72 md:h-[30em] rounded-t-lg md:rounded-none md:rounded-l-lg'>
      </div>
      <div className='p-6 md:h-[30em]'>
        <h2 className='text-[#7b7e84] text-sm mb-4 uppercase tracking-[0.3em]'>Perfume</h2>
        <h1 className='text-[#1f2428] font-["Fraunces"] font-[700] text-4xl'>Gabrielle Essence Eau De Parfum</h1>
        <p className='my-4 md:my-6 lg:my-8 text-[#919197] text-[14px]'>A floral, solar and voluptuous interpreation composed by Olivier Polge,
          Perfumer-Creator for the House of CHANEL.
        </p>

        <div className='flex flex-row items-center gap-x-6 mb-6 md:mb-8'>
          <h3 className='text-[#3a8267] font-["Fraunces"] font-[700] text-3xl'>$149.99</h3>
          <h4 className='line-through text-[#919197]'>$169.99</h4>
        </div>

        <button type='submit' className='w-full bg-[#3d8168] rounded-xl py-4 px-4 text-white font-semibold hover:bg-[#1a4031] duration-150 flex flex-row justify-center gap-x-3'>
          <ShoppingCartIcon className='h-5 w-5' />
          Add to Cart
        </button>
      </div>

    </div>
  </div>
  )
}