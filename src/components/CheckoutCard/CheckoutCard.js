import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { green, grey } from "../../constants/color";

const CheckoutCard = () => {
  const cart = useSelector((state) => state.cart.items);
  const totalAmount= cart.reduce((acc,current)=>acc+current.price,0)
  const originalPrice = cart.reduce((acc,current)=>acc+current.originalPrice,0)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          PRICE DETAILS ({cart.length} Items)
        </Text>
      </View>
      <View style={styles.body}>
        <View style={styles.row}>
          <Text>Total MRP</Text>
          <Text>₹{originalPrice}</Text>
        </View>
        <View style={styles.row}>
          <Text>Discount on MRP</Text>
          <Text style={{color:green}}>- ₹{originalPrice-totalAmount}</Text>
        </View>
      </View>
      <View style={styles.footer}>
    <Text style={styles.headerText}>Total Amount</Text>
    <Text style={styles.headerText}>₹{totalAmount}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginVertical:10,
  },
  header: {
    borderBottomColor: grey,
    padding: 5,
    borderBottomWidth: 0.2,
  },
  headerText: {
    fontWeight: "500",
  },
  row:{
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical:5
  },
  body:{
      paddingVertical:10
  },
  footer:{
      borderTopColor:grey,
      borderTopWidth: 0.2,
      paddingVertical:10,
      flexDirection: "row",
      justifyContent:'space-between',
  }
});
export default CheckoutCard;
