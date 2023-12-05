import React, { useContext, useMemo, useState } from 'react'
import "./AddFinancialClaims.css"
import Input from '../../../FormHandler/Input'
import { UseInput } from '../../../../hooks'
import { Button, Form, Modal } from 'react-bootstrap'
import SaveButton from '../../../SaveButton'
import { addAccountType } from '../../../../Context/AddAccountaing'

const AddFinancialClaims = () => {
    // handle show search  project 
    const [showProject, setShowProject] = useState(false)


    // handle Inputs
    const projectName = UseInput("", "", true)
    const projectDescription = UseInput("", "", true)
    const projectQuantity = UseInput("", "", true)
    const projectValue = UseInput("", "", true)
    const discountValue = UseInput("", "", true)
    const vat = UseInput("", "", true)
    const amountVat = UseInput("", "", true)
    const totalAmount = UseInput("", "", true)
    const finalAmount = UseInput("", "", true)
    const [attachment, setAttachment] = useState(null)
    const [openAddAttachemnt, setOpenAddAttachemnt] = useState(false)
    const [projectsNotes, setProjectsNotes] = useState(false)
    // handle 
    const { accountaingType, setAccountaingType, openAddAccountant, setOpenAddAccountant } = useContext(addAccountType)
    // handle addFinancalClaims
    const handleAddFinancialClaim = () => {

    }


    useMemo(() => {
        if (projectName.value != "") {
            setShowProject(true)
        } else {
            setShowProject(false)

        }
    }, [projectName.value])



    return (
        <div className='AddFinancialClaims p-3'>
            <p className='text-xl my-3 golden'>إضافة مطالبة جديدة</p>
            <Input {...projectName.bind} label={"اسم المشروع"} placeholder="ابحث عن اسم المشروع" />

            {openAddAttachemnt &&
                <Modal
                    className='submitSystemPoper'
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    onHide={() => setOpenAddAttachemnt(false)}
                    show={openAddAttachemnt}
                >

                    <Modal.Body className='d-flex align-items-center'>

                        <img src={`${process.env.PUBLIC_URL}/chooseFile.png`} className='my-3' alt='choose file' />
                        <Form.Group className={``} controlId="formBasicImage">

                            <Form.Control
                                type="file"
                                placeholder="ادخل اسم الملف  "
                                name="imageFile"
                                className={`chooseFile text-white`}
                                onChange={(e) => setAttachment(e.currentTarget.files[0].name)}
                            />
                        </Form.Group>
                        <div className='my-3' onClick={() => { setOpenAddAttachemnt(false) }}>
                            <SaveButton />
                        </div>


                    </Modal.Body>


                </Modal >
            }













            {
                showProject &&
                <>
                    <fieldset className='showProjectBorder w-90 mx-auto pb-3 ' >
                        <legend className='text-center'> بيانات العميل</legend>
                        <div className='d-flex w-90 m-auto justify-content-between'>
                            <p className='projectdetails text-white w-50'> اسم المشروع :
                                <span className='main-text'>  BSA
                                </span>
                            </p>
                            <p className='projectdetails text-white w-50'> اسم العميل:
                                <span className='main-text'>    اسلام ايهاب
                                </span>
                            </p>

                        </div>
                        <div className='d-flex w-90 m-auto justify-content-between'>
                            <p className='projectdetails text-white w-50'>   نوع المشروع :
                                <span className='main-text'>   التصميم
                                </span>
                            </p>

                            <p className='projectdetails text-white w-50 '>    رقم الطلب :
                                <span className='main-text'>     : 0003
                                </span>
                            </p>

                        </div>
                        <div className='d-flex w-90 m-auto justify-content-between'>
                            <p className='projectdetails text-white w-50'>   البريد الاكترونى :
                                <span className='main-text'>
                                </span>
                            </p>

                            <p className='projectdetails text-white w-50 '>   رقم الجوال:
                                <span className='main-text'>
                                </span>
                            </p>

                        </div>

                    </fieldset >
                    <fieldset className='showProjectBorder w-90 mx-auto pb-3 ' >
                        <legend className='text-center'> تعريفات </legend>
                        <div className='d-flex w-90 m-auto justify-content-between'>
                            <p className='projectdetails text-white w-100'> التعريف الضريبى:
                                <span className='main-text'>  مكتب بدر عبد المحسن بن سليمان لاستشارات الهندسية
                                </span>
                            </p>
                            <p className='projectdetails text-white w-50'>  اسم العميل:
                                <span className='main-text'>  اسلام ايهاب
                                </span>
                            </p>

                        </div>
                        <div className='d-flex w-90 m-auto justify-content-between'>
                            <p className='projectdetails text-white w-50'>    الرقم الضريبي  :
                                <span className='main-text'>   300195565100003
                                </span>
                            </p>

                            <p className='projectdetails text-white w-50 '>     الكود  :
                                <span className='main-text'>     : 0003
                                </span>
                            </p>

                        </div>
                        <div className='d-flex w-90 m-auto justify-content-between'>
                            <p className='projectdetails text-white w-50'>   العنوان :

                                <span className='main-text' >الرياض حي النخيل
                                </span>
                            </p>

                            <p className='projectdetails text-white w-50 '>
                                <span className='main-text'>
                                </span>
                            </p>

                        </div>

                    </fieldset >
                    <fieldset className='showProjectBorder w-90 mx-auto pb-3 ' >
                        <legend className='text-center'> تعريفات العميل </legend>
                        <div className='d-flex w-90 m-auto justify-content-between'>
                            <p className='projectdetails text-white w-100'> تاريخ الفاتورة :
                                <span className='main-text'>2023-10-20
                                </span>
                            </p>


                        </div>
                        <div className='d-flex w-90 m-auto justify-content-between'>
                            <p className='projectdetails text-white w-50'>    الرقم الضريبي  :
                                <span className='main-text'>   300195565100003
                                </span>
                            </p>

                            <p className='projectdetails text-white w-50 '>     السادة  :
                                <span className='main-text'>     :  ..................................................................
                                </span>
                            </p>

                        </div>
                        <div className='d-flex w-90 m-auto justify-content-between'>
                            <p className='projectdetails text-white w-50'>    البريد الالكتروني :

                                <span className='main-text' > Habeebnasr4@gmail.com
                                </span>
                            </p>

                            <p className='projectdetails text-white w-50 '>
                                <span className='main-text'>
                                </span>
                            </p>

                        </div>

                    </fieldset >
                    <fieldset className='showProjectBorder w-90 mx-auto pb-3 ' >
                        <legend className='text-center'>  معلومات الدفع      </legend>
                        <div className='d-flex w-90 m-auto justify-content-between'>
                            <p className='projectdetails text-white w-100'>  المبلغ الاجمالي :
                                <span className='main-text'>1000 ريال
                                </span>
                            </p>


                        </div>
                        <div className='d-flex w-90 m-auto justify-content-between'>
                            <p className='projectdetails text-white w-50'> عدد الدفعات:
                                <span className='main-text'>   2
                                </span>
                            </p>

                            <p className='projectdetails text-white w-50 '>     المبلغ المتبقي  :
                                <span className='main-text'>     :  500 ريال
                                </span>
                            </p>

                        </div>
                        <div className='d-flex w-90 m-auto justify-content-between'>
                            <p className='projectdetails text-white w-50'>     عدد الدفعات المتبقي :

                                <span className='main-text' > 1
                                </span>
                            </p>

                            <p className='projectdetails text-white w-50 '>
                                <span className='main-text'>
                                </span>
                            </p>

                        </div>

                    </fieldset >

                    <fieldset className='showProjectBorder w-90 mx-auto pb-3 ' >
                        <legend className='text-center'>   المرفقات      </legend>
                        <div className='d-flex w-90 m-auto justify-content-between'>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className='w-100 form-container' >

                                        <Input {...projectDescription.bind} placeholder="اكتب الوصف" className='w-100' label={"1-الوصف"} />
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='w-100 form-container mb-3' >

                                        <Input {...projectQuantity.bind} placeholder=" الكميه" className='w-100' label={"الكمية"} />
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='w-100 form-container mb-3' >

                                        <Input  {...projectValue.bind} placeholder=" القيمة" className='w-100' label={"القيمة"} />
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='w-100 form-container mb-3' >

                                        <Input {...vat.bind} placeholder="  ق.م" className='w-100' label={"ادخل ال ق.م"} />
                                    </div>

                                </div>
                                <div className='col-md-4'>
                                    <div className='w-100 form-container mb-3' >

                                        <Input {...amountVat.bind} placeholder=" ض .ق.م" className='w-100' label={"ادخل ال ض.ق.م"} />
                                    </div>

                                </div>
                                <div className='col-md-4'>
                                    <div className='w-100 form-container mb-3' >

                                        <Input  {...discountValue.bind} placeholder=" الخصم" className='w-100' label={"ادخل قيمة الخصم"} />
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='w-100 form-container mb-3' >

                                        <Input  {...totalAmount.bind} placeholder=" اجمالي المبلغ" className='w-100' label={" اجمالي المبلغ "} />
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className='w-100 form-container mb-3' >

                                        <Input  {...finalAmount.bind} placeholder=" اجمالي المبلغ كتابة" className='w-100' label={" اجمالي المبلغ كتابة"} />
                                    </div>
                                </div>

                            </div>




                        </div>


                    </fieldset >
                    <fieldset className='showProjectBorder w-90 mx-auto p-2 ' >
                        <legend className='text-center'>   الملف المرفق     </legend>


                        <div className={`addFileShape pointer my-3 bg-[#2B2B40] p-0  d-flex flex-column align-items-center justfiy-content-center`}>
                            <div className={` pointer bg-[#2B2B40]   d-flex flex-column align-items-center justfiy-content-center`}>

                                <div onClick={() => { setOpenAddAttachemnt(true) }}>

                                    <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M1 8H8M8 8H15M8 8V15M8 8V1" stroke="#EFAA20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p className="text-sm mx-auto text-white">اضافة جديدة</p>
                                </div>
                            </div>

                        </div>












                    </fieldset >
                    <div className='d-flex my-5 w-90  justify-content-end'>
                        <Button
                            onClick={() => {
                                setOpenAddAccountant(false)
                                handleAddFinancialClaim()

                            }}

                            className='sumbmitAddUpdateUser'>حفظ</Button>
                    </div>
                </>
            }






        </div>
    )
}

export default AddFinancialClaims