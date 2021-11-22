import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import ProductCard from "../../components/ProductCard/ProductCard";
import { grey } from "../../constants/color";
import { height } from "../../constants/dimensions";
import { products } from "../../data/dummyData";

const ProductsScreen = ({ route }) => {
  const { title } = route.params;
  return (
    <View>
        <FlatList
        style={{height:height-140}}
          data={products}
          numColumns={2}
          ListHeaderComponent={() => (
            <CustomHeader title={title} />
          )}

          renderItem={({ item }) => {
            return <ProductCard key={item.id} product={item} />;
          }}
        //   ListFooterComponent={() => (
        //     <View style={styles.sortFilterContainer}>
        //       <View style={styles.sortContainer}>
        //         <Text>Sort</Text>
        //       </View>
        //       <View style={styles.filterContainer}>
        //         <Text>Filter</Text>
        //       </View>
        //     </View>
        //   )}
        />
         <View style={styles.sortFilterContainer}>
              <View style={styles.sortContainer}>
                <Text>Sort</Text>
              </View>
              <View style={styles.filterContainer}>
                <Text>Filter</Text>
              </View>
            </View>
      </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  sortFilterContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 20,
    height:60,
  },
  sortContainer: {
    width: "50%",
    alignItems: "center",
    borderRightWidth: 0.5,
    borderRightColor: grey,
  },
  filterContainer: {
    width: "50%",
    alignItems: "center",
  },
});
export default ProductsScreen;
