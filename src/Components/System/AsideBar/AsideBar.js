import React, { useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import "./AsideBar.css"
import { Link } from 'react-router-dom';
const AsideBar = () => {
    const [rtl, setRtl] = useState(true)
    const [collapsed, setCollapsed] = useState(true);
    return (
        <div className="align-items-center    mx-5" style={{ display: 'flex', direction: rtl ? 'rtl' : 'ltr', borderRadius: "19px" }}>

            <Sidebar

                rootStyles={{
                    color: "#FFF",
                    borderRadius: "19px",
                    height: '100%',
        
                    border: "2px solid #EFAA20 !important"
  

                }}

                collapsed={collapsed} rtl={rtl} backgroundColor='#1E1E2D' className=' w-100' color='#FFF'>
                <Menu className='w-100'>


                    <MenuItem className='mt-4  center w-100'>
                        <div className='d-flex justify-content-center flex-column align-items-center'>
                        <div>  <img src='../people/Badr.png' alt="icon" className='badr-icon ' /></div>



                            <p style={{ fontSize: "19px" }} className=' p-0 mx-0  my-2'>بدر بن سليمان</p>
                            <p className='golden-text ' >رئيس مجلس الأدارة</p>
                            <p style={{ fontSize: "14px", color: "#565674" }}>badr@bsa.com</p>

                        </div>




                    </MenuItem>


                    <MenuItem className='my-2   d-flex flex-column '>
                        <div className=' goals    '><p>الاهداف</p>
                            <ProgressBar className='w-100   ' variant='warning' now={37} />
                            <p style={{ fontSize: "12px" }} className='my-2'>وصلت إلى 37% من هدفك</p>

                            <div className='d-flex justify-content-center gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="134" height="66" viewBox="0 0 134 66" fill="none">
                                    <rect x="0.5" y="0.5" width="133" height="65" rx="10.5" stroke="#434362" stroke-linejoin="round" stroke-dasharray="3 3" />
                                    <text fill="white   ">
                                        <tspan fill='rgba(255, 255, 255, 0.50)' x="100" y={20} fontSize={"12"} dy="0">مشاريع منتهية
                                        </tspan>
                                        <tspan x="90" fill='#75CC68' y={50} fontSize={"20"} className='text-center ' dy="0"> 30 %
                                        </tspan>

                                    </text>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="134" height="66" viewBox="0 0 134 66" fill="none">
                                    <rect x="0.5" y="0.5" width="133" height="65" rx="10.5" stroke="#434362" stroke-linejoin="round" stroke-dasharray="3 3" />
                                    <text fill="white   ">
                                        <tspan fill='rgba(255, 255, 255, 0.50)' x="110" y={20} fontSize={"12"} dy="0"> مشاريع قيد التنفيذ
                                        </tspan>
                                        <tspan x="90" fill='#F1416C' y={50} fontSize={"20"} className='text-center ' dy="0"> 70 %
                                        </tspan>

                                    </text>
                                </svg>

                            </div>
                        </div>

                    </MenuItem>
                    <MenuItem className='my-2  w-100'>
                        <div className='row '>
                            <div className='col-md-4 col-sm-6'>

                                <div className='system-item'>
                                    <Link to="/System/index">
                                        <div class="system-card">
                                            <div class="card__content d-flex justify-content-center align-items-center  flex-column gap-2 " >
                                                <img src='../../../assets/icons/Main.png' alt="icon" className='aside-icon mt-3'
                                                />
                                                <p>الرئيسية</p>
                                            </div>

                                        </div>
                                    </Link>

                                </div>

                            </div>
                            <div className='col-md-4 col-sm-6'>

                                <div className='system-item'>
                                    <Link>
                                        <div class="system-card">
                                            <div class="card__content d-flex justify-content-center align-items-center  flex-column gap-2 " >
                                                <img src='../../../assets/icons/Customers.png' alt="icon" className='aside-icon mt-3'
                                                />
                                                <p>العملاء</p>
                                            </div>

                                        </div>
                                    </Link>

                                </div>

                            </div>
                            <div className='col-md-4 col-sm-6'>

                                <div className='system-item'>
                                    <Link to="/System/AllUsersChart">
                                        <div class="system-card">
                                            <div class="card__content d-flex justify-content-center align-items-center  flex-column gap-2 " >
                                                <img src='../../../assets/icons/users.png' alt="icon" className='aside-icon mt-3'
                                                />
                                                <p>المستخدمين</p>
                                            </div>

                                        </div>
                                    </Link>

                                </div>

                            </div>
                            <div className='col-md-4 col-sm-6'>

                                <div className='system-item'>
                                    <Link>
                                        <div class="system-card">
                                            <div class="card__content d-flex justify-content-center align-items-center  flex-column gap-2 " >
                                                <img src='../../../assets/icons/orders.png' alt="icon" className='aside-icon mt-3'
                                                />
                                                <p>الطلبات</p>
                                            </div>

                                        </div>
                                    </Link>

                                </div>

                            </div>   <div className='col-md-4 col-sm-6'>

                                <div className='system-item'>
                                    <Link>
                                        <div class="system-card">
                                            <div class="card__content d-flex justify-content-center align-items-center  flex-column gap-2 " >
                                                <img src='../../../assets/icons/projects.png' alt="icon" className='aside-icon mt-3'
                                                />
                                                <p>المشاريع</p>
                                            </div>

                                        </div>
                                    </Link>

                                </div>

                            </div>   <div className='col-md-4 col-sm-6'>

                                <div className='system-item'>
                                    <Link>
                                        <div class="system-card">
                                            <div class="card__content d-flex justify-content-center align-items-center  flex-column gap-2 " >
                                                <img src='../../../assets/icons/tasks.png' alt="icon" className='aside-icon mt-3'
                                                />
                                                <p>المهام</p>
                                            </div>

                                        </div>
                                    </Link>

                                </div>

                            </div>
                            <div className='col-md-4 col-sm-6'>

                                <div className='system-item'>
                                    <Link>
                                        <div class="system-card">
                                            <div class="card__content d-flex justify-content-center align-items-center  flex-column gap-2 " >
                                                <img src='../../../assets/icons/meetings.png' alt="icon" className='aside-icon mt-3'
                                                />
                                                <p>الاجتماعات</p>
                                            </div>

                                        </div>
                                    </Link>

                                </div>

                            </div>

                            <div className='col-md-4 col-sm-6'>

                                <div className='system-item'>
                                    <Link>
                                        <div class="system-card">
                                            <div class="card__content d-flex justify-content-center align-items-center  flex-column gap-2 " >
                                                <img src='../../../assets/icons/hr.png' alt="icon" className='aside-icon mt-3'
                                                />
                                                <p >الموارد البشرية  </p>
                                            </div>

                                        </div>
                                    </Link>

                                </div>

                            </div>

                            <div className='col-md-4 col-sm-6'>

                                <div className='system-item'>
                                    <Link>
                                        <div class="system-card">
                                            <div class="card__content d-flex justify-content-center align-items-center  flex-column gap-2 " >
                                                <img src='../../../assets/icons/Acouuntaing.png' alt="icon" className='aside-icon mt-3'
                                                />
                                                <p>الحسابات </p>
                                            </div>

                                        </div>
                                    </Link>

                                </div>

                            </div>
                            <div className='col-md-4 col-sm-6'>

                                <div className='system-item'>
                                    <Link>
                                        <div class="system-card">
                                            <div class="card__content d-flex justify-content-center align-items-center  flex-column gap-2 " >
                                                <img src='../../../assets/icons/Conversation.png' alt="icon" className='aside-icon mt-3'
                                                />
                                                <p>محادثاتى</p>
                                            </div>

                                        </div>
                                    </Link>

                                </div>

                            </div>

                            <div className='col-md-4 col-sm-6'>

                                <div className='system-item'>
                                    <Link>
                                        <div class="system-card">
                                            <div class="card__content d-flex justify-content-center align-items-center  flex-column gap-2 " >
                                                <img src='../../../assets/icons/settings.png' alt="icon" className='aside-icon mt-3'
                                                />
                                                <p style={{ fontSize: "14px" }}>الاعدادات  </p>
                                            </div>

                                        </div>
                                    </Link>

                                </div>

                            </div>

                            <div className='col-md-4 col-sm-6'>

                                <div className='system-item'>
                                    <Link>
                                        <div class="system-card">
                                            <div class="card__content d-flex justify-content-center align-items-center  flex-column gap-2 " >
                                                <img src='../../../assets/icons/exit.png' alt="icon" className='aside-icon mt-3'
                                                />
                                                <p>خروج </p>
                                            </div>

                                        </div>
                                    </Link>

                                </div>

                            </div>



                        </div>

                    </MenuItem>
                </Menu>
            </Sidebar>





        </div>
    )
}

export default AsideBar