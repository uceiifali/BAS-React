import React, { useEffect, useMemo, useState } from 'react'
import ConfirmPoper from '../../../../../Components/System/ConfirmPoper'
import EditDesignRequest from '../../../../../Components/System/Requests/EditRequest/EditDesignRequest'
import { useParams } from 'react-router-dom'
import DesignRequestChart from '../../../../../Components/System/Requests/DesignRequestChart/DesignRequestChart'
import DataTableComponent from '../../../../../Components/DataTableComponent'
import ShowDesignRequest from '../../../../../Components/System/ShowRequest/ShowDesignRequest'
import "./index.css"
import DesignCasesChart from '../../../../../Components/System/Requests/DesignRequestChart/DesignCasesChart/DesignCasesChart'
const DesignCasesRequest = () => {


  const [showProject, setShowProject] = useState(false)
  const [editRequest, setEditRequest] = useState(false)
  const [ConfirmUpdate, setConfirmUpdate] = useState(false)
  const [projectType, setProjectType] = useState("")
  const [projectTypeAR, setProjectTypeAR] = useState("")
  const [chartColor, setChartColor] = useState("")


  const DesignCasesProjects = Array.from({ length: 10 }).map((_, index) => {
    return {
      id: 1,
      ProjectName: 'BSA',
      ProjectNumber: '53543',
      createdAt: '12-10-2023',
      ProjectType: 'تصميم',
      status: projectType,
      display: <img src={process.env.PUBLIC_URL + "/icons/view.png"} onClick={() => { setShowProject(true) }} className='display_project  rounded' alt=' display project' />,
      edit: <img src={process.env.PUBLIC_URL + "/edit.png"} onClick={() => { setEditRequest(true) }} className=' edit_project  rounded' alt=' edit project' />
    }
  });
  const { DesignProjectType } = useParams()


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
      name: ' تاريخ الانشاء',
      selector: row => row.createdAt,
    },
    {
      name: '   نوع المشروع',
      selector: row => row.ProjectType,
    },
    {
      name: '    الحالة',
      selector: row => row.status,
    },
    {
      name: '    عرض',
      selector: row => row.display,
    },
    {
      name: '    تعديل',
      selector: row => row.edit,
    },
  ];
  console.log(projectTypeAR)
  useMemo(() => {
    switch (DesignProjectType) {
      case "inProgress":
        setProjectType("inProgress")
        setProjectTypeAR("طلبات قيد التنفيذ")
        setChartColor("#4200FF")
        break;
      case "pending":
        setProjectType("pending")
        setProjectTypeAR("طلبات فى انتظار الموافقة")
        setChartColor("#D59921")



        break;
      case "confirm":
        setProjectType("confirm")
        setProjectTypeAR("طلبات منتهية")

        setChartColor("#03795D")

        break;
      case "rejected":
        setProjectType("rejected")
        setProjectTypeAR("طلبات مرفوضة")
        setChartColor("#E40038  ")

        break;



    }
  }, [DesignProjectType])

  const callDesignData = () => {

  }

  useEffect(() => {
    //call design case data 
    callDesignData()
  }, [])



  return (
    <div className='AllRequests p-3'>
      {!showProject ? <div className='DesignCasesRequest  '>
        <div className='designChartContainer d-flex flex-column justify-content-center align-items-center'>
          <p className='my-3 fs-4 text-white' >{projectTypeAR}</p>
          <DesignCasesChart color={chartColor} projectType={projectTypeAR}


          />


        </div>



        <fieldset className='TableContainer  w-100 py-3 px-2 mx-auto mt-3'>
          <legend className='text-center '>

            {projectType === "inProgress" ? "طلبات قيد التنفيذ ( تصميم )" : projectType === "pending" ? "طلبات فى انتظار الموافقة ( تصميم )" : projectType === "confirm" ? "طلبات منتهية ( تصميم )" : projectType === "rejected" ? "طلبات مرفوضة ( تصميم )" : null}

          </legend>



          <div className='py-3    '>
            <DataTableComponent className={" overflow-y-auto   datatableComponent"} columns={columns} data={DesignCasesProjects} />
          </div>
        </fieldset>
      </div> : <ShowDesignRequest DesignProjectType={DesignProjectType} setShowProject={setShowProject} />


      }
      {editRequest && <EditDesignRequest editRequest={editRequest} setEditRequest={setEditRequest} setConfirmPoper={setConfirmUpdate} />}
      {ConfirmUpdate && <ConfirmPoper confirmPoper={ConfirmUpdate} setConfirmPoper={setConfirmUpdate} setEditRequest={setEditRequest} text={"تم تعديل الطلب فى المشاريع بنجاح  "} />}
    </div>
  )


}

export default DesignCasesRequest
