import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, Tooltip, LineSeries } from '@syncfusion/ej2-react-charts';
import { lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis } from '../../assets/dummy';


const LineCharts = () => {
  return (
    <ChartComponent>
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]}/>
      <SeriesCollectionDirective>
        {
          lineCustomSeries.map((item,index) => 
          <SeriesDirective key={index} {...item} />
          )
        }
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineCharts
