import React, { useState } from 'react'
import "./index.css"
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom'
import Select from '../../../FormHandler/Select'
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBContainer } from 'mdb-react-ui-kit';
import { PrimeIcons } from 'primereact/api';
import { TreeSelect } from 'primereact/treeselect';
import { useEffect } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { AllCategories } from '../../AllCategories/AllCategories';


const AllUserCategories = ({ countryName = "السعودية" }) => {
  const [openSaudiaUsers, setOpenSaudiaUsers] = useState(false)


  const handleOpenUsers = () => {

    if (openSaudiaUsers) {
      setOpenSaudiaUsers(false)
    } else {
      setOpenSaudiaUsers(true)
    }
  }




  return (

    <AllCategories child={
      <div className='d-flex  flex-column   align-items-center '>
        <Link className='pointer' to={"/System/AllUsers/AllCountries"}>
          <p className='text-center text-white py-2' >كل المستخدمين</p>
        </Link>

        <div className='pointer mt-0'  > <div className='   d-flex  justify-content-center flex-column'>



          <Accordion defaultActiveKey={openSaudiaUsers ? "0" : null}  >
            <Accordion.Item eventKey="0">
              <Link to="/System/AllUsers/Country/Saudia">
                <Accordion.Header onClick={handleOpenUsers} >
                  <div>السعودية</div>


                  <MdKeyboardArrowDown size={20} />
                </Accordion.Header>
              </Link>


              <Accordion.Body>
                <div className='tabs d-flex justify-content-center align-items-center flex-column'>
                <Link to={"/System/users"}>   
                  <div className='tab  text-end w-100'>
                         مدير مكتب

                  </div>
                  </Link>

                  <Accordion defaultActiveKey={null}>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>

                        <div >
                          مدير قسم
                        </div>
                        <MdKeyboardArrowDown size={20} />

                      </Accordion.Header>
                      <Accordion.Body>
                        <div className='tabs d-flex  flex-column'>
                        <Link to={"/System/users"}> 
                          <div className='tab'>
                            مدني

                          </div>
                          </Link>
                          <Link to={"/System/users"}> 
                          <div className='tab'>
                            معماري

                          </div>
                          </Link>


                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                  </Accordion>
                  <Accordion defaultActiveKey={null}>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        <div className='text-start' >
                          موظف
                        </div>
                        <MdKeyboardArrowDown size={20} />
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className='tabs d-flex  flex-column'>
                        <Link to={"/System/users"}> 
                          <div className='tab'>
                            مدني

                          </div>
                          </Link>
                          <Link to={"/System/users"}> 
                          <div className='tab'>
                            معماري

                          </div>
                          </Link>


                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                  </Accordion>
                </div>
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>
          <Accordion defaultActiveKey={null}  >
            <Accordion.Item eventKey="0">
              <Link to="/System/AllUsers/Country/egypet">
                <Accordion.Header>

                  <div>     مصر</div>

                  <MdKeyboardArrowDown size={20} />
                </Accordion.Header>
              </Link>

              <Accordion.Body>
                <div className='tabs d-flex justify-content-center align-items-center flex-column'>
                  <Link to={"/System/users"}>
                    <div className='tab  text-end w-100'>
                      مدير مكتب

                    </div>
                  </Link>
                  <Accordion defaultActiveKey={null}>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                      <Link to={"/System/users"}>
                        <div >
                          مدير قسم
                        </div>
                        </Link>
                        <MdKeyboardArrowDown size={20} />

                      </Accordion.Header>
                      <Accordion.Body>
                        <div className='tabs d-flex  flex-column'>
                        <Link to={"/System/users"}>
                          <div className='tab'>
                            مدني

                          </div>
                          </Link>
                          <Link to={"/System/users"}>
                          <div className='tab'>
                            معماري

                          </div>
                          </Link>

                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                  </Accordion>
                  <Accordion defaultActiveKey={null}>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        <div className='text-start' >
                          موظف
                        </div>
                        <MdKeyboardArrowDown size={20} />
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className='tabs d-flex  flex-column'>
                        <Link to={"/System/users"}>
                          <div className='tab'>
                            مدني

                          </div>
                          </Link>
                          <Link to={"/System/users"}>
                          <div className='tab'>
                            معماري

                          </div>
                          </Link>


                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                  </Accordion>
                </div>
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>


        </div>


        </div>

      </div>
    } />

  )
}

export default AllUserCategories



