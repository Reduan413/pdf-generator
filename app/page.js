"use client"
import { PDFViewer } from "@react-pdf/renderer";
import Image from "next/image";
import MyDocument from "./MyDocument";

export default function Home() {
  return (
    <PDFViewer style={{ height: '100vh', width: '100vw' }}>
      <MyDocument />
    </PDFViewer>
  );
}
