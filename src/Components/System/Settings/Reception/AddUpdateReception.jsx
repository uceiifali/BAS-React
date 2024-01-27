import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import Select from "../../../FormHandler/Select";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import FormDatePicker from "../../../FormDatePicker";
import AddAttachment from "../../AddAttachment";
import SaveButton from "../../../SaveButton";
import styles from "./AddUpdateReception.module.css";
import DeleteButton from "../../../DeleteButton";

const AddUpdateReciption = ({
  editVisit,
  setEditVisit,
  ReciptionType,
  show,
  setShow,
  status,
  id = null,
}) => {
  const [attachment, setAttachment] = useState(false);
  const [addVisit, setAddVisit] = useState(true);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const handleEditvisit = (data) => {
    console.log(data);
    setEditVisit(false);
  };
  const handleAddvisit = (data) => {
    console.log(data);
    setShow(false);
  };
  useEffect(() => {
    console.log(ReciptionType);
    console.log("addUpdateRec is open");
  }, []);
  return (
    <div>
      {id && editVisit && status === "Exports" && (
        <Modal
          size="lg"
          show={editVisit}
          onHide={() => setEditVisit(false)}
          aria-labelledby=" example-modal-sizes-title-lg"
          className={`systemModal ${styles.ReciptionModal}   overflow-y-scroll `}
        >
          <div className="mx-auto py-2 px-4 flex justify-center items-center rounded-md border-1 border-[#EFAA20]">
            <p className="text-[#EFAA20] text-xl font-semibold">
              {" "}
              تعديل الزيارة{" "}
            </p>
          </div>
          <Form onSubmit={handleSubmit(handleEditvisit)}>
            <fieldset className="fieldBorder container   mx-auto  p-3 my-3">
              <legend className="text-center !text-base">
                معلومات الزيارة
              </legend>
              <div class="grid grid-cols-2 gap-4 mb-3">
                {/* <Controller
                  name="visitType"
                  className="w-100"
                  control={control}
                  render={({ onChange, value, name, ref, field }) => (
                    <Select
                      label="نوع الزيارة"
                      inputRef={ref}
                      placeholder="اختر.."
                      className="w-100"
                      classNames={"border-0 "}
                      
                      options={[
                        {
                          value: "واردة",
                          label: "واردة",
                        },
                        {
                          value: "صادرة",
                          label: "صادرة",
                        },
                      ]}
                      onChange={onChange}
                      {...field}
                      name={name}
                    />
                  )}
                /> */}
                <div className="">
                  <p className="mb-2">نوع الزياره</p>
                  <select
                    class="form-select border-none bg-[#2B2B40]"
                    aria-label="Default select example"
                  >
                    {/* <option selected>Open this select menu</option> */}
                    <option value="1">واردة</option>
                    <option value="2">صادرة</option>
                  </select>
                </div>
                <Form.Group>
                  <Form.Label> اسم الشخص</Form.Label>
                  <input
                    className="form-control h-[37px]"
                    placeholder="ادخل اسم الشخص"
                    {...register("personName")}
                  />
                </Form.Group>
              </div>
              <div class="grid grid-cols-2 gap-4 mb-3">
                <Controller
                  name="identity"
                  className="w-100"
                  control={control}
                  render={({ onChange, value, name, ref, field }) => (
                    <Select
                      label="الهوية"
                      inputRef={ref}
                      placeholder="اختر.."
                      className="w-100"
                      classNames={"border-0"}
                      options={[
                        {
                          value: "واردة",
                          label: "واردة",
                        },
                        {
                          value: "صادرة",
                          label: "صادرة",
                        },
                      ]}
                      onChange={onChange}
                      {...field}
                      name={name}
                    />
                  )}
                />
                <Form.Group>
                  <Form.Label>فئة الزائر</Form.Label>
                  <input
                    className="form-control h-[37px]"
                    placeholder="   اكتب فئة الزائر  "
                    {...register("personName")}
                  />
                </Form.Group>
              </div>

              <div class="grid grid-cols-3 gap-4 mb-3">
                <Form.Group>
                  <Form.Label> تاريخ الزيارة</Form.Label>
                  <Controller
                    control={control}
                    name="date-input"
                    render={({ field }) => (
                      <FormDatePicker
                        placeholderText="اختر"
                        onChange={(date) => field.onChange(date)}
                        date={field.value}
                      />
                    )}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label> وقت الزياره من</Form.Label>
                  <Controller
                    control={control}
                    name="startVisitTime"
                    render={({ field }) => (
                      <TimePicker
                        value={field.value}
                        placeholderText=""
                        onChange={(time) => field.onChange(time)}
                        className="w-100 form-control"
                      />
                    )}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label> وقت الزياره الي</Form.Label>
                  <Controller
                    control={control}
                    name="EndVisitTime"
                    render={({ field }) => (
                      <TimePicker
                        value={field.value}
                        placeholderText=""
                        onChange={(time) => field.onChange(time)}
                        className="w-100 form-control"
                      />
                    )}
                  />
                </Form.Group>
              </div>
            </fieldset>
            <fieldset className="fieldBorder container mx-auto  p-3 my-3 ">
              <legend className="text-center !text-base">تفاصيل الزيارة</legend>
              <Form.Group className="my-3">
                <Form.Label>سبب الزيارة</Form.Label>
                <textarea
                  cols={5}
                  rows={5}
                  {...register("visitReason")}
                  className="form-control"
                  placeholder="اكتب سبب الزيارة .................................."
                />
              </Form.Group>
              <Form.Group className="my-3">
                <Form.Label>ملاحظات </Form.Label>
                <textarea
                  cols={5}
                  rows={5}
                  {...register("visitNotes")}
                  className="form-control"
                  placeholder="اكتب  ملاحظات .................................."
                />
              </Form.Group>
            </fieldset>
            <fieldset className="fieldBorder container mx-auto  p-3 my-3 ">
              <legend className="text-center !text-base">تفاصيل الزيارة</legend>
              <AddAttachment
                attachment={attachment}
                setAttachment={setAttachment}
              />
            </fieldset>
            <div className="flex justify-center gap-4">
              <DeleteButton />
              <SaveButton />
            </div>
          </Form>
        </Modal>
      )}
      {id && editVisit && status === "Imports" && (
        <Modal
          size="lg"
          show={editVisit}
          onHide={() => setEditVisit(false)}
          aria-labelledby=" example-modal-sizes-title-lg"
          className={`systemModal ${styles.ReciptionModal}   overflow-y-scroll `}
        >
          <div className="mx-auto w-[139px] h-[43px] flex justify-center items-center rounded-md border-1 border-[#EFAA20]">
            <p className="text-white"> تعديل الزيارة الواردة</p>
          </div>
          <Form onSubmit={handleSubmit(handleEditvisit)}>
            <fieldset className="fieldBorder container   mx-auto  p-3 my-3">
              <legend className="text-center">معلومات الزيارة</legend>
              <div class="grid grid-cols-2 gap-4 mb-3">
                <Controller
                  name="visitType"
                  className="w-100"
                  control={control}
                  render={({ onChange, value, name, ref, field }) => (
                    <Select
                      label="نوع الزيارة"
                      inputRef={ref}
                      placeholder="اختر.."
                      className="w-100"
                      classNames={"border-0"}
                      options={[
                        {
                          value: "واردة",
                          label: "واردة",
                        },
                        {
                          value: "صادرة",
                          label: "صادرة",
                        },
                      ]}
                      onChange={onChange}
                      {...field}
                      name={name}
                    />
                  )}
                />

                <Form.Group>
                  <Form.Label> اسم الموظف</Form.Label>
                  <input
                    className="form-control h-[37px]"
                    placeholder="اكتب اسم الموظف"
                    {...register("ُEmployeeName")}
                  />
                </Form.Group>
              </div>
              <div className="grid grid-cols-1 mb-3">
                <Form.Group>
                  <Form.Label> مكان الزيارة</Form.Label>
                  <input
                    className="form-control h-[37px]"
                    {...register("visitPlace")}
                    placeholder="اكتب مكان الزياة"
                  />
                </Form.Group>
              </div>

              <div class="grid grid-cols-3 gap-4 mb-3">
                <Form.Group>
                  <Form.Label> تاريخ الزيارة</Form.Label>
                  <Controller
                    control={control}
                    name="date-input"
                    render={({ field }) => (
                      <FormDatePicker
                        placeholderText="ادخل اسم الزيارة"
                        onChange={(date) => field.onChange(date)}
                        date={field.value}
                      />
                    )}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label> وقت الزياره من</Form.Label>
                  <Controller
                    control={control}
                    name="startVisitTime"
                    render={({ field }) => (
                      <TimePicker
                        value={field.value}
                        placeholderText=""
                        onChange={(time) => field.onChange(time)}
                        className="w-100 form-control"
                      />
                    )}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label> وقت الزياره الي</Form.Label>
                  <Controller
                    control={control}
                    name="EndVisitTime"
                    render={({ field }) => (
                      <TimePicker
                        value={field.value}
                        placeholderText=""
                        onChange={(time) => field.onChange(time)}
                        className="w-100 form-control"
                      />
                    )}
                  />
                </Form.Group>
              </div>
            </fieldset>
            <fieldset className="fieldBorder container mx-auto  p-3 my-3 ">
              <legend className="text-center">تفاصيل الزيارة</legend>
              <Form.Group className="my-3">
                <Form.Label>سبب الزيارة</Form.Label>
                <textarea
                  cols={5}
                  rows={5}
                  {...register("visitReason")}
                  className="form-control"
                  placeholder="اكتب سبب الزيارة .................................."
                />
              </Form.Group>
              <Form.Group className="my-3">
                <Form.Label>ملاحظات </Form.Label>
                <textarea
                  cols={5}
                  rows={5}
                  {...register("visitNotes")}
                  className="form-control"
                  placeholder="اكتب  ملاحظات .................................."
                />
              </Form.Group>
            </fieldset>
            <fieldset className="fieldBorder container mx-auto  p-3 my-3 ">
              <legend className="text-center">تفاصيل الزيارة</legend>
              <AddAttachment
                attachment={attachment}
                setAttachment={setAttachment}
              />
            </fieldset>
            <div className="flex justify-center gap-4">
              <DeleteButton />
              <SaveButton />
            </div>
          </Form>
        </Modal>
      )}
      {!id && show && ReciptionType === "Exports" && (
        <Modal
          size="lg"
          show={show}
          onHide={() => setShow(false)}
          aria-labelledby=" example-modal-sizes-title-lg"
          className={`systemModal ${styles.ReciptionModal}   overflow-y-scroll `}
        >
          <div className="mx-auto w-[139px] h-[43px] flex justify-center items-center rounded-md border-1 border-[#EFAA20]">
            <p className="text-white">اضافة زيارة صادرة</p>
          </div>
          <Form onSubmit={handleSubmit(handleAddvisit)}>
            <fieldset className="fieldBorder container   mx-auto  p-3 my-3">
              <legend className="text-center">معلومات الزيارة</legend>
              <div class="grid grid-cols-2 gap-4 mb-3">
                <Controller
                  name="visitType"
                  className="w-100"
                  control={control}
                  render={({ onChange, value, name, ref, field }) => (
                    <Select
                      label="نوع الزيارة"
                      inputRef={ref}
                      placeholder="اختر.."
                      className="w-100"
                      classNames={"border-0"}
                      options={[
                        {
                          value: "واردة",
                          label: "واردة",
                        },
                        {
                          value: "صادرة",
                          label: "صادرة",
                        },
                      ]}
                      onChange={onChange}
                      {...field}
                      name={name}
                    />
                  )}
                />

                <Form.Group>
                  <Form.Label> اسم الشخص</Form.Label>
                  <input
                    className="form-control h-[37px]"
                    placeholder="ادخل اسم الشخص"
                    {...register("personName")}
                  />
                </Form.Group>
              </div>
              <div class="grid grid-cols-2 gap-4 mb-3">
                <Controller
                  name="identity"
                  className="w-100"
                  control={control}
                  render={({ onChange, value, name, ref, field }) => (
                    <Select
                      label="الهوية"
                      inputRef={ref}
                      placeholder="اختر.."
                      className="w-100"
                      classNames={"border-0"}
                      options={[
                        {
                          value: "واردة",
                          label: "واردة",
                        },
                        {
                          value: "صادرة",
                          label: "صادرة",
                        },
                      ]}
                      onChange={onChange}
                      {...field}
                      name={name}
                    />
                  )}
                />
                <Form.Group>
                  <Form.Label>فئة الزائر</Form.Label>
                  <input
                    className="form-control h-[37px]"
                    placeholder="   اكتب فئة الزائر  "
                    {...register("personName")}
                  />
                </Form.Group>
              </div>

              <div class="grid grid-cols-3 gap-4 mb-3">
                <Form.Group>
                  <Form.Label> تاريخ الزيارة</Form.Label>
                  <Controller
                    control={control}
                    name="date-input"
                    render={({ field }) => (
                      <FormDatePicker
                        placeholderText="اختر"
                        onChange={(date) => field.onChange(date)}
                        date={field.value}
                      />
                    )}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label> وقت الزياره من</Form.Label>
                  <Controller
                    control={control}
                    name="startVisitTime"
                    render={({ field }) => (
                      <TimePicker
                        value={field.value}
                        placeholderText=""
                        onChange={(time) => field.onChange(time)}
                        className="w-100 form-control"
                      />
                    )}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label> وقت الزياره الي</Form.Label>
                  <Controller
                    control={control}
                    name="EndVisitTime"
                    render={({ field }) => (
                      <TimePicker
                        value={field.value}
                        placeholderText=""
                        onChange={(time) => field.onChange(time)}
                        className="w-100 form-control"
                      />
                    )}
                  />
                </Form.Group>
              </div>
            </fieldset>
            <fieldset className="fieldBorder container mx-auto  p-3 my-3 ">
              <legend className="text-center">تفاصيل الزيارة</legend>
              <Form.Group className="my-3">
                <Form.Label>سبب الزيارة</Form.Label>
                <textarea
                  cols={5}
                  rows={5}
                  {...register("visitReason")}
                  className="form-control"
                  placeholder="اكتب سبب الزيارة .................................."
                />
              </Form.Group>
              <Form.Group className="my-3">
                <Form.Label>ملاحظات </Form.Label>
                <textarea
                  cols={5}
                  rows={5}
                  {...register("visitNotes")}
                  className="form-control"
                  placeholder="اكتب  ملاحظات .................................."
                />
              </Form.Group>
            </fieldset>
            <fieldset className="fieldBorder container mx-auto  p-3 my-3 ">
              <legend className="text-center">تفاصيل الزيارة</legend>
              <AddAttachment
                attachment={attachment}
                setAttachment={setAttachment}
              />
            </fieldset>
            <div className="flex justify-center gap-4">
              <DeleteButton />
              <SaveButton />
            </div>
          </Form>
        </Modal>
      )}
      {!id && show && ReciptionType === "Imports" && (
        <Modal
          size="lg"
          show={show}
          onHide={() => setShow(false)}
          aria-labelledby=" example-modal-sizes-title-lg"
          className={`systemModal ${styles.ReciptionModal}   overflow-y-scroll `}
        >
          <div className="mx-auto w-[139px] h-[43px] flex justify-center items-center rounded-md border-1 border-[#EFAA20]">
            <p className="text-white">اضافة الزيارة الواردة</p>
          </div>
          <Form onSubmit={handleSubmit(handleAddvisit)}>
            <fieldset className="fieldBorder container   mx-auto  p-3 my-3">
              <legend className="text-center">معلومات الزيارة</legend>
              <div class="grid grid-cols-2 gap-4 mb-3">
                <Controller
                  name="visitType"
                  className="w-100"
                  control={control}
                  render={({ onChange, value, name, ref, field }) => (
                    <Select
                      label="نوع الزيارة"
                      inputRef={ref}
                      placeholder="اختر.."
                      className="w-100"
                      classNames={"border-0"}
                      options={[
                        {
                          value: "واردة",
                          label: "واردة",
                        },
                        {
                          value: "صادرة",
                          label: "صادرة",
                        },
                      ]}
                      onChange={onChange}
                      {...field}
                      name={name}
                    />
                  )}
                />

                <Form.Group>
                  <Form.Label> اسم الموظف</Form.Label>
                  <input
                    className="form-control h-[37px]"
                    placeholder="اكتب اسم الموظف"
                    {...register("ُEmployeeName")}
                  />
                </Form.Group>
              </div>
              <div className="grid grid-cols-1 mb-3">
                <Form.Group>
                  <Form.Label> مكان الزيارة</Form.Label>
                  <input
                    className="form-control h-[37px]"
                    {...register("visitPlace")}
                    placeholder="اكتب مكان الزياة"
                  />
                </Form.Group>
              </div>

              <div class="grid grid-cols-3 gap-4 mb-3">
                <Form.Group>
                  <Form.Label> تاريخ الزيارة</Form.Label>
                  <Controller
                    control={control}
                    name="date-input"
                    render={({ field }) => (
                      <FormDatePicker
                        placeholderText="ادخل اسم الزيارة"
                        onChange={(date) => field.onChange(date)}
                        date={field.value}
                      />
                    )}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label> وقت الزياره من</Form.Label>
                  <Controller
                    control={control}
                    name="startVisitTime"
                    render={({ field }) => (
                      <TimePicker
                        value={field.value}
                        placeholderText=""
                        onChange={(time) => field.onChange(time)}
                        className="w-100 form-control"
                      />
                    )}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label> وقت الزياره الي</Form.Label>
                  <Controller
                    control={control}
                    name="EndVisitTime"
                    render={({ field }) => (
                      <TimePicker
                        value={field.value}
                        placeholderText=""
                        onChange={(time) => field.onChange(time)}
                        className="w-100 form-control"
                      />
                    )}
                  />
                </Form.Group>
              </div>
            </fieldset>
            <fieldset className="fieldBorder container mx-auto  p-3 my-3 ">
              <legend className="text-center">تفاصيل الزيارة</legend>
              <Form.Group className="my-3">
                <Form.Label>سبب الزيارة</Form.Label>
                <textarea
                  cols={5}
                  rows={5}
                  {...register("visitReason")}
                  className="form-control"
                  placeholder="اكتب سبب الزيارة .................................."
                />
              </Form.Group>
              <Form.Group className="my-3">
                <Form.Label>ملاحظات </Form.Label>
                <textarea
                  cols={5}
                  rows={5}
                  {...register("visitNotes")}
                  className="form-control"
                  placeholder="اكتب  ملاحظات .................................."
                />
              </Form.Group>
            </fieldset>
            <fieldset className="fieldBorder container mx-auto  p-3 my-3 ">
              <legend className="text-center">تفاصيل الزيارة</legend>
              <AddAttachment
                attachment={attachment}
                setAttachment={setAttachment}
              />
            </fieldset>
            <div className="flex justify-center gap-4">
              <DeleteButton />
              <SaveButton />
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
};

export default AddUpdateReciption;
