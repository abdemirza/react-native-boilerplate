import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {  useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import CheckoutCard from "../../components/CheckoutCard/CheckoutCard";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import { lightGrey, orange, primary } from "../../constants/color";

const CartScreen = () => {
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.items.reduce((acc, current) => {
    return acc + current.price;
  }, 0);
  const items = cart.items.map((item, idx) => (
    <CartItem key={idx} item={item} />
  ));
  if(items.length===0) return <View style={styles.container}>
      <CustomHeader title="Cart" />
      <Text>Ooops, You have nothing in your cart</Text>
  </View>
  return (
    <ScrollView style={styles.container}>
      <CustomHeader title="Cart" />
      {items}
      <CheckoutCard />
      <View style={{ padding: 10 }}>
        <CustomButton
          labelStyle={{ fontWeight: "bold" }}
          uppercase
          style={{
            height: 45,
            justifyContent: "center",
            backgroundColor: orange,
          }}
          onPress={() =>navigation.navigate('Address')}
          mode="contained"
        >
          place order
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
});

export default CartScreen;
