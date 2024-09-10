"use client"

import Link from "next/link";
import PdfView from "./pdf-view/Page";


export default function Home() {
  const handlePdf = () => {
    const pdfBlob = new Blob([<PdfView />], { type: 'application/pdf' }, `My PDF.pdf`);
    console.log("pdfBlob",pdfBlob)
  }
  return (
    <>
      <button onClick={handlePdf}>Pdf</button>
      <Link href="/text-editor">Text Editor</Link>
    </>
  );
}
