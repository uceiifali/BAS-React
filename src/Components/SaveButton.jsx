import React from "react";
import { Button } from "react-bootstrap";

const SaveButton = ({ onClick }) => {
  return (
    <div className=" d-flex justify-content-center">
      <Button onClick={onClick} type="submit" className="sumbmitAddUpdateUser">
        حفظ
      </Button>
    </div>
  );
};
export default SaveButton;
