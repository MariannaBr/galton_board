import React, { useState } from 'react'
import Graph from './Graph'
import Bin from './Bin'
import { calculateValuesInBins } from '../api/calculateDistribution'

export const App = () => {

  const [mean, setMean] = useState<number>(5)
  const [numBalls, setNumBalls] = useState(10000)

  // Create an array of numbers for bins
  const numberOfBins: number[] = []
  for (var i=0; i<10; i++) {
    numberOfBins.push(i)
  }

  const values: number[] = calculateValuesInBins(numBalls, mean, numberOfBins)

  function handleChangeMean(newMean: number) {
    setMean(newMean)
    setNumBalls(values[newMean])
  }

  return (
    <div className="bg-gray-900 h-screen flex">
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="text-5xl font-bold text-green-500 flex justify-center">GALTON BOARD</h1>
        <h2 className="text-xl font-semibold text-green-500 flex justify-start mb-3">Used door: Nr. {mean}</h2>
        <h2 className="text-xl font-semibold text-green-500 flex justify-start mb-5">Number of balls: {numBalls}</h2>
        <div className="h-1/2">
          <Graph bins={numberOfBins} values={values} />
        </div>
        <div className="grid grid-flow-row grid-cols-10 ml-12 mt-20 gap-10">
          {numberOfBins.map(num => <Bin key={num} id={num} onClick={handleChangeMean} numBalls={values[num]} />)}
        </div>
      </div>
    </div>
    
  )
}
