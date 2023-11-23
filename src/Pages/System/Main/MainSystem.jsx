import React from 'react'
import SystemControler from '../../../Components/System/SystemControler/SystemControler'
import style from "./MainSystem.module.css"
import moment from 'moment'
import { Image } from 'react-bootstrap'
export const MainSystem = () => {



    return (
        <section>



            <SystemControler child={<div>
                <h2 className='text-white text-2xl'     >مرحباً بك بدر ... </h2>
                <p className='main-text text-xl'>مرحباً بعودتك الي النظام الخاص بك</p>

            </div>} />
            <div className={`${style.MainSystem} d-flex  `}>
                <Image width={"100%"} height={"100%"} src='../mainBackground.png' className={`${style.mainBackground} `} />


            </div>
        </section>

    )
}
