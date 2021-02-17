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
            <button onClick={handleClick} className="text-3xl bg-gray-300 p-1 pb-3">
                | <span className="underline text-xl">{numBalls}</span> |
            </button>
        </div>
    )

}

export default Bin