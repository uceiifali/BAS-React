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
      w-[53.361px]
      h-[35px]
      flex justify-center
      rounded-md
      pointer
      "
        onClick={() => {
          setOpenPdf(true);
        }}
      >
        <Image
          src={process.env.PUBLIC_URL + "/icons/Pdf.png"}
          alt="pdf"
          className="pdfImage m-auto"
        />
      </div>
    </div>
  );
};

export default PdfImage;
