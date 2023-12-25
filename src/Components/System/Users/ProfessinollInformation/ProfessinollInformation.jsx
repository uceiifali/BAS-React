import { useState } from 'react'

import DataTableComponent from '../../../DataTableComponent.jsx'

import "./index.css"
import MonthlyApexChart from './MonthlyApexChart'
import { AddHrType } from '../../../../Context/AddHr.js'
import { useContext } from 'react'
import PersonalAttachments from '../PersonalAttachments/PersonalAttachments.js'
const ProfessinollInformation = () => {
    const [Montlyhwork, setMontlyhwork] = useState(null)
    const [projectType, setProjectType] = useState("مشاريع منتهية")
    const { openHr } = useContext(AddHrType)

    console.log(openHr)
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
            name: ' نوع الامشروع',
            selector: row => row.ProjectType,
        },
        {
            name: '  تاريخ الاستلام',
            selector: row => row.recivedDate,
        },
        {
            name: '  تاريخ التسليم',
            selector: row => row.deliveryDate,
        },
    ];
    const FinisedProjectData = [
        {
            id: 1,
            ProjectName: 'BSA',
            ProjectType: 'تصميم',
            recivedDate: '12-10-2023',
            deliveryDate: '12-5-2024',
        },
        {
            id: 2,
            ProjectName: 'BSA',
            ProjectType: 'تصميم',
            recivedDate: '12-10-2023',
            deliveryDate: '12-5-2024',
        },
        {
            id: 3,
            ProjectName: 'BSA',
            ProjectType: 'تصميم',
            recivedDate: '12-10-2023',
            deliveryDate: '12-5-2024',
        },
        {
            id: 4,
            ProjectName: 'BSA',
            ProjectType: 'تصميم',
            recivedDate: '12-10-2023',
            deliveryDate: '12-5-2024',
        },]

    const OnProgressProjectsData = [
        {
            id: 1,
            ProjectName: 'BSA',
            ProjectType: 'اشراف',
            recivedDate: '12-10-2023',
            deliveryDate: '12-5-2024',
        },

        {
            id: 2,
            ProjectName: 'BSA',
            ProjectType: 'اشراف',
            recivedDate: '12-10-2023',
            deliveryDate: '12-5-2024',
        },
        {
            id: 3,
            ProjectName: 'BSA',
            ProjectType: 'اشراف',
            recivedDate: '12-10-2023',
            deliveryDate: '12-5-2024',
        },
        {
            id: 4,
            ProjectName: 'BSA',
            ProjectType: 'ااشراف',
            recivedDate: '12-10-2023',
            deliveryDate: '12-5-2024',
        },


    ]
    const LateProjectData = [
        {
            id: 1,
            ProjectName: 'BSA',
            ProjectType: 'اخراج',
            recivedDate: '12-10-2023',
            deliveryDate: '12-5-2024',
        },

        {
            id: 2,
            ProjectName: 'BSA',
            ProjectType: 'اخراج',
            recivedDate: '12-10-2023',
            deliveryDate: '12-5-2024',
        },
        {
            id: 3,
            ProjectName: 'BSA',
            ProjectType: 'اخراج',
            recivedDate: '12-10-2023',
            deliveryDate: '12-5-2024',
        }, {
            id: 4,
            ProjectName: 'BSA',
            ProjectType: 'دراسات',
            recivedDate: '12-10-2023',
            deliveryDate: '12-5-2024',
        },


    ]
    return (
        <div className='ProfessinollInformation'>
            <div className='MonthlyApexChart ' style={{ background: "#0A0D10" }}>
                <MonthlyApexChart />
            </div>
            <div className='golden-square p-3 mt-2'>

                <div>
                    <p className='golden text-xl'>  المشاريع</p>

                    <div className={`d-flex   gap-4 justify-content-center`}>
                        <div className={`project-card ${projectType == "مشاريع منتهية" && "golden-border"} `} onClick={() => {
                            setProjectType("مشاريع منتهية")

                        }}>
                            <p className={`  mb-0`}>مشاريع منتهية </p>
                            <h3>  3</h3>
                        </div>
                        <div className={`project-card ${projectType == "مشاريع قيد التنفيذ" && "golden-border"}`}
                            onClick={() => {
                                setProjectType("مشاريع قيد التنفيذ")

                            }}
                        >
                            <p className=' mb-0'>مشاريع قيد التنفيذ</p>
                            <h3 className=''>  2</h3>
                        </div>
                        <div className={`project-card  ${projectType == "مشاريع المتأخرة" && "golden-border"}`}
                            onClick={() => {
                                setProjectType("مشاريع المتأخرة")
                            }}>
                            <p className=' mb-0'>مشاريع المتاخرة</p>
                            <h3 className=''>  1</h3>



                        </div>
                    </div>




                </div>
                <div className='my-3 w-100 golden-square'>
                    <DataTableComponent data={projectType == "مشاريع منتهية" ? FinisedProjectData : projectType == "مشاريع قيد التنفيذ" ? OnProgressProjectsData : projectType == "مشاريع المتأخرة" ? LateProjectData : ""} columns={columns} />
                </div>
              
            </div>
        </div>
    )
}
export default ProfessinollInformation