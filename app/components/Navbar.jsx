import { navItems } from '@/Constants'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between space-x-5 lg:space-x-0 py-5 px-5 lg:px-20 text-lg font-medium text-white bg-inherit'>   
        <div>
            <h1 className='text-4xl'>Limbiks</h1>
        </div>
        <div className='hidden lg:flex items-center justify-center space-x-3'>
            {
                navItems.map((nav)=>(
                    <button className='' key={nav}>{nav}</button>
                ))

            }
        </div>
        <div className='hidden lg:flex items-center justify-center space-x-3'>
            <button className='hover:scale-105'>Login</button>
            <button className='hover:scale-105 bg-rose-600 px-10 py-5 rounded-full'>Signup</button>

        </div>
        <div className='block lg:hidden'>
            <i className=' text-2xl bi bi-list '></i>
        </div>
    </nav>
  )
}

export default Navbar