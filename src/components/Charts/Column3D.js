import React from 'react'
import ReactFC from 'react-fusioncharts'
import FusionCharts from 'fusioncharts'
import Chart from 'fusioncharts/fusioncharts.charts'
import Theme from 'fusioncharts/themes/fusioncharts.theme.gammel'

const Column3D = ({ chartData }) => {
  const chartConfigs = {
    type: 'column3d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Most popular',
        yAxisName: 'Stars',
        xAxisName: 'Repos',
        xAxisNameFontSize: '16px',
        yAxisNameFontSize: '16px',
        theme: 'gammel',
      },
      data: chartData,
    },
  }
  return <ReactFC {...chartConfigs} />
}

export default Column3D
