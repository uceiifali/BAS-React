import React from "react";
import "./index.css";
import MultiStep from "react-multistep";
import { AddProjectStepOne } from "./AddProjectStepOne";
import AddProjectStepTwo from "./AddProjectStepTwo";
import AddProjectStepThree from "./AddProjectStepThree";
const AddRequest = ({ handleClose, pagePath }) => {
  return (
    <div className="AddProject">
      <p className="golden add-project-header pt-5     px-3">إضافة طلب جديدة</p>

      <MultiStep
        activeStep={0}
        nextButton={{ title: "حفظ" }}
        showNavigation={true}
        className="flex justify-end"
      >
        <AddProjectStepOne pagePath={pagePath} />
        <AddProjectStepTwo pagePath={pagePath} />
        <AddProjectStepThree pagePath={pagePath} />
      </MultiStep>
    </div>
  );
};

export default AddRequest;
