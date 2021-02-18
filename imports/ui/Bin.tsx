import React from 'react'

interface BinProps {
    key: number
    id: number
    onClick: any
    numBalls: number
}

const Bin = ({id, onClick, numBalls}: BinProps) => {

    // Clicking on the bin will send it's id to App
    function handleClick() {
        onClick(id)
    }

    return (
        <div className="">
            <button onClick={handleClick} className=" min-w-full text-lg xl:text-2xl font-medium bg-gray-500 text-green-500 p-3 xl:p-6 ">
                {numBalls}
            </button>
        </div>
    )
}

export default Bin