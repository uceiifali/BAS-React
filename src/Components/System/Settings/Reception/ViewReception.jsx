import React from "react";
import { Form, Modal } from "react-bootstrap";
import PdfImage from "../../../PdfImage";
import SaveButton from "../../../SaveButton";

const ViewReception = ({ id = null, viewVisit, setViewVisit, status }) => {
  return (
    <div>
      {id && viewVisit && status === "Exports" && (
        <Modal
          size="lg"
          show={viewVisit}
          onHide={() => setViewVisit(false)}
          aria-labelledby=" example-modal-sizes-title-lg"
          className={`systemModal  overflow-y-scroll `}
        >
          <div className="mx-auto w-[139px] h-[43px] flex justify-center items-center rounded-md border-1 border-[#EFAA20]">
            <p className="text-white"> الزيارة الصادرة</p>
          </div>
          <Form>
            <fieldset className="fieldBorder container   mx-auto  p-3 my-3">
              <legend className="text-center">معلومات الزيارة</legend>
              <div class="grid grid-cols-1  gap-4 mb-3">
                <div className="flex justify-start gap-3">
                  <p className="text-white">اسم الشخص:</p>
                  <span className="main-text">حبيب محمد</span>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4 mb-3">
                <div className="flex justify-start gap-3">
                  <p className="text-white">مكان الزيارة:</p>
                  <span className="main-text">مصر </span>
                </div>
              </div>

              <div class="grid grid-cols-3 gap-4 mb-3">
                <div className="flex gap-2">
                  <p className="text-white"> تاريخ الزيارة:</p>
                  <span className="main-text">15-10-2023</span>
                </div>

                <div className="flex gap-2">
                  <p className="text-white"> وقت الزياره من:</p>
                  <span className="main-text">Am 12:10</span>
                  <div />
                </div>
                <div className="flex gap-2">
                  <p className="text-white"> وقت الزياره الي:</p>
                  <span className="main-text">Am 12:30</span>
                </div>
              </div>
            </fieldset>
            <fieldset className="fieldBorder container mx-auto  p-3 my-3 ">
              <legend className="text-center">تفاصيل الزيارة</legend>
              <Form.Group className="my-3">
                <Form.Label>سبب الزيارة</Form.Label>
                <textarea
                  cols={5}
                  rows={5}
                  className="form-control"
                  placeholder="اكتب سبب الزيارة .................................."
                />
              </Form.Group>
              <Form.Group className="my-3">
                <Form.Label>ملاحظات </Form.Label>
                <textarea
                  cols={5}
                  rows={5}
                  className="form-control"
                  placeholder="اكتب  ملاحظات .................................."
                />
              </Form.Group>
            </fieldset>
            <fieldset className="fieldBorder container mx-auto  p-3 my-3 ">
              <legend className="text-center">تفاصيل الزيارة</legend>

              <PdfImage />
            </fieldset>
            <div className="flex justify-center gap-4">
              <SaveButton
                onClick={() => {
                  setViewVisit(false);
                }}
              />
            </div>
          </Form>
        </Modal>
      )}
      {id && viewVisit && status === "Imports" && (
        <Modal
          size="lg"
          show={viewVisit}
          onHide={() => setViewVisit(false)}
          aria-labelledby=" example-modal-sizes-title-lg"
          className={`systemModal  overflow-y-scroll `}
        >
          <div className="mx-auto w-[139px] h-[43px] flex justify-center items-center rounded-md border-1 border-[#EFAA20]">
            <p className="text-white"> الزيارة الواردة</p>
          </div>
          <Form>
            <fieldset className="fieldBorder container   mx-auto  p-3 my-3">
              <legend className="text-center">معلومات الزيارة</legend>
              <div class="grid grid-cols-1  gap-4 mb-3">
                <div className="flex justify-start gap-3">
                  <p className="text-white">اسم الموظف:</p>
                  <span className="main-text">حبيب محمد</span>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4 mb-3">
                <div className="flex justify-start gap-3">
                  <p className="text-white"> فئة الزائر:</p>
                  <span className="main-text">مصر </span>
                </div>
                <div className="flex justify-start gap-3">
                  <p className="text-white"> الجهة:</p>
                  <span className="main-text">شركة BSA </span>
                </div>
              </div>

              <div class="grid grid-cols-3 gap-4 mb-3">
                <div className="flex gap-2">
                  <p className="text-white"> تاريخ الزيارة:</p>
                  <span className="main-text">15-10-2023</span>
                </div>

                <div className="flex gap-2">
                  <p className="text-white"> وقت الزياره من:</p>
                  <span className="main-text">Am 12:10</span>
                  <div />
                </div>
                <div className="flex gap-2">
                  <p className="text-white"> وقت الزياره الي:</p>
                  <span className="main-text">Am 12:30</span>
                </div>
              </div>
            </fieldset>
            <fieldset className="fieldBorder container mx-auto  p-3 my-3 ">
              <legend className="text-center">تفاصيل الزيارة</legend>
              <Form.Group className="my-3">
                <Form.Label>سبب الزيارة</Form.Label>
                <textarea
                  cols={5}
                  rows={5}
                  className="form-control"
                  placeholder="اكتب سبب الزيارة .................................."
                />
              </Form.Group>
              <Form.Group className="my-3">
                <Form.Label>ملاحظات </Form.Label>
                <textarea
                  cols={5}
                  rows={5}
                  className="form-control"
                  placeholder="اكتب  ملاحظات .................................."
                />
              </Form.Group>
            </fieldset>
            <fieldset className="fieldBorder container mx-auto  p-3 my-3 ">
              <legend className="text-center">تفاصيل الزيارة</legend>

              <PdfImage />
            </fieldset>
            <div className="flex justify-center gap-4">
              <SaveButton
                onClick={() => {
                  setViewVisit(false);
                }}
              />
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
};

export default ViewReception;
