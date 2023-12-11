import React, { useContext, useState } from 'react'
import { Modal } from 'react-bootstrap'

import { Checkbox } from '@mui/material'

import DatePicker from "react-datepicker"
import "./AddHoliday.css"
import AddAttachment from '../../AddAttachment'

import Select from '../../../FormHandler/Select'
import SaveButton from '../../../SaveButton'
import { AddHrType } from '../../../../Context/AddHr'
import Input from '../../../FormHandler/Input'



const AddHoliday = () => {
    const { openHr, setOpenHr, HrType, setHrType } = useContext(AddHrType)
    // define inputs

    const [attachment, setAttachment] = useState('')
    const [startVaction, setStartVaction] = useState()
    const [endVaction, setEndVaction] = useState()
    const [vactionType, setVactionType] = useState('')
    const allUsers = [{
        value: "اسلام  ايهاب",
        label: "اسلام  ايهاب"
    }, {
        value: "حبيب محمد",
        label: "حبيب محمد"
    },


    ]







    const VacationType = [{
        value: "اجازة مرضى",
        label: "اجازة مرضى"
    },
    {
        value: " اجازة عارضة",
        label: " اجازة عارضة"
    },
    {
        value: "  اجازة حج",
        label: "  اجازة حج"
    },





    ]


    const VacationStatus = [{
        value: "مقبولة",
        label: "مقبولة "
    },
    {
        value: " مرفوضة ",
        label: "  مرفوضة"
    },

    {
        value: "معلقة ",
        label: "معلقة"
    },







    ]


    const handleAddHoliday = () => {
        //after adding holiday
        setOpenHr(false)
    }





    return (
        <div>
            {openHr &&
                <Modal
                    className='systemModal addHoliday   '
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    onHide={() => setOpenHr(false)}
                    show={openHr}
                >


                    <Modal.Body className=' p-2'>

                        <div className='edit-header p-1'>


                            <p className='text-white'>طلب اجازة</p>
                        </div>

                        <fieldset className='displayFieldSet my-2    p-3 w-90 mx-auto'>
                            <legend className='text-center text-white'>مخصصة الى  </legend>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <Select label="اسم الموظف" OptionbackgroundColor={"#414162"} options={allUsers} />



                                </div>

                            </div>

                        </fieldset>
                        <fieldset className='displayFieldSet my-2    p-3 w-90 mx-auto'>
                            <legend className='text-center text-white'>
                                تفاصيل الاجازاة  </legend>
                            <div className='row'>
                                <div className='col-md-6 mb-4'>
                                    <Select label="نوع الاجازة" placeholder="اختار نوع الاجازة" OptionbackgroundColor={"#414162"} options={VacationType} />
                                </div>


                                <div className='col-md-6  mb-4'>

                                    <Select label=" حالة الاجازة" placeholder="اختار حالة الاجازة" OptionbackgroundColor={"#414162"} options={VacationStatus} />

                                </div>
                                <div className='col-md-4  mb-4'>
                                    <Input placeholder="اكتب مدة الاجازة" width='100%' height='100%' className='w-100 h-100' />
                                </div>
                                <div className='col-md-4   mb-4'>
                                    <DatePicker

                                        selected={startVaction}
                                        placeholderText="من تاريخ"
                                        onChange={date => setStartVaction(date)}
                                        dateFormat="dd-MM-yyyy"
                                        className='w-100 form-control'
                                    />


                                </div>
                                <div className='col-md-4   mb-4'>
                                    <DatePicker

                                        selected={endVaction}
                                        placeholderText="الي تاريخ"
                                        onChange={date => setEndVaction(date)}
                                        dateFormat="dd-MM-yyyy"
                                        className='w-100 form-control'
                                    />
                                </div>
                                <div className='col-md-4 d-flex gap-2 align-items-center   mb-4'>
                                    <input type='radio' onChange={(e) => { setVactionType(e.target.value) }} multiple={false} className='text-white ' value={'اجازة مستحقة'} name='vactionType' />
                                    <p className='text-white'>اجازة مستحقة</p>
                                </div>
                                <div className='col-md-4 d-flex gap-2 align-items-center    mb-4'>
                                    <input type='radio' onChange={(e) => { setVactionType(e.target.value) }} multiple={false} className='text-white  ' value={'اجازة بدون راتب '} name='vactionType' />
                                    <p className='text-white'>اجازة بدون راتب </p>
                                </div>
                                <div className='col-md-4 d-flex gap-2 align-items-center   mb-4'>
                                    <input type='radio' onChange={(e) => { setVactionType(e.target.value) }} multiple={false} className='text-white ' value={'اخري'} name='vactionType' />
                                    <p className='text-white'> اخرى </p>
                                </div>

                            </div>

                        </fieldset>
                        <fieldset className='displayFieldSet my-2    p-3 w-90 mx-auto'>
                            <legend className='text-center text-white'>    موجة الى  </legend>
                            <div className='row'>
                                <div className='col-md-8 mb-4'>
                                    <Select label="تعتمد من " OptionbackgroundColor={"#414162"} options={allUsers} />

                                </div>


                            </div>

                        </fieldset>
                        <fieldset className='displayFieldSet my-2    p-3 w-90 mx-auto'>

                            <div className='row'>
                                <div className='col-md-12 mb-4'>

                                    <AddAttachment  attachment={attachment} setAttachment={setAttachment} />

                                </div>


                            </div>

                        </fieldset>



                        <div className='my-3' onClick={() => { handleAddHoliday() }}>

                            <SaveButton />
                        </div>


                    </Modal.Body>


                </Modal >
            }

        </div>
    )
}

export default AddHoliday