
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
// import logo from "@/public/logo.svg"

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 11,
  },
  table: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  cell: {
    width: '25%',
    fontWeight: '300',
    fontSize: '10px',
    color: '#000',
    textAlign: 'center',
    border: '1px solid black',
    padding: 4,
  },
  header: {
    color: '#fff',
    fontWeight: '700',
    fontSize: '12px',
    backgroundColor: '#000',
    border: '1px solid white',
  }
});
export default function Table() {
  return (
    <Document >
      <Page wrap size='A4' style={[styles.page, styles.table]}>
        <View fixed wrap style={[styles.row]}>
          <Text style={[styles.cell, styles.header]}>Column 1 Header</Text>
          <Text style={[styles.cell, styles.header]}>Column 2 Header</Text>
          <Text style={[styles.cell, styles.header]}>Column 3 Header</Text>
          <Text style={[styles.cell, styles.header]}>Column 4 Header</Text>
        </View>
        {
          Array(200).fill(0).map((_, index) => (
            <View wrap={false} style={[styles.row]}>
              {Array(4).fill(0).map((_, index2) => (
                <Text style={[styles.cell]}>Column {index2} Row {index}</Text>
              ))}
            </View>
          ))
        }
        <View fixed wrap style={[styles.row]}>
          <Text style={{ textAlign: 'center', padding: '10px' }}>Hello</Text>
        </View>
      </Page>
    </Document>
  );
}
