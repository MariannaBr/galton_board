import React, { useState } from 'react'
import Chart from 'react-apexcharts'

interface GraphProps {
  bins: number[]
  values: number[]
}

const Graph= ({bins, values}: GraphProps) => {

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
      data: values
    }
  ]



  return (
    <div className="h-1/2">
      <Chart type="bar" width="100%" height="400px" options={options} series={series} />
    </div>
  )
}

export default Graph
