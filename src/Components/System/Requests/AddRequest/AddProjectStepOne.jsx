import React, { useEffect, useMemo, useState } from "react";
import Input from "../../../FormHandler/Input";
import { useContext } from "react";
import { multiStepContext } from "../../../../Context/StepContext";
import { UseInput, UseSelect } from "../../../../hooks";
import Select from "../../../FormHandler/Select";
import KSACites from "../../../KSACItes";

import { Form } from "react-bootstrap";
import ReactSelectAsync from "react-select/async";

export const AddProjectStepOne = (props) => {
  // context inputs
  const { userData, setUserData } = useContext(multiStepContext);
  const { pagePath } = props;
  const { checkProjectType, setCheckProjectType } =
    useContext(multiStepContext);
  //define inupts

  const ownerName = UseInput(
    `${userData?.ownerName ? userData.ownerName : ""}`,
    "text",
    true
  );
  const projectName = UseInput(
    `${userData?.projectName ? userData.projectName : ""}`,
    "text",
    true
  );
  const buildingLocation = UseInput(
    `${userData?.buildingLocation ? userData.buildingLocation : ""}`,
    "text",
    true
  );
  const city = UseSelect(
    userData?.city
      ? {
          value: userData?.city,
          label: userData?.city,
        }
      : "",
    "",
    true
  );
  const Area = UseInput(`${userData?.Area ? userData.Area : ""}`, "text", true);
  const pieceNumber = UseInput(
    `${userData?.pieceNumber ? userData.pieceNumber : ""}`,
    "pieceNumber",
    true
  );
  const ChartNumber = UseInput(
    `${userData?.ChartNumber ? userData.ChartNumber : ""}`,
    "chartNumber",
    true
  );
  const [projectType, setProjectType] = useState(
    userData.projectType ? userData.projectType : ""
  );
  console.log(projectType);
  const projectTypeOptions = [
    {
      value: "تصميم",
      label: "تصميم",
    },
    {
      value: "الاشراف علي التنفيذ",
      label: "الاشراف علي التنفيذ",
    },
  ];
  const ProjectUse = UseSelect(
    userData?.subCategoryId
      ? {
          value: userData?.subCategoryId,
          label: userData?.subCategoryId,
        }
      : "",

    "Select",
    true
  );
  const serviceType = UseSelect(
    // userData?.subServiceId ? {
    //     value: userData?.subServiceId,
    //     label: userData?.subServiceId
    // } : ""

    "",
    "Select",
    true
  );

  const serviceTypeRoles = [
    {
      label: " قرارات مساحيه",
      value: "قرارات مساحيه",
      options: [
        {
          label: "قرار مساحي لكل الاغراض",
          value: "قرار مساحي لكل الاغراض",
        },
        {
          label: "قرار مساحي لغرض الدمج ",
          value: "قرار مساحي لغرض الدمج ",
        },
      ],
    },
    {
      label: "  رخص البناء",
      options: [
        {
          label: "موفع جديد",
          value: "موفع جديد",
        },
      ],
    },
  ];

  const ProjectUseRoles = [
    {
      label: " سكني",
      options: [
        {
          label: "سكني طبي",
          value: "سكني طبي",
        },
        {
          label: "سكني تجاري",
          value: "سكني تجاري",
        },
      ],
    },
    {
      label: " تجاري",
      options: [
        {
          label: "تجاري طبي",
          value: "تجاري طبي",
        },
        {
          label: "تجاري محلات",
          value: "تجاري محلات",
        },
      ],
    },
  ];

  //Check vaildation

  const [IsVaildState, setIsVaildState] = useState(false);
  const signalParent = (isValid) => {
    setIsVaildState(isValid);
    props.signalIfValid(isValid);
  };

  // checking Design Vaildation
  useMemo(() => {
    if (
      ownerName.value &&
      ownerName.isValid &&
      buildingLocation.value &&
      buildingLocation.isValid &&
      city.value?.label &&
      city.isValid &&
      Area.value &&
      Area.isValid &&
      pieceNumber.value &&
      pieceNumber.isValid &&
      pieceNumber.value &&
      pieceNumber.isValid &&
      ChartNumber.value &&
      ChartNumber.isValid &&
      ProjectUse.value.label &&
      ProjectUse.isValid &&
      serviceType.value.label &&
      serviceType.isValid &&
      projectName.value &&
      projectName.isValid &&
      projectType === "تصميم"
    ) {
      console.log("validation");
      const updatedUserData = {
        ...userData,
        ownerName: ownerName?.value,
        buildingLocation: buildingLocation?.value,
        city: city?.value?.label,
        Area: Area.value,
        pieceNumber: pieceNumber?.value,
        ChartNumber: ChartNumber?.value,
        projectType,
        categoryId: "سكني",
        subCategoryId: ProjectUse?.value.label,
        serviceId: "تجاري",
        projectName: projectName.value,
        subServiceId: serviceType?.value.label,
      };
      setUserData(updatedUserData);
      signalParent(true);
    } else {
      const updatedUserData = {
        ...userData,
        ownerName: ownerName.value,
        buildingLocation: buildingLocation.value,
        city: city?.value.label,
        Area: Area?.value,
        pieceNumber: pieceNumber?.value,
        ChartNumber: ChartNumber?.value,
        projectType,
        categoryId: "سكني",
        subCategoryId: ProjectUse?.value.label,
        serviceId: "تجاري",
        subServiceId: serviceType?.value.label,
        projectName: projectName.value,
      };
      setUserData(updatedUserData);
      signalParent(false);
    }
  }, [
    ownerName.value,
    ownerName.isValid,
    buildingLocation.value,
    buildingLocation.isValid,
    city.value?.label,
    city.isValid,
    Area.value,
    Area.isValid,
    pieceNumber.value,
    pieceNumber.isValid,
    pieceNumber.value,
    pieceNumber.isValid,
    ChartNumber.value,
    ChartNumber.isValid,
    ProjectUse?.value.label,
    serviceType?.value.label,
    projectName.value,
    projectType.value,
  ]);

  // checking review Vaildation
  useMemo(() => {
    if (
      ownerName.value &&
      ownerName.isValid &&
      buildingLocation.value &&
      buildingLocation.isValid &&
      city.value?.label &&
      city.isValid &&
      Area.value &&
      Area.isValid &&
      pieceNumber.value &&
      pieceNumber.isValid &&
      ChartNumber.value &&
      ChartNumber.isValid &&
      projectName.value &&
      projectName.isValid &&
      projectType === "الاشراف علي التنفيذ"
    ) {
      console.log("validation");
      const updatedUserData = {
        ...userData,
        ownerName: ownerName.value,
        buildingLocation: buildingLocation.value,
        city: city?.value,
        Area: Area.value,
        pieceNumber: pieceNumber.value,
        ChartNumber: ChartNumber.value,
        projectType,
        projectName: projectName.value,
      };
      setUserData(updatedUserData);
      signalParent(true);
    } else {
      console.log("not vaild");
      const updatedUserData = {
        ...userData,
        ownerName: ownerName.value,
        buildingLocation: buildingLocation.value,
        city: city.value.label,
        Area: Area.value,
        pieceNumber: pieceNumber.value,
        ChartNumber: ChartNumber.value,
        projectType,
        projectName: projectName.value,
      };
      setUserData(updatedUserData);
      signalParent(false);
    }
  }, [
    ownerName.value,
    ownerName.isValid,
    buildingLocation.value,
    buildingLocation.isValid,
    city.value?.label,
    city.isValid,
    Area.value,
    Area.isValid,
    pieceNumber.value,
    pieceNumber.isValid,
    pieceNumber.value,
    pieceNumber.isValid,
    ChartNumber.value,
    ChartNumber.isValid,
    projectType,
    projectName.value,
    projectName.isValid,
  ]);

  useEffect(() => {
    signalParent(IsVaildState);
  }, [IsVaildState]);

  return (
    <fieldset className="addProjectStep mx-auto">
      <legend className="text-center">اضافة بيانات المشروع </legend>
      <div className="row      p-3">
        <div className=" col-md-6 mb-4">
          <Input
            placeholder=" اخل اسم المالك"
            className="w-100 h-[37px]"
            label={"اسم المالك"}
            {...ownerName.bind}
            mandatory
          />
        </div>
        <div className=" col-md-6 mb-4">
          <Input
            placeholder=" اخل اسم المشروع"
            className="w-100 h-[37px]"
            label={"اسم المشروع"}
            {...projectName.bind}
            mandatory
          />
        </div>
        <div className=" col-md-8 mb-4">
          <Input
            placeholder=" ادخل موقع المشروع  "
            label={" موقع المشروع "}
            {...buildingLocation.bind}
            className="h-[37px]"
            mandatory
          />
        </div>
        <div className=" col-md-4 mb-4">
          <Select
            label={" المدينة"}
            placeholder="اخل اسم المدينة"
            OptionbackgroundColor="#414162"
            {...city.bind}
            options={KSACites}
            mandatory
          />
        </div>

        <div className=" col-md-4    mb-4">
          <Input
            className="h-[37px]"
            placeholder="ادخل اسم الحى"
            label={" الحي"}
            {...Area.bind}
            mandatory
          />
        </div>

        <div className=" col-md-4 mb-4">
          <Input
            className="h-[37px]"
            placeholder="اخل رقم القطعة"
            label={" رقم القطعة"}
            {...pieceNumber.bind}
            mandatory
          />
        </div>

        <div className=" col-md-4 mb-4">
          <Input
            className="h-[37px]"
            placeholder="اخل رقم المخطط"
            label={" رقم المخطط"}
            {...ChartNumber.bind}
            mandatory
          />
        </div>
        <div className=" col-md-4 mb-4">
          <Form.Group>
            <Form.Label>نوع المشروع</Form.Label>
            <Select
              placeholder="اختار نوع المشروع ..."
              OptionbackgroundColor="#414162"
              options={projectTypeOptions}
              onChange={(e) => {
                setProjectType(e.value);
                setCheckProjectType(e.value);
              }}
              mandatory
            />
          </Form.Group>
        </div>
        {projectType === "تصميم" ? (
          <>
            <div className=" col-md-4 mb-4">
              <Select
                label={"  استخدام المشروع"}
                OptionbackgroundColor="#414162"
                options={ProjectUseRoles}
                {...ProjectUse.bind}
                mandatory
              />
            </div>

            <div className=" col-md-4 mb-4">
              <Select
                label={"  نوع الخدمة "}
                OptionbackgroundColor="#414162"
                {...serviceType.bind}
                options={serviceTypeRoles}
                mandatory
              />
            </div>
          </>
        ) : (
          projectType === "الاشراف علي التنفيذ" && null
        )}
      </div>
    </fieldset>
  );
};
