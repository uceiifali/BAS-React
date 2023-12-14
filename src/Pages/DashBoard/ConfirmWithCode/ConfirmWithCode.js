import React from 'react'

import { Button, Form } from 'react-bootstrap'
import Input from '../../../Components/FormHandler/Input'
import SubmitButton from '../../../Components/Client/Dashboard/SubmitButton/SubmitButton'
import "./ConfirmWithCode.css"
import { Link } from 'react-router-dom'
import Image from '../../../Components/Image'
const ConfirmWithCode = () => {
    return (
        <div className=' ConfirmMail  d-flex justify-content-center  flex-column align-items-center p-5'>

            <div className='mb-4 logo-container'>       <Image src='../logo.jpg' alt=' logo' width={392} height={152} /></div>
            <div>       <Image src='../ConfirmMail.png' alt=' logo' width={250} height={180} /></div>
            <h2 className='title fs-2 my-2'>ادخل الرمز التحقيقي </h2>
            <p className='main-text mx-0 '> تم ارسال “الرمز التحقيقي” <br></br>  habeebnasr4@gmail.com </p>
            <Form className='w-25 w-100-sm  me-2'>
                <Input className='w-100 mb-3' placeholder="الكود" height='47px'  />
                <Input className='w-100 mb-3' label={" الرمز التحقيقي"} placeholder="- - - -" height='47px' />
                <Input className='w-100 mb-3' label={"كلمة المرور الجديدة"} placeholder="2343" height='47px' />
                <Input className='w-100 mb-3' label={"تأكيد كلمة المرور الجديدة"} placeholder="2343" height='47px' /> 
                <div className='d-flex  justify-content-center align-items-center mt-5'>      <SubmitButton text={" التأكيد "} /></div>
                <div className='d-flex   justify-content-center mt-4'><Link to={"/"}>     <p className='danger' > إعادة إرسال OTP</p></Link></div>
            </Form>
        </div>
    )
}

export default ConfirmWithCode