import React, { useContext, useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { Box, Button, IconButton } from "@mui/material";
import { Accordion } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import Style from "./PlanModel.module.css";
import SystemControler from "../../../Components/System/SystemControler/SystemControler";
import ProjectContextProvier, { ProjectContext } from "./Projects/ProjectContext";
import { DataTable } from "./Projects";

const NavItem = ({ title,search }) => {
  const {setProjects} = useContext(ProjectContext)

  return (
    <div className="tab p-2 my-2 rounded-md bg-[#2B2B40] text-white/50 text-end w-100">
      <button
      onClick={()=> setProjects(DataTable?.filter(item=> item.status === search))}
      className="w-full">{title}</button>
    </div>
  );
};

const CustomNav = ({ title, path, items }) => {
  return (
    <Accordion defaultActiveKey={null}>
      <Accordion.Item eventKey="0" className={`custom-accordion-item`}>
        <Link to={path}>
          <Accordion.Header>
            {title}
            <MdKeyboardArrowDown size={20} />
          </Accordion.Header>
        </Link>

        <Accordion.Body className="my-2">
          <div className="tabs  d-flex justify-content-center align-items-center flex-column">
            {items.map(({ title,search }, index) => (
              <NavItem title={title} search={search} key={index} />
            ))}
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default function PlanModel() {
  const [openAddPlan, setOpenAddPlan] = useState(false);
  return (
    <Box>
      <SystemControler
        child={
          <IconButton>
            <IoMdArrowDropright color="white" fontSize={25} />
          </IconButton>
        }
      />

      <div className="grid grid-cols-4 gap-4">
        <div className="py-4 px-2  bg-[#1E1E2D] h-[801px] rounded-[19px]">
          <p className="text-white">كل المهام</p>
          <div className="flex  justify-center flex-col">
            <CustomNav
              title={"المشاريع"}
              path={"/System/plans/projects"}
              items={[
                { title: "مشاريع قيد التنفيذ" , search: "قيد التنفيذ"},
                { title: "مشاريع معلقه" , search: "معلقه"},
                { title: "مشاريع منتهيه" , search: "منتهيه"},
              ]}
            />
            <CustomNav
              title={"المهام"}
              path={"/System/plans/tasks"}
              items={[
                { title: "مهمة 1" },
                { title: "مهمة 2" },
                { title: "مهمة 3" },
              ]}
            />
          </div>
        </div>
        <div className="p-2 col-span-3 bg-[#1E1E2D] h-[801px]  rounded-[19px]">
          
            <Outlet />
        </div>
      </div>
    </Box>
  );
}
