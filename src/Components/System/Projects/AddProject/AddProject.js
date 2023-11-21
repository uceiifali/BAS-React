import React from 'react'
import styles from "./AddProject.module.css"

import UseInput from '../../../../hooks/UseInput'
import { Button, Form, Modal } from 'react-bootstrap'
import { useState } from 'react'
import SaveButton from '../../../SaveButton'
import Input from '../../../FormHandler/Input'
import "./AddProject.css"
import Select from '../../../FormHandler/Select'
import { useMemo } from 'react'

const AddProject = () => {
    const projectName = UseInput("", "", true)
    const [attachment, setAttachment] = useState(null)
    const [openAddAttachemnt, setOpenAddAttachemnt] = useState(false)
    const [projectsNotes, setProjectsNotes] = useState(false)





    // initalNumber

    // payment details

    let totalAmount = UseInput('', "positiveNumber", true)
    let paymentsNumber = UseInput('', "positiveNumber", true)
    let discountAmount = UseInput('', "", true)
    let initialNumber = UseInput('', "positiveNumber", true)
    let [remainingAmount, setRemainingAmount] = useState(0)
    let [paymentVaildation, setPaymentVaildation] = useState(false)
    let [showNextPayment, setShowNextPayment] = useState(false)
    let handleStartPayment = (e) => {
        e.preventDefault()
        let updatedNumber = totalAmount.value - (totalAmount.value * ((discountAmount.value || 0) / 100))
        updatedNumber -= initialNumber.value
        setRemainingAmount(updatedNumber)
        console.log(remainingAmount)
        setShowNextPayment(true)


    }
    // chcking the values is here 
    useMemo((

    ) => {

        if (totalAmount.isValid && totalAmount.value && paymentsNumber.isValid && paymentsNumber.value && initialNumber.isValid && initialNumber.value) {
            setPaymentVaildation(true)
            console.log(true);

        } else {


            setPaymentVaildation(false)
            console.log(false);


        }
    }, [totalAmount.isValid && totalAmount.value && paymentsNumber.isValid && paymentsNumber.value && initialNumber.isValid && initialNumber.value])


    const discountOptions = [
        {
            label: "مع العقد",
            value: "مع العقد"
        }
    ]







    const handleaddUpdateProject = (e) => {
        e.preventDefault()
    }









    return (






        <div className={`bg-[#1E1E2D] addproject ${styles.AddProjectComponent}  p-5`}>
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
                        <Form.Group className={`${styles.inputbg}`} controlId="formBasicImage">

                            <Form.Control
                                type="file"
                                placeholder="ادخل اسم الملف  "
                                name="imageFile"
                                className={`${styles.chooseFile} text-white`}
                                onChange={(e) => setAttachment(e.currentTarget.files[0])}
                            />
                        </Form.Group>
                        <div className='my-3' onClick={() => { setOpenAddAttachemnt(false) }}>
                            <SaveButton />
                        </div>


                    </Modal.Body>


                </Modal >
            }




            <h2 className='golden text-xl'>إضافة جديدة</h2>
            <fieldset className={`${styles.fieldBorder} p-3`}>
                <legend className='text-center'>بحث عن الطلب</legend>
                <Input {...projectName.bind} label="البحث" placeholder='ابحث عن ....' className={`${styles.searchOrder}  p-2`} />





            </fieldset>
            {projectName.value && <div className='addingDetails mt-4 '>
                <fieldset className={`${styles.fieldBorder} p-3`}>
                    <legend className='text-center'> معلومات عامة </legend>
                    <div className='row'>
                        <div className='col-md-6 mb-3'>
                            <p className='text-white'>

                                اسم المالك :<span className='main-text'> BSA</span>
                            </p>
                        </div>
                        <div className='col-md-6 mb-3'>
                            <p className='text-white'>

                                نوع المشروع :  <span className='main-text'> الاشراف على التنفيذ</span>
                            </p>
                        </div>
                        <div className='col-md-6 mb-3'>
                            <p className='text-white'>

                                نوع العميل :  <span className='main-text'>  فردي </span>
                            </p>
                        </div>
                    </div>

                </fieldset>

                <fieldset className={`${styles.fieldBorder} p-3 mt-4 `}>
                    <legend className='text-center'>  المرفقات </legend>
                    <div className='row'>
                        <div className={`${styles.addFileShape} pointer bg-[#2B2B40] p-0  d-flex flex-column align-items-center justfiy-content-center`}>

                            <div onClick={() => { setOpenAddAttachemnt(true) }}>
                                <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M1 8H8M8 8H15M8 8V15M8 8V1" stroke="#EFAA20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className="text-sm mx-auto text-white">اضافة جديدة</p>
                            </div>
                        </div>
                    </div>

                </fieldset>

                <fieldset className={`${styles.fieldBorder} p-3 mt-4 `}>
                    <legend className='text-center'>  ارفاق الملاحظات </legend>

                    <p className='text-white'>ملاحظات المشروع</p>
                    <textarea onChange={(e) => { setProjectsNotes(e.target.value) }} className='form-control mt-3' placeholder='اكتب ملاحظات المشروع' rows={5} />
                </fieldset>
                <fieldset className={`${styles.fieldBorder} p-3 mt-4 `}>
                    <legend className='text-center'>  معلومات الدفع  </legend>
                    <Form onSubmit={handleStartPayment}>
                        <div className='row'>



                            <div className='col-md-4 mb-4'>
                                <Input {...totalAmount.bind} mandatory className={`${styles.searchOrder} w-100`} label={"المبلغ الاجمالى"} />
                            </div>
                            <div className='col-md-4 mb-4'>
                                <Input {...paymentsNumber.bind} mandatory className={`${styles.searchOrder} w-100`} label={"عدد الدفعات المتفق عليها "} />

                            </div>
                            <div className='col-md-4 mb-4'>
                                <Input {...discountAmount.bind} className={`${styles.searchOrder} w-100`} label={"قيمة الخصم "} />

                            </div>
                            <div className='col-md-4 mb-4'>
                                <Input {...initialNumber.bind} mandatory className={`${styles.searchOrder} w-100`} label={"القيمه الافتتاحية "} />

                            </div>
                            <div className='col-md-4  d-flex align-items-center  mb-4'>
                                <Button disabled={!paymentVaildation} type='submit' className='bg-[#EFAA20]  confirmPayment w-50 '>تأكيد</Button>

                            </div>


                        </div>
                    </Form>

                </fieldset>




            </div>}

        </div >
    )
}

export default AddProject