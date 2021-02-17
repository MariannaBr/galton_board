import React, { useState } from 'react'

interface BinProps {
    id: number
    onClick: any
    numBalls: number
}

const Bin = ({id, onClick, numBalls}: BinProps) => {

    function handleClick() {
        onClick(id)
    }

    return (
        <div className="">
            <button onClick={handleClick} className="text-3xl bg-gray-300 p-6 ">
                {numBalls}
            </button>
        </div>
    )

}

export default Bin