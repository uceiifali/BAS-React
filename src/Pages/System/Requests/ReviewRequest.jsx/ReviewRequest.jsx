import React, { useState } from "react";
import "./index.css";
import DataTableComponent from "../../../../Components/DataTableComponent.jsx";

import { Button } from "react-bootstrap";

import ConfirmPoper from "../../../../Components/System/ConfirmPoper";
import ReviewRequestChart from "../../../../Components/System/Requests/ReviewRequestChart/ReviewRequestChart";
import EditReviewRequest from "../../../../Components/System/Requests/EditRequest/EditReviewRequest";
import ShowReviewRequest from "../../../../Components/System/ShowRequest/ShowReviewRequest";
import Image from "../../../../Components/Image.jsx";
const ReviewRequest = () => {
  const [showProject, setShowProject] = useState(false);
  const [editRequest, setEditRequest] = useState(false);
  const [ConfirmUpdate, setConfirmUpdate] = useState(false);
  const [ReviewProjectType, SetReviewProjectType] = useState("");

  const DesignProjects = Array.from({ length: 10 }).map((_, index) => {
    return {
      id: index + 1,
      ProjectName: "BSA",
      ProjectNumber: "53543",
      createdAt: "12-10-2023",
      ProjectType: "اشراف",
      enStatus: "inProgress",
      status: "قيد الا نتظار",
      display: (
        <Image
          src={process.env.PUBLIC_URL + "/icons/view.png"}
          onClick={() => {
            setShowProject(true);
            SetReviewProjectType(DesignProjects[index]?.enStatus);
          }}
          className="display_project  rounded"
          alt=" display project"
        />
      ),
      edit: (
        <Image
          src={process.env.PUBLIC_URL + "/edit.png"}
          onClick={() => {
            setEditRequest(true);
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
      selector: (row) => row.id,
    },
    {
      name: "اسم المشروع",
      selector: (row) => row.ProjectName,
    },
    {
      name: " رقم الطلب ",
      selector: (row) => row.ProjectNumber,
    },
    {
      name: "  تاريخ الانشاء",
      selector: (row) => row.createdAt,
    },

    {
      name: "    الحالة",
      selector: (row) => row.status,
    },
    {
      name: "    عرض",
      selector: (row) => row.display,
    },
    {
      name: "    تعديل",
      selector: (row) => row.edit,
    },
  ];
  console.log(editRequest);

  return (
    <>
      {showProject ? (
        <div className="AllRequests-scroll">
          <ShowReviewRequest
            ReviewProjectType={ReviewProjectType}
            setShowProject={setShowProject}
          />
          {editRequest && (
            <EditReviewRequest
              editRequest={editRequest}
              setEditRequest={setEditRequest}
              setConfirmPoper={setConfirmUpdate}
            />
          )}
          {ConfirmUpdate && (
            <ConfirmPoper
              confirmPoper={ConfirmUpdate}
              setConfirmPoper={setConfirmUpdate}
              setEditRequest={setEditRequest}
              text={"تم تعديل الطلب فى المشاريع بنجاح "}
            />
          )}
        </div>
      ) : (
        <div className="AllRequests">
          <div>
            <div className="reviewChartContainer d-flex justify-content-center align-items-center">
              <ReviewRequestChart />
            </div>

            <fieldset className="TableContainer py-3 px-2 mx-auto mt-3">
              <legend className="text-center">طلبات ( اشراف )</legend>

              <div className="mt-3">
                <DataTableComponent
                  className={"!h-[400px]"}
                  columns={columns}
                  data={DesignProjects}
                />
              </div>
            </fieldset>
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewRequest;
