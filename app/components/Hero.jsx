import { ThemeContext } from '@/Context';
import { SignedIn, SignIn, SignUpButton } from '@clerk/nextjs';
import Link from 'next/link'
import React, { useContext, useEffect } from 'react'

const Hero = () => {
    
    const {authenticated, setAuthenticated}=useContext(ThemeContext);
    // useEffect(()=>{
    // },[authenticated])

    return (
    <section className='relative block w-screen lg:flex items-center justify-between text-lg py-20 select-none px-5 lg:px-20 space-y-10 lg:space-y-0 '>
        <div className='z-10 space-y-7  w-full lg:w-1/2 text-center lg:text-start'>
            <h1 className='text-5xl font-bold '>AI Flashcard Generator</h1>
            <p className='font-light text-slate-400'>Upload PDFs, presentations, notes, images, and more. Limbiks generates a comprehensive deck of flashcards in seconds. Master your flashcards with our powerful study tools.</p>
        </div>
        <div className='z-10 flex flex-col items-center justify-center text-white text-center font-normal w-full lg:w-1/2  space-y-7 '>
            <h1 className='text-2xl font-medium'>Preview your generated Flashcard</h1>
            <div className='space-y-3'>
            {
                <SignedIn>
                    <Link href='/GenerateFlashCard'>
                        <button className='hover:scale-105 font-bold text-sm lg:text-lg px-14 py-2 rounded-xl bg-rose-600'><i className='bi bi-cloud me-2'></i>Click here to upload Data</button>
                    </Link>
                </SignedIn>    
            }
                <h1 className='text-sm font-extralight'>Support Data:Text</h1>
            </div>
            <div className='space-y-3'>
                <div className=''>-------------------links-------------------</div>
                <div className='flex items-center justify-center space-x-5 font-medium '>
                    <button className='hover:scale-105 bg-slate-500 px-5 lg:px-10 py-2 rounded-xl'><i className='bi bi-youtube me-2'></i>Youtube</button>
                    <button className='hover:scale-105 bg-slate-500 px-5 lg:px-10 py-2 rounded-xl'><i className='bi bi-github me-2'></i>Github</button>

                </div>
            </div>
        </div>
        <div className='z-0 opacity-[0.1] absolute w-80 h-80 rounded-full bottom-0 left-8 bg-gradient-to-br from-white to-rose-600'></div>
        <div className='z-0 opacity-[0.1] absolute w-80 h-80 rounded-full top-0 lg:top-0 lg:bottom-20 right-12 bg-gradient-to-br from-white to-rose-600'></div>
    </section>
  )
}

export default Hero