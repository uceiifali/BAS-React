import React from "react";

export const SearchComponent = ({ background, width, className, value }) => {
  return (
    <div className="d-flex  w-100  mt-3  justify-content-center">
      <input
        className={`border-0  bg-[#1B1B29] rounded-[7.721px] h-[37.06px] !text-white p-3 search ${className}`}
        placeholder="بحث..."
      />
    </div>
  );
};
