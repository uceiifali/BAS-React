import React from "react";
import style from "./ShowExpensesDetials.module.css";
import { useParams } from "react-router-dom";
import { Button, Form, Modal } from "react-bootstrap";
import SaveButton from "../../../SaveButton";
import { useState } from "react";
import EditExpenses from "../EditExpenses/EditExpenses";
import DeleteModal from "../../../../Pages/System/Settings/RemoveModal";
import DownloadButton from "../../../Buttons/DownloadButton";
import moment from "moment";

const ShowExpensesDetails = ({ setOpenDisplayDetails, selectedItem }) => {
  const { ExpensesType } = useParams();
  const [deletePopup, setDeletePopup] = useState(false);
  const [confirmDeletePopup, setConfirmDeletePopup] = useState(false);
  const [editExpenses, setEditExpenses] = useState(false);

  const handleDeleteRequest = () => {
    // after deleting revenues succefully
    setDeletePopup(false);
    setConfirmDeletePopup(true);
  };

  return (
    <div className="ShowExpensesDetials  ">
      <DeleteModal
        title={"التاكيد"}
        show={deletePopup}
        handleClose={handleDeleteRequest}
      />

      {editExpenses && (
        <EditExpenses
          editExpenses={editExpenses}
          setEditExpenses={setEditExpenses}
        />
      )}

      <div className={`${style.reportName} p-3`}>
        <div className="row">
          <div className="col-md-8 mb-2">
            {ExpensesType === "ExpensesReports" ? (
              <p className="text-white">
                اسم التقرير : <span>{selectedItem.name}</span>{" "}
              </p>
            ) : (
              <p className="text-white">
                اسم الصنف : <span>{selectedItem.name}</span>{" "}
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
                alt="icon"
                onClick={() => {
                  setDeletePopup(true);
                }}
                src={process.env.PUBLIC_URL + "/icons/delete.png"}
              />

              <img
                className={`pointer ${style.actionIcon}`}
                alt="icon"
                onClick={() => {
                  setEditExpenses(true);
                }}
                src={process.env.PUBLIC_URL + "/icons/edit.png"}
              />
            </div>
          </div>
        </div>
      </div>
      <fieldset className={`${style.discription} w-90 mx-auto p-3`}>
        <legend className="text-center w-30">الوصف</legend>
        <Form.Label className="text-white">الوصف : </Form.Label>
        <textarea
          disabled
          placeholder="الوصف المرفق"
          cols={30}
          rows={5}
          className="form-control"
          value={selectedItem.description}
        />
        <div className="row mt-2">
          <div className="col-md-6">
            <p className="text-white">
              {ExpensesType === "ExpensesReports"
                ? " تاريخ الاستحقاق :"
                : " تاريخ الانشاء :"}

              <span className="main-text">
                {" "}
                {moment(selectedItem).format("YYYY-MM-DD")}
              </span>
            </p>
          </div>
          <div className="col-md-6">
            <p className="text-white">
              {ExpensesType === "ExpensesReports"
                ? "  المبلغ :"
                : "  كود الصنف :"}

              <span className="main-text"> {selectedItem.codeBatche}</span>
            </p>
          </div>
        </div>
      </fieldset>
      <fieldset
        className={`${style.attatchment}  w-90 mx-auto mt-3 p-3 flex items-center justify-start`}
      >
        <legend className="text-center w-30">الملف المرفق</legend>

        {selectedItem.image.map((image, i) => (
          <div className="pdfbg" key={i}>
            <img
              src={process.env.PUBLIC_URL + image}
              alt="pdf"
              className="pdfImage"
            />

            <div
              style={{ borderRadius: "7px" }}
              className="bg-[#252538] d-flex justify-content-center "
            >
              {ExpensesType === "ExpensesReports" ? (
                <p className="text-white mx-auto   mt-2   "> المصروفات </p>
              ) : (
                <p className="text-white mx-auto   mt-2   "> الصنف </p>
              )}
            </div>
          </div>
        ))}
      </fieldset>

      {/* <div
        onClick={() => {
          setOpenDisplayDetails(false);
        }}
        className=" mt-4 w-[30]"
      >
        <SaveButton />
      </div> */}
    </div>
  );
};

export default ShowExpensesDetails;
