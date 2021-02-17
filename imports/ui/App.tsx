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
    <div className="max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold text-purple-500 flex justify-center my-10">GALTON BOARD</h1>
      <h2 className="text-xl font-semibold text-purple-700 flex justify-start mb-3">Used door: Nr. {mean}</h2>
      <h2 className="text-xl font-semibold text-purple-700 flex justify-start mb-5">Number of balls: {numBalls}</h2>
      <div className="h-1/2">
        <Graph bins={numberOfBins} values={values} />
      </div>
      <h2 className="text-3xl font-semibold flex justify-center text-purple-500 my-10">Normal distribution in Bins</h2>
      <div className="grid grid-flow-row grid-cols-10 ml-16 gap-6">
        {numberOfBins.map(num => <Bin key={num} id={num} onClick={handleChangeMean} numBalls={values[num]} />)}
      </div>
    </div>
  )
}
