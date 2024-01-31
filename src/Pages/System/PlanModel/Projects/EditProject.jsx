import React, { useState } from "react";
import { IoMdMore } from "react-icons/io";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FormModal } from "../components/FormModal";
import UploadFile from "../components/UploadFile";
import CustomModal from "../components/Modals/CustomModal";
export default function EditProject() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showDelete, setShowDelete] = useState(false);
  const [showStop, setShowStop] = useState(false);
  const [showRefuse, setShowRefuse] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    console.log("event: ", event.currentTarget);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => {
    setShowDelete(true);
}
  const handleCloseStop = () => setShowStop(false);
  const handleShowStop = () => {
    setShowStop(true);
}
  const handleCloseRefuse = () => setShowRefuse(false);
  const handleShowRefuse = () => {
    setShowRefuse(true);
}
  return (
    <div className="bg-[#1E1E2D] border rounded-[19px] text-white !border-[#EFAA20] h-full">
      
      
      
      
      <div className="p-4 ">
      <p className="font-semibold text-xl text-[#EFAA20]">
      تعديل مشروع 
          </p>
        
      </div>

      <div className="flex flex-col gap-4 p-4 h-[700px] overflow-scroll scrollbar-none">
        <FormModal title={"بيانات المشروع"}>
          <div className="grid grid-cols-2 gap-4">
            <p className="font-normal text-lg">
              اسم المشروع : <span className="me-1 text-white/20">BSA</span>
            </p>
            <p className="font-normal text-lg">
              المدينة : <span className="me-1 text-white/20">حي النخيل</span>
            </p>
            <p className="font-normal text-lg">
              موقع المشروع :{" "}
              <span className="me-1 text-white/20">حي النخيل</span>
            </p>
          </div>
        </FormModal>
        <FormModal title={" المسؤلين"}>
          <p className="font-semibold text-base mb-3">المشرف العام :</p>

          <div className="grid grid-cols-2 gap-5">
            <div className="bg-[#414162] p-2 rounded-[7px] flex gap-2">
              <div className=" rounded-full w-8 h-8">
                <img
                  src="/icons/avatar.png"
                  alt=""
                  className="w-full object-fill"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-medium text-xs">م.ايهاب</p>
                <p className="font-medium text-xs text-[#D59921]">
                  مدير مكتب - السعودية
                </p>
              </div>
            </div>
            <div className="bg-[#414162] p-2 rounded-[7px] flex gap-2">
              <div className=" rounded-full w-8 h-8">
                <img
                  src="/icons/avatar.png"
                  alt=""
                  className="w-full object-fill"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-medium text-xs">م.اشرف</p>
                <p className="font-medium text-xs text-[#D59921]">
                  مدير مكتب - مصر
                </p>
              </div>
            </div>
          </div>
        </FormModal>
        <FormModal title={"تفاصيل المهمه"}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <p className="font-normal text-lg">
              تاريخ الاستلام :{" "}
              <span className="me-1 text-white/20"> 15 -10 -2024</span>
            </p>
            <p className="font-normal text-lg">
              تاريخ التسليم :
              <span className="me-1 text-white/20"> 15 -10 -2024</span>
            </p>
          </div>
          <div className="">
            <p className="text-base font-normal mb-2">وصف المهمه</p>
            <p className="border !border-[#D59921] h-44"></p>
          </div>
        </FormModal>
        <FormModal title={"ملاحظات العميل"}>
          <div className="">
            <p className="text-base font-normal mb-2">ملاحظات العميل</p>
            <p className="border !border-[#D59921] h-44"></p>
          </div>
        </FormModal>
        <FormModal title={"ملفات المشروع"}>
          <div className="flex gap-3">
            <UploadFile />
          </div>
        </FormModal>
        <FormModal title={"المرفقات"}>
          <div className="flex gap-3">
            <UploadFile />
          </div>
        </FormModal>
      </div>
    </div>
  );
}
