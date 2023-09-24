import React from 'react'
import {Menu, Bell, userIcon} from '../assets'

const Navbar = () => {
  return (
    <div className="flex w-full h-[6.375rem] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] bg-[#1976D2] ">
        <nav className="flex w-full pt-[1.625rem] pb-[1rem] pl-[2rem] sm:mx-10 mr-10 text-white">
            <div>
            <button>
            <img className='w-[2.134rem] h-[2.138rem]'
            src={Menu} alt='Menu'
            />
            </button>
            <p>Menu</p>
            </div>
            <div className='w-full flex justify-end pr-[2rem]'>
            <div className='flex flex-col'>
            <button className='flex justify-center'>    
            <img className='w-[2.134rem] h-[2.138rem]'
            src={Bell} alt='Bell'
            />
            </button>
            <p>Notifications</p>
            </div>
            <div className='flex flex-col pl-6'>
            <button className='flex justify-center'>    
            <img className='w-[2.134rem] h-[2.138rem] bg-cyan-300 rounded-full'
            src={userIcon} alt='userIcon'
            />
            </button>
            <p>Notifications</p>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar