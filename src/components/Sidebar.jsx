import React from 'react'
import {logout} from '../assets'


const Sidebar = () => {
  return (
    <div className='flex flex-col '>
        <div className='flex flex-col bg-cyan-300 w-[20rem] h-[69rem]'>
            <div className='bg-cyan-100 w-full h-[42rem] mt-[7rem]'>
                <div className='flex flex-wrap h-[7rem] pl-9 content-center'>
                    <button className='text-2xl font-medium'>Dashboard</button>
                </div>
                <div className='flex flex-wrap h-[7rem] pl-9 content-center'>
                    <button className='text-2xl font-medium'>Company Profile</button>
                </div>
                <div className='flex flex-wrap h-[7rem] pl-9 content-center'>
                    <button className='text-2xl font-medium'>Manage Products</button>
                </div>                                       <div className='flex flex-wrap h-[7rem] pl-9 content-center'>
                    <button className='text-2xl font-medium'>Orders</button>
                </div>
                <div className='flex flex-wrap h-[7rem] pl-9 content-center'>
                    <button className='text-2xl font-medium'>Settings</button>
                </div>
                <div className='flex flex-wrap h-[7rem] pl-9 content-center'>
                    <button className='text-2xl font-medium'>About Us</button>
                </div>                                                   
            </div>
            <div className='flex h-full flex-wrap content-end pb-[10rem] pl-[2rem]'>
                <img className='flex h-[1.9rem] w-[1.5rem]'
                 src={logout} alt='logout'
                />
                <button className='text-2xl font-medium pl-2'>Logout</button>
            </div>
        </div>

    </div>
  )
}

export default Sidebar