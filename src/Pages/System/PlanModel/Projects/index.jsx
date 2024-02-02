import React, { useContext, useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import { IoMdMore } from "react-icons/io";
import CustomTable from "../components/CustomTable";

import { CiSearch } from "react-icons/ci";
import { TableContext } from "../context/TableContext";
import { ProjectContext } from "../context/ProjectContext";
import ViewIconButton from "../components/ViewIconButton";
import { Link } from "react-router-dom";

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

const ShowButton = ({id}) => {
  return (
    <Link to={`/System/plans/show-project/${id}`} id={id} aria-label="delete">
      <img src="/icons/view.png" alt="" className="w-full" />
    </Link>
  );
};
const OptionsButton = ({id}) => {
  return (
    <IconButton aria-label="options" sx={{p:0}}>
          <IoMdMore color="#EFAA20" />
        </IconButton>
  );
};

export const DataTable = Array.from({ length: 10 }).map((_, index) => {
  return {
    id: index+1,
    projectName: "شركة محمد ابراهيم السبيعي وأولاده ",
    projectType: "اشراف على التنفيذ",
    projectPlace: "مدينه الرياض",
    clientType: "فردي",
    DeliverDate: "13-10-2023",
    status: index % 3 === 0 ? "قيد التنفيذ": index % 2 === 0 ? "معلقه": "منتهيه",
    owner: (
      <div>
        <p>م.ايهاب</p>
        <p>م. اشرف</p>
      </div>
    ),
    view: (
      <div className="mt-2 flex justify-between items-start gap-1 my-1">
        <ShowButton id={index+1}/>
        <OptionsButton id={index+1}/>
      </div>
    ),
  }
})

// export const DataTable = [
//   {
//     id: 1,
//     projectName: "شركة محمد ابراهيم السبيعي وأولاده ",
//     projectType: "اشراف على التنفيذ",
//     projectPlace: "مدينه الرياض",
//     clientType: "فردي",
//     DeliverDate: "13-10-2023",
//     status: "معلقه",
//     owner: (
//       <div>
//         <p>م.ايهاب</p>
//         <p>م. اشرف</p>
//       </div>
//     ),
//     view: (
//       <div className="mt-2 flex justify-between items-start gap-1 my-1">
//         <ShowButton  id={1}/>
//         <IconButton aria-label="options">
//           <IoMdMore color="#EFAA20" />
//         </IconButton>
//       </div>
//     ),
//   },
//   {
//     id: 2,
//     projectName: "شركة محمد ابراهيم السبيعي وأولاده ",
//     projectType: "اشراف على التنفيذ",
//     projectPlace: "مدينه الرياض",
//     clientType: "فردي",
//     DeliverDate: "13-10-2023",
//     status: "معلقه",
//     owner: (
//       <div>
//         <p>م.ايهاب</p>
//       </div>
//     ),
//     view: (
//       <div className="mt-2 flex justify-between items-start gap-1 my-1">
//         <ShowButton  id={2}/>
//         <IconButton aria-label="options">
//           <IoMdMore color="#EFAA20" />
//         </IconButton>
//       </div>
//     ),
//   },
//   {
//     id: 3,
//     projectName: "شركة محمد ابراهيم السبيعي وأولاده ",
//     projectType: "تصميم",
//     projectPlace: "مدينه الرياض",
//     clientType: "شركه",
//     DeliverDate: "13-10-2023",
//     status: "قيد التنفيذ",
//     owner: (
//       <div>
//         <p>م.ايهاب</p>
//         <p>م. اشرف</p>
//       </div>
//     ),
//     view: (
//       <div className="mt-2 flex justify-between items-start gap-1 my-1">
//         <ShowButton  id={3}/>
//         <IconButton aria-label="options">
//           <IoMdMore color="#EFAA20" />
//         </IconButton>
//       </div>
//     ),
//   },
//   {
//     id: 4,
//     projectName: "شركة محمد ابراهيم السبيعي وأولاده ",
//     projectType: "اشراف على التنفيذ",
//     projectPlace: "مدينه الرياض",
//     clientType: "فردي",
//     DeliverDate: "13-10-2023",
//     status: "معلقه",
//     owner: (
//       <div>
//         <p>م.ايهاب</p>
//         <p>م. اشرف</p>
//       </div>
//     ),
//     view: (
//       <div className="mt-2 flex justify-between items-start gap-1 my-1">
//         <ShowButton  id={1}/>
//         <IconButton aria-label="options">
//           <IoMdMore color="#EFAA20" />
//         </IconButton>
//       </div>
//     ),
//   },
//   {
//     id: 5,
//     projectName: "شركة محمد ابراهيم السبيعي وأولاده ",
//     projectType: "تصميم",
//     projectPlace: "مدينه الرياض",
//     clientType: "شركه",
//     DeliverDate: "12-10-2023",
//     status: "منتهيه",
//     owner: (
//       <div>
//         <p>م.ايهاب</p>
//         <p>م. اشرف</p>
//       </div>
//     ),
//     view: (
//       <div className="mt-2 flex justify-between items-start gap-1 my-1">
//         <ShowButton  id={5}/>
//         <IconButton
          
//           aria-label="options"
//         >
//           <IoMdMore color="#EFAA20" />
//         </IconButton>
//       </div>
//     ),
//   },
//   {
//     id: 6,
//     projectName: "شركة محمد ابراهيم السبيعي وأولاده ",
//     projectType: "تصميم",
//     projectPlace: "مدينه الرياض",
//     clientType: "فردي",
//     DeliverDate: "13-10-2023",
//     status: "معلقه",
//     owner: (
//       <div>
//         <p>م.ايهاب</p>
//       </div>
//     ),
//     view: (
//       <div className="mt-2 flex justify-between items-start gap-1 my-1">
//         <ShowButton  id={6}/>
//         <IconButton aria-label="options">
//           <IoMdMore color="#EFAA20" />
//         </IconButton>
//       </div>
//     ),
//   },
//   {
//     id: 7,
//     projectName: "شركة محمد ابراهيم السبيعي وأولاده ",
//     projectType: "تصميم",
//     projectPlace: "مدينه الرياض",
//     clientType: "فردي",
//     DeliverDate: "13-10-2023",
//     status: "منتهيه",
//     owner: (
//       <div>
//         <p>م. اشرف</p>
//       </div>
//     ),
//     view: (
//       <div className="mt-2 flex justify-between items-start gap-1 my-1">
//         <ShowButton  id={7}/>
//         <IconButton aria-label="options">
//           <IoMdMore color="#EFAA20" />
//         </IconButton>
//       </div>
//     ),
//   },
// ];

export default function Projects() {
  // proudacts[i].titel.toLowerCase().includes(term.toLowerCase())
  const { projects, setProjects } = useContext(ProjectContext);
  const { fullWidthTable, setFullWidthTable } = useContext(TableContext);
  const [serach, setSearch] = useState("");
  useEffect(() => {
    setProjects(DataTable);
  }, [serach]);

  return (
    <div>
      <div className="grid grid-cols-2 py-2">
        <div className="flex items-center gap-3 ">
          <IconButton
            onClick={() => setFullWidthTable(!fullWidthTable)}
            aria-label="toggle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <line x1="5" y1="0.5" x2="17" y2="0.5" stroke="#D59921" />
              <line x1="5" y1="11.5" x2="17" y2="11.5" stroke="#D59921" />
              <line
                x1="4.37121e-08"
                y1="1"
                x2="2.14286"
                y2="1"
                stroke="#D59921"
              />
              <line
                x1="4.37121e-08"
                y1="11.7148"
                x2="2.14286"
                y2="11.7148"
                stroke="#D59921"
              />
              <line y1="6.5" x2="17" y2="6.5" stroke="#D59921" />
              <line y1="15.5" x2="17" y2="15.5" stroke="#D59921" />
            </svg>
          </IconButton>
          <p className="text-[#EFAA20] font-semibold text-xl"> كل المشاريع </p>
        </div>
        <div
          dir="ltr"
          className="bg-[#2B2B40] px-3 py-2 rounded-[7.721px] flex items-center gap-2"
        >
          <CiSearch fontSize={20} fontWeight={500} />
          <input
            type="text"
            value={serach}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Search...."
            className="w-full text-white bg-transparent text-start"
          />
        </div>
      </div>
      <CustomTable
        columns={columns}
        data={[
          ...projects?.filter((project) =>
            project.projectName.includes(serach)
          ),
        ]}
        className={
          " border-golden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#EFAA20] overflow-scroll "
        }
      />
    </div>
  );
}
