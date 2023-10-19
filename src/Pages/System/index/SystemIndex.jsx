import React, { useState } from 'react'

import "./index.css"
import { Outlet } from 'react-router-dom'
import { Container, Image } from 'react-bootstrap'

import { IoMdNotifications } from "react-icons/io"
import { LuMessagesSquare } from "react-icons/lu"
import AsideBar from '../../../Components/System/AsideBar/AsideBar'
const SystemIndex = () => {


    return (

        <div className='system-bg position-relative'>
            <div className='  d-flex  position-absolute top-3 end-5'>

                <img src='../../../assets/icons/systemlogo.png ' alt='BSA logo' className='system-logo text-white' />
            </div>
            <div className='vh-100 d-flex align-items-center     '>
                <div  style={{height: "897px"}} className='row gap-3    align-items-center'>
                    <div className='col-md-3  h-100' >
                        <AsideBar />
                    </div>

                    <div className='col-md-8  h-100'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default SystemIndex