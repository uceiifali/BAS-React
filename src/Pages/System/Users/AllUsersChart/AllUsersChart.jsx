import React, { useContext, useState } from 'react'
import "./index.css"
import { showAddUpdateUser } from '../../../../Context/CheckAddUpdateUserVisability'
import AddUserButton from '../../../../Components/System/AddUserButton/AddUserButton'
import SystemControler from '../../../../Components/System/SystemControler/SystemControler'
import Select from '../../../../Components/FormHandler/Select'
import AllUsersPieChart from '../../../../Components/System/Users/AllUsersChart/AllUsersPieChart'
import AllUsersColumnChart from '../../../../Components/System/Users/AllUsersChart/AllUsersColumnChart'
import AddUpdateUser from '../../../../Components/System/Users/AddUpdateUser/AddUpdateUser'
import DeptamentSlider from '../../../../Components/System/Users/AllUsersChart/DeprtamentSlide/DeptamentSlider'
import { CountriesChart } from './CountriesChart'
import { Link, Outlet } from 'react-router-dom'
import AllUserCategories from '../../../../Components/System/Users/AllUserCategories/AllUserCategories'



const AllUsersChart = () => {

    const { showAddUserModel, setShowAddUserModel } = useContext(showAddUpdateUser)
    const [showSaudiOption, setShowSaudiOption] = useState(false)


    return (

        <div className='AllUsersChart'>
            <SystemControler child={showAddUserModel ? <p
                onClick={() => {
                    setShowAddUserModel(false)


                }}

                className='pointer text-white'>
                <svg className='mx-3' xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                    <path d="M8.52681 7.88703C8.7714 7.68698 8.7714 7.31302 8.52681 7.11297L0.816557 0.806657C0.490077 0.539626 2.88033e-07 0.771911 3.0647e-07 1.19369L8.57785e-07 13.8063C8.76222e-07 14.2281 0.490078 14.4604 0.816558 14.1933L8.52681 7.88703Z" fill="white" />
                </svg>
                المستخدمين  /  <span className='main-text'>إضافة جديدة</span>

            </p> :


                <AddUserButton />} />
            {showAddUserModel ? <AddUpdateUser /> : <div className='row'>
                <div className='col-md-3'>
                    <AllUserCategories />
                </div>
                <div className='col-md-9'>

                    <Outlet />

                </div>


            </div>}


        </div >
    )
}

export default AllUsersChart