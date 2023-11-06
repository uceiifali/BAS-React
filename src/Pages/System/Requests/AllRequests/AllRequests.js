import React from 'react'
import "./index.css"
import SystemControler from '../../../../Components/System/SystemControler/SystemControler'
import AddUserButton from '../../../../Components/System/AddUserButton/AddUserButton'
import { AllCategories } from '../../../../Components/System/AllCategories/AllCategories'
import { Accordion } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

import { SearchComponent } from '../../../../Components/SearchComponent/SearchComponent'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { useContext } from 'react'
import { showAddUpdateUser } from '../../../../Context/CheckAddUpdateUserVisability'
import AddProject from '../../../../Components/System/Requests/AddProject/AddProject'
import { multiStepContext } from '../../../../Context/StepContext'

const AllRequests = () => {
    const { showAddUserModel, setShowAddUserModel } = useContext(showAddUpdateUser)
    const {  setUserData} = useContext(multiStepContext)

    return (
        <div className='all-Requests h-100'>

            <SystemControler child={showAddUserModel ? <p
                onClick={() => {
                    setShowAddUserModel(false)
                    setUserData([])
                    


                }}

                className='pointer text-white'>
                <svg className='mx-3' xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                    <path d="M8.52681 7.88703C8.7714 7.68698 8.7714 7.31302 8.52681 7.11297L0.816557 0.806657C0.490077 0.539626 2.88033e-07 0.771911 3.0647e-07 1.19369L8.57785e-07 13.8063C8.76222e-07 14.2281 0.490078 14.4604 0.816558 14.1933L8.52681 7.88703Z" fill="white" />
                </svg>
                الطلبات  /  <span className='main-text'>إضافة جديدة</span>

            </p> :


                <AddUserButton />} />
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
                                                <Link to={"System/Requests/Design/inProgress"} >          طلبات قيد التنفيذ</Link>

                                            </div>

                                            <div className='tab  text-end w-100'>
                                                <Link className='w-100'
                                                    to={"System/Requests/Design/pending"}
                                                > طلبات  في انتظار  الموافقة</Link>

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

                    {showAddUserModel ?

                        <AddProject />
                        :
                        <Outlet />

                    }


                </div>

            </div>




        </div>




    )
}

export default AllRequests