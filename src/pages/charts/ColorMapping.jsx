import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Tooltip, Legend, RangeColorSettingsDirective, RangeColorSettingDirective } from '@syncfusion/ej2-react-charts';
import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping } from '../../assets/dummy';
import {ChartsHeader} from '../../components';



const ColorMapping = () => {

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl'>
    <ChartsHeader category="Color Mapping" title="USA CLIMATE - WEATHER BY MONTH" />
    <div className="w-full">
      <ChartComponent
      id='charts'
      primaryXAxis={ColorMappingPrimaryXAxis}
      primaryYAxis={ColorMappingPrimaryYAxis}
      chartArea={{ border: {width: 0 }}}
      legendSettings={{ mode: 'Range', background: 'white'}}
      tooltip={{ enable: true }}
      >
        <Inject services={[ColumnSeries, Tooltip, Category, Legend ]}/>
        <SeriesCollectionDirective>
          <SeriesDirective 
          dataSource={colorMappingData[0]}
          name="USA"
          xName="x"
          yName="y"
          type="Column"
          cornerRadius={{
            topLeft: 10,
            topRight: 10,
          }}
          />
        </SeriesCollectionDirective>
        <rangeColorMapping>

          {
            rangeColorMapping.map((item, index) => <RangeColorSettingDirective key={index} {...item} />
          )
          }

        </rangeColorMapping>
      </ChartComponent>
    </div>
    </div>
  )
}

export default ColorMapping