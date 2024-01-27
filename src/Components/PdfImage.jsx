import React, { useMemo } from "react";
import Pdf from "./Pdf";
import Image from "./Image";

const PdfImage = ({ openPdf, setOpenPdf, text = "", pdfSrc }) => {
  return (
    <div>
      {openPdf && pdfSrc && (
        <Pdf PdfFile={pdfSrc} openPdf={openPdf} setOpenPdf={setOpenPdf} />
      )}
      <div
        className="
      bg-[#151521]
      py-1
      px-3
      flex justify-center
      items-center
      rounded-md
      pointer
      overflow-hidden
      "
        onClick={() => {
          setOpenPdf(true);
        }}
      >
        <Image
          src={process.env.PUBLIC_URL + "/icons/Pdf.png"}
          alt="pdf"
          className="w-5 m-auto"
        />
      </div>
    </div>
  );
};

export default PdfImage;
