import React from 'react'
import ReactFC from 'react-fusioncharts'
import FusionCharts from 'fusioncharts'
import Chart from 'fusioncharts/fusioncharts.charts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme)

const Pie3D = ({ chartData }) => {
  const chartConfigs = {
    type: 'pie3d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Languages',
        theme: 'fusion',
        decimals: 0,
        pieRadius: '35%',
      },
      data: chartData,
    },
  }
  return <ReactFC {...chartConfigs} />
}

export default Pie3D
