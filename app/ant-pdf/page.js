"use client"
import { PDFViewer } from "@react-pdf/renderer";
import AntPdf from "./AntPdf";

export default function PdfView() {
  return (
    <>
      <PDFViewer style={{ height: '100vh', width: '100vw' }}>
        <AntPdf />
      </PDFViewer>
    </>
  );
}