import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
  return (
    <>
        <Navbar/>
        <div className='flex'>
        <Sidebar/>
        <div className='container max-w-[100%]'>
            {children}
        </div>    
        </div>
        
        
    </>
  )
}

export default Layout