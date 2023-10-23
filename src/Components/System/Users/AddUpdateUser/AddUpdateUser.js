import React, { useState } from 'react'
import "./index.css"
import Input from '../../../FormHandler/Input'
import { UseInput, UseSelect } from '../../../../hooks'
import Select from '../../../FormHandler/Select'
import { Button, Form } from 'react-bootstrap'
import DatePicker from "react-datepicker"

const AddUpdateUser = ({id = null}) => {
    const firstName = UseInput("", "text", true)
    const lastName = UseInput("", "text", true)
    const userName = UseInput("", "text", true)
    const password = UseInput("", "password_optional", true)
    const rePassword = UseInput("", "", true
  
    )
    const gender = UseSelect({
        value: "ذكر",
        label: "ذكر"
    }, "Select", true)
    const genderOptions = [
        {
            value: "ذكر",
            label: "ذكر"
        },
        {
            value: "انثي",
            label: "انثي"
        }
    ]
    const countryOption = [
        {
            value: "السعودية",
            label: "السعودية"
        },
        {
            value: "مصر",
            label: "مصر"
        }
    ]
    const departmentOption = [
        {
            value: "مدني",
            label: "مدني"
        },
        {
            value: " معماري",
            label: "معماري"
        },
        {
            value: "كهربا",
            label: "كهربا"
        },
        {
            value: "ميكانيكا",
            label: "ميكانيكا"
        }, {
            value: "برمجة",
            label: "برمجة"
        },

    ]
    const roleOption = [
        {
            value: "مدير",
            label: "مدير"
        },
        {
            value: "مدير مكتب",
            label: "مدير مكتب"
        },
        {
            value: "مدير قسم",
            label: "مدير قسم"
        },
        {
            value: "موظف",
            label: "موظف"
        }, {
            value: "محاسب",
            label: "محاسب"
        },

    ]
    const email = UseInput("", "email", true)
    const phone = UseInput("", "phone", true)
    const [startWork, setStartWork] = useState(null)
    const country = UseSelect(
        {
            value: "السعودية",
            label: "السعودية"
        }, "Select",)
    const city = UseInput("", "text", true)
    const area = UseInput("", "text", true)
    const department = UseSelect({
        value: "مدني",
        label: "مدني"
    }, "Select")
    const role = UseSelect({
        value: "موظف",
        label: "موظف"
    }, "Select")
    const instrumentNumber = UseInput("", "number", true)
    const [instrumentDate, setInstrumentDate] = useState(null)

    const [birthDate, setBirthDate] = useState(null)

  console.log(id)


    const handleAddUpdateUser = (e) => {
        e.preventDefault()
        if (id) {
            ///updateUSer 

        }
        else {
            //Adduser
        }
    }

    return (
        <div className='addUpdateUser P-4'>
            {!id ? <h2 className='golden addupdateheader mt-3  mx-5 mb-1 '>إضافة جديدة</h2> :<h2 className='golden addupdateheader mt-3    mx-5 mb-1   '> تعديل المستخدم</h2> }
            {!id ? <p className='text-center'> اضافة مستخدم جديد</p > : <p className='text-center'> تعديل المستخدم  </p >}

            <Form onSubmit={handleAddUpdateUser}>
                <div className='row golden-square py-2 w-75 m-auto'>
                    <div className='col-md-4 col-sm-6  d-flex justify-content-center  mb-2'>
                        <Input label="الاسم الاول" {...firstName.bind} width='190px' height='37px' placeholder="ادخل الاسم الاول" />
                    </div>
                    <div className='col-md-4 col-sm-6 mb-2 d-flex justify-content-center'>
                        <Input label="الاسم  الاخير" {...lastName.bind} width='190px' height='37px' placeholder="ادخل الاسم الاخير" />
                    </div>
                    <div className='col-md-4 col-sm-6 mb-2 d-flex justify-content-center'>
                        <Input label="الاسم  المستخدم " {...userName.bind} width='190px' height='37px' placeholder="ادخل اسم المستخدم" />
                    </div>
                    <div className='col-md-4 col-sm-6 mb-2 d-flex justify-content-center'>
                        <Select label="النوع" options={genderOptions} {...gender.bind} placeholder="النوع" />
                    </div>
                    <div className='col-md-4 col-sm-6 mb-2 d-flex justify-content-center'>
                        <Input label="البريد الالكتروني"  {...email.bind} placeholder="ادخل البريد الالكتروني" />
                    </div>
                    <div className='col-md-4 col-sm-6 mb-2 d-flex justify-content-center'>
                        <Input label=" رقم الجوال"  {...phone.bind} placeholder="ادخل رقم الجوال" />
                    </div>
                    <div className='col-md-4 col-sm-6 mb-2 d-flex justify-content-center'>
                        <Select label=" البلد "  {...country.bind} options={countryOption} placeholder="  ادخل البلد" />
                    </div>
                    <div className='col-md-4 col-sm-6 mb-2 d-flex justify-content-center'>
                        <Input label=" المدينه "  {...city.bind} placeholder="  ادخل المدينه" />
                    </div>
                    <div className='col-md-4 col-sm-6 mb-2 d-flex justify-content-center'>
                        <Input label="الحي "  {...area.bind} placeholder="  ادخل الحي" />
                    </div>
                    <div className='col-md-4 col-sm-6 mb-2 d-flex justify-content-center'>
                        <Form.Group className='licenseDate-container' controlId="licenseDate">
                            <Form.Label className="d-flex gap-2 align-items-center">
                                تاريخ الميلاد
                            </Form.Label>

                            <DatePicker

                                selected={birthDate}
                                placeholderText=" ادخل تاريخ الميلاد "
                                onChange={date => setBirthDate(date)}
                                dateFormat="dd-MM-yyyy"
                                className='w-100 form-control'
                            />





                        </Form.Group>
                    </div>
                    <div className='col-md-4 col-sm-6 mb-2 d-flex justify-content-center'>
                        <Select label=" القسم "  {...department.bind} options={departmentOption} placeholder="  ادخل القسم" />
                    </div>
                    <div className='col-md-4 col-sm-6 mb-2 d-flex justify-content-center'>
                        <Select label=" الصلاحية "  {...role.bind} options={roleOption} placeholder="  اختار الصلاحية" />
                    </div>
                    <div className='col-md-4 col-sm-6 mb-2 d-flex justify-content-center'>
                        <Form.Group className='licenseDate-container' controlId="licenseDate">
                            <Form.Label className="d-flex gap-2 align-items-center">
                                بدا العمل في
                            </Form.Label>

                            <DatePicker

                                selected={startWork}
                                placeholderText=" اختار موعد بدا العمل  "
                                onChange={date => setStartWork(date)}
                                dateFormat="dd-MM-yyyy"
                                className='w-100 form-control'
                            />





                        </Form.Group>
                    </div>
                    <div className='col-md-4 col-sm-6 mb-2 d-flex justify-content-center'>
                        <Input label="رقم الهوية " {...instrumentNumber.bind} placeholder="  ادخل رقم الهوية" />
                    </div>
                    <div className='col-md-4 col-sm-6 mb-2 d-flex justify-content-center'>
                        <Form.Group className='licenseDate-container' controlId="licenseDate">
                            <Form.Label className="d-flex gap-2 align-items-center">
                                تاريخ الهويه
                            </Form.Label>

                            <DatePicker

                                selected={instrumentDate}
                                placeholderText=" ادخل تاريخ الهوية  "
                                onChange={date => setInstrumentDate(date)}
                                dateFormat="dd-MM-yyyy"
                                className='w-100 form-control'
                            />





                        </Form.Group>
                    </div>
                </div>
                <div className='golden-square  w-75 pt-2 pb-2 px-4   mt-3 mx-auto' >
                    <p className='text-center'>كلمة المرور</p>
                    <div className='row '>
                        <div className='col-md-6 '>
                            <Input label={"كلمه المرور"} type='password' {...password.bind} placeholder='ادخل كلمة المرور' />

                        </div>
                        <div className='col-md-6 '>
                            <Input label={" تاكيد كلمة المرور"} type='password'   {...rePassword.bind} placeholder="اعد ادخال كلمة المرور" />

                        </div>
                    </div>
                </div>
                <div className='d-flex w-75 mx-auto mt-3 justify-content-end'>
                    <Button type='submit' className='sumbmitAddUpdateUser'>حفظ</Button>
                </div>
            </Form>

        </div>
    )
}

export default AddUpdateUser