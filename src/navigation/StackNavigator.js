import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import CartScreen from "../screens/CartScreen/CartScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import { BottomNavigator } from "./BottomNavigator";
import ProductScreen from "../screens/ProductScreen/ProductScreen";
import AddressScreen from "../screens/AddressScreen/AddressScreen";
import PaymentScreen from "../screens/PaymentScreen/PaymentScreen";
import OrderScreen from "../screens/OrderScreen/OrderScreen";
import ProductsScreen from "../screens/ProductsScreen/ProductsScreen";
import MyDetailsScreen from "../screens/MyDetailsScreen/MyDetailsScreen";

const Stack = createNativeStackNavigator();
export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Register"
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={BottomNavigator} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="MyDetails" component={MyDetailsScreen} />
      <Stack.Screen name="Address" component={AddressScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="Orders" component={OrderScreen} />
    </Stack.Navigator>
  );
}
