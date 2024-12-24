"use client"
import { PDFViewer } from "@react-pdf/renderer";
import BusinessProposal from "./BusinessProposal";

export default function PdfView() {
  return (
    <>
      <PDFViewer style={{ height: '100vh', width: '100vw' }}>
        <BusinessProposal />
      </PDFViewer>
    </>
  );
}