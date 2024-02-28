import React from "react";
import style from "./ExpensesDetails.module.css";
import "./ExpensesDetails.css";
import { useState } from "react";
import { Image, Modal } from "react-bootstrap";
import Calendar from "react-calendar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ShowExpensesDetails from "../../../../../Components/System/Accountaing/showExpensesDetials/ShowExpensesDetials";
import { useContext } from "react";
import { addAccountType } from "../../../../../Context/AddAccountaing";
import AddExpensesReports from "../../../../../Components/System/Accountaing/AddExpensesReports/AddExpensesReports";
import AddItems from "../../../../../Components/System/Accountaing/AddItems/AddItems";
import { TableCell } from "../../../../../Components/Table/TableCell.jsx";
import { TableRow } from "../../../../../Components/Table/TableRow.jsx";
import CustomTable from "../../../../../Components/Table/index.jsx";
import { useGetAllExpensesItems } from "../../../../../hooks/fetchers/Expenses-items.js";
import moment from "moment";
import BillIcon from "../../../../../assets/Bill_icon.jsx";

const ExpensesDetails = () => {
  // handle search by Date

  const [chooseDate, setChooseDate] = useState(false);
  const [cleanValue, setCleanValue] = useState(new Date());
  const [openDisplayDetails, setOpenDisplayDetails] = useState(false);
  const [openBill, setOpenBill] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onViewClick = (item) => {
    setOpenDisplayDetails(true);
    setSelectedItem(item);
  };

  const { data: expensesData } = useGetAllExpensesItems();

  const handleCleanValue = (e) => {
    setCleanValue(e);
    setChooseDate(false);
  };

  // handleIncomingData
  const { ExpensesType } = useParams();

  const columns = [
    {
      name: "م",
      selector: (row) => row.id,
    },
    {
      name: " اسم التقرير ",
      selector: (row) => row.ReportName,
    },
    {
      name: "  البند  ",
      selector: (row) => row.clause,
    },
    {
      name: "   تاريخ الاستحقاق  ",
      selector: (row) => row.DueDate,
    },
    {
      name: "  عرض  ",
      selector: (row) => row.display,
    },

    {
      name: "تقارير المصروفات",
      selector: (row) => row.ExpensesReports,
    },
  ];

  // handle Context

  const {
    accountaingType,
    setAccountaingType,
    openAddAccountant,
    setOpenAddAccountant,
  } = useContext(addAccountType);

  // fetch Data based on params

  useEffect(() => {
    setOpenDisplayDetails(false);
    setOpenAddAccountant(false);
    setAccountaingType(ExpensesType);
  }, [ExpensesType]);

  return (
    <div className="ExpensesDetails">
      {openAddAccountant && accountaingType === "ExpensesReports" ? (
        <AddExpensesReports />
      ) : openAddAccountant && accountaingType === "Items" ? (
        <AddItems />
      ) : (
        <>
          {openBill && (
            <Modal
              className="d-flex claimModal align-items-center jusify-content-center"
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              onHide={() => setOpenBill(false)}
              show={openBill}
            >
              <Modal.Body className="d-flex align-items-center">
                <Image
                  src={`${process.env.PUBLIC_URL + "/expenses.png"}`}
                  alt="FinancalRequest png"
                  width={650}
                  height={700}
                />
              </Modal.Body>
            </Modal>
          )}
          {openDisplayDetails ? (
            <ShowExpensesDetails
              selectedItem={selectedItem}
              setOpenDisplayDetails={setOpenDisplayDetails}
            />
          ) : (
            <>
              {chooseDate && (
                <Modal
                  className=" InvoiceDate"
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  onHide={() => setChooseDate(false)}
                  show={chooseDate}
                >
                  <Modal.Body className="d-flex align-items-center">
                    <Calendar
                      onChange={handleCleanValue}
                      className={"bg-[#1E1E2D]"}
                      value={cleanValue}
                    />
                  </Modal.Body>
                </Modal>
              )}
              <div
                className={`w-100 ${style.ExpensesNumbersContainer} mb-4 P-4`}
              >
                <div className=" d-flex  gap-3">
                  <svg
                    onClick={() => {
                      setChooseDate(true);
                    }}
                    className="pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                  >
                    <path
                      d="M17.4375 0.438965H0.4375L7.2375 8.21314V13.5877L10.6375 15.2313V8.21314L17.4375 0.438965Z"
                      fill="#D59921"
                    />
                  </svg>
                  {ExpensesType === "ExpensesReports" ? (
                    <p className="text-white "> اجمالى عدد المصروفات : </p>
                  ) : (
                    <p className="text-white "> اجمالي اصناف الشهر الحالي : </p>
                  )}
                </div>
                <div className="Treasury-container-numbers d-flex justify-content-center text-white">
                  <p>12600</p>
                </div>
              </div>
              <fieldset className={`${style.ExpensesDataTableContainer}`}>
                {ExpensesType === "ExpensesReports" ? (
                  <legend className="text-center">تقارير المصروفات</legend>
                ) : (
                  <legend className="text-center"> الاصناف</legend>
                )}

                <div className="mt-3 !h-[400px] overflow-scroll scrollbar-none">
                  <CustomTable
                    columns={columns}
                    data={expensesData?.data?.batches}
                  >
                    {expensesData?.data?.batches &&
                    expensesData?.data?.batches.length > 0
                      ? expensesData?.data?.batches.map(
                          (item, index) =>
                            !item.isisDeleted && (
                              <TableRow
                                className={`my-2 border !border-[#efaa207f] ${
                                  index % 2 === 0 ? "bg-[#151521]" : ""
                                }`}
                                key={index}
                              >
                                <TableCell textColor="#ffffff7f">
                                  {item.codeBatche}
                                </TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.clause}</TableCell>
                                <TableCell>
                                  {moment(item.dateCreated).format(
                                    "YYYY-MM-DD"
                                  )}
                                </TableCell>
                                <TableCell>
                                  <div
                                    className=""
                                    onClick={() => onViewClick(item)}
                                  >
                                    <img
                                      src={
                                        process.env.PUBLIC_URL +
                                        "/icons/view.png"
                                      }
                                      className="pointer"
                                      alt="view icon"
                                    />
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <div
                                    onClick={() => {
                                      setOpenBill(true);
                                    }}
                                    className="pointer d-flex justfiy-content-center w-100"
                                  >
                                    <BillIcon />
                                  </div>
                                </TableCell>
                              </TableRow>
                            )
                        )
                      : null}
                  </CustomTable>
                </div>
              </fieldset>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ExpensesDetails;
