import React, { useState } from 'react'

interface BinProps {
    id: number
    onClick: any
    numBalls: number
    newNumBalls: any
}

const Bin = ({id, onClick, numBalls}: BinProps) => {

    function handleClick() {
        onClick(id+1)
    }

    return (
        <div className="">
            <button onClick={handleClick} className="text-5xl bg-gray-300 m-10 p-2 pb-5">
                | <span className="underline text-3xl">{numBalls}</span> |
            </button>
        </div>
    )

}

export default Bin