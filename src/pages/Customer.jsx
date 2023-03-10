import React from 'react';
import {GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter} from '@syncfusion/ej2-react-grids'
import { customersData, customersGrid } from '../assets/dummy';
import { Header } from '../components';



const Customer = () => {
  return (
    <div className='m-2 mt-10 md:m-10 p-8 md:p-10 bg-white rounded-2xl md:rounded-3xl'> 
      
      <Header category="Page" title="Customers"/>
      <GridComponent
      id='gridcomp'
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={['Delete']}
      editSettings={{ allowDeleting: true,
                     allowEditing: true}}
      width='auto'
      >
        <ColumnsDirective>
        {
          customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))
        }
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter ]}/>
      </GridComponent>

    </div>
  )
}

export default Customer