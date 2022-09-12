import React from 'react'
import PaymentInfo from './PaymentInfo'
import { PDFViewer } from '@react-pdf/renderer';
export default function CustomerProfile() {
  return (
    <div>
      <PDFViewer style={{ flex: 1,width:"100%",height:"400px" }}><PaymentInfo/></PDFViewer> </div>
  )
}
