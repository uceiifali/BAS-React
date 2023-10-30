import React from 'react'
import "./index.css"
import DesignRequestChart from '../../../../Components/System/Requests/DesignRequestChart/DesignRequestChart'
import DataTableComponent from '../../../../Components/DataTableComponent'
const DesignRequest = () => {

    const columns = [
        {
          name: 'م',
          selector: row => row.id,
        },
        {
          name: 'اسم المشروع',
          selector: row => row.ProjectName,
        },
        {
          name: ' رقم الطلب ',
          selector: row => row.ProjectType,
        },
        {
          name: '  تاريخ الاستلام',
          selector: row => row.recivedDate,
        },
        {
          name: '   نوع المشروع',
          selector: row => row.deliveryDate,
        },
        {
            name: '    الحالة',
            selector: row => row.deliveryDate,
          },
          {
            name: '    عرض',
            selector: row => row.deliveryDate,
          },
          {
            name: '    تعديل',
            selector: row => row.deliveryDate,
          },
      ];
      const FinisedProjectData = [
        {
          id: 1,
          ProjectName: 'BSA',
          ProjectType: 'تصميم',
          recivedDate: '12-10-2023',
          deliveryDate: '12-5-2024',
        },
    
        {
          id: 2,
          ProjectName: 'BSA',
          ProjectType: 'تصميم',
          recivedDate: '12-10-2023',
          deliveryDate: '12-5-2024',
        },
        {
          id: 3,
          ProjectName: 'BSA',
          ProjectType: 'تصميم',
          recivedDate: '12-10-2023',
          deliveryDate: '12-5-2024',
        },
    
    
      ]
    return (
        <div className='AllRequests'>


            <div className='designChartContainer d-flex justify-content-center align-items-center'>

                <DesignRequestChart />

            </div>



            <fieldset className='designTableContainer mx-auto mt-3'>
                <legend className='text-center'>طلبات فى الانتظار ( تصميم )</legend>
  


              <DataTableComponent/>
            </fieldset>
        </div>
    )
}

export default DesignRequest