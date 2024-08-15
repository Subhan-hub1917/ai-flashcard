"use client"
import React, { useState } from 'react'

const Flashcard = ({data}) => {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

  return (
            <div className="card" onClick={handleClick}>
            <div className={`card__inner ${isFlipped ? 'is-flipped' : ''}`}>
                    <div className="p-8 text-lg font-medium bg-slate-300 text-indigo-950 card__face card__face--front">
                        <h2 className='text-indigo-950'>{data.front}</h2>
                    </div>
                    <div className="card__face card__face--back  rounded-xl">
                        <div className="bg-slate-300 card__content text-center rounded-xl">
                            <div className="p-5 card__body text-base text-indigo-950 h-full overflow-hidden text-center ">
                                <h3>Answer</h3>
                                <p className='text-lg font-medium'>{data.back}</p>
                                </div>
                        </div>
                    </div>
                    </div>
                    </div>
    )
}

export default Flashcard