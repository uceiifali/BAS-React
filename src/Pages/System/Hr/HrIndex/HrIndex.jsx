import React, { useContext } from 'react'
import SystemControler from '../../../../Components/System/SystemControler/SystemControler'
import { AllCategories } from '../../../../Components/System/AllCategories/AllCategories'
import { Accordion, Button } from 'react-bootstrap'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Link, Outlet } from 'react-router-dom'
import { AddHrType } from '../../../../Context/AddHr'

const HrIndex = () => {

    const { openHr, setOpenHr } = useContext(AddHrType)

    return (
        <div>
            <SystemControler
                child={
                    <Button
                        className='add-user-button'
                        onClick={() => {
                            setOpenHr(true)

                           
                        }}


                    >إضافة جديدة</Button>


                }

            />
            <div className='row'>
                <div className='col-md-3'>
                    <AllCategories child={
                        <>
                            <Accordion defaultActiveKey={null}  >

                                <div className='py-3'>
                                    <h2 className='text-white text-center'>الموارد البشرية</h2>
                                </div>


                                <Accordion.Item eventKey="0">

                                    <Link to={"/System/Hr/EmployeesManagment"}>
                                        <Accordion.Header  >



                                            <p> إدارة الموظفين</p>

                                            <MdKeyboardArrowDown size={20} />

                                        </Accordion.Header>
                                    </Link>
                                    <Accordion.Body>
                                        <div className='tabs d-flex justify-content-center align-items-center flex-column'>
                                            <Link to={"/System/Hr/Employees/Saudia"}>


                                                <div className='w-100' >


                                                    <div className='tab  text-end w-100'>
                                                        <span> كل  الموظفين</span>

                                                    </div>


                                                </div>
                                            </Link >



                                        </div>











                                    </Accordion.Body>

                                </Accordion.Item>

                            </Accordion>

                            <Accordion defaultActiveKey={true}  >

                            </Accordion>

                            <div className='tabs d-flex justify-content-center align-items-center flex-column'>
                                <div className='w-100' >

                                </div>
                                <div className='w-100'

                                >
                                    <Link to={"/System/Hr/HolidayMangment"}>

                                        <div className='tab  text-end w-100'>


                                            <span>إدارة الاجازات</span>




                                        </div>
                                    </Link>
                                </div>
                                <div className='w-100'
                                >
                                    <Link to={"/System/Hr/EmployeesServices"}>
                                        <div className='tab  text-end w-100'>

                                            <span>خدمات الموظفين</span>



                                        </div>
                                    </Link>
                                </div>






                            </div>
















                        </>
                    } />
                </div>
                <div className='col-md-9'>
                    <Outlet />
                </div>

            </div>

        </div>
    )
}

export default HrIndex
