import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { frameColor } from '../../constants/color';

const ImageFrame = ({ item, index,width=200,height=230,frameColor }) => {
  if (item!==undefined)
    return (
      <View style={[styles.container,{width,height}]} key={index}>
        <View style={[styles.imageContainer,{backgroundColor:frameColor}]}>
          <Image
            source={{
              uri: item.imgUrl,
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>{item.title}</Text>
          <Text style={styles.subHeading}>{item.body}</Text>
        </View>
      </View>
    );
  return <></>;
};
const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 230,
    backgroundColor: frameColor,
    // justifyContent: 'center',
    marginHorizontal: 5,
    alignItems: "center",
  },
  imageContainer: {
    width: "85%",
    height:"70%",
    backgroundColor: "white",
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  heading: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  subHeading: {
    color: "#fff",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
});
export default ImageFrame;
