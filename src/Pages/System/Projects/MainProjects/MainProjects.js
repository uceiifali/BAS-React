import React, { useState } from "react";
import styles from "./MainProjects.module.css";
import "./MainProjects.css";
import DesignRequestChart from "../../../../Components/System/Requests/DesignRequestChart/DesignRequestChart";
import DataTableComponent from "../../../../Components/DataTableComponent.jsx";

import { Button } from "react-bootstrap";
import ConfirmPoper from "../../../../Components/System/ConfirmPoper";
import PieChart from "../../../../Components/pieChart";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ShowProjectComponent from "../../../../Components/System/Projects/ShowProjectComponent";
import EditProject from "../../../../Components/System/Projects/EditProject/EditProject";
import Image from "../../../../Components/Image.jsx";
import CustomTable from "../../../../Components/Table/index.jsx";
import { TableRow } from "../../../../Components/Table/TableRow.jsx";
import { TableCell } from "../../../../Components/Table/TableCell.jsx";
import { useGetAllProjects } from "../../../../hooks/fetchers/Projects.jsx";
import { convertDateFormat } from "../../../../helper/utils.jsx";

// projectStatus : enum[0, 1, 2]
// 0: معلقة
// 1:قيد التنفيذ
// 2:منتهيىة

// const projectStatus = {
//   Waiting : 0,
//   inProgress : 1,
//   Done : 2
// }

const MainProjects = () => {
  const [showProject, setShowProject] = useState(false);
  const [editProject, setEditProject] = useState(false);
  const [ConfirmUpdate, setConfirmUpdate] = useState(false);

  // Display all projects  data


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
      name: "    تاريخ الانشاء",
    },

    {
      name: "   نوع المشروع",
    },
    {
      name: "    عرض",
    },
    {
      name: "  تعديل",
    },
  ];

  const { ProjectTime } = useParams();
  console.log("ProjectTime: ",ProjectTime);
  const { data: projects , isLoading } = useGetAllProjects();
  const [filteredProjects,setFilteredProjects] = useState([])
  const [project,setProject] = useState({})
  // console.log("project: ", project);
  // get all the main projects
  useEffect(()=>{
    const filteredKey = ProjectTime === "Waiting" ? 0 : ProjectTime === "inProgress" ? 1 : ProjectTime === "Done" ? 2 : null
    console.log("filteredKey: ",filteredKey);
    const filteredData = projects?.filter(project => project.projectStatus == filteredKey)
    setFilteredProjects(filteredData)
  },[ProjectTime,isLoading])
  const getAllMainProjects = () => {};
  useEffect(() => {
    getAllMainProjects();
    setShowProject(false);
  }, []);

  return (
    <div className="rounded-[19px] bg-[#1e1e2d]">
      {!showProject ? (
        <div className=" NestedMainProjects  ">
          <div
            className={` ${styles.pieChartProjects} d-flex flex-column justify-content-center align-items-center`}
          >
            <PieChart
              height={350}
              colors={["#EFAA20", "#E40038"]}
              series={[60, 30]}
              labels={["التصميم", "الاشراف علي التنفيذ"]}
            />
          </div>

          <fieldset className="TableContainer  py-3 px-2 mx-auto mt-3">
            <legend className="text-center ">كل المشاريع</legend>

            <div className="mt-3 !h-[400px] overflow-scroll scrollbar-none">
              {/* <DataTableComponent
                className={"!h-[400px]"}
                columns={columns}
                data={MainProjectsData}
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
              {/* {!filteredProjects || !filteredProjects?.length > 0 && <p className="text-white text-2xl text-center">لا يوجد بيانات لعرضها</p>} */}
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

export default MainProjects;
