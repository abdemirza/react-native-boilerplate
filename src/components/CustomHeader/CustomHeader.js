import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { secondary } from "../../constants/color";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { useNavigation } from "@react-navigation/core";
import { useSelector } from "react-redux";
const CustomHeader = ({ title, mode }) => {
  const cart = useSelector((state) => state.cart);
  const navigation = useNavigation();
  const iconHandler = () => {
    if (mode === "home") navigation.navigate("Home");
    else navigation.pop();
  };
  const cartHandler = () => {
    navigation.navigate("Cart");
  };
  const icon =
    title !== "Home" ? (
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
        <Pressable
          onPress={() => {
            iconHandler();
          }}
        >
          {icon}
        </Pressable>
        <Text style={styles.textContainer}>{title}</Text>
      </View>

      <Pressable onPress={() => cartHandler()}>
        <View>
          <View
            style={{
              position: "absolute",
              backgroundColor: "red",
              height: 15,
              width: 15,
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
              right: 5,
              top: 5,
            }}
          >
            <Text style={{ color: "#fff" }}>{cart.items.length}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Icon name="bag" size={24} color="black" />
          </View>
        </View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 55,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginBottom: 20,
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
