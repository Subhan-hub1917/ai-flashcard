'use client';
import { navItems } from '@/Constants'
import { ThemeContext } from '@/Context'
import { SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

import React, { useContext, useEffect, useState } from 'react'

const Navbar = () => {
    const [mobileNav,setMobileNav]=useState(false)
    const {authenticated, setAuthenticated}=useContext(ThemeContext);
    // useEffect(()=>{
    // },[authenticated])
  return (
    <nav className='relative'>   
        <div className='flex items-center overflow-hidden justify-between space-x-5 lg:space-x-0 py-5 px-5 lg:px-20 text-lg font-medium text-white bg-inherit'>
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
            {
                authenticated == true
                ?
                <UserButton/>
                :
                (
                    <>
                        <SignUpButton mode='modal' forceRedirectUrl='/'>
                            <button className='hover:scale-105'>Login</button>
                        </SignUpButton>
                        
                        <SignInButton mode='modal' forceRedirectUrl='/'>
                            <button className='hover:scale-105 bg-rose-600 px-10 py-5 rounded-full'>Signup</button>
                        </SignInButton>
                    </>
                )
            }
            </div>
            {
                authenticated ?
                    <div className='block lg:hidden'>
                        <UserButton/>
                    </div>
                :
                    <div className='block lg:hidden'>
                        <i onClick={()=>setMobileNav(!mobileNav)} className={` text-2xl bi ${ mobileNav==false ? 'bi-list':'bi-x-lg' }`}></i>
                    </div>
            }
        </div>
        {
            mobileNav
            &&
            <div className='z-10 lg:hidden absolute top-12 left-0 flex flex-col text-white text-xl py-2 font-medium space-y-3 text-center items-center justify-center w-full'>
                <SignInButton mode='modal' forceRedirectUrl='/'>
                    <button className='bg-rose-400 px-3 py-2 rounded-full'>Login</button>     
                </SignInButton>
                <SignUpButton mode='modal' forceRedirectUrl='/'>
                    <button className='bg-rose-600 px-3 py-2 rounded-full' >Signup</button>
                </SignUpButton>
            </div>
        }
    </nav>
  )
}

export default Navbar