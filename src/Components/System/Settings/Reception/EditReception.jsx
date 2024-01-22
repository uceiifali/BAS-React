import React from "react";
import { Form, Modal } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import Select from "../../../FormHandler/Select";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import FormDatePicker from "../../../FormDatePicker";

const EditReception = ({ editVisit, setEditVisit, status }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      {editVisit && status === "Exports" && (
        <Modal
          size="lg"
          show={editVisit}
          onHide={() => setEditVisit(false)}
          aria-labelledby=" example-modal-sizes-title-lg"
          className="systemModal Reception "
        >
          <div className="mx-auto w-[139px] h-[43px] flex justify-center items-center rounded-md border-1 border-[#EFAA20]">
            <p className="text-white">تعديل الزيارة</p>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="fieldBorder p-3 my-3">
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
          </Form>
        </Modal>
      )}
    </div>
  );
};

export default EditReception;
