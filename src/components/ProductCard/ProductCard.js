import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { grey, orange } from "../../constants/color";
import { width } from "../../constants/dimensions";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { products } from "../../data/dummyData";
import { useNavigation } from "@react-navigation/core";

const ProductCard = ({ product }) => {
  let discount =
    ((product.originalPrice[0] - product.price[0]) / product.originalPrice[0]) *
    100;
  discount = discount.toFixed(0);
  const navigation = useNavigation();
  const [favourite, setFavourite] = React.useState(false);
  return (
    <Pressable onPress={() => navigation.navigate("Product", { product })}>
      <View style={styles.container}>
        <Image
          source={{
            uri: product.images[0],
          }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.brand}>{product.brand}</Text>
            <Pressable onPress={() => setFavourite(!favourite)}>
              <Icon
                name={favourite ? "heart" : "heart-outline"}
                color={favourite ? orange : grey}
                size={20}
              />
            </Pressable>
          </View>
          <Text style={styles.title}>{product.title}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.originalPrice}>
              ₹ {product.originalPrice[0]}
            </Text>
            <Text style={{fontSize:12,paddingHorizontal:2}}>
              ₹<Text style={styles.brand}>{product.price[0]}</Text>
            </Text>
            <Text style={styles.discount}>{discount}% OFF</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: grey,
    width: width * 0.5,
    borderWidth: 1,
  },
  image: {
    height: 250,
  },
  brand: {
    fontWeight: "bold",
    paddingHorizontal:2,
    
  },
  title: {
    color: grey,
    fontSize: 12,
  },
  textContainer: {
    padding: 5,
    justifyContent: "space-evenly",
    height: 80,
    backgroundColor: "#fff",
  },
  originalPrice: {
    textDecorationLine: "line-through",
    color: grey,
    fontSize:12,
    paddingHorizontal:2,
  },
  priceContainer: {
    flexDirection: "row",
    width: "100%",
  },
  discount: {
    color: orange,
    fontSize:12,
    paddingHorizontal:2,
  },
});

export default ProductCard;
