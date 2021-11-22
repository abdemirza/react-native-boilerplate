import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { green, grey } from "../../constants/color";
import CustomButton from "../CustomButton/CustomButton";

const AddressCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <View style={{ flexDirection: "row" }}>
          <Text>Abuzar Mirza</Text>
          <Text style={{ color: grey, marginLeft: 3 }}>(Default)</Text>
        </View>
        <View style={styles.addressType}>
          <Text style={styles.addressTypeText}>Home</Text>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.addressText}>56 Road</Text>
        <Text style={styles.addressText}>Ashok Vihar H.O</Text>
        <Text style={styles.addressText}>Delhi, Delhi 110052</Text>
        <View style={styles.mobileContainer}>
          <Text style={styles.addressText}>Mobile :</Text>
          <Text style={styles.mobile}>9780938278</Text>
        </View>
      </View>
      <CustomButton
        mode="contained"
        labelStyle={{ color: "#000" }}
        style={{
          backgroundColor: "transparent",
          borderColor: "#000",
          borderWidth: 0.5,
        }}
      >
        change or add address
      </CustomButton>
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
    marginVertical: 5,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addressType: {
    borderColor: green,
    borderWidth: 1,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  addressTypeText: {
    color: green,
  },
  addressText: {
    fontWeight: "200",
  },
  mobileContainer: {
    flexDirection: "row",
    marginVertical: 5,
  },
  mobile: {
    fontWeight: "bold",
  },
});

export default AddressCard;
