import React from 'react'
import "../style.css"
import { SearchComponent } from '../../../../Components/SearchComponent/SearchComponent'
import { Link } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'

import InsideClientPieChart from '../../../../Components/System/Clients/InsideClientChart/InsideClientPieChart'
import InsideClientLineChart from '../../../../Components/System/Clients/InsideClientChart/InsideClientLineChart'
const InsideClients = () => {



    return (
        <div className='row justify-content-around  '>

            <div className='col-md-3 all-clients-search-container'>


                <SearchComponent background={"#161620 !important"} />

                <div className='d-flex justify-content-between mt-4 w-100'>
                    <Link to={"/System/Allclients"} className='pointer' >
                        <p className=' text-white '>
                            كل العملاء
                        </p>


                    </Link>
                    <NavDropdown title={
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                            <path d="M17 0H0L6.8 7.77417V13.1487L10.2 14.7923V7.77417L17 0Z" fill="#D59921" />
                        </svg>

                    } className='fs-5 ' >

                        <NavDropdown.Item className='text-end  d-flex justify-content-between  align-items-center' href="#action/3.2">
                            <span>   فردي</span>

                        </NavDropdown.Item>
                        <NavDropdown.Item className='text-end  d-flex justify-content-between align-items-center' href="#action/3.3">
                            <span> شركه</span>

                        </NavDropdown.Item>
                        <NavDropdown.Item className='text-end  d-flex justify-content-between align-items-center' href="#action/3.3">
                            <span> تجاري</span>

                        </NavDropdown.Item>
                        <NavDropdown.Item className='text-end  d-flex justify-content-between align-items-center' href="#action/3.3">
                            <span> مستثمر</span>

                        </NavDropdown.Item>



                    </NavDropdown>
                </div>

                <div className='all-clints-search-driver inside-Search'></div>
                <Link to={"/System/ClintDetails/1"}>
                    <div className='clintName'>
                        <p className='text-white mb-0'>سلطان عبد الله</p>
                        <p className='clint-type '>فردى</p>

                    </div>
                </Link>
                <Link to={"/System/ClintDetails/2"}>
                    <div className='clintName'>
                        <p className='text-white mb-0'> فهد عبد الرحمن</p>
                        <p className='clint-type '>مستسمر</p>

                    </div>

                </Link>
                <Link to={"/System/ClintDetails/3"}><div className='clintName'>
                    <p className='text-white mb-0'>  سعود بن حمد </p>
                    <p className='clint-type '>شركة </p>

                </div></Link>

            </div>
            <div className='col-md-8     category-client-Component'>

                <div className='insideChart p-4 h-100 d-flex  justify-content-between  align-items-center flex-column'>
                    <div className='AllRequestsPieChartContainer w-100  d-flex flex-column align-items-center justify-content-center' >
                        <p className='text-white' style={{ fontSize: '24px' }}>الداخلي</p>
                        <InsideClientPieChart />

                    </div>
                    <div className='AllRequestsLineChartContainer w-100  d-flex align-items-center justify-content-center' >

                        <InsideClientLineChart />
                    </div>






                </div>


            </div>
        </div>
    )
}

export default InsideClients