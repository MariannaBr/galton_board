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
      categories: bins,
      labels: {
        style: {
          colors: "#D1D5DB",
          fontSize: '14px'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: "#D1D5DB",
          fontSize: '14px'
        }
      }
    },
    dataLabels: {
      offsetY: 20,
      style: {
        fontSize: '16px',
        colors: ["#6EE7B7"]
      }
    },
    colors: ["#10B981"]
  }

  const series = [
    {
      name: "number of balls",
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
