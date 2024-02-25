import React, { useContext, useState } from "react";
import styles from "./MainProjects.module.css";
import "./MainProjects.css";
import DesignRequestChart from "../../../../Components/System/Requests/DesignRequestChart/DesignRequestChart.js";
import DataTableComponent from "../../../../Components/DataTableComponent.jsx";

import { Button } from "react-bootstrap";
import ConfirmPoper from "../../../../Components/System/ConfirmPoper.jsx";
import PieChart from "../../../../Components/pieChart.jsx";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ShowProjectComponent from "../../../../Components/System/Projects/ShowProjectComponent.js";
import EditProject from "../../../../Components/System/Projects/EditProject/EditProject.js";
import { AddReportType } from "../../../../Context/AddReport.js";
import Image from "../../../../Components/Image.jsx";
import { TableCell } from "../../../../Components/Table/TableCell.jsx";
import { TableRow } from "../../../../Components/Table/TableRow.jsx";
import CustomTable from "../../../../Components/Table/index.jsx";
import { useGetAllProjects } from "../../../../hooks/fetchers/Projects.jsx";
import { convertDateFormat } from "../../../../helper/utils.jsx";
const NestedMainProjects = () => {

  
  const [showProject, setShowProject] = useState(false);
  const [editProject, setEditProject] = useState(false);
  const [ConfirmUpdate, setConfirmUpdate] = useState(false);

  const { reportType, setReportType } = useContext(AddReportType);

  // handle table data components
  const NestedMainProjectsdata = Array.from({ length: 3 }).map((_, index) => {
    return {
      id: index+1,
      ProjectName: "BSA",
      ProjectNumber: "53543",
      ClientType: "فردي",
      createdAt: "19-1-2020",
      ProjectType: " تصميم",
      display: (
        <Image
          src={process.env.PUBLIC_URL + "/icons/view.svg"}
          onClick={() => {
            setShowProject(true);
          }}
          className="display_project  rounded"
          alt=" display project"
        />
      ),
      edit: (
        <Image
          src={process.env.PUBLIC_URL + "/icons/edit.svg"}
          onClick={() => {
            setEditProject(true);
          }}
          className=" edit_project  rounded"
          alt=" edit project"
        />
      ),
    };
  });
  const columns = [
    {
      name: "م",
    },
    {
      name: "اسم المشروع",
    },
    {
      name: " رقم الطلب ",
    },
    {
      name: "  نوع  العميل",
    },

    {
      name: "تاريخ الانشاء",
    },

    {
      name: "    عرض",
    },
    {
      name: "نوع المشروع",
    },
    {
      name: "  تعديل",
    },
  ];
  const { ProjectTime } = useParams();
  const { ProjectType } = useParams();
  console.log("ProjectTime: ",ProjectTime);
  console.log("ProjectType: ",ProjectType);

  const { data: projects , isLoading } = useGetAllProjects();
  const [filteredProjects,setFilteredProjects] = useState([])
  const [project,setProject] = useState({})
  // console.log("project: ", project);
  // get all the main projects
  useEffect(()=>{
    const filteredKeyProjectTime = ProjectTime === "Waiting" ? 0 : ProjectTime === "inProgress" ? 1 : ProjectTime === "Done" ? 2 : null
    const filteredKeyProjectType = ProjectType === "Design" ? 1 : ProjectType === "Review" ? 2 : null
    console.log("filteredKeyProjectTime: ",filteredKeyProjectTime);
    const filteredData = projects?.filter(project => project.projectStatus == filteredKeyProjectTime && project.requestId.projectType ==filteredKeyProjectType)
    setFilteredProjects(filteredData)
  },[ProjectTime,ProjectType,isLoading])

  // get all the main projects

  const getAllNestedData = () => {};
  useEffect(() => {
    getAllNestedData();
    setShowProject(false);

    setReportType("");
  }, [reportType]);

  return (
    <div className="AllRequests p-3">
      {!showProject ? (
        <div className=" NestedMainProjects  ">
          <div
            className={` ${styles.pieChartProjects} d-flex flex-column justify-content-center align-items-center`}
          >
            <p className="text-white">
              {" "}
              {ProjectType == "Design" ? "التصميم" : "الاشراف علي التنفيذ"}
            </p>
            <PieChart
              height={350}
              colors={["#EFAA20"]}
              series={[60]}
              labels={[
                ProjectType == "Design" ? "التصميم" : "الاشراف علي التنفيذ",
              ]}
            />
          </div>

          <fieldset className="TableContainer  py-3 px-2 mx-auto mt-3">
            <legend className="text-center ">كل المشاريع</legend>

            <div className="mt-3 !h-[400px] overflow-scroll scrollbar-none">
              {/* <DataTableComponent
                className={"  !h-[400px]"}
                columns={columns}
                data={NestedMainProjectsdata}
              /> */}
              <CustomTable columns={columns} data={filteredProjects}>
                {filteredProjects && filteredProjects?.length > 0
                  ? filteredProjects?.map(
                      ({ _id, requestId, orderNumber, createdDate }, index) => (
                        <TableRow
                          className={`my-2 border !border-[#efaa207f] ${
                            index % 2 === 0 ? "bg-[#151521]" : ""
                          }`}
                          key={_id}
                        >
                          <TableCell textColor="#ffffff7f">
                            {index + 1}
                          </TableCell>
                          <TableCell>{requestId?.projectName}</TableCell>
                          <TableCell>{orderNumber}</TableCell>
                          <TableCell>
                            {requestId?.clientType === 1
                              ? "حكومي أو مستثمر"
                              : requestId?.clientType === 2
                              ? "شركة أو مؤسسة"
                              : requestId?.clientType === 3
                              ? "فردي"
                              : null}
                          </TableCell>
                          <TableCell>
                            {convertDateFormat(createdDate)}
                          </TableCell>
                          <TableCell>
                            {requestId?.projectType === 1
                              ? "تصميم"
                              : requestId?.projectType === 2
                              ? "اشراف علي التنفيذ"
                              : null}
                          </TableCell>
                          <TableCell>
                            <Image
                              src={process.env.PUBLIC_URL + "/icons/view.svg"}
                              onClick={() => {
                                setShowProject(true);
                                setProject(projects[index]);
                              }}
                              className="display_project  rounded"
                              alt=" display project"
                            />
                          </TableCell>
                          <TableCell>
                            <Image
                              src={process.env.PUBLIC_URL + "/icons/edit.svg"}
                              onClick={() => {
                                setEditProject(true);
                                console.log(editProject);
                              }}
                              className=" edit_project  rounded"
                              alt=" edit project"
                            />
                          </TableCell>
                        </TableRow>
                      )
                    )
                  : null}
              </CustomTable>
              
            </div>
          </fieldset>
        </div>
      ) : (
        <ShowProjectComponent
          showProject={showProject}
          setShowProject={setShowProject}
          data={project}
        />
      )}

      {editProject && (
        <EditProject
          editProject={editProject}
          setEditProject={setEditProject}
          setConfirmUpdate={setConfirmUpdate}
        />
      )}
      {ConfirmUpdate && (
        <ConfirmPoper
          confirmPoper={ConfirmUpdate}
          setConfirmPoper={setConfirmUpdate}
          setEditRequest={setEditProject}
          text={"تم تعديل الطلب فى المشاريع بنجاح  "}
        />
      )}
    </div>
  );
};
export default NestedMainProjects;
