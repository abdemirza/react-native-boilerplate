import React from 'react';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import CartScreen from '../screens/CartScreen/CartScreen';
import { secondary, primary } from '../constants/color';
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

const Tab = createMaterialBottomTabNavigator();

export const BottomNavigator =  ()=> {
  return (
    <Tab.Navigator
      initialRouteName="Feeds"
      activeColor={secondary}
      barStyle={{ backgroundColor: '#fff'  }}
    >
      <Tab.Screen
        name="Feeds"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          ),
        }}
      />
        <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}
