import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

const CircleCategory = ({ title, uri }) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate('Products',{title})}>
      <View style={styles.container}>
        <Image source={{ uri }} style={styles.circleContainer} />
        <Text>{title}</Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    height: 110,
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
