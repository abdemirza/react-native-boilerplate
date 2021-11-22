import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, SafeAreaView, Platform } from "react-native";
import { BottomNavigator } from "./BottomNavigator";
import StackNavigator from "./StackNavigator";
// RootNavigation.js
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

// add other navigation functions that you need and export them
const RootNavigator = () => {
  return (
    <SafeAreaView style={{flex:1,paddingTop: Platform.OS === 'android' ? 25 : 0}}>
     <NavigationContainer ref={navigationRef}>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaView>
    
 
  );
};

export default RootNavigator;
