import React from 'react'
import ReactFC from 'react-fusioncharts'
import FusionCharts from 'fusioncharts'
import Chart from 'fusioncharts/fusioncharts.charts'
import Theme from 'fusioncharts/themes/fusioncharts.theme.candy'

ReactFC.fcRoot(FusionCharts, Chart, Theme)

const Doughnut2d = ({ chartData }) => {
  const chartConfigs = {
    type: 'doughnut2d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Stars Per Language',
        theme: 'fusion',
        doughnutRadius: '45%',
        showPercentValues: 0,
        theme: 'candy',
      },
      data: chartData,
    },
  }
  return <ReactFC {...chartConfigs} />
}

export default Doughnut2d
