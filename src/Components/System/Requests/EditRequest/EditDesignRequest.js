import React, { useEffect } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import "./index.css"
import Input from '../../../FormHandler/Input'
import KSACites from '../../../KSACItes'
import { UseInput, UseSelect } from '../../../../hooks'
import Select from '../../../FormHandler/Select'

import { useState } from 'react'
import { ConfirmPopup } from 'primereact/confirmpopup'
import ConfirmPoper from '../../ConfirmPoper'

const EditDesignRequest = ({ editRequest, setEditRequest ,setConfirmPoper }) => {



  const [ConfirmUpdate, setConfirmUpdate] = useState(false)
  //define inupts

  const ownerName = UseInput("", "text", true);
  const buildingLocation = UseInput("", "text", true);
  const city = UseSelect("", "text", true);
  const Area = UseInput("", "text", true);
  const pieceNumber = UseInput("", "number", true);
  const ChartNumber = UseInput("", "ChartNumber", true);
  const ProjectUse = UseSelect("", "Select", true);
  const serviceType = UseSelect("", "Select", true);
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

  //
  const clientType = UseSelect(
    "", "Select");
  const projectType = UseSelect(
    "", "Select");
  const email = UseInput(``, "email", true);
  const phone = UseInput("", "KSAPhone", true)

  const taxCertificateNumber = UseInput(` `, "number", true)
  const [instrumentImage, setInstrumentImage] = useState();
  const clientTypeRoles = [
    {
      label: "فردي",
      value: "فردي"
    },
    {
      label: " شركه  او مؤسسة",
      value: " شركه  او مؤسسة "
    },
    {
      label: "حكومي",
      value: "حكومي"
    }, {
      label: "مستثمر",
      value: "مستثمر"
    },

  ]
  const projectTypeRoles = [
    {
      label: "سجل تجاري",
      value: "سجل تجاري",

    }, {
      label: "هوية",
      value: "هوية"
    }
  ]




  //agent 
  const agent = UseInput(``, "text", true);
  const agencyNumber = UseInput(``, "number", true);
  const [agencyAttachments, setAgencyAttachments] = useState(null)
  const instrumentNumber = UseInput(``, "number", true);
  const [InstrumentAttachments, setInstrumentAttachments] = useState(null);







  //GetUserDataWithID


  const GetRequestDataWithID = () => {

  }

  // updateRequest
  const handleUPdateResquest = () => {




    //after confirming the data is updated 


    setEditRequest(false )
    setConfirmPoper(true)
    
  }



  useEffect(() => {

    GetRequestDataWithID()

  }, [])





  return (
    <div>

   
      {editRequest && <Modal
        size="lg"
        show={editRequest}
        onHide={() => setEditRequest(false)}
        aria-labelledby=" example-modal-sizes-title-lg"
        className='systemModal    '
      >

        <div className='p-1 mx-auto my-3 edit-header
         w-50'>
          <p className='golden   text-center'>تعديل فى طلب التصميم</p>
        </div>


        <div className='mx-4'>

          <Form className='row w-100 m-auto  '>
            <fieldset className='p-1 mx-auto border-golden w-90 p-3 '>
              <legend className='text-center'>بيانات المشروع</legend>

              <div className='row w-100'>
                <div className=" col-md-7 mb-4">
                  <Input className='w-100 ' label={"اسم المالك"} {...ownerName.bind} mandatory />
                </div>
                <div className=" col-md-7 mb-4">
                  <Input label={" موقع المشروع "} {...buildingLocation.bind} mandatory />

                </div>
                <div className=" col-md-6 mb-4">
                  <Select label={" المدينة"}   {...city.bind} options={KSACites} mandatory />

                </div>

                <div className=" col-md-6 mb-4">
                  <Input label={" الحي"} {...Area.bind} mandatory />

                </div>

                <div className=" col-md-6 mb-4">
                  <Input label={" رقم القطعة"} {...pieceNumber.bind} mandatory />

                </div>

                <div className=" col-md-6 mb-4">
                  <Input label={" رقم المخطط"}   {...ChartNumber.bind} mandatory />
                </div>

                <div className="col-md-6 mb-4">

                  <Select name="project use " placeholder={"اختر..."} label={" استخدام المشروع"} {...ProjectUse.bind} className="w-100" options={ProjectUseRoles} />




                </div>
                <div className="col-md-6 mb-4">
                  <Select label={" نوع الخدمة"} {...serviceType.bind} options={serviceTypeRoles} mandatory />
                </div>

              </div>


            </fieldset>
            <fieldset className='p-1 my-3 mx-auto border-golden w-90 p-3 '>
              <legend className='text-center'>بيانات المشروع</legend>

              <div className='row  w-100'>
                <div className="col-md-6 mb-4">
                  <Select label={" نوع العميل"} {...clientType.bind} options={clientTypeRoles} mandatory />
                </div>
                <div className="col-md-6 mb-4">
                  <Select label={" نوع الهوية  "} {...projectType.bind} options={projectTypeRoles} mandatory />

                </div>

                <div className='col-md-6 mb-4'>
                  <Form.Group controlId="formBasicImage">
                    <Form.Label className="d-flex gap-2 align-items-center">
                      صورة الهويه
                    </Form.Label>

                    <Form.Control
                      type="file"
                      placeholder="صورة الهويه"
                      name="imageFile"
                      onChange={(e) => setInstrumentImage(e.currentTarget.files[0])}
                    />


                  </Form.Group>
                </div>

                <div className="col-md-6 mb-4">
                  <Input label={"البريد الالكتروني"} {...email.bind} mandatory />

                </div>

                <div className="col-md-6 mb-4">

                  <Form.Group controlId="formBasicImage">

                    <Input label={"  رقم الجوال "} {...phone.bind} mandatory />


                  </Form.Group>






                </div>
                <div className="col-md-6 mb-4">
                  <Input label={"رقم الشهادة الضربية"} {...taxCertificateNumber.bind} />






                </div>

              </div>


            </fieldset>
            <fieldset className='p-1 my-3 mx-auto border-golden w-90 p-3 '>
              <legend className='text-center'>بيانات الوكيل</legend>

              <div className='row  w-100'>

                <div className="col-md-6 mb-4">
                  <Input label={" الوكيل "} {...agent.bind} mandatory />
                </div>
                <div className="col-md-6 mb-4">
                  <Input label={" رقم الوكيل "} {...agencyNumber.bind} mandatory />

                </div>

                <div className='col-md-6 mb-4'>
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
                  <Input label={"رقم الصك"} {...instrumentNumber.bind} mandatory />

                </div>
                <div className='col-md-6 mb-4'>
                  <Form.Group controlId="formBasicImage">
                    <Form.Label className="d-flex gap-2 align-items-center">
                      صورة الصك
                    </Form.Label>
                    <Form.Control
                      type="file"
                      placeholder="صورة الصك"
                      name="imageFile"
                      onChange={(e) => setInstrumentAttachments(e.currentTarget.files[0])}
                    />
                  </Form.Group>
                </div>






              </div>












            </fieldset>



            <div className='d-flex justify-content-end w-90'>
              <Button
                onClick={() => {
                  handleUPdateResquest()


                }}
                className='sumbmitAddUpdateUser'>حفظ</Button>

            </div>
          </Form>



        </div>

      </Modal>}


    </div >
  )
}

export default EditDesignRequest