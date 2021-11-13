import React from "react";
import { View, Text, Image } from "react-native";
import CarouselCardItem from "../../components/CarouselCardItem/CarouselCardItem";
import CarouselCards from "../../components/CarouselCards/CarouselCards";
import CircleCategory from "../../components/CircleCategory/CircleCategory";
import CircleCategories from "../../components/CircleCategories/CircleCategories";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import ImageFrame from "../../components/ImageFrame/ImageFrame";
const HomeScreen = () => {
  return (
    <View>
      <CustomHeader title="Home" />
      <CircleCategories />
      <CarouselCards loop={true} component={CarouselCardItem} />
      <CarouselCards
        itemWidth={200}
        sliderWidth={500}
        loop={true}
        component={ImageFrame}
      />
    </View>
  );
};

export default HomeScreen;
