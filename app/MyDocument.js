
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
// import logo from "@/public/logo.svg"

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#D9D9D9',
    position: "relative"
  },
  pageBottomLogo: {
    position: "absolute",
    width: "40px",
    height: "40px",
    zIndex: "9999999",
    bottom: 10,
    right: 10
  },
  section1: {
    padding: 10,
    flexGrow: 1,
    // backgroundColor: "#D9D9D9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  sectionView1: {
    textAlign: "center"
  },
  logoImg: {
    width: "100px",
    height: "100px",
    margin: "auto"
  },
  logoText: {
    fontSize: "20px",
    fontWeight: 700,
    marginTop: "15px",
    color: "#595959"

  },
  sectionBlack: {
    backgroundColor: "black",
  },
  sectionHeader: {
    backgroundColor: "#0C0C0C",
    borderBottom: "2px solid #5C5C5C",
    padding: "10px 0px",
    height: "15%"
  },
  headerText: {
    textAlign: "center",
    color: "#595959",
    fontSize: "30px",
    fontWeight: 700,
    textTransform: "uppercase"
  },
  sectionBody: {
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    height: "85%"
  },
  sectionCards: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "0px",
    padding: "0px 30px"
  },
  sectionCards2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "0px",
    padding: "0px 30px",
    marginTop: "20px"
  },
  sectionCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "300px"
  },
  cardImg: {
    width: "80px"
  },
  cardText: {
    fontSize: "10px",
    fontWeight: 500,
    textTransform: "uppercase",
    marginTop: "5px",
    color: "#595959"
  },
  cardText2: {
    fontSize: "6px",
    fontWeight: 500,
    textTransform: "uppercase",
    marginTop: "5px",
    color: "#7F7C66"
  },
  cardText3: {
    fontSize: "8px",
    fontWeight: 500,
    textTransform: "uppercase",
    marginTop: "5px",
    color: "#F7FEFD"
  },
  sectionFooter: {
    padding: 10,
    flexGrow: 1,
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px"
  },
  footerText: {
    fontSize: "16px",
    fontWeight: 700,
    textTransform: "uppercase",
    marginTop: "15px",
    color: "#595959"

  },
  footerP: {
    fontSize: "10px",
    fontWeight: 500,
    textTransform: "uppercase",
    marginTop: "10px",
    color: "#595959"

  },
});
const pageSize = {
  width: 595,  // Custom width in points
  height: 400,  // Custom height in points
};
export default function MyDocument() {
  return (
    <Document >
      <Page size={pageSize} style={styles.page}>
        <View style={styles.section1}>
          <View style={styles.sectionView1}>
            <Image style={styles.logoImg} src="/logo.png" />
            <Text style={styles.logoText}>RATE CARD FOR PROFESSIONAL SERVICES</Text>
          </View>
        </View>
        <Image style={styles.pageBottomLogo} src="/logo.png" />
      </Page>
      <Page size={pageSize} style={styles.sectionBlack}>
        <View style={styles.sectionHeader}>
          <Text style={styles.headerText}>3 main service categories</Text>
        </View>
        <View style={styles.sectionBody}>
          <View style={styles.sectionCards}>
            <View style={styles.sectionCard}>
              <Image style={styles.cardImg} src="/photo-icon.png" />
              <Text style={styles.cardText}>content</Text>
            </View>
            <View style={styles.sectionCard}>
              <Image style={styles.cardImg} src="/photo-icon.png" />
              <Text style={styles.cardText}>Performance Marketing</Text>
            </View>
            <View style={styles.sectionCard}>
              <Image style={styles.cardImg} src="/photo-icon.png" />
              <Text style={styles.cardText}>Trch</Text>
            </View>
          </View>
        </View>
        <Image style={styles.pageBottomLogo} src="/logo.png" />
      </Page>
      <Page size={pageSize} style={styles.sectionBlack}>
        <View style={styles.sectionHeader}>
          <Text style={styles.headerText}>Content Business</Text>
        </View>
        <View style={styles.sectionBody}>
          <View style={styles.sectionCards}>
            <View style={styles.sectionCard}>
              <Image style={styles.cardImg} src="/photo-icon.png" />
              <Text style={styles.cardText2}>Digital Static Banner</Text>
              <Text style={styles.cardText3}>Unit Price – ৳ 3,500</Text>
            </View>
            <View style={styles.sectionCard}>
              <Image style={styles.cardImg} src="/photo-icon.png" />
              <Text style={styles.cardText2}>Digital Dynamic Banner</Text>
              <Text style={styles.cardText3}>Unit Price – ৳ 10,000</Text>
            </View>
            <View style={styles.sectionCard}>
              <Image style={styles.cardImg} src="/photo-icon.png" />
              <Text style={styles.cardText2}>Digital Dynamic Banner with Voiceover</Text>
              <Text style={styles.cardText3}>Unit Price – ৳ 15,000</Text>
            </View>
          </View>
          <View style={styles.sectionCards2}>
            <View style={styles.sectionCard}>
              <Image style={styles.cardImg} src="/photo-icon.png" />
              <Text style={styles.cardText2}>Digital Static Banner Adaptation</Text>
              <Text style={styles.cardText3}>Unit Price – ৳ 700</Text>
            </View>
            <View style={styles.sectionCard}>
              <Image style={styles.cardImg} src="/photo-icon.png" />
              <Text style={styles.cardText2}>Digital Dynamic Banner Adaptation</Text>
              <Text style={styles.cardText3}>Unit Price – ৳ 1,500</Text>
            </View>
            <View style={styles.sectionCard}>
              <Image style={styles.cardImg} src="/photo-icon.png" />
              <Text style={styles.cardText2}>Digital Dynamic Banner with Voiceover Adaptation</Text>
              <Text style={styles.cardText3}>Unit Price – ৳ 2,250</Text>
            </View>
          </View>
        </View>
        <Image style={styles.pageBottomLogo} src="/logo.png" />
      </Page>
      <Page size={pageSize} style={styles.sectionBlack}>
        <View style={styles.sectionHeader}>
          <Text style={styles.headerText}>Tech</Text>
        </View>
        <View style={styles.sectionBody}>
          <View style={styles.sectionCards}>
            <View style={styles.sectionCard}>
              <Image style={styles.cardImg} src="/photo-icon.png" />
              <Text style={styles.cardText}>content</Text>
            </View>
            <View style={styles.sectionCard}>
              <Image style={styles.cardImg} src="/photo-icon.png" />
              <Text style={styles.cardText}>Performance Marketing</Text>
            </View>
            <View style={styles.sectionCard}>
              <Image style={styles.cardImg} src="/photo-icon.png" />
              <Text style={styles.cardText}>Trch</Text>
            </View>
          </View>
        </View>
        <Image style={styles.pageBottomLogo} src="/logo.png" />
      </Page>
      <Page size={pageSize} style={{ backgroundColor: "#D9D9D9" }}>
        <View style={styles.sectionFooter}>
          <View style={styles.sectionView1}>
            <Image style={styles.logoImg} src="/logo.png" />
          </View>
          <View style={styles.sectionView1}>
            <Text style={styles.footerText}>Loking forward to your reply</Text>
            <Text style={styles.footerP}>theantopolis.com</Text>
            <Text style={styles.footerP}>info@theantopolis.com</Text>
            <Text style={styles.footerP}>+8801322447011</Text>
          </View>
        </View>
        <Image style={styles.pageBottomLogo} src="/logo.png" />
      </Page>
    </Document>
  );
}
