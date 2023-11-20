import React from 'react'
import styles from "./AllProjects.module.css"
import SystemControler from '../../../../Components/System/SystemControler/SystemControler'
import AddUserButton from '../../../../Components/System/AddUserButton/AddUserButton'
import { AllCategories } from '../../../../Components/System/AllCategories/AllCategories'
import { useContext } from 'react'
import { showAddUpdateUser } from '../../../../Context/CheckAddUpdateUserVisability'
import { Accordion } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import { MdKeyboardArrowDown } from 'react-icons/md'


const AllProjects = () => {
    const { showAddUserModel, setShowAddUserModel } = useContext(showAddUpdateUser)
    return (
        <div>

            <SystemControler child={showAddUserModel ? <p
                onClick={() => {
                    setShowAddUserModel(false)
                }}

                className='pointer text-white'>
                <svg className='mx-3' xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                    <path d="M8.52681 7.88703C8.7714 7.68698 8.7714 7.31302 8.52681 7.11297L0.816557 0.806657C0.490077 0.539626 2.88033e-07 0.771911 3.0647e-07 1.19369L8.57785e-07 13.8063C8.76222e-07 14.2281 0.490078 14.4604 0.816558 14.1933L8.52681 7.88703Z" fill="white" />
                </svg>
                المشاريع  /  <span className='main-text' > إضافة جديدة</span>

            </p> :


                <AddUserButton />} />
            {!showAddUserModel ?
                <div className='row'>
                    <div className='col-md-3'>
                        <AllCategories

                            child={
                                <div className='d-flex  flex-column   align-items-center '>


                                    <div className='mt-4 w-100'>
                                        <Link to={"/System/Projects/index"} className='pointer' >
                                            <p className=' text-white '>
                                                كل المشاريع
                                            </p>
                                        </Link>
                                    </div>


                                    <div className='pointer mt-0'  > <div className='   d-flex  justify-content-center flex-column'>



                                        <Accordion defaultActiveKey={null}  >
                                            <Accordion.Item eventKey="0">

                                                <Accordion.Header  >
                                                    <Link to={"System/Projects/Main/inProgress"}>
                                                        مشاريع قيد التنفيذ
                                                    </Link>


                                                    <MdKeyboardArrowDown size={20} />
                                                </Accordion.Header>



                                                <Accordion.Body>
                                                    <div className='tabs d-flex justify-content-center align-items-center flex-column'>
                                                        <Link to={"System/Projects/Main/inProgress/Design"} >
                                                            <div className='tab  text-end w-100'>
                                                                تصميم

                                                            </div>
                                                        </Link>
                                                        <Link className='w-100' to={"System/Projects/Main/inProgress/Review"}>
                                                            <div className='tab  text-end w-100'>


                                                                الاشراف علي التنفيذ

                                                            </div>
                                                        </Link>


                                                    </div>











                                                </Accordion.Body>
                                            </Accordion.Item>

                                        </Accordion>
                                        <Accordion defaultActiveKey={null}  >
                                            <Accordion.Item eventKey="0">

                                                <Accordion.Header>

                                                    <Link
                                                        to={"System/Projects/Main/Waiting"}
                                                    >      مشاريع معلقة </Link>

                                                    <MdKeyboardArrowDown size={20} />
                                                </Accordion.Header>


                                                <Accordion.Body>
                                                    <div className='tabs d-flex justify-content-center align-items-center flex-column'>
                                                        <Link to={"System/Projects/Main/Waiting/Design"} >
                                                            <div className='tab  text-end w-100'>
                                                                تصميم

                                                            </div>
                                                        </Link>
                                                        <Link className='w-100'
                                                            to={"System/Projects/Main/Waiting/Review"}
                                                        >
                                                            <div className='tab  text-end w-100'>
                                                                الاشراف علي التنفيذ

                                                            </div>
                                                        </Link>


                                                    </div>

                                                </Accordion.Body>
                                            </Accordion.Item>

                                        </Accordion>
                                        <Accordion defaultActiveKey={null}  >
                                            <Accordion.Item eventKey="0">

                                                <Accordion.Header>

                                                    <Link
                                                        to={"System/Projects/Main/Done"}
                                                    >      مشاريع منتهية     </Link>

                                                    <MdKeyboardArrowDown size={20} />
                                                </Accordion.Header>


                                                <Accordion.Body>
                                                    <div className='tabs d-flex justify-content-center align-items-center flex-column'>
                                                        <Link to={"System/Projects/Main/Done/Design"} >
                                                            <div className='tab  text-end w-100'>
                                                                تصميم

                                                            </div>
                                                        </Link>
                                                        <Link className='w-100'
                                                            to={"System/Projects/Main/Done/Review"}
                                                        >
                                                            <div className='tab  text-end w-100'>
                                                                الاشراف علي التنفيذ

                                                            </div>
                                                        </Link>


                                                    </div>

                                                </Accordion.Body>
                                            </Accordion.Item>

                                        </Accordion>


                                    </div>


                                    </div>

                                </div>}


                        />
                    </div>
                    <div className='col-md-9'>


                        <Outlet />

                    </div>
                </div> : <div>



                </div>

            }
        </div>
    )
}

export default AllProjects