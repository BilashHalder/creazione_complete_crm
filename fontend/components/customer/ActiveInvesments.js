import React from 'react'
import { Document, Page, Text, View, StyleSheet,PDFViewer } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});


export default function ActiveInvesments() {
  const savePdf=()=>{
    console.log('save pdf');
  }
  return (
   <>
    <div>
 <PDFViewer>
    <MyDocument />
  </PDFViewer>
    </div>
    <button onClick={savePdf}>Save</button>
    </>
    
  )
}


const MyDocument=()=>{
  return(
    <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
  )
}