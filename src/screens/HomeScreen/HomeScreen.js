import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import CarouselCardItem from "../../components/CarouselCardItem/CarouselCardItem";
import CarouselCards from "../../components/CarouselCards/CarouselCards";
import CircleCategory from "../../components/CircleCategory/CircleCategory";
import CircleCategories from "../../components/CircleCategories/CircleCategories";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import ImageFrame from "../../components/ImageFrame/ImageFrame";
import GridFrame from "../../components/GridFrame/GridFrame";
import ProductCard from "../../components/ProductCard/ProductCard";
const HomeScreen = () => {
  return (
    <ScrollView style={{backgroundColor:'#E8E1D9'}}>
      <CustomHeader title="Home" />
      <CircleCategories />
      <CarouselCards loop={true} autoplay={true} component={CarouselCardItem} />
      <CarouselCards
        itemWidth={200}
        sliderWidth={500}
        loop={true}
        component={ImageFrame}
      />
      <GridFrame />
    </ScrollView>
  );
};

export default HomeScreen;
