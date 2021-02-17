import React, { useState } from 'react'
import Graph from './Graph'
import Bin from './Bin'

export const App = () => {

  const [mean, setMean] = useState<number>(4)
  const [numBalls, setNumBalls] = useState<number>(10000)

  function handleChangeMean(newMean) {
    setMean(newMean)
  }

  function handleChangeNumBalls(newNumBalls) {
    setNumBalls(newNumBalls)
  }

  const NumberOfBins = []
  for (var i=0; i<10; i++) {
    NumberOfBins.push(i)
  }

  const balls = 500

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold text-purple-500 flex justify-center my-10">GALTON BOARD</h1>
      <h2 className="text-xl font-semibold text-purple-700 flex justify-start mb-3">Used door: {mean}</h2>
      <h2 className="text-xl font-semibold text-purple-700 flex justify-start mb-5">Number of balls: {numBalls}</h2>
      <div className="h-1/2">
        <Graph bins={NumberOfBins} />
      </div>
      <h2 className="text-3xl font-semibold flex justify-center text-purple-500 my-10">Normal distribution in Bins</h2>
      <div className="grid grid-flow-row grid-cols-10 ml-16 gap-6">
        {NumberOfBins.map(num => <Bin key={num} id={num} onClick={handleChangeMean} numBalls={balls} newNumBalls={handleChangeNumBalls} />)}
      </div>
    </div>
  )
}
