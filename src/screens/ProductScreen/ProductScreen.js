import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import CarouselCards from "../../components/CarouselCards/CarouselCards";
import ProductCarouselItem from "../../components/ProductCarouselItem/ProductCarouselItem";
import { green, grey, orange } from "../../constants/color";
import { products } from "../../data/dummyData";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/core";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../state/actions";
import  'react-native-get-random-values';
import { nanoid } from 'nanoid'

const ProductScreen = ({route}) => {
  const {product} = route.params;
  const navigation = useNavigation();
  const [size,setSize] = React.useState(null);
  const dispatch = useDispatch();
  const discount = Math.round(
    ((product.originalPrice[0] - product.price[0]) /
      product.originalPrice[0]) *
      100
  );
  const sizeHandler = (size)=>{
    setSize(size);
  }
  const bagHandler = ()=>{
    const item = {
      id:nanoid(),
      brand:product.brand,
      title:product.title,
      size: size,
      price:product.price[0],
      originalPrice:product.originalPrice[0],
      imageUri:product.images[0]
    }

    dispatch(addItem(item))
  }

  return (
    <ScrollView>
      <CarouselCards
        loop={true}
        images={product.images}
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
            <Text style={styles.brand}>{`${product.brand}  `}</Text>
            {product.title}
          </Text>
        </View>
        <View style={styles.priceContainer}>
          <Text
            style={styles.originalPrice}
          >{`₹ ${product.originalPrice[0]}`}</Text>
          <Text style={styles.brand}>{`₹ ${product.price[0]}`}</Text>
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
          <Text style={{ color: orange, fontWeight: "bold" }}>Size Chart</Text>
        </View>
        <View style={styles.sizeCircleContainer}>
          {Object.keys(product.sizes).map((localSize, idx) => (
            <Pressable  key={localSize} onPress={()=>sizeHandler(localSize)}>
            <View
              style={{
                justifyContent: "space-evenly",
                height: 80,
                paddingHorizontal: 5,
              }}
        
            >
              <View key={localSize} style={[styles.sizeCircle,{borderColor:size==localSize?orange: '#000'}]}>
                <Text>{localSize}</Text>
              </View>
              {
                <View
                  style={{
                    borderColor:
                      product.sizes[localSize] < 5 ? orange : "transparent",
                    borderWidth: 1,
                    padding: 2,
                    width: 45,
                    alignItems: "center",
                    borderRadius: 3,
                  }}
                >
                  <Text style={{ fontSize: 13 }}>
                    {product.sizes[localSize] < 5
                      ? `${product.sizes[localSize]} Left`
                      : ""}{" "}
                  </Text>
                </View>
              }
            </View>
            </Pressable>
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            mode="contained"
            icon="heart-outline"
            style={{ backgroundColor: orange, width: 170 }}
          >
            WISHLIST
          </CustomButton>
          <CustomButton
            icon="bag-checked"
            mode="contained"
            style={{ width: 170 }}
            disabled={size===null}
            onPress={()=>bagHandler()}
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
    color: green,
    fontWeight: "bold",
  },
});
export default ProductScreen;
