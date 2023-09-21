import React from 'react'
import {logout} from '../assets'


const Sidebar = () => {
  return (
    <div className='flex flex-col '>
        <div className='flex flex-col bg-cyan-300 w-[20rem] h-[69rem]'>
            <div className='bg-cyan-100 w-full h-[42rem] mt-[7rem]'>
                <div className='flex flex-wrap h-[7rem] pl-9 content-center'>
                    <p className='text-2xl font-medium'>Dashboard</p>
                </div>
                <div className='flex flex-wrap h-[7rem] pl-9 content-center'>
                    <p className='text-2xl font-medium'>Company Profile</p>
                </div>
                <div className='flex flex-wrap h-[7rem] pl-9 content-center'>
                    <p className='text-2xl font-medium'>Manage Products</p>
                </div>                                       <div className='flex flex-wrap h-[7rem] pl-9 content-center'>
                    <p className='text-2xl font-medium'>Orders</p>
                </div>
                <div className='flex flex-wrap h-[7rem] pl-9 content-center'>
                    <p className='text-2xl font-medium'>Settings</p>
                </div>
                <div className='flex flex-wrap h-[7rem] pl-9 content-center'>
                    <p className='text-2xl font-medium'>About Us</p>
                </div>                                                   
            </div>
            <div className='flex h-full flex-wrap content-end pb-[1rem] pl-[2rem]'>
                <img className='flex h-[1.9rem] w-[1.5rem]'
                 src={logout} alt='logout'
                />
                <p className='text-2xl font-medium pl-2'>Logout</p>
            </div>
        </div>

    </div>
  )
}

export default Sidebar