
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
    
});
export default function BusinessProposal() {
    return (
        <Document >
            <Page size='A4' style={styles.page}>
                {/* Background Image */}
                <Image fixed wrap style={styles.backgroundImage} src="/BusinessProposal/page-bg-1.jpg" />
                <View fixed wrap style={[styles.invoiceTop]}>
                    <View style={[styles.billTo]}>
                        <Text style={[styles.billTitel1]}>Bill  To :</Text>
                        <Text style={[styles.billTitel2]}>Navana Limited</Text>
                        <Text style={[styles.billTitel3]}>Dhaka, Bangladesh.</Text>
                    </View>
                </View>

            </Page>
        </Document>
    );
}
