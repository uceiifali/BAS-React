import React from 'react'

import AllRequestsPieChart from '../../../../Components/System/Requests/AllRequestsPieChart/AllRequestsPieChart'
import AllRequestLineChart from '../../../../Components/System/Requests/AllRequestlineChart/AllRequestLineChart'
import PieChart from '../../../../Components/pieChart'
import LineChart from '../../../../Components/LineChart'
const AllProjectsChart = () => {

    const numbers = [2, 3]
    

    return (
        <div className=' p-4 d-flex gap-5 AllRequests  align-items-center flex-column'>
            <div className='AllRequestsPieChartContainer w-100  d-flex align-items-center justify-content-center' >
                <PieChart label="كل المشاريع" colors={["#EFAA20", "#E40038", "#03795D"]} width={500} labels={["قيد التنفيذ 60 ", "معلقة 20 ", "منتهية 20"]} series={[6, 3, 1]} />

            </div>
            <div className='AllRequestsLineChartContainer w-100  d-flex align-items-center justify-content-center' >

                <LineChart

                    colors={["#00F9FF", "#D59921"]}
                    series1={{ name: "تصميم", data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10] }}
                    series2={{ name: "الاشراف على التنفيذ", data: [50, 60, 40, 20, 36, 39, 40, 30, 10, 10, 20, 20] }


                    }

                />
            </div>



        </div>
    )
}

export default AllProjectsChart