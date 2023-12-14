import React, { useEffect, useState } from 'react'


import DatePicker from 'react-datepicker'
import { Button, Dropdown, Form } from 'react-bootstrap'
import { PhoneInput } from 'react-international-phone'
import Select from '../../../Components/FormHandler/Select'

import KSACites from '../../../Components/KSACItes'

import { Link } from 'react-router-dom'
import "./SignUP.css"
import SubmitButton from '../../../Components/Client/Dashboard/SubmitButton/SubmitButton'
import Input from '../../../Components/FormHandler/Input'
import Image from '../../../Components/Image'
 const SignUP = () => {



    const [birthDate, setBirthDate] = useState(null)
    const [phone, setPhone] = useState("")
    const gender = [
        {
            label: "ذكر",
            value: "ذكر"
        },
        {
            label: "انثي",
            value: "انثي"
        }
    ]




 
    return <div className='signUp-container row m-0  p-0  w-100 '>
        <div className='col-md-6 form-container  '>
            <div className='item position-relative'>
            <Dropdown className='position-absolute  end-10 top-0 pointer'>
                    <Dropdown.Toggle style={{ backgroundColor:   "unset !important", borderColor: "unset" }} className='d-flex  check-lang align-items-center' id="dropdown-basic">
                        <div className=' saudiFlagicon-container px-2 align-items-sm-center   '>
                            <Image src='../saudiFlagicon.png' alt='saudiFlagicon logo' width={40} height={40} />

                        </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item className='d-flex justify-between mx-3 '>
                            <Image src="../saudi.png" className='ms-3 rounded' alt="saudi flag" width={30} height={20} />
                            <span >العربية (KSA)  </span>
                        </Dropdown.Item>
                        <Dropdown.Item className='d-flex justify-between mx-3 '>
                            <Image src="../usa.png" className='ms-3 rounded' alt="USA flag" width={30} height={20} />
                            <span>English (USA)</span>
                        </Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>
                <div className='mt-5 d-flex logo-container  justify-content-center'>
                    <Link  to="/"> <Image src='../logo.jpg' alt=' logo' width={350} height={180} />
                    </Link>
                </div>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                    <h2 className='fs-2'>مرحباً بك</h2>
                    <p className='main-text'>حساب جديد</p>
                </div>
                <Form className='px-3   ' >
                    <div className='row'>
                        <div className='col-md-6 mb-4 '>
                            <Input label={" الاسم الأول "} placeholder="ادخل الاسم الأول" mandatory />
                        </div>
                        <div className='col-md-6 mb-4'>
                            <Input label={" الاسم الاخير"} placeholder="اخل الاسم الأخير" mandatory />
                        </div>
                        <div className='col-md-6 mb-4'>
                            <Input label={"اسم المستخدم"} placeholder="ادخل اسم المستخدم" mandatory />
                        </div>
                        <div className='col-md-6  d-flex align-items-end  mb-4'>
                            <Form.Group className='licenseDate-container' controlId="licenseDate">
                                <Form.Label className="d-flex gap-2 align-items-center">
                                    تاريخ الميلاد
                                </Form.Label>
                                <DatePicker


                                    placeholderText=" ادخل تاريخ ميلادك "
                                    dateFormat="dd-MM-yyyy"
                                    className='w-100  form-control'
                                    selected={birthDate}
                                    onChange={birthDate => { setBirthDate(birthDate) }}
                                />
                            </Form.Group>

                        </div>
                        <div className='col-md-6 mb-4'>
                            <Input label={"البريد الالكترونى"} placeholder="example@gmail.com" mandatory />
                        </div>
                        <div className='col-md-6 mb-4'>
                            <Input label={"رقم الهوية"} placeholder="ادخل رقم الهوية" mandatory />
                        </div>
                        <div className='col-md-6 mb-4'>
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
                        <div className='col-md-6 mb-4'>
                            <Input label={"تاريخ انتهاء الهوية"} placeholder="ادخل تاريخ انتهاء الهوية" mandatory />
                        </div>
                        <div className='col-md-6 mb-4'>
                            <Select options={gender} label={" النوع"} placeholder=" ذكر \انثي" mandatory />
                        </div>
                        <div className='col-md-6 mb-4'>
                            <Select options={KSACites} label={" المدينة"} placeholder="اختار المدينة" mandatory />
                        </div>
                        <div className='col-md-6 mb-4'>
                            <Input label={" كلمة المرور"} placeholder="ادخل  كلمة المرور" mandatory />
                        </div>
                        <div className='col-md-6 mb-4'>
                            <Input label={"الحى"} placeholder=" اختار الحى" mandatory />
                        </div>
                        <div className='col-md-6 mb-4'>
                            <Input label={"تأكيد كلمة المرور"} placeholder="  اعد كتابة كلمة المرور" mandatory />
                        </div>
                        <div className='col-md-6 mb-4'>
                            <Input label={" رقم الطلب  "} placeholder="ادخل رقم الطلب" mandatory />
                        </div>

                    </div>
                    <div className='d-flex justify-content-center'>
                        <SubmitButton  text={"إنشاء حساب جديد"} />
                    </div>
                    <div className='d-flex justify-content-center mt-2   '>   <p > لديك حساب بالفعل ؟  <span style={{color:"#6A0411"}}><Link to="/Dashboard/SignIn">سجل الان</Link > </span> </p></div>
                </Form>


            </div>
        </div>
        <div className='col-md-6 gif-bg p-0 m-0      '>
            <div className='item bg-initial-video position-relative h-100 p-0 m-0 w-100'>

                <div className='layer position-absolute top-0 bottom-0 end-0 start-0 d-flex justify-content-center align-items-center '>
                    <Image src='../movmentlogo.gif' alt='movment logo' width={400} height={250} />
                </div>
            </div>
        </div>


    </div>

}
export default SignUP