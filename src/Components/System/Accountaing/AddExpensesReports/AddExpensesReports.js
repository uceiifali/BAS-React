import React, { useContext } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import style from './AddExpensesReports.module.css';

import { useParams } from 'react-router-dom';
import Input from '../../../FormHandler/Input';
import Select from '../../../FormHandler/Select';
import { useState } from 'react';
import DatePicker from "react-datepicker"
import SaveButton from '../../../SaveButton';
import { addAccountType } from '../../../../Context/AddAccountaing';

const AddExpensesReports = () => {
    const { accountaingType, setAccountaingType, openAddAccountant, setOpenAddAccountant } = useContext(addAccountType)
    // define variabules

    const [deliverDate, setDeliverDate] = useState('')
    const [createdDate, setCreatedDate] = useState('')
    const [attachment, setAttachment] = useState(null)
    const [openAddAttachemnt, setOpenAddAttachemnt] = useState(false)
    const [projectsNotes, setProjectsNotes] = useState(false)
    // const 


    const clauseOptions = [{
        label: "اساسيه",
        value: " اساسيه"
    }, {
        label: "ايجارات",
        value: " ايجارات"
    }]


    const handleAddExpenses = () => {
        setOpenAddAccountant(false)
    }


    return (
        <div className={`AddExpensesReports p-3`}>
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

















            <p className='text-xl  my-3 golden'>إضافة  مصاريف جديدة</p>
            <fieldset className={`${style.description} mt-3`}>
                <legend className='text-center'>الوصف</legend>
                <div className='row p-3'>
                    <div className='col-md-6 mb-4'>
                        <Select OptionbackgroundColor={"#2B2B40"} options={clauseOptions} placeholder="اختار البند" label="1- البند" />

                    </div>
                    <div className='col-md-12 mb-4'>
                        <Form.Group>
                            <Form.Label>

                                الوصف
                            </Form.Label>
                            <textarea className='form-control' placeholder='اكتب الوصف المرفق ...' rows={5} cols={30} />


                        </Form.Group>

                    </div>
                    <div className='col-md-8   mb-4'>

                        <Form.Group className='d-flex flex-column'>
                            <Form.Label>
                                تاريخ الاستحقاق
                            </Form.Label>
                            <DatePicker

                                selected={deliverDate}
                                placeholderText=" ادخل تاريخ الرخصة "
                                onChange={date => setDeliverDate(date)}
                                dateFormat="dd-MM-yyyy"
                                className='w-100 form-control'
                            />

                        </Form.Group>


                    </div>
                    <div className='col-md-4 mb-4'>
                        <Input placeholder={"ادخل المبلغ"} label={"المبلغ"} />

                    </div>
                    <div className='col-md-6 mb-4'>
                        <Input className='w-100' placeholder={"1000"} label={"اجمالى المبلغ"} />

                    </div>
                    <div className='col-md-6 mb-4'>
                        <Input placeholder={""} label={"  اجمالى المبلغ كتابة"} />

                    </div>

                </div>

            </fieldset>
            <fieldset className={`${style.Attachment} mt-4 p-2`}>
                <legend className='text-center'>الملف المرفق    </legend>

                <div className={`addFileShape pointer my-1 bg-[#2B2B40] p-0  d-flex flex-column align-items-center justfiy-content-center`}>
                    <div className={` pointer bg-[#2B2B40]   d-flex flex-column align-items-center justfiy-content-center`}>

                        <div onClick={() => { setOpenAddAttachemnt(true) }}>

                            <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M1 8H8M8 8H15M8 8V15M8 8V1" stroke="#EFAA20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="text-sm mx-auto text-white">اضافة جديدة</p>
                        </div>
                    </div>

                </div>
            </fieldset>
            <div className='d-flex my-5 w-90  justify-content-end'>
                <Button
                    onClick={() => {
                        handleAddExpenses()

                    }}

                    className='sumbmitAddUpdateUser'>حفظ</Button>
            </div>

        </div>
    )
}

export default AddExpensesReports