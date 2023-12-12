import React from 'react'
import DatePicker from "react-datepicker"
const FormDatePicker = ({ date, setDate, placeholderText }) => {
    return (
        <DatePicker
            selected={date}
            placeholderText={placeholderText}
            onChange={date => setDate(date)}
            dateFormat="dd-MM-yyyy"
            className='w-100 form-control'
        />


    )
}

export default FormDatePicker
