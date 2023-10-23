import React from 'react'
import "./index.css"
import MonthlyApexChart from './MonthlyApexChart'
import { ProgressBar } from 'react-bootstrap'
import DatePicker from 'react-datepicker'

import { useState } from 'react'

import DataTableComponent from '../../../DataTableComponent'
const ProfessinollInformation = () => {
  const [Montlyhwork, setMontlyhwork] = useState(null)
  const [projectType, setProjectType] = useState("مشاريع منتهية")
  console.log(projectType)
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


  ]
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
    },


  ]
  return (
    <div className='ProfessinollInformation'>
      <div className='MonthlyApexChart ' style={{ background: "#0A0D10" }}>
        <MonthlyApexChart />
      </div>
      <div className='golden-square p-3 mt-2'>
        <div className='d-flex align-items-center'>
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
        <div className=' goals    '><p>الاهداف</p>
          <ProgressBar className='w-100   ' variant='warning' now={37} />
          <p style={{ fontSize: "12px" }} className='my-2'>وصلت إلى 37% من هدفك</p>


        </div>
        <div>
          <p className='golden'>  المشاريع</p>
          <svg className='mb-4' xmlns="http://www.w3.org/2000/svg" width="59" height="2" viewBox="0 0 59 2" fill="none">
            <path d="M1 1L58 1" stroke="#D59921" stroke-width="2" stroke-linecap="round" />
          </svg>
          <div className={`d-flex   gap-4 justify-content-center`}>
            <div className={`project-card ${projectType=="مشاريع منتهية"&&   "golden-border"} `}onClick={() => {
              setProjectType("مشاريع منتهية")
                 
            }}>
              <p className={`main-text  mb-0`}>مشاريع منتهية </p>
              <h3>  1</h3>
            </div>
            <div className={`project-card ${projectType=="مشاريع قيد التنفيذ"&& "golden-border"}`}
              onClick={() => {
                setProjectType("مشاريع قيد التنفيذ")

              }}
            >
              <p className='main-text mb-0'>مشاريع قيد التنفيذ</p>
              <h3 className=''>  2</h3>
            </div>
            <div className={`project-card  ${projectType=="مشاريع المتأخرة"&& "golden-border"}`}
              onClick={() => {
                setProjectType("مشاريع المتأخرة")

              }}
            >
              <p className='main-text mb-0'>  مشاريع المتأخرة</p>
              <h3  >  3</h3>
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