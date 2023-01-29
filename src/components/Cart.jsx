import React from 'react';

import { AiOutlinePlus, AiOutlineMinus, AiOutlineCloseCircle } from 'react-icons/ai';

import { useStateContext } from '../contexts/ContextProvider';
import { cartData } from '../assets/dummy';
import Button from './Button';

const Cart = () => {

  const { currentColor, handleClick } = useStateContext();

  return (

    <div className='bg-half-transparent w-full fixed nav-item top-0 right-0 z-50'>
      
      <div className="float-right h-screen duration-100 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8 w-full">

       <div className="flex justify-between items-center">

       <div className="flex gap-3">
        <p className='font-semibold text-lg'> Shopping Cart </p>
       </div>

        <button 
        type='button'
        className='text-xl rounded-full p-3 hover:bg-light-gray-500 block'
        onClick={() => handleClick(!'cart')}
        >
        <AiOutlineCloseCircle />
        </button> 

       
       
       </div>
       
        <div className='mt-5'>
       {
        cartData?.map((item, index) => (
          <div key={index}>
          <div>
            <div className="flex items-center leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4">
              <img className="rounded-lg h-80 w-24" src={item.image} alt=""/>
               <div>
                <p className='font-semibold'>{item.name}</p>
                <p className='text-gray-600 dark:text-gray-400 text-sm font-semibold'>{item.category}</p>
                
                <div className="flex gap-4 mt-2 items-center">
                <p className='font-semibold text-lg'>{item.price}</p>
                
                <div className="flex items-center border-1 border-r-0 border-color rounded">
                 <p className='p-2 border-r-1 dark:border-gray-600 border-color text-red-600 cursor-pointer'><AiOutlineMinus /></p>
                 <p className='p-2 border-r-1 dark:border-gray-600 border-color text-green-600'>0</p>
                 <p className='p-2 border-r-1 dark:border-gray-600 border-color text-green-600 cursor-pointer'><AiOutlinePlus /></p>
                </div>
                
                </div>
               
               </div>
            </div>
          </div>
          </div>
        ))
       }

<div className="mt-3 mb-3">
       
       <div className="flex justify-between items-center">
         <p className='text-gray-500 dark:text-gray-200'>Sub Total</p>
         <p className='font-semibold'>$890</p>
       </div>

       <div className="flex justify-between items-center mt-3">
        <p className='text-gray-500 dark:text-gray-200'>Total</p>
        <p className='font-semibold'>$890</p>
       </div>

       <div className="mt-5">
       <Button 
       color='white'
       bgColor={currentColor}
       text="Place Order"
       borderRadius='10px'
       width="full"
       />
      </div>
      
      </div>


       </div>
       

       
       

      </div>
    </div>
      
  )
}

export default Cart
