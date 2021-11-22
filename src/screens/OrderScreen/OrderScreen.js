import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector } from "react-redux";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import OrderCard from "../../components/OrderCard/OrderCard";
import { grey } from "../../constants/color";
import { addOrder } from "../../state/actions";

const OrderScreen = () => {
  const orders = useSelector((state) => state.orders.orders);
const ordersComponent = orders.map((order,idx)=><OrderCard key={idx} order={order} />)
  return (
    <ScrollView>
      <CustomHeader title="Orders" mode="home" />
      <View style={styles.filterContainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Showing</Text>
          <Text style={{fontWeight:'600',marginHorizontal:5}}>All Orders</Text>
        </View>
        <View style={styles.filterButton}>
          <Icon name="filter-variant" size={20} />
          <Text style={styles.filter}>FILTER</Text>
        </View>
      </View>
      <View style={styles.orderContainer}>
          {ordersComponent}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  filterContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
    paddingHorizontal:10,
    paddingVertical:5,
    alignItems: "center",
  },
  filterButton: {
      padding:5,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderColor:grey,
      borderWidth:1,
      borderRadius:3,
      width:80,
  },
  filter:{
      fontWeight: "500",
  },
});
export default OrderScreen;
