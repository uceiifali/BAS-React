import React, { useContext, useState } from 'react'
import "./SystemUsers.css"


import Select from '../../../../Components/FormHandler/Select'
import Input from "../../../../Components/FormHandler/Input"
import { Button, Modal, NavDropdown } from 'react-bootstrap'
import Genralnformation from '../../../../Components/System/Users/Genralnformation/Genralnformation'
import ProfessinollInformation from '../../../../Components/System/Users/ProfessinollInformation/ProfessinollInformation'
import { AccountaingInformation } from '../../../../Components/System/Users/AccountaingInformation/AccountaingInformation'

import { showAddUpdateUser } from '../../../../Context/CheckAddUpdateUserVisability'
import AddUpdateUser from '../../../../Components/System/Users/AddUpdateUser/AddUpdateUser'
import AddUserButton from '../../../../Components/System/AddUserButton/AddUserButton'
import { Link } from 'react-router-dom'
import SystemControler from '../../../../Components/System/SystemControler/SystemControler'
import AllUserCategories from '../../../../Components/System/Users/AllUserCategories/AllUserCategories'
import SearchUsers from '../../../../Components/System/Users/SearchUsers/SearchUsers'





const SystemUsers = () => {

    const [employeeDetails, setEmployeeDetails] = useState("معلومات عامة")
    const [addUpdateUser, setAddUpdateUser] = useState(false)
    const { showAddUserModel, showUpdateUserModel, setShowAddUserModel, setShowUpdateUserModel } = useContext(showAddUpdateUser)
    const [OpenUpdateUser, setOpenUpdateUser] = useState({
        isOpen: false,
        id: null
    });
    const [deleteUserPoper, setDeleteUserPoper] = useState(false)
    const [ConfimdeleteUserPoper, setConfirmDeleteUserPoper] = useState(false)

    const handleGetUserDetails = () => {




    }

    const handleCofirmDeleteUser = () => {

        //confrim deleting user
        setDeleteUserPoper(false)
        setConfirmDeleteUserPoper(true)

    }







    const colourStyles = {
        placeholder: (defaultStyles) => {
            return {
                ...defaultStyles,
                color: 'rgba(255, 255, 255, 0.50)',
            }
        },
        control: styles => ({ ...styles, backgroundColor: '#2B2B40', border: "unset", color: 'rgba(255, 255, 255, 0.50);' }),
        option: (styles, { data, isDisabled, isFocused, isSelected, }) => {
            return {
                ...styles,

                color: 'rgba(255, 255, 255, 0.50);',
                backgroundColor: "#2B2B40",
                border: "none "

            }
        }

    }
    return (
        <div className='Users-component   w-100    text-white '>
            <div
                style={{

                    border: "1px solid #EFAA20 !important"
                }}
            >
                <SystemControler child={showAddUserModel ? <p
                    onClick={() => {
                        setShowAddUserModel(false)

                    }}

                    className='pointer'>
                    <svg className='mx-3' xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                        <path d="M8.52681 7.88703C8.7714 7.68698 8.7714 7.31302 8.52681 7.11297L0.816557 0.806657C0.490077 0.539626 2.88033e-07 0.771911 3.0647e-07 1.19369L8.57785e-07 13.8063C8.76222e-07 14.2281 0.490078 14.4604 0.816558 14.1933L8.52681 7.88703Z" fill="white" />
                    </svg>
                    المستخدمين  /  <span className='main-text'>إضافة جديدة</span>

                </p> :
                    showUpdateUserModel ? <p
                        onClick={() => {
                            setShowUpdateUserModel(false)
                            setOpenUpdateUser({
                                id: null
                            })

                        }}

                        className='pointer'>
                        <svg className='mx-3' xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                            <path d="M8.52681 7.88703C8.7714 7.68698 8.7714 7.31302 8.52681 7.11297L0.816557 0.806657C0.490077 0.539626 2.88033e-07 0.771911 3.0647e-07 1.19369L8.57785e-07 13.8063C8.76222e-07 14.2281 0.490078 14.4604 0.816558 14.1933L8.52681 7.88703Z" fill="white" />
                        </svg>
                        المستخدمين  /  <span className='main-text' >تعديل المستخدم </span>

                    </p> :


                        <AddUserButton />} />

                {showUpdateUserModel || showAddUserModel ? <AddUpdateUser setOpenUpdateUser={setOpenUpdateUser} id={OpenUpdateUser.id} /> : <div className='row'>
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='col-md-6'>

                                <AllUserCategories />
                            </div>
                            <div className='col-md-6'>

                                {/* search users */}
                                <SearchUsers />
                            </div>
                        </div>
                    </div>


                    <div className='col-md-6'>
                        <div className='show-employee py-4 px-2 w-100 '>
                            <div className='show-employee-header'>
                                <div className='d-flex justify-content-between'>

                                    <p className='golden'>مدير قسم / البرمجة</p>
                                    <div>
                                        <Button className='export-bg ms-2 '>تصدير CSV </Button>
                                        <Button className='export-bg ms-2'> تصدير Excel     </Button>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between w-100'>
                                    <div className='tab d-flex   '>

                                        <img src='../People/islam.jpg' alt='user img ' className='user-Personal  ' />
                                        <div className='d-flex flex-column me-3 '>
                                            <h2 className=' name-header     my-0    '> اسلام</h2>
                                            <p className='main-text  my-0   '>islam@bsa.com</p>
                                            <p className=' name-heade my-0    '>01023456789</p>
                                        </div>

                                    </div>
                                    {deleteUserPoper &&
                                        <Modal
                                            className='submitSystemPoper'
                                            size="lg"
                                            aria-labelledby="contained-modal-title-vcenter"
                                            onHide={() => setDeleteUserPoper(false)}
                                            show={deleteUserPoper}
                                        >

                                            <Modal.Body className='d-flex align-items-center'>


                                                <div className='d-flex w-75 flex-column mx-auto mt-3 justify-content-center align-items-center '>
                                                    {<p className='text-white' style={{ fontSize: "30px" }}>  هل انت متاكد من حذف هذا المستخدم </p>}
                                                    <div className='d-flex justify-content-center mt-3 gap-3'>

                                                        <Button

                                                            onClick={() => {
                                                                handleCofirmDeleteUser()
                                                            }}
                                                            className='Delete-button'>نعم</Button>

                                                        <Button

                                                            onClick={() => {
                                                                setDeleteUserPoper(false)
                                                            }}
                                                            className='No-Delete'>لا</Button>

                                                    </div>

                                                </div>
                                            </Modal.Body>


                                        </Modal >}
                                    {ConfimdeleteUserPoper &&
                                        <Modal
                                            className='submitSystemPoper'
                                            size="lg"
                                            aria-labelledby="contained-modal-title-vcenter"
                                            onHide={() => setConfirmDeleteUserPoper(false)}
                                            show={ConfimdeleteUserPoper}
                                        >

                                            <Modal.Body >
                                                <div className='d-flex justify-content-center w-100'>            <img src={"../correct.gif"} width={120} height={120} className='my-3' color='#E1B67C' /></div>


                                                <div className='d-flex w-75 flex-column mx-auto mt-3 justify-content-center align-items-center '>
                                                    {<p className='text-white' style={{ fontSize: "30px" }}> تم حذف المستخدم بنجاح    </p>}
                                                    <Button
                                                        onClick={() => {
                                                            setConfirmDeleteUserPoper(false)
                                                        }}
                                                        className='sumbmitAddUpdateUser'>حفظ</Button>

                                                </div>
                                            </Modal.Body>


                                        </Modal >}




                                    <div className='d-flex align-items-center '>
                                        <img src='../../icons/delete.png' onClick={() => {
                                            setDeleteUserPoper(true)

                                        }} alt='user img ' className='action-buttons  ' />





                                        <img src='../icons/edit.png' onClick={() => {
                                            setShowUpdateUserModel(true)
                                            setOpenUpdateUser({
                                                id: "4325435",
                                                isOpen: true
                                            })

                                        }} alt='user img ' className='action-buttons  ' />
                                        <img src='../icons/more.png' alt='user img ' className='action-buttons  ' />

                                    </div>


                                </div>
                            </div>

                            <div className='main-text choose-inf position-relative d-flex justify-content-between mx-5 my-3'>
                                <p className={`genral-inf ${employeeDetails == "معلومات عامة" && "inf-type"}`} onClick={() => { setEmployeeDetails("معلومات عامة") }} >معلومات عامة</p>
                                <p className={`genral-inf ${employeeDetails == "معلومات مهنية" && "inf-type"}`} onClick={() => { setEmployeeDetails("معلومات مهنية") }}>معلومات  مهنية</p>
                                <p className={`genral-inf ${employeeDetails == "معلومات محاسبية" && "inf-type"}`} onClick={() => { setEmployeeDetails("معلومات محاسبية") }}>معلومات  محاسبية</p>


                            </div>
                            {employeeDetails == "معلومات عامة" ? <Genralnformation /> : employeeDetails == "معلومات مهنية" ? <ProfessinollInformation /> : <AccountaingInformation />}

                        </div>



                    </div>




                </div>}

            </div>
        </div>
    )
}

export default SystemUsers