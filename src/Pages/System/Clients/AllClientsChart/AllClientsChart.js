import React from 'react'
import "./index.css"

import AllClientsPieChart from '../../../../Components/System/Clients/AllClientsPieChart/AllClientsPieChart'
import AllClientstLineChart from '../../../../Components/System/Clients/AllClientstLineChart/AllClientstLineChart'
const AllClientsChart = () => {
    return (
        <div className=' p-4 d-flex gap-5 AllClientsChart  align-items-center flex-column'>
      <div className='AllRequestsPieChartContainer w-100  d-flex align-items-center justify-content-center' >
        
        <AllClientsPieChart />

      </div>
      <div className='AllRequestsLineChartContainer w-100  d-flex align-items-center justify-content-center' >

        <AllClientstLineChart    />
      </div>



    </div>

    )
}
export default AllClientsChart