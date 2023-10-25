import React from 'react'
import AllUsersPieChart from '../../../../Components/System/Users/AllUsersChart/AllUsersPieChart'
import AllUsersColumnChart from '../../../../Components/System/Users/AllUsersChart/AllUsersColumnChart'

import DeprtamentSlider from '../../../../Components/System/Users/AllUsersChart/DeprtamentSlide/DeptamentSlider'

export const CountriesChart = () => {
  return (
    <div className='all-users-Chart p-3'>

    <div className=' AllUsersPieChart d-flex  w-75  justify-content-end'>
        <AllUsersPieChart />

    </div>


        <fieldset className='All-users-columnChart-container '>
            <legend className='text-white text-center'>كل المستخدمين     </legend>

            <div className='All-users-columnChart  d-flex   align-items-center flex-column'>


                <AllUsersColumnChart  />
                <DeprtamentSlider/>

            </div>
        </fieldset>
    




</div>
  )
}
