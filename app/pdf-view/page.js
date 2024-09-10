"use client"
import { PDFViewer } from "@react-pdf/renderer";
import Image from "next/image";
import Table from "../Table";
import MyDocument from "../MyDocument";

export default function PdfView() {
  return (
    <>
      <PDFViewer style={{ height: '100vh', width: '100vw' }}>
        <Table />
      </PDFViewer>
      <PDFViewer style={{ height: '100vh', width: '100vw' }}>
        <MyDocument />
      </PDFViewer>
    </>
  );
}