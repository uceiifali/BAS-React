import React, { useContext, useEffect } from 'react'
import AllUsersPieChart from '../../../../Components/System/Users/AllUsersChart/AllUsersPieChart'
import AllUsersColumnChart from '../../../../Components/System/Users/AllUsersChart/AllUsersColumnChart'

import DeprtamentSlider from '../../../../Components/System/Users/AllUsersChart/DeprtamentSlide/DeptamentSlider'
import { Container } from 'react-bootstrap'
import { AddHrType } from '../../../../Context/AddHr'
import AddUpdateUser from '../../../../Components/System/Hr/AddUpdateUser/AddUpdateUser'

export const CountriesChart = () => {
  

  return (


    <>

  

      


          <div className='all-users-Chart p-3'>

            <div className=' AllUsersPieChart d-flex  w-75  justify-content-end'>
              <AllUsersPieChart />

            </div>


            <fieldset className='All-users-columnChart-container '>
              <legend className='text-white text-center'>كل المستخدمين     </legend>

              <div className='All-users-columnChart  d-flex   align-items-center flex-column'>


                <AllUsersColumnChart />

                <div className='w-90 mx-auto mt-3'>
                  <DeprtamentSlider />
                </div>

              </div>
            </fieldset>





          </div>


    </>




  )
}
