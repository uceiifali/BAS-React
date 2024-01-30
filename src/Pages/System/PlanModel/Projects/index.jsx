import React, { useContext, useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import { IoMdMore } from "react-icons/io";
import DataTableComponent from "../../../../Components/DataTableComponent";
import { ProjectContext, useProjectContext } from "./ProjectContext";
import CustomTable from "../CustomTable";
const columns = [
  {
    name: "م",
    selector: (row) => row.id,
  },
  {
    name: "اسم المشروع",
    selector: (row) => row.projectName,
  },
  {
    name: "نوع المشروع ",
    selector: (row) => row.projectType,
  },
  {
    name: "موقع المشروع",
    selector: (row) => row.projectPlace,
  },
  {
    name: "نوع العميل",
    selector: (row) => row.clientType,
  },
  {
    name: "تاريخ التسليم",
    selector: (row) => row.DeliverDate,
  },

  {
    name: "الحالة",
    selector: (row) => row.status,
  },
  {
    name: "المسؤل",
    selector: (row) => row.owner,
  },
  {
    name: "عرض",
    selector: (row) => row.view,
  },
];

export const DataTable = [
    {
        id: 1,
        projectName: "شركة محمد ابراهيم السبيعي وأولاده ",
        projectType: "اشراف على التنفيذ",
        projectPlace: "مدينه الرياض",
        clientType: "فردي",
        DeliverDate: "13-10-2023",
        status: "معلقه",
        owner: (
          <div>
            <p>م.ايهاب</p>
            <p>م. اشرف</p>
          </div>
        ),
        view: (
          <div className="mt-2 flex justify-between items-center gap-1 my-1">
            <IconButton aria-label="delete">
              <img src="/icons/view.png" alt="" className="w-full" />
            </IconButton>
            <IconButton aria-label="options">
              <IoMdMore color="#EFAA20" />
            </IconButton>
          </div>
        ),
      },
    {
        id: 2,
        projectName: "شركة محمد ابراهيم السبيعي وأولاده ",
        projectType: "اشراف على التنفيذ",
        projectPlace: "مدينه الرياض",
        clientType: "فردي",
        DeliverDate: "13-10-2023",
        status: "معلقه",
        owner: (
          <div>
            <p>م.ايهاب</p>
          </div>
        ),
        view: (
          <div className="mt-2 flex justify-between items-center gap-1 my-1">
            <IconButton aria-label="delete">
              <img src="/icons/view.png" alt="" className="w-full" />
            </IconButton>
            <IconButton aria-label="options">
              <IoMdMore color="#EFAA20" />
            </IconButton>
          </div>
        ),
      },
    {
        id: 3,
        projectName: "شركة محمد ابراهيم السبيعي وأولاده ",
        projectType: "تصميم",
        projectPlace: "مدينه الرياض",
        clientType: "شركه",
        DeliverDate: "13-10-2023",
        status: "قيد التنفيذ",
        owner: (
          <div>
            <p>م.ايهاب</p>
            <p>م. اشرف</p>
          </div>
        ),
        view: (
          <div className="mt-2 flex justify-between items-center gap-1 my-1">
            <IconButton aria-label="delete">
              <img src="/icons/view.png" alt="" className="w-full" />
            </IconButton>
            <IconButton aria-label="options">
              <IoMdMore color="#EFAA20" />
            </IconButton>
          </div>
        ),
      },
    {
        id: 4,
        projectName: "شركة محمد ابراهيم السبيعي وأولاده ",
        projectType: "اشراف على التنفيذ",
        projectPlace: "مدينه الرياض",
        clientType: "فردي",
        DeliverDate: "13-10-2023",
        status: "معلقه",
        owner: (
          <div>
            <p>م.ايهاب</p>
            <p>م. اشرف</p>
          </div>
        ),
        view: (
          <div className="mt-2 flex justify-between items-center gap-1 my-1">
            <IconButton aria-label="delete">
              <img src="/icons/view.png" alt="" className="w-full" />
            </IconButton>
            <IconButton aria-label="options">
              <IoMdMore color="#EFAA20" />
            </IconButton>
          </div>
        ),
      },
    {
        id: 5,
        projectName: "شركة محمد ابراهيم السبيعي وأولاده ",
        projectType: "تصميم",
        projectPlace: "مدينه الرياض",
        clientType: "شركه",
        DeliverDate: "12-10-2023",
        status: "منتهيه",
        owner: (
          <div>
            <p>م.ايهاب</p>
            <p>م. اشرف</p>
          </div>
        ),
        view: (
          <div className="mt-2 flex justify-between items-center gap-1 my-1">
            <IconButton aria-label="delete">
              <img src="/icons/view.png" alt="" className="w-full" />
            </IconButton>
            <IconButton aria-label="options">
              <IoMdMore color="#EFAA20" />
            </IconButton>
          </div>
        ),
      },
    {
        id: 6,
        projectName: "شركة محمد ابراهيم السبيعي وأولاده ",
        projectType: "تصميم",
        projectPlace: "مدينه الرياض",
        clientType: "فردي",
        DeliverDate: "13-10-2023",
        status: "معلقه",
        owner: (
          <div>
            <p>م.ايهاب</p>
          </div>
        ),
        view: (
          <div className="mt-2 flex justify-between items-center gap-1 my-1">
            <IconButton aria-label="delete">
              <img src="/icons/view.png" alt="" className="w-full" />
            </IconButton>
            <IconButton aria-label="options">
              <IoMdMore color="#EFAA20" />
            </IconButton>
          </div>
        ),
      },
    {
        id: 7,
        projectName: "شركة محمد ابراهيم السبيعي وأولاده ",
        projectType: "تصميم",
        projectPlace: "مدينه الرياض",
        clientType: "فردي",
        DeliverDate: "13-10-2023",
        status: "منتهيه",
        owner: (
          <div>
            <p>م. اشرف</p>
          </div>
        ),
        view: (
          <div className="mt-2 flex justify-between items-center gap-1 my-1">
            <IconButton aria-label="delete">
              <img src="/icons/view.png" alt="" className="w-full" />
            </IconButton>
            <IconButton aria-label="options">
              <IoMdMore color="#EFAA20" />
            </IconButton>
          </div>
        ),
      },
]

export default function Projects() {
    const {projects,setProjects} = useContext(ProjectContext)
    useEffect(()=>{
        setProjects(DataTable)
    },[])
  return (
    <div>
      <CustomTable
        
        columns={columns}
        data={projects}
        className={" border-golden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#EFAA20] overflow-scroll "}
      />
    </div>
  );
}
