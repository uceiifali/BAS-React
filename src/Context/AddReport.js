import React, { createContext, useState } from 'react'
import App from '../App'


export const AddReportType = React.createContext()

export const AddReport = ({ children }) => {

    const [openReport, setOpenReport] = useState(false)
    const [reportType, setReportType] = useState('')
    return (



        <div>
            <AddReportType.Provider value={{ openReport, setOpenReport, reportType, setReportType }}>

                {children}

            </AddReportType.Provider >

        </div>
    )



}
