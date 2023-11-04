import React from 'react'
import "./index.css"
import SystemControler from '../../../../Components/System/SystemControler/SystemControler'
import AddUserButton from '../../../../Components/System/AddUserButton/AddUserButton'
import { AllCategories } from '../../../../Components/System/AllCategories/AllCategories'
import { Accordion } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

import { SearchComponent } from '../../../../Components/SearchComponent/SearchComponent'
import { MdKeyboardArrowDown } from 'react-icons/md'

const AllRequests = () => {


    return (
        <div className='all-Requests h-100'>

            <SystemControler child={<AddUserButton />} />
            <div className='row '>
                <div className='col-md-3'>
                    <AllCategories child={<div className='d-flex  flex-column   align-items-center '>

                        <SearchComponent background={"#161620 !important"} />

                        <div className='mt-4 w-100'>
                            <Link to={"/System/Requests/index"} className='pointer' >
                                <p className=' text-white '>
                                    كل الطلبات
                                </p>
                            </Link>
                        </div>


                        <div className='pointer mt-0'  > <div className='   d-flex  justify-content-center flex-column'>



                            <Accordion defaultActiveKey={null}  >
                                <Accordion.Item eventKey="0">

                                    <Accordion.Header  >
                                        <Link to={"System/Requests/Design"}>تصميم</Link>


                                        <MdKeyboardArrowDown size={20} />
                                    </Accordion.Header>



                                    <Accordion.Body>
                                        <div className='tabs d-flex justify-content-center align-items-center flex-column'>
                                            <div className='tab  text-end w-100'>
                                                <Link to={"System/Requests/Design/inProgress    "} >          طلبات قيد التنفيذ</Link>

                                            </div>

                                            <div className='tab  text-end w-100'>
                                                <Link className='w-100'
                                                    to={"System/Requests/Design/pending"}
                                                > طلبات  في انتظار  الموافقة</Link>

                                            </div>
                                            <div className='tab  text-end w-100'>
                                                <Link
                                                    to={"System/Requests/Design/confirm"}
                                                >          طلبات  منتهية  </Link>

                                            </div>
                                            <div className='tab  text-end w-100'>
                                                <Link
                                                    to={"System/Requests/Design/rejected"}
                                                >          طلبات  مرفوضة  </Link>

                                            </div>

                                        </div>











                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>
                            <Accordion defaultActiveKey={null}  >
                                <Accordion.Item eventKey="0">

                                    <Accordion.Header>

                                        <Link
                                            to={"System/Requests/Review"}
                                        >     اشراف علي التنفيذ</Link>

                                        <MdKeyboardArrowDown size={20} />
                                    </Accordion.Header>


                                    <Accordion.Body>
                                        <div className='tabs d-flex justify-content-center align-items-center flex-column'>
                                            <div className='tab  text-end w-100'>
                                                <Link to={"System/Requests/Review/inProgress"} >          طلبات قيد التنفيذ</Link>

                                            </div>

                                            <div className='tab  text-end w-100'>
                                                <Link className='w-100'
                                                    to={"System/Requests/Review/pending"}
                                                > طلبات  في انتظار  الموافقة</Link>

                                            </div>
                                            <div className='tab  text-end w-100'>
                                                <Link
                                                    to={"System/Requests/Review/confirm"}
                                                >          طلبات  منتهية  </Link>

                                            </div>
                                            <div className='tab  text-end w-100'>
                                                <Link
                                                    to={"System/Requests/Review/rejected"}
                                                >          طلبات  مرفوضة  </Link>

                                            </div>

                                        </div>

                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>


                        </div>


                        </div>

                    </div>} />





                </div>
                <div className='col-md-9 '>
                    <Outlet />


                </div>

            </div>




        </div>




    )
}

export default AllRequests