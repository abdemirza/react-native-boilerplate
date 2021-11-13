import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageFrame = ({ item, index }) => {
  if (item)
    return (
      <View style={styles.container} key={index}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: item.imgUrl,
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>{item.title}</Text>
          <Text style={styles.subHeading}>hidhji</Text>
        </View>
      </View>
    );
  return <></>;
};
const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 230,
    backgroundColor: "#55423d",
    // justifyContent: 'center',
    marginHorizontal: 5,
    alignItems: "center",
  },
  imageContainer: {
    width: "90%",
    height: 160,
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
