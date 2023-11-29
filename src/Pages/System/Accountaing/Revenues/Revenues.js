import React from 'react'
import styles from "./Revenues.module.css"
import PieChart from '../../../../Components/pieChart'
import ColumnChart from '../../../../Components/ColumnChart'
import { Image } from 'react-bootstrap'
import { ProgressBar } from "react-bootstrap"
const Revenues = () => {



    
    return (
        <div className='d-flex flex-column justify-content-between gap-5'>

            <div className={`${styles.RevenuesPieChartContainer}   `}>
                <p className='text-white text-start'>كل المطالبات</p>
                <PieChart colors={["#03795D", "#E40038"]} width={400} labels={[" تم الدفع 60 ", "لم يتم الدفع 20 ",]} series={[6, 3]} />


            </div>

            <fieldset className={`${styles.RevenuesColumnChartContainer}   `}>
                <legend className='text-white text-center'>كل المطالبات</legend>
                <div className={`${styles.revenuesbg}`}>    
                    <ColumnChart data={[2, 5, 8]} colors={["#fff"]} />
                    <div className='p-3 w-100  d-flex justify-content-between gap-4'>
                        <div className={`${styles.Revnueslider} `}>
                            <Image src={process.env.PUBLIC_URL + "/icons/deprtmants.png"} alt='deprtment img' />
                            <p className='text-[#A0AEC0]'>شركة / مؤسسة</p>
                            <span className='text-white'> 10</span>
                            <ProgressBar variant='warning' className='mt-1' now={37} />
                        </div>
                        <div className={`${styles.Revnueslider} `}>
                            <Image src={process.env.PUBLIC_URL + "/icons/deprtmants.png"} alt='deprtment img' />
                            <p className='text-[#A0AEC0]    '>حكومى / مستسمر </p>
                            <span className='text-white   '> 10</span>
                            <ProgressBar variant='warning' className='mt-1' now={37} />
                        </div>
                        <div className={`${styles.Revnueslider} `}>
                            <Image src={process.env.PUBLIC_URL + "/icons/deprtmants.png"} alt='deprtment img' />
                            <p className='text-[#A0AEC0]'> فردي </p>
                            <span className='text-white   '> 2</span>
                            <ProgressBar variant='warning' className='mt-1' now={37} />
                        </div>
                    </div>
                </div>

            </fieldset>

        </div>
    )
}

export default Revenues