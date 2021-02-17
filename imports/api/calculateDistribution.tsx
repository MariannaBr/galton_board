
// Create random sample from uniform distribution
function getUniformSample() {
    return Math.random()
  }

  // Create a sample from standard normal distrubion using n = 2000, enough uniform samples => Central Limit Theorem
  const n: number = 1000
  function getNormalSample(n: number) {
    const samplesArray: number[] = []
    for (var i=0; i<n; i++) {
      samplesArray.push(getUniformSample())
    }
    const samplesSum: number = samplesArray.reduce((a,b) => a+b)
    return (2.0 * Math.sqrt(n) * ((samplesSum / n) - 0.5))
  }

  // Create an array of samples from standard normal distribution
  function getArrayNormalSamples(balls: number, mean: number) {
    const normalSamplesArray: number[] = []
    for (var i=0; i<balls; i++) {
      let sample = Math.round(getNormalSample(n)) + mean
      if (sample < 0) {
        sample = 0
      } else if (sample > 9) {
        sample = 9
      }
      normalSamplesArray.push(sample)
    }
    return normalSamplesArray
  }

  // Calculate the amount of samples ending in every bin
  function calculateValuesInBins(balls: number, mean: number, numberOfBins: number[]) {
    const arr: number[] = getArrayNormalSamples(balls, mean)
    const values: number[] = []
    for (var k=0; k<numberOfBins.length; k++) {
      values.push(0)
    }
    for (var i=0; i<arr.length; i++) {
      values[arr[i]] += 1
    }
    return values
  }

export { calculateValuesInBins }
  