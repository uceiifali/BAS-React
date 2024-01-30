import React, { useContext, useEffect, useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { Box, Button, IconButton, TextField, MenuItem } from "@mui/material";
import { Accordion } from "react-bootstrap";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Style from "./PlanModel.module.css";
import SystemControler from "../../../Components/System/SystemControler/SystemControler";
import ProjectContextProvier, {
  ProjectContext,
} from "./Projects/ProjectContext";
import { DataTable } from "./Projects";

const NavItem = ({ title, search }) => {
  const { setProjects } = useContext(ProjectContext);

  return (
    <div className="tab p-2 my-2 rounded-md bg-[#2B2B40] text-white/50 text-end w-100">
      <button
        onClick={() =>
          setProjects(DataTable?.filter((item) => item.status === search))
        }
        className="w-full"
      >
        {title}
      </button>
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
            {items.map(({ title, search }, index) => (
              <NavItem title={title} search={search} key={index} />
            ))}
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
const ModalTitle = ({ title }) => {
  return <p className="text-[#EFAA20] text-xl font-medium">إضافة مشروع جديد</p>;
};

const FormModal = ({ children, title }) => {
  return (
    <fieldset className="p-3 border !border-[#d5992133]">
      {title ? <FormTitle title={title} /> : null}

      {children}
    </fieldset>
  );
};

const FormTitle = ({ title }) => {
  return (
    <legend className="text-white text-base font-medium mx-auto text-center">
      {title}
    </legend>
  );
};

const InputLabel = ({ label, id }) => {
  return (
    <label htmlFor={id} className="text-white text-xs font-medium mb-2">
      {label}
    </label>
  );
};

const AddModal = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="p-3 border !border-[#EFAA20] rounded-[27px]">
      <ModalTitle title={"إضافة مشروع جديد"} />
      <div className="flex flex-col gap-4 ">
        <FormModal title={"بحث عن المشروع"}>
          <div className="grid grid-cols-12 justify-between">
            <div className="col-span-5">
              <InputLabel id="new-project-name" label={"اسم المشروع"} />
              <TextField
                id="new-project-name"
                type="text"
                size="small"
                select
                className="w-full bg-[#2B2B40] rounded-[7px]"
                placeholder="ابحث عن ...."
                sx={{
                  "& fieldset": {
                    border: "none",
                  },
                  "& input::placeholder": {
                    color: "#9DADE8",
                  },
                }}
              >
                <div className="bg-[#414162] text-white">
                  <MenuItem value={10}>مطاعم عشبة الليمون</MenuItem>
                  <MenuItem value={20}>مطاعم عشبة الليمون</MenuItem>
                  <MenuItem value={30}>مطاعم عشبة الليمون</MenuItem>
                  <MenuItem value={10}>مطاعم عشبة الليمون</MenuItem>
                  <MenuItem value={20}>مطاعم عشبة الليمون</MenuItem>
                  <MenuItem value={30}>مطاعم عشبة الليمون</MenuItem>
                </div>
              </TextField>
            </div>
            <div className="col-span-2"></div>
            <div className="col-span-5">
              <InputLabel id="find-project" label={"اسم مشروع جديد"} />
              <input
                id="find-project"
                type="text"
                className="w-full p-2 bg-[#2B2B40] rounded-[7px]"
                placeholder="ادخل اسم المشروع الجديد"
              />
            </div>
          </div>
        </FormModal>

        <div className="flex justify-end py-3">
          <button
            onClick={() => setShow(true)}
            className="w-[140px] h-[30px] rounded-md  bg-[#EFAA20] text-[#1E1E2D] text-[15px] font-medium"
          >
            التالى
          </button>
        </div>
        {show ? (
          <>
            <FormModal title={"تفاصيل المهمة"}>
              <div className="grid grid-cols-12 mb-5">
                <div className="col-span-5">
                  <InputLabel id="new-project-name" label={"اسم المسؤل"} />
                  <input
                    id="new-project-name"
                    type="text"
                    className="w-full p-2 bg-[#2B2B40] rounded-[7px]"
                    placeholder="اختار اسم المشرف"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 mb-5">
                <div className="col-span-5">
                  <InputLabel id="new-project-name" label={"تاريخ التسليم"} />
                  <input
                    id="new-project-name"
                    type="text"
                    className="w-full p-2 bg-[#2B2B40] rounded-[7px]"
                    placeholder="اضف تاريخ التسليم"
                  />
                </div>
                <div className="col-span-2"></div>
                <div className="col-span-5">
                  <InputLabel id="find-project" label={"تاريخ الاستلام"} />
                  <input
                    id="find-project"
                    type="text"
                    className="w-full p-2 bg-[#2B2B40] rounded-[7px]"
                    placeholder="اضف تاريخ الاستلام"
                  />
                </div>
              </div>

              <div className="">
                <InputLabel id="new-project-name" label={"تاريخ التسليم"} />
                <CKEditor
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                  }}
                  editor={ClassicEditor}
                  data="<h2>تفاصيل الاجتماع</h2>"
                  onBlur={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                  }}
                />
              </div>
            </FormModal>
            <FormModal title={"ملاحظات العميل"}>
              <div className="">
                <InputLabel id="new-project-name" label={"تاريخ التسليم"} />
                <CKEditor
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                  }}
                  editor={ClassicEditor}
                  data="<h2>تفاصيل الاجتماع</h2>"
                  onBlur={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                  }}
                />
              </div>
            </FormModal>
            <FormModal title={"ملفات المشروع"}>
              <div className="flex gap-2">
                <div
                  className={`border !border-[#D59921] !border-dashed max-w-fit rounded-[12.06px] pointer bg-[#2B2B40] py-4 px-2 flex flex-col items-center justfiy-center`}
                >
                  <div>
                    <svg
                      className="m-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M1 8H8M8 8H15M8 8V15M8 8V1"
                        stroke="#EFAA20"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p className="text-sm mx-auto text-white">اضافة جديدة</p>
                  </div>
                </div>
              </div>
            </FormModal>
            <FormModal title={"المرفقات"}>
              <div className="flex gap-2">
                <div
                  className={`border !border-[#D59921] !border-dashed max-w-fit rounded-[12.06px] pointer bg-[#2B2B40] py-4 px-2 flex flex-col items-center justfiy-center`}
                >
                  <div>
                    <svg
                      className="m-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M1 8H8M8 8H15M8 8V15M8 8V1"
                        stroke="#EFAA20"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p className="text-sm mx-auto text-white">اضافة جديدة</p>
                  </div>
                </div>
              </div>
            </FormModal>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default function PlanModel() {
  const [openModal, setOpenModal] = useState(false);
  const [content, setContent] = useState(
    <IconButton onClick={() => navigate("/System/plans")}>
      <IoMdArrowDropright color="white" fontSize={25} />
    </IconButton>
  );
  const { pathname } = useLocation();
  console.log(pathname);
  useEffect(() => {
    if (pathname === "/System/plans/projects") {
      setContent(
        <button
          className="bg-[#2B2B40] text-white rounded-md h-[38px] w-[200px] text-base "
          onClick={() => setOpenModal(true)}
        >
          اضافه جديدة
        </button>
      );
    } else if (pathname === "/System/plans/tasks") {
      setContent(
        <button
          className="bg-[#2B2B40] text-white rounded-md h-[38px] w-[200px] text-base "
          onClick={() => setOpenModal(true)}
        >
          اضافه جديدة
        </button>
      );
    } else {
      setContent();
    }
  }, [pathname]);
  const navigate = useNavigate();
  return (
    <Box>
      <SystemControler
        child={
          <>
            <IconButton
              onClick={() => {
                navigate("/System/plans");
                setOpenModal(false);
              }}
            >
              <IoMdArrowDropright color="white" fontSize={25} />
            </IconButton>
            {content}
          </>
        }
      />

      <div className="grid grid-cols-4 gap-4 max-h-[80%]">
        <div className="py-4 px-2  bg-[#1E1E2D] rounded-[19px]">
          <p className="text-white">كل المهام</p>
          <div className="flex  justify-center flex-col">
            <CustomNav
              title={"المشاريع"}
              path={"/System/plans/projects"}
              items={[
                { title: "مشاريع قيد التنفيذ", search: "قيد التنفيذ" },
                { title: "مشاريع معلقه", search: "معلقه" },
                { title: "مشاريع منتهيه", search: "منتهيه" },
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
        <div className="p-2 col-span-3 bg-[#1E1E2D] rounded-[19px]">
          {openModal ? <AddModal /> : <Outlet />}
        </div>
      </div>
    </Box>
  );
}
