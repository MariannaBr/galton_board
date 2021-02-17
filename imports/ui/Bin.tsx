import React from 'react'

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
            <button onClick={handleClick} className=" min-w-full text-2xl font-medium bg-gray-500 text-green-500 p-6 ">
                {numBalls}
            </button>
        </div>
    )
}

export default Bin