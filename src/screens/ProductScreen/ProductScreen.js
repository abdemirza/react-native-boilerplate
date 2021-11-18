import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import CarouselCards from "../../components/CarouselCards/CarouselCards";
import ProductCarouselItem from "../../components/ProductCarouselItem/ProductCarouselItem";
import { grey } from "../../constants/color";
import { products } from "../../data/dummyData";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/core";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
const ProductScreen = () => {
  const navigation = useNavigation();
  const discount = Math.round(
    ((products[0].originalPrice[0] - products[0].price[0]) /
      products[0].originalPrice[0]) *
      100
  );

  return (
    <ScrollView>
      <CarouselCards
        loop={true}
        images={products[0].images}
        component={ProductCarouselItem}
      />
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          position: "absolute",
          width: "100%",
        }}
      >
        <Pressable onPress={()=>navigation.pop()}>
          <View style={styles.iconContainer}>
            <Icon name="arrow-left" size={20} color="#000" />
          </View>
        </Pressable>
        <View style={styles.rightIconContainer}>
          <View style={styles.iconContainer}>
            <Icon name="share-variant" size={20} color="#000" />
          </View>
          <View style={styles.iconContainer}>
            <Icon name="heart-outline" size={20} color="#000" />
          </View>
          <Pressable onPress={()=>navigation.push('Cart')}>
          <View style={styles.iconContainer}>
            <SimpleLineIcons name="bag" size={20} color="#000" />
          </View>
          </Pressable>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <View style={styles.productTitle}>
          <Text style={{ width: "60%" }}>
            <Text style={styles.brand}>{`${products[0].brand}  `}</Text>
            {products[0].title}
          </Text>
        </View>
        <View style={styles.priceContainer}>
          <Text
            style={styles.originalPrice}
          >{`₹ ${products[0].originalPrice[0]}`}</Text>
          <Text style={styles.brand}>{`₹ ${products[0].price[0]}`}</Text>
          <Text style={styles.discount}>({discount}% OFF)</Text>
        </View>
        <Text style={styles.tax}>inclusive of all taxes</Text>
      </View>
      <View style={styles.policyContainer}>
        <Text style={{ fontWeight: "bold", color: grey }}>
          Easy 30 days returns and exchanges
        </Text>
        <Text style={{ color: grey, marginTop: 5 }}>
          Choose to return or exchange for a different size (if available)
          within 30 days
        </Text>
      </View>
      <View style={styles.sizeContainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontWeight: "bold", color: grey }}>Select Size</Text>
          <Text style={{ color: "red", fontWeight: "bold" }}>Size Chart</Text>
        </View>
        <View style={styles.sizeCircleContainer}>
          {Object.keys(products[0].sizes).map((size, idx) => (
            <View
              style={{
                justifyContent: "space-evenly",
                height: 80,
                paddingHorizontal: 5,
              }}
              key={size}
            >
              <View key={size} style={styles.sizeCircle}>
                <Text>{size}</Text>
              </View>
              {
                <View
                  style={{
                    borderColor:
                      products[0].sizes[size] < 5 ? "red" : "transparent",
                    borderWidth: 1,
                    padding: 2,
                    width: 45,
                    alignItems: "center",
                    borderRadius: 3,
                  }}
                >
                  <Text style={{ fontSize: 13 }}>
                    {products[0].sizes[size] < 5
                      ? `${products[0].sizes[size]} Left`
                      : ""}{" "}
                  </Text>
                </View>
              }
            </View>
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            mode="contained"
            icon="heart-outline"
            style={{ backgroundColor: "red", width: 170 }}
          >
            WISHLIST
          </CustomButton>
          <CustomButton
            icon="bag-checked"
            mode="contained"
            style={{ width: 170 }}
          >
            ADD TO BAG
          </CustomButton>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  titleContainer: {
    padding: 10,
    backgroundColor: "#fff",
    marginVertical: 5,
  },
  policyContainer: {
    padding: 10,
    backgroundColor: "#fff",
    marginVertical: 10,
  },
  sizeContainer: {
    padding: 20,
    backgroundColor: "#fff",
  },
  productTitle: {
    flexDirection: "row",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  sizeCircle: {
    width: 40,
    height: 40,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    borderColor: "#000",
    borderWidth: 1.2,
  },
  brand: {
    fontWeight: "bold",
    marginRight: 5,
  },
  priceContainer: {
    flexDirection: "row",
  },
  iconContainer: {
    height: 35,
    width: 35,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    backgroundColor: "rgba(255,255,255,0.7)",
  },
  rightIconContainer: {
    flexDirection: "row",
    width: 170,
  },
  sizeCircleContainer: {
    flexDirection: "row",
    marginVertical: 20,
  },
  discount: {
    color: "red",
  },
  originalPrice: {
    marginRight: 8,
    textDecorationLine: "line-through",
    color: grey,
  },
  tax: {
    color: "#35ac7a",
    fontWeight: "bold",
  },
});
export default ProductScreen;
