import React from 'react'
import DatePicker from "react-datepicker"
import { CiCalendar } from "react-icons/ci";
function CustomInput({ value, onClick }) {
    return (
        <div className="input-group form-date-picker-group">
            <input
                type="text"
                className="form-control"
                value={value}
                onClick={onClick}
                readOnly
            />
            <div className="input-group-append">
                <span onClick={onClick} className="input-group-text  pointer">
                    <CiCalendar color='#FFF' className='border-none' />
                </span>
            </div>
        </div>
    );
}
const FormDatePicker = ({ date, setDate, placeholderText }) => {
    return (
        <DatePicker
            selected={date}
            placeholderText={placeholderText}
            onChange={date => setDate(date)}
            dateFormat="dd-MM-yyyy"
            className='w-100 form-control'
            todayButton={"TODAY"}
            customInput={<CustomInput />}

        />





    )
}

export default FormDatePicker


