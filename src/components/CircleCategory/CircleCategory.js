import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CircleCategory = ({ title,uri }) => {
  return (
    <View style={styles.container}>
      <Image source={{uri}} style={styles.circleContainer} />
      <Text>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    height:110,
    justifyContent: "space-between",
    alignItems: "center",
  },
  circleContainer: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
});
export default CircleCategory;
