import React from "react";
import SystemControler from "../../../Components/System/SystemControler/SystemControler";
import { Outlet } from "react-router-dom";

const Settings = () => {
  return (
    <div className="w-full">
      <SystemControler
        child={
          <button className="add-user-button rounded-md text-white">إضافة جديدة</button>
        }
      />

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
