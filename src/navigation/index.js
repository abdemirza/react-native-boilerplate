import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import StackNavigator from "./StackNavigator";

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
