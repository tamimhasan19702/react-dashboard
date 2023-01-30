import React from 'react';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import Button from './Button';
import { userProfileData } from '../assets/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../assets/avatar.jpg';


const UserProfile = () => {

   const  { currentColor, handleClick} = useStateContext();

  return (
    <div className='bg-half-transparent w-full fixed nav-item top-0 right-0'>
      <div className="float-right h-screen duration-100 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8 w-full">
       
       <div className="flex justify-between items-center">
        <p className='font-semibold text-lg'> User Profile  </p>

        <button 
        type='button'
        className='text-xl rounded-full p-3 hover:bg-light-gray-500 block'
        onClick={() => handleClick(!'userProfile')}
        >
        <AiOutlineCloseCircle />
        </button> 
       
       </div>

      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img 
        className='rounded-full h-24 w-24'
        src={avatar} 
        alt="user-profile" 
        />
        <div>
          <p className='font-semibold text-xl dark:text-gray-400'>Tareq Monower</p>
          <p className='text-gray-500 text-sm dark:text-gray-400'>Administrator</p>
          <p className='text-gray-500 font-semibold text-sm dark:text-gray-400'> info@admin.com </p>
        </div>

      </div>

      <div>
        {
          userProfileData.map((item, index) => (
            <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer dark:hover:bg-[#42464D]">
              
              <button
              type='button'
              style={{color: item.iconColor, backgroundColor: item.iconBg }}
              className="text-xl rounded-lg p-3 hover:bg-light-gray"
              >
              {item.icon}
              </button>
            
            <div>
              <p className='font-semibold dark:text-gray-200'>{item.title}</p>
              <p className='font-gray-500 text-sm dark:text-gray-400'>{item.desc}</p>
            </div>

            </div>
          ))
        }
      </div>


       <div className="mt-5">
        <Button 
        color='white'
        bgColor={currentColor}
        text="Log Out"
        borderRadius='10px'
        width="full"
        />
       </div>

      </div>
      
    </div>
  )
}

export default UserProfile
