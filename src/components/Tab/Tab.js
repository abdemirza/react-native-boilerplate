import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { grey } from "../../constants/color";

const Tab = ({ heading, subHeading, iconName = "cart-outline" }) => {
  return (
    <View style={styles.menuContainer}>
      <View style={{flexDirection:'row',alignItems: 'center'}}>
        <Icon style={styles.icon} name={iconName} size={35} />
        <View style={styles.textContainer}>
          <Text>{heading}</Text>
          <Text style={styles.subHeading}>{subHeading}</Text>
        </View>
      </View>
      <Icon style={styles.icon} name="chevron-right" size={15} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderBottomColor: "grey",
    borderBottomWidth: 0.5,
    justifyContent: "space-between",
  },
  textContainer: {
    padding: 5,
    justifyContent: "space-evenly",
    height: 60,
  },
  icon: {
    padding: 5,
  },
  subHeading: {
    color: grey,
    fontSize: 12,
  },
});
export default Tab;
