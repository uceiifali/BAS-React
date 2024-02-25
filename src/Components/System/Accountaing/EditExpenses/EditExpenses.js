import React from "react";
import { Form, Modal,Button } from "react-bootstrap";
import style from "./EditExpenses.module.css";
import "./EditExpenses.css";
import { useParams } from "react-router-dom";
import Input from "../../../FormHandler/Input";
import Select from "../../../FormHandler/Select";
import { useState } from "react";
import DatePicker from "react-datepicker";
import SaveButton from "../../../SaveButton";
import { useUpdateBatche } from "../../../../hooks/fetchers/Batches";
import { useForm } from "react-hook-form";

const EditExpenses = ({ editExpenses, setEditExpenses,data }) => {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
  const { ExpensesType } = useParams();
  const [deliverDate, setDeliverDate] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  
  const {mutate: mutateUpdateBatche} = useUpdateBatche(()=>{},data?._id)
  console.log(ExpensesType);
  const clauseOptions = [
    {
      label: "اساسيه",
      value: " اساسيه",
    },
    {
      label: "ايجارات",
      value: " ايجارات",
    },
  ];

  // handle editing Revenues

  const [img, setImg] = useState(null);

  function updateImageDisplay(e) {
    const curFiles = e.target.files;
    if (curFiles?.length === 0) {
      return;
    } else {
      const selectedImages = Array.from(curFiles);

      setImg(selectedImages);
    }
  }
  const handelEditRevnue = () => {}
  const onSubmit = (data) => {
    const date = new Date(createdDate);
    const formattedDate = date.toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-');
    var formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("description", data.description);
    formdata.append("dateCreated", formattedDate);
    img && img.forEach((i) => formdata.append("image", i));

    // console.log({...data, "data": formattedDate});
    mutateUpdateBatche(formdata,{
        onSuccess: ()=>{
            window.location.reload();
        }
    });

    setEditExpenses(false);
  };
  return (
    <div className="EditExpenses">
      {editExpenses && ExpensesType === "ExpensesReports" ? (
        <Modal
          className="systemModal EditExpenses"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          onHide={() => setEditExpenses(false)}
          show={editExpenses}
        >
          <Modal.Body>
            <div className="p-1 mx-auto mb-3 edit-header mt-1 w-50">
              <p className="golden text-center">تعديل فى المطالبة المالية </p>
            </div>
            <fieldset className="mx-auto border-golden w-90 p-4">
              <legend className="text-center">تعريفات</legend>
              <Input label={"1- اسم التقرير"} placeholder="اكتب اسم التقرير" />
              
            </fieldset>
            <fieldset className={`${style.description} mt-3`}>
              <legend className="text-center">الوصف</legend>
              <div className="row p-3">
                <div className="col-md-6 mb-4">
                  <Select
                    OptionbackgroundColor={"#2B2B40"}
                    options={clauseOptions}
                    placeholder="اختار البند"
                    label="1- البند"
                  />
                </div>
                <div className="col-md-12 mb-4">
                  <Form.Group>
                    <Form.Label>الوصف</Form.Label>
                    <textarea
                      className="form-control"
                      placeholder="اكتب الوصف المرفق ..."
                      rows={5}
                      cols={30}
                    />
                  </Form.Group>
                </div>
                <div className="col-md-8   mb-4">
                  <Form.Group className="d-flex flex-column">
                    <Form.Label>تاريخ الاستحقاق</Form.Label>
                    <DatePicker
                      selected={deliverDate}
                      placeholderText=" ادخل تاريخ الرخصة "
                      onChange={(date) => setDeliverDate(date)}
                      dateFormat="dd-MM-yyyy"
                      className="w-100 form-control"
                    />
                  </Form.Group>
                </div>
                <div className="col-md-4 mb-4">
                  <Input placeholder={"ادخل المبلغ"} label={"المبلغ"} />
                </div>
                <div className="col-md-6 mb-4">
                  <Input placeholder={"1000"} label={"اجمالى المبلغ"} />
                </div>
                <div className="col-md-6 mb-4">
                  <Input placeholder={""} label={"  اجمالى المبلغ كتابة"} />
                </div>
              </div>
            </fieldset>
            <fieldset className={`${style.Attachment} mt-3 p-3`}>
              <legend className="text-center">الملف المرفق </legend>

              <div className="pdfbg">
                <img
                  src={process.env.PUBLIC_URL + "/icons/Pdf.png"}
                  alt="pdf"
                  className="pdfImage"
                />
                <div
                  style={{ borderRadius: "7px" }}
                  className="bg-[#252538] d-flex justify-content-center "
                >
                  <p className="text-white mx-auto   mt-2   ">المصروفات </p>
                </div>
              </div>
            </fieldset>

            <div
              onClick={() => {
                handelEditRevnue();
              }}
              className="my-3 d-flex justify-content-end"
            >
              <SaveButton />
            </div>
          </Modal.Body>
        </Modal>
      ) : (
        <Modal
          className="systemModal EditExpenses bg-black/50"
          contentClassName="border !border-[#EFAA20]"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          onHide={() => setEditExpenses(false)}
          show={editExpenses}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <div className="p-1 mx-auto mb-3 edit-header mt-1 w-50">
              <p className="golden text-center">تعديل فى الاصناف </p>
            </div>
            <fieldset className="mx-auto border-golden w-90 p-4">
              <legend className="text-center">تعريفات</legend>
              <input
                placeholder="اكتب اسم الصنف"
                className="w-full bg-[#2B2B40] text-white rounded-[3px] p-2"
                {...register("name")}
              />
            </fieldset>
            <fieldset className={`${style.itemdescription} mt-3`}>
              <legend className="text-center">الوصف</legend>
              <div className="row p-3">
                <div className="col-md-12 mb-4">
                  <Form.Group>
                    <Form.Label>الوصف</Form.Label>
                    <textarea
                  {...register("description")}
                  className="form-control"
                  placeholder="اكتب الوصف المرفق ..."
                  rows={5}
                  cols={30}
                />
                  </Form.Group>
                </div>
                <div className="col-md-8   mb-4">
                  <Form.Group className="d-flex flex-column">
                    <Form.Label>تاريخ الانشاء</Form.Label>
                    <DatePicker
                  selected={createdDate}
                  placeholderText=" ادخل تاريخ الرخصة "
                  onChange={(date) => setCreatedDate(date)}
                  dateFormat="dd-MM-yyyy"
                  className="w-100 form-control"
                />
                  </Form.Group>
                </div>
                <div className="col-md-4 mb-4">
                  <Input placeholder={" كودالصنف"} label={"ادخل كود الصنف"} />
                </div>
              </div>
            </fieldset>
            <fieldset className={`${style.Attachment} mt-4 p-2`}>
          <legend className="text-center">الملف المرفق </legend>
          <label
            className={`addFileShape pointer my-1 bg-[#2B2B40] p-0 flex flex-col items-center justfiy-center`}
          >
            
                <input type="file" multiple className="hidden" onChange={updateImageDisplay} />  
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M1 8H8M8 8H15M8 8V15M8 8V1"
                    stroke="#EFAA20"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-sm mx-auto text-white">اضافة جديدة</p>
              
            
          </label>
        </fieldset>

        <div className="d-flex my-2 w-90  justify-content-end">
          <Button type="submit" className="sumbmitAddUpdateUser">
            حفظ
          </Button>
        </div>
          </Modal.Body>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default EditExpenses;
