"use client"
import React, { useState } from 'react'

const Flashcard = ({data}) => {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

  return (
            <div className="card" onClick={handleClick}>
            <div className={`card__inner  bg-gradient-to-br from-white to-orange-300 rounded-xl ${isFlipped ? 'is-flipped' : ''}`}>
                    <div className="p-8 text-xl  font-bold  text-indigo-950 card__face card__face--front">
                        <h2 className='text-indigo-950'>{data.front}</h2>
                    </div>
                    <div className="card__face card__face--back  rounded-xl">
                        <div className="bg-gradient-to-b from-white to-orange-300 card__content text-center rounded-xl">
                            <div className="p-5 card__body text-indigo-950 h-full overflow-hidden text-center ">
                                <h3 className='text-xl font-bold py-2'>Answer</h3>
                                <p className='text-lg font-semibold'>{data.back}</p>
                                </div>
                        </div>
                    </div>
                    </div>
                    </div>
    )
}

export default Flashcard