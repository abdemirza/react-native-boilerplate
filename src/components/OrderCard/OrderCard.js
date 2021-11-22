import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { background, green, grey, lightGrey } from "../../constants/color";
import { width } from "../../constants/dimensions";
import { data } from "../../data/dummyData";
import CustomButton from "../CustomButton/CustomButton";
const OrderCard = ({order}) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.iconContainer}>
          <Icon name="package" size={20} color="#fff" />
        </View>
        <Text style={{ color: green, fontWeight: "600", marginVertical: 10 }}>
          Confirmed
        </Text>
      </View>
      <View style={{ margin: 10, backgroundColor: lightGrey }}>
        <View style={styles.orderContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={{ uri: order.imageUri }} style={styles.image} />
            <View style={styles.orderDetailContainer}>
              <Text>{order.brand}</Text>
              <Text>{order.title}</Text>
              <Text>Size: 30</Text>
            </View>
          </View>
          <Icon name="chevron-right" size={25} />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            mode="contained"
            labelStyle={{ color: "#000" }}
            style={styles.button}
          >
            CANCEL
          </CustomButton>
          <CustomButton
            mode="contained"
            labelStyle={{ color: "#000" }}
            style={styles.button}
          >
            TRACK
          </CustomButton>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginVertical: 5,
  },
  orderContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal:20,
    paddingVertical:10,
  },
  iconContainer: {
    width: 35,
    height: 35,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: green,
    borderRadius: 30,
  },
  orderDetailContainer: {
    padding: 10,
    justifyContent: "space-between",
    height: 80,
  },
  button: {
    width: width * 0.42,
    backgroundColor: "#fff",
    borderColor: grey,
    borderWidth: 0.5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  image: {
    height: 70,
    width: 50,
    borderRadius: 3,
  },
});
export default OrderCard;
