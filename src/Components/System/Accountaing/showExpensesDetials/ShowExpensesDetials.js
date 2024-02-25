import React from "react";
import style from "./ShowExpensesDetials.module.css";
import { useParams } from "react-router-dom";
import { Button, Form, Modal } from "react-bootstrap";
import SaveButton from "../../../SaveButton";
import { useState } from "react";
import EditExpenses from "../EditExpenses/EditExpenses";
import DeleteModal from "../../../../Pages/System/Settings/RemoveModal";
import DownloadButton from "../../../Buttons/DownloadButton";
import { convertDateFormat } from "../../../../helper/utils";
import FIlePlaceholder from "../../../Attatchments/FIlePlaceholder";
import { useDeleteBatche } from "../../../../hooks/fetchers/Batches";

const ShowExpensesDetials = ({ setOpenDisplayDetials,data }) => {
  const { ExpensesType } = useParams();
  const [deletePoper, setDeletPoper] = useState(false);
  const [confirmDeletePoper, setConfirmDeletPoper] = useState(false);
  const [editExpenses, setEditExpenses] = useState(false);
  const {mutate: mutateDelete} = useDeleteBatche()
  const handleDeleteRequest = () => {
    // after deleting revenues succefully
    setDeletPoper(false);
    setConfirmDeletPoper(true);
  };

  return (
    <div className="ShowExpensesDetials  ">
      {/* {confirmDeletePoper && (
        <Modal
          className="submitSystemPoper"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          onHide={() => setConfirmDeletPoper(false)}
          show={confirmDeletePoper}
        >
          <Modal.Body>
            <div className="d-flex justify-content-center w-100">
              {" "}
              <Image
                src={process.env.PUBLIC_URL + "/correct.gif"}
                width={120}
                height={120}
                className=""
                color="#E1B67C"
              />
            </div>

            <div className="d-flex w-75 flex-column mx-auto mt-3 justify-content-center align-items-center ">
              {
                <p className="text-white my-3" style={{ fontSize: "30px" }}>
                  {" "}
                  تم الحذف بنجاح
                </p>
              }
              <Button
                onClick={() => {
                  setConfirmDeletPoper(false);
                }}
                className="sumbmitAddUpdateUser"
              >
                حفظ
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      )}

      {deletePoper && (
        <Modal
          className="submitSystemPoper"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          onHide={() => setDeletPoper(false)}
          show={deletePoper}
        >
          <Modal.Body className="d-flex align-items-center">
            <div className="d-flex w-75 flex-column mx-auto mt-3 justify-content-center align-items-center ">
              {
                <p className="text-white" style={{ fontSize: "30px" }}>
                  {" "}
                  هل انت متاكد من الحذف{" "}
                </p>
              }
              <div className="d-flex justify-content-center mt-3 gap-3">
                <Button
                  onClick={() => {
                    setDeletPoper(false);
                    handleDeleteRequest();
                  }}
                  className="Delete-button"
                >
                  نعم
                </Button>

                <Button
                  onClick={() => {
                    setDeletPoper(false);
                  }}
                  className="No-Delete"
                >
                  لا
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )} */}
      <DeleteModal
        title={"التاكيد"}
        show={deletePoper}
        handleClose={handleDeleteRequest}
        onSave={()=> {
          mutateDelete(data._id,{
            onSuccess: () => {
              window.location.reload();
            }
          })
          
        }}
      />

      {editExpenses && (
        <EditExpenses
          editExpenses={editExpenses}
          setEditExpenses={setEditExpenses}
          data={data}
        />
      )}

      <div className={`${style.reportName} p-3`}>
        <div className="row">
          <div className="col-md-8 mb-2">
            {ExpensesType === "ExpensesReports" ? (
              <p className="text-white">
                اسم التقرير : <span>BSA</span>{" "}
              </p>
            ) : (
              <p className="text-white">
                اسم الصنف : <span>{data.name}</span>{" "}
              </p>
            )}
          </div>

          <div className="col-md-4 mb-2">
            <div className="d-flex gap-3 justify-content-start">
              <DownloadButton>تصدير CSV </DownloadButton>
              <DownloadButton>تصدير Excel </DownloadButton>
            </div>
          </div>
          <div className="col-md-9"></div>
          <div className="col-md-3">
            <div className="d-flex gap-2  mt-3 justify-content-start   ">
              <img
                className={`pointer ${style.actionIcon}`}
                onClick={() => {
                  setDeletPoper(true);
                }}
                src={process.env.PUBLIC_URL + "/icons/delete.png"}
              alt=""
              />

              <img
                className={`pointer ${style.actionIcon}`}
                onClick={() => {
                  setEditExpenses(true);
                }}
                src={process.env.PUBLIC_URL + "/icons/edit.png"}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <fieldset className={`${style.discription} w-90 mx-auto p-3`}>
        <legend className="text-center w-30">الوصف</legend>
        <Form.Label className="text-white">الوصف : </Form.Label>
        <div
          
          
          className="h-36 bg-[#2B2B40] text-white/50 p-2 rounded-[7px]"
        >
          {data?.description}
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <p className="text-white flex items-center gap-2">
              {ExpensesType === "ExpensesReports"
                ? " تاريخ الاستحقاق :"
                : " تاريخ الانشاء :"}

              <span className="main-text">{convertDateFormat(data?.dateCreated)}</span>
            </p>
          </div>
          <div className="col-md-6">
            <p className="text-white">
              {ExpensesType === "ExpensesReports"
                ? "  المبلغ :"
                : "  كود الصنف :"}

              <span className="main-text">{data?.codeBatche}</span>
            </p>
          </div>
        </div>
      </fieldset>
      <fieldset className={`border !border-[#EFAA2080]  w-90 mx-auto mt-3 p-3 flex items-center gap-2`}>
        <legend className="text-center w-30">الملف المرفق</legend>

        

        <FIlePlaceholder title={ExpensesType === "ExpensesReports" ? "المصروفات" : "الصنف"}/>        





      </fieldset>

      <div
        onClick={() => {
          setOpenDisplayDetials(false);
        }}
        className=" mt-4 w-[30]"
      >
        <SaveButton />
      </div>
    </div>
  );
};

export default ShowExpensesDetials;
