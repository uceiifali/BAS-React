import React from "react";
import Input from "../FormHandler/Input";

export const SearchComponent = ({ background, width, className }) => {
  return (
    <div className="d-flex  w-100  mt-3  justify-content-center">
      <Input
        background={background}
        height="37.06px"
        width={width}
        className={`border-0  search ${className}`}
        placeholder="Search..."
      />
    </div>
  );
};
