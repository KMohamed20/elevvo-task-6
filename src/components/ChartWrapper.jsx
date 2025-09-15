import { useEffect, useRef } from 'react'
import { Chart } from 'chart.js'

Chart.register()

const ChartWrapper = ({ data }) => {
  const chartRef = useRef(null)

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d')
    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true }
        },
        scales: {
          y: { beginAtZero: true, ticks: { color: '#6b7280' } },
          x: { ticks: { color: '#6b7280' } }
        }
      }
    })
  }, [data])

  return <canvas ref={chartRef} height="150" />
}

export default ChartWrapper
