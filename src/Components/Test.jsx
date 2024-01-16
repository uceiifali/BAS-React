import { useState } from "react";
import { Document, Page } from "react-pdf";

function Test() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file={process.env.PUBLIC_URL + "/example.pdf"}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page height={600} pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default Test;
