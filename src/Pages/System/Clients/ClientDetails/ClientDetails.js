import React, { useState } from "react";
import "./index.css";
import { SearchComponent } from "../../../../Components/SearchComponent/SearchComponent";
import { Link, useParams } from "react-router-dom";
import { Button, Modal, NavDropdown } from "react-bootstrap";
import { BsPerson, BsTelephone } from "react-icons/bs";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import moment from "moment/moment";
import DataTableComponent from "../../../../Components/DataTableComponent.jsx";

import ShowClientDetails from "../../../../Components/System/Clients/ShowClient/ShowClientDetails";

const ClientDetails = () => {
  const [showProject, setShowProject] = useState(false);
  const [showClient, setShowClinet] = useState(false);
  const ClientDetailsTable = Array.from({ length: 2 }).map((_, index) => {
    return {
      id: 1,
      ProjectName: "BSA",
      ProjectNumber: "53543",
      projectType: "تصميم",
      DeliverDate: "12-10-2023",
      status: "قيد التنفيذ",
      display: (
        <img
          src={process.env.PUBLIC_URL + "/icons/view.png"}
          onClick={() => {
            setShowProject(true);
          }}
          className="display_project  rounded"
          alt=" display project"
        />
      ),
    };
  });
  const { id } = useParams();

  const columns = [
    {
      name: "م",
      selector: (row) => row.id,
    },
    {
      name: "اسم المشروع",
      selector: (row) => row.ProjectName,
    },
    {
      name: " رقم الطلب ",
      selector: (row) => row.ProjectNumber,
    },
    {
      name: "   نوع المشروع",
      selector: (row) => row.projectType,
    },
    {
      name: "تاريخ الاستلام  ",
      selector: (row) => row.DeliverDate,
    },

    {
      name: "    الحالة",
      selector: (row) => row.status,
    },
    {
      name: "    عرض",
      selector: (row) => row.display,
    },
  ];

  const [currentMonth, setCurrentMonth] = useState(false);
  const [employeeDetails, setEmployeeDetails] = useState("معلومات عامة");
  const [Montlyhwork, setMontlyhwork] = useState(new Date());
  console.log(Montlyhwork);
  return (
    <div className="row justify-content-around  ">
      <div className="col-md-3 all-clients-search-container">
        <SearchComponent background={"#161620 !important"} />

        <div className="d-flex justify-content-between mt-4 w-100">
          <p className=" text-white ">كل العملاء</p>

          <NavDropdown
            title={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
              >
                <path
                  d="M17 0H0L6.8 7.77417V13.1487L10.2 14.7923V7.77417L17 0Z"
                  fill="#D59921"
                />
              </svg>
            }
            className="fs-5 "
          >
            <NavDropdown.Item
              className="text-end  d-flex justify-content-between  align-items-center"
              href="#action/3.2"
            >
              <span> فردي</span>
            </NavDropdown.Item>
            <NavDropdown.Item
              className="text-end  d-flex justify-content-between align-items-center"
              href="#action/3.3"
            >
              <span> شركه</span>
            </NavDropdown.Item>
            <NavDropdown.Item
              className="text-end  d-flex justify-content-between align-items-center"
              href="#action/3.3"
            >
              <span> تجاري</span>
            </NavDropdown.Item>
            <NavDropdown.Item
              className="text-end  d-flex justify-content-between align-items-center"
              href="#action/3.3"
            >
              <span> مستثمر</span>
            </NavDropdown.Item>
          </NavDropdown>
        </div>

        <div className="all-clints-search-driver"></div>
        <Link to={"/System/ClintDetails/1"}>
          <div className="clintName">
            <p className="text-white mb-0">سلطان عبد الله</p>
            <p className="clint-type ">فردى</p>
          </div>
        </Link>
        <Link to={"/System/ClintDetails/2"}>
          <div className="clintName">
            <p className="text-white mb-0"> فهد عبد الرحمن</p>
            <p className="clint-type ">مستسمر</p>
          </div>
        </Link>
        <Link to={"/System/ClintDetails/3"}>
          <div className="clintName">
            <p className="text-white mb-0"> سعود بن حمد </p>
            <p className="clint-type ">شركة </p>
          </div>
        </Link>
      </div>
      <div className="col-md-8  p-3   client-details-Component">
        <div className="d-flex justify-content-end  ">
          <Button className="export-bg ms-2 ">تصدير CSV </Button>
          <Button className="export-bg ms-2"> تصدير Excel </Button>
        </div>
        <div className="d-flex flex-column">
          <div>
            <div className="d-flex gap-2">
              <BsPerson color="#FFF" size={30} />
              <p className="text-white">سلطان عبد الله</p>
            </div>
            <div className="d-flex  gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M2.39062 6.99999C2.39062 6.86415 2.44459 6.73387 2.54064 6.63781C2.6367 6.54176 2.76698 6.48779 2.90282 6.48779H11.0979C11.2338 6.48779 11.3641 6.54176 11.4601 6.63781C11.5562 6.73387 11.6101 6.86415 11.6101 6.99999C11.6101 7.13583 11.5562 7.26611 11.4601 7.36216C11.3641 7.45822 11.2338 7.51218 11.0979 7.51218H2.90282C2.76698 7.51218 2.6367 7.45822 2.54064 7.36216C2.44459 7.26611 2.39063 7.13583 2.39062 6.99999ZM2.90282 9.56096C2.76698 9.56096 2.6367 9.61493 2.54064 9.71098C2.44459 9.80704 2.39063 9.93732 2.39062 10.0732C2.39063 10.209 2.44459 10.3393 2.54064 10.4353C2.6367 10.5314 2.76698 10.5854 2.90282 10.5854H11.4394C11.5752 10.5854 11.7055 10.5314 11.8016 10.4353C11.8976 10.3393 11.9516 10.209 11.9516 10.0732C11.9516 9.93732 11.8976 9.80704 11.8016 9.71098C11.7055 9.61493 11.5752 9.56096 11.4394 9.56096H2.90282Z"
                  fill="white"
                  fill-opacity="0.3"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.10439 2.04878C3.38254 2.05083 2.78293 2.06244 2.29327 2.12868C1.67863 2.21063 1.16098 2.3882 0.749854 2.79863C0.338732 3.20976 0.162537 3.72741 0.0799024 4.34205C-1.01764e-08 4.93415 0 5.68741 0 6.62098V9.4278C0 10.3614 -1.01764e-08 11.1146 0.0799024 11.7067C0.161854 12.3214 0.339415 12.839 0.749854 13.2501C1.16098 13.6613 1.67863 13.8375 2.29327 13.9208C2.88537 14 3.63863 14 4.5722 14H9.4278C10.3614 14 11.1146 14 11.7067 13.9208C12.3214 13.8375 12.839 13.6613 13.2501 13.2501C13.6613 12.839 13.8375 12.3214 13.9208 11.7067C14 11.1146 14 10.3614 14 9.4278V6.62098C14 5.68741 14 4.93415 13.9208 4.34205C13.8375 3.72741 13.6613 3.20976 13.2501 2.79863C12.839 2.38751 12.3214 2.21132 11.7067 2.12868C11.2171 2.06244 10.6175 2.05083 9.89629 2.04946C9.85344 1.49183 9.60165 0.970924 9.19128 0.59094C8.78091 0.210956 8.24221 -9.50714e-05 7.68293 3.21276e-08H6.31707C5.75802 6.37385e-05 5.21958 0.211096 4.80937 0.590921C4.39916 0.970746 4.14739 1.49138 4.10439 2.04878ZM5.13424 2.04878H8.86576C8.8247 1.76435 8.68253 1.50423 8.4653 1.3161C8.24806 1.12796 7.97031 1.0244 7.68293 1.02439H6.31707C6.02969 1.0244 5.75194 1.12796 5.5347 1.3161C5.31747 1.50423 5.1753 1.76435 5.13424 2.04878ZM1.47444 12.5256C1.66361 12.7147 1.92859 12.8377 2.43054 12.9053C2.94546 12.9742 3.62976 12.9756 4.60976 12.9756H9.39024C10.3702 12.9756 11.0539 12.9742 11.5701 12.9053C12.0714 12.8377 12.3364 12.714 12.5256 12.5256C12.7147 12.3364 12.8377 12.0714 12.9053 11.5695C12.9742 11.0539 12.9756 10.3702 12.9756 9.39024V6.65854C12.9756 5.67854 12.9742 4.99424 12.9053 4.47863C12.8377 3.97737 12.714 3.71239 12.5256 3.52322C12.3364 3.33405 12.0714 3.21112 11.5695 3.14351C11.0539 3.07454 10.3702 3.07317 9.39024 3.07317H4.60976C3.62976 3.07317 2.94546 3.07454 2.42985 3.14351C1.92859 3.21112 1.66361 3.33473 1.47444 3.52322C1.28527 3.71239 1.16234 3.97737 1.09473 4.47932C1.02576 4.99424 1.02439 5.67854 1.02439 6.65854V9.39024C1.02439 10.3702 1.02576 11.0539 1.09473 11.5701C1.16234 12.0714 1.28595 12.3364 1.47444 12.5256Z"
                  fill="white"
                  fill-opacity="0.3"
                />
              </svg>
              <p>فردي</p>
            </div>
            <div className="d-flex  gap-2">
              <BsTelephone size={20} />

              <p>01123456789 </p>
            </div>
          </div>
        </div>
        <div className="main-text choose-inf position-relative d-flex gap-3 mx-2 my-3">
          <p
            className={`genral-inf ${
              employeeDetails == "معلومات عامة" && "inf-type"
            }`}
            onClick={() => {
              setEmployeeDetails("معلومات عامة");
            }}
          >
            معلومات عامة
          </p>
          <p
            className={`genral-inf ${
              employeeDetails == "مشاريع" && "inf-type"
            }`}
            onClick={() => {
              setEmployeeDetails("مشاريع");
            }}
          >
            {" "}
            مشاريع
          </p>
        </div>

        {employeeDetails == "معلومات عامة" ? (
          <div className="mx-2 ">
            <div className="clinte-details-square p-3">
              <p className="text-white mb-3">
                الاسم العميل : <span className="main-text">سلطان عبد الله</span>{" "}
              </p>
              <p className="text-white mb-3">
                {" "}
                نوع العميل : <span className="main-text">فردي</span>{" "}
              </p>
              <p className="text-white mb-3">
                {" "}
                البريد الأكترونى:{" "}
                <span className="main-text">Islam@bsa.com</span>{" "}
              </p>
              <p className="text-white mb-3">
                {" "}
                رقم الجوال: <span className="main-text">
                  {" "}
                  010123456789
                </span>{" "}
              </p>
              <p className="text-white mb-3">
                {" "}
                نوع الهوية :{" "}
                <span className="main-text"> ــــــــــــــــــ</span>{" "}
              </p>
              <p className="text-white mb-3">
                {" "}
                رقم الهوية :{" "}
                <span className="main-text"> ــــــــــــــــــ</span>{" "}
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="d-flex align-items-center">
              <svg
                onClick={() => {
                  setCurrentMonth(true);
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
              >
                <path
                  d="M17 0H0L6.8 7.77417V13.1487L10.2 14.7923V7.77417L17 0Z"
                  fill="#D59921"
                />
              </svg>
              <p className="text-white mx-4  my-2">الشهر الحالي</p>
              <svg
                onClick={() => {
                  setCurrentMonth(true);
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="9"
                viewBox="0 0 15 9"
                fill="none"
              >
                <path
                  d="M7.11297 8.52681C7.31302 8.7714 7.68698 8.7714 7.88703 8.52681L14.1933 0.816558C14.4604 0.490078 14.2281 9.53674e-07 13.8063 9.53674e-07L1.19369 9.53674e-07C0.771909 9.53674e-07 0.539624 0.490078 0.806656 0.816558L7.11297 8.52681Z"
                  fill="white"
                />
              </svg>

              {currentMonth && (
                <Modal
                  className="current_month d-flex align-items-center"
                  size="md"
                  aria-labelledby="contained-modal-title-vcenter"
                  onHide={() => setCurrentMonth(false)}
                  show={currentMonth}
                >
                  <Modal.Body>
                    <Calendar
                      onChange={(e) => {
                        setMontlyhwork(moment(e).format("MM/DD/YYYY"));
                        setCurrentMonth(false);
                      }}
                      value={Montlyhwork}
                    />
                  </Modal.Body>
                </Modal>
              )}
            </div>

            <div className="py-3        w-100  ">
              <DataTableComponent
                className={" border-golden  w-100  datatableComponent"}
                columns={columns}
                data={ClientDetailsTable}
              />
            </div>

            {showProject && (
              <ShowClientDetails
                showProject={showProject}
                setShowProject={setShowProject}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientDetails;
