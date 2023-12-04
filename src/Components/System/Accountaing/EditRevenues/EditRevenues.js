import React, { useEffect } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import Input from '../../../FormHandler/Input'
import { UseInput, UseSelect } from '../../../../hooks'
import Select from '../../../FormHandler/Select'
import "./EditRevenues.css"
import { useState } from 'react'
import { ConfirmPopup } from 'primereact/confirmpopup'
import ConfirmPoper from '../../ConfirmPoper'
import { useParams } from 'react-router-dom'
import DatePicker from 'react-datepicker';


const EditRevenues = ({ editRevenues, setEditRevenues }) => {


    const [confirmPoper, setConfirmPoper] = useState(false)
    const { RevenueType } = useParams()
    const [openDelete, setOpenDelete] = useState(false);
    const [ConfirmDelete, setConfirmDelete] = useState(false);

    console.log(RevenueType)
    // define edit inputs

    const [invoiceDate, setInvoiceDate] = useState('')



    const handleEditRevnues = () => {
        //after making sure it is confirmed
        setEditRevenues(false)
    }









    //GetUserDataWithID


    const GetRequestDataWithID = () => {

    }

    // updateRequest
    const handleUPdateRevenues = () => {




        //after confirming the data is updated 


        setEditRevenues(false)
        setConfirmPoper(true)

    }



    useEffect(() => {

        GetRequestDataWithID()


    }, [])





    return (
        <div>

            {editRevenues && <Modal
                size="lg"
                show={editRevenues}
                onHide={() => setEditRevenues(false)}
                aria-labelledby=" example-modal-sizes-title-lg"
                className='systemModal    '
            >

                <div className='p-1 mx-auto my-3 edit-header
         w-50'>
                    {RevenueType === "FinancialClaims" ?
                        <p className='golden   text-center'>تعديل فى المطالبة المالية </p> :
                        RevenueType === "Invoice" ?
                            <p className='golden   text-center'>تعديل فى الفاتورة  </p>


                            : ""

                    }

                </div>


                <div className='mx-4'>

                    <Form className='row w-100 m-auto  '>
                        <fieldset className=' mx-auto border-golden w-90 p-3 '>
                            <legend className='text-center'> تعريفات    </legend>

                            <div className='row w-100'>
                                <div className=" col-md-6 mb-4">
                                    <p className='w-100 text-white ' >
                                        اسم المشروع :
                                        <span className='main-text p-2 '>
                                            BSA
                                        </span>

                                    </p>
                                </div>
                                <div className=" col-md-6 mb-4">
                                    <p className='w-100  text-white' >
                                        الكود :
                                        <span className='main-text p-2'>
                                            BSA
                                        </span>

                                    </p>

                                </div>
                                <div className=" col-md-12 mb-4">
                                    <Input label={" التعريف الضريبي:"} mandatory />

                                </div>

                                <div className=" col-md-6 mb-4">
                                    <Input label={" الرقم الضريبي:"} mandatory />

                                </div>

                                <div className=" col-md-6 mb-4">
                                    <Input label={"  العنوان    "} mandatory />

                                </div>

                                <div className=" col-md-6 mb-4">
                                    <Input label={"  رقم الجوال"} mandatory />
                                </div>



                            </div>


                        </fieldset>
                        <fieldset className=' my-3 mx-auto border-golden w-90 p-3 '>
                            <legend className='text-center'>    تعريفات العميل </legend>

                            <div className='row  w-100'>
                                <div className="col-md-6 mb-4">
                                    <Form.Group className='d-flex flex-column'>

                                        <Form.Label>تاريخ الفاتورة  </Form.Label>
                                        <DatePicker 

                                            selected={invoiceDate}
                                            placeholderText=" اختر تاريخ الفاتورة   "
                                            onChange={date => setInvoiceDate(date)}
                                            dateFormat="dd-MM-yyyy"
                                            className='w-100 form-control'
                                        />
                                    </Form.Group>

                                </div>
                                <div className="col-md-12 mb-4">
                                    <Input label={"  الرقم الضريبي  "} placeholder="اكتب الرقم الضريبي" mandatory />

                                </div>

                                <div className='col-md-12 mb-4'>
                                    <Input label={"  السادة"} placeholder="اكتب اسم السادة" mandatory />

                                </div>

                                <div className="col-md-6 mb-4">
                                    <Input label={"البريد الالكتروني"} placeholder="البريد الالكتروني" mandatory />

                                </div>


                                <div className="col-md-6 mb-4">
                                    <Input label={"  رقم الجوال"} placeholder="رقم الجوال" />

                                </div>

                            </div>


                        </fieldset>
                        <fieldset className='border-golden w-90 mx-auto pb-3 ' >
                            <legend className='text-center'>   المرفقات      </legend>
                            <div className='d-flex w-90 m-auto justify-content-between'>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className='w-100 form-container' >

                                            <Input placeholder="اكتب الوصف" className='w-100' label={"1-الوصف"} />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='w-100 form-container mb-3' >

                                            <Input placeholder=" الكميه" className='w-100' label={"الكمية"} />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='w-100 form-container mb-3' >

                                            <Input placeholder=" القيمة" className='w-100' label={"القيمة"} />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='w-100 form-container mb-3' >

                                            <Input placeholder=" ض .ق.م" className='w-100' label={" ال ض.ق.م"} />
                                        </div>

                                    </div>
                                    <div className='col-md-4'>
                                        <div className='w-100 form-container mb-3' >

                                            <Input placeholder=" الخصم" className='w-100' label={" قيمة الخصم"} />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='w-100 form-container mb-3' >

                                            <Input placeholder=" اجمالي المبلغ" className='w-100' label={" اجمالي المبلغ "} />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='w-100 form-container mb-3' >

                                            <Input placeholder=" اجمالي المبلغ كتابة" className='w-100' label={" اجمالي المبلغ كتابة"} />
                                        </div>
                                    </div>
                                </div>




                            </div>


                        </fieldset >
                        <fieldset className='border-golden my-3 w-90 mx-auto p-2 ' >
                            <legend className='text-center'>   الملف المرفق     </legend>

                            <div className='w-90 p-3 m-auto d-flex  gap-5'>
                                <div className='pdfbg'>

                                    <img src={process.env.PUBLIC_URL + "/icons/Pdf.png"} alt="pdf" className='pdfImage' />
                                    {RevenueType === "FinancialClaims" ?
                                        <div style={{ borderRadius: "7px" }} className='bg-[#252538] d-flex justify-content-center '>
                                            <p className='text-white mx-auto   mt-2   '> المطالبة</p>
                                        </div> : <div style={{ borderRadius: "7px" }} className='bg-[#252538] d-flex justify-content-center '>
                                            <p className='text-white mx-auto   mt-2   '> الفاتورة</p>
                                        </div>

                                    }



                                </div>


                            </div>














                        </fieldset >


                        <div className='d-flex justify-content-end w-90'>
                            <Button
                                onClick={() => {

                                    handleEditRevnues()

                                }}
                                className='sumbmitAddUpdateUser'>حفظ</Button>

                        </div>
                    </Form>



                </div>

            </Modal>}


        </div >
    )
}

export default EditRevenues