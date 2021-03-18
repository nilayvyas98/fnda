import { StatusBar } from "expo-status-bar";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import Home from './Intents/Home';
import Search from './Intents/Search';
import SourceLib from './Intents/SourceLib';
import Report from './Intents/Report';

const RootStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <RootStack.Screen name="Search" component={Search} options={{ headerShown: false }}/>
        <RootStack.Screen name="SourceLib" component={SourceLib} options={{ headerShown: false }}/>
        <RootStack.Screen name="Report" component={Report} options={{ headerShown: false }}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
 
export default App;