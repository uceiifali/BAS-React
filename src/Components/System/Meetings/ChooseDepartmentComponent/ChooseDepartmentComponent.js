import React from 'react'
import { Accordion, Button, Container, Form, Image, Modal } from 'react-bootstrap'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { SearchComponent } from '../../../SearchComponent/SearchComponent'
import { Checkbox } from '@mui/material'
const ChooseDepartmentComponent = ({ chooseDepartment, setChooseDeprtmant }) => {
    const users = Array.from({ length: 5 })
    return (
        <div>
            <Modal
                size="md"
                show={chooseDepartment}
                onHide={() => setChooseDeprtmant(false)}
                aria-labelledby=" example-modal-sizes-title-lg"
                className=' chooseDepartment   '
            >


             

                <div className='row  mx-2'>
                    <div className='col-md-6'>
                        <div className='item '>
                            <p className='my-3 text-xl text-white'>
                                الاقسام
                            </p>
                            <div className='ChooseDeprtmant-according'>


                                <Accordion defaultActiveKey={null}  >
                                    <Accordion.Item eventKey="0">

                                        <Accordion.Header  >
                                            <Link to={"System/Clients/Inside"}>مدير مكتب</Link>


                                        </Accordion.Header>


                                    </Accordion.Item>

                                </Accordion>
                                <Accordion defaultActiveKey={null}  >
                                    <Accordion.Item eventKey="0">

                                        <Accordion.Header  >
                                            <Link >مدير قسم </Link>


                                            <MdKeyboardArrowDown size={20} />
                                        </Accordion.Header>



                                        <Accordion.Body>
                                            <div className='tabs d-flex justify-content-center align-items-center flex-column'>
                                                <Link className='w-100' >
                                                    <div className='tab  text-end w-100'>
                                                        الكل

                                                    </div>
                                                </Link>
                                                <Link className='w-100'

                                                >
                                                    <div className='tab  text-end w-100'>


                                                        مدني

                                                    </div>
                                                </Link>
                                                <Link className='w-100'
                                                >
                                                    <div className='tab  text-end w-100'>


                                                        معماري

                                                    </div>
                                                </Link>
                                                <Link className='w-100'
                                                >
                                                    <div className='tab  text-end w-100'>


                                                        كهربا

                                                    </div>
                                                </Link>
                                                <Link className='w-100'
                                                >
                                                    <div className='tab  text-end w-100'>


                                                        ميكانيكا

                                                    </div>
                                                </Link>
                                                <Link className='w-100'
                                                >
                                                    <div className='tab  text-end w-100'>


                                                        موارد بشرية

                                                    </div>
                                                </Link>
                                                <Link className='w-100'
                                                >
                                                    <div className='tab  text-end w-100'>


                                                        محاسبة

                                                    </div>
                                                </Link>


                                            </div>











                                        </Accordion.Body>
                                    </Accordion.Item>

                                </Accordion>
                                <Accordion defaultActiveKey={null}  >
                                    <Accordion.Item eventKey="0">

                                        <Accordion.Header  >
                                            <Link > موظفين </Link>


                                            <MdKeyboardArrowDown size={20} />
                                        </Accordion.Header>



                                        <Accordion.Body>
                                            <div className='tabs d-flex justify-content-center align-items-center flex-column'>
                                                <Link className='w-100' >
                                                    <div className='tab  text-end w-100'>
                                                        الكل

                                                    </div>
                                                </Link>
                                                <Link className='w-100'

                                                >
                                                    <div className='tab  text-end w-100'>


                                                        مدني

                                                    </div>
                                                </Link>
                                                <Link className='w-100'
                                                >
                                                    <div className='tab  text-end w-100'>


                                                        معماري

                                                    </div>
                                                </Link>
                                                <Link className='w-100'
                                                >
                                                    <div className='tab  text-end w-100'>


                                                        كهربا

                                                    </div>
                                                </Link>
                                                <Link className='w-100'
                                                >
                                                    <div className='tab  text-end w-100'>


                                                        ميكانيكا

                                                    </div>
                                                </Link>
                                                <Link className='w-100'
                                                >
                                                    <div className='tab  text-end w-100'>


                                                        موارد بشرية

                                                    </div>
                                                </Link>
                                                <Link className='w-100'
                                                >
                                                    <div className='tab  text-end w-100'>


                                                        محاسبة

                                                    </div>
                                                </Link>


                                            </div>











                                        </Accordion.Body>
                                    </Accordion.Item>

                                </Accordion>


                            </div>


                        </div>

                    </div>
                    <div className='col-md-6'>

                        <div className='item'>
                            <div className='item '>
                                <p className='my-3 text-xl text-white'>
                                    المستخدمين
                                </p>
                                <div className='ChooseDeprtmant-according d-flex justify-content-start  align-items-center flex-column  '>

                                    <SearchComponent className="m-auto" background={"#2B2B40"} width={"230px"} />
                                    {users.map((ele, index) => (

                                        <div key={index} className='d-flex gap-3  show-meeting-Detials my-3 mx-1'>
                                            <Image src={process.env.PUBLIC_URL + "/people/islam.jpg"} width={50} height={50} className=' rounded-circle' alt='person icon' />
                                            <div className='d-flex flex-column'>
                                                <p className='text-white mx-2'>اسلام إيهاب</p>
                                                <p className='text-[#565674] text-sm'> Islam@bsa.com</p>
                                            </div>
                                            <Checkbox />
                                        </div>
                                    ))}

                                </div>


                            </div>

                        </div>
                    </div>



                </div>
                <div className=' d-flex justify-content-center'>

                    <Button
                        onClick={() => { setChooseDeprtmant(false) }}

                        className='sumbmitAddUpdateUser'>
                        حفظ
                    </Button>
                </div>






            </Modal>


        </div>
    )
}

export default ChooseDepartmentComponent