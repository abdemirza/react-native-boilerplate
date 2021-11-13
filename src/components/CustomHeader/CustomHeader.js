import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { secondary } from "../../constants/color";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
const CustomHeader = ({ title }) => {
  const navigation = useNavigation();
  const iconHandler = ()=>{
    if(title==='Cart')
    navigation.pop();
  }
  const cartHandler = () => {
    navigation.navigate("Cart");
  };
  const icon =
    title === "Cart" ? (
      <AntDesign
        name="arrowleft"
        style={styles.iconContainer}
        size={24}
        color="black"
      />
    ) : (
      <Entypo
        name="menu"
        style={styles.iconContainer}
        size={24}
        color="black"
      />
    );
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Pressable onPress={()=>{iconHandler()}}>{icon}</Pressable>
        <Text style={styles.textContainer}>{title}</Text>
      </View>

      <Pressable onPress={() => cartHandler()}>
        <Feather
          name="shopping-cart"
          style={styles.iconContainer}
          size={24}
          color="black"
        />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 55,
    backgroundColor: secondary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: { padding: 10 },
  textContainer: {
    fontSize: 20,
  },
});
export default CustomHeader;
