import React from 'react';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import Button from './Button';
import { chatData } from '../assets/dummy';
import { useStateContext } from '../contexts/ContextProvider';



const Notification = () => {

   const { currentColor, handleClick} = useStateContext();


  return (
    <div className='bg-half-transparent w-full fixed nav-item top-0 right-0'>
      <div className="float-right h-screen duration-100 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8 w-full">
      
       <div className="flex justify-between items-center">

       <div className="flex gap-3">
         
          <p className="font-semibold text-lg dark:text-gray-200">Notification</p>
          <button type="button" className="text-white  text-xs rounded p-1 px-2 " style={{ background: currentColor}}>
            5 New
          </button>
        
        </div>


        <button 
        type='button'
        className='text-xl rounded-full p-3 hover:bg-light-gray-500 block'
        onClick={() => handleClick(!'notification')}
        >
        <AiOutlineCloseCircle />
        </button> 
       
       </div>


       <div className="mt-5">
       {
       
       chatData?.map((item, index) => (
          <div key={index} className="flex items-center leading-8 gap-5 border-b-1 border-color p-3">
            <img className="rounded-full h-10 w-10" src={item.image} alt={item.message} />
            <div>
              <p className="font-semibold dark:text-gray-200">{item.message}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
            </div>
          </div>
        ))
       
       }

        <div className="mt-5">
       
          <Button color="white" bgColor={currentColor} text="See all notifications" borderRadius="10px" width="full" />
       
        </div>
     
      </div>
       
       
       </div>


       </div>
  )
}

export default Notification;