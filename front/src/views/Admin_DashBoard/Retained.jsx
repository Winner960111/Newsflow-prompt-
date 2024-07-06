import React from 'react'
import Chart from 'react-google-charts'
const LineData = [
  ['x', '1/1/2020', '1/15/2020','1/22/2020'],
  [0, 0, 0,20],
  [1, 10, 5,10],
  [2, 20, 15,12],
  [3, 25, 9,5],
  [4, 50, 20,45],
  [5, 75, 5,10],
  [6, 11, 3,2],
  [7, 27, 19,6],
]
const LineChartOptions = {
  hAxis: {
    title: 'Week',
  },
  vAxis: {
    title: '% Retained',
  },
  series: {
    1: { curveType: 'function' },
  },
}
export default function Retained() {
  return (
    <div>
 <div className="chart_multi_line ">
       
        <Chart
          width={'100%'}
          height={'300px'}
          chartType="LineChart"
          className='LineChart'
          loader={<div>Loading Chart</div>}
          data={LineData}
          options={LineChartOptions}
          rootProps={{ 'data-testid': '2' }}
        />
      </div>
    </div>
  )
}
