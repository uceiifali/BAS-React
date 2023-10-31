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
          selector: row => row.ProjectNumber,
        },
        {
          name: '  تاريخ الاستلام',
          selector: row => row.recivedDate,
        },
        {
          name: '   نوع المشروع',
          selector: row => row.ProjectType,
        },
        {
            name: '    الحالة',
            selector: row => row.status,
          },
          {
            name: '    عرض',
            selector: row => row.display,
          },
          {
            name: '    تعديل',
            selector: row => row.edit,
          },
      ];
      const DesignData = [
        {
          id: 1,
          ProjectName: 'BSA',
          ProjectNumber: '53543',
          recivedDate: '12-10-2023',
          ProjectType: 'تصميم',
          status:"قيد الا نتظار",
          display: <img src={process.env.PUBLIC_URL+"/HomeBackground.jpg"}  className='w-50  rounded' alt=' display project'/>,
          edit:<img src={process.env.PUBLIC_URL+"/HomeBackground.jpg"}  className='w-50  rounded' alt=' edit project'/>
        },
        {
          id: 2,
          ProjectName: 'BSA',
          ProjectNumber: '534646',
          recivedDate: '1-9-2023',
          ProjectType: 'تصميم',
          status:"مرفوض",
          display: <img src={process.env.PUBLIC_URL+"/HomeBackground.jpg"}  className='w-50  rounded' alt=' display project'/>,
          edit:<img src={process.env.PUBLIC_URL+"/HomeBackground.jpg"}  className='w-50  rounded' alt=' edit project'/>
        },
    
      ]
    return (
        <div className='AllRequests'>


            <div className='designChartContainer d-flex justify-content-center align-items-center'>

                <DesignRequestChart />

            </div>



            <fieldset className='TableContainer mx-auto mt-3'>
                <legend className='text-center '>طلبات   ( تصميم )</legend>
  


              <DataTableComponent className={"overflow-x-hidden"}  columns={columns} data={DesignData} />
            </fieldset>
        </div>
    )
}

export default DesignRequest