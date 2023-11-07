import React, { useContext, useEffect, useMemo, useState } from 'react'
import Input from '../../../FormHandler/Input'
import Select from '../../../FormHandler/Select'
import { UseCheckBox, UseInput, UseMultiSelect, UseSelect } from '../../../../hooks';
import { Form, Image, InputGroup } from 'react-bootstrap';
import { multiStepContext } from '../../../../Context/StepContext';
import { PhoneInput } from 'react-international-phone';
import { PhoneNumberUtil } from 'google-libphonenumber';
const AddProjectStepTwo = (props) => {



  const { userData, setUserData } = useContext(multiStepContext)

  const phoneUtil = PhoneNumberUtil.getInstance();

  const isPhoneValid = (phone) => {
    try {
      return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
    } catch (error) {
      return false;
    }
  };


  const clientType = UseSelect(
    userData?.clientType ? {
      value: userData?.clientType,
      label: userData?.clientType
    } : ""

    , "Select");
  const identityType = UseSelect(
    userData?.identityType ? {
      value: userData?.identityType,
      label: userData?.identityType
    } : ""

    , "", "Select");
  const email = UseInput(`${userData?.email ? userData.email : ""}`, "email", true);
  const [phone, setPhone] = useState(`${userData?.phone ? userData.phone : ""}`)
  const checkPhoneValidation = isPhoneValid(phone);
  const taxCertificateNumber = UseInput(`${userData?.taxCertificateNumber ? userData.taxCertificateNumber : ""} `, "number", true)
  const [instrumentImage, setInstrumentImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(process.env.PUBLIC_URL + "/icons/show.png");

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
  const identityTypeRoles = [
    {
      label: "سجل تجاري",
      value: "سجل تجاري",

    }, {
      label: "هوية",
      value: "هوية"
    }
  ]










  //  vaildation

  const [IsVaildState, setIsVaildState] = useState(false)
  const signalParent = (isValid) => {
    setIsVaildState(isValid)
    props.signalIfValid(isValid)
  }


  useMemo(() => {
    if (clientType?.value.label && identityType?.value.label && instrumentImage?.name && email.value && email.isValid && phone && checkPhoneValidation) {
      const updatedUserData = {
        ...userData,
        instrumentImage: instrumentImage?.name,
        clientType: clientType.value.label,
        identityType: identityType.value.label,
        email: email.value,
        phone,
        taxCertificateNumber: taxCertificateNumber.value


      };
      setUserData(updatedUserData)

      console.log(checkPhoneValidation)


      signalParent(true)
    } else {
      signalParent(false)
      const updatedUserData = {
        ...userData,
        instrumentImage: instrumentImage?.name,
        clientType: clientType.value.label,
        identityType: identityType.value.label,
        email: email.value,
        taxCertificateNumber: taxCertificateNumber.value,
        phone


      };
      setUserData(updatedUserData)

      console.log(checkPhoneValidation)
    }

  }, [clientType?.value.label && identityType?.value.label && instrumentImage?.name && email.value && email.isValid && checkPhoneValidation])


  useEffect(() => {
    signalParent(IsVaildState)
  }, [IsVaildState])









  return (

    <fieldset className='addProjectStep mx-auto'>




      <legend className='text-center'>اضافة بيانات المالك </legend>
      <Form className='row w-100 m-auto '>
        <div className="col-md-6 mb-4">
          <Select label={" نوع العميل"}
            placeholder="اختر..."
            OptionbackgroundColor="#414162"
            {...clientType.bind} options={clientTypeRoles} mandatory />
        </div>
        <div className="col-md-6 mb-4">
          <Select label={" نوع الهوية  "}
            placeholder="اختر..."
            OptionbackgroundColor="#414162"
            {...identityType.bind} options={identityTypeRoles} mandatory />

        </div>



        <div className="col-md-6 mb-4">
          <Input label={"البريد الالكتروني"} {...email.bind} mandatory />

        </div>

        <div className="col-md-6 mb-4">

          <Form.Group controlId="formBasicImage">
            <Form.Label className="d-flex gap-2 align-items-center">
              رقم الجوال
            </Form.Label>
            <PhoneInput
              defaultCountry="sa"
              value={phone}
              className='w-100 h-100'
              onChange={(phone) => setPhone(phone)}
            />

          </Form.Group>






        </div>
        <div className="col-md-6 mb-4">
          <Input label={"رقم الشهادة الضربية"} {...taxCertificateNumber.bind} />






        </div>
        <div className='col-md-12 mb-4'>
          <Form.Group controlId="formBasicImage">
            <Form.Label className="d-flex flex-column gap-2 ">
              <span>        صورة الهويه</span>
              {(imageUrl || instrumentImage) && (
                <Image

                  width={100}
                  height={60}
                  src={
                    instrumentImage
                      ? URL.createObjectURL(instrumentImage)
                      : imageUrl

                  }
                  alt="image"
                />
              )}
            </Form.Label>

            <Form.Control
              type="file"

              width={100}
              height={100}
              className='choose-file-input'
              placeholder="صورة الهويه"
              name="imageFile"
              onChange={(e) => setInstrumentImage(e.currentTarget.files[0])}
            />


          </Form.Group>
        </div>



      </Form >
    </fieldset>
  )
}

export default AddProjectStepTwo