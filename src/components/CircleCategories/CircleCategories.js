import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import CircleCategory from "../CircleCategory/CircleCategory";
import { categories } from '../../data/dummyData';

const CircleCategories = () => {
  
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
    backgroundColor:'#fff',
    paddingVertical:15,
  },
});
export default CircleCategories;
