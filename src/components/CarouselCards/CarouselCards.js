import React, { useRef } from "react";
import { View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { background, lightGrey } from "../../constants/color";
import { data } from "../../data/dummyData";

import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from "../CarouselCardItem/CarouselCardItem";

const CarouselCards = ({
  component,
  loop,
  sliderWidth,
  itemWidth,
  autoplay,
  images=data,
}) => {
  const isCarousel = useRef(null);
  const [index, setIndex] = React.useState(0);
  return (
    <View>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={images}
        renderItem={component}
        sliderWidth={sliderWidth || SLIDER_WIDTH}
        itemWidth={itemWidth || ITEM_WIDTH}
        inactiveSlideShift={2}
        autoplay={autoplay}
        loop={loop}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={images.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: "rgba(0, 0, 0, 0.92)"
        }}
        containerStyle={{paddingVertical:10,backgroundColor:lightGrey}}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
};

export default CarouselCards;
