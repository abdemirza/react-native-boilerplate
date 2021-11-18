import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
} from "react-native";

export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

const ProductCarouselItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <View>
        <Image source={{ uri: item }} style={styles.image} />
      
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    width: ITEM_WIDTH,
    // marginVertical: 15,
  },
  image: {
    width: ITEM_WIDTH,
    height: 550,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
  },
  body: {
    color: "#222",
    fontSize: 18,
  },

});

export default ProductCarouselItem;
