import React from "react";
import SystemControler from "../../../Components/System/SystemControler/SystemControler";
import { Outlet } from "react-router-dom";

const Settings = () => {
  return (
    <div className="w-full">
      <SystemControler
        child={
          <button className="add-user-button text-white">اضافه جديدة</button>
        }
      />

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
