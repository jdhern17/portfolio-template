import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { pdfjs } from "react-pdf";
import resumePDF from "./Hernandez_John_Resume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFCard = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <>
      <Document file={resumePDF} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
    </>
  );
};

export default PDFCard;
