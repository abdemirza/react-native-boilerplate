import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import CircleCategory from "../CircleCategory/CircleCategory";

const CircleCategories = () => {
  const categories = [
    {
      name: "Men",
      uri: "https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
      name: "Women",
      uri: "https://images.unsplash.com/photo-1603570388466-eb4fe5617f0d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
      name: "Kids",
      uri: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2069&q=80",
    },
    {
      name: "Winterwear",
      uri: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
    },

    {
      name: "Footwear",
      uri: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vdHdlYXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },

    {
      name: "Beauty",
      uri: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80",
    },
    {
      name: "Jewellery",
      uri: "https://images.unsplash.com/photo-1617191880362-aac615de3c26?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
      name: "Accessories",
      uri: "https://images.unsplash.com/photo-1617048931430-5eb626d81e71?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFjY2Vzc29yaWVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
  ];
  const categoriesList = categories.map((category) => (
    <CircleCategory
      key={category.name}
      title={category.name.toUpperCase()}
      uri={category.uri}
    />
  ));
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      contentContainerStyle={styles.container}
    >
      {categoriesList}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
export default CircleCategories;
