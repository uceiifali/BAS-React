import React, { useContext, useEffect } from 'react'
import { CountriesChart } from '../../Users/AllUsersChart/CountriesChart'
import { AddHrType } from '../../../../Context/AddHr'
import AddUpdateUser from '../../../../Components/System/Hr/AddUpdateUser/AddUpdateUser'

const EmployeesManagment = () => {
    const { openHr, setOpenHr, HrType, setHrType } = useContext(AddHrType)


    useEffect(() => {

        setOpenHr(false)
        setHrType("Employees")
        console.log(HrType)
    }, [])
    return (
        <div>

            {openHr === true && HrType == "Employees" ? <AddUpdateUser /> :

                <CountriesChart />
            }




        </div>
    )
}

export default EmployeesManagment