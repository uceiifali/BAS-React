import React from 'react'
import { useState } from 'react'
import DatePicker from "react-datepicker"
import "./index.css"
export const AccountaingInformation = () => {
    const [Montlyhwork, setMontlyhwork] = useState(null)
    return (
        <div>
            <div className='golden-square p-3'>
                <div className='d-flex mb-3 align-items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                        <path d="M17 0H0L6.8 7.77417V13.1487L10.2 14.7923V7.77417L17 0Z" fill="#D59921" />
                    </svg>
                    <p className='mx-4 my-2'>الشهر الحالي</p>
                    <DatePicker


                        placeholderText=" ادخل  الشهر    "
                        selected={Montlyhwork}
                        dateFormat="dd-MM-yyyy"
                        className='w-100  text-black form-control'

                        onChange={(Montlyhwork) => { setMontlyhwork(Montlyhwork) }}
                    />
                </div>
                <p >المرتب الثابت : <span>0000</span></p>
                <div className='d-flex  mt-4  justify-content-between'>
                    <p> نسبة الزيادة : <span> ------</span></p>
                    <p>  بداية من شهر    : <span> ------</span></p>
                </div>
            </div>
      
        </div>
    )
}
