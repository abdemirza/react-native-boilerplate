import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import CheckoutCard from "../../components/CheckoutCard/CheckoutCard";
import CustomButton from "../../components/CustomButton/CustomButton";
import PaymentCard from "../../components/PaymentCard/PaymentCard";
import { grey, orange } from "../../constants/color";
import { addOrder, clearCart } from "../../state/actions";

const PaymentScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const orderHandler = () => {
    dispatch(addOrder(cart));
    dispatch(clearCart())
  };
  return (
    <ScrollView
      contentContainerStyle={{ justifyContent: "space-between", flex: 1 }}
    >
      <View>
        <PaymentCard />
        <CheckoutCard />
      </View>

      <View style={styles.footer}>
        <View style={{ width: 200, padding: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>₹2,457</Text>
        </View>
        <CustomButton
          labelStyle={{ fontWeight: "bold" }}
          style={styles.button}
          mode="contained"
          onPress={() => {
            orderHandler();
            navigation.navigate("Orders");
          }}
        >
          Pay Now
        </CustomButton>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
    flexDirection: "row",
    width: "100%",
    borderTopColor: grey,
    borderTopWidth: 0.5,
    alignItems: "center",
    shadowColor: "#171717",
    shadowOffset: { width: -12, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  button: {
    height: 50,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: orange,
  },
});
export default PaymentScreen;
