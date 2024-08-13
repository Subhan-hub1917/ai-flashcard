import React from 'react'

const Information = () => {
  return (
    <section className='bg-white text-black text-center w-full py-20 px-10 lg:px-20 space-y-10 z-10'>
        <h1 className='font-bold text-5xl z-10'>Stop wasting time making flashcards.</h1>
        {/* 11111111111111 */}
        <div className='font-normal text-base block lg:flex items-center justify-between space-x-7 space-y-10 lg:space-y-0 px-10'>
            <div className='text-start w-full lg:w-1/2 space-y-3'>
                <h1 className='text-3xl font-semibold'>Upload a wide variety of files</h1>
                <p>Limbiks can quickly generate flashcards from PDFs, PowerPoint presentations, documents, and even pictures of notes or text! Simply upload your file, and a complete set of flashcards will be ready in seconds. Additionally, Limbiks can create flashcards from YouTube videos and Wikipedia articles.</p>
            </div>
            <div className='w-full lg:w-1/2'>
                <img src='/image1.svg' className='w-full' alt='Limbiks'/>
            </div>
        </div>
        {/* 222222222222222222 */}
        <div className='font-normal text-base block lg:flex lg:flex-row-reverse items-center justify-between space-x-7 space-y-10 lg:space-y-0 px-10'>
            <div className='text-start w-full lg:w-1/2 space-y-3'>
                <h1 className='text-3xl font-semibold'>Start Studying in seconds</h1>
                <p>Limbiks provides easy to use study tools so you can start studying your flashcards immediately. Flashcards can also be downloaded and imported into Anki, Quizlet, Tinycards, Cram, and many other study tools!</p>
            </div>
            <div className='w-full lg:w-1/2'>
                <img src='/image2.svg' className='w-full' alt='Limbiks'/>
            </div>
        </div>
        {/* 33333333333333333333333 */}
        <div className='font-normal text-base block lg:flex items-center justify-between space-x-7 space-y-10 lg:space-y-0 px-10'>
            <div className='text-start w-full lg:w-1/2 space-y-3'>
                <h1 className='text-3xl font-semibold'>Supports 20+ Languages</h1>
                <p>Limbiks supports 21 languages including Catalan, Chinese, Croatian, Danish, Dutch, English, Finnish, French, German, Greek, Italian, Japanese, Korean, Lithuanian, Macedonian, Polish, Portuguese, Romanian, Russian, Spanish, Swedish, and Ukranian.</p>
            </div>
            <div className='w-full lg:w-1/2'>
                <img src='/image3.svg' className='w-full' alt='Limbiks'/>
            </div>
        </div>
    </section>
  )
}

export default Information