import React, { useState } from "react";
import { AllCategories } from "../../../../Components/System/AllCategories/AllCategories";
import SystemControler from "../../../../Components/System/SystemControler/SystemControler";
import { SearchComponent } from "../../../../Components/SearchComponent/SearchComponent";
import { Accordion } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

const AllCLients = () => {
  const [active, setActive] = useState();
  const insideCategories = {
    design: false,
    review: false,
  };
  const OutsideCategories = {
    design: false,
    review: false,
  };
  console.log(active);
  return (
    <section className="h-100">
      <SystemControler />
      <div className="row ">
        <div className="col-md-3">
          <AllCategories
            child={
              <div className="d-flex  flex-column   align-items-center ">
                <div className="mt-4 w-100">
                  <Link to={"/System/Clients/index"} className="pointer">
                    <p className=" text-white ">كل العملاء</p>
                  </Link>
                </div>

                <div className="pointer w-full mt-0">
                  {" "}
                  <div className="   d-flex  justify-content-center flex-column">
                    <Accordion defaultActiveKey={null}>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header
                          onClick={() => {
                            setActive(0);
                          }}
                          className={`${
                            active === 0
                              ? " border border-1 rounded-md hover:!border-[transparent]  !border-[#EFAA20] "
                              : "border-transparent"
                          }`}
                        >
                          <Link to={"System/Clients/Inside"}>الداخلي</Link>

                          <MdKeyboardArrowDown size={20} />
                        </Accordion.Header>

                        <Accordion.Body>
                          <div className="tabs d-flex justify-content-center align-items-center flex-column">
                            <Link to={"System/Clients/Inside/Design"}>
                              <div className="tab  text-end w-100">تصميم</div>
                            </Link>
                            <Link
                              className="w-100"
                              to={"System/Clients/Inside/Review"}
                            >
                              <div className="tab  text-end w-100">
                                الاشراف علي التنفيذ
                              </div>
                            </Link>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <Accordion defaultActiveKey={null}>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header
                          onClick={() => {
                            setActive(1);
                          }}
                          className={`${
                            active === 1
                              ? " border border-1 rounded-md  hover:!border-[transparent]   !border-[#EFAA20] "
                              : "border-transparent"
                          }`}
                        >
                          <Link to={"System/Clients/Outside"}>الخارجي</Link>

                          <MdKeyboardArrowDown size={20} />
                        </Accordion.Header>

                        <Accordion.Body>
                          <div className="tabs d-flex justify-content-center align-items-center flex-column">
                            <Link to={"System/Clients/Outside/Design"}>
                              <div className="tab  text-end w-100">تصميم</div>
                            </Link>
                            <Link
                              className="w-100"
                              to={"System/Clients/Outside/Review"}
                            >
                              <div className="tab  text-end w-100">
                                الاشراف علي التنفيذ
                              </div>
                            </Link>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
              </div>
            }
          />
        </div>
        <div className="col-md-9">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default AllCLients;
