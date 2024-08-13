import React from 'react'

const Footer = () => {
  return (
    <footer className='relative bg-white w-screen overflow-hidden '>
        <div>
            <svg class="wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path  fill="#1E1B4B" fill-opacity="1" d="M0,160 C360,320 1080,0 1440,160 L1440,320 L0,320 Z"></path>
            </svg>
            <div className='bg-indigo-950 pb-10 px-5 lg:px-20'>
                This is Footer Content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nisi, asperiores magni nostrum eos nam mollitia minus illo numquam vel dicta et, aperiam delectus necessitatibus, nulla harum sequi. Debitis, quas.
            </div>
        </div>
    </footer>
  )
}

export default Footer