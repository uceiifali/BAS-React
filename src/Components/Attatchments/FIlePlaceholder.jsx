import React from "react";

export default function FIlePlaceholder({ title , titleProps }) {
  return (
    <div className="flex flex-col items-center justify-center bg-[#252538] rounded-[7px]" >
      <div className="bg-[#151521] flex justify-center items-center w-24 h-16 rounded-[7px]">
        <img
          src={process.env.PUBLIC_URL + "/icons/Pdf.svg"}
          alt="pdf"
          className="w-8 translate-x-1"
        />
      </div>
      {title && <p className="text-sm text-white py-1" {...titleProps}>{title}</p>}
    </div>
  );
}
