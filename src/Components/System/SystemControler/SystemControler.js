import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Calculator from "../../../Pages/System/Plans/components/Calculator";
const SystemControler = ({ child }) => {
  const [showCalculator, setShowCalculator] = useState(false);
  const handleCloseCalculator = () => setShowCalculator(false);
  const handleShowCalculator = () => setShowCalculator(true);
  return (
    <>
    <div className="user-control-model mb-4 d-flex align-items-center x-4 justify-content-between">
      <div className="me-2  w-100">{child}</div>
      <div className="icons ms-3 d-flex gap-2">
        <IconButton onClick={handleShowCalculator} aria-label="calculator">
          <img
            src={process.env.PUBLIC_URL + "/icons/Calculator.png"}
            alt="Calculator img"
            className="pointer system-notification mx-1"
          />
        </IconButton>


      






        <IconButton aria-label="messages">
          <img
            src={process.env.PUBLIC_URL + "/icons/messages.png"}
            alt="messages img"
            className="pointer system-notification mx-1"
          />
        </IconButton>

        <IconButton aria-label="notification">
          <img
            src={process.env.PUBLIC_URL + "/icons/notification.png"}
            alt="notification img"
            className="pointer system-notification mx-1"
          />
        </IconButton>
      </div>
    </div>
    
    
    
    <Calculator
      show={showCalculator} 
      onClose={handleCloseCalculator}
      />
    </>
  );
};
export default SystemControler;
