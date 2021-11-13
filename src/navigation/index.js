import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, SafeAreaView, Platform } from "react-native";
import StackNavigator from "./StackNavigator";

const RootNavigator = () => {
  return (
    <SafeAreaView style={{flex:1,paddingTop: Platform.OS === 'android' ? 25 : 0}}>
     <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaView>
    
 
  );
};

export default RootNavigator;
