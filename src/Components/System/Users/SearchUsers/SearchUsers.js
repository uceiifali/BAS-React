import React from 'react'
import Input from '../../../FormHandler/Input'
import { NavDropdown } from 'react-bootstrap'

const SearchUsers = () => {

    const users = Array.from({ length: 15 })
    return (
        <div>
            <div className='search-users '>

                <div className='d-flex   justify-content-center'>     <Input background='#2B2B40' height='37.06px' width='166px' className='border-0  search' placeholder="Search..." /></div>

                <div className='d-flex justify-content-between m-2'>
                    <p className='text-center ' >كل المستخدمين</p>
                    <NavDropdown title={<svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                        <path d="M17 0H0L6.8 7.77417V13.1487L10.2 14.7923V7.77417L17 0Z" fill="#D59921" />
                    </svg>} className='    fs-5 ' id="collapsible-nav-dropdown">

                        <NavDropdown.Item className='text-end  d-flex justify-content-between  align-items-center' href="#action/3.2">
                            <span>   متصل</span>
                            <div className='connected' />
                        </NavDropdown.Item>
                        <NavDropdown.Item className='text-end  d-flex justify-content-between align-items-center' href="#action/3.3">
                            <span>غير متصل</span>
                            <div className='not-connected ' />
                        </NavDropdown.Item>



                    </NavDropdown>


                </div>
                {users.map((user, index) => <div key={index} className='tab d-flex   '>

                    <img src='../People/islam.jpg' alt='user img ' className='user-img  ' />
                    <div className='d-flex flex-column me-3 '>
                        <h2 className=' name-header     my-0    '>اسلام إيهاب</h2>
                        <p className='main-text'>Islam@bsa.com</p>
                    </div>

                </div>


                )
                }



            </div>
        </div>
    )
}

export default SearchUsers
