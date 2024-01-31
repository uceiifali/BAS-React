import React from "react";

export default function UploadFile() {
  return (
    <label className="cursor-pointer bg-[#252538] rounded-[7px] w-28 h-32 flex justify-center items-center">
      <input type="file" className="hidden" />
      <img src="/icons/Pdf.png" alt="" className="w-7" />
    </label>
  );
}
