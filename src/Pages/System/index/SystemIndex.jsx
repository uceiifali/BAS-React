import React, { useState } from 'react'

import "./index.css"
import { Outlet } from 'react-router-dom'
import { Container, Image } from 'react-bootstrap'

import { IoMdNotifications } from "react-icons/io"
import { LuMessagesSquare } from "react-icons/lu"
import AsideBar from '../../../Components/System/AsideBar/AsideBar'
const SystemIndex = () => {


    return (

        <section className= 'full-system  system-bg position-relative'>
             <div className='  d-flex  position-absolute  end-5'>

                <img src={process.env.PUBLIC_URL+"/icons/systemlogo.png"} alt='BSA logo' className='system-logo text-white' />
            </div> 
            <div className='system-container d-flex align-items-center     '>
                <div  className='row w-100 mx-auto  py-5 my-3 ps-5 h-75  align-items-center'>
                    <div className=' col-md-4 col-xxl-3 ' >
                        <AsideBar   />
                    </div>
                    <div className='col-md-8  '>
                        <Outlet />
                        
                    </div>
                </div>
            </div>
        </section>


    )
}

export default SystemIndex