import React, { useState } from 'react'
import "./index.css"
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom'
import Select from '../../../FormHandler/Select'
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBContainer } from 'mdb-react-ui-kit';
import { PrimeIcons } from 'primereact/api';
import { TreeSelect } from 'primereact/treeselect';
import { useEffect } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';


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

    <div className='all-categories d-flex  flex-column   align-items-center '  >
      <Link className='pointer' to={"/System/AllUsers/AllCountries"}>
        <p className='text-center text-white py-2' >كل المستخدمين</p>
      </Link>

      <div className='pointer mt-0'  > <div className='   d-flex  justify-content-center flex-column'>



        {/* 
        <Accordion defaultActiveKey="0" />

        <Link
          id="flush-collapseOne" data-bs-parent="#accordionFlushExample"

          to="/System/AllUsers/Country/Saudia">

          <Accordion.Header>
            السعودية

          </Accordion.Header>


          <Accordion.Body>
            <TreeSelect
              className="accordion-item"
              placeholder='السعودية'
              onChange={(e) => setSelectedSaudiaNodeKey(e.value)}
              menuPlacement="top"
              closeMenuOnSelect={false}
              options={Saudianodes}
            ></TreeSelect>


          </Accordion.Body>

        </Link>
 */}
        <Accordion defaultActiveKey={openSaudiaUsers ? "0" : null}  >
          <Accordion.Item eventKey="0">
            <Link to="/System/AllUsers/Country/Saudia">
              <Accordion.Header onClick={handleOpenUsers} >
                <div>السعودية</div>


                <AiOutlineArrowDown size={20} />
              </Accordion.Header>
            </Link>


            <Accordion.Body>
              <div className='tabs d-flex justify-content-center align-items-center flex-column'>
                <div className='tab  text-end w-100'>
                  <Link to={"/System/users"}>         مدير مكتب</Link>

                </div>

                <Accordion defaultActiveKey={null}>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <div >
                        مدير قسم
                      </div>
                      <AiOutlineArrowDown size={20} />

                    </Accordion.Header>
                    <Accordion.Body>
                      <div className='tabs d-flex  flex-column'>
                        <div className='tab'>
                          مدني

                        </div>
                        <div className='tab'>
                          معماري

                        </div>


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
                      <AiOutlineArrowDown size={20} />
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className='tabs d-flex  flex-column'>
                        <div className='tab'>
                          مدني

                        </div>
                        <div className='tab'>
                          معماري

                        </div>


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

                <AiOutlineArrowDown size={20} />
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
                      <AiOutlineArrowDown size={20} />

                    </Accordion.Header>
                    <Accordion.Body>
                      <div className='tabs d-flex  flex-column'>
                        <div className='tab'>
                          مدني

                        </div>
                        <div className='tab'>
                          معماري

                        </div>


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
                      <AiOutlineArrowDown size={20} />
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className='tabs d-flex  flex-column'>
                        <div className='tab'>
                          مدني

                        </div>
                        <div className='tab'>
                          معماري

                        </div>


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
  )
}

export default AllUserCategories