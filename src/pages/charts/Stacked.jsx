import React from 'react';
import { ChartsHeader } from '../../components';
import {Stacked} from '../../components';


const StackedPage = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl'>
          <ChartsHeader category='Stacked' title='Revenue Breakdown'/>

          <div className="w-full">
            <Stacked />
          </div>
    </div>

  )
}

export default StackedPage