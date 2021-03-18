import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
    FlatList,
    SafeAreaView,
  } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import bgimage from "../assets/background.png";
import logo from "../assets/logo.jpg";
const { width: WIDTH } = Dimensions.get("window");

const SourceLib = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#e01d1d" : "#e8c3c3";

    return (
      <Item
        item={item}
        onPress={() => navigation.navigate('Report')}
        style={{ backgroundColor }}
      />
    );
  };
  
  return (
    <ScrollView>
    <ImageBackground
      source={bgimage}
      style={styles.backgroundcontainer}
      blurRadius={1}
    >
      <View style={styles.logocontainer}>
        <Image source={logo} style={styles.logo}></Image>
      </View>
      <View>
        <SafeAreaView style={styles2.container}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
          />
        </SafeAreaView>
      </View>
    </ImageBackground>
    </ScrollView>
  );
};
const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Headlines from Vadodara                                    ",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Headlines from New York                                    ",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Headlines from Mumbai                                      ",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d74",
      title: "Headline from Delhi                                        ",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d75",
      title: "Headline from Ahmedabad                                    ",
    },
  ];
  
  const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles2.item, style]}>
      <Text style={styles2.title}>{item.title}</Text>
    </TouchableOpacity>
  );
  
  
export default SourceLib;


const styles = StyleSheet.create({
  backgroundcontainer: {
    flex: 1,
    width: null,
    height: 750,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  logocontainer: {
    marginTop: 60,
    alignItems: "center",
  },
  logo: {
    resizeMode: "contain",
    width: 250,
    height: 250,
  },
  inputcontainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    color: "rgba(255, 255, 255, 0.7)",
    marginHorizontal: 25,
  },
  btnlogin: {
    width: WIDTH - 200,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#7b68ee",
    justifyContent: "center",
    marginTop: 80,
  },
  btnregister: {
    width: WIDTH - 200,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#7b68ee",
    justifyContent: "center",
    marginTop: 20,
  },
  text: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 16,
    textAlign: "center",
  },
});
const styles2 = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 5,
      marginVertical: 3,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 18,
    },
  });