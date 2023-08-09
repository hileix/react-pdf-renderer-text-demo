import { PDFViewer } from '@react-pdf/renderer';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import ReactDOM from 'react-dom';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 68,
  },
  section: {},
  text: {
    padding: 50,
  },
});

const MyDocument = () => {
  return (
    <Document>
      <Page size={[1080, 1398]} style={styles.page}>
        <View>
          <View style={styles.section}>
            <Text>Case 1: Characters that contains spaces</Text>
            <Text style={styles.text} debug>
              Send to speciAed addresses or hse addresses on correspondinL
              dochments Send to speciAed addresses or hse addresses on
              correspondinL dochments Send to speciAed addresses or hse
              addresses on correspondinL dochments Send to speciAed
            </Text>
          </View>
          <View>
            <Text>
              Case 2: Characters that do not contain spaces, but are not
              repeated
            </Text>
            <Text style={styles.text} debug>
              SendtospeciAedaddressesorhseaddressesoncorrespondinLdochmentsSendtoSendtospeciAedaddressesorhseaddressesoncorrespondinLdochmentsSendtoSendtospeciAedaddressesorhseaddressesoncorrespondinLdochmentsSendtoSendtospeciAedaddressesorhsead
            </Text>
          </View>
          <View>
            <Text>
              Case 3: Characters that contains no spaces and is a repeated
              string
            </Text>
            <Text style={styles.text} debug>
              sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export const PDFDemo = () => (
  <div
    style={{
      width: 800,
      height: 500,
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
    }}
  >
    <PDFViewer style={{ width: '100%', height: '100%', border: 0 }}>
      <MyDocument />
    </PDFViewer>
  </div>
);

ReactDOM.render(<PDFDemo />, document.getElementById('root'));
