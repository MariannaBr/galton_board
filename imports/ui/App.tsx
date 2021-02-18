import React, { useState } from 'react'
import Graph from './Graph'
import Bin from './Bin'
import { calculateValuesInBins } from '../api/calculateDistribution'

export const App = () => {

  const [mean, setMean] = useState<number>(5)
  const [numBalls, setNumBalls] = useState<number>(10000)

  // Create an array of bins
  const numberOfBins: number[] = []
  for (var i=0; i<10; i++) {
    numberOfBins.push(i)
  }

  // Create an array of amount of samples ended in every bin
  const values: number[] = calculateValuesInBins(numBalls, mean, numberOfBins)

  // Set the mean value based on which bin was chosen and set the number of balls from that bin for the next game
  function handleChangeMean(newMean: number) {
    setMean(newMean)
    setNumBalls(values[newMean])
  }

  return (
    <div className="bg-gray-900 h-screen flex">
      <div className="max-w-7xl mx-20 xl:mx-auto my-10">
        <h1 className="text-5xl font-bold text-green-500 flex justify-center">GALTON BOARD</h1>
        <h2 className="text-xl font-semibold text-green-500 flex justify-start mb-3">Used door: Nr. {mean}</h2>
        <h2 className="text-xl font-semibold text-green-500 flex justify-start mb-5">Number of balls: {numBalls}</h2>
        <div className="">
          <Graph bins={numberOfBins} values={values} />
        </div>
        <div className="grid grid-flow-row grid-cols-10 ml-12 mt-20 gap-10">
          {numberOfBins.map(num => <Bin key={num} id={num} onClick={handleChangeMean} numBalls={values[num]} />)}
        </div>
      </div>
    </div>
    
  )
}