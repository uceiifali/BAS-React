import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'
import Select from '../../../FormHandler/Select'
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBContainer } from 'mdb-react-ui-kit';

const AllUserCategories = ({ countryName = "السعودية" }) => {



  return (

    <div className='all-categories d-flex  flex-column  align-items-center '  >
      <Link className='pointer' to={"/System/AllUsers/AllCountries"}>
        <p className='text-center text-white py-2' >كل المستخدمين</p>
      </Link>

      <div className='pointer mt-0' > <div className='   d-flex  justify-content-center'>


        <MDBContainer className="d-flex justify-content-center  basic">
          <MDBDropdown>
            <Link to="/System/AllUsers/Country/Saudia">
              <MDBDropdownToggle className='choose-city'>السعودية</MDBDropdownToggle>
            </Link>
            <MDBDropdownMenu>
              <MDBDropdownItem >
                <div className='choose-city' >مدير مكتب
                <svg className='mx-2' xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8" fill="none">
                     <path d="M4.5 7.5L0.5 4L4.5 0.5" stroke="white" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div    >
                <ul className="dropdown-menu dropdown-submenu">
                  <MDBDropdownItem>
                    <Link href="/System/users">م.اشرف</Link>
                  </MDBDropdownItem>

                </ul>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <div className='choose-city' >مدير قسم
                <svg className='mx-2' xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8" fill="none">
                    <path d="M4.5 7.5L0.5 4L4.5 0.5" stroke="white" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                
                </div>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <div className='choose-city' >موظف <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8" fill="none">
                  <path d="M4.5 7.5L0.5 4L4.5 0.5" stroke="white" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg></div>
                <ul className="dropdown-menu dropdown-submenu">
                <Link href="/System/users"
              >
                
                <MDBDropdownItem>
                حبيب
                  </MDBDropdownItem>
                </Link>
                  
                  <MDBDropdownItem>
                    <Link href="/System/users">مروة</Link>
                  </MDBDropdownItem>

                </ul>
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBContainer>



      </div></div>
      <div className='pointer' >
        <MDBContainer className="d-flex justify-content-center mt-3 basic">
          <MDBDropdown>
            <Link to="/System/AllUsers/Country/egypet">
              <MDBDropdownToggle className='choose-city'>مصر</MDBDropdownToggle>
            </Link>
            <MDBDropdownMenu>
              <MDBDropdownItem >
                <div className='choose-city' >مدير مكتب

                  <svg className='mx-2' xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8" fill="none">
                    <path d="M4.5 7.5L0.5 4L4.5 0.5" stroke="white" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </div    >
                <ul className="dropdown-menu dropdown-submenu">

                  <Link to="/System/users">
                    <MDBDropdownItem>
                      م.اشرف  
                    </MDBDropdownItem></Link>


                </ul>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <div className='choose-city'>مدير قسم
                  <svg className='mx-2' xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8" fill="none">
                    <path d="M4.5 7.5L0.5 4L4.5 0.5" stroke="white" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <ul className="dropdown-menu dropdown-submenu">
                  <MDBDropdownItem>
                    <Link href="/System/users">م.اسلام</Link>
                  </MDBDropdownItem>


                </ul>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <div className='choose-city' href="/System/users">موظف <svg className='mx-2' xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8" fill="none">
                  <path d="M4.5 7.5L0.5 4L4.5 0.5" stroke="white" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg></div>
                <ul className="dropdown-menu dropdown-submenu">
                  <MDBDropdownItem>
                    <Link href="/System/users">حبيب</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link href="/System/users">مروة</Link>
                  </MDBDropdownItem>

                </ul>
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBContainer>
      </div>



    </div>
  )
}

export default AllUserCategories