import React, { useState } from 'react'
import Input from '../../../FormHandler/Input'
import { useContext } from 'react';
import { multiStepContext } from '../../../../Context/StepContext';
import { UseInput, UseSelect } from '../../../../hooks';
import Select from '../../../FormHandler/Select';
import KSACites from '../../../KSACItes';
import ReactSelect from 'react-select';
import { Form } from 'react-bootstrap';

export const AddProjectStepOne = () => {
    const { userData, setUserData } = useContext(multiStepContext)

    //define inupts

    const ownerName = UseInput(`${userData?.ownerName ? userData.ownerName : ""}`, "text", true);
    const buildingLocation = UseInput(`${userData?.buildingLocation ? userData.buildingLocation : ""}`, "text", true);
    const city = UseSelect(
        userData?.city ? {
            value: userData?.city,
            label: userData?.city
        } : ""
        , "", true);
    const Area = UseInput(`${userData?.Area ? userData.Area : ""}`, "text", true);
    const pieceNumber = UseInput(`${userData?.pieceNumber ? userData.pieceNumber : ""}`, "number", true);
    const ChartNumber = UseInput(`${userData?.ChartNumber ? userData.ChartNumber : ""}`, "ChartNumber", true);
    const [projectType, setProjectType] = useState("")
    const projectTypeOptions = [
        {
            value: "تصميم",
            label: "تصميم"
        },
        {
            value: "الاشراف علي التنفيذ",
            label: "الاشراف علي التنفيذ"
        },
    ]
    console.log(projectType)

    //
    const { checkProjectType, setCheckProjectType } = useContext(multiStepContext)
    const ProjectUse = UseSelect(
        userData?.subCategoryId ? {
            value: userData?.subCategoryId,
            label: userData?.subCategoryId
        } : ""

        , "Select", true);
    const serviceType = UseSelect(
        userData?.subServiceId ? {
            value: userData?.subServiceId,
            label: userData?.subServiceId
        } : ""

        , "Select", true);

    const serviceTypeRoles = [

        {
            label: " قرارات مساحيه",
            value: "قرارات مساحيه",
            options: [
                {
                    label: "قرار مساحي لكل الاغراض",
                    value: "قرار مساحي لكل الاغراض"
                },
                {
                    label: "قرار مساحي لغرض الدمج ",
                    value: "قرار مساحي لغرض الدمج "
                },

            ]
        },
        {
            label: "  رخص البناء",
            options: [
                {
                    label: "موفع جديد",
                    value: "موفع جديد"
                },

            ]
        },
    ];





    const ProjectUseRoles = [
        {
            label: " سكني",
            options: [
                {
                    label: "سكني طبي",
                    value: "سكني طبي"
                },
                {
                    label: "سكني تجاري",
                    value: "سكني تجاري"
                },

            ]
        },
        {
            label: " تجاري",
            options: [
                {
                    label: "تجاري طبي",
                    value: "تجاري طبي"
                },
                {
                    label: "تجاري محلات",
                    value: "تجاري محلات"
                },

            ]
        },
    ];







    return (
        <fieldset className='addProjectStep mx-auto'>
            <legend className='text-center'>اضافة بيانات المشروع </legend>
            <div className='row      p-3'>
                <div className=" col-md-8 mb-4">
                    <Input className='w-100' label={"اسم المالك"} {...ownerName.bind} mandatory />
                </div>
                <div className=" col-md-8 mb-4">
                    <Input label={" موقع المشروع "} {...buildingLocation.bind} mandatory />

                </div>
                <div className=" col-md-4 mb-4">
                    <Select label={" المدينة"}   {...city.bind} options={KSACites} mandatory />

                </div>

                <div className=" col-md-4    mb-4">
                    <Input label={" الحي"} {...Area.bind} mandatory />

                </div>

                <div className=" col-md-4 mb-4">
                    <Input label={" رقم القطعة"} {...pieceNumber.bind} mandatory />

                </div>

                <div className=" col-md-4 mb-4">
                    <Input label={" رقم المخطط"}   {...ChartNumber.bind} mandatory />
                </div>
                <div className=" col-md-4 mb-4">
                    <Form.Group>
                        <Form.Label>
                            نوع المشروع
                        </Form.Label>
                        <ReactSelect options={projectTypeOptions} onChange={(e) => {
                            setProjectType(e.value)
                            setCheckProjectType(e.value)


                        }} mandatory />

                    </Form.Group>





                </div>
                {projectType === "تصميم" ? <>

                    <div className=" col-md-4 mb-4">
                        <Select label={"  استخدام المشروع"} options={ProjectUseRoles} {...ProjectUse.bind} mandatory />




                    </div>


                    <div className=" col-md-4 mb-4">
                        <Select label={"  نوع الخدمة "}
                            {...serviceType.bind}
                            options={serviceTypeRoles}
                            mandatory />




                    </div>


                </>



                    : ""



                }

            </div>
        </fieldset>
    )
}
