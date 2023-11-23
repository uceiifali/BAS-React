import React from 'react'
import SystemControler from '../../../Components/System/SystemControler/SystemControler'
import style from "./MainSystem.module.css"
import { Image } from 'react-bootstrap'
import SystemLineChart from '../../../Components/System/Main/SystemLineChart'
import AllDeprtmentSlider from '../../../Components/System/Main/ِAllDeprtmentSLider'
export const MainSystem = () => {



    return (
        <section>



            <SystemControler child={<div>
                <h2 className='text-white text-2xl fw-bold'     >مرحباً بك بدر ... </h2>
                <p className='main-text text-xl'>مرحباً بعودتك الي النظام الخاص بك</p>

            </div>} />
            <div className={`${style.MainSystem} d-flex   `}>
                <Image src='../mainBackground.png' className={`${style.mainBackground} `} />
                <div className='row mx-auto w-90'>
                    <div className='col-md-6'>
                        <div className={`item   p-3  ${style.cardsBackground}`}>
                            <div className='row'>
                                <div className='col-md-6 mb-3'>
                                    <div className={`   ${style.systemCard}`}>
                                        <div className='d-flex justify-content-between w-90 h-100 align-items-center mx-2'>
                                            <div>                <p className='text-white text-bold text-xl'>الطلبات</p></div>
                                            <div className='d-flex flex-column'>
                                                <Image src='../Main/orders.png' alt='orders' />
                                                <p className='text-white text-xl'>100</p>
                                            </div>
                                        </div>

                                    </div>


                                </div>
                                <div className='col-md-6 mb-3'>

                                    <div className={` ${style.systemCard}`}>
                                        <div className='d-flex justify-content-between w-90 h-100 align-items-center mx-2'>
                                            <div>                <p className='text-white text-bold text-xl'>العملاء</p></div>
                                            <div className='d-flex flex-column'>
                                                <Image src='../Main/clients.png' alt='orders' />
                                                <p className='text-white text-xl'>100</p>
                                            </div>
                                        </div>

                                    </div>


                                </div>
                                <div className='col-md-6 mb-3'>

                                    <div className={` ${style.systemCard}`}>
                                        <div className='d-flex justify-content-between w-90 h-100 align-items-center mx-2'>
                                            <div>                <p className='text-white text-bold text-xl'>المشاريع</p></div>
                                            <div className='d-flex flex-column'>
                                                <Image src='../Main/projects.png' alt='orders' />
                                                <p className='text-white text-xl'>100</p>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                                <div className='col-md-6 mb-3'>

                                    <div className={` ${style.systemCard}`}>
                                        <div className='d-flex justify-content-between w-90 h-100 align-items-center mx-2'>
                                            <div>                <p className='text-white text-bold text-xl'>المهام </p></div>
                                            <div className='d-flex flex-column'>
                                                <Image src='../Main/tasks.png' alt='orders' />
                                                <p className='text-white text-xl'>100</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>



                        </div>


                    </div>
                    <div className='col-md-6'>
                        <div className={`item  p-0  ${style.cardsBackground}`}>






                            <div className={` systemLineChart d-flex  h-75 w-100 p-0 m-0  ${style.systemLineChart} align-items-center flex-column`}>

                                <SystemLineChart />






                            </div>
                            <div className='w-90  mx-auto mx-2 mt-1    overflow-x-auto'>   <AllDeprtmentSlider /></div>



                        </div>


                    </div>

                </div>


            </div>
        </section>

    )
}
