import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageFrame from "../ImageFrame/ImageFrame";
import { headline, highlight } from '../../constants/color';
import { data } from "../../data/dummyData";

const GridFrame = () => {
  return (
    <View
      style={{
        alignItems: "center",
        marginTop: 20,
        backgroundColor: highlight,
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation:6,
      }}
    >
      <Text style={{ alignSelf: "flex-start", marginLeft:10,paddingTop:10 ,color:headline}}>
        TOP PICKS OF THE SEASON
      </Text>
      <View style={styles.container}>
        <ImageFrame width={170} height={210} item={data[0]} />
        <ImageFrame width={170} height={210} item={data[1]} />
      </View>
      <View style={styles.container}>
        <ImageFrame width={170} height={210} item={data[2]} />
        <ImageFrame width={170} height={210} item={data[3]} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    width: "100%",
    justifyContent: "space-between",
  },
});
export default GridFrame;
