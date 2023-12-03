import React from 'react'
import { AllCategories } from '../../../../Components/System/AllCategories/AllCategories'
import SystemControler from '../../../../Components/System/SystemControler/SystemControler'
import { Accordion } from 'react-bootstrap'
import { Checkbox } from '@mui/material'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Link, Outlet } from 'react-router-dom'
import style from "./AccountaingIndex.module.css"
import "./accountaingStyle.css"

const AccountaingIndex = () => {
    return (
        <div className='AccountaingIndex'>
            <SystemControler />
            <div className='row'>
                <div className='col-md-3'>
                    <AllCategories child={

                        <div>

                            <Link to="/System/Accounating/index">         <h2 className='mx-2 text-white my-3' >الخزينة</h2></Link>
                            <Accordion defaultActiveKey={null}  >
                                <Accordion.Item eventKey="0">
                                    <Link className='w-100' to={"/System/Accounating/Revenues"} >
                                        <Accordion.Header  >

                                            <p>  الايرادات</p>
                                            <MdKeyboardArrowDown size={20} />



                                        </Accordion.Header>

                                    </Link>

                                    <Accordion.Body>
                                        <div className='tabs d-flex justify-content-center align-items-center flex-column'>
                                            <div className='w-100' >
                                                <Link to={"System/Accounating/FinancialClaims"}>
                                                    <div className='tab  text-end w-100'>
                                                        <span> المطالبة مالية</span>

                                                    </div>
                                                </Link>

                                            </div>
                                            <div className='w-100'

                                            >
                                                <Link to={"System/Accounating/Invoice"}>
                                                    <div className='tab  text-end w-100'>


                                                        <span>الفواتير</span>



                                                    </div>
                                                </Link>
                                            </div>



                                        </div>











                                    </Accordion.Body>

                                </Accordion.Item>

                            </Accordion>
                            <Accordion defaultActiveKey={null}  >
                                <Accordion.Item eventKey="0">
                                    <Link to={"System/Accounating/Expenses"}>
                                        <Accordion.Header  >


                                            <p>المصروفات </p>




                                            <MdKeyboardArrowDown size={20} />

                                        </Accordion.Header>
                                    </Link>





                                    <Accordion.Body>
                                        <div className='tabs d-flex justify-content-center align-items-center flex-column'>


                                            <Link to={"System/Accounating/Expenses/ExpensesReports"}>
                                                <div className='w-100' >
                                                    <div className='tab  text-end w-100'>
                                                        <span> تقارير المصروفات</span>

                                                    </div>
                                                </div>
                                            </Link>



                                            <Link to={"System/Accounating/Expenses/Items"}>

                                                <div className='w-100'


                                                >

                                                    <div className='tab  text-end w-100'>


                                                        <span>الاصناف</span>



                                                    </div>
                                                </div>
                                            </Link>


                                        </div>











                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>
                        </div>
                    } />





                </div>
                <div className='col-md-9'>
                    <div className={`${style.AccountaingIndexbg}`} >
                        <Outlet />
                    </div>

                </div>
            </div>


        </div >
    )
}

export default AccountaingIndex