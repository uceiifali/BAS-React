import React, { useState } from 'react'
import styles from "./MainProjects.module.css"
import "./MainProjects.css"
import DesignRequestChart from '../../../../Components/System/Requests/DesignRequestChart/DesignRequestChart'
import DataTableComponent from '../../../../Components/DataTableComponent'

import { Button } from 'react-bootstrap'
import ConfirmPoper from '../../../../Components/System/ConfirmPoper'
import PieChart from '../../../../Components/pieChart'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import ShowProjectComponent from '../../../../Components/System/Projects/ShowProjectComponent'
const MainProjects = () => {
    const [showProject, setShowProject] = useState(false)
    const [editRequest, setEditRequest] = useState(false)
    const [ConfirmUpdate, setConfirmUpdate] = useState(false)


   // Display all projects  data

    const MainProjectsData = Array.from({ length: 10 }).map((_, index) => {
        return {
            id: 1,
            ProjectName: 'BSA',
            ProjectNumber: '53543',
            ClientType: 'فردي',
            createdAt: 'تاريخ الانشاء',
            ProjectType: " تصميم",
            display: <img src={process.env.PUBLIC_URL + "/icons/view.png"} onClick={() => {
                setShowProject(true)
            }} className='display_project  rounded' alt=' display project' />,
            edit: <img src={process.env.PUBLIC_URL + "/edit.png"} className=' edit_project  rounded' alt=' edit project' />
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
            name: '   نوع المشروع',
            selector: row => row.createdAt,
        },

        {
            name: '   نوع المشروع',
            selector: row => row.ProjectType,
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

    const { ProjectTime } = useParams()




    // get all the main projects

    const getAllMainProjects = () => {

    }
    useEffect(() => {
        getAllMainProjects()
    }, [])




    return (
        <div className='AllRequests p-3'>
            {!showProject ? <div className=' NestedMainProjects  '>
                <div className={` ${styles.pieChartProjects} d-flex flex-column justify-content-center align-items-center`}>

                    {/* <p className='text-white'> {ProjectType == "Design" ? "التصميم" : "الاشراف علي التنفيذ"}

                    </p> */}
                    <PieChart height={350} colors={["#EFAA20", "#E40038"]} series={[60, 30]} labels={[
                        "التصميم", "الاشراف علي التنفيذ"

                    ]} />


                </div>




                <fieldset className='TableContainer  py-3 px-2 mx-auto mt-3'>
                    <legend className='text-center '>كل المشاريع</legend>



                    <div className='mt-3   '>
                        <DataTableComponent className={"overflow-x-hidden overflow-y-auto datatableComponent"} columns={columns} data={MainProjectsData} />
                    </div>
                </fieldset>
            </div> : <ShowProjectComponent showProject={showProject} setShowProject={setShowProject} />}



            {/* {editRequest && <EditDesignRequest editRequest={editRequest} setEditRequest={setEditRequest} setConfirmPoper={setConfirmUpdate} />} */}
            {ConfirmUpdate && <ConfirmPoper confirmPoper={ConfirmUpdate} setConfirmPoper={setConfirmUpdate} setEditRequest={setEditRequest} text={"تم تعديل الطلب فى المشاريع بنجاح  "} />}
        </div>
    )
}

export default MainProjects