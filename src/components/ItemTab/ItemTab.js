import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ItemTab = ({imageUri}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: imageUri ,
        }}
        style={styles.image}
      />
      <Text style={{marginLeft:10}}>Order Now to get it by<Text style={{fontWeight:'bold'}}> 22 Nov 2021</Text> </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 10,
    backgroundColor: "#fff",
  },
  image: {
    height: 60,
    width: 45,
  },
});
export default ItemTab;
