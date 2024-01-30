import React from 'react'
import AllPlansPieChart from '../../../Components/System/Plans/AllPlansPieChart/AllPlansPieChart'

export default function PlansAnalytics() {
  return (
    <div>
      <div className="mb-5 flex justify-center border !border-[#EFAA20] rounded-md">
      <AllPlansPieChart />
      </div>
      <div className="h-[500px] border !border-[#EFAA20] rounded-md">
      </div>

    </div>
  )
}
