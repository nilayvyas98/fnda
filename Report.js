import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, ImageBackground} from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { ScrollView } from "react-native-gesture-handler";
import bgimage from "../assets/background.png"; 
export default class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Date', 'Headline Name', 'Writer', 'Check', 'Source'],
      tableData: [
        ['7/2/16', 'Heavy flood due to cloud burst', 'Harry', '', 'Whasapp'],
        ['7/2/16', 'Flood in Vadodara', 'Zayn', '', 'A News'],
        ['7/2/16', 'Rain creates flood situation', 'Niall', '', 'Facbook'],
        ['7/2/16', 'City in deep water due to flood', 'Liam','', 'Everyday Express'],
        ['7/2/16', 'Cloud bursting in city results in flood', 'Louis','', 'D News']
      ]
    }
  }
 
  _alertIndex(index) {
    Alert.alert(`The match percentage of Headline ${index + 1} is 27%.`);
  }
 
  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Check Accuracy Percentage</Text>
        </View>
      </TouchableOpacity>
    );
 
    return (
    <ScrollView>
      <View style={styles.container}>
      <ImageBackground
      source={bgimage}
      style={styles.backgroundcontainer}
      blurRadius={1}
    >
      <View style={styles.logocontainer}>
        <Text style={styles.header}>REPORT</Text>
      </View>
        <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
        </ImageBackground>
      </View>
    </ScrollView>
    )
  }
}
 
const styles = StyleSheet.create({
  backgroundcontainer: {
    flex: 1,
    width: null,
    height: 750,
    backgroundColor: "#fff",
  },
  logocontainer: {
    marginTop: 60,
    marginBottom: 50,
    alignItems: "center",
  },
  header: {
    color: "#f5deb3",
    fontSize: 32,
    fontWeight: "bold",
    textDecorationLine: "underline",
    textAlign: "center",
  },
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: { height: 40, backgroundColor: '#808B97' },
  text: { margin: 3.5 },
  row: { flexDirection: 'row', backgroundColor: '#f5f5dc' },
  btn: { width: 58, height: 68, backgroundColor: '#7b68ee',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }
});