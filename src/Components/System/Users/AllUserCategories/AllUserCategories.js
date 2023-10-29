import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'
import Select from '../../../FormHandler/Select'
import {MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBContainer } from 'mdb-react-ui-kit';

const AllUserCategories = () => {
    const saudiaRoles = [
        {
            label: "السعودية",
            value: "السعودية",
            options: [
                {
                    label: "مدير مكتب ",
                    value: "مدير مكتب  "
                },
                {
                    label: "مدير قسم ",
                    value: "مدير قسم  "
                },
                {
                    label: "موظف  ",
                    value: "موظف   "
                },

            ]
        },

    ];
    const egypetRoles = [
        {
            label: "مصر",
            options: [
                {
                    label: "مدير مكتب ",


                },
                {
                    label: "مدير قسم ",
                    value: "مدير قسم  "
                },
                {
                    label: "موظف  ",
                    value: "موظف   "
                },

            ]
        },

    ];

      const colourStyles = {
        placeholder: (defaultStyles) => {
            return {
                ...defaultStyles,
                color: 'rgba(255, 255, 255, 0.50)',
            }
        },
        control: styles => ({ ...styles, backgroundColor: '#2B2B40', border: "unset", color: 'rgba(255, 255, 255, 0.50);' }),
        option: (styles, { data, isDisabled, isFocused, isSelected, }) => {
            return {
                ...styles,

                color: 'rgba(255, 255, 255, 0.50);',
                backgroundColor: "#2B2B40",
                border: "none "

            }
        }

    }
     
    return (

        <div className='all-categories d-flex  flex-column  align-items-center '  >
            <Link className='pointer' to={"/System/AllUsers/AllCountries"}>
                <p className='text-center text-white py-2' >كل المستخدمين</p>
            </Link>

           <Link className='pointer' to="/System/AllUsers/Country/Saudia"> <div className='   d-flex  justify-content-center'>
            
            
           <MDBContainer className="d-flex justify-content-center mt-5 basic">
      <MDBDropdown>
        <MDBDropdownToggle className='choose-city'>السعودية</MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem >
            <Link   className='choose-city'    href="#">مدير مكتب</Link    >
          </MDBDropdownItem>
          <MDBDropdownItem>
            <Link   className='choose-city' href="#">مدير قسم</Link>
          </MDBDropdownItem>
          <MDBDropdownItem>
            <Link   className='choose-city' href="#">موظف &raquo;</Link>
            <ul className="dropdown-menu dropdown-submenu">
              <MDBDropdownItem>
                <Link href="#">حبيب</Link>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <Link href="#">مروة</Link>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <Link href="#">Submenu item 3 &raquo;</Link>
                <ul className="dropdown-menu dropdown-submenu">
                  <MDBDropdownItem>
                    <Link href="#">Multi level 1</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link href="#">Multi level 2</Link>
                  </MDBDropdownItem>
                </ul>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <Link href="#">Submenu item 4</Link>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <Link href="#">Submenu item 5</Link>
              </MDBDropdownItem>
            </ul>
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </MDBContainer>
            
 
            
            </div></Link>
           <Link className='pointer' to="/System/AllUsers/Country/egypet">     <div className=' pointer d-flex justify-content-center'><Select options={egypetRoles} placeholder="مصر " className="mt-3 pointer" styles={colourStyles} /></div></Link>


        </div>
    )
}

export default AllUserCategories