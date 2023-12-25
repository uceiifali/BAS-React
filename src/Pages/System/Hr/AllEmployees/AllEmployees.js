
import style from "./AllEmployees.module.css"
import CountryChart from '../../Users/AllUsersChart/CountryChart'
import React, { useContext, useEffect } from 'react'
import { AddHrType } from '../../../../Context/AddHr'
import AddUpdateUser from '../../../../Components/System/Hr/AddUpdateUser/AddUpdateUser'

const AllEmployees = () => {

    const { openHr, setOpenHr, HrType, setHrType } = useContext(AddHrType)


    useEffect(() => {
        setOpenHr(false)
        setHrType("Employees")

    }, [openHr, HrType])



    return (



        <div>
            {openHr === true && HrType == "Employees" ? <AddUpdateUser /> :

                <CountryChart />
            }


        </div>
    )
}

export default AllEmployees
