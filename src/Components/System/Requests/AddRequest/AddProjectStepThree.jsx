import React from "react";
import { useContext, useEffect, useMemo, useState } from "react";
import DatePicker from "react-datepicker";
import {
  UseInput,
  UseCheckBox,
  UseMultiSelect,
  UseSelect,
} from "../../../../hooks";
import { Button, Form, Image } from "react-bootstrap";
import Input from "../../../FormHandler/Input";
import Select from "../../../FormHandler/Select";
import { multiStepContext } from "../../../../Context/StepContext";
import Progress from "../../../Progress";
import ConfirmPoper from "../../ConfirmPoper";
const AddProjectStepThree = (props) => {
  // Design Data
  // context variabules
  const { pagePath } = props;
  const {
    userData,
    setUserData,
    submitDesign,
    Submitted,
    submitReview,
    checkProjectType,
    setCheckProjectType,
    submitSystemReview,
    submitSystemDesign,
  } = useContext(multiStepContext);

  const [userDataVaild, setUserDataVaild] = useState(false);
  //check project type

  // Design Data
  const agent = UseInput(
    `${userData.agent ? userData.agent : ""}`,
    "text",
    true
  );
  const agencyNumber = UseInput(
    `${userData.agencyNumber ? userData.agencyNumber : ""}`,
    "number",
    true
  );
  const [agencyAttachments, setAgencyAttachments] = useState(null);
  const instrumentNumber = UseInput(
    `${userData.instrumentNumber ? userData.instrumentNumber : ""}`,
    "number",
    true
  );
  const [InstrumentAttachments, setInstrumentAttachments] = useState(null);
  const [imageUrl, setImageUrl] = useState(
    process.env.PUBLIC_URL + "/icons/show.png"
  );
  // check desing vaildation
  const [IsVaildState, setIsVaildState] = useState(false);

  const signalParent = (isValid) => {
    setIsVaildState(isValid);
    props.signalIfValid(isValid);
  };
  useMemo(() => {
    if (
      agent?.value &&
      agent?.isValid &&
      agencyNumber?.value &&
      agencyNumber?.isValid &&
      agencyNumber?.value &&
      agencyAttachments?.name &&
      instrumentNumber.value &&
      instrumentNumber.isValid &&
      InstrumentAttachments?.name &&
      pagePath === "Design"
    ) {
      const updatedUserData = {
        ...userData,
        agent: agent.value,
        agencyNumber: agencyNumber?.value,
        agencyAttachments: agencyAttachments?.name,
        instrumentNumber: instrumentNumber?.value,
        InstrumentAttachments: InstrumentAttachments?.name,
      };
      setUserData(updatedUserData);
      setUserDataVaild(true);

      console.log(userData);
    } else {
      const updatedUserData = {
        ...userData,
        agent: agent.value,
        agencyNumber: agencyNumber?.value,
        agencyAttachments: agencyAttachments?.name,
        instrumentNumber: instrumentNumber?.value,
        InstrumentAttachments: InstrumentAttachments?.name,
      };

      setUserData(updatedUserData);
      setUserDataVaild(false);
      signalParent(false);
    }
    console.log(userDataVaild);
  }, [
    agent?.value &&
      agent?.isValid &&
      agencyNumber?.value &&
      agencyNumber?.isValid &&
      agencyNumber?.value &&
      agencyAttachments?.name &&
      instrumentNumber.value &&
      instrumentNumber.isValid &&
      InstrumentAttachments?.name,
  ]);

  // Review Data
  const licenseNumber = UseInput(
    `${userData.licenseNumber ? userData.licenseNumber : ""}`,
    "number",
    true
  );
  const licenseDeed = UseInput(
    `${userData.licenseDeed ? userData.licenseDeed : ""}`,
    "number",
    true
  );
  const [licenseDate, setlicenseDate] = useState(null);
  const [licenseAttachments, setlicenseAttachments] = useState(null);
  const [notes, setNotes] = useState("");

  const [confirmSubmit, setConfirmSubmit] = useState(false);

  // check Review validation

  useMemo(() => {
    if (
      licenseNumber.isValid &&
      licenseNumber.value &&
      licenseDeed.isValid &&
      licenseDeed.value &&
      licenseDate &&
      licenseAttachments?.name &&
      pagePath === "Review"
    ) {
      signalParent(true);
      const updatedUserData = {
        ...userData,
        licenseNumber: licenseNumber?.value,
        licenseDeed: licenseDeed?.value,
        licenseDate: licenseDate?.value,
        licenseAttachments: licenseAttachments?.name,
        notes: notes?.value,
      };
      setUserData(updatedUserData);
      setUserDataVaild(true);
    } else {
      const updatedUserData = {
        ...userData,
        licenseNumber: licenseNumber?.value,
        licenseDeed: licenseDeed?.value,
        licenseDate: licenseDate?.value,
        licenseAttachments: licenseAttachments?.name,
        notes: notes?.value,
      };
      setUserData(updatedUserData);
      signalParent(false);
      setUserDataVaild(false);
    }
  }, [
    licenseNumber.isValid &&
      licenseNumber.value &&
      licenseDeed.isValid &&
      licenseDeed.value &&
      licenseDate &&
      licenseAttachments?.name,
  ]);
  useEffect(() => {
    signalParent(IsVaildState);
  }, []);

  useEffect(() => {
    signalParent(IsVaildState);
  }, [IsVaildState]);

  return (
    <fieldset className="addProjectStep step-three mx-auto">
      {pagePath === "Design" ? (
        <legend className="text-center"> اضافة بيانات الوكالة </legend>
      ) : (
        <legend className="text-center">اضافة بيانات الرخصة </legend>
      )}

      {pagePath === "Design" ? (
        <Form className=" row w-100 m-auto ">
          <div className="col-md-6 mb-4">
            <Input
              className="h-[37px]"
              label={" الوكيل "}
              {...agent.bind}
              mandatory
            />
          </div>
          <div className="col-md-6 mb-4">
            <Input
              className="h-[37px]"
              label={" رقم الوكيل "}
              {...agencyNumber.bind}
              mandatory
            />
          </div>

          <div className="col-md-6 mb-4">
            <Form.Group controlId="formBasicImage">
              <Form.Label className="d-flex gap-2 align-items-center">
                ارفاق الوكالة
              </Form.Label>
              <Form.Control
                type="file"
                placeholder="صورة الهويه"
                name="imageFile"
                onChange={(e) => setAgencyAttachments(e.currentTarget.files[0])}
              />
            </Form.Group>
          </div>

          <div className="col-md-6 mb-4">
            <Input
              className="h-[37px]"
              label={"رقم الصك"}
              {...instrumentNumber.bind}
              mandatory
            />
          </div>
          <div className="col-md-6 mb-4">
            <Form.Group controlId="formBasicImage">
              <Form.Label className="d-flex flex-column gap-2 ">
                صورة الصك
              </Form.Label>
              <Form.Control
                type="file"
                placeholder="صورة الصك"
                name="imageFile"
                className="w-100"
                onChange={(e) =>
                  setInstrumentAttachments(e.currentTarget.files[0])
                }
              />
            </Form.Group>
          </div>
          <div className="col-md-12 d-flex justify-content-end  align-items-end mb-4">
            <button
              disabled={!userDataVaild}
              onClick={(e) => {
                e.preventDefault();
                try {
                  submitSystemDesign();
                } catch (error) {
                  console.log(error);
                }
              }}
              className="  mt-4 sumbmitAddUpdateUser border-0 disabled "
            >
              {" "}
              {Submitted ? <Progress isSmall /> : " حفظ"}{" "}
            </button>
          </div>
        </Form>
      ) : (
        <Form className="row w-100 m-auto ">
          <div className="col-md-6 mb-4">
            <Input
              className="h-[37px]"
              placeholder="ادخل رقم الرخصة"
              label={" رقم الرخصة "}
              {...licenseNumber.bind}
              mandatory
            />
          </div>
          <div className="col-md-6 mb-4">
            <Input
              className="h-[37px]"
              placeholder="ادخل سند الرخصة"
              label={" سند الرخصة  "}
              {...licenseDeed.bind}
              mandatory
            />
          </div>

          <div className="col-md-6  mb-4">
            <div>
              <Form.Group
                className="licenseDate-container w-100"
                controlId="licenseDate"
              >
                <Form.Label className="d-flex gap-2 align-items-center">
                  تاريخ الرخصة
                </Form.Label>

                <DatePicker
                  selected={licenseDate}
                  placeholderText=" ادخل تاريخ الرخصة "
                  onChange={(date) => setlicenseDate(date)}
                  dateFormat="dd-MM-yyyy"
                  className="w-100 form-control"
                />
              </Form.Group>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <Form.Group controlId="formBasicImage">
              <Form.Label className="d-flex gap-2 align-items-center">
                تحميل المستندات
              </Form.Label>
              <Form.Control
                type="file"
                multiple="multiple"
                placeholder=" تحمبل المستندات"
                name="imageFile"
                height="100px"
                onChange={(e) =>
                  setlicenseAttachments(e.currentTarget.files[0])
                }
              />
            </Form.Group>
          </div>
          <div className="col-md-12 mb-4">
            <Form.Label className="d-flex gap-2 align-items-center">
              ملاحظاتك
            </Form.Label>
            <Form.Control
              as="textarea"
              multiple="multiple"
              placeholder="ادخل ملاحظاتك ..."
              style={{ height: "150px" }}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
          <div className="col-md-12 d-flex justify-content-end  mb-4">
            <button
              disabled={!userDataVaild}
              onClick={(e) => {
                e.preventDefault();
                try {
                  submitSystemReview();
                } catch (error) {
                  console.log(error);
                }
              }}
              className="  mt-4 sumbmitAddUpdateUser border-0 disabled "
            >
              {" "}
              {Submitted ? <Progress isSmall /> : " حفظ"}{" "}
            </button>
          </div>
        </Form>
      )}
    </fieldset>
  );
};

export default AddProjectStepThree;
