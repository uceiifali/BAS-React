import React, { useContext, useState } from 'react'

import "./index.css"
import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import { IoMdNotifications } from "react-icons/io"
import { LuMessagesSquare } from "react-icons/lu"
import AsideBar from '../../../Components/System/AsideBar/AsideBar'
import Image from '../../../Components/Image'
import { SideBarProvider } from '../../../Context/SideBarProvider'
const SystemIndex = () => {
    const { collapsed, setCollapsed } = useContext(SideBarProvider);

    return (

        <section className='full-system over-flow-hidden  system-bg position-relative'>
            <div className='   w-90 mx-auto d-flex  justify-end mt-1 '>

                <Image src={process.env.PUBLIC_URL + "/icons/systemlogo.png"} alt='BSA logo' className='system-logo text-white' />
            </div>
            <div className='d-flex w-90 mx-auto'>
                <div className={` desktop:w[8%] ${collapsed && 'desktop:w[3%]'} align-items-center mobile:z-10`}>
                    <AsideBar />
                </div>
                <div className={`  mobile:w-full desktop:w[90%] tablet:[w-full] ${collapsed && 'desktop:w[96%]'}   d-flex gap-2  mx-auto  h-100  align-items-center `}>

                    <div className={`w-full   system-container   `}>
                        <Outlet />
                    </div>





                </div>
            </div>

        </section>


    )
}

export default SystemIndex