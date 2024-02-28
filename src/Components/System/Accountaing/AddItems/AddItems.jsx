import React, { useContext, useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import style from "./AddItems.module.css";

import { useParams } from "react-router-dom";
import Input from "../../../FormHandler/Input";
import Select from "../../../FormHandler/Select";
import { useState } from "react";
import DatePicker from "react-datepicker";
import SaveButton from "../../../SaveButton";
import { addAccountType } from "../../../../Context/AddAccountaing";
import AddAttachment from "../../AddAttachment";
import { UseInput } from "../../../../hooks";
import moment from "moment";
import { useAddExpensesItem } from "../../../../hooks/fetchers/Expenses-items";

const AddItems = () => {
  // define variabules
  const [description, setDescription] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [attachment, setAttachment] = useState([]);

  const addExpensesItemMutation = useAddExpensesItem();

  const handleAddItems = () => {
    const date = moment(createdDate).format("YYYY-MM-DD");
    const data = {
      name,
      description,
      dateCreated: date,
      image: attachment,
    };
    addExpensesItemMutation.mutate(data); // after adding items
    // setOpenAddAccountant(false);
  };

  return (
    <div className={`${style.AddItems} p-3`}>
      <p className="text-xl  my-3 golden">إضافة اصناف جديدة</p>
      <fieldset className={`${style.description} mt-3`}>
        <legend className="text-center">الوصف</legend>
        <div className="row p-3">
          <div className="col-md-6 mb-4">
            <Input
              placeholder="اكتب اسم الصنف"
              label="1- اسم الصنف"
              value={name}
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-12 mb-4">
            <Form.Group>
              <Form.Label>الوصف</Form.Label>
              <textarea
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
                className="form-control"
                placeholder="اكتب الوصف المرفق ..."
                rows={5}
                cols={30}
              />
            </Form.Group>
          </div>
          <div className="col-md-6   mb-4">
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
            <Input
              placeholder={" ادخل كود الصنف"}
              label={"كود الصنف"}
              value={code}
              defaultValue={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
        </div>
      </fieldset>
      <fieldset
        className={`${style.Attachment} mt-4 p-2 flex items-center justify-start gap-4 overflow-x-auto custom-scrollbar`}
      >
        <legend className="text-center">الملف المرفق </legend>
        <AddAttachment
          attachment={attachment}
          setAttachment={setAttachment}
          multi={true}
        />
        {attachment &&
          Array.from(attachment).map((image, index) => (
            <img
              key={index}
              src={URL.createObjectURL(image)}
              className="pointer w-ful h-[90px] object-cover rounded-lg"
              alt="view icon"
            />
          ))}
      </fieldset>
      <div className="d-flex my-5 w-90  justify-content-end">
        <Button
          onClick={() => {
            handleAddItems();
          }}
          className="sumbmitAddUpdateUser"
        >
          حفظ
        </Button>
      </div>
    </div>
  );
};

export default AddItems;
