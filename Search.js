import { StatusBar } from "expo-status-bar";
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
  } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import bgimage from "../assets/background.png";
import logo from "../assets/logo.jpg";
const { width: WIDTH } = Dimensions.get("window");

const Search = ({ navigation }) => {
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
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.input}
          placeholder={"Search by Title"}
          secureTextEntry={false}
          placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
          underlineColorAndroid="transparent"
        ></TextInput>
      </View>
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.input}
          placeholder={"Search by Writer"}
          secureTextEntry={false}
          placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
          underlineColorAndroid="transparent"
        ></TextInput>
      </View>
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.input}
          placeholder={"Search by Date"}
          secureTextEntry={false}
          placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
          underlineColorAndroid="transparent"
        ></TextInput>
      </View>
      <TouchableOpacity style={styles.btnlogin} onPress={() => navigation.navigate('SourceLib')}>
        <Text style={styles.text}>Search</Text>
      </TouchableOpacity>
    </ImageBackground>
    </ScrollView>
  );
};
export default Search;


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