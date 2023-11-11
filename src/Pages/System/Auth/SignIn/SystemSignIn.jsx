import React from 'react'
import "./SystemSignIn.css"
import { Button, Container, Form } from 'react-bootstrap'
import Input from '../../../../Components/FormHandler/Input'
import { Link } from 'react-router-dom'



const SystemSignIn = () => {
    return (
        <div className='systemLogin position-relative w-100 vh-100 overflow-y-hidden'>
            <div className='layer  position-absolute  d-flex justify-content-center align-items-center  w-100 h-100'>

                <div class="signInCard 

                 ">
                    <Form className='  w-75 h-100'>

                        <img src='../systemlogin.gif' style={{ width: "379px", height: "214px" }} alt='logo image' />
                        <Input borderColor='#94713E' height='48.903px' background='transparent' label={" أسم المستخدم"} placeholder="ادخل اسم المستخدم " className=' mb-4' />
                        <Input type="password" borderColor='#94713E' height='48.903px' background='transparent' label={" كلمة المرور"} placeholder="ادخل كلمه مرور المستخدم " className='mb-4' />
                        <Link to="/System/Users/index">
                            <Button className='text-black mt-3' style={{
                                width: "379.646px",

                                height: "48.987px", backgroundColor: "#FFF", border: "none",
                            }}> الدخول الي الحساب</Button>


                        </Link>

                    </Form>



                </div>

            </div>


        </div>
    )
}

export default SystemSignIn