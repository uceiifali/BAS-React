import React, { useContext, useEffect, useState } from 'react'
import style from "./HolidayMangment.module.css"
import { SearchComponent } from '../../../../Components/SearchComponent/SearchComponent'
import { AllCategories } from '../../../../Components/System/AllCategories/AllCategories'
import Input from '../../../../Components/FormHandler/Input'
import "./HolidayMangment.css"
import DataTableComponent from '../../../../Components/DataTableComponent'

import { AddHrType } from '../../../../Context/AddHr.js'

import ShowHolidayComponent from '../../../../Components/System/Hr/ShowHolidayComponent/ShowHolidayComponent.jsx'
import AddHoliday from '../../../../Components/System/Hr/AddHoliday/AddHoliday.jsx'

const HolidayMangment = () => {
    const [ShowHoliday, setShowHoliday] = useState(false)
    const { openHr, setOpenHr, HrType, setHrType } = useContext(AddHrType)


    const data = Array.from({ length: 2 }).map((_, index) => {
        return {
            id: 1,
            employeeName: ' حبيب ',
            employeeCode: '1234',
            holidayType: 'حج ان شاء الله',
            holidayDate: '15-10-2024',
            display: <div className=''
                onClick={() => {

                    setShowHoliday(true)
                }}
            >
                <img src={process.env.PUBLIC_URL + "/icons/view.png"} className='pointer' />
            </div>,
            status: "مقبولة"

        }
    });

    const columns = [
        {
            name: 'م',
            selector: row => row.id,
        },
        {
            name: 'اسم الموظف',
            selector: row => row.employeeName,
        },
        {
            name: 'الكود الوظيفي',
            selector: row => row.employeeCode,
        },
        {
            name: 'نوع الاجازة',
            selector: row => row.holidayType,
        },
        {
            name: 'تاريخ الاجازة',
            selector: row => row.holidayDate,
        },

        {
            name: 'عرض',
            selector: row => row.display,
        },
        {
            name: 'الحاله',
            selector: row => row.status,
        },


    ];



    useEffect(() => {
        setOpenHr(false)
        setHrType("holiday")
    }, [])










    return (
        <div>


            <ShowHolidayComponent ShowHoliday={ShowHoliday} setShowHoliday={setShowHoliday} />
            {openHr === true && HrType == "holiday" ? <AddHoliday /> : ""}

            <div className='row'>
                <div className='col-md-3'>

                    <div className={`${style.holidayTypesContainer}`}>
                        <SearchComponent />
                        <p className='text-white mt-2'>كل الاجازات</p>
                        <div className='d-flex my-3 gap-3'>



                        </div>


                    </div>


                </div>
                <div className='col-md-9'>
                    <div className={`${style.allhoildays} allhoildaysContainer p-4`}>
                        <p className='text-white  text-xl'>كل الاجازات المخصصة</p>
                        <div className='d-flex gap-3 mt-3 w-100'>
                            <p className='text-white'>بحث</p>
                            <Input className='w-100' placeholder="اسم الموظف" />
                        </div>
                        <fieldset className={`${style.allhoildaysTables} mt-5`}>
                            <legend className='text-center '>كل الاجازات</legend>
                            <DataTableComponent data={data} columns={columns} />
                        </fieldset>

                    </div>

                </div>
            </div>
        </div >
    )
}

export default HolidayMangment
