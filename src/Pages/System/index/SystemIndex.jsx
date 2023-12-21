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

        <section className='full-system over-flow-hidden  system-bg '>
            <div className='   w-90 mx-auto d-flex gap-2  tablet:relative justify-end mt-1 '>

                <Image src={process.env.PUBLIC_URL + "/icons/systemlogo.png"} alt='BSA logo' className='system-logo text-white' />
            </div>
            <div className={`d-flex gap-2 mx-auto  w-90  ${collapsed&& " justify-between"}`}>
                <div className={`   ${collapsed ? 'desktop:w-[100px] laptop:w-[100px]  tablet:w-[95px] tablet:absolute tablet:z-50 start-0 desktop:top-[9%]  laptop:top-[9%] tablet:[top-9%]  ' :
                    ' desktop:static  laptop:static desktop:w-[380px]  laptop:w-[380px]  tablet:w-[350px]   mobile:w-[350px]   tablet:absolute tablet:z-50 start-0   tablet:[top-9%]         '}
                align-items-center `}>
                    <AsideBar />
                </div>
                <div className={`   ${collapsed ? 'desktop:w-[80%]       '
                    :
                    'desktop:w-[89.5%] laptop:w-[89.5%]   tablet:w-[w-93%]        '} 
                
                d-flex gap-2  mx-auto  h-100  align-items-center `}>

                    <div className={`w-full    system-container   `}>
                        <Outlet />
                    </div>





                </div>
            </div>

        </section >


    )
}

export default SystemIndex