import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import * as RootNavigation from '../../navigation/index'
export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

const CarouselCardItem = ({ item, index }) => {
  
  return (
    <Pressable onPress={() => RootNavigation.navigate('Cart')}>
      <View style={styles.container} key={index}>
        <Image source={{ uri: item.imgUrl || item }} style={styles.image} />
      </View>
    </Pressable>
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
    height: 300,
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

export default CarouselCardItem;
