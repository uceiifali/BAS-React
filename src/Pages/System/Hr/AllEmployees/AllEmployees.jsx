import style from "./AllEmployees.module.css";

import React, { useContext, useEffect } from "react";
import { AddHrType } from "../../../../Context/AddHr";
import AddUpdateUser from "../../../../Components/System/Hr/AddUpdateUser/AddUpdateUser";
import CountryChartHR from "../CountryChartHR/CountryChartHR";

const AllEmployees = () => {
  const { openHr, setOpenHr, HrType, setHrType } = useContext(AddHrType);

  useEffect(() => {
    setHrType("Employees");
  }, [openHr, HrType]);

  return (
    <div>
      {openHr === true && HrType === "Employees" ? (
        <AddUpdateUser />
      ) : (
        <CountryChartHR />
      )}
    </div>
  );
};

export default AllEmployees;
