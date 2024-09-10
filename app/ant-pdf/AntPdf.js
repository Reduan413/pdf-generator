
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import Background from "@/public/page-bg.jpg"
// import logo from "@/public/logo.svg"

// Create styles
const styles = StyleSheet.create({
    page: {
        padding: 20,
        position: 'relative', // Ensure positioning is relative to layer content
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: "20px",
        bottom: 0,
        width: '596px',
        height: '105%',
        objectFit: '100% 100%',
        zIndex: -1, // Ensure background image is behind content
    },
    invoiceTop: {
        marginTop: "40px"
    },
    billInfo: {
        display: 'flex',
        flexDirection: 'row',
        padding: "0 10px",
        justifyContent: "space-between"
    },
    billTo: {
        width: "35%"
    },
    billFrom: {
        width: "35%"
    },
    billId: {
        width: "35%",
        marginTop: "16px"
    },
    billDate: {
        width: "35%",
        marginTop: "16px"
    },
    billTitel1: {
        // fontFamily: "Plus Jakarta Sans"
        fontWeight: "500",
        fontSize: "14px",
        // lineHeight:"17px",
        color: "#777777",
        marginTop: "5px"
    },
    billTitel2: {
        // fontFamily: "Plus Jakarta Sans"
        fontWeight: "600",
        fontSize: "16px",
        // lineHeight:"17px",
        color: "#232323",
        marginTop: "5px"
    },
    billTitel3: {
        // fontFamily: "Plus Jakarta Sans"
        fontWeight: "500",
        fontSize: "12px",
        // lineHeight:"17px",
        color: "#999999",
        marginTop: "5px"
    },
    billSubject: {
        display: 'flex',
        flexDirection: 'row',
        padding: "4px 10px",
        borderTop: "1px solid #D3D3D3",
        marginTop: "18px"
    },
    invoiceDetail: {
        marginTop: "45px",
        // height: "30%"
    },
    tableTitle: {
        color: '#999999',
        fontWeight: '500',
        fontSize: '12px',
        marginBottom: "10px",
        marginLeft: "5px"
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
    cell1: {
        width: '8%',
        textAlign: 'center',
        padding: "10px 5px",
        border: '1px solid #D3D3D3',
        minHeight: 30,
    },
    cell2: {
        width: '30%',
        textAlign: 'center',
        padding: "10px 5px",
        border: '1px solid #D3D3D3',
        minHeight: 30,

    },
    cell3: {
        width: '15%',
        textAlign: 'center',
        padding: "10px 5px",
        border: '1px solid #D3D3D3',
        minHeight: 30,
    },
    cell4: {
        width: '8%',
        textAlign: 'center',
        padding: "10px 5px",
        border: '1px solid #D3D3D3',
        minHeight: 30,
    },
    cell5: {
        width: '12%',
        textAlign: 'center',
        padding: "10px 5px",
        border: '1px solid #D3D3D3',
        minHeight: 30,
    },
    cell6: {
        width: '12%',
        textAlign: 'center',
        padding: "10px 5px",
        border: '1px solid #D3D3D3',
        minHeight: 30,
    },
    cell7: {
        width: '15%',
        textAlign: 'center',
        padding: "10px 5px",
        border: '1px solid #D3D3D3',
        minHeight: 30,
    },
    totalcell1: {
        width: '85%',
        textAlign: 'center',
        padding: "10px 5px",
        border: '1px solid #D3D3D3',
        minHeight: 30,
    },
    totalcell2: {
        width: '15%',
        textAlign: 'center',
        padding: "10px 5px",
        border: '1px solid #D3D3D3',
        minHeight: 30,
    },
    header: {
        // fontFamily: "Plus Jakarta Sans",
        color: '#3D3C3C',
        fontWeight: '500',
        fontSize: '12px',
    },
    detail: {
        color: '#232323',
        fontWeight: '500',
        fontSize: '12px',
    },
    detail2: {
        color: '#232323',
        fontWeight: '500',
        fontSize: '12px',
        textAlign: 'start',
        paddingLeft: "10px"
    },
    detail3: {
        color: '#232323',
        fontWeight: '500',
        fontSize: '12px',
        textAlign: 'right',
        paddingLeft: "10px"
    },
    amount: {
        fontSize: "12px",
        fontWeight: "700",
        color: "#3D3C3C",
        marginTop: "22px"
    },
    signature: {
        display: 'flex',
        flexDirection: 'row',
        padding: "0 10px",
        justifyContent: "space-between",
        marginTop: "80px",
    },
    authorized: {
        width: "25%",
        textAlign: "center"
    },
    approved: {
        width: "25%",
        textAlign: "center"
    },
    signatureTitle: {
        fontWeight: "500",
        fontSize: "14px",
        color: "#000000",
        borderTop: "1px solid #D3D3D3",
        paddingTop: "12px"
    },
    footer: {
        width: "100%",
        height: 60,
        marginTop:"20px"
    }
});
export default function AntPdf() {
    return (
        <Document >
            <Page size='A4' style={styles.page}>
                {/* Background Image */}
                <Image fixed wrap style={styles.backgroundImage} src="/page-bg.jpg" />
                <View fixed wrap style={[styles.invoiceTop]}>
                    <View style={[styles.billInfo]}>
                        <View style={[styles.billTo]}>
                            <Text style={[styles.billTitel1]}>Bill  To :</Text>
                            <Text style={[styles.billTitel2]}>Navana Limited</Text>
                            <Text style={[styles.billTitel3]}>Dhaka, Bangladesh.</Text>
                        </View>
                        <View style={[styles.billFrom]}>
                            <Text style={[styles.billTitel1]}>Bill From :</Text>
                            <Text style={[styles.billTitel2]}>Antopolis Designs and Technologies</Text>
                        </View>

                    </View>
                    <View style={[styles.billInfo]}>
                        <View style={[styles.billId]}>
                            <Text style={[styles.billTitel1]}>Bill ID : </Text>
                            <Text style={[styles.billTitel2]}>20246002</Text>
                        </View>
                        <View style={[styles.billDate]}>
                            <Text style={[styles.billTitel1]}>Billing Date :</Text>
                            <Text style={[styles.billTitel2]}>18 September, 2024</Text>
                        </View>

                    </View>
                    <View style={[styles.billSubject]}>
                        <Text style={[styles.billTitel1]}>Subject : </Text>
                        <Text style={[styles.billTitel2]}>Bill of Toyota Bangladesh Retainer September 2024</Text>
                    </View>
                </View>

                <View fixed wrap style={[styles.invoiceDetail]}>
                    <Text style={[styles.tableTitle]}>Invoice details</Text>
                    <View style={[styles.row]}>
                        <Text style={[styles.cell1, styles.header]}>Item</Text>
                        <Text style={[styles.cell2, styles.header]}>Description</Text>
                        <Text style={[styles.cell3, styles.header]}>Unit price</Text>
                        <Text style={[styles.cell4, styles.header]}>QTY</Text>
                        <Text style={[styles.cell5, styles.header]}>Cost</Text>
                        <Text style={[styles.cell6, styles.header]}>Vat 5%</Text>
                        <Text style={[styles.cell7, styles.header]}>Total</Text>
                    </View>
                </View>

                {
                    Array(20).fill(0).map((_, index) => (
                        <View wrap={false} style={[styles.row]}>
                            <Text style={[styles.cell1, styles.detail]}>{index + 1}</Text>
                            <Text style={[styles.cell2, styles.detail2]}>Dynamic</Text>
                            <Text style={[styles.cell3, styles.detail]}>3000</Text>
                            <Text style={[styles.cell4, styles.detail]}>01</Text>
                            <Text style={[styles.cell5, styles.detail]}>3000</Text>
                            <Text style={[styles.cell6, styles.detail]}>150</Text>
                            <Text style={[styles.cell7, styles.detail]}>3150</Text>
                        </View>
                    ))
                }
                <View wrap={false} style={[styles.row]}>
                    <Text style={[styles.totalcell1, styles.detail2]}>Total</Text>
                    <Text style={[styles.totalcell2, styles.detail3]}>12025</Text>
                </View>
                <View wrap={false} style={[styles.row]}>
                    <Text style={[styles.totalcell1, styles.detail2]}>Discount</Text>
                    <Text style={[styles.totalcell2, styles.detail3]}>25</Text>
                </View>
                <View wrap={false} style={[styles.row]}>
                    <Text style={[styles.totalcell1, styles.detail2]}>Grand Total</Text>
                    <Text style={[styles.totalcell2, styles.detail3]}>12025</Text>
                </View>
                <View>
                    <Text style={[styles.amount]}>Estimated Amount (In words) : Twelve Thousand Twenty Five</Text>
                </View>


                <View fixed wrap style={[styles.signature]}>
                    <View style={[styles.authorized]}>
                        <Image style={styles.logoImg} src="/signature.png" />
                        <Text style={[styles.signatureTitle]}>Authorized By</Text>
                    </View>
                    <View style={[styles.approved]}>
                        <Image style={styles.logoImg} src="/signature.png" />
                        <Text style={[styles.signatureTitle]}>Approved By</Text>
                    </View>

                </View>
                <View fixed wrap style={[styles.footer]}>

                </View>
            </Page>
        </Document>
    );
}
