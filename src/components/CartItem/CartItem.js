import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { grey, lightGrey } from "../../constants/color";
import { useDispatch } from "react-redux";
import { removeItem } from "../../state/actions";
import { useSelector } from "react-redux";

const CartItem = ({ item }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const [quantity, setQuantity] = React.useState(1);
  const dispatch = useDispatch();
  const quantityHandler = (operation) => {
    switch (operation) {
      case "INCREMENT":
        setQuantity(quantity + 1);
        break;
      case "DECREMENT":
        setQuantity(quantity - 1);
    }
  };
  if (quantity > 0)
    return (
      <View style={styles.container}>
        <Image source={{ uri: item.imageUri }} style={styles.image} />
        <View style={styles.productDetails}>
          <Text style={styles.productBrand}>{item.brand}</Text>

          <Text numberOfLines={1} style={styles.productTitle}>
            {item.title}
          </Text>
          <View style={styles.sizeQuantityContainer}>
            <View style={styles.sizeContainer}>
              <Text style={{ fontWeight: "600" }}>Size: {item.size}</Text>
            </View>
            
          </View>

          <Text style={styles.productPrice}>₹ {item.price}</Text>
        </View>
        <Pressable onPress={() => dispatch(removeItem(cartItems, item.id))}>
          <Text style={{ padding: 5 }}>X</Text>
        </Pressable>
      </View>
    );
  return <></>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "#fff",
    marginVertical: 5,
    width: "100%",
    justifyContent: "space-evenly",
  },
  productBrand: {
    fontWeight: "bold",
    padding: 0,
  },
  productDetails: {
    padding: 15,
    height: 140,
    width: "70%",
    justifyContent: "space-between",
  },
  image: {
    width: 120,
    height: 150,
  },
  productTitle: {
    width: "80%",
    paddingVertical: 0,
    marginVertical: 0,
  },
  sizeContainer: {
    backgroundColor: lightGrey,
    width: 70,
    alignItems: "center",
  },
  productQuantity: {
    width: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  productPrice: {
    fontWeight: "bold",
    marginTop: 10,
  },
  sizeQuantityContainer: {flexDirection: "row"}
});
export default CartItem;
