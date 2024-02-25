import React, { useContext, useState } from "react";
import "./index.css";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import Select from "../../../FormHandler/Select";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBContainer,
} from "mdb-react-ui-kit";
import { PrimeIcons } from "primereact/api";
import { TreeSelect } from "primereact/treeselect";
import { useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AllCategories } from "../../AllCategories/AllCategories";
import { UsersParamsContext } from "../../../../Context/UsersParamsContext";

const AllUserCategories = ({ countryName = "السعودية" }) => {
  const {params,setParams} = useContext(UsersParamsContext);
  const [openSaudiaUsers, setOpenSaudiaUsers] = useState(false);
  const [active, setActive] = useState();

  const handleOpenUsers = () => {
    if (openSaudiaUsers) {
      setOpenSaudiaUsers(false);
    } else {
      setOpenSaudiaUsers(true);
    }
  };

  return (
    <AllCategories
      child={
        <div className="d-flex  flex-column   align-items-center ">
          <Link className="pointer" to={"/System/Users/index"}>
            <p className="text-center text-white py-2">كل المستخدمين</p>
          </Link>

          <div className="pointer !w-full mt-0">
            {" "}
            {/* 
            role : enum: [        "موظف",        "مدير",        "مدقق",        "مدير المكتب",        "مدير قسم",        "محاسب",        مواردبشرية",        "أدارى",      ],
            */}
            <div className="   d-flex  justify-content-center flex-column">
              <Accordion defaultActiveKey={openSaudiaUsers ? "0" : null}>
                <Accordion.Item eventKey="0">
                  <Link to="/System/AllUsers/Country/Saudia">
                    <Accordion.Header
                      className={`  ${
                        active === 0 &&
                        " border border-1 rounded-md   !border-[#EFAA20] hover:!border-[transparent] "
                      }`}
                      onClick={() => {
                        handleOpenUsers();
                        setParams({country: "السعودية"})
                        setActive(0);
                      }}
                    >
                      <div>السعودية</div>

                      <MdKeyboardArrowDown size={20} />
                    </Accordion.Header>
                  </Link>

                  <Accordion.Body>
                    <div className="tabs d-flex justify-content-center align-items-center flex-column">
                        <div className="tab  text-end w-100" onClick={()=> setParams({role: "مدير المكتب"})}>مدير مكتب</div>

                      <Accordion defaultActiveKey={null}>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header onClick={()=> setParams({role: "مدير قسم"})}>
                            <div>مدير قسم</div>
                            <MdKeyboardArrowDown size={20} />
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="tabs d-flex  flex-column">
                                <div className="tab">مدني</div>
                                <div className="tab">معماري</div>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      <Accordion defaultActiveKey={null}>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header onClick={()=> setParams({role: "موظف"})}>
                            <div className="text-start">موظف</div>
                            <MdKeyboardArrowDown size={20} />
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="tabs d-flex  flex-column">
                                <div className="tab">مدني</div>
                                <div className="tab">معماري</div>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey={null}>
                <Accordion.Item eventKey="0">
                  <Link to="/System/AllUsers/Country/egypet">
                    <Accordion.Header
                      className={`  ${
                        active === 1 &&
                        " border border-1 rounded-md   !border-[#EFAA20]   hover:!border-[transparent]"
                      }`}
                      onClick={() => {
                        setActive(1);
                        setParams({country: "مصر"})
                      }}
                    >
                      <div> مصر</div>

                      <MdKeyboardArrowDown size={20} />
                    </Accordion.Header>
                  </Link>

                  <Accordion.Body>
                    <div className="tabs d-flex justify-content-center align-items-center flex-column">
                        <div className="tab  text-end w-100" onClick={()=> setParams({role: "مدير المكتب"})}>مدير مكتب</div>
                      <Accordion defaultActiveKey={null}>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header onClick={()=> setParams({role: "مدير قسم"})}>
                              <div className="" >مدير قسم</div>

                              <MdKeyboardArrowDown size={20} />
                            </Accordion.Header>
                          <Accordion.Body>
                            <div className="tabs d-flex  flex-column">
                                <div className="tab">مدني</div>
                                <div className="tab">معماري</div>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      <Accordion defaultActiveKey={null}>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header onClick={()=> setParams({role: "موظف"})}>
                            <div className="text-start">موظف</div>
                            <MdKeyboardArrowDown size={20} />
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="tabs d-flex  flex-column">
                                <div className="tab">مدني</div>
                                <div className="tab">معماري</div>
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
      }
    />
  );
};

export default AllUserCategories;
