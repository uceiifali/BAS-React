import React from 'react'

import { Button, Form } from 'react-bootstrap'
import Input from '../../../Components/FormHandler/Input'
import SubmitButton from '../../../Components/Client/Dashboard/SubmitButton/SubmitButton'
import "./ForgetPassword.css"
import { Link } from 'react-router-dom'
const ForgetPassword = () => {
    return (
        <div className=' ForgetPassword  d-flex justify-content-center  flex-column align-items-center p-5'>

            <div className='mb-4'>       <img src='../logo.jpg' alt=' logo' width={392} height={152} /></div>
            <div>       <img src='../locker.png' alt=' logo' width={200} height={150} /></div>
            <h2 className='title fs-2 my-5'>هل نسيت كلمة المرور ؟</h2>
            <p className='main-text mx-0'>إدخل بريدك الإلكتروني واحصل على“الرمز التحقيقي” للتحقق.</p>
            <Form className='w-25 w-100-sm  me-2'>
                <Input className='w-100' label={"البريد الالكتروني"} placeholder="habeebnasr@gmail.com" height='47px' />
             
                <div className='d-flex justify-content-center align-items-center mt-5'>   <Link to='/Dashboard/ConfirmWithCode'>  <SubmitButton  text={"احصل على الرمز التحقيقي"} /> </Link> </div>
            </Form>


        </div>
    )
}

export default ForgetPassword