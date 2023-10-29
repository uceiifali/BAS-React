import React, { useState } from 'react'
import "./index.css"
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom'
import Select from '../../../FormHandler/Select'
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBContainer } from 'mdb-react-ui-kit';
import { PrimeIcons } from 'primereact/api';
import { TreeSelect } from 'primereact/treeselect';
import { useEffect } from 'react';


const AllUserCategories = ({ countryName = "السعودية" }) => {

  const [Saudianodes, setSaudiaNodes] = useState(null);
  const [selectedSaudiaNodeKey, setSelectedSaudiaNodeKey] = useState(null);
  const saudiaNodeService = {
    getTreeNodesData() {

      return [
        {
          key: '0',
          label: 'مدير مكتب',
          data: 'مدير مكتب',
          icon: 'pi pi-fw pi-inbox',

        },
        {
          key: '1',
          label: 'مدير قسم',
          data: 'مدير قسم ',
          icon: 'pi-angle-left',
          children: [
            { key: '1-0', label: 'معماري', icon: 'pi-chevron-left', data: 'معماري' },
            { key: '1-1', label: 'مدني', icon: 'pi-chevron-left', data: 'مدني' },
            { key: '1-2', label: 'كهربا', icon: 'pi-chevron-left', data: 'كهربا' }
          ]
        },
        {
          key: '2',
          label: 'موظفين',
          data: ' موظفين',
          icon: 'pi pi-fw pi-star-fill',
          children: [


            { key: '2-0-0', label: 'مدني', icon: 'pi pi-fw pi-video', data: 'مدني ' },
            { key: '2-0-1', label: 'معماري', icon: 'pi pi-fw pi-video', data: 'معماري ' }



          ]
        }
      ];
    },



    getTreeTableNodes() {
      return Promise.resolve(this.getTreeTableNodesData());
    },

    getTreeNodes() {
      return Promise.resolve(this.getTreeNodesData());
    }

  };


  const [egypetnodes, setEgypetNodes] = useState(null);
  const [selectedEgypetNodeKey, setSelectedEgypetNodeKey] = useState(null);
  const egypetNodeService = {
    getTreeNodesData() {
      return [
        {
          key: '0',
          label: 'مدير مكتب',
          data: 'مدير مكتب',
          icon: 'pi pi-fw pi-inbox',

        },
        {
          key: '1',
          label: 'مدير قسم',
          data: 'مدير قسم ',
          icon: 'pi-angle-left',
          children: [
            { key: '1-0', label: 'معماري', icon: 'pi-chevron-left', data: 'معماري' },
            { key: '1-1', label: 'مدني', icon: 'pi-chevron-left', data: 'مدني' },
            { key: '1-2', label: 'كهربا', icon: 'pi-chevron-left', data: 'كهربا' }
          ]
        },
        {
          key: '2',
          label: 'موظفين',
          data: ' موظفين',
          icon: 'pi pi-fw pi-star-fill',
          children: [


            { key: '2-0-0', label: 'مدني', icon: 'pi pi-fw pi-video', data: 'مدني ' },
            { key: '2-0-1', label: 'معماري', icon: 'pi pi-fw pi-video', data: 'معماري ' }



          ]
        }
      ];
    },



    getTreeTableNodes() {
      return Promise.resolve(this.getTreeTableNodesData());
    },

    getTreeNodes() {
      return Promise.resolve(this.getTreeNodesData());
    }

  };
  console.log(selectedEgypetNodeKey)

  useEffect(() => {
    egypetNodeService.getTreeNodes().then((data) => setEgypetNodes(data));
    saudiaNodeService.getTreeNodes().then((data) => setSaudiaNodes(data));
  }, []);





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
        <Accordion defaultActiveKey={null}  >
          <Accordion.Item eventKey="0">
            <Link to="/System/AllUsers/Country/Saudia">
              <Accordion.Header>

                السعودية

              </Accordion.Header>
            </Link>
            <Accordion.Body>
              <div className='tabs d-flex justify-content-center align-items-center flex-column'>
                <div className='tab text-end w-100'>
                  <Link to={"/System/users"}>         مدير مكتب</Link>

                </div>

                <Accordion defaultActiveKey={null}>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <div >
                        مدير قسم
                      </div>
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
        <Accordion defaultActiveKey={null} >
          <Accordion.Item eventKey="1">
            <Link to="/System/AllUsers/Country/egypet">
              <Accordion.Header>

                مصر

              </Accordion.Header>
            </Link>
            <Accordion.Body>
              <div className='tabs d-flex justify-content-center align-items-center flex-column'>
                <div className='tab text-end w-100'>
                  <Link to={"/System/users"}>         مدير مكتب</Link>

                </div>

                <Accordion defaultActiveKey={null}>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <div >
                        مدير قسم
                      </div>
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