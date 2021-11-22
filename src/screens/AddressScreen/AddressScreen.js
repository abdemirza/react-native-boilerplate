import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import AddressCard from "../../components/AddressCard/AddressCard";
import CartItem from "../../components/CartItem/CartItem";
import CheckoutCard from "../../components/CheckoutCard/CheckoutCard";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import ItemTab from "../../components/ItemTab/ItemTab";
import { grey, lightGrey, orange, primary } from "../../constants/color";

const AddressScreen = () => {
  const cart = useSelector((state) => state.cart);
  const navigation = useNavigation();
  const totalPrice = cart.items.reduce((acc, current) => {
    return acc + current.price;
  }, 0);

  const tabs = cart.items.map((item, idx) => <ItemTab key={idx} imageUri={item.imageUri} />);
  return (
    <ScrollView style={styles.container}>
      <CustomHeader title="Cart" />
      <AddressCard />
      <View>
        <View style={styles.deliveryTextContainer}>
          <Text style={styles.deliveryText}>Delivery Estimates</Text>
        </View>
        <View>
         {tabs}
        </View>
      </View>
      <View style={{ padding: 10 }}>
        <CustomButton
          labelStyle={{ fontWeight: "bold" }}
          uppercase
          style={{
            height: 45,
            justifyContent: "center",
            backgroundColor: orange,
          }}
          mode="contained"
          onPress={() =>navigation.navigate('Payment')}
        >
          Continue
        </CustomButton>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: lightGrey,
  },
  deliveryTextContainer: {
    padding: 10,
  },
  deliveryText: {
    color: grey,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default AddressScreen;
