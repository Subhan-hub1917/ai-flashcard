import { ThemeContext } from '@/Context';
import { SignedIn, SignUpButton } from '@clerk/nextjs';
import Link from 'next/link'
import React, { useContext, useEffect } from 'react'

const Hero = () => {
    
    const {authenticated, setAuthenticated}=useContext(ThemeContext);
    
    return (
    <section className='relative block w-screen lg:flex items-center justify-between text-lg py-20 select-none px-5 lg:px-20 space-y-10 lg:space-y-0 '>
        <div className='z-10 space-y-7  w-full lg:w-1/2 text-center lg:text-start'>
            <h1 className='text-5xl font-bold '>AI Flashcard Generator</h1>
            <p className='font-light text-slate-400'>At FlashAI, we empower learners with cutting-edge AI technology to transform the way they study and retain information. Our mission is to make learning more efficient, personalized, and engaging by automatically generating flashcards from your input.</p>
        </div>
        <div className='z-10 flex flex-col items-center justify-center text-white text-center font-normal w-full lg:w-1/2  space-y-7 '>
            <h1 className='text-2xl font-medium'>Preview your generated Flashcard</h1>
            <div className='space-y-3'>
            {
                !authenticated &&
                <SignUpButton  mode='modal' forceRedirectUrl='/'>
                    <button className='hover:scale-105 font-bold text-sm lg:text-lg px-14 py-2 rounded-xl bg-rose-600'><i className='bi bi-cloud me-2'></i>Click here to upload Data</button>
                </SignUpButton>
            }
            {
                <SignedIn>
                    <Link href='/GenerateFlashCard'>
                        <button className='hover:scale-105 font-bold text-sm lg:text-lg px-14 py-2 rounded-xl bg-orange-500'><i className='bi bi-cloud me-2'></i>Click here to upload Data</button>
                    </Link>
                </SignedIn>
                  
            }
                <h1 className='text-sm font-medium flex items-center justify-center'>Support Data : <i className='ms-2 text-2xl bi bi-filetype-pdf'></i></h1>
            </div>
            <div className='space-y-3'>
                <div className=''>-------------------links-------------------</div>
                <div className='flex items-center justify-center space-x-5 font-medium '>
                    <Link href='https://www.linkedin.com/in/subhan-qamar-965946282/'><button className='hover:scale-105 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 px-5 lg:px-10 py-2 rounded-xl'><i className='bi bi-linkedin me-2'></i>LinkedIn</button></Link>
                    <Link href='https://github.com/Subhan-hub1917/'><button className='hover:scale-105 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 px-5 lg:px-10 py-2 rounded-xl'><i className=' bi bi-github me-2'></i>Github</button></Link>

                </div>
            </div>
        </div>
        <div className='z--1 opacity-[0.1] absolute w-60 h-60 rounded-full bottom-0 left-8 bg-gradient-to-br from-white to-orange-500'></div>
        <div className='z--1 opacity-[0.1] absolute w-80 h-80 rounded-full top-0 lg:top-0 lg:bottom-20 right-12 bg-gradient-to-br from-white to-orange-500'></div>
    </section>
  )
}

export default Hero