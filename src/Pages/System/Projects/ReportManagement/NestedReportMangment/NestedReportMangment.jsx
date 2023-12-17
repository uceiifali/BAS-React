
import React, { useEffect, useState } from 'react'
import PieChart from '../../../../../Components/pieChart';
import DataTableComponent from '../../../../../Components/DataTableComponent';
import { useParams } from 'react-router-dom';
import "./NestedReportMangment.css"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 

const NestedReportMangment = () => {
    const [showReport, setShowReport] = useState(false)
    const reportsData = Array.from({ length: 3 }).map((_, index) => {
        return {
            id: 1,
            ProjectName: 'BSA',
            ProjectNumber: '53543',
            ClientType: 'فردي',
            createdAt: '19-1-2020',
            ProjectType: " تصميم",
            display: <img src={process.env.PUBLIC_URL + "/icons/view.png"} onClick={() => {
                setShowReport(true)
            }} className='display_project  rounded' alt=' display project' />,
            edit: <img src={process.env.PUBLIC_URL + "/edit.png"}
                // onClick={() => { setShowReport(true) }}

                className=' edit_project  rounded' alt=' edit project' />
        }
    });
    const columns = [
        {
            name: 'م',
            selector: row => row.id,
        },
        {
            name: 'اسم المشروع',
            selector: row => row.ProjectName,
        },
        {
            name: ' رقم الطلب ',
            selector: row => row.ProjectNumber,
        },
        {
            name: '  نوع  العميل',
            selector: row => row.ClientType,
        },

        {
            name: 'تاريخ الانشاء',
            selector: row => row.createdAt,
        },


        {
            name: '    عرض',
            selector: row => row.display,
        },
        {
            name: '  تعديل',
            selector: row => row.edit,
        },
    ];
    const { projectType } = useParams()


    console.log(projectType)
    useEffect(() => {


    }, [projectType])
    return (
        <div className='ReportManagement NestedReportMangment'>
            <div className='AllRequestsPieChartContainer d-flex justify-center align-items-center w-100 '>
                <PieChart
                    colors={["#EFAA20", "#E40038"]}
                    width={500}
                    labels={[" التصميم 50 ", "الاشراف على التنفيذ 50 ",]} series={[7, 3]}
                />

            </div>
            <fieldset className='TableContainer   px-2 mx-auto mt-3'>
                {
                    projectType === 'Design' ?
                        <legend className='text-center ' > كل التقارير
                            (تصميم)
                        </legend> :
                        <legend className='text-center '>كل التقارير (اشراف علي التنفيذ)</legend>
                }





                <div className='mt-3   '>
                    <DataTableComponent className={"overflow-x-hidden overflow-y-auto datatableComponent"} columns={columns} data={reportsData} />
                </div>
            </fieldset>


        </div>
    )
}

export default NestedReportMangment