import React, { useState } from 'react'
import Chart from 'react-apexcharts'

interface GraphProps {
  bins: number[]
}

const Graph= ({bins}: GraphProps) => {

  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: bins
    }
  }

  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 50, 20]
    }
  ]



  return (
    <div className="h-1/2">
      <Chart type="bar" width="100%" height="400px" options={options} series={series} />
    </div>
  )
}

export default Graph
