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
                    <div className="bg-rose-600 card__face card__face--front">
                        <h2>{data.front}</h2>
                    </div>
                    <div className="card__face card__face--back  rounded-xl">
                        <div className="bg-rose-600 card__content text-center rounded-xl">
                            <div className="p-5 card__body text-base text-white h-full overflow-hidden  ">
                                <h3>Answer</h3>
                                {data.back}
                                </div>
                        </div>
                    </div>
                    </div>
                    </div>
    )
}

export default Flashcard