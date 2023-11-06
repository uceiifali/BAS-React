import React from 'react'
import { useContext, useEffect, useMemo, useState } from 'react'
import DatePicker from 'react-datepicker';
import { UseInput, UseCheckBox, UseMultiSelect, UseSelect } from '../../../../hooks'
import { Button, Form, Image } from 'react-bootstrap';
import Input from '../../../FormHandler/Input'
import Select from '../../../FormHandler/Select'
import { multiStepContext } from '../../../../Context/StepContext';
import Progress from '../../../Progress';
import ConfirmPoper from '../../ConfirmPoper';
const AddProjectStepThree = () => {
  // Design Data 
  // context variabules 
  const { userData, setUserData, submitDesign, Submitted, submitReview } = useContext(multiStepContext)
  //check project type 
  const { checkProjectType, setCheckProjectType } = useContext(multiStepContext)

  const agent = UseInput(`${userData.agent ? userData.agent : ""}`, "text", true);
  const agencyNumber = UseInput(`${userData.agencyNumber ? userData.agencyNumber : ""}`, "number", true);
  const [agencyAttachments, setAgencyAttachments] = useState(null)
  const instrumentNumber = UseInput(`${userData.instrumentNumber ? userData.instrumentNumber : ""}`, "number", true);
  const [InstrumentAttachments, setInstrumentAttachments] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);












  // Review Data 
  const licenseNumber = UseInput(`${userData.licenseNumber ? userData.licenseNumber : ""}`, "number", true);
  const licenseDeed = UseInput(`${userData.licenseDeed ? userData.licenseDeed : ""}`, "number", true);
  const [licenseDate, setlicenseDate] = useState(null)
  const [licenseAttachments, setlicenseAttachments] = useState(null);
  const [notes, setNotes] = useState("")


  const [confirmSubmit, setConfirmSubmit] = useState(false)




  useEffect(() => {
    console.log(checkProjectType)

  }, [])


  return (
    <fieldset className='addProjectStep step-three mx-auto'>
     
      {checkProjectType == "تصميم" ?
        <legend className='text-center'> اضافة بيانات الوكالة   </legend> :
        <legend className='text-center'>اضافة بيانات الرخصة </legend>

      }

      {checkProjectType == "تصميم" ?
        <Form className=' row w-100 m-auto '>
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
          <div className='col-md-12 mb-4'>
            <Form.Group controlId="formBasicImage">
              <Form.Label className="d-flex gap-2 align-items-center">


                صورة الصك
                {(imageUrl || InstrumentAttachments) && (
                  <Image
                    style={{ borderRadius: "50%" }}
                    width={50}
                    height={50}
                    src={
                      InstrumentAttachments
                        ? URL.createObjectURL(InstrumentAttachments)
                        : imageUrl || ""
                    }
                    alt="image"
                  />
                )}
              </Form.Label>
              <Form.Control
                type="file"
                placeholder="صورة الصك"
                name="imageFile"
                onChange={(e) => setInstrumentAttachments(e.currentTarget.files[0])}
              />
            </Form.Group>
          </div>
          <div className='col-md-12 d-flex justify-content-end  mb-4'>
            {/* disabled={!userDataVaild} */}
            <button onClick={(e) => {
              e.preventDefault()
              try {
                submitDesign()

              } catch (error) {
                console.log(error)

              }



            }} className=' w-25 mt-4 sumbmitAddUpdateUser border-0 disabled '> {Submitted ? <Progress isSmall /> : " حفظ"} </button>
          </div>

        </Form>



        : <Form className='row w-100 m-auto '>
          <div className="col-md-6 mb-4">
            <Input placeholder="ادخل رقم الرخصة" label={" رقم الرخصة "} {...licenseNumber.bind} mandatory />
          </div>
          <div className="col-md-6 mb-4">
            <Input placeholder="ادخل سند الرخصة" label={" سند الرخصة  "} {...licenseDeed.bind} mandatory />
          </div>

          <div className='col-md-6  mb-4'>
            <div>
              <Form.Group className='licenseDate-container w-100' controlId="licenseDate">
                <Form.Label className="d-flex gap-2 align-items-center">
                  تاريخ الرخصة
                </Form.Label>

                <DatePicker

                  selected={licenseDate}
                  placeholderText=" ادخل تاريخ الرخصة "
                  onChange={date => setlicenseDate(date)}
                  dateFormat="dd-MM-yyyy"
                  className='w-100 form-control'
                />





              </Form.Group>
            </div>

          </div>



          <div className='col-md-6 mb-4'>
            <Form.Group controlId="formBasicImage">
              <Form.Label className="d-flex gap-2 align-items-center">
              

                تحميل المستندات

              </Form.Label>
              <Form.Control
                type="file"
                placeholder=" تحمبل المستندات"
                name="imageFile"
                height="100px"
                onChange={(e) => setlicenseAttachments(e.currentTarget.files[0])}
              />
            </Form.Group>
          </div>
          <div className='col-md-12 mb-4'>
            <Form.Label className="d-flex gap-2 align-items-center">
              ملاحظاتك

            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="ادخل ملاحظاتك ..."
              style={{ height: '150px' }}
              onChange={(e) => setNotes(e.target.value)}


            />
          </div>
          <div className='col-md-12 d-flex justify-content-end  mb-4'>
            {/* disabled={!userDataVaild} */}
            <button onClick={(e) => {
              e.preventDefault()
              try {
                submitReview()

              } catch (error) {
                console.log(error)

              }



            }} className='  mt-4 sumbmitAddUpdateUser border-0 disabled '> {Submitted ? <Progress isSmall /> : " حفظ"} </button>
          </div>


        </Form>



      }
    </fieldset>
  )
}

export default AddProjectStepThree