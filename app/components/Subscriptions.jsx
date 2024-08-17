import { freeSubscription } from '@/Constants'
import Link from 'next/link'
import React from 'react'
const Subscriptions = () => {
  return (
    <section className='text-white bg-white max-w-full flex justify-center items-center px-5 lg:px-20 py-20 '>
        <div className='w-full lg:w-1/3 bg-indigo-950 space-y-10 px-5 py-10 border border-white'>
            <div className='space-y-3'>
                <h1 className='text-lg font-bold '>Premium</h1>
                <h1 className='text-4xl font-bold'>Lifetime</h1>
                <p>Plan with unlimited uploads and full access to most Limbiks features.</p>
                <ul>
                    {
                        freeSubscription.map((li)=>(
                            <li className='' key={li}><i className='bi bi-check'></i>{li}</li>
                        ))
                        
                    }
                </ul>
            </div>
            <Link href="https://buy.stripe.com/test_6oE3dpgfKeA48Cs8ww" className='mt-3 hover:scale-105 bg-orange-500 text-center w-full py-3 rounded-xl font-medium'><button className='w-full mt-8 hover:scale-105 bg-orange-500 text-center py-3 rounded-xl font-medium'>2$ Subscription</button></Link>
        </div>
    </section>
  )
}

export default Subscriptions