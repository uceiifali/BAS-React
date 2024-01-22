import React, { useState } from "react";

import { BiDotsVerticalRounded } from "react-icons/bi";
import PdfImage from "../../../../Components/PdfImage";
import { SearchComponent } from "../../../../Components/SearchComponent/SearchComponent";
import Input from "../../../../Components/FormHandler/Input";
import { useInput } from "@mui/base";
import DataTableComponent from "../../../../Components/DataTableComponent";
import Image from "../../../../Components/Image";
import EditReception from "../../../../Components/System/Settings/Reception/EditReception";

const Reception = () => {
  const [openPdf, setOpenPdf] = useState(false);
  const [active, setActive] = useState(0);
  const [status, setStatus] = useState("Exports");
  const [editVisit, setEditVisit] = useState(false);
  const [viewVisit, setViewVisit] = useState(false);
  const search = useInput("", "", true);
  const columns = [
    {
      name: "م",
      selector: (row) => row.id,
    },
    {
      name: "اسم الشخص",
      selector: (row) => row.personName,
    },
    {
      name: "الجهة",
      selector: (row) => row.Enterprise,
    },
    {
      name: "تاريخ الزيارة",
      selector: (row) => row.visitDate,
    },
    {
      name: "عرض",
      selector: (row) => row.view,
    },
    {
      name: "تعديل",
      selector: (row) => row.edit,
    },
  ];

  const visits = Array.from({ length: 3 }).map((_, index) => {
    return {
      id: index + 1,
      personName: "حبيب",
      Enterprise: "شركة محمد",
      visitDate: "15-10-2023",
      view: (
        <div
          onClick={() => {
            setViewVisit(true);
          }}
        >
          <Image
            className="pointer"
            src={"/icons/view.png"}
            alt="view image "
            width={30}
            height={30}
          />
        </div>
      ),
      edit: (
        <div
          onClick={() => {
            setEditVisit(true);
          }}
        >
          <Image
            className="pointer"
            alt={"editImg"}
            src={"/edit.png"}
            width={30}
            height={30}
          />
        </div>
      ),
    };
  });

  return (
    <section className="Reception">
      <EditReception
        status={status}
        editVisit={editVisit}
        setEditVisit={setEditVisit}
      />

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-[#1E1E2D] h-[801px]  rounded-[19px]">
          <div className="p-3 ">
            <p className="text-white my-3">الاستقبال</p>
            <div
              className="p-1
                w-[198px] h-[31.22px] border-1  rounded border-[#EFAA20]
                pointer
                "
            >
              <div className="text-sm text-[#ffffff80] ">إدارة الاستقبال</div>
            </div>
          </div>
        </div>
        <div className="bg-[#1E1E2D] h-[801px] p-3  rounded-[19px]">
          <p className="text-white  my-3">كل الزيارات</p>
          <div
            onClick={() => {
              setActive(0);
              setStatus("Exports");
            }}
            className={`p-2 my-3 w-full  border-1  rounded-md  pointer   flex justify-between  ${
              active === 0 ? " border-[#EFAA20]" : " border-[#ffffff80]"
            }  `}
          >
            <div className="flex gap-2 text-sm text-[#ffffff80] ">
              <PdfImage
                openPdf={openPdf}
                setOpenPdf={setOpenPdf}
                pdfSrc={""}
                text="الصادر"
              />
              <p className="text-base text-[#ffffff80] ">الصادر</p>
            </div>
            <div className="">
              <BiDotsVerticalRounded size={30} color="#fff" />
            </div>
          </div>
          <div
            onClick={() => {
              setActive(1);
              setStatus("Imports");
            }}
            className={`p-2 my-3 w-full  flex justify-between border-1 rounded-md ${
              active === 1 ? " border-[#EFAA20]" : " border-[#ffffff80]"
            }      pointer`}
          >
            <div className="flex gap-2 text-sm text-[#ffffff80] ">
              <PdfImage
                openPdf={openPdf}
                setOpenPdf={setOpenPdf}
                pdfSrc={""}
                text="الصادر"
              />
              <p className="text-base text-[#ffffff80] ">الوارد</p>
            </div>
            <div className="">
              <BiDotsVerticalRounded size={30} color="#fff" />
            </div>
          </div>
        </div>
        <div className="bg-[#1E1E2D] h-[801px] p-3 rounded-[19px] col-span-2 ">
          {status === "Exports" ? (
            <p className="text-xl text-white">كل الزيارات الصادرة</p>
          ) : (
            <p className="text-xl text-white">كل الزيارات الواردة</p>
          )}

          <div className="flex mt-3 justify-start gap-3">
            <p className="text-white ">بحث</p>
            <Input placeholder="اكتب هنا" {...search.bind} />
          </div>

          <fieldset className=" fieldBorder mt-3">
            <legend className="text-center">كل الزيارات</legend>

            <DataTableComponent
              className={"datatableComponent"}
              columns={columns}
              data={visits}
            />
          </fieldset>
        </div>
      </div>
    </section>
  );
};

export default Reception;
