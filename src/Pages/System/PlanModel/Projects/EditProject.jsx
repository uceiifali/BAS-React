import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { IoMdMore } from "react-icons/io";
import {
  Box,
  Button,
  IconButton,
  TextField,
  Menu,
  MenuItem,
  Select,
} from "@mui/material";
import { FormModal } from "../components/FormModal";
import { IoMdArrowDropright } from "react-icons/io";

import UploadFile from "../components/UploadFile";
import CustomModal from "../../../../Components/Modals/CustomModal";
import { ModalTitle } from "../components/ModalTitle";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { InputLabel } from "../components/InputLabel";
import TextEditor from "../../Plans/components/TextEditor";
import { Link,useNavigate } from "react-router-dom";
import SystemControler from "../../../../Components/System/SystemControler/SystemControler";
export default function EditProject() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchProjectName, setSearchProjectName] = useState("");
  let [recievedDate, setRecievedDate] = useState(null);
  let [recievingDate, setRecievingDate] = useState(null);
  return (
    <>
    <SystemControler
        child={
          <IconButton
            onClick={() => {
              navigate(-1);
            }}
          >
            <IoMdArrowDropright color="white" fontSize={25} />
          </IconButton>
        }
      />
    <div className="bg-[#1E1E2D] mb-2 p-5 border rounded-[19px] text-white !border-[#EFAA20] h-full">
      <div className="my-3">
        <ModalTitle title={" تعديل مشروع "} />
      </div>

      <div className="h-[690px] overflow-scroll scrollbar-none flex flex-col gap-4 ">
        <FormModal title={"بحث عن المشروع"}>
          <div className="grid grid-cols-12 justify-between">
            <div className="col-span-5">
              <InputLabel id="new-project-name" label={"اسم المشروع"} />
              <Select
                fullWidth
                size="small"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={searchProjectName}
                label="Select Project"
                className="w-full text-white bg-[#2B2B40] rounded-[7px]"
                onChange={(e) => {
                  setSearchProjectName(e.target.value);
                }}
                inputProps={{ placeholder: "ابحث عن ...." }}
                sx={{
                  "& input::placeholder": {
                    color: "white",
                  },
                  "& fieldset": {
                    border: "none",
                  },
                  "& svg": {
                    display: "none",
                  },
                }}
              >
                {/* <MenuItem selected>ابحث</MenuItem> */}
                <MenuItem value={10}>مطاعم عشبة الليمون</MenuItem>
                <MenuItem value={20}>مطاعم عشبة الليمون</MenuItem>
                <MenuItem value={30}>مطاعم عشبة الليمون</MenuItem>
              </Select>
            </div>
          </div>
        </FormModal>
        <FormModal title={"تفاصيل المهمة"}>
                <div className="grid grid-cols-12 mb-5">
                  <div className="col-span-5">
                    <InputLabel id="new-project-name" label={"اسم المسؤل"} />
                    <input
                      id="new-project-name"
                      type="text"
                      className="w-full text-white p-2 bg-[#2B2B40] rounded-[7px]"
                      placeholder="اختار اسم المشرف"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-12 mb-5">
                  <div className="col-span-5">
                    <InputLabel id="recieving-date" label={"تاريخ التسليم"} />
                    <DatePicker
                      id="recieving-date"
                      
                        selected={recievingDate}
                        placeholder="اضف تاريخ التسليم"
                        onChange={(date) => setRecievingDate(date)}
                        dateFormat="dd-MM-yyyy"
                        className="w-full text-white p-2 bg-[#2B2B40] rounded-[7px]"
                      />
                    
                  </div>
                  <div className="col-span-2"></div>
                  <div className="col-span-5">
                    <InputLabel id="recieved-date" label={"تاريخ الاستلام"} />
                    <DatePicker
                      id="recieved-date"
                        selected={recievedDate}
                        placeholder="اضف تاريخ الاستلام"
                        onChange={(date) => setRecievedDate(date)}
                        dateFormat="dd-MM-yyyy"
                        className="w-full text-white p-2 bg-[#2B2B40] rounded-[7px]"
                      />
                    
                  </div>
                </div>
  
                <div className="">
                  <InputLabel id="new-project-name" label={"وصف المهمة"} />
                  <TextEditor 
                  placeholder={"اكتب ملاحظات .................................."}
                  />
                </div>
              </FormModal>
        <FormModal title={"ملاحظات العميل"}>
  
                <div className="">
                  <InputLabel id="new-project-name" label={"وصف المهمة"} />
                  <TextEditor 
                  placeholder={"اكتب ملاحظات .................................."}
                  />
                </div>
              </FormModal>
              <FormModal title={"ملفات المشروع"}>
                <div className="flex gap-2">
                  <label
                    className={`border !border-[#D59921] !border-dashed max-w-fit rounded-[12.06px] pointer bg-[#2B2B40] py-4 px-2 flex flex-col items-center justfiy-center`}
                  >
                    <input type="file" className="hidden" />
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
                  </label>
                </div>
              </FormModal>
              <FormModal title={"المرفقات"}>
                <div className="flex gap-2">
                  <label
                    className={`border !border-[#D59921] !border-dashed max-w-fit rounded-[12.06px] pointer bg-[#2B2B40] py-4 px-2 flex flex-col items-center justfiy-center`}
                  >
                    <input type="file" className="hidden" />
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
                  </label>
                </div>
              </FormModal>     
      </div>

      <div className="flex justify-end mt-4">
      <Link to={"/System/plans/projects"}>
        <button className="w-[140px] h-[30px]  bg-[#EFAA20] rounded-[6px] text-[#1E1E2D] text-[15px] font-medium">
        حفظ
        </button>
        </Link>
      </div>
    </div>
    </>
  );
}
