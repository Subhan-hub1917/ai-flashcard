import React from 'react'

const Hero = () => {
  return (
    <section className='block lg:flex items-center justify-between text-lg py-20 select-none px-20 space-y-10 lg:space-y-0 '>
        <div className='space-y-7  w-full lg:w-1/2 text-center lg:text-start'>
            <h1 className='text-5xl font-bold '>AI Flashcard Generator</h1>
            <p className='font-light text-slate-400'>Upload PDFs, presentations, notes, images, and more. Limbiks generates a comprehensive deck of flashcards in seconds. Master your flashcards with our powerful study tools.</p>
        </div>
        <div className='flex flex-col items-center justify-center text-white text-center font-normal w-full lg:w-1/2  space-y-7 '>
            <h1 className='text-2xl font-normal'>Preview your generated Flashcard</h1>
            <div className='space-y-3'>
                <button className='font-bold px-14 py-2 rounded-xl bg-rose-600'><i className='bi bi-cloud me-2'></i>Click here to upload Data</button>
                <h1 className='text-sm font-extralight'>Support Data:Text</h1>
            </div>
            <div className='space-y-3'>
                <div className=''>----------------------links----------------------</div>
                <div className='flex items-center justify-center space-x-5 font-medium '>
                    <button className='bg-slate-500 px-10 py-2 rounded-xl'><i className='bi bi-youtube me-2'></i>Youtube</button>
                    <button className='bg-slate-500 px-10 py-2 rounded-xl'><i className='bi bi-github me-2'></i>Github</button>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero