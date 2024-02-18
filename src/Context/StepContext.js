import React, { createContext, useContext, useState } from "react";
import CreateProjectPoper from "../Components/Client/Landing/CreateProjectPoper";
import App from "../App";
import httpRequest from "../helper/https";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { showAddUpdateUser } from "./CheckAddUpdateUserVisability";
import ConfirmPoper from "../Components/System/ConfirmPoper";
import { addRequest } from "../helper/fetchers/Requests";
import SuccessfullModal from "../Components/Modals/SuccessfullModal";

export const multiStepContext = React.createContext();
const StepContext = ({ children }) => {
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const [selectProjectType, setSelectedProjectType] = useState("");
  const { showAddUserModel, setShowAddUserModel } =
    useContext(showAddUpdateUser);
  const { showAddRequest, setShowAdddRequest } = useState(false);
  const [openDesignSteps, setOpenDesignSteps] = useState(true);
  const [openReviewSteps, setOpenReviewSteps] = useState(true);
  const [userData, setUserData] = useState([]);
  const [openDesign, setOpenDesign] = useState(false);
  const [currentStep, setStep] = useState(1);
  const [finalData, setFinalData] = useState([]);
  const [Submitted, setSubmitted] = useState(false);
  const [openCongrats, setOpenCongrats] = useState(false);
  const formData = new FormData();

  const submitRequest = async (e) => {
    e.preventDefault();
    let request = new FormData();
    request.append("ownerName", userData?.ownerName);
    request.append("projectName", userData?.projectName);
    request.append("buildingLocation", userData?.buildingLocation);
    request.append("city", userData?.city);
    request.append("area", userData?.area);
    request.append("pieceNumber", userData?.pieceNumber);
    request.append("chartNumber", userData?.chartNumber);
    request.append("categoryId", userData?.categoryId);
    request.append("subcategoryId", userData?.subcategoryId);
    request.append("serviceId", userData?.serviceId);
    request.append("subservicesId", userData?.subservicesId);
    request.append("projectType", userData?.projectType);
    request.append("clientType", userData?.clientType);
    request.append("identityType", userData?.identityType);
    request.append("idPhoto", userData?.idPhoto);
    request.append("phone", userData?.phone);
    request.append("agent", userData?.agent);
    request.append("agencyNumber", userData?.agencyNumber);
    request.append("instrumentNumber", userData?.instrumentNumber);
    request.append("notes", userData?.notes);
    request.append("agencyAttachments", userData?.agencyAttachments);
    request.append("email", userData?.email);
    request.append("licenseNumber", userData?.licenseNumber);
    request.append("taxNumber", userData?.taxNumber);
    request.append("identityNumber", userData?.identityNumber);
    request.append("projectName", userData?.projectName);
    request.append("licenseAttachments", userData?.licenseAttachments);
    request.append("licenseDeed", userData?.licenseDeed);
    request.append("licenseDate", userData?.licenseDate);
    console.log(userData);
    console.log(request);
    for (const entry of request.entries()) {
      console.log(entry);
    }
    try {
      const { data } = await addRequest(request);
      if (data.success) {
        setSubmitted(false);
        setConfirmSubmit(true);
        console.log("data submitted");
        setUserData([]);
      }

      // Handle the response here
    } catch ({ response }) {
      toast.error(response?.data);
      setSubmitted(false);
    } finally {
      setOpenCongrats(true);
    }
  };

  return (
    <>
      <SuccessfullModal
        show={confirmSubmit}
        message={"تم اضافة الطلب فى المشاريع بنجاح  "}
        handleClose={() => {
          setConfirmSubmit(false);
        }}
      />
      <multiStepContext.Provider
        value={{
          showAddRequest,
          formData,
          setShowAdddRequest,
          submitRequest,
          setOpenReviewSteps,
          selectProjectType,
          setSelectedProjectType,
          openReviewSteps,
          setOpenDesignSteps,
          openDesignSteps,
          openCongrats,
          setOpenCongrats,
          userData,
          setUserData,
          finalData,
          setFinalData,
          currentStep,
          setStep,
          openDesign,
          setOpenDesign,

          Submitted,
        }}
      >
        {children}
      </multiStepContext.Provider>
    </>
  );
};

export default StepContext;
