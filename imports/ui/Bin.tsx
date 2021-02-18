import React from 'react'

interface BinProps {
    key: number
    id: number
    onClick: any
    numBalls: number
}

const Bin = ({id, onClick, numBalls}: BinProps) => {

    // Clicking on the bin will send its id to App
    function handleClick() {
        onClick(id)
    }

    return (
        <div className="">
            <button onClick={handleClick} className="flex justify-center w-14 xl:w-20 text-md xl:text-2xl font-medium bg-gray-200 text-green-500 p-2 xl:p-6 ">
                {numBalls}
            </button>
        </div>
    )
}

export default Bin